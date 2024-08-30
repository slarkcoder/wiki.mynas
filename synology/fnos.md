# 虚拟 fnOS (飞牛OS)

[fnOS](https://www.fnnas.com/) 可以说是国产 NAS 系统中的佼佼者，尽管目前处于公测阶段，但其功能已经比较完整。从实际系统体验来看，fnOS 团队的技术实力在国内属于第一梯队，我个人认为，fnOS 成为国内最好的 NAS 系统，只是时间问题。

如果你想使用群晖的虚拟机功能体验 `fnOS`，可以按照本教程安装。

## 准备

- 在套件中心安装 `Virtual Machine Manager` 套件
- `在控制面板` -> `网络` -> `网络界面` -> `管理` -> `Open vSwitch 设置` 中 `启用 Open vSwitch`
- 在官网 [下载 fnOS ISO 镜像公测包](https://www.fnnas.com/download) 文件。

打开 `Virtual Machine Manager` 后确认条件都符合要求。

![glugn1ff.4dk_AkTpCf](https://img-1255332810.cos.ap-chengdu.myqcloud.com/glugn1ff.4dk_AkTpCf.png)

将 ISO 镜像上传到 `Virtual Machine Manager` 中。

![Snipaste_2024-08-30_21-15-56_pg6lXm](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-30_21-15-56_pg6lXm.png)

![Snipaste_2024-08-30_21-16-39_FmikVx](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-30_21-16-39_FmikVx.png)

![Snipaste_2024-08-30_21-17-00_EicZTT](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-30_21-17-00_EicZTT.png)

## 建立虚拟机

按下图所示建立虚拟机：

![Snipaste_2024-08-30_21-21-35_27lvmj](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-30_21-21-35_27lvmj.png)

![Snipaste_2024-08-30_21-22-11_AiZp4w](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-30_21-22-11_AiZp4w.png)

点开 `CPU` 右边的齿轮，将 `启用 Hyper-V Enlightenments` 取消勾选，内存建议至少分配 `2G`，视频卡选择 `vga`，机器类型选择 `Q35`。

![Snipaste_2024-08-30_22-22-23_EChYjX](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-30_22-22-23_EChYjX.png)

fnOS 系统盘只需要不到 70G 的空间就足够，图中我添加的 `虚拟盘 1` 作为系统盘，大小为 80G，磁盘类型点开右边的齿轮选择 `SATA 控制器`。

![Snipaste_2024-08-30_21-40-43_vLp5B1](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-30_21-40-43_vLp5B1.png)

网络类型保持默认，默认的网络驱动是 `virtio`，fnOS 基于 Debian 开发，对 `virtio` 支持一般都没啥问题。

![tfqJRU_gr9fwW](https://img-1255332810.cos.ap-chengdu.myqcloud.com/tfqJRU_gr9fwW.png)

启动 ISO 文件选择 fnOS 映像 `TRIM`，固件类型选择 `UEFI`。

![Snipaste_2024-08-30_21-43-30_iGChwm](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-30_21-43-30_iGChwm.png)

电源权限都勾选。

![Snipaste_2024-08-30_21-46-26_U1M6tY](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-30_21-46-26_U1M6tY.png)

确认没有问题，点击 `完成`。

![Snipaste_2024-08-30_22-22-54_k5yPNh](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-30_22-22-54_k5yPNh.png)

创建完成之后，点击 `开机`，选中 `fnOS` 虚拟机，点击 `连接`，即可打开虚拟机的 VNC 控制台。

![Maoj4R_xaQWJ6](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Maoj4R_xaQWJ6.png)

## 安装系统

启动之后，安装过程很简单，一路下一步，`安装位置` 选择 `80G` 的系统盘。

![Snipaste_2024-08-30_21-47-17_FmcJxO](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-30_21-47-17_FmcJxO.png)

![Snipaste_2024-08-30_13-50-22_FbrI55](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-30_13-50-22_FbrI55.png)

![Snipaste_2024-08-30_13-51-38_h9hZNu](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-30_13-51-38_h9hZNu.png)

网卡在安装阶段只能通过 DHCP 自动获取，如果需要设置静态 IP，可以在安装成功之后，在网络中设置。

![Snipaste_2024-08-30_13-52-02_7gsl6B](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-30_13-52-02_7gsl6B.png)

安装完成之后，会自动从 `80G` 的虚拟系统盘启动。启动完成后，在 VNC 中可以看到 NAS IP 地址和端口。

![Snipaste_2024-08-30_13-54-26_WhS3P7](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-30_13-54-26_WhS3P7.png)

使用浏览器访问 `fnOS IP:8000`。

![Snipaste_2024-08-30_13-53-58_TvaPgi](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-30_13-53-58_TvaPgi.png)