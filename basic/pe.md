# 制作 PE 引导 U 盘

有时候需要在 PE 环境下进行一些操作，比如扫描硬盘坏道，修改 Linux 系统的配置文件等等，本篇教程就介绍如何制作一个 PE U 盘。

## 下载资源

- [Ventoy](https://www.ventoy.net/cn/download.html)（制作启动 U 盘）
- [Edgeless](https://down.edgeless.top/)（PE 镜像）

Edgeless 选择 `下载 ISO 镜像`。

![](https://img.slarker.me/wiki/bb74b1d2cea5436c8c3b218ed58d8dd7.webp)

## 制作 PE

- 把 U 盘插到你的 Windows 电脑。
- 解压 `Ventoy`，运行其中的 `Ventoy2Disk.exe`，选择你的 U 盘，点击安装。

![](https://img.slarker.me/wiki/271e2dd4e1d14927a5afb52a983023c6.webp)

安装成功会有提示。

![](https://img.slarker.me/wiki/fb4b2bac8d7d426891833d30a0ccbb8c.webp)

把 Edgeless ISO 镜像复制到 U 盘根目录。

![](https://img.slarker.me/wiki/8cfa5d15daf84ac38a52c8f6a8982b6f.webp)

除此之外，由于 `Ventoy` 的强大，你还可以在 U 盘里放一些其它的系统镜像（比如 `PVE`，`Windows` 等等）。如有需要，启动后就能直接安装。

## DiskGenius（可选）

`Edgeless` 自带的 `DiskGenius` 只能读取 Linux 文件，无法修改。如需修改，可以用下面这个。下载之后，直接复制到 U 盘根目录。

- [DiskGenius](https://www.123pan.com/s/1JKMjv-mTBo)

## 启动 PE

:::info 提示
不同主板，进入 BIOS 的方式不同，具体需要查询厂商的设定。
:::

把做好的 PE U 盘插到你的设备上，接好显示器、键盘、鼠标，开机后一般可以尝试连续按 `Del` 键进入 `BIOS`，在启动选项中，设置第一启动项为 U 盘，保存退出，重启后应该就能启动 `Ventoy` 了，按提示选择 `Edgeless` 就可以进入 PE 系统。