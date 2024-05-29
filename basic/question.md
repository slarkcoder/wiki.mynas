# 常见问题解答

这里收集一些新手经常遇到的问题。

## 群晖如何使用第三方套件？

可以在 `套件中心` 添加第三方套件源，使用人数比较多的是矿神这个：

```yml
https://spk7.imnks.com/
```

![](https://img-1255332810.cos.ap-chengdu.myqcloud.com/synology_photo_03_oD0zrU.png)

这里也有一些其它的 [第三方套件源](https://synopackage.com/sources)，需要的可以看看。

## 群晖的 Docker 套件在哪里？

新版的群晖 Docker 已改名为 `Container Manager`。

![hhRI1G_H2X3T1](https://img-1255332810.cos.ap-chengdu.myqcloud.com/hhRI1G_H2X3T1.png)

## iStoreOS 魔法插件到哪里下载？

iStoreOS 本身并不自带魔法插件，可以使用这里的包一键自动安装。

[iStoreOS 软件包](https://github.com/AUK9527/Are-u-ok/tree/main/x86)

## qBittorrent 默认密码是多少？

旧版的 `qBittorrent`，默认密码是：`admin/adminadmin`。

新版的 `qBittorrent` 默认密码为随机生成的密码，需要到 `qBittorrent` 的日志中查看。

如果是 Unraid，可以到 `qBittorrent` 容器图标上左键单击，点 `日志` 进去就能看到。

如果是群晖套件版 `qBittorrent`，默认密码目前和旧版一致。

登录之后可以到 `qBittorrent` WebUI 修改密码。

## NAS 上安装的迅雷提示需要邀请码？

迅雷邀请码可以填这个：

```
我不是矿神IMNKS
```

## Unraid 上装的 Zerotier、星空组网无法访问 Unraid WebUI，但是其它 docker WebUI 可以访问，该怎么解决？

可以参考这个教程解决：

[解决虚拟组网远程无法访问 80 端口问题](/unraid/remote.md)

## 群晖、Unraid 安装 Docker 应用出错，Docker 无法下载，该怎么解决?

Docker 镜像拉不下来，一般都是网络问题。由于 Docker 镜像服务器在国外，最简单直接有效的办法是使用软路由，在软路由上配置魔法解决，具体可以看这个教程：

- Unraid：[一文搞定 Unraid 安装软路由](/unraid/router.md)
- 群晖：[安装旁路由](/synology/router.md)

