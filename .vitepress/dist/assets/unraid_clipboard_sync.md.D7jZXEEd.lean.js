import {
  _ as a,
  c as r,
  a2 as t,
  o as s,
} from "./chunks/framework.eme8ZeBJ.js";
const u = JSON.parse(
    '{"title":"支持 selfhosted 的跨平台剪贴板同步方案 - SyncClipboard","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/clipboard_sync.md","filePath":"unraid/clipboard_sync.md","lastUpdated":1725293933000}'
  ),
  o = { name: "unraid/clipboard_sync.md" };
function p(c, e, n, l, i, d) {
  return (
    s(),
    r(
      "div",
      null,
      e[0] ||
        (e[0] = [
          t(
            `<h1 id="支持-selfhosted-的跨平台剪贴板同步方案-syncclipboard" tabindex="-1">支持 selfhosted 的跨平台剪贴板同步方案 - SyncClipboard <a class="header-anchor" href="#支持-selfhosted-的跨平台剪贴板同步方案-syncclipboard" aria-label="Permalink to &quot;支持 selfhosted 的跨平台剪贴板同步方案 - SyncClipboard&quot;">​</a></h1><blockquote><p>本文同步发布于 <a href="https://sspai.com/post/85646" target="_blank" rel="noreferrer">少数派</a>。</p></blockquote><p>对于使用多个平台设备的用户来说，一定会有临时共享剪贴板的需求，比较容易想到的办法是通过各种支持多平台的 IM 软件（微信、Telegram）发送文本给自己，然后再到目标设备手动复制到剪贴板，但是这种办法依然很繁琐。具体步骤如下：</p><blockquote><p>源设备复制 -&gt; 切换到源设备 IM -&gt; 原设备粘贴 -&gt; 源设备点击发送 -&gt; 切换到目标设备 IM -&gt; 目标设备再复制 -&gt; 目标设备粘贴</p></blockquote><p>可以看出来，至少需要 7 步才能完成共享文本操作，这还不包括打开 IM 后查找 <code>发送给自己</code> 的过程。</p><p>为了解决这个问题，我使用过一段时间的快贴，体验还可以，可以满足需求，但是免费账户也有限制，每天同步的文本不超过 1MB，超过了需要付费才能用。所以我找到了一款开源的替代品 <a href="https://github.com/Jeric-X/SyncClipboard" target="_blank" rel="noreferrer">SyncClipboard</a>。比较棒的是支持 Docker 部署，如果你有 NAS 或者公网服务器，那这个用起来就非常方便。SyncClipboard 同步剪贴板的原理也很简单，就是客户端通过不断的轮询去请求服务器，剪贴板有没有更新。</p><h2 id="服务端" tabindex="-1">服务端 <a class="header-anchor" href="#服务端" aria-label="Permalink to &quot;服务端&quot;">​</a></h2><blockquote><p>如果你用 Unraid，也可以通过我分享的 <a href="https://files.mynas.chat/share/0gxOryD7" target="_blank" rel="noreferrer">模板</a> 来安装。具体使用方法可以看 <a href="/unraid/unraid_docker_template.html">这里</a>。</p></blockquote><p>如果有 NAS 或者公网服务器，装好 Docker 环境，直接一行命令就装好了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -d \\</span></span>
<span class="line"><span>  --name=syncclipboard-server \\</span></span>
<span class="line"><span>  -p 5033:5033 \\</span></span>
<span class="line"><span>  --restart unless-stopped \\</span></span>
<span class="line"><span>  jericx/syncclipboard-server:latest</span></span></code></pre></div><p>默认端口是 5033，用户名和密码都是 admin，如果需要修改默认用户名和密码可以到 <a href="https://hub.docker.com/r/jericx/syncclipboard-server" target="_blank" rel="noreferrer">这里</a> 查看具体方法。使用公网服务器部署，还可以自己添加 SSL 反代，增加安全性。</p><p>如果没有服务器，也可以直接使用支持 Webdav 的网盘来作为服务器，比如坚果云，但是坚果云又有请求次数限制，像剪贴板这种即时性比较强的应用，轮询间隔当然是越短越好，如果请求次数间隔时间太长，又会导致使用体验大大降低。</p><h2 id="桌面端" tabindex="-1">桌面端 <a class="header-anchor" href="#桌面端" aria-label="Permalink to &quot;桌面端&quot;">​</a></h2><p>桌面端提供 <a href="https://github.com/Jeric-X/SyncClipboard.Desktop/releases" target="_blank" rel="noreferrer">macOS</a>、<a href="https://github.com/Jeric-X/SyncClipboard/releases/" target="_blank" rel="noreferrer">Windows</a> 和 <a href="https://github.com/Jeric-X/SyncClipboard.Desktop/releases" target="_blank" rel="noreferrer">Linux</a> 版本，下面以 macOS 为例，介绍如何使用。</p><p>如果是 ARM 芯片的 mac，安装完 ARM 版本的客户端，需要先到终端执行如下命令，否则会遇到安装包损坏的提示。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo xattr -d com.apple.quarantine /Applications/SyncClipboard.app</span></span></code></pre></div><p>打开软件后，把服务器的配置填进去：</p><p><img src="https://img.slarker.me/wiki/ma3hzywr.o5w_Zdak1I.png" alt="ma3hzywr.o5w_Zdak1I"></p><p>mac 端似乎没有开机登录的选项，可以在系统的登录项中手动添加。</p><p><img src="https://img.slarker.me/wiki/QmlG58_qKPD1f.png" alt="QmlG58_qKPD1f"></p><p>如果你只有一台电脑和手机同步，那也可以直接用这台电脑作为服务器。</p><h2 id="android" tabindex="-1">Android <a class="header-anchor" href="#android" aria-label="Permalink to &quot;Android&quot;">​</a></h2><p>安卓提供了两种办法，分别是 <a href="https://play.google.com/store/apps/details?id=ch.rmy.android.http_shortcuts" target="_blank" rel="noreferrer">HTTP Request Shortcuts</a> 和 <a href="https://github.com/kkevsekk1/AutoX" target="_blank" rel="noreferrer">Autox.js</a>，都是基于 JS 脚本来实现剪贴板的功能。我试过后，感觉 Autox.js 这个方法更方便一点。</p><p>到这里下载 <a href="https://github.com/kkevsekk1/AutoX/releases" target="_blank" rel="noreferrer">AutoX</a> 安卓客户端，安装之后，导入 <a href="https://github.com/Jeric-X/SyncClipboard/blob/master/script/SyncAutoxJs.js" target="_blank" rel="noreferrer"> js 配置</a>，并修改配置中的 url（也就是你的服务器连接地址），username（用户名） 和 token（密码）。 Autox.js 中也可以直接编辑 js 脚本：</p><p><img src="https://img.slarker.me/wiki/zgknads2.0uz_wHrQgp.png" alt="zgknads2.0uz_wHrQgp"></p><p>修改完之后，把 Autox.js 这个 app 的后台运行权限打开，确保不会被系统杀掉。为 js 配置脚本添加一个定时任务，让 Autox.js 启动时就自动运行。</p><p><img src="https://img.slarker.me/wiki/Screenshot_2024-01-08-11-12-57-366_org.autojs.autoxjs.v6_tCKn9b.jpg" alt="Screenshot_2024-01-08-11-12-57-366_org.autojs.autoxjs.v6_tCKn9b"></p><p><img src="https://img.slarker.me/wiki/Screenshot_2024-01-08-11-17-43-359_org.autojs.autoxjs.v6_rgRZas.jpg" alt="Screenshot_2024-01-08-11-17-43-359_org.autojs.autoxjs.v6_rgRZas"></p><p>在管理页面，确保脚本是在运行中的。</p><p><img src="https://img.slarker.me/wiki/u5vxq5e5.4dp_6YLcwk.png" alt="u5vxq5e5.4dp_6YLcwk"></p><p>至此，就可以试试具体效果了， mac 端复制，手机端就已经提示复制到剪贴板了。</p><p>使用 SyncClipboard 后的流程只需要两步：</p><blockquote><p>源设备复制 -&gt; 目标设备粘贴</p></blockquote><p><img src="https://img.slarker.me/wiki/Screenshot_2024-01-08-11-37-06-817_com.miui.home-edit_vqaM1F.jpg" alt="Screenshot_2024-01-08-11-37-06-817_com.miui.home-edit_vqaM1F"></p><p>如果是安卓手机端复制，需要同步到 mac 剪贴板，受限于安卓系统的限制，需要下面条件之一：</p><ul><li>Android 版本小于等于 Android 9 Pie</li><li>将软件切换到前台（也就是手动打开 App）</li><li>使用基于 root 权限的工具(Magisk/Xposed)解除 <code>Autox.js</code> 后台操作剪切版的权限，参考： <ul><li><a href="https://github.com/Kr328/Riru-ClipboardWhitelist" target="_blank" rel="noreferrer">https://github.com/Kr328/Riru-ClipboardWhitelist</a></li><li><a href="https://github.com/GamerGirlandCo/xposed-clipboard-whitelist" target="_blank" rel="noreferrer">https://github.com/GamerGirlandCo/xposed-clipboard-whitelist</a></li></ul></li></ul>`,
            36
          ),
        ])
    )
  );
}
const g = a(o, [["render", p]]);
export { u as __pageData, g as default };
