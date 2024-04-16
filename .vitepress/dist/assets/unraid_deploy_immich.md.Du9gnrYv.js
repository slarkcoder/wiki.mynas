import{_ as e,c as a,o,a4 as r}from"./chunks/framework.4aTu-Nia.js";const k=JSON.parse('{"title":"安装 Immich 并开启硬件加速","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/deploy_immich.md","filePath":"unraid/deploy_immich.md","lastUpdated":1712219474000}'),i={name:"unraid/deploy_immich.md"},t=r(`<h1 id="安装-immich-并开启硬件加速" tabindex="-1">安装 Immich 并开启硬件加速 <a class="header-anchor" href="#安装-immich-并开启硬件加速" aria-label="Permalink to &quot;安装 Immich 并开启硬件加速&quot;">​</a></h1><p>一直以来，我都用群晖自带的 Photos 来备份手机照片，因为除了群晖相册之外，很少有一款相册的功能强大，而且有方便的手机客户端可以使用。而要使用群晖相册，就必须用群晖的系统，或者用白群晖，或者就得开个虚拟机。然而想想也就为了备份个相册而已，这么做实在太过笨拙。</p><p>而现在，<a href="https://immich.app/" target="_blank" rel="noreferrer">immich</a> 的出现让我终于有了放弃群晖相册的想法。跟着官方教程，一次就部署成功了，没遇到什么坑，App 也很好用。<a href="https://immich.app/" target="_blank" rel="noreferrer">immich</a> 这个项目很活跃，版本更新频繁，以至于官方在文档的显著位置放了一句提示：“⚠️ The project is under very active development. Expect bugs and changes. Do not use it as the only way to store your photos and videos!”。😂</p><p>下面这是 <a href="https://immich.app/" target="_blank" rel="noreferrer">immich</a> 的 <a href="https://github.com/orgs/immich-app/projects/1/views/1" target="_blank" rel="noreferrer">Roadmap</a>，可以看到，很多功能和 bug 都在计划之中。</p><p><img src="https://img.slarker.me/blog/L1WOp7_nhJbBF.png" alt="L1WOp7_nhJbBF"></p><h2 id="如何部署" tabindex="-1">如何部署？ <a class="header-anchor" href="#如何部署" aria-label="Permalink to &quot;如何部署？&quot;">​</a></h2><p>如果你可以看懂一些英文，直接跟着 <a href="https://immich.app/docs/install/unraid" target="_blank" rel="noreferrer">官方文档</a> 走一遍，应该也不会遇到什么坑，官方文档也非常详细，该填的配置文件都可以直接粘贴。我是在 Unraid 这个 NAS 平台上部署 immich 的，所以本篇教程我也只讲如何在 Unraid 上部署使用。虽然跟着官方文档部署也不难，但对于刚接触 Unraid 的小白来说，依然可能遇到很多坑。下面这些步骤是为小白准备的，为了尽可能让小白也一次成功，我会把所有详细步骤都讲清楚。</p><h3 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-label="Permalink to &quot;准备&quot;">​</a></h3><ul><li>需要建一个照片存储目录，用来保存你手机上的照片和视频。比如在 Unraid 的共享里建立一个名为 <code>photos</code> 的共享目录。</li></ul><p><img src="https://img.slarker.me/blog/IqS9vw_bwxw78.jpg" alt="IqS9vw_bwxw78"></p><ul><li>安装 <code>Docker Compose Manager</code> 插件。安装 immich 使用 <code>Docker Compose Manager</code> 比较方便，在应用中心搜索安装即可。</li></ul><p><img src="https://img.slarker.me/blog/AlK5M0_qlzzvl.png" alt="AlK5M0_qlzzvl"></p><blockquote><p>什么是 <code>Docker Compose</code>？简单理解，Docker Compose 就是一组复杂的 Docker 容器集合，通过一个 docker-compose 文件来描述它们之间的关系。对于我们用户来说，只要能找到这个应用的 docker-compose 文件，我们也能轻松的让这个复杂的应用运行起来，不用去关心它们之间的关系是怎样的。需要启动的时候，直接启动这个 compose 就可以。</p></blockquote><h3 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h3><p>在安装成功 Docker Compose 插件之后，在 Docker 选项卡最下方，会有一个 <code>ADD NEW STACK</code> 的按钮，点击之后会弹出一个对话框，提示输入名称，我们填写 <code>Immich</code>。填完之后点击 <code>OK</code>。</p><p>建好之后，我们点击名称，会弹出提示，我们再点击 <code>EDIT STACK</code>。接下来我们会填写 <code>COMPOSE FILE</code> 以及 <code>ENV FILE</code>。</p><p><img src="https://img.slarker.me/blog/gnpiY7_Gl0LZR.png" alt="gnpiY7_Gl0LZR"></p><p><img src="https://img.slarker.me/blog/xj40ii_anzJus.png" alt="xj40ii_anzJus"></p><p>点击 <code>COMPOSE FILE</code>，将官方提供的 <a href="https://github.com/immich-app/immich/releases/latest/download/docker-compose.yml" target="_blank" rel="noreferrer">Compose File</a> 全部选中，直接复制粘贴到配置文本框里，然后点击 <code>SAVE CHANGES</code>。</p><p><img src="https://img.slarker.me/blog/zje0ia4u.in3_DMqWhX.png" alt="zje0ia4u.in3_DMqWhX"></p><p>再点击 <code>ENV FILE</code>，将官方提供的 <a href="https://github.com/immich-app/immich/releases/latest/download/example.env" target="_blank" rel="noreferrer">Env File</a> 全部选中，直接复制粘贴到配置文件里。</p><p>接着修改上传路径 <code>UPLOAD_LOCATION</code>。比如我们之前建立的共享文件夹 <code>photos</code> 的上传路径就是 <code>/mnt/user/photos</code>。</p><p><img src="https://img.slarker.me/blog/5azpnm4t.jez_6h9Vyo.png" alt="5azpnm4t.jez_6h9Vyo"></p><p>到现在，我们的配置就改好了，点击 <code>SAVE CHANGES</code> 保存更改。</p><p>接下来，就可以点击 <code>COMPOSE UP</code> 来启动容器了。</p><p><img src="https://img.slarker.me/blog/oCmpxh_V0AoQS.png" alt="oCmpxh_V0AoQS"> 过一会，等待容器启动完成，就可以在 Docker 列表看到一堆新的 docker 容器了。看到 <code>2283</code> 这个默认的端口之后，我们就可以打开浏览器输入 <code>NAS IP:2283</code> 访问 immich 了。</p><p><img src="https://img.slarker.me/blog/E7hI72_SIJF2t.png" alt="E7hI72_SIJF2t"></p><p>immich 这个应用的启动和停止，可以通过控制最下方的 docker compose 来实现。</p><p><img src="https://img.slarker.me/blog/LTasjz_pzX2uv.png" alt="LTasjz_pzX2uv"></p><h2 id="客户端" tabindex="-1">客户端 <a class="header-anchor" href="#客户端" aria-label="Permalink to &quot;客户端&quot;">​</a></h2><p><a href="https://immich.app/" target="_blank" rel="noreferrer">immich</a> 支持 iOS 和 Android 客户端，而且功能非常完善，备份功能非常好用。Immich 也有网页版。比较遗憾的是，目前网页版还不支持中文，但相信这个问题也会很快解决。</p><h2 id="机器学习" tabindex="-1">机器学习 <a class="header-anchor" href="#机器学习" aria-label="Permalink to &quot;机器学习&quot;">​</a></h2><p>群晖的 Photos 支持人脸识别。在 immich 的网页版中，也有机器学习的选项，支持照片分类。</p><p><img src="https://img.slarker.me/blog/qHpbnv_a8CXhH.png" alt="qHpbnv_a8CXhH"></p><h2 id="硬件加速-可选" tabindex="-1">硬件加速（可选） <a class="header-anchor" href="#硬件加速-可选" aria-label="Permalink to &quot;硬件加速（可选）&quot;">​</a></h2><p>根据官方文档的提示，目前硬件加速功能还处于 <a href="https://immich.app/docs/features/hardware-transcoding" target="_blank" rel="noreferrer">实验性阶段</a>，因此这个功能是可选的，如果你有需要，可以开启试试。这里仅介绍 Intel 带核显的 CPU 如何设置，其它平台可以查阅官方文档。</p><p>为了支持 VP9，你使用的 CPU 应该至少是 Intel 9 代或者以后的新平台。如果你用的是第 11 代或者之前的平台，还需要按这里的 <a href="https://jellyfin.org/docs/general/administration/hardware-acceleration/intel/#configure-and-verify-lp-mode-on-linux" target="_blank" rel="noreferrer">文档说明</a> 开启低电压模式。总之，这里的设置和开启 Jellyfin 硬解是一样的，只要你能确定 Jellyfin 可以硬解，那就 OK。</p><h3 id="设置硬件加速" tabindex="-1">设置硬件加速 <a class="header-anchor" href="#设置硬件加速" aria-label="Permalink to &quot;设置硬件加速&quot;">​</a></h3><p>修改 Immich 的 <code>COMPOSE FILE</code>，在 <code>immich-microservices:</code> 中加入下面这段配置开启 QSV：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">devices</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/dev/dri:/dev/dri</span></span></code></pre></div><p>修改之后应该是这样：</p><p><img src="https://img.slarker.me/blog/lhcnczxp.3o2_khvpiN.png" alt="lhcnczxp.3o2_khvpiN"></p><p>保存后，点击更新 <code>UPDATE STACK</code>。之后在 Web 控制台里依次点击 <code>Administration -&gt; Setting -&gt; Video Transcoding Settings -&gt; Hardware Acceleration</code>，将 <code>ACCELERATION API</code> 切换为 <code>Quick Sync</code> 并保存。</p><p><img src="https://img.slarker.me/blog/2jmo5k21.lt3_M1Mwo4.png" alt="2jmo5k21.lt3_M1Mwo4"></p>`,44),p=[t];function c(s,l,h,n,m,d){return o(),a("div",null,p)}const _=e(i,[["render",c]]);export{k as __pageData,_ as default};