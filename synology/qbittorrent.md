# 使用 Docker 安装 qBittorrent

qBittorrent 是流行的 BT/PT 下载客户端，相比于套件版的 qBittorrent，Docker 版的 qBittorrent 更新比较及时，可自定义的配置项更多。所以如果能够使用 Docker，推荐优先使用 Docker 安装 qBittorrent。

## 创建共享文件夹

到 `控制面板` -> `共享文件夹` 中创建一个共享文件夹，例如 `downloads`。

![M0XsNE_Tn3iNV](https://img-1255332810.cos.ap-chengdu.myqcloud.com/M0XsNE_Tn3iNV.png)

在 `File Station` 中为其添加 `Everyone` 读写权限，允许所有用户访问。

![usto1pbr.j3k_zrCaWh](https://img-1255332810.cos.ap-chengdu.myqcloud.com/usto1pbr.j3k_zrCaWh.png)

## 安装

**推荐使用 Docker 版的 qBittorrent**。在 `Container Manager` -> `注册表` 中搜索 qBittorrent，下载 `linuxserver/qbittorrent`，版本选择 `lastest`。

![nMKSxT_GlqIJJ](https://img-1255332810.cos.ap-chengdu.myqcloud.com/nMKSxT_GlqIJJ.png)

下载完成后到映像中选中该映像，点击 `运行`。

![pmgmk5lz.v0r_jNjvUY](https://img-1255332810.cos.ap-chengdu.myqcloud.com/pmgmk5lz.v0r_jNjvUY.png)

勾选 `启用自动重新启动`，点击 `下一步`。

![EthdqL_Q6dqGb](https://img-1255332810.cos.ap-chengdu.myqcloud.com/EthdqL_Q6dqGb.png)

按图中所示映射端口号、文件夹（`->` 左边的为主机端口号、文件夹，右边的为容器端口号、文件夹）：
- `50000` -> `6881`
- `8080` -> `8080`
- `/docker/qbittorrent/config` -> `/config`
- `/downloads` -> `/downloads`

:::warning 注意
容器内部的端口号和文件夹一般都不需要修改，只需要修改主机端口号和文件夹即可。
:::

![tq6kmU_F8XxK6](https://img-1255332810.cos.ap-chengdu.myqcloud.com/tq6kmU_F8XxK6.png)

之后点击下一步，直到完成，qbittorrent 的 Docker 容器就已经启动了。默认的端口就是上面填写的 8080，使用 `NAS IP:8080` 访问。

## 默认密码

新版的 qbittorrent 默认密码需要到 `日志` 中查看，在该容器上面点击 `详情` 就可以看到 `日志` 标签，登录后可以修改密码。

![33GAu8_M5JVQF](https://img-1255332810.cos.ap-chengdu.myqcloud.com/33GAu8_M5JVQF.png)

## 修改监听端口

qBittorrent 的默认监听端口是 `6881`，很多 PT 网站默认都屏蔽了这个端口，使用默认监听端口在 PT 种子的 Tracker 选项中会提示：`Port 6881 is blacklisted`。

![XN7fl7_1ZR9YM](https://img-1255332810.cos.ap-chengdu.myqcloud.com/XN7fl7_1ZR9YM.png)

因此上面在安装的时候把容器的 `6881` 端口映射到了主机的 `50000` 端口，登录 qbittorrent 后需要在 `连接` 选项中，把默认的 `6881` 修改成上面的端口 `50000`，这样 PT 站点就可以正常下载了。当然你也可以映射到其他端口，前后保持一致即可。

![QKnTnt_AaPJdz](https://img-1255332810.cos.ap-chengdu.myqcloud.com/QKnTnt_AaPJdz.png)

## 解决 PT 下载被识别为盒子问题

可以参考这篇教程：[使用 macvlan 为 qBittorrent 设置独立 IP](/synology/macvlan.md)。
