import {
  _ as i,
  c as a,
  a2 as t,
  o as e,
} from "./chunks/framework.eme8ZeBJ.js";
const c = JSON.parse(
    '{"title":"阵列读写性能测试","description":"","frontmatter":{},"headers":[],"relativePath":"basic/raid_performance.md","filePath":"basic/raid_performance.md","lastUpdated":1725723216000}'
  ),
  n = { name: "basic/raid_performance.md" };
function p(l, s, d, h, r, o) {
  return (
    e(),
    a(
      "div",
      null,
      s[0] ||
        (s[0] = [
          t(
            `<h1 id="阵列读写性能测试" tabindex="-1">阵列读写性能测试 <a class="header-anchor" href="#阵列读写性能测试" aria-label="Permalink to &quot;阵列读写性能测试&quot;">​</a></h1><p>如果想测试是否是硬盘读写方面的瓶颈，在基于 Linux 的 NAS 系统中，可以通过下面的命令来测试读写性能，下面的方法同样适用于 <code>群晖</code>，<code>TrueNAS</code>，<code>OMV</code>，<code>fnOS</code> 等等基于 Linux 开发的系统。</p><p>以 <code>Unraid</code> 为例：</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>使用 <code>dd</code> 命令要注意，<strong>不要在存储池根目录或者磁盘的根目录写入文件</strong>，最好是新建一个测试文件夹再写入，测试完成之后删除。</p></div><ul><li>time 用来统计程序的执行时间</li><li>dd 是一个在 Unix 和类 Unix 操作系统中用于转换和复制文件的命令行工具。</li><li>if=/dev/zero 指定输入文件（if 代表 input file），/dev/zero 是一个特殊的文件，它提供了无限的字节流，每个字节都是0。</li><li>of=/mnt/disk1/test/test.dbf 指定输出文件（of 代表 output file），这里是要创建的文件路径和名称。</li><li>bs=4k 表示块大小（bs 代表 block size），这里是4千字节。</li><li>count=6000000 表示复制的块数量。</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 测试性能</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dd if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/dev/zero</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> of</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/mnt/disk1/test/test.dbf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">4k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">6000000</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 测试完成，删除测试文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /mnt/disk1/test</span></span></code></pre></div><p>测试结果如下：</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-28_02-00-54_wQcDn9.png" alt="Snipaste_2024-08-28_02-00-54_wQcDn9"></p><p>可以将 count 参数改大一些，多试几次，这样得到的结果会更有参考性。</p><p>不管是有线网络还是 WiFi 速度，或者硬盘读写速度，各种测试工具、办法都非常多，此类问题都可以直接问 <a href="https://kimi.moonshot.cn/" target="_blank" rel="noreferrer">Kimi AI</a>，都会得到很好的回答。</p><p><img src="https://img.slarker.me/wiki/DNkvJF_xaFNec.png" alt="DNkvJF_xaFNec"></p>`,
            11
          ),
        ])
    )
  );
}
const g = i(n, [["render", p]]);
export { c as __pageData, g as default };
