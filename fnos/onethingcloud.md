# 用网心云把宽带钱赚回来！

:::warning 注意
- 如果你所在的地区，运营商对 PCDN 管控比较严格，那你最好不要尝试这类产品。
- PCDN 会占用一定的上传带宽，如果你对你的宽带要求比较高（比如打游戏等），那我也不建议你使用这类产品。
- 如果你经过尝试，发现每天的收益比较低，可能连电费也赚不回来，那最好趁早放弃。
:::

最近几年 PCDN 类的项目都比较火，像是网心云，京东无线宝等等都属于这类产品。本质上就是利用用户的闲置带宽和存储资源做边缘计算，然后把相关的资源打包卖给视频网站做视频 CDN 加速。但也因为这类项目动了运营商的奶酪，很多地方运营商也在封杀 PCDN，甚至连带着很多 PT 玩家都受到了影响。

本篇就教大家在 fnOS 上装一个 docker 版的网心云，如果收益还不错的话，应该能把宽带钱赚回来。

## 安装 docker 版网心云

建议使用一块 SSD 专门来建一个存储空间用来跑网心云，下面以 fnOS 的 `存储空间 1` 上面建的 `onething` 文件夹为例安装 docker 版网心云，你需要根据自己的实际情况把命令中的 `/vol1/1000/onething` 替换为自己的网心云文件夹路径：

```sh
# 拉取 Docker 镜像
docker pull  images-cluster.xycloud.com/wxedge/wxedge:latest

# 启动网心云容器
docker run -d --name=wxedge --restart=always --privileged --net=host --tmpfs /run --tmpfs /tmp -v /vol1/1000/onething:/storage:rw images-cluster.xycloud.com/wxedge/wxedge:latest
```

启动后使用浏览器打开 `fnOS IP:18888` 访问 WebUI，使用 [手机 App](https://www.onethingcloud.com/download-center/) 扫码绑定网心云 Docker 应用，页面右侧有高收益的攻略，建议仔细看看。

## 实测效果

先来看看我的网络拓扑：

![](https://img.slarker.me/wiki/8bcfa61117c548e086d04e17b0868a29.svg)

我是联通宽带（下行 500Mbps，上行 30Mbps），没有公网 IPv4，用光猫拨号，iStoreOS 作为主路由，网心云通过 docker 跑在 Unraid 上。这样内网就有了两层 NAT，为了达到 NAT 效果最优，我在光猫和 iStoreOS 上都开启了 UPnP，开启之后，网络类型由 `NAT3` 变成了 `全锥型`，这也是在没有公网 IP 的情况下，比较好的网络类型了。具体可以看看这里：[上网原理及NAT类型优化](https://help.onethingcloud.com/9dd6/7bab)。

![](https://img.slarker.me/wiki/825823f80c154f1da5b14e3c4d78c689.png)

我用了一块单独的 500G SSD 专门用来跑网心云，最近一段时间的收益如下：

![](https://img.slarker.me/wiki/4acddef929db4912baf83a0010c94bb7.jpg)

收益明显变多也正是因为开启了 UPnP，网络类型由 `NAT3` 变成了 `全锥型`。

我这里联通 500M 宽带费用是 49 元/月，平均每天收益是 2.2 元左右，照这么算的话，每个月可以把宽带费用和额外增加的电费都赚回来！
