# 远程访问 fnOS - 比扬云 SD-WAN 组网

:::info 提示
目前比扬云已上架飞牛应用市场，推荐直接通过应用市场安装。
:::

[比扬云 SD-WAN 组网](https://dash.beyondnetwork.net/) 是一个虚拟组网工具，和星空组网以及国外的 zerotier，tailscale 类似，可以将你分散在各地的设备连接起来，组成一个虚拟的网络，便于远程访问。

比扬云 SD-WAN 服务家庭版免费使用，提供最多 5 个员工账号，并且不限速，支持创建自定义网段，对于家庭用户来说非常合适，而且足够使用。加上基于虚拟 VPN 的方式来提供连接，相对于使用公网 IP 需要对外暴露端口，这种组网方式也显得比较安全。

本篇就以 fnOS 为例介绍如何使用比扬云 SD-WAN。

:::warning 提示
由于这种组网技术依赖于官方的服务器，所以你的远程访问目前走的是官方提供的免费中转服务器，为了避免滥用资源，请注意官方的提示：

`为了营造良好的体验环境，请不要长时间占用大带宽，否则会触发小黑屋机制进行限速`。

比扬云官方也正在内测 `IPv6 直连` 功能，期待后续会有更好的体验！
:::

## 创建虚拟网络

首先打开[比扬云控制台](https://dash.beyondnetwork.net/)，注册账号。登录后到 `SD-WAN 组网` 下面的 `我的网络` 中创建 `虚拟网络`，`名称` 自己起一个，这里我填的 `slark 的网络`。

![](https://img.slarker.me/wiki/20250306144731218.webp)

## 添加站点

在 `站点管理` 中选择上一步创建的网络，点击 `添加站点`。这一步的作用就是要把 NAS 加到网络里。

![](https://img.slarker.me/wiki/20250306145219631.webp)

站点名称这里我直接填 `fnOS`。网络选择创建好的虚拟网络，站点网段填 fnOS 所在的网段。比如我的 fnOS IP 是：`192.168.2.2`，那这里网段就填：`192.168.2.0/24`。

> 支持自定义网段的好处就是你可以不需要在各种网络环境中来回修改 IP 地址，如果你之前用过星空组网就能体会到这一点。

## 激活站点

添加站点之后你可以看到一个 `站点标识`，接下来要 `激活站点`。也就是要在 NAS 里运行一个 docker 应用，通过这个 docker 应用把 `fnOS` 连到虚拟网络里。

![](https://img.slarker.me/wiki/20250306145915091.webp)

在飞牛中使用下面的 compose 配置来安装 docker 应用：

:::info 提示
请把 xxxx 替换为自己的 `站点标识`
:::

```yml
name: beyondnetwork
services:
    edge:
        container_name: beyondnetwork_edge
        privileged: true
        network_mode: host
        restart: always
        dns:
            - 8.8.8.8
            - 114.114.114.114
        environment:
        # 请把 xxxx 替换为自己的 站点标识
            - EDGE_KEY=xxxx
        image: registry.cn-shenzhen.aliyuncs.com/beyondnetwork/edge
```

Compose 安装完成之后，可以在控制台里看到状态变成了 `在线`。

## 员工账号

最后添加员工账号，这个 `员工账号` 就是用来在客户端登录的账号，你可以按自己的实际需求，给每个家庭成员创建一个 `员工账号`。需要远程访问的时候，就打开客户端，使用员工账号登录。

[下载比扬云了 SD-WAN 客户端](https://dash.beyondnetwork.net/console/sdwan/download)。

登录之后，你就可以像在家里的局域网中一样，来连接使用 NAS 了，不管是通过网页，还是飞牛 App，都可以直接访问，而且速度非常不错。

![](https://img.slarker.me/wiki/Screenshot_2025-03-06-15-10-21-902_com.android.chrome.webp)