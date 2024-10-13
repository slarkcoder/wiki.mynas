# 常见功能设置

:::warning 警告
如果你不明白自己在做什么，请不要随意修改 PVE 中的设置。
:::

打开 `PVE` 管理后台，会提示登录，语言可以选择中文。

![k5c23woo.1me_CaGu6T](https://img.slarker.me/wiki/k5c23woo.1me_CaGu6T.png)

## PVE 系列教程

如果你是小白，想学习 PVE，推荐观看群友 `@红茶海` 的 [系列视频教程](https://space.bilibili.com/2093259559)。零基础入门，对小白友好！

哔哩哔哩：[喝红茶聊技术](https://space.bilibili.com/2093259559)。

## 关闭虚拟机

如果需要修改虚拟机设置，或者给虚拟机添加 USB 设备，需要 **先关闭虚拟机**。

关机有两种办法：可以直接在虚拟机中关闭系统（比如群晖系统的关机按钮），或者也可以如下图所示直接在 PVE 中点 `停止` 按钮关机。

![rg0napgj.nek_HdkpXP](https://img.slarker.me/wiki/rg0napgj.nek_HdkpXP.png)

## 查看配置

在 PVE 中点击 `概要` 可以查看机器配置。

![TVR47P_lmekU7](https://img.slarker.me/wiki/TVR47P_lmekU7.png)

机器的所有硬件资源（直通的设备除外）都由 PVE 来管理，包括内存，CPU，网卡，硬盘，USB 接口等等。

使用 PVE 安装的 All in one 系统，一般会将 SATA 控制器直通给 NAS，将部分网口（PVE 管理口不需要直通）直通给 iStoreOS（软路由），直通的设备就由对应的虚拟机直接管理。

## 修改虚拟机内存

PVE 作为一个系统，本身也需要一些内存来稳定运行，所以分配内存的时候，所有虚拟机的内存容量之和不能超过物理内存容量，并且至少要预留 1G 的内存给 PVE。

以 8GB 的物理内存为例，预留 1GB 给 PVE，分配 1GB 给 iStoreOS，剩下的 6GB 都可以分配给群晖。

如果想修改内存大小，关闭虚拟机之后，修改对应的硬件设置。

![RH0SEa_yYOHAc](https://img.slarker.me/wiki/RH0SEa_yYOHAc.png)

只修改 `内存` 这一项即可，`最小内存` 保持默认不需要修改。修改完成之后，启动虚拟机即可。

:::warning 注意
这里的内存单位是 MB，1GB = 1024MB，可以按实际需求换算填写。

PVE 的内存分配逻辑是：虚拟机启动后 PVE 会立即分配设定的所有内存给虚拟机，因此在 PVE 中会看到内存占用很高，这是正常的。
:::

![Snipaste_2024-05-30_21-55-21_Xr9i1g](https://img.slarker.me/wiki/Snipaste_2024-05-30_21-55-21_Xr9i1g.png)

## PVE 虚拟机如何分配 CPU 核心?

假如宿主机 CPU 一共有 4 个物理核心，虚拟机 A 分配 2 核，虚拟机 B 分配 2 核，虚拟机 C 分配 4 核，这样也是可以的。A，B，C 三台虚拟机分配的核心数之和可以大于 4，但任何一台虚拟机分配的核心数都不能超过物理核心数。

虚拟机分配的 CPU 核心并不代表可以独占该部分资源，PVE 会根据具体情况动态分配 CPU 资源。

## 添加外接 USB 设备

所有的 USB 设备也都由 PVE 来管理，因此如果需要外接 USB 鼠标，USB 移动硬盘到虚拟机中，也要在 PVE 中设置。

在主板自带的 USB 接口插上你需要添加的 USB 设备。PVE 中对应的虚拟机关机之后，在 `硬件` 中添加 USB 设备。

![ild0aqcm.2ke_zbDS87](https://img.slarker.me/wiki/ild0aqcm.2ke_zbDS87.png)

添加 USB 设备，`使用 USB 供应商` 或者 `使用 USB 端口`，只要能看到对应的设备都可以。选中设备后，点击添加。

![lhrb33rz.log_MnGdYR](https://img.slarker.me/wiki/lhrb33rz.log_MnGdYR.png)

之后在 `硬件` 中就能看到多出来一个 `USB 设备`，启动虚拟机就能在虚拟机中看到相关的设备。

![1tvqmtss.mg3_REB9ey](https://img.slarker.me/wiki/1tvqmtss.mg3_REB9ey.png)

## 切换 DHCP

PVE 在安装的时候，会要求设置静态 IP，如果装好后想要切换成 DHCP 的方式，自动从路由器获取 IP，可以打开 PVE 的 Shell 输入下面的命令：

```sh
# 进入到 /etc/network
cd /etc/network

# 修改之前，查看网络配置
cat interfaces

# 修改为 DHCP
sed -i -e 's/addr/#addr/g' -e 's/gate/#gate/g' -e 's/static/dhcp/g' interfaces

# 修改之后，查看网络配置，确认 vmbr0 由 static 变成了 dhcp 就可以了
cat interfaces
```

修改完成可以重启 PVE 测试下。

## PVE 如何关机？

关机有两种办法：

- 第一种是直接按一下 NAS 的电源键。
- 第二种是在 `PVE 控制台` -> `PVE 节点` 中点 `关机` 按钮（注意：是关闭 PVE，不是关闭某个虚拟机）。

这两种办法效果一样，都属于正常的关机操作，都会触发 PVE 的关机流程：PVE 会按开机顺序的倒序，依次关闭虚拟机，之后完成关机动作。关机过程需要几分钟，请耐心等待。

![20240530195417_eyKd7r](https://img.slarker.me/wiki/20240530195417_eyKd7r.png)

## PVE 频繁提示登录

有时候会遇到 PVE 每隔几分钟就要求登录，这种情况一般都是系统本地时间不对导致的，可以用下面的命令解决：

```
touch /etc/pve/authkey.pub
touch /etc/pve/authkey.pub.old
```

## 如何在 PVE 中设置 UPS？

PVE 和 fnOS 同样都基于 Debian，在 PVE 中配置 UPS 方法和 fnOS 中完全一样。可以参考教程：

[fnOS 配置 UPS](/fnos/ups.md)

## 如何将 PVE 中闲置的网口作为交换机使用？

可以参考 [设置交换机模式](/basic/bridge_network.md#pve)。

## PVE（All in one）当主路由崩溃的时候，该如何连接到 PVE？

PVE 在安装的时候，都会将一个网口作为 `管理口`，并且会让你设置一个静态 IP，当主路由连不上的时候，你应该用网线将电脑和 `PVE` 的 `管理口` 直连，并且将电脑的有线网卡设置一个和 `PVE` 管理口处于 `同一网段的静态 IP`，这样就可以直接连上 `PVE` 了。

如下图所示，管理口是 `enp1s0`，PVE IP 是 `192.168.2.20`，你应该将你的电脑 IP 设置为一个 `192.168.2.x` 网段的静态 IP。

![](https://img.slarker.me/wiki/dcc372d48c8f4e8eb9f64573e789b01e.png)

## PVE 的虚拟机出问题可以恢复吗？

PVE 有强大的备份恢复功能，只要你提前做好备份就可以恢复。可以备份到 PVE 本地，也可以备份到其它设备上。比如电脑开启 SMB 共享，就可以备份到电脑上。建议喜欢折腾的（尤其是涉及到网络）多做备份。

在 `数据中心` -> `备份` 中，可以添加 `备份` 作业。

![](https://img.slarker.me/wiki/3c69013800dc4ecf80317d94fb679d1a.png)