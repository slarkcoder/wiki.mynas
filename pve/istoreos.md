# 虚拟 iStoreOS 旁路由

旁路由在逻辑上和你网络中的 PC，手机没有区别，都是网络中的一个普通设备，仅仅是多了一个流量转发的功能。网络中的其他设备如果需要使用，只需要将设备 IP 设置为静态，把 `网关` 和 `DNS` 指向旁路由的 IP 即可。

旁路由对网口数量没有要求，只需要设备有一个网口就可以。下面就介绍如何在 PVE 中虚拟 iStoreOS 作为旁路由。

## iStoreOS 镜像

iStoreOS 镜像你可以在 [官网下载](https://fw.koolcenter.com/iStoreOS/x86_64/) 并解压得到 `img` 文件。为了减少出错，解压后可以重命名为 `istoreos.img`。

在 PVE 的 `ISO 镜像` 中上传 iStoreOS 的镜像 `istoreos.img`。

![](https://img.slarker.me/wiki/8cfae25a132a4fc5833f63cecd2fc08b.webp)

## 建立虚拟机

在 PVE 中创建虚拟机，名称自己填写，注意这里有个 `VM ID`，是该虚拟机的唯一 `ID` 标识（默认 PVE 会自动分配，不需要修改），后续在 PVE 的 `shell` 终端中可以使用命令通过该 `ID` 操作虚拟机。

![](https://img.slarker.me/wiki/61df2727689e4b97827cf2c0704e78d5.webp)

选择 `不使用任何介质`。

![](https://img.slarker.me/wiki/8722403cbba247e594c78c7a8eed83ac.webp)

系统 BIOS 选择 `q35`。

![](https://img.slarker.me/wiki/2d3e73f99daf4a08b8b32d90e33cd45b.webp)

删除默认的磁盘。

![](https://img.slarker.me/wiki/fe7d94948c4548ea9c24addcadddde85.webp)

CPU 核心可以设置为 `2`，类别一般选择 `host`。

![](https://img.slarker.me/wiki/71cf2d75610245b5a1cb3f9ff07821c0.webp)

内存选择 `1024`，也就是 `1GB`。

![](https://img.slarker.me/wiki/4c022e741f3f49af8d30994fd8df51a8.webp)

网络保持默认。

![](https://img.slarker.me/wiki/a5d129dfad3a4140b028838c1d207478.webp)

确认没问题，点击完成。

![](https://img.slarker.me/wiki/573e913a30d0441ab91be4c96d003be0.webp)

在 PVE 的 `shell` 终端中使用命令导入 iStoreOS 镜像：

:::info 提示
下面命令中的 104 为 iStoreOSTest 虚拟机的 ID。末尾的 local 为虚拟机的存储空间，如果你的 PVE 没有将 local-lvm 合并到 local，那么末尾应该为 local-lvm。
:::

```sh
qm importdisk 104 /var/lib/vz/template/iso/istoreos.img local
```

![](https://img.slarker.me/wiki/f3da02dfcfc94b3daa853c29f623600d.webp)

在 iStoreOSTest 虚拟机的 `硬件` 中双击 `未使用的磁盘 0`，将总线设备修改为 `SATA`，点击 `添加`。

![](https://img.slarker.me/wiki/1c9dadf2d8d44008af3b74ce64edeb5e.webp)

在 iStoreOSTest 虚拟机的 `选项` 中双击 `引导顺序`，仅将 `sata0` 保持勾选，并移动到第一个引导顺序，点击 `OK`。

![](https://img.slarker.me/wiki/8571128ecf3e46ca8ed9252d424d1e2d.webp)

之后启动 iStoreOSTest 虚拟机，后续设置过程请参考：[iStoreOS 路由模式设置](/istoreos/route_setting.md)。