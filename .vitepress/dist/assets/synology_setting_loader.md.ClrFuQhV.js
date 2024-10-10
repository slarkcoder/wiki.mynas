import {
  _ as o,
  c as a,
  a2 as t,
  o as l,
} from "./chunks/framework.eme8ZeBJ.js";
const h = JSON.parse(
    '{"title":"设置引导","description":"","frontmatter":{},"headers":[],"relativePath":"synology/setting_loader.md","filePath":"synology/setting_loader.md","lastUpdated":1725293933000}'
  ),
  c = { name: "synology/setting_loader.md" };
function d(p, e, s, r, i, n) {
  return (
    l(),
    a(
      "div",
      null,
      e[0] ||
        (e[0] = [
          t(
            '<h1 id="设置引导" tabindex="-1">设置引导 <a class="header-anchor" href="#设置引导" aria-label="Permalink to &quot;设置引导&quot;">​</a></h1><h2 id="下载-pat-文件" tabindex="-1">下载 pat 文件 <a class="header-anchor" href="#下载-pat-文件" aria-label="Permalink to &quot;下载 pat 文件&quot;">​</a></h2><p>下载 <a href="https://www.123pan.com/s/1JKMjv-o9fo.html" target="_blank" rel="noreferrer">DSM_SA6400_69057.pat</a> 备用。</p><h2 id="编译引导" tabindex="-1">编译引导 <a class="header-anchor" href="#编译引导" aria-label="Permalink to &quot;编译引导&quot;">​</a></h2><p>群晖启动后，首先到路由器中查找 <code>新设备 IP</code>，访问该 IP。</p><p><img src="https://img.slarker.me/wiki/QutP3e_P50O0X.png" alt="QutP3e_P50O0X"></p><div class="info custom-block"><p class="custom-block-title">提示</p><p>推荐使用 <code>Parse pat</code> 的方式安装，不需要在线下载，能降低因网络原因导致失败的可能性。</p></div><ul><li><p>选择 <code>Parse pat</code>，回车会提示在 <code>/tmp/pats/folder</code> 找不到 <code>pat</code> 文件，选择 <code>OK</code>。</p></li><li><p>在右侧的文件目录中进入 <code>/tmp/pats/</code> 文件夹，上传上面下载好的 <code>DSM_SA6400_69057.pat</code> 文件，重新选择 <code>Parse pat</code>，确认后返回。 <img src="https://img.slarker.me/wiki/fzowpsmh.ic2_jMTeRI.png" alt="fzowpsmh.ic2_jMTeRI"></p></li><li><p>在 <code>Addons menu</code> -&gt; <code>Add an addon</code> 中选择 <code>cpuinfo</code>，确认后返回。</p></li><li><p>选择 <code>Build the loader</code>，等待编译完成。</p></li></ul><p><img src="https://img.slarker.me/wiki/5mjefdjo.s5f_3HQvA8.png" alt="5mjefdjo.s5f_3HQvA8"></p><ul><li>选择 <code>Boot the loader</code>，等待启动。</li></ul><p><img src="https://img.slarker.me/wiki/grnocw2m.lo0_LtarFN.png" alt="grnocw2m.lo0_LtarFN"></p><p>后续具体安装过程可以参考：</p><ul><li><a href="/synology/find_synology.html">查找群晖设备</a></li><li><a href="/synology/install_system.html">安装系统</a></li></ul><h2 id="更新引导" tabindex="-1">更新引导 <a class="header-anchor" href="#更新引导" aria-label="Permalink to &quot;更新引导&quot;">​</a></h2><p>更新引导请参考 <a href="/pve/update_synology.html">更新引导</a> 中的 <code>在线更新引导</code> 部分。</p>',
            15
          ),
        ])
    )
  );
}
const u = o(c, [["render", d]]);
export { h as __pageData, u as default };
