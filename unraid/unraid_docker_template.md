# 通过模板更新 Docker 应用

使用 Unraid 过程中，有时候会遇到这样的问题：Docker 应用提示更新，但点击 `应用更新` 按钮，却提示找不到配置。

![fK3jKZ_e40bFt](https://img.slarker.me/wiki/fK3jKZ_e40bFt.png)

要想解决这个问题，必须要了解下 Docker 是如何更新的。Docker 本身并不支持直接更新应用，即便使用命令，也需要先删除应用，然后拉取应用的最新镜像，再使用命令重新创建应用。

Unraid 为了用户可以更方便的使用 Docker，加入了模板这个概念，Unraid 的应用市场里的应用都已经有现成的模板，模板就是把该应用需要填写的应用参数都预先设置好，用户通过模板无须修改设置或者仅做少数修改即可轻松部署应用。对于应用市场没有的应用，只要用户自己通过 Unraid 添加容器，也会自动将该应用的配置保存为模板，方便用户后续的修改设置和更新。

![a2LIVX_S9i0gC](https://img.slarker.me/wiki/a2LIVX_S9i0gC.png)

应用的模板文件会保存到  `/boot/config/plugins/dockerMan/templates-user` 目录中，该文件夹位于启动 U 盘中，模板会保存为 `*.xml` 文件。

![9gJHbl_OuIYYS](https://img.slarker.me/wiki/9gJHbl_OuIYYS.png)

只要应用模板存在，就可以在提示 `应用更新` 的时候，直接更新应用。Unraid 会根据应用模板，自动的完成停止容器，移除容器，拉取镜像，重新创建容器的操作。

![w200mA_3JMTsA](https://img.slarker.me/wiki/w200mA_3JMTsA.png)

所以在更新的时候提示 `找不到配置` ，是因为找不到该应用的模板，Unraid 的 Docker 不知道该应用到底需要哪些参数，就无法自动完成重新创建应用容器的操作。

## 分享自用的模板

这里有一些我自己创建的模板，可以方便的安装常用的 Docker 应用。

[Unraid_Docker_模板](https://www.123pan.com/s/1JKMjv-1BBo)

目前包含下面这些应用：

- AList，挂载各大网盘，方便其它设备通过统一的 `WebDAV` 访问。
- Aria2-Pro，强大的轻量级下载工具，默认下载目录为共享文件夹 `downloads`，默认 RPC Secret 为：`7iQzqgg6Soe5MqpWGaLODhAbNcFwkFEaQYCQhCAtDrIZ`
- Ariang，搭配 `Aria2-Pro` 使用的 Web 前端。
- [Duplicati](/unraid/duplicati.md)，自动备份工具。
- [Douban_tool](/application/douban_tool.md)，通过豆瓣标记自动下载资源神器！
- Filebrowser，第三方的文件管理器，简洁易用。
- [Jellyfin](/unraid/jellyfin_harddecode.md)，默认媒体目录为共享文件夹 `media`
- [MetaTube](/unraid/javspider.md)，自动刮削小姐姐插件
- Metube，支持主流视频网站（B 站，油管）的下载视频，默认下载目录为共享文件夹 `downloads`
- Navidrome，自建音乐库的不二之选，默认音乐目录为共享文件夹 `musics`
- qBittorrent，知名的 BT/PT 下载客户端，默认下载目录为共享文件夹 `downloads`
- [Immich](/unraid/deploy_immich.md)，媲美 `Google Photos` 的开源照片备份工具，默认的照片备份文件夹为 `photos`
- [Homepage](/application/homepage.md)，美观的 NAS 主页导航。
- [SpeedTest](/unraid/speedtest.md)，局域网测速。
- [SyncClipboard](/unraid/clipboard_sync.md)，跨平台多设备剪贴板同步。
- [TinyMediaManager](/unraid/tmm.md)，影视刮削。
- xunlei，默认下载目录为共享文件夹 `downloads`。

其中 `xml` 都是 docker 模板，`zip` 压缩包都是 docker compose 模板。

将里面的 xml 文件都复制到引导 U 盘的 `/config/plugins/dockerMan/templates-user` 目录中。

如果是 `zip`，解压后将整个文件夹都复制到引导 U 盘的 `/config/plugins/compose.manager/projects` 目录中。

可以把引导 U 盘的 SMB 共享打开，通过网络共享就可以直接把文件复制进去，之后在 Docker 页面添加容器的时候，就可以通过模板来添加了。

![lvz4tgnp.z2o_lEfsj3](https://img.slarker.me/wiki/lvz4tgnp.z2o_lEfsj3.png)
![2dqqtu55.4ck_xjjLY5](https://img.slarker.me/wiki/2dqqtu55.4ck_xjjLY5.png)

<!-- ## Docker Compose -->

