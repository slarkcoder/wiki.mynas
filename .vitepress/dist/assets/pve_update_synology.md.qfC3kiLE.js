import { _ as o, c, a2 as a, o as p } from "./chunks/framework.eme8ZeBJ.js";
const h = JSON.parse(
    '{"title":"更新群晖引导","description":"","frontmatter":{},"headers":[],"relativePath":"pve/update_synology.md","filePath":"pve/update_synology.md","lastUpdated":1725293933000}'
  ),
  d = { name: "pve/update_synology.md" };
function t(s, e, l, i, n, r) {
  return (
    p(),
    c(
      "div",
      null,
      e[0] ||
        (e[0] = [
          a(
            '<h1 id="更新群晖引导" tabindex="-1">更新群晖引导 <a class="header-anchor" href="#更新群晖引导" aria-label="Permalink to &quot;更新群晖引导&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">提示</p><ul><li>本教程适用于使用 PVE 安装的群晖系统，CPU 为 N5105/N6005/N100/12~14 代桌面级 CPU 的机器。</li><li>更换引导，重装系统不会影响现有数据。</li><li>如果系统版本差异过大，可能会有部分系统软件需要重新设置。</li></ul></div><p>有时候想更新群晖系统，或者群晖系统出问题无法解决，可以尝试更新引导，重新安装系统解决。</p><p>更新引导有两种方式，优先推荐使用 <code>在线更新</code>，如果在线更新异常，可以尝试手动更新引导。</p><h2 id="在线更新引导" tabindex="-1">在线更新引导 <a class="header-anchor" href="#在线更新引导" aria-label="Permalink to &quot;在线更新引导&quot;">​</a></h2><p><code>RR</code> 引导支持在线更新，你可以在群晖的 <code>控制面板</code> -&gt; <code>任务计划</code> 中手动运行名为 <code>RebootToLoader</code> 的任务，然后重启群晖就会自动进入引导菜单，在引导菜单中可以直接更新引导。</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-14_23-49-02_gWeY5Q.png" alt="Snipaste_2024-08-14_23-49-02_gWeY5Q"></p><p>重启后访问 <code>NAS IP:7681</code> 端口，就能进入引导菜单，选择 <code>Update menu</code> 菜单。</p><p><img src="https://img.slarker.me/wiki/lgigko4n.ppz_GlAKrm.png" alt="lgigko4n.ppz_GlAKrm"></p><p>按提示就可以在线更新，更新完成后重新 <code>Boot the loader</code>，就可以启动群晖。</p><p><img src="https://img.slarker.me/wiki/ejhzz3gh.feb_UVe7ZY.png" alt="ejhzz3gh.feb_UVe7ZY"></p><h2 id="手动更新引导" tabindex="-1">手动更新引导 <a class="header-anchor" href="#手动更新引导" aria-label="Permalink to &quot;手动更新引导&quot;">​</a></h2><p>如果无法在线更新引导，或者切换其它的引导，可以参考下面的教程操作。</p><h3 id="下载引导" tabindex="-1">下载引导 <a class="header-anchor" href="#下载引导" aria-label="Permalink to &quot;下载引导&quot;">​</a></h3><p>目前最新的引导可以从这里下载：</p><p><a href="https://www.123pan.com/s/1JKMjv-vlfo.html" target="_blank" rel="noreferrer">Synology RR 引导</a></p><p>其中的 <code>*.pat</code> 文件为离线安装包，如果后续在线安装失败，可以使用手动上传安装包的方式进行安装。</p><p>下载最新的 <code>img.zip</code> 后解压，为确保后面操作不出问题，可以将解压得到的 <code>*.img</code> 文件重命名为 <code>rr.img</code> 之后上传到 PVE 的 ISO 镜像。</p><p><img src="https://img.slarker.me/wiki/vdoeq5za.ogt_O91rPX.png" alt="vdoeq5za.ogt_O91rPX"></p><h3 id="替换虚拟群晖引导" tabindex="-1">替换虚拟群晖引导 <a class="header-anchor" href="#替换虚拟群晖引导" aria-label="Permalink to &quot;替换虚拟群晖引导&quot;">​</a></h3><p>替换群晖引导，首先要删除现有群晖的引导。确保群晖虚拟机已经停止，然后在群晖虚拟机的 <code>硬件</code> 中选中虚拟的引导磁盘（通常应该为 sata0），点击 <code>分离</code>，确认选 <code>是</code>。</p><p><img src="https://img.slarker.me/wiki/sd20yzcs.mhn_c25VYM.png" alt="sd20yzcs.mhn_c25VYM"></p><p>此时在 <code>硬件</code> 最下方，会多出来一个 <code>未使用的磁盘</code>，再选中点击 <code>移除</code>，确认选 <code>是</code>。</p><p><img src="https://img.slarker.me/wiki/ojIxLn_ygJM7Q.png" alt="ojIxLn_ygJM7Q"></p><p>之后在 <code>PVE</code> 的 <code>Shell</code> 命令行粘贴下面的命令，导入新的引导：</p><blockquote><p>注意：命令中的 <code>100</code> 为群晖虚拟机的 ID（虚拟机名称前面括号中的数字就是 ID），根据自己的情况修改。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>qm importdisk 100 /var/lib/vz/template/iso/rr.img local</span></span></code></pre></div><p><img src="https://img.slarker.me/wiki/tzn5nrvc.ec0_7Ex4Ox.png" alt="tzn5nrvc.ec0_7Ex4Ox"></p><p>没什么问题的话，很快就会导入完成。接下来回到虚拟群晖的 <code>硬件</code> 中，最下面会看到一个新的 <code>未使用的磁盘</code>，双击后点击 <code>添加</code>。</p><p>最后在群晖虚拟机的 <code>选项</code> 中，双击设置 <code>引导顺序</code>，勾选 <code>sata0</code> 并拖动到第一个位置。</p><p><img src="https://img.slarker.me/wiki/kpJO8E_hjP8w4.png" alt="kpJO8E_hjP8w4"></p><p>设置好之后就可以启动虚拟机了。</p><p>后续部分可以参考 <a href="/synology/setting_loader.html">设置引导</a>。</p>',
            33
          ),
        ])
    )
  );
}
const m = o(d, [["render", t]]);
export { h as __pageData, m as default };
