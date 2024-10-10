import {
  _ as a,
  c as i,
  a2 as n,
  o as p,
} from "./chunks/framework.eme8ZeBJ.js";
const k = JSON.parse(
    '{"title":"UPS - NAS 的好搭档","description":"","frontmatter":{},"headers":[],"relativePath":"basic/ups.md","filePath":"basic/ups.md","lastUpdated":1726325703000}'
  ),
  t = { name: "basic/ups.md" };
function e(l, s, h, c, o, d) {
  return (
    p(),
    i(
      "div",
      null,
      s[0] ||
        (s[0] = [
          n(
            `<h1 id="ups-nas-的好搭档" tabindex="-1">UPS - NAS 的好搭档 <a class="header-anchor" href="#ups-nas-的好搭档" aria-label="Permalink to &quot;UPS - NAS 的好搭档&quot;">​</a></h1><p><img src="https://img.slarker.me/wiki/pexels-cookiecutter-11488_QhaS7q.jpg" alt="pexels-cookiecutter-11488_QhaS7q"></p><p>机械硬盘成本在 NAS 里肯定算是大头，同时机械硬盘在 NAS 的所有部件里也是最脆弱的，异常断电对机械硬盘造成的危害不小，我见过不少因为异常断电导致硬盘损坏丢数据的用户。基于这些惨痛的教训，有必要为 NAS 配一个不间断电源，也就是 UPS。一个 UPS 也就几百块，对于 NAS 整机成本来说影响很小，却可以很大程度保障你的 NAS 安全，因此非常推荐购买。</p><p>首先需要说明一点，UPS 的存在并不是为了让你的设备能够一直持续在开机状态工作，而是为了让你的设备在市电中断后，能够有足够的时间来完成关机动作，避免意外断电对你的设备造成损坏。家用 UPS 基本上都配备了一根 USB 信号线，以便在市电中断时通知需要关机的设备。</p><h2 id="nas-都支持-ups-吗" tabindex="-1">NAS 都支持 UPS 吗？ <a class="header-anchor" href="#nas-都支持-ups-吗" aria-label="Permalink to &quot;NAS 都支持 UPS 吗？&quot;">​</a></h2><p>群晖，Unraid 或者是使用 PVE 安装的 All in one 都支持 UPS，只要购买带有 USB 接口的 UPS 就可以。</p><h2 id="买什么样的-ups-合适" tabindex="-1">买什么样的 UPS 合适？ <a class="header-anchor" href="#买什么样的-ups-合适" aria-label="Permalink to &quot;买什么样的 UPS 合适？&quot;">​</a></h2><p>你可以根据自己的 NAS 的实际功耗来选择 UPS，像是山特 TG-Box 600 已经够绝大多数 NAS 设备使用了。以山特 TG-Box 600 为例，如果你的 NAS 功耗是 100W，那么 UPS 可以坚持 10 分钟，这足够你的 NAS 完成关机动作了。</p><p><img src="https://img.slarker.me/wiki/ipDxB9_BifmXo.png" alt="ipDxB9_BifmXo"></p><h2 id="unraid-配置-ups" tabindex="-1">Unraid 配置 UPS <a class="header-anchor" href="#unraid-配置-ups" aria-label="Permalink to &quot;Unraid 配置 UPS&quot;">​</a></h2><p>Unraid 的 UPS 设置非常简单，把 UPS 的 USB 线接入 Unraid，就可以在 <code>设置 -&gt; UPS 设置</code> 中配置：</p><p><img src="https://img.slarker.me/wiki/2GGO8X_XyxJWn.png" alt="2GGO8X_XyxJWn"></p><h2 id="群晖配置-ups" tabindex="-1">群晖配置 UPS <a class="header-anchor" href="#群晖配置-ups" aria-label="Permalink to &quot;群晖配置 UPS&quot;">​</a></h2><p>群晖 的 UPS 设置也很简单，把 UPS 的 USB 线接入群晖，到 <code>控制面板</code> -&gt; <code>硬件和电源</code> -&gt; <code>不断电系统</code> 中勾选 <code>启用 UPS 支持</code>，在 UPS 类型中选择 <code>USB UPS</code> 点击应用即可。</p><p>点击 <code>设备信息</code> 就能看到 UPS 信息。</p><p><img src="https://img.slarker.me/wiki/hJMYNo_5gx0MR.png" alt="hJMYNo_5gx0MR"></p><h2 id="fnos-配置-ups" tabindex="-1">fnOS 配置 UPS <a class="header-anchor" href="#fnos-配置-ups" aria-label="Permalink to &quot;fnOS 配置 UPS&quot;">​</a></h2><p>fnOS 配置 UPS 可以查看教程：<a href="/fnos/ups.html">fnOS 配置 UPS</a>。</p><h2 id="如何让一台-ups-支持多台设备" tabindex="-1">如何让一台 UPS 支持多台设备 <a class="header-anchor" href="#如何让一台-ups-支持多台设备" aria-label="Permalink to &quot;如何让一台 UPS 支持多台设备&quot;">​</a></h2><p>目前市面上的 UPS 基本只带了一根 USB 信号线，那么如果有两台设备，能否同时使用 USB 来接到 UPS 呢？一个开脑洞的想法是买一根 1 分 2 的 USB 线，把两台设备都同时接到 UPS 上，不过经过搜索后发现，已经有网友试过了，这种办法并不可行。</p><p>另一种可行的办法是看这两个 UPS 是否都支持 nut，比如群晖，Unraid 都支持，像是极空间就不支持。如果都支持的话，那就可以把其中一台（A）接到 UPS 上，并设置为 nut 网络服务器，另一台（B）作为 nut 客户端，这样等市电中断时，A 可以从 UPS 获取到断电信号，并把这个消息发送给 B，这样 A 和 B 就都可以做到正常关机。</p><p>用上面这个办法也可以做到让使用 PVE 安装的群晖虚拟机也能够使用 UPS。在逻辑上，PVE 和群晖是两台设备，可以将 USB 接口的 UPS 通过虚拟机添加到群晖里，并将群晖设置为 nut 服务器，在 PVE 里设置 nut 作为客户端，这样群晖和 PVE 就都可以正常关机。</p><h2 id="pve-配置-ups" tabindex="-1">PVE 配置 UPS <a class="header-anchor" href="#pve-配置-ups" aria-label="Permalink to &quot;PVE 配置 UPS&quot;">​</a></h2><p>首先将 UPS 的 USB 添加到群晖里。</p><p><img src="https://img.slarker.me/wiki/1rkxupwb.hgn_SY701G.png" alt="1rkxupwb.hgn_SY701G"></p><p>启动群晖，先按上面的 <code>群晖配置 UPS</code> 部分设置完成，再勾选 <code>启用网络 UPS 服务器</code>，并在允许的 Synology NAS 设备中，填入 PVE 的 IP 地址后点击 <code>应用</code>。</p><p><img src="https://img.slarker.me/wiki/3ycmlzty.2br_vMgfeA.png" alt="3ycmlzty.2br_vMgfeA"></p><p>上面已经设置好了群晖作为 nut 服务器，接下来设置 PVE 作为 nut 客户端就可以了。</p><p>打开 PVE 的 shell，依次输入下面的命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装 nut</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nut</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 编辑 nut</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nano</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/nut/nut.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 光标移动到 MODE=none 处，将 none 修改为 netclient，之后按 Ctrl + X，输入 Y 保存退出</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MODE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">netclient</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 编辑 upsmon</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nano</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/nut/upsmon.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将下面的配置粘贴到单独的一行里，将 nas的ip 替换为你的 nas ip ，之后按 Ctrl + X，输入 Y 保存退出</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MONITOR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ups@nas的ip</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upsmon</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pass</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> slave</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动 nut-client 服务，并设置开机自启</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nut-client</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nut-client</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置好之后，可以测试 ups 连接是否正常</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">upsc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ups@nas的ip</span></span></code></pre></div><p><img src="https://img.slarker.me/wiki/0uo1xqpa.uhx_v6pUS6.png" alt="0uo1xqpa.uhx_v6pUS6"></p>`,
            31
          ),
        ])
    )
  );
}
const u = a(t, [["render", e]]);
export { k as __pageData, u as default };
