import { _ as e, c as r, a2 as t, o } from "./chunks/framework.eme8ZeBJ.js";
const m = JSON.parse(
    '{"title":"如何选择内存","description":"","frontmatter":{},"headers":[],"relativePath":"hardware/memory.md","filePath":"hardware/memory.md","lastUpdated":1725293933000}'
  ),
  d = { name: "hardware/memory.md" };
function s(i, a, l, n, h, c) {
  return (
    o(),
    r(
      "div",
      null,
      a[0] ||
        (a[0] = [
          t(
            '<h1 id="如何选择内存" tabindex="-1">如何选择内存 <a class="header-anchor" href="#如何选择内存" aria-label="Permalink to &quot;如何选择内存&quot;">​</a></h1><p><img src="https://img.slarker.me/wiki/ram_LbDnqp.jpg" alt="ram_LbDnqp"></p><h2 id="nas-需要考虑内存频率吗" tabindex="-1">NAS 需要考虑内存频率吗？ <a class="header-anchor" href="#nas-需要考虑内存频率吗" aria-label="Permalink to &quot;NAS 需要考虑内存频率吗？&quot;">​</a></h2><p>不需要，使用 NAS 又不是打游戏，内存容量的优先级远大于频率。</p><h2 id="使用多大的内存合适" tabindex="-1">使用多大的内存合适？ <a class="header-anchor" href="#使用多大的内存合适" aria-label="Permalink to &quot;使用多大的内存合适？&quot;">​</a></h2><p>如果不玩虚拟机，8GB 的内存对大多数人都够用，如果你要使用 PVE 玩虚拟机 All in one，那最好直接上到 16GB。如果用的是 Unraid 或者 TrueNAS，想用 ZFS 这个文件系统来组 raid，由于 ZFS 本身会使用内存来作为缓存，比较吃内存，最好配的内存容量越大越好。</p><h2 id="该使用-ddr4-还是-ddr5-内存" tabindex="-1">该使用 DDR4 还是 DDR5 内存？ <a class="header-anchor" href="#该使用-ddr4-还是-ddr5-内存" aria-label="Permalink to &quot;该使用 DDR4 还是 DDR5 内存？&quot;">​</a></h2><p>该使用 DDR4 还是 DDR5 内存，要看你的主板支持哪种内存。目前 DDR4 的性价比要高不少，如果你要用 DDR4 内存，可以优先选择支持 DDR4 的主板。</p><h2 id="如何测试内存是否有故障" tabindex="-1">如何测试内存是否有故障？ <a class="header-anchor" href="#如何测试内存是否有故障" aria-label="Permalink to &quot;如何测试内存是否有故障？&quot;">​</a></h2><p>可以看这篇教程：<a href="/hardware/test.html">硬件测试</a>。</p><h2 id="内存稳定性对-nas-的影响" tabindex="-1">内存稳定性对 NAS 的影响 <a class="header-anchor" href="#内存稳定性对-nas-的影响" aria-label="Permalink to &quot;内存稳定性对 NAS 的影响&quot;">​</a></h2><p>如果内存稳定性有问题，可能造成 NAS 频繁死机，重启等现象，发生这种现象，建议优先排查内存。</p><p>由我组装的 NAS 整机，都会对内存进行单独测试。</p><div class="tip custom-block"><p class="custom-block-title">内存测试通过标准</p><p>使用 <code>MemTest86 V11.0</code> 测试 4 轮无错误。</p></div>',
            14
          ),
        ])
    )
  );
}
const u = e(d, [["render", s]]);
export { m as __pageData, u as default };
