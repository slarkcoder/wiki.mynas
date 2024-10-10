# 阵列读写性能测试

如果想测试是否是硬盘读写方面的瓶颈，在基于 Linux 的 NAS 系统中，可以通过下面的命令来测试读写性能，下面的方法同样适用于 `群晖`，`TrueNAS`，`OMV`，`fnOS` 等等基于 Linux 开发的系统。

以 `Unraid` 为例：

:::warning 警告
使用 `dd` 命令要注意，**不要在存储池根目录或者磁盘的根目录写入文件**，最好是新建一个测试文件夹再写入，测试完成之后删除。
:::

- time 用来统计程序的执行时间
- dd 是一个在 Unix 和类 Unix 操作系统中用于转换和复制文件的命令行工具。
- if=/dev/zero 指定输入文件（if 代表 input file），/dev/zero 是一个特殊的文件，它提供了无限的字节流，每个字节都是0。
- of=/mnt/disk1/test/test.dbf 指定输出文件（of 代表 output file），这里是要创建的文件路径和名称。
- bs=4k 表示块大小（bs 代表 block size），这里是4千字节。
- count=6000000 表示复制的块数量。

```sh
# 测试性能
time dd if=/dev/zero of=/mnt/disk1/test/test.dbf bs=4k count=6000000
# 测试完成，删除测试文件
rm -rf /mnt/disk1/test
```

测试结果如下：

![Snipaste_2024-08-28_02-00-54_wQcDn9](https://img.slarker.me/wiki/Snipaste_2024-08-28_02-00-54_wQcDn9.png)

可以将 count 参数改大一些，多试几次，这样得到的结果会更有参考性。

不管是有线网络还是 WiFi 速度，或者硬盘读写速度，各种测试工具、办法都非常多，此类问题都可以直接问 [Kimi AI](https://kimi.moonshot.cn/)，都会得到很好的回答。

![DNkvJF_xaFNec](https://img.slarker.me/wiki/DNkvJF_xaFNec.png)