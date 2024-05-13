# 支持 selfhosted 的跨平台剪贴板同步方案 - SyncClipboard

> 本文同步发布于 [少数派](https://sspai.com/post/85646)。

对于使用多个平台设备的用户来说，一定会有临时共享剪贴板的需求，比较容易想到的办法是通过各种支持多平台的 IM 软件（微信、Telegram）发送文本给自己，然后再到目标设备手动复制到剪贴板，但是这种办法依然很繁琐。具体步骤如下：

>源设备复制 -> 切换到源设备 IM -> 原设备粘贴 -> 源设备点击发送 -> 切换到目标设备 IM -> 目标设备再复制 -> 目标设备粘贴

可以看出来，至少需要 7 步才能完成共享文本操作，这还不包括打开 IM 后查找 `发送给自己`  的过程。

为了解决这个问题，我使用过一段时间的快贴，体验还可以，可以满足需求，但是免费账户也有限制，每天同步的文本不超过 1MB，超过了需要付费才能用。所以我找到了一款开源的替代品 [SyncClipboard](https://github.com/Jeric-X/SyncClipboard)。比较棒的是支持 Docker 部署，如果你有 NAS 或者公网服务器，那这个用起来就非常方便。SyncClipboard 同步剪贴板的原理也很简单，就是客户端通过不断的轮询去请求服务器，剪贴板有没有更新。
## 服务端

> 如果你用 Unraid，也可以通过我分享的 [模板](https://files.mynas.chat/share/0gxOryD7) 来安装。具体使用方法可以看 [这里](/unraid/unraid_docker_template.md)。

如果有 NAS 或者公网服务器，装好 Docker 环境，直接一行命令就装好了：

```
docker run -d \
  --name=syncclipboard-server \
  -p 5033:5033 \
  --restart unless-stopped \
  jericx/syncclipboard-server:latest
```

默认端口是 5033，用户名和密码都是 admin，如果需要修改默认用户名和密码可以到 [这里](https://hub.docker.com/r/jericx/syncclipboard-server) 查看具体方法。使用公网服务器部署，还可以自己添加 SSL 反代，增加安全性。

如果没有服务器，也可以直接使用支持 Webdav 的网盘来作为服务器，比如坚果云，但是坚果云又有请求次数限制，像剪贴板这种即时性比较强的应用，轮询间隔当然是越短越好，如果请求次数间隔时间太长，又会导致使用体验大大降低。
## 桌面端

桌面端提供 [macOS](https://github.com/Jeric-X/SyncClipboard.Desktop/releases)、[Windows](https://github.com/Jeric-X/SyncClipboard/releases/)  和 [Linux]( https://github.com/Jeric-X/SyncClipboard.Desktop/releases ) 版本，下面以 macOS 为例，介绍如何使用。

如果是 ARM 芯片的 mac，安装完 ARM 版本的客户端，需要先到终端执行如下命令，否则会遇到安装包损坏的提示。

```
sudo xattr -d com.apple.quarantine /Applications/SyncClipboard.app
```

打开软件后，把服务器的配置填进去：

![ma3hzywr.o5w_Zdak1I](https://img-1255332810.cos.ap-chengdu.myqcloud.com/ma3hzywr.o5w_Zdak1I.png)

mac 端似乎没有开机登录的选项，可以在系统的登录项中手动添加。

![QmlG58_qKPD1f](https://img-1255332810.cos.ap-chengdu.myqcloud.com/QmlG58_qKPD1f.png)

如果你只有一台电脑和手机同步，那也可以直接用这台电脑作为服务器。
## Android

安卓提供了两种办法，分别是  [HTTP Request Shortcuts](https://play.google.com/store/apps/details?id=ch.rmy.android.http_shortcuts) 和  [Autox.js](https://github.com/kkevsekk1/AutoX)，都是基于 JS 脚本来实现剪贴板的功能。我试过后，感觉 Autox.js 这个方法更方便一点。

到这里下载 [AutoX](https://github.com/kkevsekk1/AutoX/releases) 安卓客户端，安装之后，导入 [ js 配置](https://github.com/Jeric-X/SyncClipboard/blob/master/script/SyncAutoxJs.js)，并修改配置中的 url（也就是你的服务器连接地址），username（用户名） 和 token（密码）。 Autox.js
中也可以直接编辑 js 脚本：

![zgknads2.0uz_wHrQgp](https://img-1255332810.cos.ap-chengdu.myqcloud.com/zgknads2.0uz_wHrQgp.png)

修改完之后，把 Autox.js 这个 app 的后台运行权限打开，确保不会被系统杀掉。为 js 配置脚本添加一个定时任务，让 Autox.js 启动时就自动运行。

![Screenshot_2024-01-08-11-12-57-366_org.autojs.autoxjs.v6_tCKn9b](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Screenshot_2024-01-08-11-12-57-366_org.autojs.autoxjs.v6_tCKn9b.jpg)

![Screenshot_2024-01-08-11-17-43-359_org.autojs.autoxjs.v6_rgRZas](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Screenshot_2024-01-08-11-17-43-359_org.autojs.autoxjs.v6_rgRZas.jpg)

在管理页面，确保脚本是在运行中的。

![u5vxq5e5.4dp_6YLcwk](https://img-1255332810.cos.ap-chengdu.myqcloud.com/u5vxq5e5.4dp_6YLcwk.png)

至此，就可以试试具体效果了， mac 端复制，手机端就已经提示复制到剪贴板了。

使用 SyncClipboard 后的流程只需要两步：

> 源设备复制 -> 目标设备粘贴

![Screenshot_2024-01-08-11-37-06-817_com.miui.home-edit_vqaM1F](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Screenshot_2024-01-08-11-37-06-817_com.miui.home-edit_vqaM1F.jpg)

如果是安卓手机端复制，需要同步到 mac 剪贴板，受限于安卓系统的限制，需要下面条件之一：
- Android 版本小于等于 Android 9 Pie
- 将软件切换到前台（也就是手动打开 App）
- 使用基于 root 权限的工具(Magisk/Xposed)解除 `Autox.js` 后台操作剪切版的权限，参考：
	- [https://github.com/Kr328/Riru-ClipboardWhitelist](https://github.com/Kr328/Riru-ClipboardWhitelist)
	- [https://github.com/GamerGirlandCo/xposed-clipboard-whitelist](https://github.com/GamerGirlandCo/xposed-clipboard-whitelist)
