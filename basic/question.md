# 常见问题解答

![pexels-alex-green-569945_QwNpJJ](https://img.slarker.me/wiki/pexels-alex-green-569945_QwNpJJ.jpg)

这里收集一些新手经常遇到的问题。

## 群晖系统装在哪里？

这里有个官方的文档，说的很详细：[DSM 操作系统安装在哪个硬盘上？](https://kb.synology.cn/zh-cn/DSM/tutorial/Which_drive_is_DSM_installed_on)。

## 群晖找不到了怎么办？

可以参考教程：[查找群晖设备](/synology/find_synology.md)。

## 群晖如何使用第三方套件？

可以在 `套件中心` 添加第三方套件源，使用人数比较多的是矿神这个：

```yml
https://spk7.imnks.com/
```

![](https://img.slarker.me/wiki/synology_photo_03_oD0zrU.png)

这里也有一些其它的 [第三方套件源](https://synopackage.com/sources)，需要的可以看看。

## 群晖套件中心显示网络连接失败，网络错误，如何解决？

可以尝试修改群晖的 `DNS`。到 `控制面板` -> `网络` 中按下图手动设置 DNS，并点击 `应用`。

推荐修改为：`223.5.5.5`，`114.114.114.114`。

![ujwOIJ_41eBnO](https://img.slarker.me/wiki/ujwOIJ_41eBnO.png)

## 群晖的 Docker 套件在哪里？

新版的群晖 Docker 已改名为 `Container Manager`。

![hhRI1G_H2X3T1](https://img.slarker.me/wiki/hhRI1G_H2X3T1.png)

## 相册应用导入大量照片后 CPU 占用很高，甚至高达 100%，是否正常？

不管是群晖自带的 Photos 还是 Unraid 上的 Immich，PhotoPrism 等等类似的照片应用，在导入照片后，都会对照片做一次索引，包括且不限于 `AI 识别`，`生成缩略图` 等等，这些操作都会比较占用 CPU 资源，因此 CPU 占用高是很正常的。

即便你换了性能比较强的 CPU，比如 12100，甚至 12400 这种，CPU 也会占用很高，只是持续时间长短问题，等照片索引完成之后，就会恢复正常。

![UFjhLW_MeErSW](https://img.slarker.me/wiki/UFjhLW_MeErSW.png)

## qBittorrent 默认密码是多少？

### 旧版（4.6.1 之前版本）

默认密码是：`admin/adminadmin`。

### 新版（4.6.1 及以后版本）

默认密码为随机生成的密码，需要到 `qBittorrent` 的日志中查看。如果使用 Docker 安装，需要到 `qBittorrent` 容器的日志中查看。

- 如果是 Unraid，可以到 `qBittorrent` 容器图标上左键单击，点 `日志` 进去就能看到。
- 如果是群晖，可以到 `Container Manager` -> `容器` 中，在具体的应用上面右击，点击 `详情` 进去，切换到 `日志` 标签页查看。

登录之后可以到 `qBittorrent` WebUI 中修改密码。

## 如何重置群晖 qBittorrent 套件密码？

套件版 `qBittorrent` 忘记密码，可以按照下面的方法重置。

:::info 套件版本
适用于 `4.x ~ 4.6.x`
:::

在套件中心停止 `qBittorrent`，使用 `ssh` 登录群晖，并切换到 `root` 用户，执行下面的命令：

```sh
sudo sed -i '/WebUI\\Port/i\WebUI\\Password_PBKDF2=\"@ByteArray(xK2EwRvfGtxfF+Ot9v4WYQ==:bNStY\/6mFYYW8m\/Xm4xSbBjoR2tZNsLZ4KvdUzyCLEOg7tfpchVJucIK9Dwcp6Xe9DI4RwpoCPI9zhicTdtf5A==)\"' /var/packages/qBittorrent/target/qBittorrent_conf/config/qBittorrent.conf
```

在套件中心启动 `qBittorrent`，默认密码会被重置为 `adminadmin`。

## NAS 上安装的迅雷提示需要内测码？

迅雷内测码可以填这个：

```
我不是矿神IMNKS
```

## Unraid 上装的 Zerotier、星空组网无法访问 Unraid WebUI，但是其它 docker WebUI 可以访问，该怎么解决？

可以参考教程：[解决虚拟组网远程无法访问 80 端口问题](/unraid/remote.md)

## 群晖、Unraid 安装 Docker 应用出错，Docker 无法下载，该怎么解决?

由于 Docker 官方地址被屏蔽，近期国内主流的镜像加速服务也相继失效，可以参考教程：[解决 Docker 镜像无法下载问题](/basic/docker_mirrors.md)。