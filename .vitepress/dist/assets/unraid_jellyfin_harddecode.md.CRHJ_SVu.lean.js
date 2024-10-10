import { _ as a, c as i, a2 as l, o } from "./chunks/framework.eme8ZeBJ.js";
const m = JSON.parse(
    '{"title":"安装 Jellyfin 实现硬解 4K","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/jellyfin_harddecode.md","filePath":"unraid/jellyfin_harddecode.md","lastUpdated":1725293933000}'
  ),
  t = { name: "unraid/jellyfin_harddecode.md" };
function d(s, e, c, n, p, r) {
  return (
    o(),
    i(
      "div",
      null,
      e[0] ||
        (e[0] = [
          l(
            '<h1 id="安装-jellyfin-实现硬解-4k" tabindex="-1">安装 Jellyfin 实现硬解 4K <a class="header-anchor" href="#安装-jellyfin-实现硬解-4k" aria-label="Permalink to &quot;安装 Jellyfin 实现硬解 4K&quot;">​</a></h1><p>本篇教程介绍在 Unraid 系统下面安装 Jellyfin 实现硬解 4K，适用的 CPU 为带核显的 Intel CPU。</p><p>测试文件：<a href="https://www.123pan.com/s/1JKMjv-5lxo.html" target="_blank" rel="noreferrer">123 云盘：4K+IMAX DTS：X-碟中谍4.7z</a>，下载后需解压。</p><p>解压密码：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wiki.slarker.me</span></span></code></pre></div><h2 id="建立共享目录" tabindex="-1">建立共享目录 <a class="header-anchor" href="#建立共享目录" aria-label="Permalink to &quot;建立共享目录&quot;">​</a></h2><p>我推荐的做法是建立一个专门的共享目录比如 <code>media</code>，来存放媒体文件。然后在 media 目录下面再建立 <code>movies</code> 和 <code>tvshows</code> 来分别存放电影和电视剧。当然你可以把 movies 和 tvshows 都直接放到 <code>downloads</code> 这个下载共享目录里，下面的教程我都以 <code>media</code> 这个目录为例，在对应的地方你需要改成自己建立的目录。</p><p><img src="https://img.slarker.me/wiki/CFIbG2_Oi0NwG.png" alt="CFIbG2_Oi0NwG"></p><h2 id="安装插件" tabindex="-1">安装插件 <a class="header-anchor" href="#安装插件" aria-label="Permalink to &quot;安装插件&quot;">​</a></h2><p>在应用市场里搜索 Intel-GPU-Top 和 GPU Statistics 插件并安装。</p><p>在仪表板里设置 GPU Statistics，找到显卡勾选并应用。</p><p><img src="https://img.slarker.me/wiki/4jAbL4_1Z6e7F.png" alt="4jAbL4_1Z6e7F"></p><h2 id="部署-jellyfin" tabindex="-1">部署 Jellyfin <a class="header-anchor" href="#部署-jellyfin" aria-label="Permalink to &quot;部署 Jellyfin&quot;">​</a></h2><p>我们使用的镜像是由 nyanmisaka 大佬制作的 nyanmisaka/jellyfin 镜像。在应用市场里搜索 jellyfin，选择 <code>linuxserver&#39;s Repository</code> 这个镜像，点击安装。</p><p>需要修改的配置按照下面的说明填写，没有说的就保持默认：</p><ul><li>将 <code>存储库</code> 改成：<code>nyanmisaka/jellyfin</code></li><li>将 <code>Path: /data/tvshows</code> 改成：<code>/mnt/user/media/tvshows</code></li><li>将 <code>Path: /data/movies</code> 改成：<code>/mnt/user/media/movies</code></li></ul><p>点击最下面的 <code>添加另一个路径、端口、变量、标签或设备</code> ，配置类型选择设备，参数按下图所示，最后点击添加。</p><p><img src="https://img.slarker.me/wiki/qcpUBy_uL478Q.png" alt="qcpUBy_uL478Q"></p><p>最后点击应用，等待部署完成。</p><h2 id="设置硬解" tabindex="-1">设置硬解 <a class="header-anchor" href="#设置硬解" aria-label="Permalink to &quot;设置硬解&quot;">​</a></h2><p>部署完成之后，Jellyfin 的默认端口是 8096，在浏览器中打开，设置密码之后进入后台，本篇教程只介绍如何设置硬解。</p><p>在控制台中点击播放，在转码的地方选择硬件加速，其它按下图所示配置：</p><p><img src="https://img.slarker.me/wiki/KYGGSu_ZGKMAg.png" alt="KYGGSu_ZGKMAg"></p><p><img src="https://img.slarker.me/wiki/H7LJk7_uBlLkG.png" alt="H7LJk7_uBlLkG"></p><p>最后点击最下方的保存。</p>',
            25
          ),
        ])
    )
  );
}
const u = a(t, [["render", d]]);
export { m as __pageData, u as default };
