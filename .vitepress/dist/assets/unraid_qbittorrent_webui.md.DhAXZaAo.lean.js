import{_ as t,c as r,a2 as a,o as i}from"./chunks/framework.eme8ZeBJ.js";const b=JSON.parse('{"title":"为 qBittorrent 更换好看且易用的 WebUI","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/qbittorrent_webui.md","filePath":"unraid/qbittorrent_webui.md","lastUpdated":1726913419000}'),o={name:"unraid/qbittorrent_webui.md"};function n(s,e,p,l,c,d){return i(),r("div",null,e[0]||(e[0]=[a('<h1 id="为-qbittorrent-更换好看且易用的-webui" tabindex="-1">为 qBittorrent 更换好看且易用的 WebUI <a class="header-anchor" href="#为-qbittorrent-更换好看且易用的-webui" aria-label="Permalink to &quot;为 qBittorrent 更换好看且易用的 WebUI&quot;">​</a></h1><p>qBittorrent 是非常流行的 BT/PT 下载工具，但是其自带的 WebUI 比较丑，在手机端也不是很好用。本篇教程就教你如何给 qBittorrent 更换 WebUI。</p><h2 id="webui-效果" tabindex="-1">WebUI 效果 <a class="header-anchor" href="#webui-效果" aria-label="Permalink to &quot;WebUI 效果&quot;">​</a></h2><p>除了 <code>VueTorrent</code> 之外，也可以试试 <code>qb-web</code>。先来看看更换后的效果：</p><ul><li><a href="https://github.com/WDaan/VueTorrent" target="_blank" rel="noreferrer">VueTorrent</a></li></ul><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/jusDSs_75WMPV.png" alt="jusDSs_75WMPV"></p><ul><li><a href="https://github.com/CzBiX/qb-web" target="_blank" rel="noreferrer">qb-web</a></li></ul><p><img src="https://img.slarker.me/wiki/202409211638731.webp" alt=""></p><h2 id="如何更换" tabindex="-1">如何更换？ <a class="header-anchor" href="#如何更换" aria-label="Permalink to &quot;如何更换？&quot;">​</a></h2><p>以 <a href="https://github.com/WDaan/VueTorrent/releases" target="_blank" rel="noreferrer">VueTorrent</a> 为例，更换之前先将 vuetorrent.zip 下载到本地并解压。</p><p>下载地址：<a href="https://github.com/WDaan/VueTorrent/releases" target="_blank" rel="noreferrer">https://github.com/WDaan/VueTorrent/releases</a></p><h3 id="unraid" tabindex="-1">Unraid <a class="header-anchor" href="#unraid" aria-label="Permalink to &quot;Unraid&quot;">​</a></h3><p>以 Unraid 系统为例，使用 FileBrowser 或者自带的文件管理器，将上面解压得到的 vuetorrent 文件夹上传到 <code>/appdata/qbittorrent</code> 下面，如图所示：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/rhIsj1_ZBg09i.png" alt="rhIsj1_ZBg09i"></p><p>然后在 qBittorrent 的 <code>设置 -&gt; WebUI</code> 里，勾选使用自定义 WEBUI 并填写文件路径：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/config/vuetorrent</span></span></code></pre></div><p>最后点击保存即可生效。</p><h3 id="群晖" tabindex="-1">群晖 <a class="header-anchor" href="#群晖" aria-label="Permalink to &quot;群晖&quot;">​</a></h3><p>如果是通过套件安装的 <code>qBittorrent</code>，可以把 <code>vuetorrent</code> 解压上传到自己的 <code>home</code> 目录下面，目录结构如下图，并为 <code>qBittorrent</code> 套件添加 <code>完全控制</code> 权限。</p><p><img src="https://img.slarker.me/wiki/vhxd03v2.qdx.webp" alt=""></p><p>在 vuetorrent 文件夹上右击选择属性：</p><p><img src="https://img.slarker.me/wiki/202409211756289.webp" alt=""></p><p>复制文件夹位置：</p><p><img src="https://img.slarker.me/wiki/pegeonxo.stl.webp" alt=""></p><p>在 qBittorrent 的 <code>设置 -&gt; WebUI</code> 里，勾选 <code>使用备用 Web UI</code> 并粘贴文件夹位置：</p><p><img src="https://img.slarker.me/wiki/jqvywe1s.nyf.webp" alt=""></p><p>最后点击保存即可生效。</p>',27)]))}const u=t(o,[["render",n]]);export{b as __pageData,u as default};