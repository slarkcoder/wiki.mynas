# 安装旁路由

旁路由可以方便的设置代理，解决不少由于网络导致的问题，比如 docker 镜像下载缓慢，刮削失败等等。虽然群晖的虚拟机效率不如 PVE、Unraid，好在软路由本身所需要的资源也不多，所以虚拟一个旁路由也没啥问题。本篇教程就介绍如何在群晖上安装 iStoreOS 作为旁路由来用。

## 准备

- 在套件中心安装 `Virtual Machine Manager` 套件
- `在控制面板` -> `网络` -> `网络界面` -> `管理` -> `Open vSwitch 设置` 中 `启用 Open vSwitch`
- [下载 iStoreOS 镜像](https://fw.koolcenter.com/iStoreOS/x86_64/)（x86-64），并解压备用

![cfzEGv_4gHGyD](https://img-1255332810.cos.ap-chengdu.myqcloud.com/cfzEGv_4gHGyD.png)

打开 `Virtual Machine Manager` 后确认条件都符合要求。

![glugn1ff.4dk_AkTpCf](https://img-1255332810.cos.ap-chengdu.myqcloud.com/glugn1ff.4dk_AkTpCf.png)

## 上传映像

在 `Virtual Machine Manager` 中选择 `映像` -> `硬盘映像` -> `新增` -> `从计算机`，选择刚才解压得到的 `img` 镜像，点击 `下一步`。

![y2oLZV_ly9fNJ](https://img-1255332810.cos.ap-chengdu.myqcloud.com/y2oLZV_ly9fNJ.png)

`选择存储空间`，并点击 `完成`。

![1HIiiM_6V8Kcn](https://img-1255332810.cos.ap-chengdu.myqcloud.com/1HIiiM_6V8Kcn.png)

## 创建虚拟机

在 `虚拟机` 中 `新增` -> `导入` -> `从硬盘映像导入`，点击下一步。

![xmmaoviz.vor_oSWUbR](https://img-1255332810.cos.ap-chengdu.myqcloud.com/xmmaoviz.vor_oSWUbR.png)

选择存储空间后，按下图所示配置虚拟机，点击下一步。

![rorp4X_my8nh8](https://img-1255332810.cos.ap-chengdu.myqcloud.com/rorp4X_my8nh8.png)

虚拟盘 1 选择 `iStoreOS 映像`，点击下一步。

![Xn5kA8_ISahgO](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Xn5kA8_ISahgO.png)

网络保持默认。

![DFbDfX_zxHIMh](https://img-1255332810.cos.ap-chengdu.myqcloud.com/DFbDfX_zxHIMh.png)

如果有需要，可以把自动启动打开。

![H92UrH_Lf1mbZ](https://img-1255332810.cos.ap-chengdu.myqcloud.com/H92UrH_Lf1mbZ.png)

分配电源管理权限把当前用户和 `admin` 勾上就行。

![UUjFFA_SD45HA](https://img-1255332810.cos.ap-chengdu.myqcloud.com/UUjFFA_SD45HA.png)

最后检查设置没问题，可以勾上 `创建后开启虚拟机`，点击完成，虚拟机就会启动。

![gURGIE_0kWRQP](https://img-1255332810.cos.ap-chengdu.myqcloud.com/gURGIE_0kWRQP.png)

等 iStoreOS 虚拟机状态变为运行中，就可以到路由器中查找 iStoreOS 的 IP 了。

![Jytj19_YjWu7J](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Jytj19_YjWu7J.png)

## 设置旁路由

因为我们装的 iStoreOS 只有一个虚拟网卡，开机后会自动从主路由获取 IP 地址。

![P5fuml_LHABaf](https://img-1255332810.cos.ap-chengdu.myqcloud.com/P5fuml_LHABaf.png)

浏览器打开该 IP，就可以登录旁路由了。默认用户名/密码：root/password。

登录之后，直接点击首页的网络向导，设置为旁路由模式。

![si1yxa1r.ke0_ncNe0K](https://img-1255332810.cos.ap-chengdu.myqcloud.com/si1yxa1r.ke0_ncNe0K.png)

点击 `配置为旁路由`。

![BXn4qF_39KVlS](https://img-1255332810.cos.ap-chengdu.myqcloud.com/BXn4qF_39KVlS.png)

可以直接点 `自动配置`。

![pbi1225x.sig_qD2m9X](https://img-1255332810.cos.ap-chengdu.myqcloud.com/pbi1225x.sig_qD2m9X.png)

点击 `点此刷新`，会自动刷新当前连接信息，点击 `自动填写`。

![0qsqklj0.le0_yaUwUg](https://img-1255332810.cos.ap-chengdu.myqcloud.com/0qsqklj0.le0_yaUwUg.png)

如果需要修改旁路由 IP，可以在这里修改，关闭 `提供 DHCPv4 服务`，打开 `开启 NAT`，最后点击 `保存配置`。

![hs35odhz.4ej_49Iqxd](https://img-1255332810.cos.ap-chengdu.myqcloud.com/hs35odhz.4ej_49Iqxd.png)

到这里旁路由就设置好了。

## 安装代理插件

由于 iStoreOS 是国内公司开发的系统，默认并不含有代理功能。如有魔法需求，可以看这里：

[iStoreOS 魔法插件到哪里下载？](/basic/question.html#istoreos魔法插件到哪里下载)

## 群晖使用旁路由

可以直接到 `控制面板` -> `网络` -> `网络界面` 中编辑网络配置，切换成 `手动设置网络配置`。

将群晖的 IP 修改为 `静态 IP`，DNS 和网关都修改为 `旁路由的 IP`，点击确定。

![ymbwcH_uCEhsy](https://img-1255332810.cos.ap-chengdu.myqcloud.com/ymbwcH_uCEhsy.png)

## 外网访问端口转发问题

如果你有公网 IP，此时群晖也通过旁路由上网，在端口转发的时候需要注意：

> 先从主路由转发端口到旁路由，再从旁路由转发端口到群晖。

比如，此时主路由为：192.168.2.1，旁路由为：192.168.2.147，群晖为：192.168.2.143。

端口转发就要先从 192.168.2.1 转发到 192.168.2.147，再从 192.168.2.147 转发到 192.168.2.143。

旁路由的端口转发应该这样设置，在 `网络` -> `防火墙` -> `端口转发` 中添加类似于下面这样的规则：

![t2k2iqrl.ipr_hz2Q17](https://img-1255332810.cos.ap-chengdu.myqcloud.com/t2k2iqrl.ipr_hz2Q17.png)

