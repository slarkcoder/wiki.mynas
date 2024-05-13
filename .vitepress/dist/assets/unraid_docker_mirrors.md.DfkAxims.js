import {
  _ as e,
  c as a,
  o as s,
  a4 as o,
} from "./chunks/framework.BOW58p_D.js";
const u = JSON.parse(
    '{"title":"配置 Docker 加速器","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/docker_mirrors.md","filePath":"unraid/docker_mirrors.md","lastUpdated":1711470861000}'
  ),
  r = { name: "unraid/docker_mirrors.md" },
  t = o(
    `<h1 id="配置-docker-加速器" tabindex="-1">配置 Docker 加速器 <a class="header-anchor" href="#配置-docker-加速器" aria-label="Permalink to &quot;配置 Docker 加速器&quot;">​</a></h1><p>Unraid 上的绝大多数应用都是以 Docker 的方式部署的，但 Docker 镜像的服务器位于国外。如果没有网络代理服务，部署时经常会出现下载失败，或者网络错误。除了设置网络代理之外，还可以通过各大云服务厂商提供的 Docker 镜像加速服务来解决镜像下载问题。</p><h2 id="腾讯云镜像加速地址" tabindex="-1">腾讯云镜像加速地址 <a class="header-anchor" href="#腾讯云镜像加速地址" aria-label="Permalink to &quot;腾讯云镜像加速地址&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>https://mirror.ccs.tencentyun.com</span></span></code></pre></div><h2 id="阿里云镜像加速地址" tabindex="-1">阿里云镜像加速地址 <a class="header-anchor" href="#阿里云镜像加速地址" aria-label="Permalink to &quot;阿里云镜像加速地址&quot;">​</a></h2><p>登录（如果没有，可以直接用手机号登录）阿里云 <a href="https://cr.console.aliyun.com/cn-shanghai/instances/repositories" target="_blank" rel="noreferrer">https://cr.console.aliyun.com/cn-shanghai/instances/repositories</a> 之后就可以在 <code>镜像工具 -&gt; 镜像加速器</code> 中看到 <code>加速器地址</code> 了。</p><p><img src="https://slark-blog.s3.bitiful.net/b4hhN4_npdhLI.png" alt="b4hhN4_npdhLI"></p><h2 id="配置-docker-加速" tabindex="-1">配置 Docker 加速 <a class="header-anchor" href="#配置-docker-加速" aria-label="Permalink to &quot;配置 Docker 加速&quot;">​</a></h2><blockquote><p>注意：将下面命令中的 <code>https://xxx.mirror.aliyuncs.com</code> 替换为上一步你获取到的阿里云镜像加速地址。</p></blockquote><p>在 Unraid 终端工具输入下面的命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mkdir -p /etc/docker</span></span>
<span class="line"><span>tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;registry-mirrors&quot;: [&quot;https://xxx.mirror.aliyuncs.com&quot;]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p><a href="https://mirror.ccs.tencentyun.com/" target="_blank" rel="noreferrer">https://mirror.ccs.tencentyun.com/</a></p><p>之后在 <code>设置 -&gt; Docker</code> 中，先将 <code>启用 Docker</code> 设置为 <code>否</code>，点击应用，再将 <code>启用 Docker</code> 设置为 <code>是</code>，点击应用。这样就完成了重启 Docker 的操作，Docker 的镜像加速服务也就生效了。</p><p><img src="https://slark-blog.s3.bitiful.net/u1TStC_UEOb4d.png" alt="u1TStC_UEOb4d"></p>`,
    14
  ),
  c = [t];
function n(i, p, d, l, h, k) {
  return s(), a("div", null, c);
}
const _ = e(r, [["render", n]]);
export { u as __pageData, _ as default };
