# 使用 Docker 安装 Emby 并设置硬解

> 本教程适用于使用 Intel 11~14 代 CPU，群晖型号为 SA6400 的物理群晖，或者是直通了核显的虚拟群晖。

开始之前，可以先下载测试视频文件备用。

测试文件：[4K 测试片段](https://pan.quark.cn/s/93f22dd409d8)。

::: warning 注意
Jellyfin 和 Emby 默认都使用 8096 端口，不能共存，只能二选一。
:::

## 新建共享文件夹

新建一个共享文件夹，用来存储视频文件，稍后会把这个文件夹添加到 Docker 的 emby 里，以便 emby 能够读取。

![jellyfin_01_TwQTjT](https://img.slarker.me/wiki/jellyfin_01_TwQTjT.png)

在 File Station 中，选择你想要设置的文件夹，右击选择属性，添加 Everyone 读写权限。

![jellyfin_02_RSEnbh](https://img.slarker.me/wiki/jellyfin_02_RSEnbh.png)

在套件中心安装 Container Manager，安装好打开在注册表中搜索 emby `amilys/embyserver` 映像。

![emby_install_1_51B2ih](https://img.slarker.me/wiki/emby_install_1_51B2ih.png)

下载完成之后，点击运行。

![emby_install_2_EHrxTq](https://img.slarker.me/wiki/emby_install_2_EHrxTq.png)

选中 `启用自动重新启动`，点击下一步。

![emby_install_3_xA7Z6T](https://img.slarker.me/wiki/emby_install_3_xA7Z6T.png)

按图中所示映射端口号、文件夹：
- `1901` -> `1900`，这里使用 1901 是为了避免 1900 被占用导致安装失败
- `7359` -> `7359`
- `8096` -> `8096`
- `8920` -> `8920`
- `/docker/emby/config` -> `/config`
- `/media` -> `/media`

其中，`->` 表示映射，`->` 左侧的属于群晖本身的端口号或者路径，`->` 右侧的属于 Docker 容器内部的端口号或者路径。

![emby_install_7_GKetJo](https://img.slarker.me/wiki/emby_install_7_GKetJo.png)

拉到下面，选择 `使用高权限执行容器`。

![emby_install_8_AiwlJi](https://img.slarker.me/wiki/emby_install_8_AiwlJi.png)

Emby 启动之后，默认的访问端口为 8096，设置账号并登录，添加完媒体库之后，进入到控制台的 `Emby Premiere` 页面，设置密钥并保存。

```
疯狂星期四V我50
```

![emby_install_9_JbG1Kv](https://img.slarker.me/wiki/emby_install_9_JbG1Kv.png)

切换到转码页面，启用硬件加速选择 `高级`，选择最下面的保存。

![emby_install_10_U9SklF](https://img.slarker.me/wiki/emby_install_10_U9SklF.png)

把测试视频文件，上传到 `media` 共享文件夹里，在 emby 中直接打开播放，可以看到已经在转码了，流畅观看没问题，并且色调也正常。

![EVSkuM_wdvZ0o](https://img.slarker.me/wiki/EVSkuM_wdvZ0o.png)

同时 CPU 占用也很低，看起来新版的 emby 转码提升很大，效果很不错！

![Za3pdA_hTT5bn](https://img.slarker.me/wiki/Za3pdA_hTT5bn.png)