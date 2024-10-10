# 为 qBittorrent 更换好看且易用的 WebUI

qBittorrent 是非常流行的 BT/PT 下载工具，但是其自带的 WebUI 比较丑，在手机端也不是很好用。本篇教程就教你如何给 qBittorrent 更换 WebUI。

## WebUI 效果

除了 `VueTorrent` 之外，也可以试试 `qb-web`。先来看看更换后的效果：

- [VueTorrent](https://github.com/WDaan/VueTorrent)

![jusDSs_75WMPV](https://img.slarker.me/wiki/jusDSs_75WMPV.png)

- [qb-web](https://github.com/CzBiX/qb-web)

![](https://img.slarker.me/wiki/202409211638731.webp)

## 如何更换？

以 [VueTorrent](https://github.com/WDaan/VueTorrent/releases) 为例，更换之前先将 vuetorrent.zip 下载到本地并解压。

下载地址：[https://github.com/WDaan/VueTorrent/releases](https://github.com/WDaan/VueTorrent/releases)

### Unraid

以 Unraid 系统为例，使用 FileBrowser 或者自带的文件管理器，将上面解压得到的 vuetorrent 文件夹上传到 `/appdata/qbittorrent` 下面，如图所示：

![rhIsj1_ZBg09i](https://img.slarker.me/wiki/rhIsj1_ZBg09i.png)

然后在 qBittorrent 的 `设置 -> WebUI` 里，勾选使用自定义 WEBUI 并填写文件路径：

```sh
/config/vuetorrent
```

最后点击保存即可生效。

### 群晖

如果是通过套件安装的 `qBittorrent`，可以把 `vuetorrent` 解压上传到自己的 `home` 目录下面，目录结构如下图，并为 `qBittorrent` 套件添加 `完全控制` 权限。

![](https://img.slarker.me/wiki/vhxd03v2.qdx.webp)

在 vuetorrent 文件夹上右击选择属性：

![](https://img.slarker.me/wiki/202409211756289.webp)

复制文件夹位置：

![](https://img.slarker.me/wiki/pegeonxo.stl.webp)

在 qBittorrent 的 `设置 -> WebUI` 里，勾选 `使用备用 Web UI` 并粘贴文件夹位置：

![](https://img.slarker.me/wiki/jqvywe1s.nyf.webp)

最后点击保存即可生效。