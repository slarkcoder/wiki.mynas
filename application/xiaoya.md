# 影音资源库 - 小雅部署教程

:::info 提示
`推荐应用` 中的教程均包含 `Unraid` 和 `群晖` 两部分，大家可以按需参照相关部分，对于重复内容就不再赘述。
:::

![i67r7k_9ir0Cy](https://slark-blog.s3.bitiful.net/i67r7k_9ir0Cy.png)

小雅是基于阿里云盘的共享资源构建的一个比较完整的，大规模的资源库。结合你的阿里云盘，在你需要的时候，把对应的资源转移到你的阿里云盘的中转目录。而且可以做到定期清理，不用担心阿里云盘容量被转存的资源占满。配置好之后，这一切都是自动的，不需要人工干预。

还有一些优点，小雅支持 WebDAV，可以结合各种客户端比如 Jellyfin、Emby 来使用，很多资源都已经过刮削，在客户端使用也非常省心。对于有些家人不会找资源的，小雅可真是个神器！相对于 nastools 之类的自动化工具，也不需要折腾 PT 站点认证，上手使用门槛非常低。

:::warning 风控提示
由于小雅的大部分资源都是基于阿里云盘，所以对阿里云盘的 `api` 依赖比较敏感，大量频繁读取文件，有可能 `被风控`。如果你需要使用各种刮削工具对小雅的资源进行扫描刮削，可以仔细阅读 [阿里的风控](https://xiaoyaliu.notion.site/xiaoya-docker-69404af849504fa5bcf9f2dd5ecaa75f#6b42128605b841288455a52b8a06bc9f) 细节。
:::

本篇教程就来介绍如何部署小雅。

## 准备

首先获取下面三个必须的 Token 和 ID。

- 阿里云盘 Token（32 位长度），[使用阿里云盘 App 点此扫码](https://alist.nn.ci/zh/guide/drivers/aliyundrive) 获取备用。
- 阿里云盘 OpenToken（288~335 位长度），[使用阿里云盘 App 点此扫码](https://alist.nn.ci/tool/aliyundrive/request.html) 获取备用。
- 中转文件夹目录 ID，可以将 [中转文件夹](https://www.aliyundrive.com/s/rP9gP3h9asE) 保存到阿里云盘，然后在浏览器里打开就可以看到 `目录 ID`，获取备用。

![ys1YwJ_Xu3x4m](https://slark-blog.s3.bitiful.net/ys1YwJ_Xu3x4m.png)

## Unraid

- 提前安装 `FileBrowser`，方便修改小雅所需的配置文件。
- 如果你需要安装小雅 Jellyfin 或者 Emby 全家桶，最好把已经装的 Jellyfin、Emby 都先删掉。 

### 部署

使用 `FileBrowser` 在 `appdata` 下面建立 `xiaoya` 文件夹。

可以使用这个一键脚本方便的部署小雅，感谢 [DDS-Derek](https://github.com/DDS-Derek/xiaoya-alist) 大佬以及开源。

```sh
bash -c "$(curl --insecure -fsSL https://ddsrem.com/xiaoya_install.sh)"
```

打开 Unraid 的控制台，粘贴上面的一键脚本并回车执行：

![BqGAQx_RS70yE](https://slark-blog.s3.bitiful.net/BqGAQx_RS70yE.png)


### 安装小雅

在主菜单选择 `1 -> 1`，安装小雅 Alist，提示配置小雅目录，可以填写：

```yml
/mnt/user/appdata/xiaoya
```

继续按提示填写我们提前准备好的 `阿里云盘 Token`，`阿里云盘 OpenToken`，`中转文件夹目录 ID`，`PikPak` 可按需选择配置，网络模式推荐使用 `host`，之后就开始安装了，直到出现 `安装完成！`

![Heihqe_KDcj7U](https://slark-blog.s3.bitiful.net/Heihqe_KDcj7U.png)

这个时候小雅就已经可以访问了，默认端口是 `5678`。小雅首页下方也显示了默认的 `WebDAV` 账号信息。

### 安装小雅助手

小雅会在你播放对应的资源的时候，把对应的资源通过调用 `api` 转存到你的云盘里，如果你没有 `仓鼠症`，那隔一段时间就需要手动清理转存的资源。好在小雅也有对应的助手来帮你自动完成这个清理工作。

在主菜单选择 `4 -> 1`，安装小雅助手，具体清理模式可以根据自己需求来选。小雅助手设置比较简单，安装成功就能自动运行，因为你之前填的 阿里云盘 token 配置都是可以共享使用的。

### 图标问题

使用脚本安装的 `小雅` 和 `小雅助手` 是没有图标的，对于有些强迫症的人看起来可能很不舒服，如果需要添加图标，可以在使用一键脚本装完这两个 docker 应用之后，先删除这两个 docker 应用，然后在 Unraid 终端分别执行下面两个命令。

如果需要修改图标，可以修改命令中的 `--label='net.unraid.docker.icon` 参数的图片地址。

如果想知道下面的两个命令是怎么来的，可以参考 [给使用命令安装的 Docker 应用添加图标](/unraid/app_icon.md)。

#### 小雅

```yml
docker run --name=xiaoya \
        --hostname=Tower \
        --volume=/mnt/user/appdata/xiaoya:/data \
        --volume=/mnt/user/appdata/xiaoya/data:/www/data \
        --network=host \
        --workdir=/opt/alist \
        --restart=always \
        --log-opt max-size=50m \
        --log-opt max-file=1 \
        --runtime=runc \
        --detach=true \
        --label='net.unraid.docker.icon=https://img.slarker.me/unraid/xiaoya.png' \
        xiaoyaliu/alist:hostmode \
        /opt/alist/alist server --no-prefix
```

#### 小雅助手

```yml
docker run --name=xiaoyakeeper \
        --hostname=Tower \
        --env=TZ=Asia/Shanghai \
        --volume=/var/run/docker.sock:/var/run/docker.sock \
        --network=host \
        --privileged \
        --restart=always \
        --log-opt max-size=50m \
        --log-opt max-file=1 \
        --runtime=runc \
        --detach=true \
        --label='net.unraid.docker.icon=https://img.slarker.me/unraid/Alist_encrypt_A.png' \
        alpine:3.18.2 \
        sh -c 'if [ -f /etc/xiaoya/aliyun_clear.sh ];then sh /etc/xiaoya/aliyun_clear.sh 0;else sleep 60;fi'
```

## 群晖

群晖安装 `xiaoya` 非常简单。

### 安装小雅

添加 `矿神` 套件源，提前安装好 `Container Manager`。

在套件中心搜索 `xiaoya` 点击安装，根据提示填写我们 **提前准备好的参数**，点击下一步就会安装 `xiaoya` Docker 应用，安装好之后需要几分钟下载数据，之后就可以打开小雅了。

![4xi1rfcp.plw_Td5hAt](https://slark-blog.s3.bitiful.net/4xi1rfcp.plw_Td5hAt.png)

### 安装小雅助手

[使用 SSH 登录](/synology/ssh.md) 群晖，并切换到 `root` 用户。

执行下面的命令：

```sh
bash -c "$(curl -s https://xiaoyahelper.zengge99.eu.org/aliyun_clear.sh| tail -n +2)" -s 3
```

执行成功后，`Container Manager` 中就多了一个名为 `xiaoyakeeper` 的容器，每 24 小时就会自动清理中转目录。

![bonkw0tk.llw_aLbRbl](https://slark-blog.s3.bitiful.net/bonkw0tk.llw_aLbRbl.png)

<!-- ## 安装小雅 Emby 全家桶

使用 `FileBrowser` 在小雅配置目录（`/mnt/user/appdata/xiaoya`）建立配置文件：


![4dvfTN_IbTCK2](https://slark-blog.s3.bitiful.net/4dvfTN_IbTCK2.png) -->
