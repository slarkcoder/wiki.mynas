# 使用 Docker 安装 Jellyfin 并设置硬解

> 本教程适用于 Intel 11~14 代 CPU，群晖型号为 SA6400 的物理群晖，或者是直通了核显的虚拟群晖。

开始之前，可以先下载测试视频文件备用。

[阿里云盘：4K+IMAX DTS：X-碟中谍4.mkv](https://www.alipan.com/s/WbghdnCdCxo)

## 新建共享文件夹

新建一个共享文件夹，用来存储视频文件，稍后会把这个文件夹添加到 Docker 的 jellyfin 里，以便 jellyfin 能够读取。

![jellyfin_01_TwQTjT](https://img.slarker.me/blog/jellyfin_01_TwQTjT.png)

在 File Station 中添加 Everyone 读写权限。

![jellyfin_02_RSEnbh](https://img.slarker.me/blog/jellyfin_02_RSEnbh.png)

在套件中心安装 Container Manager，安装好打开在注册表中搜索 jellyfin，下载 `nyanmisaka/jellyfin` 映像。

![jellyfin_03_AccXkG](https://img.slarker.me/blog/jellyfin_03_AccXkG.png)

下载完成之后，点击运行。

![jellyfin_04_hydlRO](https://img.slarker.me/blog/jellyfin_04_hydlRO.png)

选中 `启用自动重新启动`，点击下一步。

![jellyfin_05_h3lXZo](https://img.slarker.me/blog/jellyfin_05_h3lXZo.png)

按图中所示映射端口号、文件夹：
- `8096` -> `8096`
- `/docker/jellyfin/config` -> `/config`
- `/docker/jellyfin/cache` -> `/cache`
- `/media` -> `/media`

其中，`->` 表示映射，`->` 左侧的属于群晖本身的端口号或者路径，`->` 右侧的属于 Docker 容器内部的端口号或者路径。

![jellyfin_06_iZUNUX](https://img.slarker.me/blog/jellyfin_06_iZUNUX.png)

选择 `使用高权限执行容器`。

![jellyfin_07_l6wMHR](https://img.slarker.me/blog/jellyfin_07_l6wMHR.png)

Jellyfin 启动之后，默认的访问端口为 8096，设置账号并登录，添加完媒体库之后，进入到控制台的播放页面，设置转码，按下图所示勾选编解码选项。

![jellyfin_08_4SboiY](https://img.slarker.me/blog/jellyfin_08_4SboiY.png)

![jellyfin_09_1FcIVH](https://img.slarker.me/blog/jellyfin_09_1FcIVH.png)

把测试视频文件，上传到 `media` 共享文件夹里，在 jellyfin 中直接打开播放，可以看到已经在转码了，帧率 57fps，流畅观看没问题，并且色调也正常。

![jellyfin_10_h2KYo1](https://img.slarker.me/blog/jellyfin_10_h2KYo1.png)

同时 CPU 占用也很低。

![jellyfin_11_nDJ5Sf](https://img.slarker.me/blog/jellyfin_11_nDJ5Sf.png)