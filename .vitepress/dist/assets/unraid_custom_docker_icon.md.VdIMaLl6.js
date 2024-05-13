import {
  _ as e,
  c as s,
  o as t,
  a4 as a,
} from "./chunks/framework.BOW58p_D.js";
const h = JSON.parse(
    '{"title":"自定义 Docker 图标","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/custom_docker_icon.md","filePath":"unraid/custom_docker_icon.md","lastUpdated":1711470861000}'
  ),
  p = { name: "unraid/custom_docker_icon.md" },
  o = a(
    '<h1 id="自定义-docker-图标" tabindex="-1">自定义 Docker 图标 <a class="header-anchor" href="#自定义-docker-图标" aria-label="Permalink to &quot;自定义 Docker 图标&quot;">​</a></h1><p>有时候 Unraid Docker 应用的图标会变成问号，如下图这样：</p><p><img src="https://slark-blog.s3.bitiful.net/WA6pLY_QF8Vco.png" alt="WA6pLY_QF8Vco"></p><p>图标变问号的原因有这么几种：</p><ul><li>存放图标的服务器位于国外，国内访问不稳定</li><li>部分 Docker 应用本身没有图标</li><li>使用 Docker Compose 安装的部分服务没有自带图标</li></ul><p>Unraid 支持自定义图标，图标也就是一个 PNG 或者 SVG 格式的图片。添加容器时，切换到高级视图就能看到设置图标链接的选项。</p><p><img src="https://slark-blog.s3.bitiful.net/wOX5IN_TzQHbZ.png" alt="wOX5IN_TzQHbZ"></p><p>只需要找一个合适的图标链接，粘贴到这里就可以了。Github 有个项目收集了常见的图标 <a href="https://github.com/xushier/HD-Icons" target="_blank" rel="noreferrer">GitHub - xushier/HD-Icons: 高清仪表盘图标（1024x1024 分辨率）</a>。</p><p><img src="https://slark-blog.s3.bitiful.net/SKeIqu_iSvsxJ.png" alt="SKeIqu_iSvsxJ"></p><p>但是具体使用仍然需要一个链接地址，为了方便大家使用，我将这个项目的图标都搬运到了自己的 OSS 图床里，提供可以公开访问的链接供大家使用。以 Alist 为例，如果需要 Alist 图标的链接地址，可以先到上面的项目里，搜索 Alist 图标的文件名，然后在前面拼接下面的链接地址，如果搜到了多个名称，就选一个自己喜欢的。</p><p><img src="https://slark-blog.s3.bitiful.net/wonPE8_eqMWLo.png" alt="wonPE8_eqMWLo"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>https://img.slarker.me/unraid/</span></span></code></pre></div><p>拼接之后的链接地址就是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>https://img.slarker.me/unraid/Alist_A.png</span></span></code></pre></div><p>就可以直接粘贴到 Docker 配置的图标链接里了，非常方便。</p><p>通过 Docker Compose 安装的应用，可以在 Docker Compose 的 <code>UI LABELS</code> 中对每个容器设置单独的图标。</p><p><img src="https://slark-blog.s3.bitiful.net/zWppW7_tK14RK.png" alt="zWppW7_tK14RK"></p><p><img src="https://slark-blog.s3.bitiful.net/vLvZTK_V1j3Un.png" alt="vLvZTK_V1j3Un"></p><p>另外，Unraid 也支持使用本地图标，但是操作比较麻烦一些，不如直接使用图标直链方便，有需要的可以自行搜索教程。</p>',
    19
  ),
  i = [o];
function r(c, n, l, d, _, m) {
  return t(), s("div", null, i);
}
const u = e(p, [["render", r]]);
export { h as __pageData, u as default };
