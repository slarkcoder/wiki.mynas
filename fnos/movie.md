# 飞牛影视刮削、播放网盘电影

![fnmovie_ATapWY](https://img.slarker.me/wiki/fnmovie_ATapWY.jpg)

![Snipaste_2024-08-31_22-49-46_ZVhFDr](https://img.slarker.me/wiki/Snipaste_2024-08-31_22-49-46_ZVhFDr.jpg)

上面这两张图就是飞牛影视的刮削效果。飞牛影视的刮削功能非常强悍，不用折腾什么 `TMDB API`，也不用改 host，也不用折腾网络环境。识别速度快，准确度高达 99%，支持在线匹配字幕，支持多用户访问权限控制，最重要的是上手还非常简单，极大的降低了小白用户的上手门槛，对很多影视用户来说，完美解决了刮削这个痛点。

市面上免费不限速的网盘并不多，115 网盘（更新：115 免费用户已开始限速！） 和 123 云盘免费用户都不限速，但 115 的资源要丰富很多，只要把资源转存到自己的网盘里，利用 Clouddrive 将网盘挂载到本地，让飞牛影视直接刮削网盘里的资源，就可以得到一个资源非常丰富的影视库。

:::info 提示
- 如果 115 空间不够用，可以去淘宝，闲鱼买空间卡充值，非常便宜。
- 最近 115 开始对第三方挂载限速，比如使用 Alist 挂载 115，非会员用户下载速度只有 500KB/s 左右，这个速度已经无法流畅看电影了。
:::

## 安装 Clouddrive

Clouddrive 是一个网盘挂载工具，可以挂载任何支持 FUSE 的网盘，包括 115、阿里云盘、百度网盘等。在 fnOS 可以通过 docker 安装 clouddrive。

### 新建文件夹

在 fnOS 的文件管理中 `新建文件夹`，`clouddrive` 用来挂载网盘，`docker` 用来保存容器的配置。具体层级如下：

![x0zisuj0.tq1_VoBgDx](https://img.slarker.me/wiki/x0zisuj0.tq1_VoBgDx.png)

<!-- ### 在 Docker 服务中启用 MountFlags

:::info 提示
- Clouddrive 使用 fuse3 来挂载云存储服务，使用 fuse3 在 Docker 容器中挂载云存储服务时，需要在主机系统上启用共享挂载。为了在 Docker 容器中启用 fuse 并将挂载分享给主机，需要在 Docker 服务中启用 MountFlags。具体可以查看 [官方文档](https://www.clouddrive2.com/docker.html)。
- fnOS 的 Docker 以 `systemd service` 运行，所以需要修改 `systemd service` 配置。
:::

[使用 SSH 登录](/fnos/ssh.md) fnOS，并切换到 `root` 用户，依次粘贴执行下面的命令：

创建 docker 服务配置目录：
```sh
mkdir -p /etc/systemd/system/docker.service.d/
```

修改 docker 服务配置：
```sh
cat <<EOF > /etc/systemd/system/docker.service.d/clear_mount_propagation_flags.conf
[Service]
MountFlags=shared
EOF
```

重启 docker 服务：
```sh
systemctl daemon-reload
systemctl restart docker.service
``` -->

### 使用命令安装 clouddrive

[使用 SSH 登录](/fnos/ssh.md) fnOS，并切换到 `root` 用户，粘贴执行下面的命令：

:::warning 注意
下面命令中的路径为 `/vol1/1000`，`vol1` 表示 `存储空间 1`，需要和上面建立的文件夹存储位置保持一致，请根据实际情况修改。
:::

```sh
docker run -d \
    --name clouddrive \
    --restart=always \
    --env CLOUDDRIVE_HOME=/Config \
    -v /vol1/1000/clouddrive:/CloudNAS:shared \
    -v /vol1/1000/docker/clouddrive/config:/Config \
    --network host \
    --pid host \
    --privileged \
    --device /dev/fuse:/dev/fuse \
    cloudnas/clouddrive2
```
<!-- 
安装成功后可以在 docker 的 `容器设置` 里把 clouddrive 的 `开机自启` 选项打开。

![Snipaste_2024-09-01_21-12-22_0i5U6b](https://img.slarker.me/wiki/Snipaste_2024-09-01_21-12-22_0i5U6b.jpg) -->

## 挂载网盘

:::info 提示
Clouddrive 免费版只能挂载一个网盘，对很多人来说也够用了。如果你不想购买 Clouddrive 授权，又想挂载更多网盘，这里也有一个套娃的办法，可以先通过 Alist 挂载网盘，再用 Clouddrive 挂载 Alist 的 Webdav。
:::

Clouddrive 默认的端口是：`19798`，使用 `NAS IP:19798` 打开后注册登录账号，添加网盘。

![MhlFfT_VUtbq5](https://img.slarker.me/wiki/MhlFfT_VUtbq5.png)

具体添加操作按提示来就行，添加好之后可以把网盘挂载到本地。

![JRJzOx_xVBT3Z](https://img.slarker.me/wiki/JRJzOx_xVBT3Z.png)

挂载点选择 `CloudNAS`。

![A9GKXC_Bpgzmj](https://img.slarker.me/wiki/A9GKXC_Bpgzmj.png)

挂载好之后，在 fnOS 文件管理中，点开 `clouddrive`，就可以看到网盘里的资源了。

![RojvnL_eTlZRZ](https://img.slarker.me/wiki/RojvnL_eTlZRZ.png)

## 115 风控

最近由于 115 网盘风控升级，刮削时可能会遇到 `too many request` 报错，可以暂时使用下面的办法解决：

- CD2 进入 115 网盘设置，`MaxQueriesPerSecond` 改为 `0.9`。

![](https://img.slarker.me/wiki/8f9a737448994ef5942a4ef3961199dc.webp)

- CD2 进入系统设置 ，默认目录缓存时间（秒）改为 `0` 秒，开启 `目录缓存持久化`（此功能从2024 年 10 月 22 日起已对非会员开放）。

![](https://img.slarker.me/wiki/994aaa979e6e4c83a1897b08beec0724.webp)

> 温馨提示：默认目录缓存时间改为0秒后，CD2不会自动刷新115网盘，后期网盘加入新文件，请进入CD2后台手动刷新。

如果使用 Alist 挂载 115，在挂载时需要将 `限制速率` 设置为 1，避免触发风控。

![](https://img.slarker.me/wiki/20250223114250035.webp)

## 影视设置

在 fnOS 应用中心安装 `影视` 应用，并设置可访问的文件夹。

![Snipaste_2024-09-01_20-44-02_WdTE9T](https://img.slarker.me/wiki/Snipaste_2024-09-01_20-44-02_WdTE9T.jpg)

允许 `影视` 应用访问挂载到本地的网盘文件夹。

![Snipaste_2024-09-01_20-46-54_Z3WrbF](https://img.slarker.me/wiki/Snipaste_2024-09-01_20-46-54_Z3WrbF.jpg)

打开 `影视` 应用，按提示进行授权，创建管理员账号，创建媒体库，`媒体文件夹` 选择挂载到本地的网盘影视文件夹。

![bEBpWd_d6iO8O](https://img.slarker.me/wiki/bEBpWd_d6iO8O.png)

创建好之后，等待自动刮削完成就可以了，非常省心！

![Snipaste_2024-08-31_22-10-01_G26xFt](https://img.slarker.me/wiki/Snipaste_2024-08-31_22-10-01_G26xFt.jpg)

详情介绍也很完整。

![Snipaste_2024-09-01_20-53-22_prNdiO](https://img.slarker.me/wiki/Snipaste_2024-09-01_20-53-22_prNdiO.jpg)

## 115 资源

115 资源网上有很多，这里分享一些链接：

- [115 资源1](https://docs.qq.com/sheet/DQmlyUG1zdmZwVkdl?tab=BB08J2)
- [115 资源2](https://docs.qq.com/smartsheet/DU0JQR3lkS1huck9U)
- [Telegram 资源群组1](https://t.me/hao115)
- [Telegram 资源群组2](https://t.me/Resources115_SFW)
- [Telegram 资源群组3](https://t.me/vip115hot)

找到想要的资源，转存到自己的网盘里，就可以直接通过 fnOS 的影视观看了。