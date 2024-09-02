# 值得推荐的 NAS 应用

我的 NAS 上目前装了 [下面这些服务](https://homepage.slarker.me/)，囊括了文件管理，照片书影音，下载备份，以及一些常用的服务，供你参考。

![3Ihvmm_vqfQe0](https://img-1255332810.cos.ap-chengdu.myqcloud.com/3Ihvmm_vqfQe0.png)

## 虚拟机

NAS 系统是 Unraid，iStoreOS 使用虚拟机的方式安装。iStoreOS 作为主路由来用。Unraid 运行虚拟机和 Docker 都非常方便，而且效率很不错。

## Docker 应用

- 文件管理 - FileBrowser
- 网盘挂载 - Alist
- 文件同步 - Syncthing
- 数据备份 - Duplicati
- 迅雷
- BT/PT 下载 - qBittorrent
- 直链下载 - Aria2-Pro
- 视频下载 - MeTube
- 在线影音 - Jellyfin
- 影视刮削 - TinyMediaManager
- 百度网盘 - baidudisk
- 电子书库 - Calibre-Web
- 音乐库 - Navidrome
- 照片备份 - immich
- 服务监控 - UptimeKuma 
- NAS 服务导航 - homepage
- 局域网络测速 - SpeedTest
- 网络测试 - iperf3
- 内网穿透客户端 - nps
- 局域网多设备剪贴板同步 - SyncClipboard
- 记录奇思妙想 - memos

### 文件管理 - FileBrowser

FileBrowser 是一款不错的第三方文件管理器，用来弥补 Unraid 文件管理功能缺失的短板。

![y9KngI_X9gVLe](https://img-1255332810.cos.ap-chengdu.myqcloud.com/y9KngI_X9gVLe.png)

> 安装方式：通过 Unraid 应用中心直接安装。

### 网盘挂载 - AList

AList 作为一款整合了市面上大多数常见网盘的挂载工具，使用方便，而且提供了 webdav 服务。配合 aria2 工具可以方便的将网盘资源下载到 NAS 中，或者直接在线看 NAS 里的电影也不错。

![NuMIcn_riOJrn](https://img-1255332810.cos.ap-chengdu.myqcloud.com/NuMIcn_riOJrn.png)

> 安装方式：通过 Unraid 应用中心直接安装。

### 文件同步 - Syncthing

由于我需要将手机里的照片，电脑上的音乐、电子书同步到 NAS 里，Syncthing 就是很好的选择，开源免费，各个设备都有客户端。配置好基本就不用去干预了，非常省心。

> 安装方式：通过 Unraid 应用中心直接安装。

### 数据备份 - Duplicati

我的重要数据并不多，所以并没有做 Raid，专门用了一块闲置的 SSD 来作为备份使用。而开源的 Duplicati 就是一个很好用的备份工具。我将 NAS 里的音乐，书，影音，照片以及 Docker 应用都做了定时备份。Duplicati 支持增量备份，也非常节省空间。对于重要数据量不多，既想保证数据安全，又不想做 Raid 的朋友来说非常适合。

![YLmI28_WJX996](https://img-1255332810.cos.ap-chengdu.myqcloud.com/YLmI28_WJX996.png)

> 安装方式：通过 Unraid 应用中心直接安装。

### 迅雷

有些资源是迅雷链接，不得不用迅雷下载，但电脑上又不想装个全身都是广告的迅雷，所以装个 docker 版的非常清爽。

> 安装方式：可以通过我分享的 [模板](/unraid/unraid_docker_template.md) 来安装。

默认访问端口是 `2345`。如果打开后提示需要激活码，可以使用下面这个：

`我不是矿神IMNKS`

### BT/PT 下载 - qBittorrent

经常用 PT 站下载资源，qBittorrent 就是一款不错的工具，PT 站基本都支持。如果觉得自带的 UI 难看，可以使用这个第三方的 [VueTorrent](https://github.com/WDaan/VueTorrent)，效果如下。

![R8d4FR_YlEilG](https://img-1255332810.cos.ap-chengdu.myqcloud.com/R8d4FR_YlEilG.png)

> 安装方式：通过 Unraid 应用中心直接安装。

### 直链下载 - Aria2-Pro

上面我也提到了，AList 中挂载的网盘资源可以直接复制下载链接，粘贴到 aria2 中。Aria2 默认并没有 UI，可以使用 ariang 这款前端来管理下载任务。

> 安装方式：可以通过我分享的 [模板](/unraid/unraid_docker_template.md) 来安装。

默认的 RPC 监听端口是 `6800`，RPC_SECRET 是 ariang 这个管理前端用来和 Aria2 交互的认证密钥，默认是：

`7iQzqgg6Soe5MqpWGaLODhAbNcFwkFEaQYCQhCAtDrIZ`

### 视频下载 - MeTube

如果经常需要下载一些视频，也不需要到处去找视频下载工具了，MeTube 就是一款支持常见视频网站的视频下载工具。

![ZuPykG_gYFsbq](https://img-1255332810.cos.ap-chengdu.myqcloud.com/ZuPykG_gYFsbq.png)

> 安装方式：可以通过我分享的 [模板](/unraid/unraid_docker_template.md) 来安装。

### 在线影音 - Jellyfin

Jellyfin 是一款开源的在线影音应用，可以方便的把 NAS 中的电视剧和电影管理起来，在各个设备上观看都很方便。特别是在外远程访问的时候，也可以做到转码自适应带宽，流畅观看不卡顿。

> 安装方式：可以通过我分享的 [模板](/unraid/unraid_docker_template.md) 来安装。

### 影视刮削 - TinyMediaManager

Jellyfin 自带的刮削功能比较弱，使用 TinyMediaManager 就可以很好的解决这个问题。

![l8oGNR_qFffRb](https://img-1255332810.cos.ap-chengdu.myqcloud.com/l8oGNR_qFffRb.png)

> 安装方式：可以通过 docker 命令安装。

### 电子书库 - Calibre-Web

管理自己收藏的电子书，而且可以方便的推送到 Kindle 设备。

![muJgbW_qtn36w](https://img-1255332810.cos.ap-chengdu.myqcloud.com/muJgbW_qtn36w.jpg)

> 安装方式：可以通过我分享的 [模板](/unraid/unraid_docker_template.md) 来安装。

### 音乐库 - Navidrome

音乐如果太多也会占用不少的手机存储空间，不想把音乐都存到手机上，又想做到随时都能听。那可以用 Navidrome 建立自己的音乐库，通过远程的方式来访问。Navidrome 使用 Subsonic API，支持的手机客户端也有一大堆。

![bn3DvN_T2PDbv](https://img-1255332810.cos.ap-chengdu.myqcloud.com/bn3DvN_T2PDbv.png)


> 安装方式：可以通过我分享的 [模板](/unraid/unraid_docker_template.md) 来安装。

### 照片备份 - immich

Immich 是一个非常好用的照片管理工具，支持人脸识别，开源免费，支持 Android，iOS，更新非常频繁。

![B2T789_J8cCq5](https://img-1255332810.cos.ap-chengdu.myqcloud.com/B2T789_J8cCq5.png)

> 安装方式：通过 Docker Compose 安装，具体可以参考官方 [教程](https://immich.app/docs/install/unraid)。

### 局域网络测速 - SpeedTest

SpeedTest 用来测试局域网里的网速，可以判断各个设备到 NAS 之间的网速是否正常。

![2i4un1en.5zr_3jZ2vh](https://img-1255332810.cos.ap-chengdu.myqcloud.com/2i4un1en.5zr_3jZ2vh.png)

> 安装方式：可以通过我分享的 [模板](/unraid/unraid_docker_template.md) 来安装。

### NAS 导航 - homepage

NAS 上装的服务多了之后，不免就得记各种服务的端口，最简单的办法就是添加书签。使用导航页也是个不错的办法，就是配置起来稍微繁琐点。

![APK6oK_nPhhO4](https://img-1255332810.cos.ap-chengdu.myqcloud.com/APK6oK_nPhhO4.jpg)

> 安装方式：通过 Unraid 应用中心直接安装。

### 局域网多设备剪贴板同步 - SyncClipboard

可以用来同步手机，电脑的剪贴板，帮你提高工作效率，支持跨平台。

项目地址：https://github.com/Jeric-X/SyncClipboard

> 安装方式：可以通过我分享的 [模板](/unraid/unraid_docker_template.md) 来安装。