# 常见的远程访问 NAS 方法

![remote_En32qD](https://img.slarker.me/wiki/remote_En32qD.jpg)

## 最佳方案 - 公网 IPv4/IPv6

- 优点：无须中转，直连，速度最快！
- 缺点：需要将对应的服务端口暴露到公网上。理论上，你可以访问，别人同样也可以访问，如果你的密码比较简单，那别人想进来，也不是什么难事！关于安全，可以看看我写的 [自组 NAS 的远程访问方案，总有一款适合你！](https://slarker.me/remote-nas/)。

如果你的宽带是电信、联通，那可以打电话向运营商申请。如果是移动，基本没希望。如果能申请到，尽量同时让运营商帮你把光猫改桥接，可以用你自己的路由器或者软路由来拨号。

> 如果申请不到公网 IPv4，也可以试试 IPv6，网上也有很多教程，可以试试看。

申请到公网 IP 之后，可以购买一个域名（阿里云，腾讯云，Cloudflare 等等都可以），按下图流程所示设置 DDNS。

![](https://img.slarker.me/wiki/ed3b9d97afc24276a931cf065a819bec.webp)

如果你用 iStoreOS 作为主路由，推荐在 iStoreOS 中设置端口转发，只要 iStoreOS 能获取到 IPv4/IPv6，可以在 iStoreOS 中安装 `DDNS-GO` 插件用来将动态 IP 绑定到你的域名上，安装 `Socat` 插件用来设置端口转发。

如果你想让你的域名也能用上 HTTPS 来确保传输安全，你可以在 iStoreOS 中安装 Lucky 插件，并设置反向代理，申请 HTTPS 证书。

## [比扬云 SD-WAN 组网](https://dash.beyondnetwork.net/)

比扬云也是一个国产的 SD-WAN 组网软件，使用起来也比较简单，相比星空组网，家庭版免费使用（支持 5 个员工账号），而且支持自定义网段，支持各个主流平台客户端，对家庭这个场景来说已经够用了。具体流程如下：

- 创建虚拟网络
- 添加站点（比如 NAS），支持通过 docker 一键添加。
- 创建员工账号
- 安装客户端，登录

目前比扬云的连接速度能跑满带宽，基于虚拟 VPN 的方式也比较安全，可以说是 zerotier，tailscale 等国外虚拟组网产品的最佳国产替代。

具体可以参考教程：[远程访问 - 比扬云 SD-WAN 组网](/basic/beyondnetowork.md)。

## 值得试试 - Zerotier

:::warning 提示
如果你在 Unraid 中使用 docker 安装 `zerotier`，遇到无法远程访问 unraid 管理页面，但其它 docker 服务端口可以正常访问时，可以试试这个解决办法。[解决虚拟组网远程无法访问 80 端口问题](/unraid/remote.md)。
:::

如果申请不到公网 IPv4，可以试试 Zerotier。

- 优点：采用虚拟 VPN 的方式来组建网络，相较于公网 IP 暴露端口的方式，比较安全。
- 缺点：Zerotier 的逻辑是优先尝试直连，如果能够直连，那速度可以等同于公网 IPv4，如果直连不成功，那就走 Zerotier 的中转服务器，这个时候就比较慢。

具体使用可以参考我的教程：[使用 Zerotier 进行内网穿透](https://slarker.me/zerotier)

类似的方案还有 [Tailscale](/fnos/tailscale.md)，原理和 Zerotier 类似。

## 星空组网 - [Starvpn](https://starvpn.cn/)

:::warning 提示
如果你在 Unraid 中使用 docker 安装 `星空组网`，遇到无法远程访问 unraid 管理页面，但其它 docker 服务端口可以正常访问时，可以试试这个解决办法。[解决虚拟组网远程无法访问 80 端口问题](/unraid/remote.md)。
:::

星空组网是一个国产的异地虚拟组网软件，原理也和 Zerotier 类似，但因为服务器在国内，所以连接速度非常快。如果能够实现点对点直连，效果也就和使用公网 IP 一样，如果直连不成功，就走星空组网提供的中转服务器，限速 10Mbps。支持各种客户端，包括 Openwrt，群晖，iOS 和 Android，官网也提供了详细的设置教程，使用起来没难度。

但也有缺点，就是目前不支持自定义路由映射，只能使用网站分配的固定 IP 来访问，这点不如 zerotier 方便。

## 上手简单 - [节点小宝](https://www.iepose.com/)

节点小宝是一款专为远程访问设计的网络利器，支持各种常见的移动，桌面，以及 NAS 客户端。使用也比较简单，在各个客户端上安装节点小宝之后，通过 App 绑定并配置自定义二级域名，就可以顺利的远程访问了。

免费版支持 4Mbps 转发速度，支持添加 4 条穿透通道，每月流量 20G，只要不涉及大文件传输，应对日常的远程访问需求（查看 NAS 状态，管理 BT/PT，备份照片）都可以满足。

![l51Mwl_9ilQxW](https://img.slarker.me/wiki/l51Mwl_9ilQxW.png)