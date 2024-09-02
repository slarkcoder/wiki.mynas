# 虚拟 Windows

本篇以安装 Windows 10 为例，介绍如何在 Unraid 中安装 Windows 虚拟机。

## 资源

- [Win_10_22H2_64BIT](https://www.123pan.com/s/1JKMjv-xbxo.html)
- [Win_11_23H2_64BIT](https://www.123pan.com/s/1JKMjv-abxo.html)
- [VirtIO 驱动](https://www.123pan.com/s/1JKMjv-Bbxo.html)
- [Autologon](https://learn.microsoft.com/zh-cn/sysinternals/downloads/autologon)，开启 Windows 自动登录

## 安装 Windows

Unraid 可以直接在 `设置` -> `虚拟机管理器` 中 `下载 VirtIO 驱动`，也可以手动下载上面提供的 VirtIO 驱动，上传到 `iso` 共享文件夹中。：

![unraid_win10_1_qQ29fS](https://img-1255332810.cos.ap-chengdu.myqcloud.com/unraid_win10_1_qQ29fS.png)

下载 Windows 镜像，上传到 `iso` 共享文件夹中。

![unraid_win10_2_bgq58G](https://img-1255332810.cos.ap-chengdu.myqcloud.com/unraid_win10_2_bgq58G.png)

在 `虚拟机` 标签页中 `添加虚拟机`，选择 `Windows 10`。

![unraid_win10_3_7au6ir](https://img-1255332810.cos.ap-chengdu.myqcloud.com/unraid_win10_3_7au6ir.png)

- 设置虚拟机名称
- 勾选逻辑 CPU
- 选择内存大小
- 机器选择 `Q35-7.2`
- BIOS 选择 `SeaBIOS`
- 选择 `系统` ISO 镜像，总线选择 `SATA`，启动顺序改为 `1`
- 选择 `VirtIO 驱动` ISO 镜像，总线选择 `SATA`
- 选择主要虚拟磁盘的存储位置，并设置大小，注意单位为 `G`，启动顺序改为 `2`

![unraid_win10_4_XbW6li](https://img-1255332810.cos.ap-chengdu.myqcloud.com/unraid_win10_4_XbW6li.png)

其它的设置保持默认，点击创建后会打开控制台，可以看到安装界面，按正常安装 Windows 10 来操作即可。

![unraid_win10_5_LFLLaR](https://img-1255332810.cos.ap-chengdu.myqcloud.com/unraid_win10_5_LFLLaR.png)

安装完成之后，关闭虚拟 Windows 10，将系统 ISO 镜像移除，将虚拟磁盘的启动顺序修改为 `1` 并更新虚拟机。

![unraid_win10_6_LOtk82](https://img-1255332810.cos.ap-chengdu.myqcloud.com/unraid_win10_6_LOtk82.png)

## 安装 VirtIO 驱动

虚拟的 `Windows` 默认都会有一块桥接的虚拟网卡，需要手动安装 `VirtIO` 驱动才能连上网。在资源管理器中打开 `VirtIO CD 驱动器`，运行最下面的 `virtio-win-gt-x64`，一路下一步就能装好驱动，装完驱动之后，Windows 就能正常上网了。

![i4im3l1u.rb4_p6RUsw](https://img-1255332810.cos.ap-chengdu.myqcloud.com/i4im3l1u.rb4_p6RUsw.png)

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