# 挂载磁盘

NAS 系统都带有磁盘相关的管理功能，但 Armbian 需要通过命令格式化磁盘，手动挂载。

## 格式化磁盘

查看存储磁盘列表：

```sh
fdisk -l
```

可以根据设备容量来判断 2.5 寸 SSD 是哪个设备，比如我插的是一块 500G 的 SSD，那就是 `/dev/sda` 这个设备：

![](https://img.slarker.me/wiki/20250318170615858.webp)

格式化磁盘为 `ext4`：

```sh
mkfs.ext4 /dev/sda
```

## 挂载磁盘

首先创建挂载点：

```sh
mkdir -p /mnt/disk
```

将磁盘挂载到挂载点：

```sh
mount /dev/sda /mnt/disk
```

确认正常挂载：

```sh
lsblk
```

如下图，`MOUNTPOINTS` 栏已经显示 `sda` 挂载到 `/mnt/disk` 了。

![](https://img.slarker.me/wiki/20250318171105679.webp)

## 开机自动挂载

使用 mount 命令挂载的磁盘系统重启就失效了。可以编辑 `/etc/fstab` 配置文件实现开机自动挂载。

查看磁盘 UUID：

```sh
blkid /dev/sda
```

以我的这块 SSD 为例，输出为：

```sh
/dev/sda: UUID="71619387-a3ad-422b-9fd3-aab17f70190d" BLOCK_SIZE="4096" TYPE="ext4"
```

使用 1Panel 编辑 `/etc/fstab` 文件，在末尾添加下面的配置：

```yml
UUID=71619387-a3ad-422b-9fd3-aab17f70190d /mnt/disk ext4 defaults 0 2
```

编辑完成之后保存，可以重启 Armbian 测试开机自动挂载磁盘是否生效。