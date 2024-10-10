import {
  _ as a,
  c as t,
  a2 as i,
  o as l,
} from "./chunks/framework.eme8ZeBJ.js";
const h = JSON.parse(
    '{"title":"小姐姐元数据刮削解决方案","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/javspider.md","filePath":"unraid/javspider.md","lastUpdated":1725293933000}'
  ),
  s = { name: "unraid/javspider.md" };
function n(o, e, d, c, p, r) {
  return (
    l(),
    t(
      "div",
      null,
      e[0] ||
        (e[0] = [
          i(
            '<h1 id="小姐姐元数据刮削解决方案" tabindex="-1">小姐姐元数据刮削解决方案 <a class="header-anchor" href="#小姐姐元数据刮削解决方案" aria-label="Permalink to &quot;小姐姐元数据刮削解决方案&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">友情提示</p><ul><li>请不要在国内的各种网站论坛，聊天工具转发本教程，低调使用！</li><li>请自行解决网络问题！</li></ul></div><p>如果你在 NAS 上收集了不少小姐姐，想必你也希望能有个海报墙，具体效果像下面这样：</p><p><img src="https://img.slarker.me/wiki/J63DJA_bxqbbn_ggjsEO.jpg" alt="J63DJA_bxqbbn_ggjsEO"></p><p>正常电影可以使用 <a href="/unraid/tmm.html">TinyMediaManager</a> 来刮削，像是小姐姐这种日本电影就得通过别的方法来单独刮削，很多 GitHub 上的开源项目，都是通过抓取类似 <code>javbus</code> 这种第三方的信息网站来实现刮削。相比正常电影，日本电影的元数据信息比较简单，而且命名来说规则性很强，第三方适配起来难度也不算高。本篇教程就介绍一个相对比较简单的方案，使用 <a href="https://metatube-community.github.io/" target="_blank" rel="noreferrer">MetaTube</a> 来刮削小姐姐。</p><h2 id="安装服务端" tabindex="-1">安装服务端 <a class="header-anchor" href="#安装服务端" aria-label="Permalink to &quot;安装服务端&quot;">​</a></h2><p><code>MetaTube</code> 是一个服务端 + 插件的组合。可以在 NAS 上通过 Docker 安装服务端，在 Jellyfin/Emby/Plex 中安装相应的刮削插件。直接复制下面的命令在 Unraid 终端中执行，就可以安装好服务端：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">docker run -d -p 8900:8080 -v /mnt/user/appdata/metatube/config:/config --name metatube metatube/metatube-server:latest -dsn /config/metatube.db</span></span></code></pre></div><p>上面的命令中，为了避免和其他常用端口冲突，默认的服务端端口改成了 <code>8900</code>，所以在插件中需要填写的 <code>服务端地址</code> 就是：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://[你的 NAS IP]:8900</span></span></code></pre></div><h2 id="安装插件" tabindex="-1">安装插件 <a class="header-anchor" href="#安装插件" aria-label="Permalink to &quot;安装插件&quot;">​</a></h2><p>这里直接照搬插件官方的文档，非常简单。</p><h3 id="jellyfin" tabindex="-1">Jellyfin <a class="header-anchor" href="#jellyfin" aria-label="Permalink to &quot;Jellyfin&quot;">​</a></h3><ul><li>进入 Jellyfin 控制台 &gt; 插件 &gt; 存储库，点击添加</li><li>输入存储库名称：<code>MetaTube</code></li><li>输入存储库URL：</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https://raw.githubusercontent.com/metatube-community/jellyfin-plugin-metatube/dist/manifest.json</span></span></code></pre></div><ul><li>在插件目录下找到 <code>MetaTube</code>，点击安装</li><li>重启 Jellyfin</li><li>适用于中国大陆的存储库URL：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://cdn.jsdelivr.net/gh/metatube-community/jellyfin-plugin-metatube@dist/manifest.json（可能有缓存）</span></span></code></pre></div><h3 id="emby" tabindex="-1">Emby <a class="header-anchor" href="#emby" aria-label="Permalink to &quot;Emby&quot;">​</a></h3><ul><li>从 <a href="https://github.com/metatube-community/jellyfin-plugin-metatube/releases" target="_blank" rel="noreferrer">Releases</a> 下载 <code>MetaTube</code> 最新插件</li><li>解压出 MetaTube.dll 文件</li><li>将 dll 文件复制到 Emby 插件目录</li><li>重启 Emby 服务</li></ul><h2 id="设置插件" tabindex="-1">设置插件 <a class="header-anchor" href="#设置插件" aria-label="Permalink to &quot;设置插件&quot;">​</a></h2><p>到 Jellyfin/Emby 控制台，找到 <code>MetaTube</code> 插件，只需填写上面的 <code>服务端地址</code>，<code>Token</code> 默认不用填，并保存。</p><p><img src="https://img.slarker.me/wiki/144rn30e.xjx_Ng2M3Q.png" alt="144rn30e.xjx_Ng2M3Q"></p><h2 id="设置媒体库" tabindex="-1">设置媒体库 <a class="header-anchor" href="#设置媒体库" aria-label="Permalink to &quot;设置媒体库&quot;">​</a></h2><p>添加你的小姐姐媒体库，并在媒体库的刮削选项中勾选 <code>MetaTube</code> 插件，把其它插件可以取消勾选。</p><p><img src="https://img.slarker.me/wiki/ojwlelqp.unv_tqGinN.png" alt="ojwlelqp.unv_tqGinN"></p><p><img src="https://img.slarker.me/wiki/u3hsti00.3o5_Eu27v6.png" alt="u3hsti00.3o5_Eu27v6"></p><p>保存之后，在媒体库里刷新元数据就可以了。</p>',
            27
          ),
        ])
    )
  );
}
const m = a(s, [["render", n]]);
export { h as __pageData, m as default };
