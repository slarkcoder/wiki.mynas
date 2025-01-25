# 使用 PE 打包 ISO 镜像

很多 NAS 系统支持虚拟机功能，但有的虚拟机只支持使用 ISO 镜像启动来安装操作系统，而某些操作系统只提供 img 格式的镜像，比如 iStoreOS、OpenWRT 等等。那么能否将 img 转换为 ISO 镜像呢？

根据我的测试，凡是能搜到的各种转换功能都无法使用，要么不支持，要么转换后无法正常启动。比较靠谱的办法是使用现有的 PE ISO 镜像，将 img 镜像和 img 写盘工具打包到 PE ISO 镜像里，这样可以直接启动 PE ISO 镜像，然后在 PE 环境中，使用 img 写盘工具将 img 镜像写入到虚拟磁盘中，这样就可以使用虚拟磁盘启动了。下面介绍具体过程。

## 资源

需要使用到的资源如下：

- [iStoreOS](https://fw.koolcenter.com/iStoreOS/x86_64/) img 镜像
- img 写盘工具、UltraISO 可以到 [我的网盘](https://files.slarker.me) 下载
- [微 PE](https://www.wepe.com.cn/download.html)，或者 [Edgeless](https://down.edgeless.top/) ISO 镜像

如果你使用的是 `微 PE`，你需要 **生成可启动的镜像**，得到 PE ISO 文件。

![](https://img.slarker.me/wiki/20250125144953774.webp)

如果你使用的是 `Edgeless`，你可以直接下载得到 PE ISO 文件。

![](https://img.slarker.me/wiki/20250125144835504.webp)

## 打包

这里以微 PE ISO 为例演示，使用 UltraISO 打开 PE ISO 镜像。

![](https://img.slarker.me/wiki/20250125153127403.webp)

把 img 写盘工具和 iStoreOS img 镜像都放到一个文件夹（这里文件夹名为 iStoreOS）里，然后在 UltraISO 中 `添加目录` 到 PE ISO 镜像中。

![](https://img.slarker.me/wiki/20250125153244284.webp)

![](https://img.slarker.me/wiki/20250125153309750.webp)

最后在 `文件` 菜单中选择 `保存` 即可。

![](https://img.slarker.me/wiki/20250125153440716.webp)

这样你就得到了一个包含 img 写盘工具和 iStoreOS img 镜像的 PE ISO 镜像，用这个 ISO 镜像就可以正常启动了。

## 安装

以在 fnOS 中安装 iStoreOS 为例，从上面打包好的 PE ISO 镜像启动虚拟机之后，使用 img 写盘工具，将 img 镜像写入到你创建的虚拟磁盘中。

虚拟机开机之后，自动启动 PE，打开 `此电脑`，按下图位置定位到 iStoreOS 文件夹。

![](https://img.slarker.me/wiki/Snipaste_2025-01-22_14-16-27.webp)

打开 `img 写盘工具`，`映像档` 选择 `istoreos.img` 文件，点击 `开始`。

![](https://img.slarker.me/wiki/Snipaste_2025-01-22_14-17-00.webp)

![](https://img.slarker.me/wiki/Snipaste_2025-01-22_11-51-12.webp)

写入完成之后，关闭虚拟机。之后编辑虚拟机，删除启动镜像，点击确定。

![](https://img.slarker.me/wiki/Snipaste_2025-01-22_14-18-33.webp)

再次启动虚拟机，就会从虚拟硬盘中的 iStoreOS 启动。

![](https://img.slarker.me/wiki/Snipaste_2025-01-22_14-19-25.webp)