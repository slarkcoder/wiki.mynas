# 重新安装虚拟机

如果你的 PVE 虚拟机出现异常，需要重装，可以参考本篇教程重新安装系统，下面以 `iStoreOS` 和 `fnOS` 为例。

## 镜像

- [下载最新的固件 iStoreOS x86 固件](https://fw.koolcenter.com/iStoreOS/x86_64/)，解压后重命名为：`istoreos.img`。
- [下载 fnOS 镜像](https://www.fnnas.com/download)

将 `istoreos.img` 或者 fnOS 的 `iso 镜像` 上传到 `PVE` 的 `local(pve)`。

![](https://img.slarker.me/wiki/0c9d93996b55468ab8a1e6c7c2dc3efc.webp)

## 重装 iStoreOS

### 移除虚拟启动磁盘

停止 `iStoreOS` 虚拟机，在 iStoreOS 虚拟机的 `硬件` 中，选中虚拟硬盘 `sata0`，点击上面的 `分离`。

![](https://img.slarker.me/wiki/446d3daa17674dbfaae37553ba490dbc.webp)

再选中下面的 `未使用的磁盘 0`，点击上面的 `移除`。

![](https://img.slarker.me/wiki/885b965b1feb4ca3a3938a6dd5ba7f91.webp)

### 重新导入虚拟磁盘

这里 `iStoreOS` 虚拟机的 ID 为 `100`，之前已经将 `istoreos.img` 上传到了 `PVE` 的 `local(pve)`，在 PVE 的 `Shell` 中，使用下面的命令将 `istoreos.img` 导入 ID 为 `100` 的虚拟机中：

![](https://img.slarker.me/wiki/4952568a763344b1b562fc20c691672a.webp)

```sh
qm importdisk 100 /var/lib/vz/template/iso/istoreos.img local
```

在 iStoreOS 虚拟机的 `硬件` 中，双击 `未使用的磁盘 0`，修改 `总线/设备` 为 `SATA`，点击 `添加`。

![](https://img.slarker.me/wiki/3146be5972ff47c59456840f356a810f.webp)

在 iStoreOS 虚拟机的 `选项` 中，双击 `引导顺序`，勾选启用 `sata0`，并移动到第一个启动顺序，之后点击 `OK`。

![](https://img.slarker.me/wiki/aef755f647cd4160baa57ef494664480.webp)

启动 iStoreOS 虚拟机，接下来就可以按自己需求设置为 `主路由` 或者 `旁路由` 了。

## 重装 fnOS

停止 `fnOS` 虚拟机，在 `fnOS` 虚拟机的 `硬件` 中，添加 `CD/DVD 驱动器`，选择本地（local）的 `fnOS` iso 镜像，总线设备选择 `SATA`。

![](https://img.slarker.me/wiki/91bbcf9205e04815a5a7bb96b88a9ce1.webp)

在 fnOS 虚拟机的 `选项` 中，双击 `引导顺序`，勾选启用 `iso` 镜像，并移动到第一个启动顺序，之后点击 `OK`。

![](https://img.slarker.me/wiki/21e4bbda264441bdbe9671ee707cfc3e.webp)

接下来启动 fnOS 虚拟机，就会首先从 iso 镜像启动，开始安装流程。

安装完成后，记得先停止 fnOS 虚拟机，将 iso 镜像 `移除`，系统会从虚拟的系统磁盘（这里为 `virtio0`）启动。