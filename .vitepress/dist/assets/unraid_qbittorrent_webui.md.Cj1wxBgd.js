import {
  _ as e,
  c as t,
  o as r,
  a4 as a,
} from "./chunks/framework.BOW58p_D.js";
const h = JSON.parse(
    '{"title":"为 qBittorrent 更换好看且易用的 WebUI","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/qbittorrent_webui.md","filePath":"unraid/qbittorrent_webui.md","lastUpdated":1711470861000}'
  ),
  o = { name: "unraid/qbittorrent_webui.md" },
  n = a(
    '<h1 id="为-qbittorrent-更换好看且易用的-webui" tabindex="-1">为 qBittorrent 更换好看且易用的 WebUI <a class="header-anchor" href="#为-qbittorrent-更换好看且易用的-webui" aria-label="Permalink to &quot;为 qBittorrent 更换好看且易用的 WebUI&quot;">​</a></h1><p>qBittorrent 是非常流行的 BT/PT 下载工具，但是其自带的 WebUI 比较丑，在手机端也不是很好用。本篇教程就教你如何给 qBittorrent 更换 WebUI。</p><p>先来看看更换后的效果：</p><p><img src="https://slark-blog.s3.bitiful.net/jusDSs_75WMPV.png" alt="jusDSs_75WMPV"></p><p>这套 WebUI 是 <a href="https://github.com/WDaan/VueTorrent/releases" target="_blank" rel="noreferrer">VueTorrent</a>，更换之前先将 vuetorrent.zip 下载到本地并解压。</p><p>下载地址：<a href="https://github.com/WDaan/VueTorrent/releases" target="_blank" rel="noreferrer">https://github.com/WDaan/VueTorrent/releases</a></p><p>以 Unraid 系统为例，使用 FileBrowser 或者自带的文件管理器，将上面解压得到的 vuetorrent 文件夹上传到 <code>/appdata/qbittorrent</code> 下面，如图所示：</p><p><img src="https://slark-blog.s3.bitiful.net/rhIsj1_ZBg09i.png" alt="rhIsj1_ZBg09i"></p><p>然后在 qBittorrent 的 <code>设置 -&gt; WebUI</code> 里，勾选使用自定义 WEBUI 并填写文件路径：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/config/vuetorrent</span></span></code></pre></div><p>最后点击保存即可生效。</p>',
    11
  ),
  s = [n];
function i(p, c, l, _, d, b) {
  return r(), t("div", null, s);
}
const g = e(o, [["render", i]]);
export { h as __pageData, g as default };
