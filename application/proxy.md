# 使用 Docker 搭建透明代理

透明代理可以仅给真正有需要的应用提供代理服务，相比旁路由虽然略显麻烦，但是网络结构清晰简单，能避免很多麻烦，比如就不会出现 PT 流量走代理导致被识别为盒子的问题。可以说，透明代理是 NAS 应用访问外网的最佳实现方式。

> v2raya 和 mihomo 的 compose 文件都可以从 [Docker Compose 模板](/application/compose.md) 中获取。

## V2rayA

:::info 提示 
- v2rayA 是一个支持全局透明代理的 V2Ray 客户端，同时兼容 SS、SSR、Trojan(trojan-go)、Tuic 与 Juicity协议。 
- v2rayA 致力于提供最简单的操作，满足绝大部分需求。
- 得益于 Web 客户端的优势，你不仅可以将其用于本地计算机，还可以轻松地将它部署在路由器或 NAS 上。
:::

```yml
version: '3.8' 
services:
  v2raya:
    image: mzz2017/v2raya
    restart: always
    container_name: v2raya
    network_mode: host 
    privileged: true 
    cap_add:  
      - NET_ADMIN
      - SYS_MODULE
    ports:
      - "2017:2017"
      - "7890:7890"
    volumes:
      - ./etc:/etc/v2raya
```

- V2rayA 的 WebUI 端口：2017
- HTTP/HTTPS 协议：20171
- SOCKS 协议：20170

如有使用疑问，可以查阅[官方文档](https://v2raya.org/)。

## Mihomo（Clash Meta）

:::info 提示
Mihomo 原名 Clash Meta，是基于广受欢迎的开源网络代理工具 Clash 开发的增强网络代理工具。它不仅继承了 Clash 的核心功能，还增加了一些独特的特性，如支持更多的出站传输协议和复杂的规则控制等。
:::

下面的配置文件包含了两个 docker，其中 mihomo 为核心，metacubexd 为控制 UI。

```yml
services:
  mihomo:
    container_name: mihomo
    image: metacubex/mihomo
    restart: always
    pid: host
    ipc: host
    network_mode: host
    cap_add:
      - ALL
    security_opt:
      - apparmor=unconfined
    volumes:
      - ./:/root/.config/mihomo
      # 共享host的时间环境
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
  
  metacubexd:
    container_name: metacubexd
    image: ghcr.io/metacubex/metacubexd
    restart: always
    network_mode: bridge
    ports:
      - '9097:80'
    volumes:
      - ./metacubexd:/config/caddy
      # 共享host的时间环境
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
```

除此之外，还需要在 compose 配置文件的同级文件夹中放入 clash 的 `config.yaml` 配置文件（如果你使用机场，可以从机场后台获取），以及用来识别 ip 地址的 `geoip.dat`，`geosite.dat` 文件。

> geoip.dat，geosite.dat 文件可以到这里下载：https://github.com/MetaCubeX/meta-rules-dat，也可以从 [Docker Compose 模板](/application/compose.md) 中获取。

- metacubexd 的 WebUI 端口：9097
- HTTP/HTTPS 协议：7890
- SOCKS 协议：7891

Compose 安装成功之后，打开 metacubexd 的 WebUI 需要输入 mihomo 的地址，具体为 `http://NAS IP:9090`。

![](https://img.slarker.me/wiki/20250921204348988.webp)

## 如何使用？

如果有其它 Docker 应用需要使用上述代理服务，以 Metube 这个视频下载应用为例，可以直接在 Compose 中添加如下配置（environment 部分）：

```yml
name: metube
services:
  metube:
    image: alexta69/metube:latest
    container_name: metube
    restart: always
    ports:
      - 8081:8081
    volumes:
      - /vol2/1000/downloads:/downloads
    environment:
      # 192.168.2.2 为我的 NAS IP
      - HTTP_PROXY=http://192.168.2.2:7890
      - HTTPS_PROXY=socks5://192.168.2.2:7891
```

也有的应用支持在自己的 UI 中直接设置代理，比如下面是 Cloud Saver 的代理设置页面：

![](https://img.slarker.me/wiki/20250921205543386.webp)

如果想要在 Window 中使用，可以在 Windows 中搜索代理，以 `Mihomo` 为例设置如下：

![](https://img.slarker.me/wiki/20251002115806178.webp)