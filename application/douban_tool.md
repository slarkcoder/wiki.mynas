# 低门槛、易上手的自动化观影方案

:::warning 重要提示
由于 [项目介绍页面](https://www.bilibili.com/read/cv35942028/?jump_opus=1) 已经被删除，猜测可能是作者已经弃坑了 😂，所以 `douban-tool` 已经没必要折腾了。
<!-- 最近 `BTNULL` 更换了域名，由于 `douban-tool` 依赖 `BTNULL` 网站匹配资源，所以只有等待 `douban-tool` 镜像更新后才可以继续用。 -->
:::

![Snipaste_2024-07-25_13-13-51_L15NtG](https://img.slarker.me/wiki/Snipaste_2024-07-25_13-13-51_L15NtG.jpg)

观影是很多 NAS 用户的刚需，传统的方案是先搜索 BT 资源链接，使用 BT 工具下载，然后通过各种播放软件直接打开播放。这两年流行的小雅主要是基于阿里云盘的资源，但最近也因为阿里云盘政策的收紧也变得不可用了，如果不充值第三方权益包的话速度也会很慢。很多人用的 MoviePilot，NAStool 需要依赖于 PT 站点的资源，玩 PT 对大部分人来说，门槛也比较高。

最近又出现了一个新的自动化观影方案 `douban-tool`，可以通过豆瓣标记想看的资源，通过 NAS 上的 BT 下载软件自动下载对应的资源到硬盘里，相比基于 PT 的方案，可以说是门槛降低了不少，而且配置也很简单。本文将介绍如何使用 `douban-tool`。

## 注意事项

- `douban-tool` 默认的 web 端口是 5000，经过我在 Unraid 上面的测试，如果改成其它端口，可能会出现无法访问的情况，所以推荐使用默认的 5000 端口，如果有其它应用已经占用了 5000 端口，可以把该应用改成别的端口。
- 这个方案是基于 BT 下载资源，下载速度要看该资源是否热门。资源热门，BT 同时下载人数越多，下载就快。反之资源越冷门，BT 同时下载人数就越少，下载就慢。
- 使用 `qBittorrent` 作为下载工具，可以通过添加 `tracker` 来连接更多的下载用户，提高下载速度。
- 这个方案的原理是每隔一段时间去检查豆瓣标记（建议是间隔 2 个小时以上），避免被豆瓣风控，所以标记后不一定会立即下载，需要等一段时间。

## 准备工作

`douban-tool` 实现的主要功能为获取豆瓣标记，通过 [BTNULL](https://www.btnull.org/) 这个网站匹配相应的 BT 资源，然后调用 BT 工具资源下载到本地并使用 `TMDB API` 来实现刮削。

需要提前注册好 [BTNULL](https://www.btnull.org/) 和 [TMDB](https://www.themoviedb.org/) 账号。

整个流程比较清晰简单，步骤也不复杂，涉及到的 docker 也只有 2 个，分别是 `douban-tool` 和 `qBittorrent` 或者 `迅雷`，本篇教程以 `qBittorrent` 为例作为介绍，迅雷设置方法可以参考 [这里](https://www.bilibili.com/read/cv35942028/?jump_opus=1)。

`douban-tool` 的资源目录和 `qBittorrent` 的下载目录，需要保持一致。

如果需要使用 `Emby` 或者 `Jellyfin` 等工具，可以通过 docker 单独安装，将 BT 的下载目录挂载到 `Emby` 或者 `Jellyfin` 中。

## 安装 douban-tool

### Unraid 

Unraid 可以通过模板安装 `douban-tool` 和 `qBittorrent`，具体可以看 [通过模板更新 Docker 应用](/unraid/unraid_docker_template.md)。

![5vwApf_8Y84zi](https://img.slarker.me/wiki/5vwApf_8Y84zi.png)

### 群晖

群晖可以在 `Container Manager` 中安装 `douban-tool`，在注册表中搜索 `douban-tool`，下载镜像后运行。

按图中所示映射端口号、文件夹（左侧为 `主机`，右侧为 `容器`）：

- `5002` -> `5000`，为避免和群晖默认端口冲突，主机端口可以改成 `5002` 或者其它端口
- `/docker/douban-tool/config` -> `/app/config`
- `/docker/douban-tool/data` -> `/app/data`
- `/downloads` -> `/downloads`

![z35vukbq.zzt_gnMolb](https://img.slarker.me/wiki/z35vukbq.zzt_gnMolb.png)

设置好之后，一路下一步，就可以完成了。

### fnOS

首先按照下图所示建好文件夹：

![](https://img.slarker.me/wiki/202409110032422.png)

[使用 SSH 登录](/fnos/ssh.md) fnOS，并切换到 `root` 用户，执行下面的命令创建 `douban-tool` 容器：

```sh
docker run -d \
  --name douban-tool \
  --restart=always \
  --net=bridge \
  -p 5000:5000 \
  -v /vol1/1000/docker/douban-tool/data:/app/data \
  -v /vol1/1000/docker/douban-tool/config:/app/config \
  -v /vol1/1000/downloads:/downloads \
  zack357/douban-tool:latest
```

## 设置 douban-tool

打开 `douban-tool` 的 web 页面（Unraid 模板默认端口：`5000`，群晖默认端口：`5002`），按照下图进行设置：

- 豆瓣 id 可以使用浏览器打开你的 [豆瓣](https://www.douban.com/) 个人主页，浏览器地址栏 `people` 后面的一串 `数字`（不包含 `/`）就是你的豆瓣 ID。
- Sleep Interval：设置检查豆瓣标记的间隔时间，默认为 `2` 小时，间隔过短可能导致账号被风控，建议保持默认。
- Junk File Size：过滤掉小于多少 `MB` 的文件，可以避免下载低质量或者似是而非或者的垃圾资源。
- TMDB API Key：如果需要刮削，可以 [获取 TMDB API Key](https://www.themoviedb.org/settings/api)，用于获取电影和电视剧的详细信息。

![Snipaste_2024-07-25_16-33-44_Q263xo](https://img.slarker.me/wiki/Snipaste_2024-07-25_16-33-44_Q263xo.png)

![Snipaste_2024-07-25_16-54-57_FmOZH5](https://img.slarker.me/wiki/Snipaste_2024-07-25_16-54-57_FmOZH5.png)

填写完成之后，点击 `Save` 保存，这个时候可以先到豆瓣标记几个想看的电影，重启 `douban-tool` 容器就会自动调用 `qBittorrent` 下载。

![Snipaste_2024-07-25_12-51-09_QsX1Qj](https://img.slarker.me/wiki/Snipaste_2024-07-25_12-51-09_QsX1Qj.png)

## 设置 qBittorrent tracker

为了让 `qBittorrent` 能连接到更多的用户，可以添加 tracker 地址，具体地址可以到下面这几个网站获取：

- https://dns.icoa.cn/tracker/
- https://trackerslist.com/#/zh

在 `qBittorrent` 的设置中，找到 `BitTorrent`，可以在最下方看到 `自动将这些 tracker 添加到新下载`，勾选启用并加入 `tracker 地址` 后点击保存。

![7NQJZe_Y327ci](https://img.slarker.me/wiki/7NQJZe_Y327ci.png)

## 使用迅雷作为下载工具

如果你有迅雷会员，想让迅雷作为 `douban-tool` 的默认下载工具，可以参照下面进行设置。推荐使用 docker 版的迅雷，注意迅雷的下载目录需要和 `douban-tool` 保持一致。

![5D2Vtt_pw7dLG](https://img.slarker.me/wiki/5D2Vtt_pw7dLG.png)

`Xunlei Device Name` 在绑定手机迅雷 App 后，可以在远程设备里看到，这里需要填写完整的设备名称，如下图所示：

![KWgyTV_XOapEc](https://img.slarker.me/wiki/KWgyTV_XOapEc.png)

## 常见错误排查

可以查看 `douban-tool` 的日志，来确认是否正常。

![koapg4ho.g3a_7Sr6G5](https://img.slarker.me/wiki/koapg4ho.g3a_7Sr6G5.png)

如果遇到错误提示不明白含义，可以到 [这篇文章](https://www.bilibili.com/read/cv35942028/?jump_opus=1) 查看具体错误原因及解决方案：