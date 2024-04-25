# 如何选择 CPU

![pexels-tookapic-8943_8vwBPb](https://img.slarker.me/blog/pexels-tookapic-8943_8vwBPb.jpg)

## 常见的 CPU 性能对比

和日常使用电脑的场景不同，NAS 对 CPU 的性能要求不高，Intel 12 代的 i3-12100 在 NAS 里已经算是很高的配置了，市面上主流的 NAS 使用的 CPU 也还是 N5105，N100 这种，这些 CPU 的性能对比如图。

下面的截图来自于 [PassMark](https://www.cpubenchmark.net/singleCompare.php) 这个网站，如果你想自己对比 CPU 性能，也可以到 [PassMark](https://www.cpubenchmark.net/singleCompare.php) 查询。

![](https://img.slarker.me/blog/NLtHoL_DjLsC3.png)

- First Seen on Chart：首次有测试数据的时间，也可以看成 CPU 发布时间
- Single Thread Rating：单线程跑分
- Other：这里一般写的都是核显信息，如果没显示，那就是无核显
- CPU Mark：CPU 总体性能分数

## 根据需求选择 CPU

如果你没有虚拟 Windows 的需求，那 N5105，N100 是完全够用的。以我用的 N5105 为例（使用 Unraid 系统），开了 30 多个 Docker 和虚拟了一个 iStoreOS 作为主路由，CPU 负载也并不高。

![WechatIMG133_LdIf8V](https://img.slarker.me/blog/WechatIMG133_LdIf8V.jpg)

如果你需要使用 Windows 虚拟机，那可以用个 G7400 或者 i3-12100 就足够用。

NAS CPU 在性能够用的前提下，最需要注意的是功耗，因为 NAS 长期 24 小时开机，按照全年 365 天开机计算，功耗每增加 1w，每年就多耗电 8.7 度，功耗增加 10w，每年就多耗电 87 度。

## 可以选 i3-8100(T) 来组 NAS 吗？

如果你有现成的配件，比如闲置的 i3-8100(T)，或者 6~9 代的主板，那组一套 NAS 当然没问题，但是如果你是照搬别人的配置，我觉得实在没必要。

目前群晖已经支持 12 代 N100，11 代 N5105 CPU 硬解。不管是从功耗，从性价比上来说，都没必要再去选 6~10 代平台（比如各种论坛，贴吧无脑推的 i3-8100(T)）。

如果你是小白，之前没有用过 NAS，听到别人推荐 8100 这种配置，不妨去了解下，为什么要用这种配置？

### i3-8100 性能、功耗对比

下面是 8100T，8100，N5105，N100 的性能、功耗对比。

![ci3ouzzw.xb3_toxL2u](https://img.slarker.me/blog/ci3ouzzw.xb3_toxL2u.png)

可以很明显的看出，8100 相比 N100 性能并没有多大优势，而且功耗高不少，也不支持 12 代 CPU 新增的 AV1 编解码。

从价格上看，8100 板（搭配 B250-ITX） U、散热器加起来也得 ￥800+，相比 N100 仍然没有优势。

### 为什么各大论坛仍然是无脑推 8100？

因为群晖支持 11 代，12 代也是近一年的事情，相当庞大的用户群体还是基于过去折腾黑裙经验。而且群晖本身对硬件支持的进展也非常缓慢，导致折腾基于 6~10 代 Intel 平台群晖的用户非常多，大量的分享文章也都是基于 6~10 代 Intel 平台。其中 8100 出镜的频率比较高，很多初次接触自组 NAS 的用户也是受此误导，觉得要自己组 NAS 只能用 8100 这种配置。