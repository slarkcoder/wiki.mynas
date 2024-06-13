# 安装 Immich 并开启硬件加速

一直以来，我都用群晖自带的 Photos 来备份手机照片，因为除了群晖相册之外，很少有一款相册的功能强大，而且有方便的手机客户端可以使用。而要使用群晖相册，就必须用群晖的系统，或者用白群晖，或者就得开个虚拟机。然而想想也就为了备份个相册而已，这么做实在太过笨拙。

而现在，[immich](https://immich.app/) 的出现让我终于有了放弃群晖相册的想法。跟着官方教程，一次就部署成功了，没遇到什么坑，App 也很好用。[immich](https://immich.app/) 这个项目很活跃，版本更新频繁，以至于官方在文档的显著位置放了一句提示：“⚠️ The project is under very active development. Expect bugs and changes. Do not use it as the only way to store your photos and videos!”。😂

下面这是 [immich](https://immich.app/) 的 [Roadmap](https://github.com/orgs/immich-app/projects/1/views/1)，可以看到，很多功能和 bug 都在计划之中。

![L1WOp7_nhJbBF](https://img-1255332810.cos.ap-chengdu.myqcloud.com/L1WOp7_nhJbBF.png)

## 如何部署？

如果你可以看懂一些英文，直接跟着 [官方文档](https://immich.app/docs/install/unraid) 走一遍，应该也不会遇到什么坑，官方文档也非常详细，该填的配置文件都可以直接粘贴。我是在 Unraid 这个 NAS 平台上部署 immich 的，所以本篇教程我也只讲如何在 Unraid 上部署使用。虽然跟着官方文档部署也不难，但对于刚接触 Unraid 的小白来说，依然可能遇到很多坑。下面这些步骤是为小白准备的，为了尽可能让小白也一次成功，我会把所有详细步骤都讲清楚。

### 准备

- 需要建一个照片存储目录，用来保存你手机上的照片和视频。比如在 Unraid 的共享里建立一个名为 `photos` 的共享目录。

![IqS9vw_bwxw78](https://img-1255332810.cos.ap-chengdu.myqcloud.com/IqS9vw_bwxw78.jpg)

- 安装 `Docker Compose Manager` 插件。安装 immich 使用 `Docker Compose Manager` 比较方便，在应用中心搜索安装即可。

![AlK5M0_qlzzvl](https://img-1255332810.cos.ap-chengdu.myqcloud.com/AlK5M0_qlzzvl.png)

> 什么是 `Docker Compose`？简单理解，Docker Compose 就是一组复杂的 Docker 容器集合，通过一个 docker-compose 文件来描述它们之间的关系。对于我们用户来说，只要能找到这个应用的 docker-compose 文件，我们也能轻松的让这个复杂的应用运行起来，不用去关心它们之间的关系是怎样的。需要启动的时候，直接启动这个 compose 就可以。

### 部署

在安装成功 Docker Compose 插件之后，在 Docker 选项卡最下方，会有一个 `ADD NEW STACK` 的按钮，点击之后会弹出一个对话框，提示输入名称，我们填写 `Immich`。填完之后点击 `OK`。

建好之后，我们点击名称，会弹出提示，我们再点击 `EDIT STACK`。接下来我们会填写 `COMPOSE FILE` 以及 `ENV FILE`。

![gnpiY7_Gl0LZR](https://img-1255332810.cos.ap-chengdu.myqcloud.com/gnpiY7_Gl0LZR.png)

![xj40ii_anzJus](https://img-1255332810.cos.ap-chengdu.myqcloud.com/xj40ii_anzJus.png)

点击 `COMPOSE FILE`，将官方提供的 [Compose File](https://github.com/immich-app/immich/releases/latest/download/docker-compose.yml) 全部选中，直接复制粘贴到配置文本框里，然后点击 `SAVE CHANGES`。

![zje0ia4u.in3_DMqWhX](https://img-1255332810.cos.ap-chengdu.myqcloud.com/zje0ia4u.in3_DMqWhX.png)

再点击 `ENV FILE`，将官方提供的 [Env File](https://github.com/immich-app/immich/releases/latest/download/example.env) 全部选中，直接复制粘贴到配置文件里。

接着修改上传路径 `UPLOAD_LOCATION`。比如我们之前建立的共享文件夹 `photos` 的上传路径就是 `/mnt/user/photos`。

![5azpnm4t.jez_6h9Vyo](https://img-1255332810.cos.ap-chengdu.myqcloud.com/5azpnm4t.jez_6h9Vyo.png)

到现在，我们的配置就改好了，点击 `SAVE CHANGES` 保存更改。

接下来，就可以点击 `COMPOSE UP` 来启动容器了。

![oCmpxh_V0AoQS](https://img-1255332810.cos.ap-chengdu.myqcloud.com/oCmpxh_V0AoQS.png)
过一会，等待容器启动完成，就可以在 Docker 列表看到一堆新的 docker 容器了。看到 `2283` 这个默认的端口之后，我们就可以打开浏览器输入 `NAS IP:2283` 访问 immich 了。

![E7hI72_SIJF2t](https://img-1255332810.cos.ap-chengdu.myqcloud.com/E7hI72_SIJF2t.png)

immich 这个应用的启动和停止，可以通过控制最下方的 docker compose 来实现。

![LTasjz_pzX2uv](https://img-1255332810.cos.ap-chengdu.myqcloud.com/LTasjz_pzX2uv.png)

## 客户端

[immich](https://immich.app/) 支持 iOS 和 Android 客户端，而且功能非常完善，备份功能非常好用。Immich 也有网页版。

## 设置中文

目前，最新版的 `immich` Web 端已支持中文，登录 Web 版后台，点击自己的头像，在 `Account Setting` -> `App Setting` -> `Language` 中可以找到 `Chinese(Simplified)` 选项，点击就可以切换。

## 机器学习

群晖的 Photos 支持人脸识别。在 immich 的网页版中，也有机器学习的选项，支持照片分类。

![qHpbnv_a8CXhH](https://img-1255332810.cos.ap-chengdu.myqcloud.com/qHpbnv_a8CXhH.png)

## 硬件加速（可选）

根据官方文档的提示，目前硬件加速功能还处于 [实验性阶段](https://immich.app/docs/features/hardware-transcoding)，因此这个功能是可选的，如果你有需要，可以开启试试。这里仅介绍 Intel 带核显的 CPU 如何设置，其它平台可以查阅官方文档。

为了支持 VP9，你使用的 CPU 应该至少是 Intel 9 代或者以后的新平台。如果你用的是第 11 代或者之前的平台，还需要按这里的 [文档说明](https://jellyfin.org/docs/general/administration/hardware-acceleration/intel/#configure-and-verify-lp-mode-on-linux) 开启低电压模式。总之，这里的设置和开启 Jellyfin 硬解是一样的，只要你能确定 Jellyfin 可以硬解，那就 OK。

### 设置硬件加速

修改 Immich 的 `COMPOSE FILE`，在 `immich-microservices:` 中加入下面这段配置开启 QSV：

```yml
devices:
  - /dev/dri:/dev/dri
```

修改之后应该是这样：

![lhcnczxp.3o2_khvpiN](https://img-1255332810.cos.ap-chengdu.myqcloud.com/lhcnczxp.3o2_khvpiN.png)

保存后，点击更新 `UPDATE STACK`。之后在 Web 控制台里依次点击 `Administration -> Setting -> Video Transcoding Settings -> Hardware Acceleration`，将 `ACCELERATION API` 切换为 `Quick Sync` 并保存。

![2jmo5k21.lt3_M1Mwo4](https://img-1255332810.cos.ap-chengdu.myqcloud.com/2jmo5k21.lt3_M1Mwo4.png)