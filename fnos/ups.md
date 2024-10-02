# fnOS 配置 UPS

![](https://img.slarker.me/wiki/power.webp)

尽管 fnOS 目前官方不支持 UPS，不过 fnOS 基于 `Debian` 开发，如果想使用 UPS，也非常简单，可以通过 `ssh` 命令行配置。

以我使用的山特 TG-Box 850 为例，将 UPS 的 USB 信号线插到 NAS 的 USB 接口。[使用 SSH 登录](/fnos/ssh.md) fnOS，并切换到 `root` 用户，依次执行下面的命令。

## 安装 apcupsd

:::info Tips
Apcupsd 是一款功能强大的软件，专门用于监控不间断电源（UPS）系统。
:::

```sh
# 更新 apt 源
apt update

# 安装 apcupsd，期间会提示操作会占用一定空间，输入 Y 确认
apt install apcupsd
```

## 编辑 UPS 配置

apcupsd 的配置文件在 `/etc/apcupsd/apcupsd.conf`，可以使用 `nano` 编辑器打开文件：

```sh
nano /etc/apcupsd/apcupsd.conf
```

具体要修改的配置如下：

:::info 提示
- Linux 的配置文件中，如果该行前面有 `#`，表示注释，可以忽略。如果需要让本行配置生效，需要删除 `#`。
- 由于配置项比较多，需要修改的配置仅有下面几项，找到需要修改的配置所在的行，修改即可。其它没有提到的配置，无须修改，保持默认。
:::

```sh
# 删除 UPSNAME 前面的 #，可以改成自己的 UPS 型号，比如 `tg-box850`。
UPSNAME tg-box850
# 如果 UPS 使用 USB 接口的信号线，请注释下面这行（在下面这行前面加 #）
DEVICE /dev/ttyS0
# 删除 POLLTIME 名称前面的 #，POLLTIME 表示检测 ups 状态的间隔时间，默认 60 秒
POLLTIME 60
```
:::warning 注意
以下三个设置中只要有一个满足，自动关机就会被触发
:::

```sh
# UPS 剩余电量低于 80%，开始自动关机，默认为 5，可以改成 80。
BATTERYLEVEL 80
# UPS 剩余电量不超过 3 分钟，开始自动关机
MINUTES 3
# 市电中断超过 60 秒后，开始自动关机，默认为 0，可以改成 60。
TIMEOUT 60
```

修改完成之后，`Ctrl+X`，输入 `Y`，回车确认退出。

## 配置服务

```sh
# 启动服务
systemctl start apcupsd
# 设置开机自启服务
systemctl enable apcupsd
# 重启服务
systemctl restart apcupsd
# 查看服务状态
systemctl status apcupsd
```

![](https://img.slarker.me/wiki/Snipaste_2024-09-14_21-53-30.webp)

```sh
# 查看 UPS 状态
apcaccess
```

配置成功如下所示：

```sh
APC      : 001,028,0667
DATE     : 2024-10-02 21:30:26 +0800  
HOSTNAME : pve
VERSION  : 3.14.14 (31 May 2016) debian
UPSNAME  : tg-box850
CABLE    : USB Cable
DRIVER   : USB UPS Driver
UPSMODE  : Stand Alone
STARTTIME: 2024-10-02 21:30:22 +0800  
MODEL    : SANTAK TG-BOX
STATUS   : ONLINE  # 状态为 ONLINE（在线）
LOADPCT  : 11.0 Percent
BCHARGE  : 100.0 Percent
TIMELEFT : 44.0 Minutes
MBATTCHG : 80 Percent
MINTIMEL : 3 Minutes
MAXTIME  : 60 Seconds
OUTPUTV  : 230.0 Volts
DWAKE    : -1 Seconds
LOTRANS  : 184.0 Volts
HITRANS  : 264.0 Volts
ALARMDEL : 30 Seconds
NUMXFERS : 0
TONBATT  : 0 Seconds
CUMONBATT: 0 Seconds
XOFFBATT : N/A
STATFLAG : 0x05000008
SERIALNO : Blank
END APC  : 2024-10-02 21:30:27 +0800
```

