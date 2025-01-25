# fnOS 虚拟 iStoreOS 软路由

:::warning 警告
涉及到网络，硬件直通，虚拟机等操作如果出现误操作，可能会导致系统崩溃，无法正常启动，系统连不上等各种严重问题，请谨慎评估风险后再操作！
:::

![](https://img.slarker.me/wiki/Snipaste_2025-01-22_14-54-23.webp)

![](https://img.slarker.me/wiki/264321737518159_.pic.webp)

大家期待的虚拟机功能，飞牛在 `0.8.36` 这个版本终于支持了！而且支持了 **硬件直通**！下面就教大家如何在多网口的机器上使用飞牛虚拟机安装 iStoreOS 软路由。

- 由于主路由和旁路由设置大部分步骤都完全一样，所以下面以主路由为例，需要设置旁路由的时候会单独说明。
- 以下演示的硬件设备为搭载 Intel 12 代 N100 CPU，板载双 2.5G 网口的机器。

## 前提条件

![](https://img.slarker.me/wiki/Snipaste_2025-01-21_22-33-53.webp)

硬件直通功能需要使用支持 CPU 虚拟化的平台，并且需要开启 IOMMU，包括主板 BIOS 和内核启动参数两部分。飞牛默认内核启动参数没有开启 IOMMU，需要手动开启。

BIOS 设置部分，不同的主板可能有所不同，可以自行查询对应的主板开启。常见的 NAS 主板（比如畅网/倍控/铭微的 N5105/N100/8505 等）BIOS 默认 IOMMU 已经开启，无需额外设置 BIOS。

下面以 Intel 平台为例，介绍设置内核启动参数开启 IOMMU。

### 开启 IOMMU

首先 [使用 SSH 登录](/fnos/ssh.md) fnOS，并且换到 `root` 用户。按照下面的步骤开启 IOMMU。

```sh
# 编辑 grub 配置文件
nano /etc/default/grub
```

在 `GRUB_CMDLINE_LINUX_DEFAULT` 中加入 `intel_iommu=on` 参数，注意前后都要保留一个空格。之后按 `Ctrl+X` 保存，输入 `Y` 回车确认退出。

![](https://img.slarker.me/wiki/Snipaste_2025-01-21_22-38-09.webp)

更新 `grub`，之后重启。

```sh
# 更新 grub
update-grub
# 重启
reboot
```

IOMMU 开启成功之后，在飞牛中会显示 `已开启`，最后按提示开启 `硬件直通选项`。

![](https://img.slarker.me/wiki/Snipaste_2025-01-21_22-58-21.webp)

### 开启虚拟交换机（OVS）

在网络设置中，开启虚拟交换机。在设置之前，最好将飞牛的网口设置为静态 IP。

这里是有两个网口，一个是 `网口 1`，对应的网卡名称是 `enp2s0`。另一个是 `网口 2`，对应的网卡名称是 `enp3s0`。

目前飞牛使用的网卡是 `enp2s0`，状态是 `已连接`，我们需要在这个网卡右边点击•••，选择 `启用 OVS`。这个网口在 iStoreOS 虚拟机中会作为软路由的 `LAN` 口。

![](https://img.slarker.me/wiki/Snipaste_2025-01-21_23-16-51.webp)

另一个网口 `enp3s0`，状态是 `未连接`，待会需要直通给 iStoreOS 虚拟机作为软路由的 `WAN` 口。

### ISO 镜像

目前飞牛只支持使用 ISO 镜像作为启动镜像，但是 iStoreOS 提供的镜像是 `img` 格式。我尝试了各种将 `img` 转换为 `iso` 的办法，都有问题。最后还是用 PE ISO 镜像启动，在 PE 中使用 `img 写盘工具` 将 `img` 镜像写入到虚拟硬盘中，最后才顺利启动。

如果你想自己制作 ISO 镜像，可以参考这个教程 [使用 PE 打包 ISO 镜像](/basic/iso.md)，最终得到的可启动的 ISO 文件。如果想省事可以直接用我做好的 ISO 镜像，你可以从 [夸克网盘下载](https://pan.quark.cn/s/721826545f76)。

之后在飞牛中建立一个 `iso` 文件夹，把 ISO 镜像上传到这个文件夹里。

## 创建虚拟机

经过以上步骤，终于可以开始建立 iStoreOS 的虚拟机了，按照下面的步骤来操作：

虚拟机名称 `iStoreOS`，操作系统选择 `Linux`，版本 `6.x - 2.6 Kernel`。

![](https://img.slarker.me/wiki/Snipaste_2025-01-21_22-59-43.webp)

启动镜像选择我们上传的 ISO 文件，其它按图所示。

![](https://img.slarker.me/wiki/Snipaste_2025-01-22_14-12-55.webp)

添加存储空间，分配大小为 4G 的 `SATA` 类型的虚拟硬盘，用来将 img 镜像写入到这个虚拟硬盘里。

![](https://img.slarker.me/wiki/Snipaste_2025-01-21_23-14-52.webp)

在之前我们创建好了虚拟交换机，这里就会自动把虚拟网卡加到虚拟机里，保持默认。

![](https://img.slarker.me/wiki/Snipaste_2025-01-21_23-20-17.webp)

::: tip 提示
硬件直通这一步，如果是做主路由，需要添加硬件（直通网卡），如果是做旁路由，则不需要添加硬件，直接点击 `创建`。
:::

这一步需要添加之前那个未被使用的网卡，也就是 enp3s0，该网卡在 PCIE 中的设备地址为：`03:00.0`，点击 `添加硬件`，按提示添加。

![](https://img.slarker.me/wiki/Snipaste_2025-01-21_23-21-42.webp)

![](https://img.slarker.me/wiki/Snipaste_2025-01-21_23-22-43.webp)

![](https://img.slarker.me/wiki/Snipaste_2025-01-21_23-22-57.webp)

创建完成之后，启动虚拟机，并使用自带的 VNC 访问虚拟机。

![](https://img.slarker.me/wiki/Snipaste_2025-01-22_14-15-29.webp)

## 写入 img 镜像到虚拟磁盘

虚拟机开机之后，自动启动 PE，打开 `此电脑`，按下图位置定位到 iStoreOS 文件夹。

![](https://img.slarker.me/wiki/Snipaste_2025-01-22_14-16-27.webp)

打开 `img 写盘工具`，`映像档` 选择 `istoreos.img` 文件，点击 `开始`。

![](https://img.slarker.me/wiki/Snipaste_2025-01-22_14-17-00.webp)

![](https://img.slarker.me/wiki/Snipaste_2025-01-22_11-51-12.webp)

写入完成之后，关闭虚拟机。之后编辑虚拟机，删除启动镜像，点击确定。

![](https://img.slarker.me/wiki/Snipaste_2025-01-22_14-18-33.webp)

再次启动虚拟机，就会从虚拟硬盘中的 iStoreOS 启动。

![](https://img.slarker.me/wiki/Snipaste_2025-01-22_14-19-25.webp)

后续 iStoreOS 路由模式设置可以参考这里：[iStoreOS 路由模式设置](/istoreos/route_setting.md)。