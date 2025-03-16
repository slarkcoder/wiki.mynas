# 使用 LXC 容器安装 qBittorrent

:::info 什么是 LXC？
LXC（Linux Containers）是一种 Linux 端操作系统级的虚拟化技术，可以实现轻量级容器，每个容器看起来像一个独立的操作系统，它们共享同一台物理服务器，但是互相隔离。LXC 容器比传统虚拟机更加轻便、高效，且启动速度快。LXC 中创建的为非特权容器，相较于特权容器，其有更高的安全性，更小的攻击面，同时便于管理和升级。
:::

本篇教程虽然步骤较多，但是没什么坑，原理也简单。

首先介绍我的环境：

- fnOS：192.168.2.2，共享目录：downloads
- LXC：192.168.2.4，挂载目录：/mnt/downloads

需要将 fnOS 的 NFS 共享 `downloads` 目录挂载到 LXC 中的 `/mnt/downloads` 下面，然后在 1Panel 中通过 docker compose 安装 qBittorrent。

## 为什么要使用 LXC？

经常使用 qBittorrent 的朋友都知道，如果 qBittorrent 安装在 NAS 中，而 NAS 又通过具有代理功能的主路由上网，很容易导致 qBittorrent 的流量走代理，不仅可能会把代理的流量跑光，而且可能会被 PT 站识别为盒子，严重的还会违反网站规则被封号。

常见的办法是通过 macvlan 给 qBittorrent 设置一个独立的 IP，这样就可以在主路由中通过 IP 来设置规则，避免 qBittorrent 流量走代理。但 macvlan 的网络结构还是略显复杂，误操作容易导致 NAS 系统出问题。而且在 fnOS 中，需要开启 OVS（虚拟交换机）才能创建 macvlan，**目前开启 OVS 可能在重启后会导致 fnOS 系统失联**。

所以如果有 PVE 这个环境，完全可以利用 PVE 的 LXC 来安装 qBittorrent，这样 qBittorrent 也能得到一个单独的 IP，方便在主路由的代理中设置规则，达到和 macvlan 类似的效果。

## 创建 LXC

在 PVE 的 `CT 模板` 中下载 `debian-12` 模板：

![](https://img.slarker.me/wiki/Snipaste_2025-03-16_20-50-43.webp)

在 PVE 的右上角点击 `创建 CT` 创建 LXC 容器，设置主机名和密码，取消勾选 `无特权的容器`：

![](https://img.slarker.me/wiki/Snipaste_2025-03-16_20-52-13.webp)

磁盘保持默认，CPU 可以选择 `2` 核，内存（MB）和 Swap 设置为 `1024`，接下来设置网络，这里给 LXC 设置一个 `静态 IP`（192.168.2.4），DNS 保持默认：

![](https://img.slarker.me/wiki/Snipaste_2025-03-16_20-53-53.webp)

在创建好的 LXC 容器的 `选项` 中，打开 LXC 功能，勾选 `NFS` 和 `嵌套`：

![](https://img.slarker.me/wiki/Snipaste_2025-03-16_20-54-43.webp)

之后 `启动` LXC。

## 更换 Linux 源

首先进入 LXC 的控制台，输入用户名（默认为 `root`），密码登录。

更新系统，安装 `curl`：

```sh
apt update
apt install curl
```

执行换源脚本：

```sh
bash <(curl -sSL https://linuxmirrors.cn/main.sh)
```

遇到选项提示，推荐使用下面的设置：

- 软件源选择：`中国科学技术大学`
- 软件源是否使用 HTTP 协议：`否`
- 是否跳过更新软件包：`否`
- 是否自动清理下载缓存：`是`

## 安装 Docker

一键安装 docker 引擎：

```sh
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
```

遇到选项提示，推荐使用下面的设置：

- `Docker CE` 源选择：`中国科学技术大学`
- `Docker Registry` 源选择：`Docker Proxy（推荐）`
- 软件源是否使用 HTTP 协议：`否`
- 是否安装最新版本的 `Docker Engine`：`是`

## 安装 1Panel 面板

为了更方便的管理 LXC，你可以安装 [1Panel](https://1panel.cn/)，这是一款开源的服务器管理面板，非常易用，可以通过网页操作管理服务器。

适用于 `Debian` 系统的一键安装命令如下：

```sh
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && bash quick_start.sh
```

安装完成之后，你可以看到一个管理地址以及默认生成的用户名和密码。你可以通过 1Panel 来安装管理 docker 应用。

![](https://img.slarker.me/wiki/Snipaste_2025-03-16_21-11-00.webp)

## 挂载 NFS

这一步将 fnOS 的 NFS 共享目录（downloads）挂载到 LXC 中，便于 docker 应用直接访问。在飞牛中开启 NFS 服务之后，可以看到 nfs 的访问路径如下：

![](https://img.slarker.me/wiki/20250316211724422.webp)

在 LXC 中安装 NFS 客户端：

```sh
apt install nfs-common
```

创建挂载点：

```sh
mkdir -p /mnt/downloads
```

先临时挂载测试是否 OK：

```sh
mount -t nfs4 192.168.2.2:/fs/1000/nfs/downloads /mnt/downloads
```

如果挂载成功，在 1Panel 的文件管理中可以看到 `/mnt/downloads` 路径下面有 fnOS 的文件。

![](https://img.slarker.me/wiki/20250316212319383.webp)

## 设置开机自动挂载

如果上面的临时挂载测试没问题，使用 `1Panel` 的文件管理器打开 `/etc/fstab` 文件，加入下面这行：

```sh
192.168.2.2:/fs/1000/nfs/downloads /mnt/downloads nfs defaults 0 0
```

之后点击 `确认`，可以重启 LXC 确认自动挂载是否生效。

## 使用 1Panel 通过 compose 安装 qBittorrent

在 1Panel 的 `容器` -> `编排` -> `创建编排` 中，填写文件夹名称 `qbittorrent`，compose 使用下面的配置：

```yml
name: qbittorrent
services:
  qbittorrent:
    image: linuxserver/qbittorrent:4.6.7
    container_name: qbittorrent
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Asia/Shanghai
      - WEBUI_PORT=8080
      - TORRENTING_PORT=50000
    volumes:
      - ./config:/config
      - /mnt/downloads:/downloads #optional
    ports:
      - 8080:8080
      - 50000:50000
      - 50000:50000/udp
    restart: always
```

之后点击 `确认`，就会自动安装 qBittorrent。安装完成之后，qBittorrent 的默认用户名为 `admin`，默认密码在容器日志中可以看到。

## 设置访问控制规则

以 SSRP 为例，可以在 `访问控制` 中，将 LXC 的 IP：`192.168.2.4` 添加到 `不走代理的局域网 LAN IP` 中：

![](https://img.slarker.me/wiki/20250316224034674.webp)

之后 `保存并应用`，这样就不用担心 BT/PT 流量走代理或者被识别为盒子了。