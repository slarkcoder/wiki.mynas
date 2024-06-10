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

打开 `Container Manager`，在 `注册表` -> `设置` 中编辑名为 `Docker Hub（v1）` 的条目。

![Su5bhz_pqRrkx](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Su5bhz_pqRrkx.png)

选中 `启用注册表镜像`，点击 `新增`，填写镜像加速地址，并应用。

![fadx1q1i.u1y_qkVNsU](https://img-1255332810.cos.ap-chengdu.myqcloud.com/fadx1q1i.u1y_qkVNsU.png)

之后在 `套件中心` 先 `停用` Container Manager，再 `启动`，镜像加速地址就可以生效。

![DeBY64_ZtHWt7](https://img-1255332810.cos.ap-chengdu.myqcloud.com/DeBY64_ZtHWt7.png)

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

![adwo3ql1.34y_djmT5u](https://img-1255332810.cos.ap-chengdu.myqcloud.com/adwo3ql1.34y_djmT5u.png)

之后再设置为 `是`，再次点击应用，加速镜像地址即可生效。




