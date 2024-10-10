import {
  _ as a,
  c as t,
  a2 as p,
  o as s,
} from "./chunks/framework.eme8ZeBJ.js";
const l = JSON.parse(
    '{"title":"硬件测试","description":"","frontmatter":{},"headers":[],"relativePath":"hardware/test.md","filePath":"hardware/test.md","lastUpdated":1725293933000}'
  ),
  c = { name: "hardware/test.md" };
function o(i, e, r, n, d, m) {
  return (
    s(),
    t(
      "div",
      null,
      e[0] ||
        (e[0] = [
          p(
            '<h1 id="硬件测试" tabindex="-1">硬件测试 <a class="header-anchor" href="#硬件测试" aria-label="Permalink to &quot;硬件测试&quot;">​</a></h1><p><img src="https://img.slarker.me/wiki/pexels-thisisengineering-386213_h4Lnzz.jpg" alt="pexels-thisisengineering-386213_h4Lnzz"></p><p>硬件问题一般比较难排查，装好 NAS 之后建议做一些常规的测试，有助于找到可能存在的问题。下面就介绍一些常用的测试办法。</p><h2 id="内存测试" tabindex="-1">内存测试 <a class="header-anchor" href="#内存测试" aria-label="Permalink to &quot;内存测试&quot;">​</a></h2><p>内存测试可以使用 <a href="https://www.memtest86.com/" target="_blank" rel="noreferrer">MemTest86</a> 这个工具来测试，免费版的就够用。</p><h3 id="制作内存测试启动-u-盘" tabindex="-1">制作内存测试启动 U 盘 <a class="header-anchor" href="#制作内存测试启动-u-盘" aria-label="Permalink to &quot;制作内存测试启动 U 盘&quot;">​</a></h3><p>在 Windows 中下载安装包后解压，插入 U 盘，打开 <code>imageUSB.exe</code>。</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-06-13_16-20-52_8QTVJY.png" alt="Snipaste_2024-06-13_16-20-52_8QTVJY"></p><p>在弹出的对话框中勾选你的 U 盘，并点击 <code>Write</code>。</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-06-13_16-22-02_BxiIa1.png" alt="Snipaste_2024-06-13_16-22-02_BxiIa1"></p><p>提示两次确认，都选择 <code>Yes</code>。</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-06-13_16-22-36_maS4cQ.png" alt="Snipaste_2024-06-13_16-22-36_maS4cQ"></p><p>写入成功后，点击 OK，就可以拔出 U 盘了。</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-06-13_16-25-54_MuNRGw.png" alt="Snipaste_2024-06-13_16-25-54_MuNRGw"></p><h3 id="开始测试" tabindex="-1">开始测试 <a class="header-anchor" href="#开始测试" aria-label="Permalink to &quot;开始测试&quot;">​</a></h3><p>将 NAS 关机，拔掉 NAS 系统的引导（系统） U 盘或者系统盘 SSD。插入制作好的启动 U 盘，接上显示器，一般都可以直接从内存测试 U 盘启动。</p><p>默认的语言为英文，下面的截图里已经切换为中文，不想切换也可以用，参考下面的截图就知道什么意思。如果键盘没有其它操作，启动后会自动开始内存测试：</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-06-13_16-37-07_Tcz7Vl.jpg" alt="Snipaste_2024-06-13_16-37-07_Tcz7Vl"></p><p>默认测试一共会跑 4 轮，测试没问题会提示绿色的 <code>Pass</code>，表示通过。如果出现错误，也可以看到出错数量以及对应的错误位置。</p><p>整个测试时间会比较长，请耐心等待。以 16GB 的内存为例，跑完 4 轮需要 3 个小时左右。</p><p><img src="https://img.slarker.me/wiki/IMG_20240613_184333_Zao23S.jpg" alt="IMG_20240613_184333_Zao23S"></p>',
            21
          ),
        ])
    )
  );
}
const h = a(c, [["render", o]]);
export { l as __pageData, h as default };
