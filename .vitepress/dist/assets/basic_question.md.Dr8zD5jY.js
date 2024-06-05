import{_ as e,c as a,o,a4 as r}from"./chunks/framework.BOW58p_D.js";const k=JSON.parse('{"title":"常见问题解答","description":"","frontmatter":{},"headers":[],"relativePath":"basic/question.md","filePath":"basic/question.md","lastUpdated":1717596029000}'),t={name:"basic/question.md"},i=r('<h1 id="常见问题解答" tabindex="-1">常见问题解答 <a class="header-anchor" href="#常见问题解答" aria-label="Permalink to &quot;常见问题解答&quot;">​</a></h1><p>这里收集一些新手经常遇到的问题。</p><h2 id="群晖如何使用第三方套件" tabindex="-1">群晖如何使用第三方套件？ <a class="header-anchor" href="#群晖如何使用第三方套件" aria-label="Permalink to &quot;群晖如何使用第三方套件？&quot;">​</a></h2><p>可以在 <code>套件中心</code> 添加第三方套件源，使用人数比较多的是矿神这个：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://spk7.imnks.com/</span></span></code></pre></div><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/synology_photo_03_oD0zrU.png" alt=""></p><p>这里也有一些其它的 <a href="https://synopackage.com/sources" target="_blank" rel="noreferrer">第三方套件源</a>，需要的可以看看。</p><h2 id="群晖套件中心显示网络连接失败-网络错误-如何解决" tabindex="-1">群晖套件中心显示网络连接失败，网络错误，如何解决？ <a class="header-anchor" href="#群晖套件中心显示网络连接失败-网络错误-如何解决" aria-label="Permalink to &quot;群晖套件中心显示网络连接失败，网络错误，如何解决？&quot;">​</a></h2><p>可以尝试修改群晖的 <code>DNS</code>。到 <code>控制面板</code> -&gt; <code>网络</code> 中按下图手动设置 DNS，并点击 <code>应用</code>。</p><p>推荐修改为：<code>223.5.5.5</code>，<code>114.114.114.114</code>。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/ujwOIJ_41eBnO.png" alt="ujwOIJ_41eBnO"></p><h2 id="群晖的-docker-套件在哪里" tabindex="-1">群晖的 Docker 套件在哪里？ <a class="header-anchor" href="#群晖的-docker-套件在哪里" aria-label="Permalink to &quot;群晖的 Docker 套件在哪里？&quot;">​</a></h2><p>新版的群晖 Docker 已改名为 <code>Container Manager</code>。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/hhRI1G_H2X3T1.png" alt="hhRI1G_H2X3T1"></p><h2 id="istoreos-魔法插件到哪里下载" tabindex="-1">iStoreOS 魔法插件到哪里下载？ <a class="header-anchor" href="#istoreos-魔法插件到哪里下载" aria-label="Permalink to &quot;iStoreOS 魔法插件到哪里下载？&quot;">​</a></h2><p>iStoreOS 本身并不自带魔法插件，可以使用这里的包一键自动安装。</p><p><a href="https://github.com/AUK9527/Are-u-ok/tree/main/x86" target="_blank" rel="noreferrer">iStoreOS 软件包</a></p><h2 id="qbittorrent-默认密码是多少" tabindex="-1">qBittorrent 默认密码是多少？ <a class="header-anchor" href="#qbittorrent-默认密码是多少" aria-label="Permalink to &quot;qBittorrent 默认密码是多少？&quot;">​</a></h2><p>旧版的 <code>qBittorrent</code>，默认密码是：<code>admin/adminadmin</code>。</p><p>新版的 <code>qBittorrent</code> 默认密码为随机生成的密码，需要到 <code>qBittorrent</code> 的日志中查看。</p><p>如果是 Unraid，可以到 <code>qBittorrent</code> 容器图标上左键单击，点 <code>日志</code> 进去就能看到。</p><p>如果是群晖套件版 <code>qBittorrent</code>，默认密码目前和旧版一致。</p><p>登录之后可以到 <code>qBittorrent</code> WebUI 修改密码。</p><h2 id="nas-上安装的迅雷提示需要邀请码" tabindex="-1">NAS 上安装的迅雷提示需要邀请码？ <a class="header-anchor" href="#nas-上安装的迅雷提示需要邀请码" aria-label="Permalink to &quot;NAS 上安装的迅雷提示需要邀请码？&quot;">​</a></h2><p>迅雷邀请码可以填这个：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>我不是矿神IMNKS</span></span></code></pre></div><h2 id="unraid-上装的-zerotier、星空组网无法访问-unraid-webui-但是其它-docker-webui-可以访问-该怎么解决" tabindex="-1">Unraid 上装的 Zerotier、星空组网无法访问 Unraid WebUI，但是其它 docker WebUI 可以访问，该怎么解决？ <a class="header-anchor" href="#unraid-上装的-zerotier、星空组网无法访问-unraid-webui-但是其它-docker-webui-可以访问-该怎么解决" aria-label="Permalink to &quot;Unraid 上装的 Zerotier、星空组网无法访问 Unraid WebUI，但是其它 docker WebUI 可以访问，该怎么解决？&quot;">​</a></h2><p>可以参考这个教程解决：</p><p><a href="/unraid/remote.html">解决虚拟组网远程无法访问 80 端口问题</a></p><h2 id="群晖、unraid-安装-docker-应用出错-docker-无法下载-该怎么解决" tabindex="-1">群晖、Unraid 安装 Docker 应用出错，Docker 无法下载，该怎么解决? <a class="header-anchor" href="#群晖、unraid-安装-docker-应用出错-docker-无法下载-该怎么解决" aria-label="Permalink to &quot;群晖、Unraid 安装 Docker 应用出错，Docker 无法下载，该怎么解决?&quot;">​</a></h2><p>Docker 镜像拉不下来，一般都是网络问题。由于 Docker 镜像服务器在国外，最简单直接有效的办法是使用软路由，在软路由上配置魔法解决，具体可以看这个教程：</p><ul><li>Unraid：<a href="/unraid/router.html">一文搞定 Unraid 安装软路由</a></li><li>群晖：<a href="/synology/router.html">安装旁路由</a></li></ul>',32),c=[i];function d(n,s,p,h,l,u){return o(),a("div",null,c)}const b=e(t,[["render",d]]);export{k as __pageData,b as default};
