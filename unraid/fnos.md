# 虚拟 fnOS（飞牛 OS）

[fnOS](https://www.fnnas.com/) 可以说是国产 NAS 系统中的佼佼者，尽管目前处于公测阶段，但其功能已经比较完整。从实际系统体验来看，fnOS 团队的技术实力在国内属于第一梯队，我个人认为，fnOS 成为国内最好的 NAS 系统，只是时间问题。

如果你想使用 Unraid 的虚拟机功能体验 `fnOS`，可以按照本教程安装。

## 下载镜像

在官网 [下载 fnOS ISO 镜像公测包](https://www.fnnas.com/download) 文件，上传到 Unraid 的 `isos` 共享文件夹。

## 建立虚拟机

按下图所示建立虚拟机：

![Snipaste_2024-08-30_13-49-02_FtkpmI](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-30_13-49-02_FtkpmI.png)

fnOS 系统盘只需要不到 70G 的空间就足够，图中我添加的虚拟磁盘 `vdisk1` 作为系统盘，大小为 80G。添加的虚拟磁盘 `vdisk2` 作为数据盘，大小为 100G。

第一次启动，安装 ISO 镜像启动顺序应该为 `1`，表示首先从 ISO 镜像启动。

## 安装系统

启动之后，安装过程很简单，一路下一步，`安装位置` 选择 `80G` 的系统盘。

![Snipaste_2024-08-30_13-50-05_8IiDsO](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-30_13-50-05_8IiDsO.png)

![Snipaste_2024-08-30_13-50-22_FbrI55](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-30_13-50-22_FbrI55.png)

![Snipaste_2024-08-30_13-51-38_h9hZNu](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-30_13-51-38_h9hZNu.png)

网卡在安装阶段只能通过 DHCP 自动获取，如果需要设置静态 IP，可以在安装成功之后，在网络中设置。

![Snipaste_2024-08-30_13-52-02_7gsl6B](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-30_13-52-02_7gsl6B.png)

安装完成之后，需要先关机，然后编辑虚拟机配置，移除 ISO 镜像，将系统盘启动顺序设置为 `1`，之后更新虚拟机配置，开机启动。

![Snipaste_2024-08-30_13-52-56_JbKtgQ](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-30_13-52-56_JbKtgQ.png)

启动完成后，在 VNC 中可以看到 NAS IP 地址和端口。

![Snipaste_2024-08-30_13-54-26_WhS3P7](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-30_13-54-26_WhS3P7.png)

使用浏览器访问 `fnOS IP:8000`。

![Snipaste_2024-08-30_13-53-58_TvaPgi](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-30_13-53-58_TvaPgi.png)