import{_ as a,c as o,a3 as t,o as r}from"./chunks/framework.CghS9iDj.js";const u=JSON.parse('{"title":"常见问题解答","description":"","frontmatter":{},"headers":[],"relativePath":"basic/question.md","filePath":"basic/question.md","lastUpdated":1725293933000}'),i={name:"basic/question.md"};function c(d,e,s,n,h,p){return r(),o("div",null,e[0]||(e[0]=[t('<h1 id="常见问题解答" tabindex="-1">常见问题解答 <a class="header-anchor" href="#常见问题解答" aria-label="Permalink to &quot;常见问题解答&quot;">​</a></h1><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/pexels-alex-green-569945_QwNpJJ.jpg" alt="pexels-alex-green-569945_QwNpJJ"></p><p>这里收集一些新手经常遇到的问题。</p><h2 id="群晖系统装在哪里" tabindex="-1">群晖系统装在哪里？ <a class="header-anchor" href="#群晖系统装在哪里" aria-label="Permalink to &quot;群晖系统装在哪里？&quot;">​</a></h2><p>这里有个官方的文档，说的很详细：<a href="https://kb.synology.cn/zh-cn/DSM/tutorial/Which_drive_is_DSM_installed_on" target="_blank" rel="noreferrer">DSM 操作系统安装在哪个硬盘上？</a>。</p><h2 id="群晖找不到了怎么办" tabindex="-1">群晖找不到了怎么办？ <a class="header-anchor" href="#群晖找不到了怎么办" aria-label="Permalink to &quot;群晖找不到了怎么办？&quot;">​</a></h2><p>可以参考教程：<a href="/synology/find_synology.html">查找群晖设备</a>。</p><h2 id="群晖如何使用第三方套件" tabindex="-1">群晖如何使用第三方套件？ <a class="header-anchor" href="#群晖如何使用第三方套件" aria-label="Permalink to &quot;群晖如何使用第三方套件？&quot;">​</a></h2><p>可以在 <code>套件中心</code> 添加第三方套件源，使用人数比较多的是矿神这个：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://spk7.imnks.com/</span></span></code></pre></div><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/synology_photo_03_oD0zrU.png" alt=""></p><p>这里也有一些其它的 <a href="https://synopackage.com/sources" target="_blank" rel="noreferrer">第三方套件源</a>，需要的可以看看。</p><h2 id="群晖套件中心显示网络连接失败-网络错误-如何解决" tabindex="-1">群晖套件中心显示网络连接失败，网络错误，如何解决？ <a class="header-anchor" href="#群晖套件中心显示网络连接失败-网络错误-如何解决" aria-label="Permalink to &quot;群晖套件中心显示网络连接失败，网络错误，如何解决？&quot;">​</a></h2><p>可以尝试修改群晖的 <code>DNS</code>。到 <code>控制面板</code> -&gt; <code>网络</code> 中按下图手动设置 DNS，并点击 <code>应用</code>。</p><p>推荐修改为：<code>223.5.5.5</code>，<code>114.114.114.114</code>。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/ujwOIJ_41eBnO.png" alt="ujwOIJ_41eBnO"></p><h2 id="群晖的-docker-套件在哪里" tabindex="-1">群晖的 Docker 套件在哪里？ <a class="header-anchor" href="#群晖的-docker-套件在哪里" aria-label="Permalink to &quot;群晖的 Docker 套件在哪里？&quot;">​</a></h2><p>新版的群晖 Docker 已改名为 <code>Container Manager</code>。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/hhRI1G_H2X3T1.png" alt="hhRI1G_H2X3T1"></p><h2 id="相册应用导入大量照片后-cpu-占用很高-甚至高达-100-是否正常" tabindex="-1">相册应用导入大量照片后 CPU 占用很高，甚至高达 100%，是否正常？ <a class="header-anchor" href="#相册应用导入大量照片后-cpu-占用很高-甚至高达-100-是否正常" aria-label="Permalink to &quot;相册应用导入大量照片后 CPU 占用很高，甚至高达 100%，是否正常？&quot;">​</a></h2><p>不管是群晖自带的 Photos 还是 Unraid 上的 Immich，PhotoPrism 等等类似的照片应用，在导入照片后，都会对照片做一次索引，包括且不限于 <code>AI 识别</code>，<code>生成缩略图</code> 等等，这些操作都会比较占用 CPU 资源，因此 CPU 占用高是很正常的。</p><p>即便你换了性能比较强的 CPU，比如 12100，甚至 12400 这种，CPU 也会占用很高，只是持续时间长短问题，等照片索引完成之后，就会恢复正常。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/UFjhLW_MeErSW.png" alt="UFjhLW_MeErSW"></p><h2 id="istoreos代理插件到哪里下载" tabindex="-1">iStoreOS代理插件到哪里下载？ <a class="header-anchor" href="#istoreos代理插件到哪里下载" aria-label="Permalink to &quot;iStoreOS代理插件到哪里下载？&quot;">​</a></h2><p>iStoreOS 本身并不自带代理插件，可以使用这里的包一键自动安装。</p><p><a href="https://github.com/AUK9527/Are-u-ok/tree/main/x86" target="_blank" rel="noreferrer">iStoreOS 软件包</a></p><p>如果上面的地址无法打开，可以到这里下载：</p><p><a href="https://www.123pan.com/s/1JKMjv-0jxo.html" target="_blank" rel="noreferrer">123 云盘：iStoreOS 插件</a></p><p>下载好之后到 iStoreOS 中手动上传安装：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/voo450c5.qrq_PH9mYj.png" alt="voo450c5.qrq_PH9mYj"></p><p>装好之后，在 <code>服务</code> 中可以找到相关插件。</p><h2 id="qbittorrent-默认密码是多少" tabindex="-1">qBittorrent 默认密码是多少？ <a class="header-anchor" href="#qbittorrent-默认密码是多少" aria-label="Permalink to &quot;qBittorrent 默认密码是多少？&quot;">​</a></h2><h3 id="旧版-4-6-1-之前版本" tabindex="-1">旧版（4.6.1 之前版本） <a class="header-anchor" href="#旧版-4-6-1-之前版本" aria-label="Permalink to &quot;旧版（4.6.1 之前版本）&quot;">​</a></h3><p>默认密码是：<code>admin/adminadmin</code>。</p><h3 id="新版-4-6-1-及以后版本" tabindex="-1">新版（4.6.1 及以后版本） <a class="header-anchor" href="#新版-4-6-1-及以后版本" aria-label="Permalink to &quot;新版（4.6.1 及以后版本）&quot;">​</a></h3><p>默认密码为随机生成的密码，需要到 <code>qBittorrent</code> 的日志中查看。如果使用 Docker 安装，需要到 <code>qBittorrent</code> 容器的日志中查看。</p><ul><li>如果是 Unraid，可以到 <code>qBittorrent</code> 容器图标上左键单击，点 <code>日志</code> 进去就能看到。</li><li>如果是群晖，可以到 <code>Container Manager</code> -&gt; <code>容器</code> 中，在具体的应用上面右击，点击 <code>详情</code> 进去，切换到 <code>日志</code> 标签页查看。</li></ul><p>登录之后可以到 <code>qBittorrent</code> WebUI 中修改密码。</p><h2 id="如何重置群晖-qbittorrent-套件密码" tabindex="-1">如何重置群晖 qBittorrent 套件密码？ <a class="header-anchor" href="#如何重置群晖-qbittorrent-套件密码" aria-label="Permalink to &quot;如何重置群晖 qBittorrent 套件密码？&quot;">​</a></h2><p>套件版 <code>qBittorrent</code> 忘记密码，可以按照下面的方法重置。</p><div class="info custom-block"><p class="custom-block-title">套件版本</p><p>适用于 <code>4.x ~ 4.6.x</code></p></div><p>在套件中心停止 <code>qBittorrent</code>，使用 <code>ssh</code> 登录群晖，并切换到 <code>root</code> 用户，执行下面的命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/WebUI\\\\Port/i\\WebUI\\\\Password_PBKDF2=\\&quot;@ByteArray(xK2EwRvfGtxfF+Ot9v4WYQ==:bNStY\\/6mFYYW8m\\/Xm4xSbBjoR2tZNsLZ4KvdUzyCLEOg7tfpchVJucIK9Dwcp6Xe9DI4RwpoCPI9zhicTdtf5A==)\\&quot;&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/packages/qBittorrent/target/qBittorrent_conf/config/qBittorrent.conf</span></span></code></pre></div><p>在套件中心启动 <code>qBittorrent</code>，默认密码会被重置为 <code>adminadmin</code>。</p><h2 id="nas-上安装的迅雷提示需要邀请码" tabindex="-1">NAS 上安装的迅雷提示需要邀请码？ <a class="header-anchor" href="#nas-上安装的迅雷提示需要邀请码" aria-label="Permalink to &quot;NAS 上安装的迅雷提示需要邀请码？&quot;">​</a></h2><p>迅雷邀请码可以填这个：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我不是矿神IMNKS</span></span></code></pre></div><h2 id="unraid-上装的-zerotier、星空组网无法访问-unraid-webui-但是其它-docker-webui-可以访问-该怎么解决" tabindex="-1">Unraid 上装的 Zerotier、星空组网无法访问 Unraid WebUI，但是其它 docker WebUI 可以访问，该怎么解决？ <a class="header-anchor" href="#unraid-上装的-zerotier、星空组网无法访问-unraid-webui-但是其它-docker-webui-可以访问-该怎么解决" aria-label="Permalink to &quot;Unraid 上装的 Zerotier、星空组网无法访问 Unraid WebUI，但是其它 docker WebUI 可以访问，该怎么解决？&quot;">​</a></h2><p>可以参考教程：<a href="/unraid/remote.html">解决虚拟组网远程无法访问 80 端口问题</a></p><h2 id="群晖、unraid-安装-docker-应用出错-docker-无法下载-该怎么解决" tabindex="-1">群晖、Unraid 安装 Docker 应用出错，Docker 无法下载，该怎么解决? <a class="header-anchor" href="#群晖、unraid-安装-docker-应用出错-docker-无法下载-该怎么解决" aria-label="Permalink to &quot;群晖、Unraid 安装 Docker 应用出错，Docker 无法下载，该怎么解决?&quot;">​</a></h2><p>由于 Docker 官方地址被屏蔽，近期国内主流的镜像加速服务也相继失效，可以参考教程：<a href="/basic/docker_mirrors.html">解决 Docker 镜像无法下载问题</a>。</p><h2 id="使用-istoreos-作为主路由时-无法正常上网-该怎么解决" tabindex="-1">使用 iStoreOS 作为主路由时，无法正常上网，该怎么解决? <a class="header-anchor" href="#使用-istoreos-作为主路由时-无法正常上网-该怎么解决" aria-label="Permalink to &quot;使用 iStoreOS 作为主路由时，无法正常上网，该怎么解决?&quot;">​</a></h2><p>最常见的问题是 iStoreOS 的 DHCP 分配不起作用。</p><p>使用有线把电脑连接到 iStoreOS 网口，可以先检查你的电脑是否能正常从 iStoreOS 中获取到 IP。如果获取不到，首先确保你的 iStoreOS 正常运行，把你的电脑改成和 iStoreOS 同一网段，使用浏览器登录 iStoreOS，然后打开 <code>网络</code> -&gt; <code>接口</code> -&gt; <code>lan</code>，点击右侧的 <code>编辑</code>，在 <code>高级设置</code> 中将 <code>使用自定义的 DNS 服务器</code> 修改为 <code>114.114.114.114</code> 和 <code>223.5.5.5</code>，然后点击 <code>保存</code>。切换到 <code>DHCP 服务器</code>，勾选 <code>高级设置</code> 中的 <code>强制</code> 选项，然后点击 <code>保存</code>，最后点击 <code>保存并应用</code>。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/h7SAXM_dtaHXh.png" alt="h7SAXM_dtaHXh"></p>',55)]))}const m=a(i,[["render",c]]);export{u as __pageData,m as default};
