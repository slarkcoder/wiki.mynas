# 虚拟 HomeAssistantOS

HomeAssistant 可以通过独立的 HAOS，Docker，Core，Supervised 等方式安装，各个版本区别如下：

![m5clphqn.bnz_aboQwI](https://img-1255332810.cos.ap-chengdu.myqcloud.com/m5clphqn.bnz_aboQwI.png)

HAOS 对各种特性支持最完整，因此只要条件允许，推荐安装 HAOS。本篇就来介绍如何在 PVE 中虚拟 HAOS。

## 获取镜像

HAOS 的 PVE 虚拟机镜像可以从 [Github 下载](https://github.com/home-assistant/operating-system/releases)，比如最新的适合 PVE 的镜像为：`haos_ova-13.1.qcow2.xz`，下载后解压得到 `haos_ova-13.1.qcow2`，将这个镜像放到电脑桌面上。

## 创建虚拟机

新建虚拟机，名称填写：`HAOS`。

![](https://img.slarker.me/wiki/644a159a929a4832be4e1d194915e690.webp)

操作系统选择 `不使用任何介质`，操作系统保持默认。

![](https://img.slarker.me/wiki/276058b5baaf4e6da10b01fd22278f76.webp)

机型选择 `i440fx`，BIOS 选择 `OVMF（UEFI）`，取消勾选 `添加 EFI 磁盘`。

![](https://img.slarker.me/wiki/f1f65f1f105c427783994153cc593b51.webp)

删除默认的 SCSI 磁盘。

![](https://img.slarker.me/wiki/a355f4f2efa64809afd5cc21a5dd3482.webp)

CPU 核心可以按需选择，这里选 `2` 核心，类别改为 `host`。

![](https://img.slarker.me/wiki/e0ef35b5449543bb9da4e65d7e65bbd1.webp)

内存设置为 `2048` MB，也就是 2GB 大小。

![](https://img.slarker.me/wiki/c74818a56e0644a0a685a9713c84398d.webp)

网络保持默认。

![](https://img.slarker.me/wiki/caff5286e4d742938a0de6aa347667f9.webp)

确认设置没有问题，点击 `完成`。

![](https://img.slarker.me/wiki/b9f64fb9a7d24fcd95a6d7c81ddafa2e.webp)

##  导入镜像

适用于 PVE 的镜像格式为 `qcow2`，不能直接通过 PVE 的 `ISO 镜像` 上传。我们可以通过 `scp` 命令将镜像直接上传到 PVE 的临时目录 `/tmp` 下面。

以我使用的 `macOS` 为例，可以通过下面的命令来上传到 PVE 的 `/tmp` 目录：

```sh
# 命令格式：scp [本机文件路径] root@[pve ip 地址]:/tmp
scp /Users/slark/Desktop/haos_ova-13.1.qcow2 root@192.168.2.200:/tmp
```

如果是 `Windows`，可以使用自带的 `Terminal` 或者第三方的终端（比如 putty，xshell 等）执行 `scp` 命令，也可以直接使用 `winscp` 上传文件。

上传完成之后，可以在 PVE 的 `shell` 中使用下面的命令导入镜像：

:::info 提示
此处命令末尾为 local 是因为在 PVE 安装好之后，将 local 和 local-lvm 进行了合并，所以此时只有 local。
:::

```sh
# 100 为 HAOS 虚拟机 ID，local 为 PVE 的存储空间
qm importdisk 100 /tmp/haos_ova-13.1.qcow2 local
```

导入完成就会在 HAOS 的硬件中看到一个 `未使用的磁盘 0`，双击添加硬盘，`总线/设备` 改为 `SATA`，点击 `添加`。

![](https://img.slarker.me/wiki/202409212330627.webp)

接下来在 `选项` 中设置 `引导顺序`，将 sata0 已启用勾选，并移动到第一个位置，将其它的两个设备取消勾选。

![](https://img.slarker.me/wiki/202409212329936.webp)

最后就可以启动 `HAOS` 虚拟机了。如果一切正常，稍等就可以看到启动成功的界面：

![](https://img.slarker.me/wiki/ba976e15f6ff4a5e8587c34749295728.webp)

可以直接在浏览器中访问显示的 `HAOS IP:8123`。

![](https://img.slarker.me/wiki/7a2eec06842a4e2786b97504dbcb2fbb.webp)



