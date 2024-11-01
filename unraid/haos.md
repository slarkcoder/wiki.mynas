# 虚拟 HomeAssistantOS

HomeAssistant 可以通过独立的 HAOS，Docker，Core，Supervised 等方式安装，各个版本区别如下：

![m5clphqn.bnz_aboQwI](https://img.slarker.me/wiki/m5clphqn.bnz_aboQwI.png)

HAOS 对各种特性支持最完整，因此只要条件允许，推荐安装 HAOS。本篇就来介绍如何在 Unraid 中虚拟 HAOS。

## 获取镜像

![](https://img.slarker.me/wiki/c8d4457856f24a359317c48ad17fba0a.webp)

从 [官网下载](https://www.home-assistant.io/installation/linux) `qcow2` 格式的镜像。

下载解压后，将 `qcow2` 文件保存到 Unraid 的 `domains` 目录中。

## 创建虚拟机

在 Unraid 虚拟机中点击 `添加虚拟机`，选择 `Linux`。

![ID1kpi_J4VoFX](https://img.slarker.me/wiki/ID1kpi_J4VoFX.png)

CPU 和内存（建议 2GB）按需选择，BIOS 选择 `OVMF`，主要虚拟磁盘位置选择 `domains` 目录中的 `haos_ova-xx.qcow2`，磁盘总线选择 `SATA`，最后点击创建。

![](https://img.slarker.me/wiki/edbea4ca53304801ba9e4ca8d804a76c.webp)

稍等片刻，虚拟机启动完成后，在控制台就可以看到 `HAOS IP` 地址和端口（默认端口：8123）。

![oq32rge0.ezq_PISmU2](https://img.slarker.me/wiki/oq32rge0.ezq_PISmU2.png)

在浏览器中输入 `HAOS IP 地址:端口`，即可进入 HAOS 登录页面。

![9LLmjY_DBBllt](https://img.slarker.me/wiki/9LLmjY_DBBllt.png)