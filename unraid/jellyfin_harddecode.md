# 安装 Jellyfin 实现硬解 4K

本篇教程介绍在 Unraid 系统下面安装 Jellyfin 实现硬解 4K，适用的 CPU 为带核显的 Intel CPU。

测试文件：[4K 测试片段](https://pan.quark.cn/s/93f22dd409d8)。

## 建立共享目录

我推荐的做法是建立一个专门的共享目录比如 `media`，来存放媒体文件。然后在 media 目录下面再建立 `movies` 和 `tvshows` 来分别存放电影和电视剧。当然你可以把 movies 和 tvshows 都直接放到 `downloads` 这个下载共享目录里，下面的教程我都以 `media` 这个目录为例，在对应的地方你需要改成自己建立的目录。

![CFIbG2_Oi0NwG](https://img.slarker.me/wiki/CFIbG2_Oi0NwG.png)

## 安装插件

在应用市场里搜索 Intel-GPU-Top 和 GPU Statistics 插件并安装。

在仪表板里设置 GPU Statistics，找到显卡勾选并应用。

![4jAbL4_1Z6e7F](https://img.slarker.me/wiki/4jAbL4_1Z6e7F.png)

## 部署 Jellyfin

我们使用的镜像是由 nyanmisaka 大佬制作的 nyanmisaka/jellyfin 镜像。在应用市场里搜索 jellyfin，选择 `linuxserver's Repository` 这个镜像，点击安装。

需要修改的配置按照下面的说明填写，没有说的就保持默认：

- 将 `存储库` 改成：`nyanmisaka/jellyfin`
- 将 `Path: /data/tvshows` 改成：`/mnt/user/media/tvshows`
- 将 `Path: /data/movies` 改成：`/mnt/user/media/movies`

点击最下面的 `添加另一个路径、端口、变量、标签或设备` ，配置类型选择设备，参数按下图所示，最后点击添加。

![qcpUBy_uL478Q](https://img.slarker.me/wiki/qcpUBy_uL478Q.png)

最后点击应用，等待部署完成。

## 设置硬解

部署完成之后，Jellyfin 的默认端口是 8096，在浏览器中打开，设置密码之后进入后台，本篇教程只介绍如何设置硬解。

在控制台中点击播放，在转码的地方选择硬件加速，其它按下图所示配置：

![KYGGSu_ZGKMAg](https://img.slarker.me/wiki/KYGGSu_ZGKMAg.png)

![H7LJk7_uBlLkG](https://img.slarker.me/wiki/H7LJk7_uBlLkG.png)

最后点击最下方的保存。