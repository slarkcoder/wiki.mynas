import {
  _ as e,
  c as o,
  o as s,
  a4 as a,
} from "./chunks/framework.BOW58p_D.js";
const m = JSON.parse(
    '{"title":"使用 SSH 登录","description":"","frontmatter":{},"headers":[],"relativePath":"synology/ssh.md","filePath":"synology/ssh.md","lastUpdated":1712740743000}'
  ),
  t = { name: "synology/ssh.md" },
  c = a(
    `<h1 id="使用-ssh-登录" tabindex="-1">使用 SSH 登录 <a class="header-anchor" href="#使用-ssh-登录" aria-label="Permalink to &quot;使用 SSH 登录&quot;">​</a></h1><p>有些设置无法在系统的 Web 中操作，比如默认的 M.2 SSD 只能作为缓存使用，如果想要作为存储使用，就需要通过 SSH 修改，同样的还有将网络设置为交换机模式也需要通过 SSH 来操作。下面就介绍如何使用 SSH 连接到群晖。</p><h3 id="开启-ssh" tabindex="-1">开启 SSH <a class="header-anchor" href="#开启-ssh" aria-label="Permalink to &quot;开启 SSH&quot;">​</a></h3><p>打开 <code>控制面板</code> -&gt; <code>终端机和 SNMP</code>，勾选 <code>启动 SSH 功能</code> 并应用。</p><p><img src="https://slark-blog.s3.bitiful.net/5ei2wi4t.oer_CMYeJZ.png" alt="5ei2wi4t.oer_CMYeJZ"></p><h3 id="使用-ssh-登录群晖" tabindex="-1">使用 SSH 登录群晖 <a class="header-anchor" href="#使用-ssh-登录群晖" aria-label="Permalink to &quot;使用 SSH 登录群晖&quot;">​</a></h3><blockquote><p>Windows、macOS 以及各种 Linux 都自带终端，在系统中搜索 <code>terminal</code> 就有。也可以使用第三方的终端，比如 Windows 中的 <code>putty</code> 或者 macOS 中的 <code>iTerm2</code> 等等。</p></blockquote><p>在终端中使用 <code>ssh</code> 登录群晖：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ssh 命令格式为: ssh [群晖用户名]@[群晖 IP 地址]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rooter@192.168.2.227</span></span></code></pre></div><p>使用 <code>sudo -i</code> 切换到 root 用户。</p><blockquote><p>切换到 <code>root</code> 用户并不是必须，是否需要切换到 root 用户，要具体的需求来确定。</p></blockquote><p><img src="https://slark-blog.s3.bitiful.net/hlvan5eo.bhr_N5hslt.png" alt="hlvan5eo.bhr_N5hslt"></p><blockquote><p>注意：在终端最左侧会显示当前的用户身份，使用 <code>sudo -i</code> 切换成 root 用户之后，前面显示的用户就会由 <code>rooter</code> 变成 <code>root</code>。</p></blockquote><h3 id="退出" tabindex="-1">退出 <a class="header-anchor" href="#退出" aria-label="Permalink to &quot;退出&quot;">​</a></h3><p>将所需的命令执行完毕后，可以在终端中输入 <code>exit</code> 退出登录。如果当前是 <code>root</code> 用户，则需要先输入 <code>exit</code> 退到普通用户，再输一次才能退出登录。</p><p><img src="https://slark-blog.s3.bitiful.net/xzbjx0p0.hxv_CVxNnf.png" alt="xzbjx0p0.hxv_CVxNnf"></p>`,
    16
  ),
  i = [c];
function d(r, h, l, n, p, _) {
  return s(), o("div", null, i);
}
const u = e(t, [["render", d]]);
export { m as __pageData, u as default };
