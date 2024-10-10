# 升级 Compose

最近有群友安装最新版的 immich 时遇到问题，提示不支持 `start_interval` 属性：

![WechatIMG166_rpHaX1](https://img.slarker.me/wiki/WechatIMG166_rpHaX1.png)

经过查询，应该是群晖自带的 Compose 版本过低导致，只要将 Compose 升级到最新版就可以解决。

查询当前 `Docker Compose` 版本：

```sh
docker-compose version
```

## 如何升级？

[使用 SSH 登录](/synology/ssh.md) 群晖，并切换到 `root` 用户。

进入到 Compose 的安装目录：

```sh
cd /var/packages/ContainerManager/target/usr/bin
```

最新的版本号可以在 [这里](https://github.com/docker/compose/releases) 看到，将下面命令中的版本号 `v2.27.1` 可以替换成最新的，然后执行升级命令：

```sh
curl -SL https://github.com/docker/compose/releases/download/v2.27.1/docker-compose-linux-x86_64 -o docker-compose
```

升级完成后，可以再次使用 `docker-compose version` 检查下版本号，是否升级成功。

![3c2SNM_ZO65r5](https://img.slarker.me/wiki/3c2SNM_ZO65r5.png)