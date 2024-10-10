import {
  _ as e,
  c as i,
  a2 as l,
  o as t,
} from "./chunks/framework.eme8ZeBJ.js";
const u = JSON.parse(
    '{"title":"科学解决问题的思路 - 木桶理论","description":"","frontmatter":{},"headers":[],"relativePath":"basic/barreltheory.md","filePath":"basic/barreltheory.md","lastUpdated":1725723216000}'
  ),
  r = { name: "basic/barreltheory.md" };
function o(c, a, p, s, d, n) {
  return (
    t(),
    i(
      "div",
      null,
      a[0] ||
        (a[0] = [
          l(
            '<h1 id="科学解决问题的思路-木桶理论" tabindex="-1">科学解决问题的思路 - 木桶理论 <a class="header-anchor" href="#科学解决问题的思路-木桶理论" aria-label="Permalink to &quot;科学解决问题的思路 - 木桶理论&quot;">​</a></h1><p><img src="https://img.slarker.me/wiki/Minimum-Tonne_TJiNGj.svg" alt="Minimum-Tonne_TJiNGj"></p><p>涉及到计算机的地方，经常会提到一个词 -- <code>木桶理论（效应）</code>，意思很简单，就是说一个木桶能装多少水，取决于组成这个木桶的最短的那块木板。</p><blockquote><p>想要让木桶装更多的水，最有效的办法就是找到最短的那块木板，然后加长它！</p></blockquote><p>在计算机里，木桶理论几乎无处不在。在一个复杂的系统中，最终的系统实现效果往往取决于系统中最薄弱的环节，也就是瓶颈所在。<strong>因此提升整个系统效果的关键，就是找到这个最薄弱的环节，然后改善它！而不是盲目的在其它不构成瓶颈的环节下功夫。</strong></p><p>举两个很常见的例子：</p><ul><li>很多人发现自己的宽带测速达不到套餐的标称值，测速的时候发现很慢。</li><li>电脑和 NAS 都用了万兆网卡，而且 NAS 也组了阵列，但是万兆 NAS 传输达不到预期速度</li></ul><p>那么该如何使用 <code>木桶理论</code> 来解决问题呢？</p><h2 id="理清环节" tabindex="-1">理清环节 <a class="header-anchor" href="#理清环节" aria-label="Permalink to &quot;理清环节&quot;">​</a></h2><p>想要科学的解决问题，最重要的是理清影响系统效果有哪些因素。</p><p>以上面提到的测速为例，影响最终测速结果可能有下面这些因素：</p><ul><li>运营商宽带虚标（当然如果是移动、电信、联通这些大的运营商，基本不会虚标）</li><li>光猫本身的性能不够（如果是比较新的光猫，应该不会有这个问题）</li><li>光猫网口是百兆（如果是千兆宽带，并且使用电脑有线直连光猫测试）</li><li>光猫 WiFi 性能不够（如果是千兆宽带，用无线终端直连光猫 WiFi 测试的话）</li><li>WiFi 信号较弱（可能有承重墙遮挡，或者受到干扰比较严重）</li><li>测试用的无线终端自带的 WiFi 芯片比较老，只能使用 2.4G 频段的 WiFi</li></ul><p>以上面提到的万兆 NAS 传输速度为例，影响传输速度可能有下面这些因素：</p><ul><li>硬盘读写速度不够</li><li>网口传输速度不够</li><li>网线速度不够</li><li>共享协议设置问题</li><li>软硬件兼容性问题</li></ul><h2 id="找出瓶颈" tabindex="-1">找出瓶颈 <a class="header-anchor" href="#找出瓶颈" aria-label="Permalink to &quot;找出瓶颈&quot;">​</a></h2><p>理清可能存在瓶颈的环节只是第一步，接下来就按照 <code>最容易排除问题</code> 或者 <code>最有可能发生问题</code> 为优先级顺序，针对每个环节来想办法单独测试，逐步确定瓶颈究竟在哪个环节。</p><h3 id="最容易排除问题" tabindex="-1">最容易排除问题 <a class="header-anchor" href="#最容易排除问题" aria-label="Permalink to &quot;最容易排除问题&quot;">​</a></h3><p>以上面提到的测速为例，因为无线连接受到的影响因素太多，所以尽量使用有线来测试网速，这样就可以直接排除掉很多环节。如果有线还是测速慢，那就检查电脑有线网卡的连接速度、光猫的网口是否是百兆、网线是否只能跑到百兆。</p><p>具体可以参考：<a href="/basic/speedtest.html">网络速度测试</a></p><h3 id="最有可能发生问题" tabindex="-1">最有可能发生问题 <a class="header-anchor" href="#最有可能发生问题" aria-label="Permalink to &quot;最有可能发生问题&quot;">​</a></h3><p>以上面提到的万兆 NAS 传输速度为例，瓶颈最有可能出在读写速度不够上面，比如从电脑的 SSD 上传输数据到 NAS 的阵列里。要达到万兆（换算成文件读写大概是 1.2GB/s），电脑如果是 SATA SSD 读取速度最快也就 500MB/s 左右，显然就会成为瓶颈。</p><p>具体可以参考：<a href="/basic/raid_performance.md.html">阵列读写性能测试</a></p>',
            22
          ),
        ])
    )
  );
}
const m = e(r, [["render", o]]);
export { u as __pageData, m as default };
