# 修改 Docker 默认存储路径

Armbian 设备一般自带的 EMMC 空间都比较有限，装完系统后，留给 Docker 的可用空间就不多了。所以在安装好 Docker 引擎，挂载完大容量存储设备之后，尽量先把 Docker 的默认存储位置修改为大容量的存储设备上，避免后续由于空间不够出问题。

:::warning 提示
本文所介绍的方法，仅适合在未安装任何 Docker 应用的时候修改默认存储路径。
:::

## 创建新的 Docker 文件夹

在大容量的存储设备上创建一个新的 Docker 文件夹。

```sh
mkdir -p /mnt/disk/docker
```

## Docker 默认路径

Docker 的默认存储路径为 `/var/lib/docker`，使用下面的命令可以看到：

```sh
docker info
```

![](https://img.slarker.me/wiki/20250320150524765.webp)

## 修改 Docker 配置文件

使用 1Panel 自带的文本编辑器，或者 nano 命令编辑配置文件：

```yml
nano /usr/lib/systemd/system/docker.service
```

修改 `Service` 中的 ExecStart 参数：

```yml
# 添加 --data-root /mnt/disk/docker 参数
# /mnt/disk/docker 就是位于你的大容量磁盘上的 docker 路径
ExecStart=/usr/bin/dockerd --data-root /mnt/disk/docker -H fd:// --containerd=/run/containerd/containerd.sock
```

![](https://img.slarker.me/wiki/20250320152614490.webp)

保存之后，重启服务：

```sh
systemctl daemon-reload
systemctl start docker
```

之后再使用 `docker info` 重新查看默认路径，可以看到已经 OK 了。

![](https://img.slarker.me/wiki/20250320153146296.webp)