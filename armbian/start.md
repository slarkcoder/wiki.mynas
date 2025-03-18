# Armbian 系统开荒

## 使用 SSH 登录 Armbian

你可以使用自己喜欢的 `terminal` 终端通过 SSH 登录 Armbian。使用方式和其它 Linux 没有区别，具体可以参考：[使用 SSH 登录](/fnos/ssh.md)。

## 设置静态 IP

> Armbian 自带有设置网络的工具，但是设置起来比较诡异，如果设置错误，可能会导致 Armbian 设备失联，而部分 Armbian 设备（网心云 OEC）也没有 HDMI 接口，也无法通过显示器去重新修改网络配置，只能通过重新刷机的方法解决，而刷机又比较麻烦，所以尽量不要用自带的网络配置工具。

Armbian 默认使用 DHCP 获取 IP，如果你要给 Armbian 设置一个静态 IP，请尽可能通过路由器上的静态 IP 地址绑定功能来给 Armbian 设备指定一个 IP。以 iStoreOS 为例，设置静态 IP 地址绑定：

![](https://img.slarker.me/wiki/20250318123310855.webp)

## 修改密码

直接输入 `passwd` 按提示修改当前用户的密码。

![](https://img.slarker.me/wiki/20250318131750802.webp)

## 设置时区

查看系统时间：

```sh
timedatectl status
```

如果默认时区不是中国时间，可以设置时区为 `上海`：

```sh
timedatectl set-timezone Asia/Shanghai
```

## 设置 NTP 时间服务器

安装 NTP 服务：

```sh
apt-get install ntp
```

启动并启用 NTP 服务：

```sh
systemctl start ntp
systemctl enable ntp
```

检查 NTP 服务状态：

```sh
systemctl status ntp
```

## 更换 Linux 源

不管是哪种 Linux，只要是在国内使用，第一步都推荐先换源。

执行换源脚本：

```sh
bash <(curl -sSL https://linuxmirrors.cn/main.sh)
```

遇到选项提示，推荐使用下面的设置：

- 软件源选择：`清华大学`
- 软件源是否使用 HTTP 协议：`否`
- 是否跳过更新软件包：`否`
- 是否自动清理下载缓存：`是`

:::info 提示
如果换源过程中提示出错，可以重新执行脚本换另一个源试试。
:::

## 安装 Docker

一键安装 docker 引擎：

```sh
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
```

遇到选项提示，推荐使用下面的设置：

- `Docker CE` 源选择：`清华大学`
- `Docker Registry` 源选择：`Docker Proxy（推荐）`
- 软件源是否使用 HTTP 协议：`否`
- 是否安装最新版本的 `Docker Engine`：`是`

## 安装 1Panel 面板

为了更方便的管理服务器，你可以安装 [1Panel](https://1panel.cn/)，这是一款开源的服务器管理面板，非常易用，可以通过网页操作管理服务器。

适用于 `Armbian` 系统的一键安装命令如下：

```sh
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sudo bash quick_start.sh
```

安装完成之后，你可以看到一个管理地址以及默认生成的用户名和密码。你可以通过 1Panel 来安装管理 docker 应用。

![](https://img.slarker.me/wiki/20250318164932148.webp)