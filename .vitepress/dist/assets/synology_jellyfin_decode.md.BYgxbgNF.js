import { _ as l, c, a2 as o, o as i } from "./chunks/framework.eme8ZeBJ.js";
const r = JSON.parse(
    '{"title":"使用 Docker 安装 Jellyfin 并设置硬解","description":"","frontmatter":{},"headers":[],"relativePath":"synology/jellyfin_decode.md","filePath":"synology/jellyfin_decode.md","lastUpdated":1725293933000}'
  ),
  n = { name: "synology/jellyfin_decode.md" };
function p(t, e, a, d, s, g) {
  return (
    i(),
    c(
      "div",
      null,
      e[0] ||
        (e[0] = [
          o(
            '<h1 id="使用-docker-安装-jellyfin-并设置硬解" tabindex="-1">使用 Docker 安装 Jellyfin 并设置硬解 <a class="header-anchor" href="#使用-docker-安装-jellyfin-并设置硬解" aria-label="Permalink to &quot;使用 Docker 安装 Jellyfin 并设置硬解&quot;">​</a></h1><blockquote><p>本教程适用于使用 Intel 11~14 代 CPU，群晖型号为 SA6400 的物理群晖，或者是直通了核显的虚拟群晖。</p></blockquote><p>开始之前，可以先下载测试视频文件备用。</p><p>测试文件：<a href="https://www.123pan.com/s/1JKMjv-5lxo.html" target="_blank" rel="noreferrer">123 云盘：4K+IMAX DTS：X-碟中谍4.7z</a>，下载后需解压。</p><p>解压密码：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wiki.slarker.me</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>Jellyfin 和 Emby 默认都使用 8096 端口，不能共存，只能二选一。</p></div><h2 id="新建共享文件夹" tabindex="-1">新建共享文件夹 <a class="header-anchor" href="#新建共享文件夹" aria-label="Permalink to &quot;新建共享文件夹&quot;">​</a></h2><p>新建一个共享文件夹，用来存储视频文件，稍后会把这个文件夹添加到 Docker 的 jellyfin 里，以便 jellyfin 能够读取。</p><p><img src="https://img.slarker.me/wiki/jellyfin_01_TwQTjT.png" alt="jellyfin_01_TwQTjT"></p><p>在 File Station 中，选择你想要设置的文件夹，右击选择属性，添加 Everyone 读写权限。</p><p><img src="https://img.slarker.me/wiki/jellyfin_02_RSEnbh.png" alt="jellyfin_02_RSEnbh"></p><p>在套件中心安装 Container Manager，安装好打开在注册表中搜索 jellyfin，下载 <code>nyanmisaka/jellyfin</code> 映像。</p><p><img src="https://img.slarker.me/wiki/jellyfin_03_AccXkG.png" alt="jellyfin_03_AccXkG"></p><p>下载完成之后，点击运行。</p><p><img src="https://img.slarker.me/wiki/jellyfin_04_hydlRO.png" alt="jellyfin_04_hydlRO"></p><p>选中 <code>启用自动重新启动</code>，点击下一步。</p><p><img src="https://img.slarker.me/wiki/jellyfin_05_h3lXZo.png" alt="jellyfin_05_h3lXZo"></p><p>按图中所示映射端口号、文件夹：</p><ul><li><code>8096</code> -&gt; <code>8096</code></li><li><code>/docker/jellyfin/config</code> -&gt; <code>/config</code></li><li><code>/docker/jellyfin/cache</code> -&gt; <code>/cache</code></li><li><code>/media</code> -&gt; <code>/media</code></li></ul><p>其中，<code>-&gt;</code> 表示映射，<code>-&gt;</code> 左侧的属于群晖本身的端口号或者路径，<code>-&gt;</code> 右侧的属于 Docker 容器内部的端口号或者路径。</p><p><img src="https://img.slarker.me/wiki/jellyfin_06_iZUNUX.png" alt="jellyfin_06_iZUNUX"></p><p>拉到下面，选择 <code>使用高权限执行容器</code>。</p><p><img src="https://img.slarker.me/wiki/jellyfin_07_l6wMHR.png" alt="jellyfin_07_l6wMHR"></p><p>Jellyfin 启动之后，默认的访问端口为 8096，设置账号并登录，添加完媒体库之后，进入到控制台的播放页面，设置转码，按下图所示勾选编解码选项。</p><p><img src="https://img.slarker.me/wiki/jellyfin_08_4SboiY.png" alt="jellyfin_08_4SboiY"></p><p><img src="https://img.slarker.me/wiki/jellyfin_09_1FcIVH.png" alt="jellyfin_09_1FcIVH"></p><p>把测试视频文件，上传到 <code>media</code> 共享文件夹里，在 jellyfin 中直接打开播放，可以看到已经在转码了，帧率 57fps，流畅观看没问题，并且色调也正常。</p><p><img src="https://img.slarker.me/wiki/jellyfin_10_h2KYo1.png" alt="jellyfin_10_h2KYo1"></p><p>同时 CPU 占用也很低。</p><p><img src="https://img.slarker.me/wiki/jellyfin_11_nDJ5Sf.png" alt="jellyfin_11_nDJ5Sf"></p>',
            31
          ),
        ])
    )
  );
}
const y = l(n, [["render", p]]);
export { r as __pageData, y as default };
