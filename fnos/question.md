# fnOS 常见问题解答

![Snipaste_2024-08-31_14-51-40_EuryBP](https://img.slarker.me/wiki/Snipaste_2024-08-31_14-51-40_EuryBP.jpg)

## 反馈问题

目前 fnOS 处于公测阶段，如果遇到问题，可以向开发团队 [提交反馈](https://trim-nas.feishu.cn/share/base/form/shrcn2iVepeqaASZzMF0iMNAC5e)。

## fnOS 系统是付费的吗？

国内用户免费使用，具体信息可以看 [官网公告](https://help.fnnas.com/articles/fnosV1/contact/profit-statement.md)。

## 如何在虚拟机上安装体验 fnOS？

- [Unraid 虚拟 fnOS](/unraid/fnos.md)
- [群晖虚拟 fnOS](/synology/fnos.md)
- PVE、ESXi 虚拟 fnOS 可以参考 [官方教程](https://help.fnnas.com/articles/fnosV1/start/install-virtual.md)。

## fnOS 系统安装在哪里？

fnOS 推荐安装在 SSD 硬盘上，如果是 128G 的 SSD 硬盘，系统只会占用大约 60~70G 的空间。实测使用 16G 的傲腾 M10 SSD 也可以顺利安装，系统也可以正常升级。

![ZsCnwY_pxBpNX](https://img.slarker.me/wiki/ZsCnwY_pxBpNX.png)

## fnOS 有手机 App 吗？

iOS，Android App 都有，并且还有 TV 版（飞牛影视）。

![](https://static2.fnnas.com/official/web/download_img_3.png)

## fnOS 可以远程访问吗？

可以远程，自带 FN Connect（类似于群晖 QC），操作简单，使用方便，对小白很友好。但官方的服务器资源也有限，会限制速度。推荐尝试使用公网 IPv4、IPv6，或者 zerotier、tailscale 等方案。

## fnOS 支持 Docker 和虚拟机吗？

目前公测版支持 Docker，暂不支持虚拟机功能，后续版本会支持。如果想使用虚拟机功能，推荐使用 PVE 来安装 fnOS。

## 如果从其他 NAS 系统切换到 fnOS，需要格式化硬盘吗？

需要格式化，请先备份好重要数据再切换。

## 如果想要同时使用 iStoreOS 和 fnOS 怎么办？

目前 fnOS 不支持虚拟机，推荐的方案是使用 PVE（iStoreOS + fnOS）。即底层使用 PVE 来作为虚拟化平台，虚拟 iStoreOS 和 fnOS 两个虚拟机。iStoreOS 负责网络，fnOS 负责 NAS 存储。

## fnOS 开关机很快吗？

快！非常快！实测系统装在 SSD 上，开机只需要不超过 20s，在不安装应用的情况下关机只需要大约 8s。

## fnOS 支持硬盘休眠吗？

支持。

![sipi22us.jph_7A6HOa](https://img.slarker.me/wiki/sipi22us.jph_7A6HOa.png)

## fnOS 的兼容性怎么样？

fnOS 基于 Debian 开发，兼容性很好。实测在华擎 N3150 这种较老主板，以及倍控 N100 这种比较新的主板都可以正常安装运行，而且非常流畅，多个网口也可以正常识别。

![9WrxAt_C7CzDr](https://img.slarker.me/wiki/9WrxAt_C7CzDr.png)

## fnOS 是否支持无线网卡？

目前支持部分无线网卡，但没有一个详细的支持列表，可以看官方 [说明](https://help.fnnas.com/articles/fnosV1/settings/wifi.md)。

## fnOS 多网口设备可以作为交换机使用吗？

fnOS 兼容性很好，像是 N100 这种多网口的设备可以正常识别到多网口，但目前不支持作为交换机使用。

## fnOS 支持外接 USB 存储设备吗？

支持。

## fnOS 支持 UPS 吗？

目前官方不支持，后续肯定也会支持。如果你想用 UPS，可以通过这个教程来实现 [支持 UPS](/fnos/ups.md)。

