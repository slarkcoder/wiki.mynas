import {
  _ as e,
  c as i,
  a2 as t,
  o as s,
} from "./chunks/framework.eme8ZeBJ.js";
const u = JSON.parse(
    '{"title":"影音资源库 - 小雅部署教程","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/xiaoya.md","filePath":"unraid/xiaoya.md","lastUpdated":1725293933000}'
  ),
  o = { name: "unraid/xiaoya.md" };
function r(l, a, d, n, c, p) {
  return (
    s(),
    i(
      "div",
      null,
      a[0] ||
        (a[0] = [
          t(
            '<h1 id="影音资源库-小雅部署教程" tabindex="-1">影音资源库 - 小雅部署教程 <a class="header-anchor" href="#影音资源库-小雅部署教程" aria-label="Permalink to &quot;影音资源库 - 小雅部署教程&quot;">​</a></h1><p>小雅是基于阿里云盘的共享资源构建的一个比较完整的，大规模的资源库。结合你的阿里云盘，在你需要的时候，把对应的资源转移到你的阿里云盘的中转目录。而且可以做到定期清理，不用担心阿里云盘容量被转存的资源占满。配置好之后，这一切都是自动的，不需要人工干预。</p><p>还有一些优点，小雅支持 WebDAV，可以结合各种客户端比如 Jellyfin、Emby 来使用，很多资源都已经过刮削，在客户端使用也非常省心。对于有些家人不会找资源的，小雅可真是个神器！相对于 nastools 之类的自动化工具，也不需要折腾 PT 站点认证，上手使用门槛非常低。</p><p>本篇教程就来介绍如何部署小雅。</p><h2 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-label="Permalink to &quot;准备&quot;">​</a></h2><ul><li>提前安装 <code>FileBrowser</code>，方便修改小雅所需的配置文件。</li><li>如果你需要安装小雅 Jellyfin 或者 Emby 全家桶，最好把已经装的 Jellyfin、Emby 都先删掉。</li><li>阿里云盘 Token（32 位长度），<a href="https://alist.nn.ci/zh/guide/drivers/aliyundrive" target="_blank" rel="noreferrer">使用阿里云盘 App 点此扫码</a> 获取备用。</li><li>阿里云盘 OpenToken（288~335 位长度），<a href="https://alist.nn.ci/tool/aliyundrive/request.html" target="_blank" rel="noreferrer">使用阿里云盘 App 点此扫码</a> 获取备用。</li><li>中转文件夹目录 ID，可以将 <a href="https://www.aliyundrive.com/s/rP9gP3h9asE" target="_blank" rel="noreferrer">中转文件夹</a> 保存到阿里云盘，然后在浏览器里打开就可以看到 <code>目录 ID</code>，获取备用。</li></ul><p><img src="https://img.slarker.me/wiki/ys1YwJ_Xu3x4m.png" alt="ys1YwJ_Xu3x4m"></p><h2 id="unraid-部署" tabindex="-1">Unraid 部署 <a class="header-anchor" href="#unraid-部署" aria-label="Permalink to &quot;Unraid 部署&quot;">​</a></h2><p>使用 <code>FileBrowser</code> 在 <code>appdata</code> 下面建立 <code>xiaoya</code> 文件夹。</p><p>可以使用这个一键脚本方便的部署小雅，感谢 <a href="https://github.com/DDS-Derek/xiaoya-alist" target="_blank" rel="noreferrer">DDS-Derek</a> 大佬以及开源。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --insecure</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://ddsrem.com/xiaoya_install.sh)&quot;</span></span></code></pre></div><p>打开 Unraid 的控制台，粘贴上面的一键脚本并回车执行：</p><p><img src="https://img.slarker.me/wiki/BqGAQx_RS70yE.png" alt="BqGAQx_RS70yE"></p><h3 id="安装小雅" tabindex="-1">安装小雅 <a class="header-anchor" href="#安装小雅" aria-label="Permalink to &quot;安装小雅&quot;">​</a></h3><p>在主菜单选择 <code>1 -&gt; 1</code>，安装小雅 Alist，提示配置小雅目录，可以填写：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/mnt/user/appdata/xiaoya</span></span></code></pre></div><p>继续按提示填写我们提前准备好的 <code>阿里云盘 Token</code>，<code>阿里云盘 OpenToken</code>，<code>中转文件夹目录 ID</code>，<code>PikPak</code> 可按需选择配置，网络模式推荐使用 <code>host</code>，之后就开始安装了，直到出现 <code>安装完成！</code></p><p><img src="https://img.slarker.me/wiki/Heihqe_KDcj7U.png" alt="Heihqe_KDcj7U"></p><p>这个时候小雅就已经可以访问了，默认端口是 <code>5678</code>。小雅首页下方也显示了默认的 <code>WebDAV</code> 账号信息。</p><p><img src="https://img.slarker.me/wiki/i67r7k_9ir0Cy.png" alt="i67r7k_9ir0Cy"></p><h3 id="安装小雅助手" tabindex="-1">安装小雅助手 <a class="header-anchor" href="#安装小雅助手" aria-label="Permalink to &quot;安装小雅助手&quot;">​</a></h3><p>小雅会在你播放对应的资源的时候，把对应的资源通过调用 <code>api</code> 转存到你的云盘里，如果你没有 <code>仓鼠症</code>，那隔一段时间就需要手动清理转存的资源。好在小雅也有对应的助手来帮你自动完成这个清理工作。</p><p>在主菜单选择 <code>4 -&gt; 1</code>，安装小雅助手，具体清理模式可以根据自己需求来选。小雅助手设置比较简单，安装成功就能自动运行，因为你之前填的 阿里云盘 token 配置都是可以共享使用的。</p><h2 id="使用风险" tabindex="-1">使用风险 <a class="header-anchor" href="#使用风险" aria-label="Permalink to &quot;使用风险&quot;">​</a></h2><p>由于小雅的大部分资源都是基于阿里云盘，所以对阿里云盘的 <code>api</code> 依赖比较敏感，大量频繁读取文件，有可能 <code>被风控</code>。如果你需要使用各种刮削工具对小雅的资源进行扫描刮削，可以仔细阅读 <a href="https://xiaoyaliu.notion.site/xiaoya-docker-69404af849504fa5bcf9f2dd5ecaa75f#6b42128605b841288455a52b8a06bc9f" target="_blank" rel="noreferrer">阿里的风控</a> 细节。</p>',
            25
          ),
        ])
    )
  );
}
const k = e(o, [["render", r]]);
export { u as __pageData, k as default };
