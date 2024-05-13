import {
  _ as s,
  c as a,
  o as e,
  a4 as i,
} from "./chunks/framework.BOW58p_D.js";
const g = JSON.parse(
    '{"title":"使用 Compose 安装照片管理工具 - Immich","description":"","frontmatter":{},"headers":[],"relativePath":"synology/immich_deploy.md","filePath":"synology/immich_deploy.md","lastUpdated":1711470861000}'
  ),
  n = { name: "synology/immich_deploy.md" },
  p = i(
    `<h1 id="使用-compose-安装照片管理工具-immich" tabindex="-1">使用 Compose 安装照片管理工具 - Immich <a class="header-anchor" href="#使用-compose-安装照片管理工具-immich" aria-label="Permalink to &quot;使用 Compose 安装照片管理工具 - Immich&quot;">​</a></h1><p>Immich 是一个非常好用的，开源的照片管理工具，支持 iOS 和 Android App，本篇教程就来介绍如何在群晖中安装 immich。</p><h2 id="建立照片共享文件夹" tabindex="-1">建立照片共享文件夹 <a class="header-anchor" href="#建立照片共享文件夹" aria-label="Permalink to &quot;建立照片共享文件夹&quot;">​</a></h2><p>建立共享文件夹 immich 用来保存照片文件。共享文件夹建好之后，可以在 <code>File Station</code> 中右击选择属性查看文件夹的路径，记下备用。</p><p><img src="https://slark-blog.s3.bitiful.net/4YcuE6_aUBkpB.png" alt="4YcuE6_aUBkpB"></p><h2 id="下载配置文件" tabindex="-1">下载配置文件 <a class="header-anchor" href="#下载配置文件" aria-label="Permalink to &quot;下载配置文件&quot;">​</a></h2><p>由于 immich 依赖的服务比较多，所以官方推荐使用 Compose 的方式来安装。首先从 <a href="https://immich.app/docs/install/docker-compose" target="_blank" rel="noreferrer">immich 官网</a> 下载配置文件：<a href="https://github.com/immich-app/immich/releases/latest/download/docker-compose.yml" target="_blank" rel="noreferrer">docker-compose.yml</a>，<a href="https://github.com/immich-app/immich/releases/latest/download/example.env" target="_blank" rel="noreferrer">example.env</a>。</p><p>下载好之后，使用文本编辑器修改 example.env 中的 <code>UPLOAD_LOCATION</code> 路径为上一步的照片共享文件夹的路径，并保存，修改好应该像下面这样。docker-compose.yml 不需要修改。</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># You can find documentation for all the supported env variables at https://immich.app/docs/install/environment-variables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The location where your uploaded files are stored</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">UPLOAD_LOCATION=/volume1/immich</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The Immich version to use. You can pin this to a specific version like &quot;v1.71.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">IMMICH_VERSION=release</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Connection secret for postgres. You should change it to a random password</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DB_PASSWORD=postgres</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The values below this line do not need to be changed</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">###################################################################################</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DB_HOSTNAME=immich_postgres</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DB_USERNAME=postgres</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DB_DATABASE_NAME=immich</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">REDIS_HOSTNAME=immich_redis</span></span></code></pre></div><h2 id="建立-compose-项目并部署" tabindex="-1">建立 Compose 项目并部署 <a class="header-anchor" href="#建立-compose-项目并部署" aria-label="Permalink to &quot;建立 Compose 项目并部署&quot;">​</a></h2><p>在 File Station 中的 docker 文件夹下面建立 immich 文件夹，用来保存配置文件。将修改好的 example.env 和 docker-compose.yml 上传到 /docker/immich 下面。并把 example.env 重命名为 .env。</p><p><img src="https://slark-blog.s3.bitiful.net/TIk4cP_iMOlbi.png" alt="TIk4cP_iMOlbi"></p><p>在 Container Manager 项目中新增，项目名称填写 immich，设置路径选择 /docekr/immich 后会提示已含有 docker-compose.yml，使用现有的 yml 来创建项目，一直下一步就自动开始拉取镜像部署了。</p><p><img src="https://slark-blog.s3.bitiful.net/vfnsdszh.3eh_htNSwa.png" alt="vfnsdszh.3eh_htNSwa"></p><p>部署完成之后，会自动启动所有的容器。</p><p><img src="https://slark-blog.s3.bitiful.net/LwYuGy_nUqG5G.png" alt="LwYuGy_nUqG5G"></p><p>Immich 默认的 Web 端口是 2283。</p><p><img src="https://slark-blog.s3.bitiful.net/uwz3fsc3.ujp_MuBCtH.png" alt="uwz3fsc3.ujp_MuBCtH"></p><h2 id="如何更新" tabindex="-1">如何更新？ <a class="header-anchor" href="#如何更新" aria-label="Permalink to &quot;如何更新？&quot;">​</a></h2><p>Immich 这个项目更新的非常频繁，当有新版本需要更新的时候，在 <code>映像</code> 里会有更新的提示，直接点击更新就可以了。</p>`,
    20
  ),
  l = [p];
function o(t, h, c, r, m, d) {
  return e(), a("div", null, l);
}
const _ = s(n, [["render", o]]);
export { g as __pageData, _ as default };
