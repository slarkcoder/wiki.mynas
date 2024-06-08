# 一文搞定 Unraid 安装软路由

本文以 [iStoreOS](https://fw.koolcenter.com/iStoreOS/x86_64/) 为例来介绍如何在 Unraid 中安装软路由。IStoreOS 基于 OpenWrt 开发，在易用性上做了很多优化，系统支持在线更新。

由于是国内公司开发的系统，默认并不含有代理功能。如有魔法需求，可以看这里：

[iStoreOS 魔法插件到哪里下载？](/basic/question.html#istoreos魔法插件到哪里下载)

## 各种常见网络拓扑的区别

在安装软路由之前，可以先仔细看看下面这个图，了解各种网络拓扑的区别。

![main_router.drawio_9x2DFh](https://img-1255332810.cos.ap-chengdu.myqcloud.com/main_router.drawio_9x2DFh.svg)

## 旁路由（单网口）

如果你的设备只有一个网口，那可以安装旁路由。

下载 iStoreOS 镜像并解压，将 img 镜像上传到 Unraid 的 domains 文件夹中。

在虚拟机中新建 Linux 虚拟机，按照下图设置。

![](https://img-1255332810.cos.ap-chengdu.myqcloud.com/20231208004127_wfgCDv.png)

设置完成之后，点击创建，之后虚拟机会启动。打开虚拟机的 VM Console（VNC）就可以看到虚拟机的启动过程。

启动完成之后，可以编辑（可以用 vi 命令编辑） `/etc/config/network` ，为旁路由设置一个静态 IP。比如我这里把旁路由的 IP 改成了 `192.168.2.100`，其它都保持默认，不需要修改。

![](https://img-1255332810.cos.ap-chengdu.myqcloud.com/dvh1QC_pIPTdG.png)

设置完成之后，将 Unraid 的默认网关和 DNS 服务器都修改为旁路由的 IP，Unraid 就可以通过旁路由来上网了。

## 主路由（多网口）

如果你的设备有多个网口，在 Unraid 里，可以很方便安装主路由。这里分两种情况，对于网卡能够直通的设备，可以使用直通的方式来添加网卡，对于直通时如果出错的设备，可以使用桥接的方法来添加网卡。

### 网卡直通

在 `工具 -> 系统设备`  里勾选需要直通的网卡，重启生效。

![](https://img-1255332810.cos.ap-chengdu.myqcloud.com/20231208005316_W54ool.png)

虚拟机建立过程和上面的旁路由一致，不过这里需要再勾选上直通的网卡。

![](https://img-1255332810.cos.ap-chengdu.myqcloud.com/20231208005547_JvLatS.png)

虚拟机启动之后，编辑（可以用 vi 命令编辑） `/etc/config/network` 修改网络设置。这里需要说明一下，我用的这个机器是双网口，在 iStoreOS 中需要把 LAN 口设置为桥接的 eth0，WAN 口设置为直通的物理网卡 eth1。

一般情况下，软路由中默认的 eth0 都是桥接的网卡，可以作为 LAN 口，其它的网卡（比如直通的网卡）可以作为 WAN 口。

![](https://img-1255332810.cos.ap-chengdu.myqcloud.com/5dsGV0_wQ2pnl.png)

除了修改网卡之外，再把 LAN 口的 IP 设置好就可以了。

### 桥接网卡

在把物理网卡加到虚拟机的时候，如果出现报错，那就可以用桥接的方式来添加网卡了。

在 Unraid 网络设置中，eth0 的桥接默认已经开启，将 eth1 的启用桥接设置为 `是`。

![](https://img-1255332810.cos.ap-chengdu.myqcloud.com/20231208020629_fjnrR0.png)

创建虚拟机的过程和上面一致，在网卡部分，添加一个 `br2` 的网卡，随机生成一个 mac 地址即可。剩下的操作和上面的多网口一样，这里不再赘述。