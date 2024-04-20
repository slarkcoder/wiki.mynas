# 通过模板更新 Docker 应用

使用 Unraid 过程中，有时候会遇到这样的问题：Docker 应用提示更新，但点击 `应用更新` 按钮，却提示找不到配置。

![fK3jKZ_e40bFt](https://img.slarker.me/blog/fK3jKZ_e40bFt.png)

要想解决这个问题，必须要了解下 Docker 是如何更新的。Docker 本身并不支持直接更新应用，即便使用命令，也需要先删除应用，然后拉取应用的最新镜像，再使用命令重新创建应用。

Unraid 为了用户可以更方便的使用 Docker，加入了模板这个概念，Unraid 的应用市场里的应用都已经有现成的模板，模板就是把该应用需要填写的应用参数都预先设置好，用户通过模板无须修改设置或者仅做少数修改即可轻松部署应用。对于应用市场没有的应用，只要用户自己通过 Unraid 添加容器，也会自动将该应用的配置保存为模板，方便用户后续的修改设置和更新。

![a2LIVX_S9i0gC](https://img.slarker.me/blog/a2LIVX_S9i0gC.png)

应用的模板文件会保存到  `/boot/config/plugins/dockerMan/templates-user` 目录中，该文件夹位于启动 U 盘中，模板会保存为 `*.xml` 文件。

![9gJHbl_OuIYYS](https://img.slarker.me/blog/9gJHbl_OuIYYS.png)

只要应用模板存在，就可以在提示 `应用更新` 的时候，直接更新应用。Unraid 会根据应用模板，自动的完成停止容器，移除容器，拉取镜像，重新创建容器的操作。

![w200mA_3JMTsA](https://img.slarker.me/blog/w200mA_3JMTsA.png)

所以在更新的时候提示 `找不到配置` ，是因为找不到该应用的模板，Unraid 的 Docker 不知道该应用到底需要哪些参数，就无法自动完成重新创建应用容器的操作。

## 分享自用的模板

这里有一些我自己创建的模板，可以方便的安装常用的 Docker 应用。

[Unraid_Docker_Template](https://files.mynas.chat/share/BXbuuhLC)

目前包含下面这些应用：

- AList
- Aria2-Pro，默认下载目录为共享文件夹 downloads，默认 RPC Secret 为：7iQzqgg6Soe5MqpWGaLODhAbNcFwkFEaQYCQhCAtDrIZ
- Ariang
- Duplicati
- Filebrowser
- Jellyfin，默认媒体目录为共享文件夹  media
- MetaTube
- Metube，默认下载目录为共享文件夹 downloads
- Navidrome，默认音乐目录为共享文件夹  musics
- qBittorrent，默认下载目录为共享文件夹 downloads
- Homepage
- SpeedTest
- SyncClipboard
- TinyMediaManager
- xunlei，默认下载目录为共享文件夹 downloads

下载解压，将里面的 xml 文件都复制到引导 U 盘的 `/config/plugins/dockerMan/templates-user` 目录中。可以把引导 U 盘的 SMB 共享打开，通过网络共享就可以直接把文件复制进去，之后在 Docker 页面添加容器的时候，就可以通过模板来添加了。

![lvz4tgnp.z2o_lEfsj3](https://img.slarker.me/blog/lvz4tgnp.z2o_lEfsj3.png)
![2dqqtu55.4ck_xjjLY5](https://img.slarker.me/blog/2dqqtu55.4ck_xjjLY5.png)