# 存储池

![d8fee6d8da2a4b79750c8a46aa42906b_Sp4NzU](https://img-1255332810.cos.ap-chengdu.myqcloud.com/d8fee6d8da2a4b79750c8a46aa42906b_Sp4NzU.jpeg)

:::warning 要点
- 没有冗余，代表任意一块硬盘损坏，整个阵列的数据将会全部丢失。
- 带有冗余的 Raid，本质上是通过牺牲硬盘空间来换取安全性，你可以根据自己的情况选择合适的 Raid 类型。
- 更换 Raid 类型需要重新格式化硬盘。
- 如果需要组 Raid，尽量选择容量一致的硬盘，否则有一部分空间会被浪费。
- 如果你看不懂这些 Raid 类型的区别，那么建议直接选择适合新手的 `SHR` 类型。
- 存储池是将物理硬盘聚合在一起，通过 Raid 来实现冗余、提高读写性能，存储空间的作用是对这些聚合起来的硬盘资源进行再分配。一般情况下，建议每个存储池只建一个存储空间。
- 绝大多数情况下，不建议使用 Raid0 和 JBOD。
- SHR，Raid 5 都支持扩容。
:::

## 常见 Raid 类型

| **RAID 类型** | **硬盘数量** | **冗余硬盘数量**      | **特点**     |
|:-----------:|:--------:|:---------------:|:----------:|
| **RAID 0**  | 至少 2 个     | 无               | 提高性能，无冗余   |
| **RAID 1**  | 至少 2 个     | N-1 个（ N 为硬盘总数） | 高数据冗余      |
| **RAID 5**  | 至少 3 个     | 1 个              | 提供数据冗余和性能  |
| **RAID 6**  | 至少 4 个     | 2 个              | 更高的数据冗余    |
| **RAID 10** | 至少 4 个     | 每个镜像集 1 个         | 结合 RAID 1 和 0 |
| **JBOD**    | 至少 1 个     | 无               | 无数据冗余      |

## 建立存储池

在 `存储管理器` 中，可以按需创建存储池。可以根据硬盘数量，选择不同的 `Raid` 类型。如果你不了解各种 `Raid` 类型有什么区别，也可以到群晖的 [容量计算器](https://www.synology.cn/zh-cn/support/RAID_calculator) 中对比。

![F9Gg3W_pMMh3c](https://img-1255332810.cos.ap-chengdu.myqcloud.com/F9Gg3W_pMMh3c.png)

选择存储池类型之后可以看到详细的介绍：

![Snipaste_2024-08-14_13-58-39_cXVsGb](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-14_13-58-39_cXVsGb.png)

## 正常状态的存储池

如下图所示，我使用 4 块 50G 的磁盘建立了 `Raid 6` 类型的存储池，`Raid 6` 有两块硬盘作为冗余，因此可以用的容量为 50G*2=100G，实际可用容量为 79.5G，大约有 20G 的空间为系统预留空间。

正常状态的存储池会显示 `良好`。

![Snipaste_2024-08-14_14-40-02_d7dRWZ](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-14_14-40-02_d7dRWZ.png)

## 存储池降级

当上面建立的 `Raid 6` 存储池中有任意 1块 / 2块 硬盘发生故障，此时存储池依然可以正常使用，数据都可以正常读写，但冗余能力会下降，也就是存储池出现了降级。

存储池会显示 `堪用`，意思就是可以继续用，数据没有丢失，需要通过更换硬盘让存储池恢复正常状态。

![Snipaste_2024-08-14_14-45-45_0Ikoxf](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-14_14-45-45_0Ikoxf.png)

![Snipaste_2024-08-14_15-51-05_dkOqAl](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-14_15-51-05_dkOqAl.png)

## 修复存储池

出现存储池降级，需要更换掉故障的硬盘，然后按提示修复（存储池中有 `立即修复` 的按钮）。

:::info 提示
更换故障硬盘时，如果你没有办法根据盘位编号来判断故障硬盘是哪一个，可以比对 `HDD/SSD` 中显示的硬盘序列号和硬盘标签上的 `SN` 序列号来判断。
:::

![Snipaste_2024-08-14_14-53-07_MAfGTB](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-14_14-53-07_MAfGTB.png)

![Snipaste_2024-08-14_14-53-44_kbqBfD](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-14_14-53-44_kbqBfD.png)

修复完成，存储池恢复正常（显示 `良好`）。

![Snipaste_2024-08-14_15-14-03_Ra0hUe](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-14_15-14-03_Ra0hUe.png)

## 存储池丢失

当存储池中发生故障的硬盘数量超过存储池的最大冗余能力，会导致整个存储池 `丢失`，该存储池中的数据都会丢失，无法恢复。

![ayrxvupf.dpy_eans52](https://img-1255332810.cos.ap-chengdu.myqcloud.com/ayrxvupf.dpy_eans52.png)