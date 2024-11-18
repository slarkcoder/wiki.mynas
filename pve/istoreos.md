# 虚拟 iStoreOS 旁路由

旁路由在逻辑上和你网络中的 PC，手机没有区别，都是网络中的一个普通设备，仅仅是多了一个流量转发的功能。网络中的其他设备如果需要使用，只需要将设备 IP 设置为静态，把 `网关` 和 `DNS` 指向旁路由的 IP 即可。

旁路由对网口数量没有要求，只需要设备有一个网口就可以。下面就介绍如何在 PVE 中虚拟 iStoreOS 作为旁路由。

## iStoreOS 镜像

iStoreOS 镜像你可以在 [官网下载](https://fw.koolcenter.com/iStoreOS/x86_64/) 并解压得到 `img` 文件。为了减少出错，解压后可以重命名为 `istoreos.img`。

在 PVE 的 `ISO 镜像` 中上传 iStoreOS 的镜像 `istoreos.img`。

![](https://img.slarker.me/wiki/8cfae25a132a4fc5833f63cecd2fc08b.webp)

## 建立虚拟机

在 PVE 中创建虚拟机，名称自己填写，注意这里有个 `VM ID`，是该虚拟机的唯一 `ID` 标识（默认 PVE 会自动分配，不需要修改），后续在 PVE 的 `shell` 终端中可以使用命令通过该 `ID` 操作虚拟机。

![](https://img.slarker.me/wiki/61df2727689e4b97827cf2c0704e78d5.webp)

选择 `不使用任何介质`。

![](https://img.slarker.me/wiki/8722403cbba247e594c78c7a8eed83ac.webp)

系统 BIOS 选择 `q35`。

![](https://img.slarker.me/wiki/2d3e73f99daf4a08b8b32d90e33cd45b.webp)

删除默认的磁盘。

![](https://img.slarker.me/wiki/fe7d94948c4548ea9c24addcadddde85.webp)

CPU 核心可以设置为 `2`，类别一般选择 `host`。

![](https://img.slarker.me/wiki/71cf2d75610245b5a1cb3f9ff07821c0.webp)

内存选择 `1024`，也就是 `1GB`。

![](https://img.slarker.me/wiki/4c022e741f3f49af8d30994fd8df51a8.webp)

网络保持默认。

![](https://img.slarker.me/wiki/a5d129dfad3a4140b028838c1d207478.webp)

确认没问题，点击完成。

![](https://img.slarker.me/wiki/573e913a30d0441ab91be4c96d003be0.webp)

在 PVE 的 `shell` 终端中使用命令导入 iStoreOS 镜像：

```sh
# 104 为 iStoreOSTest 虚拟机的 ID。
qm importdisk 104 /var/lib/vz/template/iso/istoreos.img local
```

![](https://img.slarker.me/wiki/f3da02dfcfc94b3daa853c29f623600d.webp)

在 iStoreOSTest 虚拟机的 `硬件` 中双击 `未使用的磁盘 0`，将总线设备修改为 `SATA`，点击 `添加`。

![](https://img.slarker.me/wiki/1c9dadf2d8d44008af3b74ce64edeb5e.webp)

在 iStoreOSTest 虚拟机的 `选项` 中双击 `引导顺序`，仅将 `sata0` 保持勾选，并移动到第一个引导顺序，点击 `OK`。

![](https://img.slarker.me/wiki/8571128ecf3e46ca8ed9252d424d1e2d.webp)

之后启动 iStoreOSTest 虚拟机，在你的主路由中查找名为 `iStoreOS` 的设备，使用浏览器打开该 IP。默认用户名/密码：root/password。

![](https://img.slarker.me/wiki/9290b8f0f115411b9ad3bc64d8547c4c.webp)

登录后点击首页的 `网络向导`，点击 `配置为旁路由`。

![](https://img.slarker.me/wiki/91eaaa3983d54718863a6b066bf2d5f0.webp)

点击 `自动配置`。

![](https://img.slarker.me/wiki/af0a4c21344249e1ba2b955feeea252b.webp)

点击灰色的 `当前 IPV4 上游信息（点此刷新）`，会自动从主路由获取相关信息，之后点击 `自动填写`。

![](https://img.slarker.me/wiki/64dc189c740643429d96f06cabbfa21f.webp)

确认 IP 地址，网关地址，DNS 服务器都正常，关闭 `提供 DHCPv4 服务`，打开 `开启 NAT`，点击 `保存配置`。

![](https://img.slarker.me/wiki/996fd5f265c14649bd4d9f61020236b1.webp)

到这里就配置成功了，点击 `进入控制台`。

![](https://img.slarker.me/wiki/0b9ea5d43fde42f4b2c05869f302d917.webp)

## 使用旁路由

上面创建的 iStoreOSTest 旁路由的 IP 为 `192.168.2.186`。以 fnOS 为例，设置 fnOS 通过旁路由上网。

在 fnOS 的 `网络设置` 中，手动设置 `IPv4` 为静态 IP，并将 `网关地址` 和 `DNS` 设置为 `旁路由的 IP`。

![](https://img.slarker.me/wiki/1536e93bc814445bb9fcc05719cb1ff6.webp)


