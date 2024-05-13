import {
  _ as a,
  c as e,
  o as r,
  a4 as t,
} from "./chunks/framework.BOW58p_D.js";
const D = JSON.parse(
    '{"title":"如何选择内存","description":"","frontmatter":{},"headers":[],"relativePath":"hardware/memory.md","filePath":"hardware/memory.md","lastUpdated":1714007434000}'
  ),
  o = { name: "hardware/memory.md" },
  d = t(
    '<h1 id="如何选择内存" tabindex="-1">如何选择内存 <a class="header-anchor" href="#如何选择内存" aria-label="Permalink to &quot;如何选择内存&quot;">​</a></h1><p><img src="https://slark-blog.s3.bitiful.net/ram_LbDnqp.jpg" alt="ram_LbDnqp"></p><h2 id="nas-需要考虑内存频率吗" tabindex="-1">NAS 需要考虑内存频率吗？ <a class="header-anchor" href="#nas-需要考虑内存频率吗" aria-label="Permalink to &quot;NAS 需要考虑内存频率吗？&quot;">​</a></h2><p>不需要，使用 NAS 又不是打游戏，内存容量的优先级远大于频率。</p><h2 id="使用多大的内存合适" tabindex="-1">使用多大的内存合适？ <a class="header-anchor" href="#使用多大的内存合适" aria-label="Permalink to &quot;使用多大的内存合适？&quot;">​</a></h2><p>如果不玩虚拟机，8GB 的内存对大多数人都够用，如果你要使用 PVE 玩虚拟机 All in one，那最好直接上到 16GB。还有一点要注意，如果用的是 Unraid 或者 TrueNAS，想用 ZFS 这个文件系统来组 raid，由于 ZFS 本身会使用内存来作为缓存，比较吃内存，最好配的内存容量越大越好。</p><h2 id="该使用-ddr4-还是-ddr5-内存" tabindex="-1">该使用 DDR4 还是 DDR5 内存？ <a class="header-anchor" href="#该使用-ddr4-还是-ddr5-内存" aria-label="Permalink to &quot;该使用 DDR4 还是 DDR5 内存？&quot;">​</a></h2><p>该使用 DDR4 还是 DDR5 内存，要看你的主板支持哪种内存。目前 DDR4 的性价比要高不少，如果你要用 DDR4 内存，可以优先选择支持 DDR4 的主板。</p><h2 id="如何测试内存是否有故障" tabindex="-1">如何测试内存是否有故障？ <a class="header-anchor" href="#如何测试内存是否有故障" aria-label="Permalink to &quot;如何测试内存是否有故障？&quot;">​</a></h2><p>Windows 可以安装 <a href="https://www.tbtool.cn/" target="_blank" rel="noreferrer">图吧工具箱</a>，自带 <code>MemTest64</code> 这个小工具，可以用来测试内存是否有问题。</p><p><img src="https://slark-blog.s3.bitiful.net/Snipaste_2024-03-31_01-28-17_lKE4dK.png" alt="Snipaste_2024-03-31_01-28-17_lKE4dK"></p><p>上图中我选了测试 1 小时后停止，测试完成后，结果显示 <code>没有检测到错误</code>。</p><h2 id="内存稳定性对-nas-的影响" tabindex="-1">内存稳定性对 NAS 的影响 <a class="header-anchor" href="#内存稳定性对-nas-的影响" aria-label="Permalink to &quot;内存稳定性对 NAS 的影响&quot;">​</a></h2><p>如果内存稳定性有问题，可能造成 NAS 频繁死机，重启等现象，发生这种现象，建议优先排查内存。</p><p>由我组装的 NAS 整机，都会对内存进行单独测试。</p><div class="tip custom-block"><p class="custom-block-title">内存测试通过标准</p><p>使用 <code>MemTest64</code> 持续测试 1 小时无错误。</p></div>',
    16
  ),
  s = [d];
function l(n, i, c, p, h, _) {
  return r(), e("div", null, s);
}
const b = a(o, [["render", l]]);
export { D as __pageData, b as default };
