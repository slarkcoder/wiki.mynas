# 为 qBittorrent 更换好看且易用的 WebUI

qBittorrent 是非常流行的 BT/PT 下载工具，但是其自带的 WebUI 比较丑，在手机端也不是很好用。本篇教程就教你如何给 qBittorrent 更换 WebUI。

先来看看更换后的效果：

![jusDSs_75WMPV](https://slark-blog.s3.bitiful.net/jusDSs_75WMPV.png)

这套 WebUI 是 [VueTorrent](https://github.com/WDaan/VueTorrent/releases)，更换之前先将 vuetorrent.zip 下载到本地并解压。

下载地址：[https://github.com/WDaan/VueTorrent/releases](https://github.com/WDaan/VueTorrent/releases)

以 Unraid 系统为例，使用 FileBrowser 或者自带的文件管理器，将上面解压得到的 vuetorrent 文件夹上传到 `/appdata/qbittorrent` 下面，如图所示：

![rhIsj1_ZBg09i](https://slark-blog.s3.bitiful.net/rhIsj1_ZBg09i.png)

然后在 qBittorrent 的 `设置 -> WebUI` 里，勾选使用自定义 WEBUI 并填写文件路径：

```
/config/vuetorrent
```

最后点击保存即可生效。

