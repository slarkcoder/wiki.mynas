import {
  _ as a,
  c as e,
  o as t,
  a4 as r,
} from "./chunks/framework.BOW58p_D.js";
const m = JSON.parse(
    '{"title":"更新系统","description":"","frontmatter":{},"headers":[],"relativePath":"synology/upgrade.md","filePath":"synology/upgrade.md","lastUpdated":1714923441000}'
  ),
  o = { name: "synology/upgrade.md" },
  l = r(
    '<h1 id="更新系统" tabindex="-1">更新系统 <a class="header-anchor" href="#更新系统" aria-label="Permalink to &quot;更新系统&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">提示</p><ul><li>本教程适用于使用 arpl、rr 引导，CPU 为 Intel N5105/N6005/N100/以及 12~14 代的物理机器。</li><li>更换引导，重装系统不会影响现有数据。</li><li>如果系统版本差异过大，可能会有部分系统软件需要重新设置。</li></ul></div><p>有时候想更新群晖系统，或者群晖系统出问题无法解决，可以尝试更新引导，重新安装系统解决。</p><h2 id="下载引导" tabindex="-1">下载引导 <a class="header-anchor" href="#下载引导" aria-label="Permalink to &quot;下载引导&quot;">​</a></h2><p>目前最新的引导可以从这里下载：</p><p><a href="https://www.123pan.com/s/1JKMjv-jJxo.html" target="_blank" rel="noreferrer">123 云盘：群晖 SA6400 引导</a></p><p>下载后解压，使用 rufus 或者 etcher</p><p><img src="https://slark-blog.s3.bitiful.net/vdoeq5za.ogt_O91rPX.png" alt="vdoeq5za.ogt_O91rPX"></p>',
    8
  ),
  s = [l];
function n(i, p, c, _, d, h) {
  return t(), e("div", null, s);
}
const g = a(o, [["render", n]]);
export { m as __pageData, g as default };
