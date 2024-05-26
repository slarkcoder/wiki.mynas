# UPS - NAS 的好搭档

机械硬盘成本在 NAS 里肯定算是大头，同时机械硬盘在 NAS 的所有部件里也是最脆弱的，异常断电对机械硬盘造成的危害不小，我见过不少因为异常断电导致硬盘损坏丢数据的用户。基于这些惨痛的教训，有必要为 NAS 配一个不间断电源，也就是 UPS。一个 UPS 也就几百块，对于 NAS 整机成本来说影响很小，却可以很大程度保障你的 NAS 安全，因此非常推荐购买。

首先需要说明一点，UPS 的存在并不是为了让你的设备能够一直持续在开机状态工作，而是为了让你的设备在市电中断后，能够有足够的时间来完成关机动作，避免意外断电对你的设备造成损坏。家用 UPS 基本上都配备了一根 USB 信号线，以便在市电中断时通知需要关机的设备。

## NAS 都支持 UPS 吗？

群晖，Unraid 或者是使用 PVE 安装的 All in one 都支持 UPS，只要购买带有 USB 接口的 UPS 就可以。

## 买多大电池容量的 UPS 合适？

你可以根据自己的 NAS 的实际功耗来选择 UPS，像是山特 TG-Box 600 已经够绝大多数 NAS 设备使用了。以山特 TG-Box 600 为例，如果你的 NAS 功耗是 100W，那么 UPS 可以坚持 10 分钟，这足够你的 NAS 完成关机动作了。

![ipDxB9_BifmXo](https://img-1255332810.cos.ap-chengdu.myqcloud.com/ipDxB9_BifmXo.png)

## Unraid 配置 UPS

Unraid 的 UPS 设置非常简单，把 UPS 的 USB 线接入 Unraid，就可以在 `设置 -> UPS 设置` 中配置：

![2GGO8X_XyxJWn](https://img-1255332810.cos.ap-chengdu.myqcloud.com/2GGO8X_XyxJWn.png)

## 群晖配置 UPS

群晖 的 UPS 设置也很简单，把 UPS 的 USB 线接入群晖，到 `控制面板` -> `硬件和电源` -> `不断电系统` 中勾选 `启用 UPS 支持`，在 UPS 类型中选择 `USB UPS` 点击应用即可。

点击 `设备信息` 就能看到 UPS 信息。

![hJMYNo_5gx0MR](https://img-1255332810.cos.ap-chengdu.myqcloud.com/hJMYNo_5gx0MR.png)

## 如何让一台 UPS 支持多台设备

目前市面上的 UPS 基本只带了一根 USB 信号线，那么如果有两台设备，能否同时使用 USB 来接到 UPS 呢？一个开脑洞的想法是买一根 1 分 2 的 USB 线，把两台设备都同时接到 UPS 上，不过经过搜索后发现，已经有网友试过了，这种办法并不可行。

另一种可行的办法是看这两个 UPS 是否都支持 nut，比如群晖，Unraid 都支持，像是极空间就不支持。如果都支持的话，那就可以把其中一台（A）接到 UPS 上，并设置为 nut 网络服务器，另一台（B）作为 nut 客户端，这样等市电中断时，A 可以从 UPS 获取到断电信号，并把这个消息发送给 B，这样 A 和 B 就都可以做到正常关机。

用上面这个办法也可以做到让使用 PVE 安装的群晖虚拟机也能够使用 UPS。在逻辑上，PVE 和群晖是两台设备，可以将 USB 接口的 UPS 通过虚拟机添加到群晖里，并将群晖设置为 nut 服务器，在 PVE 里设置 nut 作为客户端，这样群晖和 PVE 就都可以正常关机。

## PVE 配置 UPS

首先将 UPS 的 USB 添加到群晖里。

![1rkxupwb.hgn_SY701G](https://img-1255332810.cos.ap-chengdu.myqcloud.com/1rkxupwb.hgn_SY701G.png)

启动群晖，先按上面的 `群晖配置 UPS` 部分设置完成，再勾选 `启用网络 UPS 服务器`，并在允许的 Synology NAS 设备中，填入 PVE 的 IP 地址后点击 `应用`。

![3ycmlzty.2br_vMgfeA](https://img-1255332810.cos.ap-chengdu.myqcloud.com/3ycmlzty.2br_vMgfeA.png)

上面已经设置好了群晖作为 nut 服务器，接下来设置 PVE 作为 nut 客户端就可以了。

打开 PVE 的 shell，依次输入下面的命令：

```sh
# 安装 nut
apt install nut -y

# 编辑 nut
nano /etc/nut/nut.conf

# 光标移动到 MODE=none 处，将 none 修改为 netclient，之后按 Ctrl + X，输入 Y 保存退出
MODE=netclient

# 编辑 upsmon
nano /etc/nut/upsmon.conf

# 将下面的配置粘贴到单独的一行里，将 nas的ip 替换为你的 nas ip ，之后按 Ctrl + X，输入 Y 保存退出
MONITOR ups@nas的ip 1 upsmon pass slave

# 启动 nut-client 服务，并设置开机自启
systemctl start nut-client && systemctl enable nut-client

# 设置好之后，可以测试 ups 连接是否正常
upsc ups@nas的ip
```

![0uo1xqpa.uhx_v6pUS6](https://img-1255332810.cos.ap-chengdu.myqcloud.com/0uo1xqpa.uhx_v6pUS6.png)