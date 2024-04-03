# 使用命令行格式化硬盘

在 Unraid 里，有时候需要把默认的 xfs 格式硬盘格式化成其它格式，可以通过命令行来完成格式化。

首先在命令行里使用下面的命令来查看设备列表：

```sh
fdisk -l
```

例如下面的 `/dev/sdb` 就是需要格式化的设备，在后面你也可以看到具体的容量。后续的命令中也请将 `/dev/sdb` 替换为自己的设备。

![bghptvyc.d0i_EJVLqo](https://img.slarker.me/blog/bghptvyc.d0i_EJVLqo.png)

如果你的硬盘容量不大（1TB 以内），可以直接使用下面的命令进行格式化，期间如果提示 `Proceed anyway`，输入 `y` 确认：

```sh
mkfs.ext4 /dev/sdb
```

![9p4EWH_F8wOao](https://img.slarker.me/blog/9p4EWH_F8wOao.png)

如果你的硬盘容量比较大，可以使用下面的命令格式化，会比较快：

```sh
mkfs.ext4 -T largefile /dev/sdb
```

![bz2dsgpw.4vf_BpqoLp](https://img.slarker.me/blog/bz2dsgpw.4vf_BpqoLp.png)