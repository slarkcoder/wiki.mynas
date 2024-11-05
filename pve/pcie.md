# PVE 如何添加 PCIe 设备？

> PCIe（Peripheral Component Interconnect Express）是一种 **高速** 串行计算机扩展总线标准，主要用于扩充计算机系统总线数据吞吐量以及提高设备通信速度。像是显卡，SSD，各种扩展卡，网卡，声卡等等需要数据高速传输的场景使用的都是 PCIe 标准和 CPU 进行通信。

在 PVE 装好之后，如果后期 PCIe 设备有变化，有可能会导致系统失联，这里举个典型的例子：比如我这里有个 N100 双网口的主板，在刚装好系统之后，查看 PVE 的 `pci` 设备列表：

```sh
lspci
```

![](https://img.slarker.me/wiki/cb1a137ae7f7408e8c9aaa4ec0188f68.webp)

可以看到两个 `2.5G` 网卡的设备为：

```sh
02:00.0 Ethernet controller: Intel Corporation Ethernet Controller I226-V (rev 04)
03:00.0 Ethernet controller: Intel Corporation Ethernet Controller I226-V (rev 04)
```

对应的网络接口的配置文件如下：

```sh
cat /etc/network/interfaces
```

![](https://img.slarker.me/wiki/eb52e43b2fc647d49f643742cb2d9731.webp)

能看出来 `vmbr0` 这个虚拟的桥接网卡实际桥接的是 `enp2s0` 这个物理网卡，也就是我们安装 PVE 的时候，绑定的 `管理网口` 就是 `enp2s0` 这个网口。

接下来我们在主板上增加一块 M.2 Nvme 协议的 SSD，启动后如果发现 `enp2s0` 这个网口连不上 PVE 了，那就可以说明，由于 PCIe 设备的变化，导致网卡的 PCIe ID 顺序发生了改变。

别慌，解决这个问题并不难，如果出现了这种情况，我们需要在添加 PCIe 设备之前，先关掉所有虚拟机的开机自启选项，然后接上显示器和键盘，重启 PVE，对比添加 PCIe 设备前后 `lspci` 命令的结果，关于网卡的部分发生了哪些变化。这里给大家看看我添加了 M.2 SSD 之后的 `lspci` 结果：

![](https://img.slarker.me/wiki/e8b6a6f2cfe3412f9981c418078a77e6.webp)

可以看到 `01:00.0` 这个位置多了一个 M.2 SSD，也就把其它 PCIe 设备向后挤了一个位置。两个 `2.5G` 网卡的设备就变成了：

```sh
03:00.0 Ethernet controller: Intel Corporation Ethernet Controller I226-V (rev 04)
04:00.0 Ethernet controller: Intel Corporation Ethernet Controller I226-V (rev 04)
```

但是网络的配置（`/etc/network/interfaces`）文件没有更新，如果按照网络配置文件，那此时 `vmbr0` 桥接的设备依然是 `02:00.0`，而这个 PCIe ID 对应的设备变成了一个 `M.2 SSD`，显然就无法上网，所以我们要手动更新网络配置文件。

```sh
nano /etc/network/interfaces
```

![](https://img.slarker.me/wiki/87da14d0d5ca4666b749414e40692834.webp)

更新完成之后，把各个虚拟机中涉及到的有 PCIe 位置变化的设备重新调整一遍，测试没问题之后，最后把虚拟机的开机自启打开。