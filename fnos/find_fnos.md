# 查找 fnOS 设备

如果你正常使用的 fnOS 突然连不上了，那可能是由于 IP 地址变化导致的，你可以通过下面的办法来找到 fnOS 设备。

:::info 提示
- 请确保你的 fnOS 设备处于开机状态，并且连接网线的网卡灯表明工作正常（正常闪烁）
- 请确保你的 fnOS 和你用来查找 fnOS 的电脑/手机处于同一个网络里
:::

## 通过手机 App 查找

[fnOS App](https://www.fnnas.com/download) 支持查找局域网中的 fnOS 设备。打开 fnOS App 在登录页的最下方，就有 `发现局域网内设备` 的选项，只要你的 fnOS 正常，很快就能找到 fnOS 的 IP。

![](https://img.slarker.me/wiki/Screenshot_2025-02-04-18-02-51-562_com.trim.app-edit.webp)

## 登录路由器后台查找

如果你的 fnOS 使用 DHCP 从路由器获取 IP，你可以登录路由器的后台，在设备列表中按照 fnOS 的设备名称来查找相关 IP。

![](https://img.slarker.me/wiki/20240829004109.webp)

有部分路由器可能不会显示设备名称，这个时候就需要逐个尝试了，可以将你能看到的 IP 逐个复制到浏览器中，看哪个 IP 可以打开 fnOS。

如果你的 fnOS 设置过静态 IP，那么这个设备名称很有可能在路由器后台的设备列表中不会显示出来。

## 物理机 fnOS

如果你使用的物理机安装的 fnOS，那你也可以接上显示器查看 fnOS IP。正常情况下，fnOS 会在显示器上显示 IP。

![](https://img.slarker.me/wiki/20250204181312648.webp)

## 虚拟机 fnOS

如果你使用 PVE 之类的虚拟化的方式安装的 fnOS，那你也可以直接在对应的 VNC 控制台中查看 fnOS IP。

![](https://img.slarker.me/wiki/20250204181255017.webp)

## 通过 arp 命令 / 工具查找

:::info 提示
`arp -a` 是一个用于查看本地网络设备 ARP 缓存表 的命令。ARP（Address Resolution Protocol，地址解析协议）负责将网络层的 IP 地址 解析为数据链路层的 MAC 地址，以便设备在局域网中通信。
:::

如果你由于某些原因，无法登录路由器后台，你可以在电脑中执行 `arp -a` 命令来查看局域网中的设备列表。

Windows / macOS 可以在系统自带的 CMD / 终端 中执行：`arp -a`，根据显示的结果，经过逐个尝试，你应该可以找到 fnOS IP。

一些局域网的扫描工具也可以达到同样的效果，比如 Windows 中的 [Advanced IP Scanner](https://www.advanced-ip-scanner.com/cn/)。

## 如何避免 fnOS IP 变化？

找到 fnOS 后，请给你的 fnOS 设置一个静态 IP，这样就不会出现 IP 地址变化的问题了。在 `系统设置` -> `网络设置` 中 `编辑` 网络接口，设置静态 IP。

![](https://img.slarker.me/wiki/20250204201432219.webp)

## 设置了静态 IP 的 fnOS，如果换了个网络环境，该如何访问？

换了网络环境之后，网段可能会发生变化，所以会导致无法访问。解决办法很简单，就是把你新环境的路由器设置成和 fnOS 同样的网段就可以了。比如 fnOS 是 192.168.2.2，新的网络环境（路由器 IP）是 192.168.3.1，那你需要进入你的路由器后台，把路由器修改为 192.168.2.1。

:::warning 注意
设置静态 IP 的时候，请注意可能会产生的 IP 冲突问题。具体如何避免 IP 冲突，请参考：[家庭组网的几个建议](/basic/network.md)。
:::