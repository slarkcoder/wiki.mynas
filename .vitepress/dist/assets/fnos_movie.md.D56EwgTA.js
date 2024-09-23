import{_ as i,c as a,a2 as e,o as p}from"./chunks/framework.eme8ZeBJ.js";const k=JSON.parse('{"title":"飞牛影视刮削、播放网盘电影","description":"","frontmatter":{},"headers":[],"relativePath":"fnos/movie.md","filePath":"fnos/movie.md","lastUpdated":1726297505000}'),t={name:"fnos/movie.md"};function l(n,s,d,o,h,c){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="飞牛影视刮削、播放网盘电影" tabindex="-1">飞牛影视刮削、播放网盘电影 <a class="header-anchor" href="#飞牛影视刮削、播放网盘电影" aria-label="Permalink to &quot;飞牛影视刮削、播放网盘电影&quot;">​</a></h1><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/fnmovie_ATapWY.jpg" alt="fnmovie_ATapWY"></p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-31_22-49-46_ZVhFDr.jpg" alt="Snipaste_2024-08-31_22-49-46_ZVhFDr"></p><p>上面这两张图就是飞牛影视的刮削效果。飞牛影视的刮削功能非常强悍，不用折腾什么 <code>TMDB API</code>，也不用改 host，也不用折腾网络环境。识别速度快，准确度高达 99%，支持在线匹配字幕，支持多用户访问权限控制，最重要的是上手还非常简单，极大的降低了小白用户的上手门槛，对很多影视用户来说，完美解决了刮削这个痛点。</p><p>市面上免费不限速的网盘并不多，115 网盘 和 123 云盘免费用户都不限速，但 115 的资源要丰富很多，只要把资源转存到自己的网盘里，利用 Clouddrive 将网盘挂载到本地，让飞牛影视直接刮削网盘里的资源，就可以得到一个资源非常丰富的影视库。</p><div class="info custom-block"><p class="custom-block-title">提示</p><p>如果 115 空间不够用，可以去淘宝，闲鱼买空间卡充值，非常便宜。</p></div><h2 id="安装-clouddrive" tabindex="-1">安装 Clouddrive <a class="header-anchor" href="#安装-clouddrive" aria-label="Permalink to &quot;安装 Clouddrive&quot;">​</a></h2><p>Clouddrive 是一个网盘挂载工具，可以挂载任何支持 FUSE 的网盘，包括 115、阿里云盘、百度网盘等。在 fnOS 可以通过 docker 安装 clouddrive。</p><h3 id="新建文件夹" tabindex="-1">新建文件夹 <a class="header-anchor" href="#新建文件夹" aria-label="Permalink to &quot;新建文件夹&quot;">​</a></h3><p>在 fnOS 的文件管理中 <code>新建文件夹</code>，<code>clouddrive</code> 用来挂载网盘，<code>docker</code> 用来保存容器的配置。具体层级如下：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/x0zisuj0.tq1_VoBgDx.png" alt="x0zisuj0.tq1_VoBgDx"></p><h3 id="使用命令安装-clouddrive" tabindex="-1">使用命令安装 clouddrive <a class="header-anchor" href="#使用命令安装-clouddrive" aria-label="Permalink to &quot;使用命令安装 clouddrive&quot;">​</a></h3><p><a href="/fnos/ssh.html">使用 SSH 登录</a> fnOS，并切换到 <code>root</code> 用户，粘贴执行下面的命令：</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>下面命令中的路径为 <code>/vol1/1000</code>，<code>vol1</code> 表示 <code>存储空间 1</code>，需要和上面建立的文件夹存储位置保持一致，请根据实际情况修改。</p></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clouddrive</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --restart=always</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --env</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CLOUDDRIVE_HOME=/Config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /vol1/1000/clouddrive:/CloudNAS:shared</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /vol1/1000/docker/clouddrive/config:/Config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --network</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> host</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --pid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> host</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --privileged</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --device</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/fuse:/dev/fuse</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    cloudnas/clouddrive2</span></span></code></pre></div><h2 id="挂载网盘" tabindex="-1">挂载网盘 <a class="header-anchor" href="#挂载网盘" aria-label="Permalink to &quot;挂载网盘&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">提示</p><p>Clouddrive 免费版只能挂载一个网盘，对很多人来说也够用了。如果你不想购买 Clouddrive 授权，又想挂载更多网盘，这里也有一个套娃的办法，可以先通过 Alist 挂载网盘，再用 Clouddrive 挂载 Alist 的 Webdav。</p></div><p>Clouddrive 默认的端口是：<code>19798</code>，使用 <code>NAS IP:19798</code> 打开后注册登录账号，添加网盘。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/MhlFfT_VUtbq5.png" alt="MhlFfT_VUtbq5"></p><p>具体添加操作按提示来就行，添加好之后可以把网盘挂载到本地。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/JRJzOx_xVBT3Z.png" alt="JRJzOx_xVBT3Z"></p><p>挂载点选择 <code>CloudNAS</code>。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/A9GKXC_Bpgzmj.png" alt="A9GKXC_Bpgzmj"></p><p>挂载好之后，在 fnOS 文件管理中，点开 <code>clouddrive</code>，就可以看到网盘里的资源了。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/RojvnL_eTlZRZ.png" alt="RojvnL_eTlZRZ"></p><h2 id="影视设置" tabindex="-1">影视设置 <a class="header-anchor" href="#影视设置" aria-label="Permalink to &quot;影视设置&quot;">​</a></h2><p>在 fnOS 应用中心安装 <code>影视</code> 应用，并设置可访问的文件夹。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-09-01_20-44-02_WdTE9T.jpg" alt="Snipaste_2024-09-01_20-44-02_WdTE9T"></p><p>允许 <code>影视</code> 应用访问挂载到本地的网盘文件夹。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-09-01_20-46-54_Z3WrbF.jpg" alt="Snipaste_2024-09-01_20-46-54_Z3WrbF"></p><p>打开 <code>影视</code> 应用，按提示进行授权，创建管理员账号，创建媒体库，<code>媒体文件夹</code> 选择挂载到本地的网盘影视文件夹。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/bEBpWd_d6iO8O.png" alt="bEBpWd_d6iO8O"></p><p>创建好之后，等待自动刮削完成就可以了，非常省心！</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-31_22-10-01_G26xFt.jpg" alt="Snipaste_2024-08-31_22-10-01_G26xFt"></p><p>详情介绍也很完整。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-09-01_20-53-22_prNdiO.jpg" alt="Snipaste_2024-09-01_20-53-22_prNdiO"></p><h2 id="_115-资源" tabindex="-1">115 资源 <a class="header-anchor" href="#_115-资源" aria-label="Permalink to &quot;115 资源&quot;">​</a></h2><p>115 资源网上有很多，这里分享一些链接：</p><ul><li><a href="https://docs.qq.com/sheet/DQmlyUG1zdmZwVkdl?tab=BB08J2" target="_blank" rel="noreferrer">115 资源1</a></li><li><a href="https://docs.qq.com/smartsheet/DU0JQR3lkS1huck9U" target="_blank" rel="noreferrer">115 资源2</a></li><li><a href="https://t.me/hao115" target="_blank" rel="noreferrer">Telegram 资源群组1</a></li><li><a href="https://t.me/Resources115_SFW" target="_blank" rel="noreferrer">Telegram 资源群组2</a></li><li><a href="https://t.me/vip115hot" target="_blank" rel="noreferrer">Telegram 资源群组3</a></li></ul><p>找到想要的资源，转存到自己的网盘里，就可以直接通过 fnOS 的影视观看了。</p>`,40)]))}const g=i(t,[["render",l]]);export{k as __pageData,g as default};