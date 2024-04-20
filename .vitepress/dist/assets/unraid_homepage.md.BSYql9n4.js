import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.4aTu-Nia.js";const m=JSON.parse('{"title":"高颜值的 NAS 应用导航 - Homepage","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/homepage.md","filePath":"unraid/homepage.md","lastUpdated":1713618409000}'),p={name:"unraid/homepage.md"},t=e(`<h1 id="高颜值的-nas-应用导航-homepage" tabindex="-1">高颜值的 NAS 应用导航 - Homepage <a class="header-anchor" href="#高颜值的-nas-应用导航-homepage" aria-label="Permalink to &quot;高颜值的 NAS 应用导航 - Homepage&quot;">​</a></h1><p><img src="https://img.slarker.me/blog/3Ihvmm_vqfQe0.png" alt="3Ihvmm_vqfQe0"></p><p>NAS 上装的应用一旦多了，各种端口记起来很麻烦，虽然加个书签也能解决问题，但是如果要分享给家人或者朋友用，还是不太方便。之前也折腾过这个 <a href="https://github.com/gethomepage/homepage" target="_blank" rel="noreferrer">Homepage</a>，但是维护起来并不容易，每个应用都需要单独配置 icon，好处就是自定义程度高，配好了就非常好看。</p><p>为了能让大家更简单的使用 Homepage，降低上手成本，你可以根据我这个教程来配置，使用我提供的 <a href="https://files.mynas.chat/share/BXbuuhLC" target="_blank" rel="noreferrer">Docker 安装模板</a>（<a href="/unraid/unraid_docker_template.html">如何使用模板?</a>）和 <a href="https://files.mynas.chat/share/ww2kxrPm" target="_blank" rel="noreferrer">配置文件</a>，十几分钟就可以自定义出专属的 Homepage。</p><h2 id="安装应用" tabindex="-1">安装应用 <a class="header-anchor" href="#安装应用" aria-label="Permalink to &quot;安装应用&quot;">​</a></h2><p>将配置文件下载，然后解压，将整个 <code>homepage</code> 目录上传到 docker 的应用数据目录 <code>/mnt/user/appdata</code> 下面。</p><p><img src="https://img.slarker.me/blog/33tkv4ee.cjn_vNrnD5.png" alt="33tkv4ee.cjn_vNrnD5"></p><p>通过模板安装 <code>Homepage</code>，所有的设置都不需要修改，直接点应用安装。</p><p><img src="https://img.slarker.me/blog/vl5rlwbq.kkx_5MXtes.png" alt="vl5rlwbq.kkx_5MXtes"></p><h2 id="自定义配置" tabindex="-1">自定义配置 <a class="header-anchor" href="#自定义配置" aria-label="Permalink to &quot;自定义配置&quot;">​</a></h2><p>装好之后，就可以根据下面的说明来配置。</p><p>推荐使用 <code>FileBrowser</code> 在浏览器里直接打开编辑 <code>/mnt/user/appdata/homepage/config</code> 里的配置文件，需要改的配置基本都在 <code>services.yaml</code> 和 <code>settings.yaml</code> 里面。</p><h3 id="设置-service" tabindex="-1">设置 Service <a class="header-anchor" href="#设置-service" aria-label="Permalink to &quot;设置 Service&quot;">​</a></h3><p>打开 <code>services.yaml</code> 文件。</p><p><img src="https://img.slarker.me/blog/rt0vw24f.xuc_xBvN4E.png" alt="rt0vw24f.xuc_xBvN4E"></p><p>Homepage 页面上每个链接都是一个 Service，每个 Service 既可以是一个 Docker 应用，也可以是一个链接。多个 Service 可以组合成为一个 Group，比如 <code>下载工具</code>、<code>文件服务</code> 等等。</p><p>可以先把所有的 IP 地址替换为自己的 NAS IP，再来修改 Service。</p><p>以 iStoreOS 这个链接为例：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">iStoreOS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/images/dashboard_icons/openwrt.png</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://192.168.2.1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">路由器</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        siteMonitor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://192.168.2.1</span></span></code></pre></div><p>icon 代表图标，href 是链接地址，description 是描述，siteMonitor 是监控信息，会在右上角显示 ping 延迟。</p><p><img src="https://img.slarker.me/blog/5XYAcD_1OvRQ8.png" alt="5XYAcD_1OvRQ8"></p><p>以 SpeedTest 这个 Docker 应用为例：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">SpeedTest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/images/HD-Icons-main/svg/Librespeed_A.svg</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://192.168.2.2:9000</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">内网测速工具</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">SpeedTest</span></span></code></pre></div><p>和上面的 iStoreOS 有区别的只有 siteMonitor 变成了 container，因为这是个 Docker 应用，可以把 SpeedTest 这个应用的 Docker 应用名字填到 container 后面，就能在 Service 的右上角显示这个应用的状态。</p><p><img src="https://img.slarker.me/blog/VKWyJd_xbsIhr.png" alt="VKWyJd_xbsIhr"></p><p>如果有不需要的应用，可以使用 <code>#</code> 将整个 Service 都注释掉。</p><p><img src="https://img.slarker.me/blog/nt5dfbi0.hx2_ytBb00.png" alt="nt5dfbi0.hx2_ytBb00"></p><p>建议修改的时候，再开一个浏览器窗口并排显示，这样修改并保存后，刷新就可以看到修改的效果，如果有出错的地方，也可以及时修改。</p><p><img src="https://img.slarker.me/blog/mx1y2gl3.a5f_5KnqLs.png" alt="mx1y2gl3.a5f_5KnqLs"></p><h3 id="widgets" tabindex="-1">Widgets <a class="header-anchor" href="#widgets" aria-label="Permalink to &quot;Widgets&quot;">​</a></h3><p>有些 Docker 应用，<code>homepage</code> 单独为其定义了 Widgets，可以用来多展示一部分信息。比如：</p><p><img src="https://img.slarker.me/blog/hgf32azo.4bt_pqyZqT.png" alt="hgf32azo.4bt_pqyZqT"></p><p>所需的配置信息可以到 <a href="https://gethomepage.dev/latest/widgets/" target="_blank" rel="noreferrer">官方文档</a> 查找。</p><p>以 <code>immich</code> 为例，相关的配置信息如下：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">widget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">immich</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://immich.host.or.ip</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">adminapikeyadminapikeyadminapikey</span></span></code></pre></div><p>需要到 immich 后台创建一个 key，把 url 和 key 填到对应的位置，并把整个 widget 填到 Service 下面：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Immich</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/images/HD-Icons-main/border-radius/Immich_D.png</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://192.168.2.2:2283</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">照片管理</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">immich_server</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        widget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">immich</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://192.168.2.2:2283</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">rUMzIjDYbPRJYvxc4LLyNgWP2kqNJnkVYLO6ndXvww</span></span></code></pre></div><h3 id="替换背景图" tabindex="-1">替换背景图 <a class="header-anchor" href="#替换背景图" aria-label="Permalink to &quot;替换背景图&quot;">​</a></h3><p>背景图位于 <code>/homepage/public/images</code> 下面，我用的就是这里的 <code>background.jpg</code>，如果你想换成自己喜欢的，可以把图片上传到这个位置。并在 <code>/homepage/config/settings.yaml</code> 中把对应的 image 路径改为新的路径。</p><h3 id="布局" tabindex="-1">布局 <a class="header-anchor" href="#布局" aria-label="Permalink to &quot;布局&quot;">​</a></h3><p>默认的布局是 row，每行 5 列，相关的配置可以在 <code>/homepage/config/settings.yaml</code> 中修改。</p><h3 id="使用-icon" tabindex="-1">使用 icon <a class="header-anchor" href="#使用-icon" aria-label="Permalink to &quot;使用 icon&quot;">​</a></h3><p>我提前下载好了两套 icon，位于 <code>/homepage/public/images</code> 下面，涵盖了常用的网站 logo 和应用 icon。如果需要查找 icon，可以在 <code>FileBrowser</code> 里使用关键字搜索。</p><p><img src="https://img.slarker.me/blog/e1zt15ma.isu_qKKhCX.png" alt="e1zt15ma.isu_qKKhCX"></p><p>比如搜索 <code>alist</code>，就出现了好几个 icon。</p><p><img src="https://img.slarker.me/blog/rw3jsmu4.ajw_hAb5d1.png" alt="rw3jsmu4.ajw_hAb5d1"></p><p>可以点某个 icon 具体看下，有哪个是自己想要的，鼠标右键对应的路径复制下来，比如：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://192.168.2.2:8000/files/appdata/homepage/public/images/HD-Icons-main/border-radius/Alist_B.png</span></span></code></pre></div><p>在路径中把 public 后面的都复制一下，这就是 icon 的路径。</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/images/HD-Icons-main/border-radius/Alist_B.png</span></span></code></pre></div><p>粘贴到 Service 的 icon 后面，刷新 <code>homepage</code> 就可以看到效果。</p>`,51),n=[t];function h(l,r,k,o,d,c){return a(),i("div",null,n)}const E=s(p,[["render",h]]);export{m as __pageData,E as default};
