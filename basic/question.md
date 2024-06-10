# 常见问题解答

这里收集一些新手经常遇到的问题。

## 群晖如何使用第三方套件？

可以在 `套件中心` 添加第三方套件源，使用人数比较多的是矿神这个：

```yml
https://spk7.imnks.com/
```

![](https://img-1255332810.cos.ap-chengdu.myqcloud.com/synology_photo_03_oD0zrU.png)

这里也有一些其它的 [第三方套件源](https://synopackage.com/sources)，需要的可以看看。

## 群晖套件中心显示网络连接失败，网络错误，如何解决？

可以尝试修改群晖的 `DNS`。到 `控制面板` -> `网络` 中按下图手动设置 DNS，并点击 `应用`。

推荐修改为：`223.5.5.5`，`114.114.114.114`。

![ujwOIJ_41eBnO](https://img-1255332810.cos.ap-chengdu.myqcloud.com/ujwOIJ_41eBnO.png)

## 群晖的 Docker 套件在哪里？

新版的群晖 Docker 已改名为 `Container Manager`。

![hhRI1G_H2X3T1](https://img-1255332810.cos.ap-chengdu.myqcloud.com/hhRI1G_H2X3T1.png)

## 相册应用导入大量照片后 CPU 占用很高，甚至高达 100%，是否正常？

不管是群晖自带的 Photos 还是 Unraid 上的 Immich，PhotoPrism 等等类似的照片应用，在导入照片后，都会对照片做一次索引，包括且不限于 `AI 识别`，`生成缩略图` 等等，这些操作都会比较占用 CPU 资源，因此 CPU 占用高是很正常的。

即便你换了性能比较强的 CPU，比如 12100，甚至 12400 这种，CPU 也会占用很高，只是持续时间长短问题，等照片索引完成之后，就会恢复正常。

![UFjhLW_MeErSW](https://img-1255332810.cos.ap-chengdu.myqcloud.com/UFjhLW_MeErSW.png)

## iStoreOS代理插件到哪里下载？

iStoreOS 本身并不自带代理插件，可以使用这里的包一键自动安装。

[iStoreOS 软件包](https://github.com/AUK9527/Are-u-ok/tree/main/x86)

如果上面的地址无法打开，可以到这里下载：

[123 云盘：iStoreOS 插件](https://www.123pan.com/s/1JKMjv-0jxo.html)

下载好之后到 iStoreOS 中手动上传安装：

![voo450c5.qrq_PH9mYj](https://img-1255332810.cos.ap-chengdu.myqcloud.com/voo450c5.qrq_PH9mYj.png)

装好之后，在 `服务` 中可以找到相关插件。

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

Docker 镜像拉不下来，一般都是网络问题。由于 Docker 镜像服务器在国外，最简单直接有效的办法是使用软路由，在软路由上配置代理解决，具体可以看这个教程：

- Unraid：[一文搞定 Unraid 安装软路由](/unraid/router.md)
- 群晖：[安装旁路由](/synology/router.md)

