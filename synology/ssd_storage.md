# 使用 M.2 Nvme SSD 作为存储空间

首先 [使用 SSH 登录](/synology/ssh.md) 群晖，并切换到 `root` 用户。

查看所有 NAS 上安装的所有 nvme 硬盘：

```sh
ls /dev/nvme*n1 
```

## 一块盘

如果只有一块盘，直接对硬盘进行分区：

```sh
synopartition --part /dev/nvme0n1 12
```

查看现有的存储池序号：

```sh
cat /proc/mdstat
```

Nvme SSD 作为存储池，要分配一个新的存储池序号，不要和现有的存储池序号重复就行。比如现有的存储池序号为 `md1`，`md2`，`md3`，那么 Nvme 存储池就可以设置为 `md4`。

下面以存储池序号为：`md4` 为例创建新存储池，注意根据自己的情况修改：

```sh
mdadm --create /dev/md4 --level=1 --raid-devices=1 --force /dev/nvme0n1p3
```

然后格式化存储空间为 `btrfs` 格式（注意存储池序号保持一致！）：

```sh
mkfs.btrfs -f /dev/md4
```

完成之后，输入 `reboot` 重启群晖，在存储池中，找到可用池，`在线重组` 即可。

## 两块盘

如果有两块盘，分别对硬盘进行分区：

```sh
synopartition --part /dev/nvme0n1 12  #第一块盘
synopartition --part /dev/nvme1n1 12  #第二块盘
```

查看现有的存储池序号：

```sh
cat /proc/mdstat
```

Nvme SSD 作为存储池，要分配一个新的存储池序号，不要和现有的存储池序号重复就行。比如现有的存储池序号为 `md1`，`md2`，`md3`，那么 Nvme 存储池就可以设置为 `md4`。

下面以存储池序号为：`md4` 为例创建新存储池，注意根据自己的情况修改，`--level=0` 表示 `raid0`，如果需要 `raid1`，可以改成 `--level=1`。

```sh
mdadm --create /dev/md4 --level=0 --raid-devices=2 --force /dev/nvme0n1p3 /dev/nvme1n1p3
```

然后格式化存储空间为 `btrfs` 格式（注意存储池序号保持一致！）：

```sh
mkfs.btrfs -f /dev/md4
```

完成之后，输入 `reboot` 重启群晖，在存储池中，找到可用池，`在线重组` 即可。