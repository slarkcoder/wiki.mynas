# 第三方文件管理器 - FileBrowser

![](https://img.slarker.me/wiki/202409101416339.jpg)

虽然 fnOS 自带的文件管理器比较好用，但依然有一些功能是缺失的，比如无法管理共享文件夹之外的文件，只能分享给系统内的其他用户，无法生成分享链接等等。要想使用这些功能，可以安装第三方的文件管理器 [filebrowser](https://github.com/filebrowser/filebrowser) 来解决。

## 数据库和配置文件

按下图所示在 `docker` 文件夹里新建 `filebrowser` 文件夹：

![](https://img.slarker.me/wiki/202409101423668.png)

[使用 SSH 登录](/fnos/ssh.md) fnOS，并切换到 `root` 用户。进入到 `filebrowser` 文件夹：

```sh
cd /vol1/1000/docker/filebrowser
```

创建数据库文件：

```sh
touch filebrowser.db
```

创建配置文件：

```sh
echo '{"port": 80, "baseURL": "", "address": "", "log": "stdout", "database": "/database/filebrowser.db", "root": "/srv"}' > settings.json
```

## 建立容器

:::info 提示
如果需要将多个存储池或者磁盘挂载到 filebrowser，可以添加多个 `-v` 参数。比如 `-v /vol1:/srv/vol1 -v /vol2:/srv/vol2`。如果命令需要换行，注意在行末尾添加 `\`。
:::

可以使用 下面的命令来创建容器：

```sh
docker run \
    -d \
    --restart=always \
    --name=filebrowser \
    -v /vol1:/srv/vol1 \
    -v /vol1/1000/docker/filebrowser/filebrowser.db:/database/filebrowser.db \
    -v /vol1/1000/docker/filebrowser/settings.json:/config/settings.json \
    -e PUID=$(id -u) \
    -e PGID=$(id -g) \
    -p 8080:80 \
    filebrowser/filebrowser:s6
```

建好容器之后，可以使用 `fnOS IP:8080` 访问 `filebrowser`。

- 默认端口：8080
- 默认用户名/密码：admin/admin

## 效果预览

使用 filebrowser 可以生成分享链接，方便快速分享文件给朋友：

![](https://img.slarker.me/wiki/202409101440103.png)

可以管理共享文件夹之外的文件：

![](https://img.slarker.me/wiki/202409101431542.png)

支持添加多个存储池或者磁盘：

![](https://img.slarker.me/wiki/202409101432543.png)