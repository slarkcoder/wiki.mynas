# 影音资源库 - 小雅部署教程

小雅是基于阿里云盘的共享资源构建的一个比较完整的，大规模的资源库。结合你的阿里云盘，在你需要的时候，把对应的资源转移到你的阿里云盘的中转目录。而且可以做到定期清理，不用担心阿里云盘容量被转存的资源占满。配置好之后，这一切都是自动的，不需要人工干预。

还有一些优点，小雅支持 WebDAV，可以结合各种客户端比如 Jellyfin、Emby 来使用，很多资源都已经过刮削，在客户端使用也非常省心。对于有些家人不会找资源的，小雅可真是个神器！相对于 nastools 之类的自动化工具，也不需要折腾 PT 站点认证，门槛非常低。

![Snipaste_2024-04-28_12-09-27_HDCM8R](https://img.slarker.me/blog/Snipaste_2024-04-28_12-09-27_HDCM8R.png)

本篇教程就来介绍如何部署小雅。

## 准备

- 提前安装 `FileBrowser`，方便修改小雅所需的配置文件。
- 如果你需要安装小雅 Jellyfin 或者 Emby 全家桶，最好把已经装的 Jellyfin、Emby 都先删掉。 

## 一键脚本

可以使用这个一键脚本方便的部署小雅，感谢 [DDS-Derek](https://github.com/DDS-Derek/xiaoya-alist) 大佬以及开源。

```sh
bash -c "$(curl --insecure -fsSL https://ddsrem.com/xiaoya_install.sh)"
```

## 配置信息

- 阿里云盘 Token（32 位长度），[使用阿里云盘 App 点此扫码](https://alist.nn.ci/zh/guide/drivers/aliyundrive) 获取备用。
- 阿里云盘 OpenToken（288~335 位长度），[使用阿里云盘 App 点此扫码](https://alist.nn.ci/tool/aliyundrive/request.html) 获取备用。
- 中转文件夹目录 ID，可以将 [中转文件夹](https://www.aliyundrive.com/s/rP9gP3h9asE) 保存到阿里云盘，然后在浏览器里打开就可以看到 `目录 ID`，获取备用。

![ys1YwJ_Xu3x4m](https://img.slarker.me/blog/ys1YwJ_Xu3x4m.png)

## Unraid 部署

打开 Unraid 的控制台，粘贴上面的一键脚本并回车执行：

![BqGAQx_RS70yE](https://img.slarker.me/blog/BqGAQx_RS70yE.png)


### 安装小雅

依次选择 `1`，`1`，提示配置小雅目录，可以填写：

```
/mnt/user/appdata/xiaoya
```

继续按提示填写我们提前准备好的 `阿里云盘 Token`，`阿里云盘 OpenToken`，`中转文件夹目录 ID`，`PikPak` 可按需选择配置，网络模式推荐使用 `host`，之后就开始安装了，直到出现 `安装完成！`

![Heihqe_KDcj7U](https://img.slarker.me/blog/Heihqe_KDcj7U.png)

这个时候小雅就已经可以访问了，默认端口是 `5678`。小雅首页下方也显示了默认的 `WebDAV` 账号信息。

## 安装小雅 Emby 全家桶

使用 `FileBrowser` 在小雅配置目录（`/mnt/user/appdata/xiaoya`）建立配置文件：


![4dvfTN_IbTCK2](https://img.slarker.me/blog/4dvfTN_IbTCK2.png)
