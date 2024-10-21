# Compose 模板

![](https://img.slarker.me/wiki/d1f910c1b4c74765ba2754b10c8002e3.jpeg)

> Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来配置应用程序需要的所有服务。然后可以方便地从 YML 文件配置中创建并启动所有服务。

Unraid，fnOS，群晖等 NAS 系统都支持 Compose，很多通过自带的 docker GUI 无法配置的选项，都可以通过 Compose 使用 YML 配置文件来实现。而且 Compose 具有修改配置方便，方便备份，迁移等优点。

## Compose 模板

:::warning 注意
- 下面的 Compose 模板在 fnOS 中测试，也同时适用于群晖和 Unraid，仅需要修改对应的数据挂载路径。
- 下面所有 Compose 模板默认映射的文件夹路径都位于 `/vol1`，你需要根据自己的实际情况做出修改。
- 部分应用比如 `emby`，`jellyfin` 的默认端口都一样，如果需要同时安装，注意修改端口。
:::

这里分享一些常用的 [Compose 模板](https://www.123pan.com/s/1JKMjv-ICao)，包含以下应用：

| 名称        |     介绍      |  挂载目录 | 默认 Web 端口 |
| :-------------: | :-----------: | :----: | :----: |
| [AList](https://alist.nn.ci/zh/)       | 挂载网盘 | - | 5244 | 
| [BaiduDisk](https://hub.docker.com/r/johngong/baidunetdisk)       | 百度网盘 | downloads | 5800 |
|  [Calibre-Web](https://hub.docker.com/r/linuxserver/calibre-web)      |   电子书库   |  books | 8083 |
|  [CloudDrive2](https://www.clouddrive2.com/) |   映射网盘到本地    |   clouddrive | 19798 |
|  [Emby](https://hub.docker.com/r/amilys/embyserver) |   影视媒体库    |   downloads | 8096 |
|  [FileBrowser](https://github.com/filebrowser/filebrowser) |   文件管理器    |   vol1 | 6000 |
|  [Jellyfin](https://hub.docker.com/r/nyanmisaka/jellyfin) |   开源的影视媒体库    |   downloads | 8096 |
|  [Immich](https://immich.app/) |   照片备份    |   photos | 2283 |
|  [Metube](https://github.com/alexta69/metube) |   下载在线视频    |   downloads | 8081 |
|  [Memos](https://github.com/usememos/memos) |   开源的日记、微博应用    |   - | 5230 |
|  [Navidrome](https://github.com/navidrome/navidrome) |   音乐库    |   musics | 4533 |
|  [qBittorrent](https://hub.docker.com/r/linuxserver/qbittorrent) |   BT、PT 下载客户端    |   downloads | 8080 |
|  [SpeedTest](https://hub.docker.com/r/openspeedtest/latest) |   网速测试    |   - | 9000 |
|  [LibreSpeed](https://docs.linuxserver.io/images/docker-librespeed/) |   网速测试    |   - | 9900 |
|  [Syncthing](https://docs.linuxserver.io/images/docker-syncthing) |   跨平台文件同步    |   syncthing | 8384 |
|  [Xunlei](https://github.com/cnk3x/xunlei) |   迅雷    |   downloads | 2345 |
|  [RSSHub](https://docs.rsshub.app/) |   一切皆可 RSS！    |   - | 1200 |
|  [WeWeRSS](https://github.com/cooderl/wewe-rss) |   通过 RSS 订阅微信公众号    |   - | 4000 |
|  [Miniflux](https://miniflux.app/) |   极简的 RSS 阅读器    |   - | 8020 |
|  [Wallos](https://github.com/ellite/Wallos) |   个人订阅管理    |   - | 8282 |
|  [Planka](https://planka.app) |   看板    |   - | 5000 |
|  [Vaultwarden](https://hub.docker.com/r/vaultwarden/server) |   开源好用的密码管理器   |   - | 8030 |
|  [Syncclipboard](https://github.com/Jeric-X/SyncClipboard) |   跨平台剪贴板同步   |   - | 5033 |
|  [Metatube](https://metatube-community.github.io/README_ZH/) |   小姐姐刮削服务端   |   - | 8900 |
|  [UptimeKuma](https://github.com/louislam/uptime-kuma) |   服务监控  |   - | 3001 |
|  [iPerf3](https://hub.docker.com/r/networkstatic/iperf3) |   网络带宽性能测试  |   - | 5201 |
|  [Aria2-Pro](https://github.com/P3TERX/Aria2-Pro-Docker) |   轻量级下载工具  |  downloads | 6880 |
|  [DDNS-Go](https://github.com/jeessy2/ddns-go) |   自动绑定公网 IP 到对应域名  |   - | 9876 |


### 默认密码

访问方式：`NAS IP:默认 Web 端口`。

- AList、qBittorrent 默认密码可以到容器日志中查看。
- FileBrowser 默认用户名/密码：admin/admin。
- Calibre-Web 默认用户名/密码：admin/admin123。
- 迅雷内测码：`我不是矿神IMNKS`
- WeWeRSS 默认授权码：123456
- Miniflux 默认用户名/密码：admin/test123
- Planka 默认用户名/密码：admin/admin
- Syncclipboard 默认用户名/密码：admin/admin
- Aria2-Pro 默认 `RPC_SECRET`：P3TERX

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

在 fnOS 中，后续如果需要修改 Compose 配置，并且让配置生效，请按下面的步骤来操作：

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