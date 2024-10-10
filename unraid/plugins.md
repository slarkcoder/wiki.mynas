# Unraid 必装的一些插件

本篇教程给大家推荐一些 Unraid 必装的插件。

## Dynamix File Manager

Unraid 官方的文件管理器，基础功能够用，如果不想装第三方的管理器，那这个就是必备的。安装后在右上角会有下图所示的图标。

![bjO62T_F8p5yb](https://img.slarker.me/wiki/bjO62T_F8p5yb.png)

## Unassigned Devices

通常用来挂载远程 NAS 设备的 SMB、NFS 共享文件夹。

如果要挂载远程的 SMB 和 NFS 共享文件夹，需要先确保本机的 SMB 或 NFS 服务已开启。

## Unassigned Devices Plus

这个插件可以支持更多的文件磁盘格式，比如 HFS+、exFAT、APFS。

## User Scripts

可以方便的运行一些脚本，定时任务。比如 PhotoPrism 的定时索引脚本。

## Compose Manager

Unraid 默认自带 Docker，使用 Docker Compose 可以运行一些更复杂的容器组合。

## CA Auto Update Applications

可以实现自动更新 Docker 应用以及插件。

## Intel GPU TOP（仅适用 Intel 带核显 CPU）

安装后可以通过 `intel_gpu_top` 命令查看 GPU 占用情况。

## Nvidia-Driver（仅适用 Nvidia GPU）

安装后需要在插件里再安装对应的 Nvidia 驱动。

## GPU Statistics

前置条件：安装 `Intel GPU TOP` 或者 `Nvidia-Driver`。

可以让 GPU 占用情况直接显示在 Unraid 面板山。安装后在仪表板的 GPU 模块里选中 GPU 显卡。

![7frKWZ_Czob7R](https://img.slarker.me/wiki/7frKWZ_Czob7R.png)

## Dynamix System Temperature

可以在 Unraid 仪表板显示 CPU 和主板温度的插件。

![HdGsUe_MHctSf](https://img.slarker.me/wiki/HdGsUe_MHctSf.png)

## GUI Search

快速查找 Unraid 功能，设置的插件，当你不知道想要的功能在哪里的时候非常有用。

![3wzbahqq.vqj_6CakFO](https://img.slarker.me/wiki/3wzbahqq.vqj_6CakFO.png)

## NerdTools

Unraid 上的包管理工具，可以方便安装第三方工具。比如常用的 `python`，`7z`，`zsh` 等等都可以直接在 `NerdTools` 中安装。

![d02rufl2.0oq_c0j5XO](https://img.slarker.me/wiki/d02rufl2.0oq_c0j5XO.png)

## unbalanced

Unraid 上的文件归集、转移插件。由于 Unraid 磁盘阵列的存储机制，一个文件夹中的内容可能会分散到多个不同的硬盘上，如果你想把文件夹中的内容都集中到一块硬盘上，那这个插件就能帮上你的大忙。