# 一文搞定 Unraid 安装软路由

本文以 [iStoreOS](https://fw.koolcenter.com/iStoreOS/x86_64/) 为例来介绍如何在 Unraid 中安装软路由。IStoreOS 基于 OpenWrt 开发，在易用性上做了很多优化，系统支持在线更新。

由于是国内公司开发的系统，默认并不含有代理功能。如有代理需求，可以看这里：

[iStoreOS 代理插件到哪里下载？](/basic/question.html#istoreos代理插件到哪里下载)

## 各种常见网络拓扑的区别

在安装软路由之前，可以先仔细看看下面这个图，了解各种网络拓扑的区别。

![main_router.drawio_9x2DFh](https://img-1255332810.cos.ap-chengdu.myqcloud.com/main_router.drawio_9x2DFh.svg)

## 旁路由（单网口）

如果你的设备只有一个网口，那可以设置为旁路由。

因为我们装的 iStoreOS 只有一个虚拟网卡，开机后会自动从主路由获取 IP 地址。

![P5fuml_LHABaf](https://img-1255332810.cos.ap-chengdu.myqcloud.com/P5fuml_LHABaf.png)

浏览器打开该 IP，就可以登录旁路由了。默认用户名/密码：root/password。

登录之后，直接点击首页的网络向导，设置为旁路由模式。

![si1yxa1r.ke0_ncNe0K](https://img-1255332810.cos.ap-chengdu.myqcloud.com/si1yxa1r.ke0_ncNe0K.png)

点击 `配置为旁路由`。

![BXn4qF_39KVlS](https://img-1255332810.cos.ap-chengdu.myqcloud.com/BXn4qF_39KVlS.png)

可以直接点 `自动配置`。

![pbi1225x.sig_qD2m9X](https://img-1255332810.cos.ap-chengdu.myqcloud.com/pbi1225x.sig_qD2m9X.png)

点击 `点此刷新`，会自动刷新当前连接信息，点击 `自动填写`。

![0qsqklj0.le0_yaUwUg](https://img-1255332810.cos.ap-chengdu.myqcloud.com/0qsqklj0.le0_yaUwUg.png)

如果需要修改旁路由 IP，可以在这里修改，关闭 `提供 DHCPv4 服务`，打开 `开启 NAT`，最后点击 `保存配置`。

![hs35odhz.4ej_49Iqxd](https://img-1255332810.cos.ap-chengdu.myqcloud.com/hs35odhz.4ej_49Iqxd.png)

到这里旁路由就设置好了。

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