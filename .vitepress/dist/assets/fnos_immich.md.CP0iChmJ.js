import {
  _ as i,
  c as a,
  a2 as s,
  o as n,
} from "./chunks/framework.eme8ZeBJ.js";
const r = JSON.parse(
    '{"title":"优秀的照片管理工具 - immich","description":"","frontmatter":{},"headers":[],"relativePath":"fnos/immich.md","filePath":"fnos/immich.md","lastUpdated":1728131906000}'
  ),
  o = { name: "fnos/immich.md" };
function c(l, e, t, p, h, d) {
  return (
    n(),
    a(
      "div",
      null,
      e[0] ||
        (e[0] = [
          s(
            `<h1 id="优秀的照片管理工具-immich" tabindex="-1">优秀的照片管理工具 - immich <a class="header-anchor" href="#优秀的照片管理工具-immich" aria-label="Permalink to &quot;优秀的照片管理工具 - immich&quot;">​</a></h1><p><img src="https://img.slarker.me/wiki/202409112117284.jpg" alt=""></p><p>Immich 的优秀无须多说，相比一些自带的相册应用，immich 已经很成熟了人脸识别，自然语言搜索，支持中文，支持多账户等等，该有的功能也都有。尤其是目前 fnOS 自带的相册功能也比较基础，使用 immich 来替代自带的相册也会是大多数人的选择。之前我也写过在 Unraid、群晖上的安装教程，具体可以看：</p><ul><li>Unraid：<a href="/unraid/deploy_immich.html">安装 Immich 并开启硬件加速</a></li><li>Synology：<a href="/synology/immich_deploy.html">使用 Compose 安装照片管理工具 - Immich</a></li></ul><p>在 fnOS 上安装 immich 和群晖上没什么区别，但为了方便 fnOS 用户安装，我还是决定再写一篇如何在 fnOS 上安装 immich 的教程。有英文阅读能力的，建议跟着 <a href="https://immich.app/docs/install/docker-compose" target="_blank" rel="noreferrer">官网教程</a> 走一遍。</p><blockquote><p>值得注意的是，fnOS 的 docker 版本比较新，目前为 <code>Docker version 26.0.0</code>，而 Unraid 6.12.13 的 docker 版本为 <code>Docker version 24.0.9</code>。所以在 Unraid 和群晖上出现的 Docker 参数 <code>start_interval</code> 不支持的问题，在 fnOS 上不会出现，这一点也方便很多。</p></blockquote><h2 id="建立共享文件夹" tabindex="-1">建立共享文件夹 <a class="header-anchor" href="#建立共享文件夹" aria-label="Permalink to &quot;建立共享文件夹&quot;">​</a></h2><p>按照下图所示建立文件夹。</p><ul><li><code>/docker/immich</code>：Compose 配置文件夹</li><li><code>/docker/immich/db</code>：数据库文件夹</li><li><code>/photos</code>：保存照片文件夹</li></ul><p><img src="https://img.slarker.me/wiki/VnJnSQ_eyrmOC.png" alt="VnJnSQ_eyrmOC"></p><p>文件夹的实际路径也可以在文件夹上右击 -&gt; 选择 <code>详细信息</code> -&gt; <code>复制原始路径</code> 得到。</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-09-07_23-10-38_kGBfHx.png" alt="Snipaste_2024-09-07_23-10-38_kGBfHx"></p><h2 id="准备配置文件" tabindex="-1">准备配置文件 <a class="header-anchor" href="#准备配置文件" aria-label="Permalink to &quot;准备配置文件&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">提示</p><ul><li>配置文件中的 <code>vol1</code> 表示 <code>存储空间 1</code>，需要和上面建立的文件夹的实际路径保持一致。</li><li>配置文件中的 <code>1000</code> 为当前用户的 <code>User ID</code>。</li></ul></div><p>下载配置文件 <a href="https://github.com/immich-app/immich/releases/latest/download/docker-compose.yml" target="_blank" rel="noreferrer">docker-compose.yml</a> 和 <a href="https://github.com/immich-app/immich/releases/latest/download/example.env" target="_blank" rel="noreferrer">example.env</a>。<code>docker-compose.yml</code> 不需要修改，example.env 需要修改其中的：</p><ul><li>UPLOAD_LOCATION：照片上传位置，也就是保存照片的文件夹。</li><li>DB_DATA_LOCATION：数据库保存位置。</li><li>TZ：时区，国内可以修改为 <code>Asia/Shanghai</code>。</li></ul><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># You can find documentation for all the supported env variables at https://immich.app/docs/install/environment-variables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The location where your uploaded files are stored</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">UPLOAD_LOCATION=/vol1/1000/photos</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The location where your database files are stored</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DB_DATA_LOCATION=/vol1/1000/docker/immich/db</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># To set a timezone, uncomment the next line and change Etc/UTC to a TZ identifier from this list: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TZ=Asia/Shanghai</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The Immich version to use. You can pin this to a specific version like &quot;v1.71.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">IMMICH_VERSION=release</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Connection secret for postgres. You should change it to a random password</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Please use only the characters \`A-Za-z0-9\`, without special characters or spaces</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DB_PASSWORD=postgres</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The values below this line do not need to be changed</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">###################################################################################</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DB_USERNAME=postgres</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DB_DATABASE_NAME=immich</span></span></code></pre></div><h2 id="上传配置文件" tabindex="-1">上传配置文件 <a class="header-anchor" href="#上传配置文件" aria-label="Permalink to &quot;上传配置文件&quot;">​</a></h2><p>将配置文件 <code>docker-compose.yml</code> 和 <code>example.env</code> 上传到 immich 中，并将 <code>example.env</code> 重命名为 <code>.env</code>。</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-09-07_22-24-40_EDIwzE.png" alt="Snipaste_2024-09-07_22-24-40_EDIwzE"></p><h2 id="通过-compose-安装-immich" tabindex="-1">通过 Compose 安装 immich <a class="header-anchor" href="#通过-compose-安装-immich" aria-label="Permalink to &quot;通过 Compose 安装 immich&quot;">​</a></h2><p>在 fnOS 的 Docker 中创建 Compose 项目，路径选择 <code>/docker/immich</code>，使用现有配置文件创建项目，点击 <code>确定</code>。勾选 <code>创建项目后立即启动</code>，点击 <code>完成</code>。</p><p><img src="https://img.slarker.me/wiki/NQzP7e_7ni8iX.png" alt="NQzP7e_7ni8iX"></p><p>Compose 会自动拉取相关的 Docker 镜像，按照配置自动构建相关容器，等待完成，immich 就装好了。</p><p><img src="https://img.slarker.me/wiki/YE6ffu_TW5LNK.png" alt="YE6ffu_TW5LNK"></p><p>immich 的默认端口为：<code>2283</code>，浏览器打开 <code>fnOS IP:2283</code> 就能访问了。</p><h2 id="人脸识别设置问题" tabindex="-1">人脸识别设置问题 <a class="header-anchor" href="#人脸识别设置问题" aria-label="Permalink to &quot;人脸识别设置问题&quot;">​</a></h2><p>如果你的 <code>immich</code> 人脸识别不生效，可以尝试按下面的方法解决。</p><p>在 immich 后台，点击头像 -&gt; <code>管理</code> -&gt; <code>设置</code> -&gt; <code>机器学习设置</code>，确认 <code>机器学习的 URL</code> 为：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http://immich_machine_learning:3003</span></span></code></pre></div><p><img src="https://img.slarker.me/wiki/477f81956e184107ad2b2244b21657be.webp" alt=""></p><p>这里的 <code>immich_machine_learning</code> 需要和 <code>yml</code> 配置文件中的机器学习容器的 <code>container name</code> 一致。</p><p><img src="https://img.slarker.me/wiki/7a17b0c2aa3547a0ad59e12bf9687daf.webp" alt=""></p><p>目前默认为：<code>http://immich-machine-learning:3003</code>。</p><p>修改后 <code>保存</code>，在 <code>任务</code> 中重新运行 <code>人脸检测</code>。</p>`,
            35
          ),
        ])
    )
  );
}
const k = i(o, [["render", c]]);
export { r as __pageData, k as default };
