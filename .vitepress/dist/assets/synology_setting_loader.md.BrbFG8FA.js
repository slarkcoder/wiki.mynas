import {
  _ as e,
  c as o,
  o as t,
  a4 as l,
} from "./chunks/framework.BOW58p_D.js";
const h = JSON.parse(
    '{"title":"设置引导","description":"","frontmatter":{},"headers":[],"relativePath":"synology/setting_loader.md","filePath":"synology/setting_loader.md","lastUpdated":1715094737000}'
  ),
  a = { name: "synology/setting_loader.md" },
  d = l(
    '<h1 id="设置引导" tabindex="-1">设置引导 <a class="header-anchor" href="#设置引导" aria-label="Permalink to &quot;设置引导&quot;">​</a></h1><p>群晖启动后，首先到路由器中查找 <code>新设备 IP</code>，访问该 IP:7681。</p><p><img src="https://slark-blog.s3.bitiful.net/3mmhfhca.knp_07gmfx.png" alt="3mmhfhca.knp_07gmfx"></p><ul><li>选择 <code>Choose a model</code>：选择 <code>SA6400</code>。</li><li>选择 <code>Choose a version</code>：选择 <code>7.2</code>。</li><li>选择 <code>Addons menu -&gt; Add an addon -&gt; cpuinfo</code>：选择 <code>OK</code> 之后返回主菜单。</li><li>选择 <code>Build the loader</code>，等待编译完成。</li></ul><p><img src="https://slark-blog.s3.bitiful.net/5mjefdjo.s5f_3HQvA8.png" alt="5mjefdjo.s5f_3HQvA8"></p><ul><li>选择 <code>Boot the loader</code>，等待启动。</li></ul><p><img src="https://slark-blog.s3.bitiful.net/grnocw2m.lo0_LtarFN.png" alt="grnocw2m.lo0_LtarFN"></p><p>后续具体安装过程可以参考：</p><ul><li><a href="/synology/find_synology.html">查找群晖设备</a></li><li><a href="/synology/install_system.html">安装系统</a></li></ul>',
    9
  ),
  s = [d];
function c(i, n, r, _, m, p) {
  return t(), o("div", null, s);
}
const f = e(a, [["render", c]]);
export { h as __pageData, f as default };
