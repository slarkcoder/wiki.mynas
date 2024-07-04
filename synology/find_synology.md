# 查找群晖设备

:::warning 注意
- 查找群晖要先确保你的 NAS 和电脑都连到了同一台路由器上。
- 如果使用网页查找不到，可以试试桌面版 `Synology Assistant`。
:::

有时候会因为某些情况（比如搬家换地方、更换路由器等等，导致网络环境有变化），连不上群晖，有哪些办法能找到群晖呢？

## 常见的两种原因

群晖默认的 IP 地址是通过动态 DHCP 获取的，所以如果你没有给群晖设置过静态 IP，突然连不上了，一般都是因为群晖的 IP 地址发生了变化。这种情况通过路由器后台都可以看到新的群晖 IP，使用 Web 查找工具也可以快速找到新的群晖 IP，找到之后记得把群晖的 IP 设置成静态地址。

如果是群晖设置了静态 IP，但是网络环境发生变化，比如换了新的路由器或者光猫，搬了新家等等，这种一般都是因为网段发生了变化，导致你的电脑和群晖不在同一网段，所以群晖找不到。这种网段变化导致群晖失联情况，一般用 Web 查找工具都找不到，可以直接用桌面版的 `Synology Assistant` 来查找。尽管群晖和你的电脑不在同一网段，但是通过 `Synology Assistant` 可以直接设置群晖的 IP，只要在同一网段，就能连上了。

## 通过网页群晖查找工具

为了简单一些，可以先使用群晖官方的 Web 查找工具：

[https://find.synology.com](https://find.synology.com)

![xgg5ydms.kz3_9DKwY8](https://img-1255332810.cos.ap-chengdu.myqcloud.com/xgg5ydms.kz3_9DKwY8.png)

## 通过 Synology Assistant

如果网页工具找不到，可以下载桌面版的 `Synology Assistant` 安装后查找。

[下载 Synology Assistant](https://www.synology.cn/zh-cn/support/download/DS923+?version=7.2#utilities) 

备用下载地址：

- [Windows 版](https://www.123pan.com/s/1JKMjv-Trpo.html)
- [macOS 版](https://www.123pan.com/s/1JKMjv-vrpo.html)