# 下载网盘资源到 NAS

![](https://img.slarker.me/wiki/ab63b5efb71c4ec9ae9bcf329d3acfb4.webp)

本篇教程以 fnOS 为例，介绍如何将网盘里的资源下载到 NAS。

## 安装 Alist 和 Aria2

> Aria2 是一个轻量级的下载程序，可以下载各种格式的文件，支持断点续传，支持多线程下载。Aria2 本身是一个命令行工具，但是可以通过 RPC 接口来控制下载任务。通常和一个 Web 前端应用配合使用，比较流行的是 [AriaNg](https://github.com/mayswind/AriaNg/)。

你可以使用套件或者 Docker Compose 的方式安装 Alist 和 Aria2。其中 Aria2 默认的 RPC 端口为 `6800`。

### 套件

你可以在应用中心直接安装 Alist 和 Aria2。

![](https://img.slarker.me/wiki/fdc4c0398ba848478876d39428219cb2.webp)

安装 Aria2 的时候，会提示设置 `RPC 密钥`，这个密钥是用来连接到 Aria2 服务的认证密钥。

### Docker Compose

你也可以使用 Docker Compose 来安装 Alist 和 Aria2，相关的配置文件和安装方法可以参考 [Docker Compose 模板](/application/compose.md)。

使用 Compose 方式安装的 Aria2 已经包含了 `Aria2` + `AriaNg`，具体端口可以查看 yml 配置文件，默认 RPC 密钥为：`P3TERX`，可以在 `yml` 配置文件中修改。

## 在 Alist 中挂载网盘

请参考 Alist 的官方文档挂载你的网盘。Alist 的 [官方文档](https://alist.nn.ci/zh/guide/) 非常详细，市面上主流的网盘都支持。

## 在 Alist 设置 Aria2

在 Alist 的目录列表页面点击右下角的 `本地设置` 按钮，在 `本地设置` 页面设置你的 Aria2 服务。

比如我的 NAS IP 为 `192.168.2.2`，那么 RPC 链接就应该为：`http://192.168.2.2:6800/jsonrpc`，填入你的 RPC 密钥。

![](https://img.slarker.me/wiki/914ef4afcebb40148ddd2c8e16d10b3e.webp)

## 下载资源到 NAS

打开右下角的复选框开关，这样就可以批量下载多个资源。勾选需要下载的资源，点击下面出现的 `下载` 按钮，选择 `发送到 Aria2`。

![](https://img.slarker.me/wiki/d7ced21c3f4a4b0cb2b67184b5f8ecd8.webp)

## 浏览器插件（可选）

如果你想方便的在浏览器里查看 Aria2 任务，可以安装 [Aria2 Explorer](https://aria2e.com/index.cn.html) 插件。

设置好 Aria2 连接后可以开启 `下载拦截`，这样就能把浏览器的下载任务都拦截到 NAS 的 Aria2 里。

![](https://img.slarker.me/wiki/feb6d23fe3434a10bc9eca6b7841c5e8.webp)

此时在 Alist 不开启复选框的情况下，你也可以直接在资源上使用右键来下载到 NAS 里。

![](https://img.slarker.me/wiki/a3fac72e8ba84841a6076fc74f7e323f.webp)

使用 Aria2 下载资源的速度也很快。

![](https://img.slarker.me/wiki/5e57c3914d364d4f8322677421024de4.webp)