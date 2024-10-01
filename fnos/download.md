# 常用的下载工具

![](https://img.slarker.me/wiki/d16588893b7a4c8e8e25ee3cf3a18970.webp)

虽然 fnOS 自带了一些下载工具，比如迅雷，qBittorrent 等等，但是需要改一些设置的时候，比如自定义 WebUI，下载路径等等都不如 docker 版方便，本篇就来介绍安装一些 docker 版的下载工具。

由于这些下载工具的 docker 配置都很简单，安装过程基本都一样，仅有端口和配置路径略有区别，所以下面就只贴出需要修改的配置。

:::info 提示
下面所有 docker 配置中的 fnOS 主机路径（配置、下载）均表示相对路径。以迅雷 docker 为例：
- 配置路径 `/docker/xunlei` 在我的 NAS 中的实际路径为 `/vol1/1000/docker/xunlei`。
- 下载路径 `/downloads` 在我的 NAS 中的实际路径为 `/vol2/1000/downloads`。
:::

## 安装过程

- 建立下载文件夹（比如下面 fnOS 中的统一下载路径都为 `/downloads`）和 docker 配置文件夹

    ![](https://img.slarker.me/wiki/cb3a4dafb21646dc8cced50a10dd23aa.webp)
    
- 在 docker 镜像仓库中搜索相关镜像并下载

    ![](https://img.slarker.me/wiki/3effeb8db6db42eab8d49cf231594b0e.webp)

- 设置应用，勾选 `开机启动`，按照镜像要求设置 `WebUI 端口`、`配置路径`、`下载路径`
  
    ![](https://img.slarker.me/wiki/f0335699bd8949f5a384422934c20ea4.webp)

- 设置过程中，未提及的参数不需要设置，保持默认
- 如果有需要配置其它参数，可以点击镜像名称链接，查看项目的详细说明

## 迅雷

:::warning 注意
需要在功能选项中勾选 `使用高权限执行容器`。
:::

镜像介绍：迅雷 docker 版，从群晖套件中提取出来的，支持绑定手机迅雷，可以远程控制。
镜像名称：[cnk3x/xunlei](https://hub.docker.com/r/cnk3x/xunlei)

| 名称        |     fnOS 主机      |  容器 |
| :-------------: | :-----------: | :----: |
| WebUI 端口      | 2345 | 2345 |
|  配置路径      |   /docker/xunlei   |  /xunlei/data |
|  下载路径 |   /downloads    |   /xunlei/downloads |

## qBittorrent

:::warning 注意
- qBittorrent 初始密码请查看 docker 应用日志。
- 下面的连接端口（TCP、UDP）为 50000，安装好之后需要在 WebUI 中将监听端口修改为 `50000`。
:::

镜像介绍：非常流行的 BT/PT 下载客户端。
镜像名称：[linuxserver/qbittorrent](https://hub.docker.com/r/linuxserver/qbittorrent)

| 名称        |     fnOS 主机      |  容器 |
| :-------------: | :-----------: | :----: |
| 连接端口 TCP      |  50000 | 50000 |
| 连接端口 UDP       | 50000 | 50000 |
| WebUI 端口       | 8080 | 8080 |
|  配置路径      |   /docker/qbittorrent   |  /config |
|  下载路径 |   /downloads    |   /downloads |

## Metube

镜像介绍：基于知名的 [yt-dlp](https://github.com/yt-dlp/yt-dlp) 封装，支持主流视频网站的视频下载器。
镜像名称：[alexta69/metube](https://github.com/alexta69/metube)

| 名称        |     fnOS 主机      |  容器 |
| :-------------: | :-----------: | :----: |
| WebUI 端口       | 8081 | 8081 |
|  下载路径 |   /downloads    |   /downloads |

## 百度网盘

镜像介绍：官方百度网盘客户端 VNC 版。
镜像名称：[johngong/baidunetdisk](https://hub.docker.com/r/johngong/baidunetdisk)

| 名称        |     fnOS 主机      |  容器 |
| :-------------: | :-----------: | :----: |
| WebUI 端口（VNC）       | 5800 | 5800 |
|  配置路径      |   /docker/baidunetdisk   |  /config |
|  下载路径 |   /downloads    |   /config/baidunetdiskdownload |

## 115 网盘

:::warning 注意
如果 115 docker 内提示更新，不要更新！
:::

镜像介绍：115 网盘 Linux 版本的 Docker 封装。
镜像名称：[funcman/115pc](https://hub.docker.com/r/funcman/115pc/)

| 名称        |     fnOS 主机      |  容器 |
| :-------------: | :-----------: | :----: |
| WebUI 端口（VNC）   | 15800 | 5800 |
|  配置路径      |   /docker/115pc   |  /config |
|  下载路径 |   /downloads    |   /Downloads/115download  |



