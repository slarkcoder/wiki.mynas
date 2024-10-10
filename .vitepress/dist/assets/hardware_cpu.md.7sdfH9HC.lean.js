import {
  _ as e,
  c as t,
  a2 as p,
  o as r,
} from "./chunks/framework.eme8ZeBJ.js";
const u = JSON.parse(
    '{"title":"如何选择 CPU","description":"","frontmatter":{},"headers":[],"relativePath":"hardware/cpu.md","filePath":"hardware/cpu.md","lastUpdated":1725293933000}'
  ),
  i = { name: "hardware/cpu.md" };
function o(c, a, l, n, s, h) {
  return (
    r(),
    t(
      "div",
      null,
      a[0] ||
        (a[0] = [
          p(
            '<h1 id="如何选择-cpu" tabindex="-1">如何选择 CPU <a class="header-anchor" href="#如何选择-cpu" aria-label="Permalink to &quot;如何选择 CPU&quot;">​</a></h1><p><img src="https://img.slarker.me/wiki/pexels-tookapic-8943_8vwBPb.jpg" alt="pexels-tookapic-8943_8vwBPb"></p><h2 id="常见的-cpu-性能对比" tabindex="-1">常见的 CPU 性能对比 <a class="header-anchor" href="#常见的-cpu-性能对比" aria-label="Permalink to &quot;常见的 CPU 性能对比&quot;">​</a></h2><p>和日常使用电脑的场景不同，NAS 对 CPU 的性能要求不高，Intel 12 代的 i3-12100 在 NAS 里已经算是很高的配置了，市面上主流的 NAS 使用的 CPU 也还是 N5105，N100 这种，这些 CPU 的性能对比如图。</p><p>下面的截图来自于 <a href="https://www.cpubenchmark.net/singleCompare.php" target="_blank" rel="noreferrer">PassMark</a> 这个网站，如果你想自己对比 CPU 性能，也可以到 <a href="https://www.cpubenchmark.net/singleCompare.php" target="_blank" rel="noreferrer">PassMark</a> 查询。</p><p><img src="https://img.slarker.me/wiki/NLtHoL_DjLsC3.png" alt=""></p><p><img src="https://img.slarker.me/wiki/PruQsN_Uvggpe.png" alt="PruQsN_Uvggpe"></p><ul><li>First Seen on Chart：首次有测试数据的时间，也可以看成 CPU 发布时间</li><li>Single Thread Rating：单线程跑分</li><li>Other：这里一般写的都是核显信息，如果没显示，那就是无核显</li><li>CPU Mark：CPU 总体性能分数</li></ul><h2 id="根据需求选择-cpu" tabindex="-1">根据需求选择 CPU <a class="header-anchor" href="#根据需求选择-cpu" aria-label="Permalink to &quot;根据需求选择 CPU&quot;">​</a></h2><p>如果你没有虚拟 Windows 的需求，那 N5105，N100 是完全够用的。以我用的 N5105 为例（使用 Unraid 系统），开了 30 多个 Docker 和虚拟了一个 iStoreOS 作为主路由，CPU 负载也并不高。</p><p><img src="https://img.slarker.me/wiki/WechatIMG133_LdIf8V.jpg" alt="WechatIMG133_LdIf8V"></p><p>如果你需要使用 Windows 虚拟机，那可以用个 G7400 或者 i3-12100 就足够用。</p><p>NAS CPU 在性能够用的前提下，最需要注意的是功耗，因为 NAS 长期 24 小时开机，按照全年 365 天开机计算，功耗每增加 1w，每年就多耗电 8.7 度，功耗增加 10w，每年就多耗电 87 度。</p><h2 id="可以选-i3-8100-t-来组-nas-吗" tabindex="-1">可以选 i3-8100(T) 来组 NAS 吗？ <a class="header-anchor" href="#可以选-i3-8100-t-来组-nas-吗" aria-label="Permalink to &quot;可以选 i3-8100(T) 来组 NAS 吗？&quot;">​</a></h2><p>如果你有现成的配件，比如闲置的 i3-8100(T)，或者 6~9 代的主板，那组一套 NAS 当然没问题，但是如果你是照搬别人的配置，我觉得实在没必要。</p><p>目前群晖已经支持 12 代 N100，11 代 N5105 CPU 硬解。不管是从功耗，从性价比上来说，都没必要再去选 6~10 代平台（比如各种论坛，贴吧无脑推的 i3-8100(T)）。</p><p>如果你是小白，之前没有用过 NAS，听到别人推荐 8100 这种配置，不妨去了解下，为什么要用这种配置？</p><h3 id="i3-8100-性能、功耗对比" tabindex="-1">i3-8100 性能、功耗对比 <a class="header-anchor" href="#i3-8100-性能、功耗对比" aria-label="Permalink to &quot;i3-8100 性能、功耗对比&quot;">​</a></h3><p>下面是 8100T，8100，N5105，N100 的性能、功耗对比。</p><p><img src="https://img.slarker.me/wiki/ci3ouzzw.xb3_toxL2u.png" alt="ci3ouzzw.xb3_toxL2u"></p><p>可以很明显的看出，8100 相比 N100 性能并没有多大优势，而且功耗高不少，也不支持 12 代 CPU 新增的 AV1 编解码。</p><p>从价格上看，8100 板（搭配 B250-ITX） U、散热器加起来也得 ￥800+，相比 N100 仍然没有优势。</p><h3 id="为什么各大论坛仍然是无脑推-8100" tabindex="-1">为什么各大论坛仍然是无脑推 8100？ <a class="header-anchor" href="#为什么各大论坛仍然是无脑推-8100" aria-label="Permalink to &quot;为什么各大论坛仍然是无脑推 8100？&quot;">​</a></h3><p>因为群晖支持 11 代，12 代也是近一年的事情，相当庞大的用户群体还是基于过去折腾黑裙经验。而且群晖本身对硬件支持的进展也非常缓慢，导致折腾基于 6~10 代 Intel 平台群晖的用户非常多，大量的分享文章也都是基于 6~10 代 Intel 平台。其中 8100 出镜的频率比较高，很多初次接触自组 NAS 的用户也是受此误导，觉得要自己组 NAS 只能用 8100 这种配置。</p><h2 id="n305-值得推荐吗" tabindex="-1">N305 值得推荐吗？ <a class="header-anchor" href="#n305-值得推荐吗" aria-label="Permalink to &quot;N305 值得推荐吗？&quot;">​</a></h2><p>N305 和 12300T 都是 12 代 CPU，性能对比如下：</p><p><img src="https://img.slarker.me/wiki/UJZ4ZV_31gdRt.png" alt="UJZ4ZV_31gdRt"></p><p>目前市面上的 N305 都是集成在主板上的，板 U 价格大概在 1400 左右，相比 12300T 板 U 只要 1000 出头，性能不如 12300T，价格还比 12300T 贵很多，N305 的性价比显的实在很低，个人非常不推荐 N305。</p><p>而且 N305 只支持单通道内存，市面上的主板支持的也都是 DDR5 内存，考虑到内存的使用成本，目前还是使用 DDR4 较为划算。而使用 12300T 可以选择支持 DDR4 的主板，会进一步凸显性价比。</p><p>如果需要性能以及性价比，目前建议选择 12300T、12400 等 12 代 CPU。</p>',
            30
          ),
        ])
    )
  );
}
const m = e(i, [["render", o]]);
export { u as __pageData, m as default };
