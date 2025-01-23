# 虚拟旁路由 (iStoreOS)

旁路由可以方便的设置代理，解决不少由于网络导致的问题，比如 docker 镜像下载缓慢，刮削失败等等。虽然群晖的虚拟机效率不如 PVE、Unraid，好在软路由本身所需要的资源也不多，所以虚拟一个旁路由也没啥问题。本篇教程就介绍如何在群晖上安装 iStoreOS 作为旁路由来用。

## 准备

- 在套件中心安装 `Virtual Machine Manager` 套件
- `在控制面板` -> `网络` -> `网络界面` -> `管理` -> `Open vSwitch 设置` 中 `启用 Open vSwitch`
- [下载 iStoreOS 镜像](https://fw.koolcenter.com/iStoreOS/x86_64/)（x86-64），并解压备用

![cfzEGv_4gHGyD](https://img.slarker.me/wiki/cfzEGv_4gHGyD.png)

打开 `Virtual Machine Manager` 后确认条件都符合要求。

![glugn1ff.4dk_AkTpCf](https://img.slarker.me/wiki/glugn1ff.4dk_AkTpCf.png)

## 上传映像

在 `Virtual Machine Manager` 中选择 `映像` -> `硬盘映像` -> `新增` -> `从计算机`，选择刚才解压得到的 `img` 镜像，点击 `下一步`。

![y2oLZV_ly9fNJ](https://img.slarker.me/wiki/y2oLZV_ly9fNJ.png)

`选择存储空间`，并点击 `完成`。

![1HIiiM_6V8Kcn](https://img.slarker.me/wiki/1HIiiM_6V8Kcn.png)

## 创建虚拟机

在 `虚拟机` 中 `新增` -> `导入` -> `从硬盘映像导入`，点击下一步。

![xmmaoviz.vor_oSWUbR](https://img.slarker.me/wiki/xmmaoviz.vor_oSWUbR.png)

选择存储空间后，按下图所示配置虚拟机，点击下一步。

![rorp4X_my8nh8](https://img.slarker.me/wiki/rorp4X_my8nh8.png)

虚拟盘 1 选择 `iStoreOS 映像`，点击下一步。

![Xn5kA8_ISahgO](https://img.slarker.me/wiki/Xn5kA8_ISahgO.png)

网络保持默认。

![DFbDfX_zxHIMh](https://img.slarker.me/wiki/DFbDfX_zxHIMh.png)

如果有需要，可以把自动启动打开。

![H92UrH_Lf1mbZ](https://img.slarker.me/wiki/H92UrH_Lf1mbZ.png)

分配电源管理权限把当前用户和 `admin` 勾上就行。

![UUjFFA_SD45HA](https://img.slarker.me/wiki/UUjFFA_SD45HA.png)

最后检查设置没问题，可以勾上 `创建后开启虚拟机`，点击完成，虚拟机就会启动。

![gURGIE_0kWRQP](https://img.slarker.me/wiki/gURGIE_0kWRQP.png)

等 iStoreOS 虚拟机状态变为运行中，就可以到路由器中查找 iStoreOS 的 IP 了。

![Jytj19_YjWu7J](https://img.slarker.me/wiki/Jytj19_YjWu7J.png)

后续设置过程请参考：[iStoreOS 路由模式设置](/istoreos/route_setting.md)。

