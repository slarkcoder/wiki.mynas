# 安装 Windows 虚拟机并设置远程访问

## 安装 Windows



## Virto 驱动

虚拟的 `Windows` 一般都会默认有一块桥接的虚拟网卡，需要手动安装 `VirtIO` 驱动才能连上网。

如果宿主机是 `Unraid` 驱动可以从 `设置` -> `虚拟机管理器` 中下载，在创建虚拟机的时候选择驱动就行。

![ls2zrvod.spn_xguAii](https://img-1255332810.cos.ap-chengdu.myqcloud.com/ls2zrvod.spn_xguAii.png)

如果宿主机是 PVE，可以从 PVE 官网 [下载 VirtIO 驱动](https://pve.proxmox.com/wiki/Windows_VirtIO_Drivers#Installation)，在创建虚拟机的时候额外添加一个 ISO 镜像，装好 `Windows` 进入系统之后就能直接从 CD 驱动器中安装 `VirtIO` 驱动。

装完驱动之后，Windows 就能正常上网了。

## 开启自动登录

如果想让 `Windows` 系统开机自动登录账户，常规的办法是修改注册表，而微软官方提供了一个小工具 [Autologon](https://learn.microsoft.com/zh-tw/sysinternals/downloads/autologon) 可以方便的开启自动登录。

下载并执行，输入 `Windows` 账户和密码就可以开启自动登录。

## 开启远程桌面

在 Windows 搜索中输入 `远程桌面`，进去就可以看到开启选项。

## 使用微软官方的远程桌面客户端

一般虚拟 Windows 都会自带一个 VNC，但这个 VNC 体验并不好，屏幕分辨率无法调节，使用起来也不流畅。使用微软官方的 `Remote Desktop` 远程工具，可以自适应屏幕分辨率，体验也很顺畅，推荐使用！

![Snipaste_2024-05-22_18-28-17_mwv9Sr](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-05-22_18-28-17_mwv9Sr.jpg)