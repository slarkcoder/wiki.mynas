# 解决 Docker 镜像无法下载问题

很多朋友安装 Docker 应用的时候出现下载失败问题。想解决这个问题通常有两种办法，第一种是设置代理，比如在主路由或者旁路由上配置代理，可以让拉取 docker 镜像是通过代理加速。第二种是直接使用镜像加速器。

## 设置代理

关于在 Unraid、群晖上如何安装 iStoreOS 主路由，旁路由，此前我已经写了几篇相关的教程，可以按需参考：

- 适用于 `Unraid`：[一文搞定 Unraid 安装软路由](/unraid/router.md)
- 适用于 `群晖`：[安装旁路由](/synology/router.md)

安装好 iStoreOS 之后，可以很方便的安装相关代理插件，配置好自己节点之后就可以正常拉取镜像了。

## 镜像加速器

使用镜像加速器可以有效解决 Docker 下载失败问题。

### 群晖

:::warning 注意
近几天群晖 `Docker` 注册表提示出错，原因是 `auth.docker.io` 被屏蔽。

![](https://img.slarker.me/wiki/gx32fa50.xef.webp)

目前通过命令拉取镜像正常，建议使用教程末尾的方法拉取 `Docker` 镜像。
:::

> 群晖仅支持为 Docker Hub 的镜像添加加速地址。对于其它仓库 （比如 Github）的 Docker 镜像，则需要 `手动替换为加速地址` 后再拉取。比如：`ghcr.io/ggerganov/llama.cpp:full`，则需要将 `ghcr.io` 替换为加速地址之后，通过命令行手动拉取。

打开 `Container Manager`，在 `注册表` -> `设置` 中编辑名为 `Docker Hub（v1）` 的条目。

![Su5bhz_pqRrkx](https://img.slarker.me/wiki/Su5bhz_pqRrkx.png)

选中 `启用注册表镜像`，点击 `新增`，填写镜像加速地址，并应用。

![fadx1q1i.u1y_qkVNsU](https://img.slarker.me/wiki/fadx1q1i.u1y_qkVNsU.png)

之后在 `套件中心` 先 `停用` Container Manager，再 `启动`，镜像加速地址就可以生效。

![DeBY64_ZtHWt7](https://img.slarker.me/wiki/DeBY64_ZtHWt7.png)

### Unraid

打开 Unraid 的 `终端`，将下面命令中的 `xxxx` 替换为镜像加速地址之后再执行：

```sh
mkdir -p /etc/docker;
tee /etc/docker/daemon.json <<- EOF
{
  "registry-mirrors": [
    "xxxx"
    ]
}
EOF
```

之后到 `设置` -> `Docker` 中先将 `启用 Docker` 设置为 `否`，点击应用：

![adwo3ql1.34y_djmT5u](https://img.slarker.me/wiki/adwo3ql1.34y_djmT5u.png)

之后再设置为 `是`，再次点击应用，加速镜像地址即可生效。

:::warning 解决重启失效问题

Unraid 重启之后，`/etc/docker/daemon.json` 会被清空。可以将上面的命令添加到 `/boot/config/go` 文件中来实现开机自动执行。

- 方法 1：

打开 Unraid 终端，使用 `nano boot/config/go` 命令编辑 `go` 文件。将上面的命令粘贴到 `go` 文件末尾，`Ctrl + X` 保存，输入 `Y` 确认退出。

- 方法 2：

在 Unraid 主界面中，点击引导设备 Flash，打开引导设备的 SMB，通过电脑上的文本编辑器编辑 `go` 文件，将上面的命令粘贴到 `go` 文件末尾，保存退出。
:::

### Unraid 移除加速镜像

如果不想使用加速镜像地址，可以把 `/etc/docker/daemon.json` 这个文件删除，把 `boot/config/go` 中添加的命令删除，然后重启 Docker 服务。删除文件可以用下面这个命令：

```sh
rm -rf /etc/docker/daemon.json
```

### 使用命令拉取镜像

使用 `SSH` 登录 NAS，切换到 `root` 用户。

以 `amilys/embyserver` 为例，正常情况下使用下面的命令拉取镜像：

```sh
docker pull amilys/embyserver
```

如果镜像加速地址为：https://xxx.xxx.com，则使用下面的命令通过镜像加速来拉取镜像：

```sh
docker pull https://xxx.xxx.com/amilys/embyserver
```