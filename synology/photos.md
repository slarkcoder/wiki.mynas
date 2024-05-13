# Synology Photos 常见问题

本篇教程解决一些使用 `Synology Photos` 经常遇到的问题。涉及到 `SSH` 的一些操作，可以参考这里：[使用 SSH 登录](/synology/ssh.md)。

## 相册视频没有缩略图

很多视频在上传到 `Synology Photos` 之后经过索引，也没有缩略图，像下面这样：

![synology_photo_01_Bx8NP8](https://slark-blog.s3.bitiful.net/synology_photo_01_Bx8NP8.png)

解决起来也不难，可以使用 `FFmpeg 6` 来生成缩略图。

### 安装 `FFmpeg 6`

在 `套件中心` -> `设置` -> `套件来源` 中新增 `矿神` 套件源：

```sh
https://spk7.imnks.com
```

![synology_photo_03_oD0zrU](https://slark-blog.s3.bitiful.net/synology_photo_03_oD0zrU.png)

之后在套件中心搜索 `FFmpeg 6` 并安装：

![synology_photo_04_t4YRh6](https://slark-blog.s3.bitiful.net/synology_photo_04_t4YRh6.png)

### SSH 操作

[使用 SSH 登录](/synology/ssh.md) 群晖，并切换到 `root` 用户，执行下面的命令：

```sh
cp /var/packages/ffmpeg6/target/bin/ffmpeg /usr/bin/
cp /var/packages/ffmpeg6/target/bin/ffmpeg /var/packages/SynologyPhotos/target/usr/bin/
```

之后使用 `exit` 退出就可以了。

### 设置权限

在 `控制面板` -> `共享文件夹` 中分别给 `homes` 和 `photo` 文件夹添加 `sc-ffmpeg6` 读写权限：

![synology_photo_09_ZJdbjs](https://slark-blog.s3.bitiful.net/synology_photo_09_ZJdbjs.png)

选中具体的文件夹，点击 `编辑` -> `权限`，点击 `本地用户` 切换到 `系统内部用户账号`，在 `sc-ffmpeg6` 后面勾选 `可读写` 并保存。

![synology_photo_07_HbL1TF](https://slark-blog.s3.bitiful.net/synology_photo_07_HbL1TF.png)

### 重新索引

最后在 `Synology Photos` 中点击重新索引就可以了，稍等片刻缩略图就会出来。

![synology_photo_02_QerRXs](https://slark-blog.s3.bitiful.net/synology_photo_02_QerRXs.png)

![synology_photo_08_EFbPsg](https://slark-blog.s3.bitiful.net/synology_photo_08_EFbPsg.png)


