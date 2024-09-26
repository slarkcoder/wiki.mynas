# 高颜值的 NAS 应用导航 - Homepage

![3Ihvmm_vqfQe0](https://img-1255332810.cos.ap-chengdu.myqcloud.com/3Ihvmm_vqfQe0.png)

NAS 上装的应用一旦多了，各种端口记起来很麻烦，虽然加个书签也能解决问题，但是如果要分享给家人或者朋友用，还是不太方便。之前也折腾过这个 [Homepage](https://github.com/gethomepage/homepage)，但是维护起来并不容易，每个应用都需要单独配置 icon，好处就是自定义程度高，配好了就非常好看。

为了能让大家更简单的使用 Homepage，降低上手成本，你可以根据我这个教程来配置，使用我提供的 [配置文件](https://www.123pan.com/s/1JKMjv-zIxo.html)，十几分钟就可以自定义出专属的 Homepage。

## Unraid 安装 Homepage

将 [配置文件](https://www.123pan.com/s/1JKMjv-zIxo.html) 下载，然后解压，将整个 `homepage` 目录上传到 docker 的应用数据目录 `/mnt/user/appdata` 下面。

![33tkv4ee.cjn_vNrnD5](https://img-1255332810.cos.ap-chengdu.myqcloud.com/33tkv4ee.cjn_vNrnD5.png)

通过 [Docker 安装模板](https://files.mynas.chat/share/BXbuuhLC) 安装 `Homepage`，所有的设置都不需要修改，直接点应用安装。

> [如何使用模板安装应用？](/unraid/unraid_docker_template.md)

![vl5rlwbq.kkx_5MXtes](https://img-1255332810.cos.ap-chengdu.myqcloud.com/vl5rlwbq.kkx_5MXtes.png)

## 群晖安装 Homepage

在套件中心安装 `FileBrowser`，并为 `FileBrowser` 设置 docker 目录的 `读写` 权限。

![2eL0cY_yTG7Sq](https://img-1255332810.cos.ap-chengdu.myqcloud.com/2eL0cY_yTG7Sq.png)

将 [配置文件](https://www.123pan.com/s/1JKMjv-zIxo.html) 下载，然后解压，将整个 `homepage` 目录上传到 docker 文件夹下面。

![0smaspit.ylg_7Uz1Sb](https://img-1255332810.cos.ap-chengdu.myqcloud.com/0smaspit.ylg_7Uz1Sb.png)

群晖可以使用 Compose 安装 Homepage。在 Container Manmager 中新建项目，项目名称：homepage，选择路径为 `/docker/homepage`，会自动加载 homepage 下面的 `docker-compose.yml`。

![ly3u4ynq.23l_r7qc4l](https://img-1255332810.cos.ap-chengdu.myqcloud.com/ly3u4ynq.23l_r7qc4l.png)

![3jitvipa.fr2_HDcPlm](https://img-1255332810.cos.ap-chengdu.myqcloud.com/3jitvipa.fr2_HDcPlm.png)

一路 `下一步`，直到完成。

## fnOS 安装 Homepage

将 [配置文件](https://www.123pan.com/s/1JKMjv-zIxo.html) 下载，然后解压，将整个 `homepage` 目录上传到 docker 文件夹下面。

![](https://img.slarker.me/wiki/6ee1dbde116f44c48138103f2e9dfb5f.png)

在 `Docker` -> `Compose` 中 `新增项目`，命名为 `homepage`，路径选择 `/vol1/1000/docker/homepage`，使用现有配置文件创建项目，勾选 `创建项目立即启动`，最后点击 `完成` 就可以开始安装了。

![](https://img.slarker.me/wiki/973a635a37114abe996b903660d83979.png)

## 自定义配置

Homepage 默认端口为：3000，装好后使用 `NAS IP:3000` 访问。

接下来可以根据下面的说明来配置。配置文件位于 `homepage` 下面的 `config` 文件夹，图片文件位于 `homepage` 下面的 `public/images` 下面。

可以使用 `FileBrowser` 直接打开编辑相关的配置文件，需要修改的配置基本都在 `services.yaml` 和 `settings.yaml` 里面，打开就能直接编辑。

![xpc3nsja.ll0_4li2nt](https://img-1255332810.cos.ap-chengdu.myqcloud.com/xpc3nsja.ll0_4li2nt.png)

### 设置 Service

使用 `FileBrowser` 打开 `services.yaml` 文件。

![rt0vw24f.xuc_xBvN4E](https://img-1255332810.cos.ap-chengdu.myqcloud.com/rt0vw24f.xuc_xBvN4E.png)

Homepage 页面上每个链接都是一个 Service，每个 Service 既可以是一个 Docker 应用，也可以是一个链接。多个 Service 可以组合成为一个 Group，比如 `下载工具`、`文件服务` 等等。

可以先把所有的 IP 地址替换为自己的 NAS IP，再来修改 Service。

以 iStoreOS 这个链接为例：

```yml
- iStoreOS:
        icon: /images/dashboard_icons/openwrt.png
        href: http://192.168.2.1
        description: 路由器
        siteMonitor: http://192.168.2.1
```

icon 代表图标，href 是链接地址，description 是描述，siteMonitor 是监控信息，会在右上角显示 ping 延迟。

![5XYAcD_1OvRQ8](https://img-1255332810.cos.ap-chengdu.myqcloud.com/5XYAcD_1OvRQ8.png)

以 SpeedTest 这个 Docker 应用为例：

```yml
- SpeedTest:
        icon: /images/HD-Icons-main/svg/Librespeed_A.svg
        href: http://192.168.2.2:9000
        description: 内网测速工具
        container: SpeedTest
```

和上面的 iStoreOS 有区别的只有 siteMonitor 变成了 container，因为这是个 Docker 应用，可以把 SpeedTest 这个应用的 Docker 应用名字填到 container 后面，就能在 Service 的右上角显示这个应用的状态。

![VKWyJd_xbsIhr](https://img-1255332810.cos.ap-chengdu.myqcloud.com/VKWyJd_xbsIhr.png)

如果有不需要的应用，可以使用 `#` 将整个 Service 都注释掉。

![nt5dfbi0.hx2_ytBb00](https://img-1255332810.cos.ap-chengdu.myqcloud.com/nt5dfbi0.hx2_ytBb00.png)

建议修改的时候，再开一个浏览器窗口并排显示，这样修改并保存后，刷新就可以看到修改的效果，如果有出错的地方，也可以及时修改。

![mx1y2gl3.a5f_5KnqLs](https://img-1255332810.cos.ap-chengdu.myqcloud.com/mx1y2gl3.a5f_5KnqLs.png)

### Widgets

有些 Docker 应用，`homepage` 单独为其定义了 Widgets，可以用来多展示一部分信息。比如：

![hgf32azo.4bt_pqyZqT](https://img-1255332810.cos.ap-chengdu.myqcloud.com/hgf32azo.4bt_pqyZqT.png)

所需的配置信息可以到 [官方文档](https://gethomepage.dev/latest/widgets/) 查找。

以 `immich` 为例，相关的配置信息如下：

```yml
widget:
  type: immich
  url: http://immich.host.or.ip
  key: adminapikeyadminapikeyadminapikey
```

需要到 immich 后台创建一个 key，把 url 和 key 填到对应的位置，并把整个 widget 填到 Service 下面：

```yml
- Immich:
        icon: /images/HD-Icons-main/border-radius/Immich_D.png
        href: http://192.168.2.2:2283
        description: 照片管理
        container: immich_server
        widget:
            type: immich
            url: http://192.168.2.2:2283
            key: rUMzIjDYbPRJYvxc4LLyNgWP2kqNJnkVYLO6ndXvww
```

### 替换背景图

背景图位于 `/homepage/public/images` 下面，我用的就是这里的 `background.jpg`，如果你想换成自己喜欢的，可以把图片上传到这个位置。并在 `/homepage/config/settings.yaml` 中把对应的 image 路径改为新的路径。

### 布局

默认的布局是 row，每行 5 列，相关的配置可以在 `/homepage/config/settings.yaml` 中修改。

### 使用 icon

我提前下载好了两套 icon，位于 `/homepage/public/images` 下面，涵盖了常用的网站 logo 和应用 icon。如果需要查找 icon，可以在 `FileBrowser` 里使用关键字搜索。

![e1zt15ma.isu_qKKhCX](https://img-1255332810.cos.ap-chengdu.myqcloud.com/e1zt15ma.isu_qKKhCX.png)

比如搜索 `alist`，就出现了好几个 icon。

![rw3jsmu4.ajw_hAb5d1](https://img-1255332810.cos.ap-chengdu.myqcloud.com/rw3jsmu4.ajw_hAb5d1.png)

可以点某个 icon 具体看下，有哪个是自己想要的，鼠标右键对应的路径复制下来，比如：

```yml
http://192.168.2.2:8000/files/appdata/homepage/public/images/HD-Icons-main/border-radius/Alist_B.png
```

在路径中把 public 后面的都复制一下，这就是 icon 的路径。

```yml
/images/HD-Icons-main/border-radius/Alist_B.png
```

粘贴到 Service 的 icon 后面，刷新 `homepage` 就可以看到效果。