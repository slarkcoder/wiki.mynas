import { _ as s, c as a, a2 as i, o } from "./chunks/framework.eme8ZeBJ.js";
const r = JSON.parse(
    '{"title":"使用 Compose 安装照片管理工具 - Immich","description":"","frontmatter":{},"headers":[],"relativePath":"synology/immich_deploy.md","filePath":"synology/immich_deploy.md","lastUpdated":1725293933000}'
  ),
  n = { name: "synology/immich_deploy.md" };
function c(p, e, t, l, d, h) {
  return (
    o(),
    a(
      "div",
      null,
      e[0] ||
        (e[0] = [
          i(
            `<h1 id="使用-compose-安装照片管理工具-immich" tabindex="-1">使用 Compose 安装照片管理工具 - Immich <a class="header-anchor" href="#使用-compose-安装照片管理工具-immich" aria-label="Permalink to &quot;使用 Compose 安装照片管理工具 - Immich&quot;">​</a></h1><p>Immich 是一个非常好用的，开源的照片管理工具，支持 iOS 和 Android App，本篇教程就来介绍如何在群晖中安装 immich。</p><h2 id="建立照片共享文件夹" tabindex="-1">建立照片共享文件夹 <a class="header-anchor" href="#建立照片共享文件夹" aria-label="Permalink to &quot;建立照片共享文件夹&quot;">​</a></h2><p>建立共享文件夹 immich 用来保存照片文件。共享文件夹建好之后，可以在 <code>File Station</code> 中右击选择属性查看文件夹的路径，记下备用。</p><p><img src="https://img.slarker.me/wiki/4YcuE6_aUBkpB.png" alt="4YcuE6_aUBkpB"></p><h2 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h2><p>由于 immich 依赖的服务比较多，所以官方推荐使用 Compose 的方式来安装。首先从 <a href="https://immich.app/docs/install/docker-compose" target="_blank" rel="noreferrer">immich 官网</a> 下载配置文件：<a href="https://github.com/immich-app/immich/releases/latest/download/docker-compose.yml" target="_blank" rel="noreferrer">docker-compose.yml</a>，<a href="https://github.com/immich-app/immich/releases/latest/download/example.env" target="_blank" rel="noreferrer">example.env</a>。</p><p>下载好之后，使用文本编辑器修改 example.env 中的 <code>UPLOAD_LOCATION</code> 路径为上一步的照片共享文件夹的路径，修改 <code>DB_DATA_LOCATION</code> 路径为 <code>/volume1/docker/immich/postgres</code> 并保存，修改好应该像下面这样。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>这里示例配置中的 <code>immich 照片文件夹</code> 和 <code>docker 配置文件夹</code> 都位于 <code>volume1</code> 上面，你需要根据自己的实际情况修改。</p></div><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># You can find documentation for all the supported env variables at https://immich.app/docs/install/environment-variables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The location where your uploaded files are stored</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">UPLOAD_LOCATION=/volume1/immich</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The location where your database files are stored</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DB_DATA_LOCATION=/volume1/docker/immich/postgres</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># To set a timezone, uncomment the next line and change Etc/UTC to a TZ identifier from this list: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># TZ=Etc/UTC</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The Immich version to use. You can pin this to a specific version like &quot;v1.71.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">IMMICH_VERSION=release</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Connection secret for postgres. You should change it to a random password</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DB_PASSWORD=postgres</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The values below this line do not need to be changed</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">###################################################################################</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DB_USERNAME=postgres</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DB_DATABASE_NAME=immich</span></span></code></pre></div><p>按照下面提示修改 <code>docker-compose.yml</code>：</p><p>最近有群友安装最新版的 immich 时遇到问题，提示不支持 <code>start_interval</code> 属性：</p><p><img src="https://img.slarker.me/wiki/WechatIMG166_rpHaX1.png" alt="WechatIMG166_rpHaX1"></p><p>由于群晖目前版本的 Docker 不支持该属性，可以将该属性所在行直接删除，不影响 <code>immich</code> 正常使用。</p><h2 id="建立-compose-项目并部署" tabindex="-1">建立 Compose 项目并部署 <a class="header-anchor" href="#建立-compose-项目并部署" aria-label="Permalink to &quot;建立 Compose 项目并部署&quot;">​</a></h2><p>在 <code>File Station</code> 中的 docker 文件夹下面建立 <code>immich</code> 文件夹，用来保存配置文件。将修改好的 <code>example.env</code> 和 <code>docker-compose.yml</code> 上传到 <code>/docker/immich</code> 路径下面，并在 <code>/docker/immich</code> 下面建立 <code>postgres</code> 文件夹用来存储数据库，最后把 <code>example.env</code> 重命名为 <code>.env</code>。</p><p><img src="https://img.slarker.me/wiki/x0gx320b.gbe_OyT7Yk.png" alt="x0gx320b.gbe_OyT7Yk"></p><p>在 Container Manager 项目中新增，项目名称填写 immich，设置路径选择 /docekr/immich 后会提示已含有 docker-compose.yml，选择 <code>使用现有的 docker-compose.yml 来创建项目</code>，点击确定，一直下一步就自动开始拉取镜像部署了。</p><p><img src="https://img.slarker.me/wiki/vfnsdszh.3eh_htNSwa.png" alt="vfnsdszh.3eh_htNSwa"></p><p>部署完成之后，会自动启动所有的容器。</p><p><img src="https://img.slarker.me/wiki/LwYuGy_nUqG5G.png" alt="LwYuGy_nUqG5G"></p><p>Immich 默认的 Web 端口是 2283。</p><p><img src="https://img.slarker.me/wiki/uwz3fsc3.ujp_MuBCtH.png" alt="uwz3fsc3.ujp_MuBCtH"></p><h2 id="设置中文" tabindex="-1">设置中文 <a class="header-anchor" href="#设置中文" aria-label="Permalink to &quot;设置中文&quot;">​</a></h2><p>目前，最新版的 <code>immich</code> Web 端已支持中文，登录 Web 版后台，点击自己的头像，在 <code>Account Setting</code> -&gt; <code>App Setting</code> -&gt; <code>Language</code> 中可以找到 <code>Chinese(Simplified)</code> 选项，点击就可以切换。</p><h2 id="如何更新" tabindex="-1">如何更新？ <a class="header-anchor" href="#如何更新" aria-label="Permalink to &quot;如何更新？&quot;">​</a></h2><p>Immich 这个项目更新的非常频繁，当有新版本需要更新的时候，在 <code>映像</code> 里会有更新的提示，直接点击更新就可以了。</p>`,
            27
          ),
        ])
    )
  );
}
const k = s(n, [["render", c]]);
export { r as __pageData, k as default };
