# 如何确保数据安全？

![pexels-anthony-170290_HMSadH](https://img.slarker.me/wiki/pexels-anthony-170290_HMSadH.jpg)

当你有了 NAS，所有的数据也都由你自己掌握，但同时你也得为自己的数据多操点心，不至于在家里人把数据都存到你这台 NAS 之后，由于意外导致数据全丢，你又没法找回，那这损失可就大了。

我这里有几条经验分享给你：

- 区分清楚你的数据，哪些是重要的，哪些是不重要的，这些数据大致需要多少容量的存储空间，这个问题最好在你使用 NAS 之前就考虑清楚，方便后续建立具有相应容错等级的 raid 存储池来满足要求。
- 根据 3-2-1 原则，对重要的数据做备份，即便是已经将重要数据存到了具有容错功能的 raid 磁盘上面，这里有篇文章可以参考：[不想被勒索软件毁掉数据，就按照「3-2-1 原则」来备份文件](https://sspai.com/post/39591)。
- 设想几种可能发生的情况，比如某块磁盘坏掉，比如系统无法启动，又比如某些重要文件被误删，更极端一点，假设你的 NAS 被雷击了的时候，你能否顺利的从备份中恢复数据？

## 使用带有容错（冗余）功能的 Raid 磁盘阵列

这里推荐一个群晖的在线工具 [Raid 计算器](https://www.synology.cn/zh-cn/support/RAID_calculator)，可以直观的计算出各种 Raid 类型的冗余情况。

![ujgeyx12.1jz_iGlDXE](https://img.slarker.me/wiki/ujgeyx12.1jz_iGlDXE.png)

比如，这里使用了 4 块 16TB 硬盘，如果使用 Raid5 类型，可用空间就是 43.7TB，有 14.6TB 的空间用来保护数据，4 块盘里最多同时允许坏 1 块，你的数据不会丢失。如果使用 Raid1 类型，可用空间就是 14.6TB，有 43.7TB 的空间用来保护数据，4 块盘里最多同时允许坏 3 块，你的数据不会丢失。

![yhy4bout.1tn_tufIzv](https://img.slarker.me/wiki/yhy4bout.1tn_tufIzv.png)

![pv4tq3yo.njp_mzEFQ5](https://img.slarker.me/wiki/pv4tq3yo.njp_mzEFQ5.png)

在 Unraid 里，能实现同样功能的是 ZFS，原理大致都一样，叫法略有不同。

## 自动备份数据

在 Unraid 上面，推荐使用开源的 Duplicati 来定期自动备份数据。不仅可以把数据备份到 NAS 上的其他磁盘里，还可以同时备份到云服务或者挂载好的网盘里。具体可以看这篇教程：[开源免费的备份方案 - Duplicati](/unraid/duplicati.md)

## UPS（不间断电源）

UPS 可以有效的保护你的硬件设备，避免意外断电造成设备损坏，具体可以参考 [UPS - NAS 的好搭档](/basic/ups.md)。

