import {
  _ as s,
  c as o,
  a2 as a,
  o as c,
} from "./chunks/framework.eme8ZeBJ.js";
const S = JSON.parse(
    '{"title":"使用 SSH 登录","description":"","frontmatter":{},"headers":[],"relativePath":"fnos/ssh.md","filePath":"fnos/ssh.md","lastUpdated":1726579719000}'
  ),
  d = { name: "fnos/ssh.md" };
function t(i, e, l, n, p, r) {
  return (
    c(),
    o(
      "div",
      null,
      e[0] ||
        (e[0] = [
          a(
            `<h1 id="使用-ssh-登录" tabindex="-1">使用 SSH 登录 <a class="header-anchor" href="#使用-ssh-登录" aria-label="Permalink to &quot;使用 SSH 登录&quot;">​</a></h1><p><img src="https://img.slarker.me/wiki/03dcfaed1b9f40b5d8c16066f18f786f.webp" alt=""></p><p><code>SSH</code> 是一种网络协议，用于在远程服务器上执行命令，并通过网络传输数据。玩 NAS，学会如何使用 <code>SSH</code> 是必备的基本操作。</p><p>在创建 fnOS 账户的时候，填写的管理员名称和密码，就是 <code>SSH</code> 的用户名和密码。除此之外，系统中还会创建一个默认的 <code>root</code> 用户，密码和你的 fnOS 管理员密码相同。由于 Linux 的安全策略，<code>root</code> 拥有系统最高的权限，所以默认禁止远程登录。你只能先使用管理员账号这个身份通过 SSH 登录到 fnOS，然后使用 <code>sudo -i</code> 命令切换到 <code>root</code> 用户。</p><h2 id="如何判断当前用户身份" tabindex="-1">如何判断当前用户身份？ <a class="header-anchor" href="#如何判断当前用户身份" aria-label="Permalink to &quot;如何判断当前用户身份？&quot;">​</a></h2><p>很简单，看你的终端前面显示的用户名是哪个，当前的用户身份就是哪个。以下图为例：</p><p><img src="https://img.slarker.me/wiki/202409172124748.webp" alt=""></p><p>首先我使用 <code>slark</code> 这个身份登录 fnOS，登录之后，终端前面显示的用户名就是 <code>slark</code>。 接下来我使用 <code>sudo -i</code> 切换到 <code>root</code> 用户，切换之后，终端前面显示的用户名就是 <code>root</code>。</p><h2 id="开启-ssh-服务" tabindex="-1">开启 SSH 服务 <a class="header-anchor" href="#开启-ssh-服务" aria-label="Permalink to &quot;开启 SSH 服务&quot;">​</a></h2><p>在 fnOS <code>设置</code> -&gt; <code>SSH</code> 中打开 <code>SSH 功能</code> 开关。</p><p><img src="https://img.slarker.me/wiki/OK2SIN_7sTAMA.png" alt="OK2SIN_7sTAMA"></p><h2 id="通过-ssh-登录-fnos" tabindex="-1">通过 SSH 登录 fnOS <a class="header-anchor" href="#通过-ssh-登录-fnos" aria-label="Permalink to &quot;通过 SSH 登录 fnOS&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">提示</p><ul><li>Windows 用户，可以使用系统自带的 <code>cmd</code>，或者第三方的 <code>putty</code> 等工具。</li><li>macOS 用户，可以使用系统自带的 <code>Terminal</code>，或者第三方的 <code>iTerm2</code> 等工具，</li><li>如果是首次 ssh 登录，需要输入 <code>yes</code> 确认。</li><li>如果提示需要输入密码，只能盲输，不会有提示，输完回车确认。</li></ul></div><p>打开你的电脑 <code>终端</code>，在终端中使用 <code>ssh</code> 登录 fnOS：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ssh 命令格式为: ssh [fnOS 用户名]@[fnOS IP 地址]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> slark@192.168.2.113</span></span></code></pre></div><p>使用 <code>sudo -i</code> 切换到 root 用户。</p><p><img src="https://img.slarker.me/wiki/KtM6vm_OpSjwA.png" alt="KtM6vm_OpSjwA"></p>`,
            17
          ),
        ])
    )
  );
}
const m = s(d, [["render", t]]);
export { S as __pageData, m as default };
