# 文件管理

## Unraid 官方插件 - Dynamix File Manager

Unraid 默认并没有带文件管理器，而是以插件的形式提供给用户来安装，可以在 Unraid 的应用中心搜索 `Dynamix File Manager` 进行安装。

![PppxR9_0K2igH](https://img.slarker.me/wiki/PppxR9_0K2igH.png)

安装之后，会在 Unraid 的右上角多出一个图标。

![yeq5LT_hGHzst](https://img.slarker.me/wiki/yeq5LT_hGHzst.png)

点击之后，就可以进入文件管理器了。

![47Cx5x_sMxcyD](https://img.slarker.me/wiki/47Cx5x_sMxcyD.png)

基本的文件管理功能都有，可以满足绝大部分需求。

## 简洁轻量易用的 FileBrowser

如果你觉得 Unraid 自带的 File Manager 插件不够好用，或者不够好看。那么可以试试这款简洁轻量易用的第三方管理器 - FileBrowser。

### 应用中心安装

![GtAnCj_0QFMpd](https://img.slarker.me/wiki/GtAnCj_0QFMpd.png)

Unraid 应用中心就有这款文件管理器的镜像，选择 unraides 这款点击安装。

![ql7gNG_QePfEv](https://img.slarker.me/wiki/ql7gNG_QePfEv.png)

将特权开关打开，给予文件管理器更高的权限等级。将 `Data Path` 更改为 `/mnt/user/`，如果不作修改，默认的文件管理器访问端口是 `30000`。其它配置保持默认不变，之后点击应用。

默认的用户名和密码均为 admin。

### 部署命令

你也可以通过命令来部署 FileBrowser，部署命令可以直接在 Unraid 右上角的终端中粘贴使用。

```
docker run -d \
--name filebrowser \
-v /mnt/user:/srv \
-v /mnt/user/appdata/filebrowser:/database \
-v /mnt/user/appdata/filebrowser:/config \
-e PUID=$(id -u) \
-e PGID=$(id -g) \
-p 8000:80 \
filebrowser/filebrowser:s6
```

默认的用户名和密码均为 admin。

在 FileBrowser 文件管理器的设置中，可以将语言切换为中文。

![jsck66_OSWX7w](https://img.slarker.me/wiki/jsck66_OSWX7w.png)
 