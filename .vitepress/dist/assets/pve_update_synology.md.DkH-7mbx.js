import{_ as e,c as a,o,a4 as t}from"./chunks/framework.BOW58p_D.js";const g=JSON.parse('{"title":"更新群晖引导","description":"","frontmatter":{},"headers":[],"relativePath":"pve/update_synology.md","filePath":"pve/update_synology.md","lastUpdated":1714882123000}'),c={name:"pve/update_synology.md"},s=t('<h1 id="更新群晖引导" tabindex="-1">更新群晖引导 <a class="header-anchor" href="#更新群晖引导" aria-label="Permalink to &quot;更新群晖引导&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">提示</p><ul><li>本教程适用于使用 PVE 安装的群晖系统，CPU 为 N5105/N6005/N100 的机器。</li><li>更换引导，重装系统不会影响现有数据。</li><li>如果系统版本差异过大，可能会有部分系统软件需要重新设置。</li></ul></div><p>有时候想更新群晖系统，或者群晖系统出问题无法解决，可以尝试更新引导，重新安装系统解决。</p><h2 id="下载引导" tabindex="-1">下载引导 <a class="header-anchor" href="#下载引导" aria-label="Permalink to &quot;下载引导&quot;">​</a></h2><p>目前最新的引导可以从这里下载：</p><p><a href="https://www.123pan.com/s/1JKMjv-jJxo.html" target="_blank" rel="noreferrer">123 云盘：群晖 SA6400 引导</a></p><p>下载后解压，为确保后面操作不出问题，可以将得到的 <code>*.img</code> 文件重命名为 <code>rr.img</code> 之后上传到 PVE 的 ISO 镜像。</p><p><img src="https://img.slarker.me/blog/vdoeq5za.ogt_O91rPX.png" alt="vdoeq5za.ogt_O91rPX"></p><h2 id="替换虚拟群晖引导" tabindex="-1">替换虚拟群晖引导 <a class="header-anchor" href="#替换虚拟群晖引导" aria-label="Permalink to &quot;替换虚拟群晖引导&quot;">​</a></h2><p>替换群晖引导，首先要删除现有群晖的引导。确保群晖虚拟机已经停止，然后在群晖虚拟机的 <code>硬件</code> 中选中虚拟的引导磁盘（通常应该为 sata0），点击 <code>分离</code>，确认选 <code>是</code>。</p><p><img src="https://img.slarker.me/blog/sd20yzcs.mhn_c25VYM.png" alt="sd20yzcs.mhn_c25VYM"></p><p>此时在 <code>硬件</code> 最下方，会多出来一个 <code>未使用的磁盘</code>，再选中点击 <code>移除</code>，确认选 <code>是</code>。</p><p><img src="https://img.slarker.me/blog/ojIxLn_ygJM7Q.png" alt="ojIxLn_ygJM7Q"></p><p>之后在 <code>PVE</code> 的 <code>Shell</code> 命令行粘贴下面的命令，导入新的引导：</p><blockquote><p>注意：命令中的 <code>100</code> 为群晖虚拟机的 ID（虚拟机名称前面括号中的数字就是 ID），根据自己的情况修改。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>qm importdisk 100 /var/lib/vz/template/iso/rr.img local</span></span></code></pre></div><p><img src="https://img.slarker.me/blog/tzn5nrvc.ec0_7Ex4Ox.png" alt="tzn5nrvc.ec0_7Ex4Ox"></p><p>没什么问题的话，很快就会导入完成。接下来回到虚拟群晖的 <code>硬件</code> 中，最下面会看到一个新的 <code>未使用的磁盘</code>，双击后点击 <code>添加</code>。</p><p>最后在群晖虚拟机的 <code>选项</code> 中，双击设置 <code>引导顺序</code>，勾选 <code>sata0</code> 并拖动到第一个位置。</p><p><img src="https://img.slarker.me/blog/kpJO8E_hjP8w4.png" alt="kpJO8E_hjP8w4"></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>修改完成之后，就可以启动群晖虚拟机了，具体安装过程可以参考 <a href="/synology/install_system.html">安装系统</a>。</p>',22),l=[s];function d(p,r,i,n,h,m){return o(),a("div",null,l)}const u=e(c,[["render",d]]);export{g as __pageData,u as default};
