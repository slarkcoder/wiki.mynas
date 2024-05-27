# 虚拟 Windows

本篇以安装 Windows 10 为例，介绍如何在 PVE 中安装 Windows 虚拟机。

## 资源

- [Win_10_22H2_64BIT](https://www.123pan.com/s/1JKMjv-xbxo.html)
- [Win_11_23H2_64BIT](https://www.123pan.com/s/1JKMjv-abxo.html)
- [VirtIO 驱动](https://www.123pan.com/s/1JKMjv-Bbxo.html)
- [Autologon](https://learn.microsoft.com/zh-cn/sysinternals/downloads/autologon)，开启 Windows 自动登录

## 安装 Windows

### 上传 ISO 镜像

下载上面提供的 Windows 10 镜像以及 Virtio 驱动，你也可以自己从官网下载，并上传到 PVE 的 `ISO 镜像` 中。

![aOpGeJ_dMNn3m](https://img-1255332810.cos.ap-chengdu.myqcloud.com/aOpGeJ_dMNn3m.png)

### 创建虚拟机

点击 PVE 右上角的 `创建虚拟机` 按钮，按下面的步骤来操作。

填写虚拟机名称：`Windows10`，点击下一步。

![pve_win10_1_F1YGm9](https://img-1255332810.cos.ap-chengdu.myqcloud.com/pve_win10_1_F1YGm9.png)

选择使用 CD/DVD 光盘镜像文件（ISO），也就是 `Windows 10 ISO 镜像`，选择操作系统为 `Microsoft Windows`，版本选 `10/2016/2019`，勾选 `为 VirtIO 驱动程序添加额外的驱动器`，并选择 `Virtio-win-0.1.240.iso` 驱动，点击下一步。

![pve_win10_2_J2Ak9w](https://img-1255332810.cos.ap-chengdu.myqcloud.com/pve_win10_2_J2Ak9w.png)

机型选择 `q35`，点击下一步。

![pve_win10_3_PDmXlT](https://img-1255332810.cos.ap-chengdu.myqcloud.com/pve_win10_3_PDmXlT.png)

磁盘 `总线/设备` 切换为 `SATA`，磁盘大小按你的实际情况来填写（建议至少 50G，也就是 Windows 的系统盘），点击下一步。

![pve_win10_4_VJrrLX](https://img-1255332810.cos.ap-chengdu.myqcloud.com/pve_win10_4_VJrrLX.png)

CPU 核心可以直接填核心总数的值，类别改成 `host`，点击下一步。

![pve_win10_5_jVa58a](https://img-1255332810.cos.ap-chengdu.myqcloud.com/pve_win10_5_jVa58a.png)

内存最少分配 4G（4096MB），物理内存比较充足可以多分点，注意这里单位是 `MB`，点击下一步。

![pve_win10_6_Iu4xqa](https://img-1255332810.cos.ap-chengdu.myqcloud.com/pve_win10_6_Iu4xqa.png)

网络不用修改，保持默认，点击下一步。

![pve_win10_7_HQMrns](https://img-1255332810.cos.ap-chengdu.myqcloud.com/pve_win10_7_HQMrns.png)

确认所有信息没问题，点击完成。

![pve_win10_8_devcv5](https://img-1255332810.cos.ap-chengdu.myqcloud.com/pve_win10_8_devcv5.png)

到 Windows 10 虚拟机的 `选项` 中修改 `引导顺序`，将 Windows 10 ISO 镜像设置为第一个启动，SATA 磁盘设置为第二个启动，其它的都取消勾选。如果需要 Windows 开机自启，也可以将 `开机自启动` 改为 `是`。点击 OK。

![pve_win10_9_vmKsKw](https://img-1255332810.cos.ap-chengdu.myqcloud.com/pve_win10_9_vmKsKw.png)

设置好之后，就可以点击启动虚拟机了，不出意外的话，在虚拟机的 `控制台` 里就会显示正常 Windows 10 的安装界面。

![pve_win10_10_23LiPg](https://img-1255332810.cos.ap-chengdu.myqcloud.com/pve_win10_10_23LiPg.png)

接下来就是正常的安装过程，按提示安装即可。安装完成之后关闭 Windows 10 虚拟机，在 `引导顺序` 中将 SATA 磁盘设置为第一启动。

## 安装 VirtIO 驱动

虚拟的 `Windows` 默认都会有一块桥接的虚拟网卡，需要手动安装 `VirtIO` 驱动才能连上网。在资源管理器中打开 `VirtIO CD 驱动器`，运行最下面的 `virtio-win-gt-x64`，一路下一步就能装好驱动，装完驱动之后，Windows 就能正常上网了。

![i4im3l1u.rb4_p6RUsw](https://img-1255332810.cos.ap-chengdu.myqcloud.com/i4im3l1u.rb4_p6RUsw.png)

<!-- 如果宿主机是 `Unraid` 驱动可以从 `设置` -> `虚拟机管理器` 中下载，在创建虚拟机的时候选择驱动就行。

![ls2zrvod.spn_xguAii](https://img-1255332810.cos.ap-chengdu.myqcloud.com/ls2zrvod.spn_xguAii.png) -->

<!-- 如果宿主机是 PVE，可以从 PVE 官网 [下载 VirtIO 驱动](https://pve.proxmox.com/wiki/Windows_VirtIO_Drivers#Installation)，在创建虚拟机的时候额外添加一个 ISO 镜像，装好 `Windows` 进入系统之后就能直接从 CD 驱动器中安装 `VirtIO` 驱动。 -->

## 开启自动登录

如果想让 `Windows` 系统开机自动登录账户，常规的办法是修改注册表，而微软官方提供了一个小工具 [Autologon](https://learn.microsoft.com/zh-tw/sysinternals/downloads/autologon) 可以方便的开启自动登录。

下载并执行，输入 `Windows` 用户名和密码，点击 `Enable` 就可以开启自动登录。

![KserGB_8twBGt](https://img-1255332810.cos.ap-chengdu.myqcloud.com/KserGB_8twBGt.png)

## 开启远程桌面

在 Windows 搜索中输入 `远程桌面设置`，进去就可以看到 `启用远程桌面` 选项。

![n7891m_75k1dl](https://img-1255332810.cos.ap-chengdu.myqcloud.com/n7891m_75k1dl.png)

## 使用微软官方的远程桌面客户端

一般虚拟 Windows 都会自带一个 VNC，但这个 VNC 体验并不好，屏幕分辨率无法调节，使用起来也不流畅。使用微软官方的 `Remote Desktop` 远程工具，可以自适应屏幕分辨率，体验也很顺畅，推荐使用！

![Snipaste_2024-05-22_18-28-17_mwv9Sr](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-05-22_18-28-17_mwv9Sr.jpg)