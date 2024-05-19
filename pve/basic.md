# 常见功能设置

:::warning 警告
如果你不明白自己在做什么，请不要随意修改 PVE 中的设置。
:::

打开 `PVE` 管理后台，会提示登录，语言可以选择中文。

![k5c23woo.1me_CaGu6T](https://img-1255332810.cos.ap-chengdu.myqcloud.com/k5c23woo.1me_CaGu6T.png)

如果需要修改虚拟机设置，或者给虚拟机添加 USB 设备，需要 **先关闭虚拟机**。

关机有两种办法：可以直接在虚拟机中关闭系统（比如群晖系统的关机按钮），或者也可以如下图所示直接在 PVE 中点 `停止` 按钮关机。

![rg0napgj.nek_HdkpXP](https://img-1255332810.cos.ap-chengdu.myqcloud.com/rg0napgj.nek_HdkpXP.png)

## 查看配置

在 PVE 中点击 `概要` 可以查看机器配置。

![TVR47P_lmekU7](https://img-1255332810.cos.ap-chengdu.myqcloud.com/TVR47P_lmekU7.png)

机器的所有硬件资源（直通的设备除外）都由 PVE 来管理，包括内存，CPU，网卡，硬盘，USB 接口等等。

使用 PVE 安装的 All in one 系统，一般会将 SATA 控制器直通给 NAS，将部分网口（PVE 管理口不需要直通）直通给 iStoreOS（软路由），直通的设备就由对应的虚拟机直接管理。

## 修改虚拟机内存

PVE 作为一个系统，本身也需要一些内存来稳定运行，所以分配内存的时候，所有虚拟机的内存容量之和不能超过物理内存容量，并且至少要预留 1G 的内存给 PVE。

以 8GB 的物理内存为例，预留 1GB 给 PVE，分配 1GB 给 iStoreOS，剩下的 6GB 都可以分配给群晖。

如果想修改内存大小，关闭虚拟机之后，修改对应的硬件设置。

![RH0SEa_yYOHAc](https://img-1255332810.cos.ap-chengdu.myqcloud.com/RH0SEa_yYOHAc.png)

只修改 `内存` 这一项即可，`最小内存` 保持默认不需要修改。修改完成之后，启动虚拟机即可。

:::warning 注意
这里的内存单位是 MB，1GB = 1024MB，可以按实际需求换算填写。

这里的内存分配逻辑是：虚拟机启动后 PVE 会立即分配设定的所有内存给虚拟机，因此在 PVE 中会看到内存占用很高。
:::

## 添加外接 USB 设备

所有的 USB 设备也都由 PVE 来管理，因此如果需要外接 USB 鼠标，USB 移动硬盘到虚拟机中，也要在 PVE 中设置。

在主板自带的 USB 接口插上你需要添加的 USB 设备。PVE 中对应的虚拟机关机之后，在 `硬件` 中添加 USB 设备。

![ild0aqcm.2ke_zbDS87](https://img-1255332810.cos.ap-chengdu.myqcloud.com/ild0aqcm.2ke_zbDS87.png)

添加 USB 设备，`使用 USB 供应商` 或者 `使用 USB 端口`，只要能看到对应的设备都可以。选中设备后，点击添加。

![lhrb33rz.log_MnGdYR](https://img-1255332810.cos.ap-chengdu.myqcloud.com/lhrb33rz.log_MnGdYR.png)

之后在 `硬件` 中就能看到多出来一个 `USB 设备`，启动虚拟机就能在虚拟机中看到相关的设备。

![1tvqmtss.mg3_REB9ey](https://img-1255332810.cos.ap-chengdu.myqcloud.com/1tvqmtss.mg3_REB9ey.png)