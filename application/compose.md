# Docker Compose 模板

![](https://img.slarker.me/wiki/d1f910c1b4c74765ba2754b10c8002e3.jpeg)

> Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来配置应用程序需要的所有服务。然后可以方便地从 YML 文件配置中创建并启动所有服务。

Unraid，fnOS，群晖等 NAS 系统都支持 Compose，很多通过自带的 docker GUI 无法配置的选项，都可以通过 Compose 使用 YML 配置文件来实现。而且 Compose 具有修改配置方便，方便备份，迁移等优点。

## Compose 模板

:::warning 注意
- 下面的 Compose 模板在 fnOS 中测试，也同时适用于群晖和 Unraid，仅需要修改对应的数据挂载路径。
- 下面所有 Compose 模板默认映射的文件夹为 `/change/to/your/path`，你需要根据自己的实际情况做出修改。
- 部分应用比如 `emby`，`jellyfin` 的默认端口都一样，如果需要同时安装，注意修改端口。
- immich 需要将 `env` 配置文件名称修改为 `.env`。
:::

这里分享一些常用的 [Compose 模板](https://files.slarker.me)，包含以下应用：

| 名称        |     介绍      |  挂载目录 | 默认 Web 端口 |
| :-------------: | :-----------: | :----: | :----: |
| [OpenList](https://doc.oplist.org)       | 挂载网盘 | - | 5244 | 
| [Aria2-Pro](https://github.com/P3TERX/Aria2-Pro-Docker) |   轻量级下载工具  |  downloads | 6880 |
| [BaiduDisk](https://hub.docker.com/r/johngong/baidunetdisk)       | 百度网盘 | downloads | 5800 |
| [Calibre-Web](https://hub.docker.com/r/linuxserver/calibre-web)      |   电子书库   |  books | 8083 |
| [Cloudbak](https://www.cloudbak.org/install/install-docker.html) |   云朵备份，备份微信    |   cloudbak | 9527 |
| [CloudDrive2](https://www.clouddrive2.com/) |   映射网盘到本地    |   clouddrive | 19798 |
| [DDNS-Go](https://github.com/jeessy2/ddns-go) |   自动绑定公网 IP 到对应域名  |   - | 9876 |
| [Emby](https://hub.docker.com/r/amilys/embyserver) |   影视媒体库    |   downloads | 8096 |
| [FileBrowser](https://github.com/filebrowser/filebrowser) |   文件管理器    |   vol1 | 9000 |
|  [Jellyfin](https://hub.docker.com/r/nyanmisaka/jellyfin) |   开源的影视媒体库    |   downloads | 8096 |
|  [Immich](https://immich.app/) |   照片备份    |   photos | 2283 |
|  [iPerf3](https://hub.docker.com/r/networkstatic/iperf3) |   网络带宽性能测试  |   - | 5201 |
|  [LibreSpeed](https://docs.linuxserver.io/images/docker-librespeed/) |   网速测试    |   - | 9001 |
|  [Metube](https://github.com/alexta69/metube) |   下载在线视频    |   downloads | 8081 |
|  [Memos](https://github.com/usememos/memos) |   开源的日记、微博应用    |   - | 5230 |
|  [Miniflux](https://miniflux.app/) |   极简的 RSS 阅读器    |   - | 8020 |
|  [Metatube](https://metatube-community.github.io/README_ZH/) |   小姐姐刮削服务端   |   - | 8900 |
|  [Navidrome](https://github.com/navidrome/navidrome) |   音乐库    |   musics | 4533 |
|  [Planka](https://planka.app) |   看板    |   - | 5000 |
|  [qBittorrent](https://hub.docker.com/r/linuxserver/qbittorrent) |   BT、PT 下载客户端    |   downloads | 8080 |
|  [RSSHub](https://docs.rsshub.app/) |   一切皆可 RSS！    |   - | 1200 |
|  [SpeedTest](https://hub.docker.com/r/openspeedtest/latest) |   网速测试    |   - | 9002 |
|  [Syncthing](https://docs.linuxserver.io/images/docker-syncthing) |   跨平台文件同步    |   syncthing | 8384 |
|  [Syncclipboard](https://github.com/Jeric-X/SyncClipboard) |   跨平台剪贴板同步   |   - | 5033 |
|  [Sun-Panel](https://doc.sun-panel.top/zh_cn/) |   NAS 导航页   |   - | 3002 |
|  [Transmission](https://hub.docker.com/r/linuxserver/transmission) |   BT、PT 下载客户端   | downloads | 9091 |
|  [UptimeKuma](https://github.com/louislam/uptime-kuma) |   服务监控  |   - | 3001 |
|  [Vaultwarden](https://hub.docker.com/r/vaultwarden/server) |   开源好用的密码管理器   |   - | 8030 |
|  [WeWeRSS](https://github.com/cooderl/wewe-rss) |   通过 RSS 订阅微信公众号    |   - | 4000 |
|  [Wxedge](https://help.onethingcloud.com/7cb4/2c7f) |   网心云    |   wxedge | 18888 |
|  [Wallos](https://github.com/ellite/Wallos) |   个人订阅管理    |   - | 8282 |
|  [Xiaoya](https://github.com/monlor/docker-xiaoya) |   小雅全家桶    |   -  | 5678 |
|  [Xunlei](https://github.com/cnk3x/xunlei) |   迅雷    |   downloads | 2345 |

- qBittorrent 内置了两套 WebUI，分别为 `vuetorrent` 和 `qb-web`。可以在 `设置` -> `Web UI` 中切换。需要勾选 ` 使用备用 Web UI
`，文件路径设置为：`/config/vuetorrent` 或 `/config/qb-web`。

### 默认密码

访问方式：`NAS IP:默认 Web 端口`。

- OpenList、qBittorrent 默认密码可以到容器日志中查看。
- Aria2-Pro 默认 `RPC_SECRET`：P3TERX
- Calibre-Web 默认用户名/密码：admin/admin123。
- FileBrowser 默认用户名/密码：admin/admin。
- 迅雷内测码：`我不是矿神IMNKS`
- Miniflux 默认用户名/密码：admin/test123
- Planka 默认用户名/密码：admin/admin
- Syncclipboard 默认用户名/密码：admin/admin
- Sun-Panel 默认用户名/密码：admin@sun.cc/12345678
- xiaoya 全家桶默认用户信息请查看[项目介绍](https://github.com/monlor/docker-xiaoya)。
- WeWeRSS 默认授权码：123456

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

## 如何更新 Compose 应用？

:::info 提示
目前在 fnOS 的 docker GUI 暂不支持直接更新 Compose 应用，后面应该也会支持的。
:::

### 使用 watchtower 自动更新

可以使用 `watchtower` 实现自动更新，上面分享的 Compose 模版默认不包含 `watchtower`。如果你想自动更新 Compose 应用，可以在 `docker-compose.yml` 中加入下面的配置（watchtower 部分），以 RSSHub 这个 Compose 为例：

```yml
name: rsshub
services:
  rsshub:
    container_name: rsshub
    ports:
      - 1200:1200
    image: diygod/rsshub
    restart: always

  watchtower:
    image: containrrr/watchtower
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    command: --interval 86400 --cleanup --remove-volumes
    environment:
      - WATCHTOWER_CLEANUP=true
      - WATCHTOWER_REMOVE_VOLUMES=true

```

其中的 `86400` 代表每 `24` 小时（3600*24）会自动检测更新，如果有新的镜像，会自动完成拉取镜像，删除容器，重建容器等一系列操作。

### 使用命令手动更新

[使用 SSH 登录](/fnos/ssh.md) fnOS，`cd` 进入到需要更新的应用的 Compose 配置目录（该目录下面有 `yml` 配置文件）。以 `immich` 为例：

```sh
# 此处 docker 配置目录位于 vol1 存储池
cd /vol1/1000/docker/immich
```

依次按照下面的命令进行更新：

```sh
# 先停止 compose 项目
docker compose down
# 拉取最新镜像
docker compose pull
# 启动 compose 项目
docker compose up -d
```

![](https://img.slarker.me/wiki/1ad91aac7fa84ed491ad951deb1cd6e1.webp)