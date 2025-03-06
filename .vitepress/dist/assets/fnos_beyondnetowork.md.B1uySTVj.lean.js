import{_ as a,c as i,a2 as e,o as n}from"./chunks/framework.eme8ZeBJ.js";const c=JSON.parse('{"title":"远程访问 fnOS - 比扬云 SD-WAN 组网","description":"","frontmatter":{},"headers":[],"relativePath":"fnos/beyondnetowork.md","filePath":"fnos/beyondnetowork.md","lastUpdated":1741252398000}'),t={name:"fnos/beyondnetowork.md"};function p(l,s,h,o,r,k){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="远程访问-fnos-比扬云-sd-wan-组网" tabindex="-1">远程访问 fnOS - 比扬云 SD-WAN 组网 <a class="header-anchor" href="#远程访问-fnos-比扬云-sd-wan-组网" aria-label="Permalink to &quot;远程访问 fnOS - 比扬云 SD-WAN 组网&quot;">​</a></h1><p><a href="https://dash.beyondnetwork.net/" target="_blank" rel="noreferrer">比扬云 SD-WAN 组网</a> 是一个虚拟组网工具，和星空组网以及国外的 zerotier，tailscale 类似，可以将你分散在各地的设备连接起来，组成一个虚拟的网络，便于远程访问。</p><p>比扬云 SD-WAN 服务家庭版免费使用，提供最多 5 个员工账号，并且不限速，支持创建自定义网段，对于家庭用户来说非常合适，而且足够使用。加上基于虚拟 VPN 的方式来提供连接，相对于使用公网 IP 需要对外暴露端口，这种组网方式也显得比较安全。</p><p>本篇就以 fnOS 为例介绍如何使用比扬云 SD-WAN。</p><div class="warning custom-block"><p class="custom-block-title">提示</p><p>由于这种组网技术依赖于官方的服务器，所以你的远程访问有可能走的是中转服务器，目前比扬云官方也提供了免费的中转服务器，为了避免滥用资源，请注意官方的提示：</p><p><code>为了营造良好的体验环境，请不要长时间占用大带宽，否则会触发小黑屋机制进行限速</code>。</p></div><h2 id="创建虚拟网络" tabindex="-1">创建虚拟网络 <a class="header-anchor" href="#创建虚拟网络" aria-label="Permalink to &quot;创建虚拟网络&quot;">​</a></h2><p>首先打开<a href="https://dash.beyondnetwork.net/" target="_blank" rel="noreferrer">比扬云控制台</a>，注册账号。登录后到 <code>SD-WAN 组网</code> 下面的 <code>我的网络</code> 中创建 <code>虚拟网络</code>，<code>名称</code> 自己起一个，这里我填的 <code>slark 的网络</code>。</p><p><img src="https://img.slarker.me/wiki/20250306144731218.webp" alt=""></p><h2 id="添加站点" tabindex="-1">添加站点 <a class="header-anchor" href="#添加站点" aria-label="Permalink to &quot;添加站点&quot;">​</a></h2><p>在 <code>站点管理</code> 中选择上一步创建的网络，点击 <code>添加站点</code>。这一步的作用就是要把 NAS 加到网络里。</p><p><img src="https://img.slarker.me/wiki/20250306145219631.webp" alt=""></p><p>站点名称这里我直接填 <code>fnOS</code>。网络选择创建好的虚拟网络，站点网段填 fnOS 所在的网段。比如我的 fnOS IP 是：<code>192.168.2.2</code>，那这里网段就填：<code>192.168.2.0/24</code>。</p><blockquote><p>支持自定义网段的好处就是你可以不需要在各种网络环境中来回修改 IP 地址，如果你之前用过星空组网就能体会到这一点。</p></blockquote><h2 id="激活站点" tabindex="-1">激活站点 <a class="header-anchor" href="#激活站点" aria-label="Permalink to &quot;激活站点&quot;">​</a></h2><p>添加站点之后你可以看到一个 <code>站点标识</code>，接下来要 <code>激活站点</code>。也就是要在 NAS 里运行一个 docker 应用，通过这个 docker 应用把 <code>fnOS</code> 连到虚拟网络里。</p><p><img src="https://img.slarker.me/wiki/20250306145915091.webp" alt=""></p><p>在飞牛中使用下面的 compose 配置来安装 docker 应用：</p><div class="info custom-block"><p class="custom-block-title">提示</p><p>请把 xxxx 替换为自己的 <code>站点标识</code></p></div><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">beyondnetwork</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    edge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">beyondnetwork_edge</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        privileged</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        network_mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">host</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        dns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8.8.8.8</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">114.114.114.114</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 请把 xxxx 替换为自己的 站点标识</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EDGE_KEY=xxxx</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">registry.cn-shenzhen.aliyuncs.com/beyondnetwork/edge</span></span></code></pre></div><p>Compose 安装完成之后，可以在控制台里看到状态变成了 <code>在线</code>。</p><h2 id="员工账号" tabindex="-1">员工账号 <a class="header-anchor" href="#员工账号" aria-label="Permalink to &quot;员工账号&quot;">​</a></h2><p>最后添加员工账号，这个 <code>员工账号</code> 就是用来在客户端登录的账号，你可以按自己的实际需求，给每个家庭成员创建一个 <code>员工账号</code>。需要远程访问的时候，就打开客户端，使用员工账号登录。</p><p><a href="https://dash.beyondnetwork.net/console/sdwan/download" target="_blank" rel="noreferrer">下载比扬云了 SD-WAN 客户端</a>。</p><p>登录之后，你就可以像在家里的局域网中一样，来连接使用 NAS 了，不管是通过网页，还是飞牛 App，都可以直接访问，而且速度非常不错。</p><p><img src="https://img.slarker.me/wiki/Screenshot_2025-03-06-15-10-21-902_com.android.chrome.webp" alt=""></p>`,25)]))}const E=a(t,[["render",p]]);export{c as __pageData,E as default};
