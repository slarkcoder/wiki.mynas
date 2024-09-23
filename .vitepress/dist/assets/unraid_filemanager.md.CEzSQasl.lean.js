import{_ as e,c as n,a2 as s,o as p}from"./chunks/framework.eme8ZeBJ.js";const h=JSON.parse('{"title":"文件管理","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/filemanager.md","filePath":"unraid/filemanager.md","lastUpdated":1725293933000}'),i={name:"unraid/filemanager.md"};function r(t,a,l,o,c,d){return p(),n("div",null,a[0]||(a[0]=[s(`<h1 id="文件管理" tabindex="-1">文件管理 <a class="header-anchor" href="#文件管理" aria-label="Permalink to &quot;文件管理&quot;">​</a></h1><h2 id="unraid-官方插件-dynamix-file-manager" tabindex="-1">Unraid 官方插件 - Dynamix File Manager <a class="header-anchor" href="#unraid-官方插件-dynamix-file-manager" aria-label="Permalink to &quot;Unraid 官方插件 - Dynamix File Manager&quot;">​</a></h2><p>Unraid 默认并没有带文件管理器，而是以插件的形式提供给用户来安装，可以在 Unraid 的应用中心搜索 <code>Dynamix File Manager</code> 进行安装。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/PppxR9_0K2igH.png" alt="PppxR9_0K2igH"></p><p>安装之后，会在 Unraid 的右上角多出一个图标。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/yeq5LT_hGHzst.png" alt="yeq5LT_hGHzst"></p><p>点击之后，就可以进入文件管理器了。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/47Cx5x_sMxcyD.png" alt="47Cx5x_sMxcyD"></p><p>基本的文件管理功能都有，可以满足绝大部分需求。</p><h2 id="简洁轻量易用的-filebrowser" tabindex="-1">简洁轻量易用的 FileBrowser <a class="header-anchor" href="#简洁轻量易用的-filebrowser" aria-label="Permalink to &quot;简洁轻量易用的 FileBrowser&quot;">​</a></h2><p>如果你觉得 Unraid 自带的 File Manager 插件不够好用，或者不够好看。那么可以试试这款简洁轻量易用的第三方管理器 - FileBrowser。</p><h3 id="应用中心安装" tabindex="-1">应用中心安装 <a class="header-anchor" href="#应用中心安装" aria-label="Permalink to &quot;应用中心安装&quot;">​</a></h3><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/GtAnCj_0QFMpd.png" alt="GtAnCj_0QFMpd"></p><p>Unraid 应用中心就有这款文件管理器的镜像，选择 unraides 这款点击安装。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/ql7gNG_QePfEv.png" alt="ql7gNG_QePfEv"></p><p>将特权开关打开，给予文件管理器更高的权限等级。将 <code>Data Path</code> 更改为 <code>/mnt/user/</code>，如果不作修改，默认的文件管理器访问端口是 <code>30000</code>。其它配置保持默认不变，之后点击应用。</p><p>默认的用户名和密码均为 admin。</p><h3 id="部署命令" tabindex="-1">部署命令 <a class="header-anchor" href="#部署命令" aria-label="Permalink to &quot;部署命令&quot;">​</a></h3><p>你也可以通过命令来部署 FileBrowser，部署命令可以直接在 Unraid 右上角的终端中粘贴使用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -d \\</span></span>
<span class="line"><span>--name filebrowser \\</span></span>
<span class="line"><span>-v /mnt/user:/srv \\</span></span>
<span class="line"><span>-v /mnt/user/appdata/filebrowser:/database \\</span></span>
<span class="line"><span>-v /mnt/user/appdata/filebrowser:/config \\</span></span>
<span class="line"><span>-e PUID=$(id -u) \\</span></span>
<span class="line"><span>-e PGID=$(id -g) \\</span></span>
<span class="line"><span>-p 8000:80 \\</span></span>
<span class="line"><span>filebrowser/filebrowser:s6</span></span></code></pre></div><p>默认的用户名和密码均为 admin。</p><p>在 FileBrowser 文件管理器的设置中，可以将语言切换为中文。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/jsck66_OSWX7w.png" alt="jsck66_OSWX7w"></p>`,23)]))}const g=e(i,[["render",r]]);export{h as __pageData,g as default};