# 存储池

## 常见 Raid 类型

| RAID 类型 | 硬盘数量 | 冗余硬盘数量      | 特点         |
|---------|------|-------------|------------|
| RAID 0  | 至少2个 | 无           | 提高性能，无冗余   |
| RAID 1  | 至少2个 | N-1 个（ N 为硬盘总数）          | 高数据冗余      |
| RAID 5  | 至少3个 | 1 个          | 提供数据冗余和性能  |
| RAID 6  | 至少4个 | 2 个          | 更高的数据冗余    |
| RAID 10 | 至少4个 | 每个镜像集 1 个     | 结合 RAID 1 和 0 |
| JBOD    | 至少1个 | 无           | 无数据冗余      |

## 建立存储池

在 `存储管理器` 中，可以按需创建存储池。可以根据硬盘数量，选择不同的 `Raid` 类型。如果你不了解各种 `Raid` 类型有什么区别，可以到群晖的 [容量计算器](https://www.synology.cn/zh-cn/support/RAID_calculator) 中查看。

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