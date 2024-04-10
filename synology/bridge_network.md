# 设置交换机模式

## 最常见的网络拓扑

大部分情况下，我们的网络拓扑应该是这样的：

![synology_network.drawio_EiQOJh](https://img.slarker.me/blog/synology_network.drawio_EiQOJh.svg)

电脑和 NAS 都通过网线直连路由器，或者直连路由器下面的交换机。

使用这种最常见的网络拓扑，如果电脑有 2.5G/10G 网口，NAS 也有 2.5G/10G 网口，想让电脑和 NAS 之间可以跑满 2.5G/10G，那就要求路由器或者交换机至少需要两个 2.5G/10G 网口，分别把电脑和 NAS 的 2.5G/10G 网口插到路由器或者交换机的 2.5G/10G 网口，这样才能确保传输速度可以跑满 2.5G/10G 带宽。

## 交换机模式

虽然上面这种网络拓扑最常见，也最简单，但对设备要求比较高，比如路由器或者交换机必须至少有两个 2.5G/10G 网口。目前带多个 2.5G 网口的交换机很多，也很便宜，但带多个 10G 网口的路由器或者交换机就比较贵，有没有更简单的办法来满足需求呢？

当然是有的，如果你的 NAS 有多个网口，可以在 NAS 上设置桥接，把 NAS 的 2.5G/10G 网口当成交换机来用，这样你的电脑就可以直接把 2.5G/10G 网口接到 NAS 的 2.5 G/10G 网口，既可以正常通过 NAS 来上网，也可以实现传输文件跑满带宽。 具体网络拓扑如下：

![synology_network.drawio3_egeUhs](https://img.slarker.me/blog/synology_network.drawio3_egeUhs.svg)

上图中的 NAS 具有一个千兆口，一个 2.5G/10G 网口，设置好交换机模式之后，把千兆口接到路由器上，2.5G/10G 网口和 `电脑 2` 的 2.5/10G 网口相连，这样电脑 2 就可以通过 NAS 上网，同时和 NAS 之间的传输速度也能达到 2.5G/10G 速度。

## 如何设置？

以下面这台带千兆 + 双万兆网口的群晖为例，先把千兆网口接到路由器上。

### 启用 Open vSwitch

打开 `控制面板` -> `网络` -> `网络界面` -> `管理` -> `Open vSwitch 设置`，勾选 `启用 Open vSwitch` 并确定。

![XPjbNQ_D6FmC7](https://img.slarker.me/blog/XPjbNQ_D6FmC7.png)

### 查看当前网络

在 `控制面板` -> `网络` -> `网络界面` 中可以看到当前的网络连接状态。

![upi5hb4s.oxh_KWdA4l](https://img.slarker.me/blog/upi5hb4s.oxh_KWdA4l.png)

前面已经说了，这台 NAS 上的网卡只有三个，分别是千兆和双口万兆。目前 NAS 只有千兆网卡连接了路由器，所以显示 `已联机` 的 `局域网 1` 就是千兆网卡，显示 `尚未联机` 的 `局域网 2` 和 `局域网 3` 就是两个万兆网卡。

### Linux 中的网卡对应关系

[使用 SSH 登录群晖](/synology/ssh.md)，并切换到 `root` 用户，使用下面的命令查看当前的网络配置：

```sh
ifconfig
```

下面这张图是启用 `Open vSwitch` 之前的网络配置：

![1mlkyale.ev2_qnqpGe](https://img.slarker.me/blog/1mlkyale.ev2_qnqpGe.png)

下面这张图是启用 `Open vSwitch` 之后的网络配置：

![FMTgqF_epmJyh](https://img.slarker.me/blog/FMTgqF_epmJyh.png)

通过网卡 IP 可以判断，上面两张图中，eth0 就是千兆网卡，eth1 和 eth2 就是两个万兆网卡。对比可以看到，启用 `Open vSwitch` 之前，NAS 直接通过千兆物理网卡上网。启用 `Open vSwitch` 之后，系统为每个物理网卡分别生成并绑定了一个虚拟的交换机（`ovs_eth0`，`ovs_eth1`，`ovs_eth2`），而现在的联网方式变成了通过这个虚拟交换机 `ovs_eth0` 上网。

网卡、虚拟交换机之间的对应关系如下表：

| `网络界面` 中显示的网络       |      ifconfig 命令显示的对应网卡      |  绑定的虚拟交换机 | 物理网卡 |
| ------------- | :-----------: | :----: | ----: |
| 局域网 1      |  eth0 | ovs_eth0 | 千兆网卡 |
| 局域网 2      |   eth1    |   ovs_eth1 | 万兆网卡 1 |
| 局域网 3 |   eth2    |    ovs_eth2 | 万兆网卡 2 |

### 设置虚拟交换机

我们需要做的就是将 `万兆网卡 1` 和 `万兆网卡 2` 绑定的虚拟交换机删掉，然后把 `万兆网卡 1` 和 `万兆网卡 2` 都添加到千兆网卡绑定的虚拟交换机 `ovs_eth0` 中，这样这三个网口就都可以通过 `ovs_eth0` 这个虚拟交换机来上网，也就实现了交换机模式。

使用下面的命令来删除绑定的虚拟交换机：

```sh
# 删除万兆网卡 1 绑定的虚拟交换机 ovs_eth1
ovs-vsctl del-br ovs_eth1
# 删除万兆网卡 2 绑定的虚拟交换机 ovs_eth2
ovs-vsctl del-br ovs_eth2
```

删除之后可以重新使用 `ifconfig` 查看下当前的网络配置：

![z1ncz00g.qok_X6wJQM](https://img.slarker.me/blog/z1ncz00g.qok_X6wJQM.png)

可以看到，`ovs_eth1` 和 `ovs_eth2` 已经被删除了，下面我们把 `eth1` 和 `eth2` 这两个万兆网卡添加到 `ovs_eth0` 中：

```sh
ovs-vsctl add-port ovs_eth0 eth1
ovs-vsctl add-port ovs_eth0 eth2
```

添加好之后，使用下面的命令来查看虚拟交换机配置：

```sh
ovs-vsctl show
```

可以看到 `ovs_eth0` 中已经包含了 `eth0`，`eth1`，`eth2` 这三个网卡，说明交换机模式已经设置成功了。

![rzeksrx1.zvi_REiPLE](https://img.slarker.me/blog/rzeksrx1.zvi_REiPLE.png)

现在你就可以把电脑直接接到 NAS 的万兆网卡上，电脑使用 `DHCP` 的模式就可以自动从路由器获取到 IP 上网。在电脑的网络属性中，也可以看到网络的链接速度是 `10G`。

## 开机脚本

由于群晖重启后，会将上面的设置都恢复成默认的 `Open vSwitch` 绑定关系。如果上面的操作都确定没问题，我们这里需要添加一个开机脚本来自动完成上面的设置。

在 `控制面板` -> `任务计划` -> `新增` -> `触发的任务` -> `用户定义的脚本` 中设置任务名称为 `ovs`，切换用户账号为 `root` 用户。

![xns9xs_7h9Fqn](https://img.slarker.me/blog/xns9xs_7h9Fqn.png)

切换到任务设置，填写上面设置虚拟交换机的命令：

```sh
sleep 60
ovs-vsctl del-br ovs_eth1
ovs-vsctl del-br ovs_eth2
ovs-vsctl add-port ovs_eth0 eth1
ovs-vsctl add-port ovs_eth0 eth2
```

![3voWYT_5I1Xcm](https://img.slarker.me/blog/3voWYT_5I1Xcm.png)

设置好之后点击 `确定`，出现系统提示再次 `确定` 之后输入密码提交。

![x95OJE_KboTMf](https://img.slarker.me/blog/x95OJE_KboTMf.png)

可以重启系统测试下是否 OK。