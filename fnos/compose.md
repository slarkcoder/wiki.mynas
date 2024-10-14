# fnOS Compose 模板

![](https://img.slarker.me/wiki/d1f910c1b4c74765ba2754b10c8002e3.jpeg)

> Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来配置应用程序需要的所有服务。然后可以方便地从 YML 文件配置中创建并启动所有服务。

fnOS 支持 Compose，很多通过自带的 docker GUI 无法配置的选项，都可以通过 Compose 使用 YML 配置文件来实现。而且 Compose 具有修改配置方便，方便备份，迁移等优点。

## Compose 模板

:::warning 注意
下面所有 Compose 模板默认映射的文件夹路径都位于 `/vol1`，你需要根据自己的实际情况做出修改。
:::

这里分享一些常用的 [fnOS Compose 模板](https://www.123pan.com/s/1JKMjv-ICao)，包含以下应用：

| 名称        |     介绍      |  默认数据目录 |
| :-------------: | :-----------: | :----: |
| 115pc      |  115 网盘 | /vol1/1000/downloads |
| alist       | 挂载网盘 | - |
| baidudisk       | 百度网盘 | /vol1/1000/downloads |
|  calibre-web      |   电子书库   |  /vol1/1000/books |
|  clouddrive |   映射网盘到本地    |   /vol1/1000/clouddrive |
|  filebrowser |   文件管理器    |   /vol1 |
|  immich |   照片备份    |   /vol1/1000/photos |
|  metube |   下载在线视频    |   /vol1/1000/downloads |
|  navidrome |   音乐库    |   /vol1/1000/musics |
|  qbittorrent |   BT、PT 下载客户端    |   /vol1/1000/downloads |
|  speedtest |   网速测试    |   - |
|  syncthing |   跨平台文件同步    |   /vol1/1000/syncthing |
|  xunlei |   迅雷    |   /vol1/1000/downloads |

## 如何使用？

:::info 提示
建议 fnOS 中至少有一块 SSD 用来存储 docker 镜像和配置。第一次打开 docker 应用时，fnOS 会提示存储位置，可以将默认存储位置设置到这个 SSD 上，之后 docker 镜像就会保存到这块 SSD 里。

在系统自带的文件管理器中，切换到 `管理员视角`，在 SSD 的存储空间中就可以看到有个 `docker` 文件夹， 该文件夹就保存了 `docker` 镜像，运行环境，网络，插件等等。

需要注意的是，这个 `docker` 文件夹的位置位于存储空间根目录，和下面说的 `docker` 配置文件夹是两回事。比如选择了 docker 存储空间为 `/vol1`，那么该 docker 的文件夹路径为 `/vol1/docker`。

![](https://img.slarker.me/wiki/b7f53b07cf85475086fe98213b4aa363.png)

:::

在 SSD 的存储空间中，新建一个 `docker` 配置文件夹，该文件夹的位置应该为 `/vol1/1000/docker`，`1000` 表示当前的用户 ID，将上面的 Compose 文件夹中的所有文件上传到 `docker` 配置目录，应该像下面这样：

![](https://img.slarker.me/wiki/1e5e847f1af14f93b5bd17ca9aedbea6.png)

然后在 docker 应用中，逐个新建 `Compose` 项目，选择 `/vol1/1000/docker` 下面对应的 Compose 配置文件夹，确认所需映射的路径没问题，就可以一键安装 `Compose` 应用了。比如，以新建 `alist` Compose 项目为例：

在 `docker` -> `Compose` 中新增项目，项目名称输入 `alist`，路径选择 `/vol1/1000/docker/alist`，会自动提示 `使用现有的 docker-compose 配置来创建项目`，勾选 `创建项目后立即启动`，点击 `完成` 就会自动拉取相关 docker 镜像并启动项目。

![](https://img.slarker.me/wiki/910ff73f8ac54ddbbd60b7047dc7b56e.png)

## 如何修改 Compose 配置？

后续如果需要修改 Compose 配置，并且让配置生效，请按下面的步骤来操作：

- 停止 `Compose`
- 修改 `yml` 配置
- 清除 `Compose`
- 启动 `Compose`

## 如何更新 Compose 镜像？

目前在 fnOS 的 docker GUI 还不支持直接更新镜像，不过相信后面会支持的，暂时的替代办法是通过 `SSH` 命令手动更新。

以更新 immich 为例，[使用 SSH 登录](/fnos/ssh.md) fnOS，进入到 immich `docker-compose.yml` 配置文件所在目录。

```sh
cd /vol1/1000/docker/immich
```

使用下面的命令更新 Compose 镜像：

```sh
docker compose pull
```

更新完成后，可以在 GUI 中点击 `清除`，然后再点击 `构建`。

![](https://img.slarker.me/wiki/a76e77b20c2b4a26832339fcff3349fe.png)