# 使用 Jellyfin 直接播放网盘！

整体流程是先使用 Alist 挂载网盘，然后通过 rclone 将 Alist 的 WebDAV 挂载为本地的目录，最后 jellyfin 直接添加本地的目录。

## 使用 alist 挂载网盘

Alist 支持常见的十几种网盘，挂载方法 [Alist 官方文档](https://alist.nn.ci/zh/faq/) 有非常详细的介绍，这里就不讲了。将网盘都挂载到 alist 之后，可以很方便的通过 Alist 的 WebDAV 服务统一提供访问。

默认的 Alist WebDAV 地址是：

```
http://[替换为你的 Unraid IP]:5244/dav
```

Alist WebDAV 的用户名密码就是你的 alist 的登录用户名、密码。

## 将 WebDAV 映射到本地目录

挂载 WebDAV 到本地需要使用 rclone 这个插件，可以直接在 Unraid 应用中心安装。安装好之后打开 Unraid 自带的终端配置 rclone。

输入下面命令进入配置菜单：

```
rclone config
```

配置按照下图输入：

![2FtgnX_jYL2jU](https://slark-blog.s3.bitiful.net/2FtgnX_jYL2jU.png)

![J7NSeE_KwOwJ6](https://slark-blog.s3.bitiful.net/J7NSeE_KwOwJ6.png)

![SJp8In_1haXeu](https://slark-blog.s3.bitiful.net/SJp8In_1haXeu.png)

如果你的配置没有填错，那到这里，我们已经把 Alist 的 WebDAV 的配置添加好了。

先使用下面的命令创建挂载位置：

```
mkdir -p /mnt/user/rclone/alist
```

接下来使用命令把 alist 挂载为本地目录：

```
rclone mount alist: /mnt/user/rclone/alist --umask 0022 --default-permissions --allow-non-empty --allow-other --buffer-size 32M --low-level-retries 200 --dir-cache-time 2h --vfs-read-chunk-size 64M --vfs-read-chunk-size-limit 1G &
```

第三个单词 alist 就是上一步在 rclone 中新建配置的名字，后面的 `/mnt/user/rclone/alist` 就是要把这个 WebDAV 挂载到本地的位置。挂载好之后，在文件管理器里就可以直接网盘里的文件：

![l4z2wn_6v9MBx](https://slark-blog.s3.bitiful.net/l4z2wn_6v9MBx.png)

确定没问题之后，我们可以使用 User Script 将这段挂载脚本设置为开机自动挂载。

## 开机自动挂载

在 Unraid 应用中心安装 `User Script` 插件。安装后打开插件，添加新脚本，此处命名为 `automount_rclone`：

![aad3bx_k90sRu](https://slark-blog.s3.bitiful.net/aad3bx_k90sRu.png)

![eY0fRm_RoWUzB](https://slark-blog.s3.bitiful.net/eY0fRm_RoWUzB.png)

设置好之后，就可以开机启动阵列自动挂载了。

## 将映射的本地目录添加到 Jellyfin

编辑 Jellyfin 的 Docker 配置，添加路径，将容器路径设置为 `/alist`，主机路径设置为我们映射好的目录  `/mnt/user/rclone/alist`。

![vnVK6W_fFP1GG](https://slark-blog.s3.bitiful.net/vnVK6W_fFP1GG.png)

点击应用之后，就可以在 Jellyfin 媒体库设置里看到我们添加的 `/alist` 目录了。

![IA5XUo_O96u4T](https://slark-blog.s3.bitiful.net/IA5XUo_O96u4T.png)

