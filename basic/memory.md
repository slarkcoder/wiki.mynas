# 如何选择内存

![ram_LbDnqp](https://img.slarker.me/blog/ram_LbDnqp.jpg)

## NAS 需要考虑内存频率吗？

不需要，使用 NAS 又不是打游戏，内存容量的优先级远大于频率。

## 使用多大的内存合适？

如果不玩虚拟机，8GB 的内存对大多数人都够用，如果你要玩虚拟机 All in one，那最好 16GB 起步。还有一点要注意，如果用的是 Unraid 或者 TrueNAS，想用 ZFS 这个文件系统来组 raid，由于 ZFS 本身会使用内存来作为缓存，比较吃内存，最好配的内存容量越大越好。

## 该使用 DDR4 还是 DDR5 内存？

该使用 DDR4 还是 DDR5 内存，要看你的主板支持哪种内存。目前 DDR4 的性价比要高不少，如果你要用 DDR4 内存，可以优先选择支持 DDR4 的主板。

## 如何测试内存是否有故障？

Windows 可以安装 [图吧工具箱](https://www.tbtool.cn/)，自带 `MemTest64` 这个小工具，可以用来测试内存是否有问题。

![Snipaste_2024-03-30_22-59-30_RqUwgj](https://img.slarker.me/blog/Snipaste_2024-03-30_22-59-30_RqUwgj.png)

上图中我选了测试 2 轮后停止，测试完成后，结果显示 `没有检测到错误`。

