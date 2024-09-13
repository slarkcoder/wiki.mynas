import{_ as a,c as i,a2 as n,o as t}from"./chunks/framework.BsQYyOtK.js";const r=JSON.parse('{"title":"方便、安全远程访问 fnOS - Tailscale","description":"","frontmatter":{},"headers":[],"relativePath":"fnos/tailscale.md","filePath":"fnos/tailscale.md","lastUpdated":1726060699000}'),e={name:"fnos/tailscale.md"};function p(l,s,o,c,h,d){return t(),i("div",null,s[0]||(s[0]=[n(`<h1 id="方便、安全远程访问-fnos-tailscale" tabindex="-1">方便、安全远程访问 fnOS - Tailscale <a class="header-anchor" href="#方便、安全远程访问-fnos-tailscale" aria-label="Permalink to &quot;方便、安全远程访问 fnOS - Tailscale&quot;">​</a></h1><p><img src="https://img.slarker.me/wiki/202409112116836.jpg" alt=""></p><p>fnOS 官方自带远程访问，应对基本的小流量需求应该没啥问题，但如果是需要高带宽的场景，使用人数过多的话，官方提供的中转服务可能也撑不住，所以推荐使用 ipv6 来远程访问。除了 ipv6 之外，也有很多其它的选择，比如 Zerotier，Tailscale，星空组网等等，都很不错，可以作为替代方案。本篇将介绍如何使用 Tailscale 远程访问 fnOS。</p><div class="info custom-block"><p class="custom-block-title">提示</p><p>Tailscale，Zerotier，星空组网的组网逻辑都类似，都是首先尝试是否能够 P2P 直连（打洞）成功，如果无法直连，就会走中转服务器。</p></div><h2 id="获取-auth-key" tabindex="-1">获取 Auth key <a class="header-anchor" href="#获取-auth-key" aria-label="Permalink to &quot;获取 Auth key&quot;">​</a></h2><p>注册登录 <a href="https://tailscale.com/" target="_blank" rel="noreferrer">Tailscale</a>，依次点击 <code>Machines</code> -&gt; <code>Add device</code> -&gt; <code>Linux Server</code> -&gt; <code>Generate install script</code> 获取 <code>Auth key</code>。</p><p><img src="https://img.slarker.me/wiki/202409111605371.png" alt=""></p><p>复制截图中 <code>--auth-key=</code> 后面的 <code>Auth key</code> 字符串备用。</p><h2 id="fnos-安装-tailscale" tabindex="-1">fnOS 安装 Tailscale <a class="header-anchor" href="#fnos-安装-tailscale" aria-label="Permalink to &quot;fnOS 安装 Tailscale&quot;">​</a></h2><p>在 fnOS 中，可以用 <code>Compose</code> 安装 Tailscale。首先 <a href="/fnos/ssh.html">使用 SSH 登录</a> fnOS，使用下面的命令建立所需文件夹：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /vol1/1000/docker/tailscale/var/lib</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /vol1/1000/docker/tailscale/dev/net</span></span></code></pre></div><p>在 Docker 中新增 Compose 项目：</p><p><img src="https://img.slarker.me/wiki/202409111638034.png" alt=""></p><p>名称填写 <code>tailscale</code>，路径选择 <code>/vol1/1000/docker/tailscale</code>，来源选择 <code>创建 docker-compose.yml</code>，内容如下：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;3.7&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    tailscale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tailscale</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/vol1/1000/docker/tailscale/var/lib:/var/lib</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/vol1/1000/docker/tailscale/dev/net/tun:/dev/net/tun</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        network_mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">host</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">unless-stopped</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TS_AUTHKEY=</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #填上一步生成的 Auth key</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TS_EXTRA_ARGS=--advertise-exit-node</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TS_ROUTES=192.168.xx.0/24</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #把xx替换成自己网关的网段</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TS_HOSTNAME=xx</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #把xx替换成自己喜欢的名字，比如 fnOS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TS_STATE_DIR=./state/</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tailscale/tailscale</span></span></code></pre></div><ul><li>TS_AUTHKEY：填写上一步生成的 <code>Auth key</code>。</li><li>TS_ROUTES：填写 fnOS 所在的网段，比如 fnOS IP 为 <code>192.168.2.22</code>，TS_ROUTES 就填 <code>192.168.2.0/24</code>。</li><li>TS_HOSTNAME：填写自己喜欢的名字，比如 fnOS。</li></ul><p>勾选 <code>创建项目后立即启动</code>，确认没问题，点击 <code>完成</code>，<code>tailscale</code> 很快就能启动。</p><h2 id="授权设置" tabindex="-1">授权设置 <a class="header-anchor" href="#授权设置" aria-label="Permalink to &quot;授权设置&quot;">​</a></h2><p>登录到 <a href="https://login.tailscale.com/" target="_blank" rel="noreferrer">tailscale 网站</a> 后台，可以看到 fnOS 这台设备已经连上了，可以看到 <code>Subnets</code> 旁边有叹号提示：</p><p><img src="https://img.slarker.me/wiki/202409111648080.png" alt=""></p><p>点击设备名称进入设备详情页批准（Approval）：</p><p><img src="https://img.slarker.me/wiki/202409111651655.png" alt=""></p><p>勾选网段，点击 <code>Save</code>。</p><p><img src="https://img.slarker.me/wiki/202409111649891.png" alt=""></p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>这里还有个 <code>Exit node</code> 的选项，可以到文章末尾看看介绍，如果有需要可以勾选。</p></div><h2 id="手机-app" tabindex="-1">手机 App <a class="header-anchor" href="#手机-app" aria-label="Permalink to &quot;手机 App&quot;">​</a></h2><p>Tailscale App 比较简单，使用同样的账号登录 App，需要远程访问 NAS 的时候，打开 App 里的开关就能连上了。</p><p>连上之后，依然使用 fnOS 的 <code>局域网 IP</code> 来访问 fnOS，不需要考虑端口映射问题，相比使用公网 IP，不要暴露任何端口到公网，更加安全。</p><h2 id="测速" tabindex="-1">测速 <a class="header-anchor" href="#测速" aria-label="Permalink to &quot;测速&quot;">​</a></h2><p>手机远程连上之后，可以访问 NAS 上的测速工具测试网络连接速度。</p><p><img src="https://img.slarker.me/wiki/202409111746274.jpg" alt=""></p><p>延迟（473ms）比较高，速度也很慢。</p><h2 id="使用中继" tabindex="-1">使用中继 <a class="header-anchor" href="#使用中继" aria-label="Permalink to &quot;使用中继&quot;">​</a></h2><p><code>Tailscale</code> 官方的服务器使用的人比较多，国内连接速度比较慢，所以如果无法直连的话，可以尝试使用自建中继。自建教程可以 <a href="https://cqjn.cc/archives/1719844788120" target="_blank" rel="noreferrer">参考这里</a>。</p><p>建好之后，在 <code>Tailscale</code> 后台的 <code>Access controls</code> 中，<code>&quot;ssh&quot;</code> 前面添加下面的内容（需要按提示修改相关信息）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;derpMap&quot;: {</span></span>
<span class="line"><span>		// OmitDefaultRegions 用来忽略官方的中继节点</span></span>
<span class="line"><span>		&quot;OmitDefaultRegions&quot;: true,</span></span>
<span class="line"><span>		&quot;Regions&quot;: {</span></span>
<span class="line"><span>			// 这里的 901 从 900 开始随便取数字</span></span>
<span class="line"><span>			&quot;901&quot;: {</span></span>
<span class="line"><span>				// RegionID 和上面的相等</span></span>
<span class="line"><span>				&quot;RegionID&quot;: 901,</span></span>
<span class="line"><span>				// RegionCode，RegionName 自己取个易于自己名字</span></span>
<span class="line"><span>				&quot;RegionCode&quot;: &quot;1&quot;,</span></span>
<span class="line"><span>				&quot;RegionName&quot;: &quot;RegionName&quot;,</span></span>
<span class="line"><span>				&quot;Nodes&quot;: [</span></span>
<span class="line"><span>					{</span></span>
<span class="line"><span>						// Name 保持 1不动</span></span>
<span class="line"><span>						&quot;Name&quot;: &quot;1&quot;,</span></span>
<span class="line"><span>						// 这个也和 RegionID 一样</span></span>
<span class="line"><span>						&quot;RegionID&quot;: 901,</span></span>
<span class="line"><span>						// 中继服务器域名</span></span>
<span class="line"><span>						&quot;HostName&quot;: &quot;xxx.xxx.com&quot;,</span></span>
<span class="line"><span>						// 端口号,如果上方derp安装一致则无需改动</span></span>
<span class="line"><span>						&quot;DERPPort&quot;: 443,</span></span>
<span class="line"><span>						&quot;STUNPort&quot;: 3478,</span></span>
<span class="line"><span>					},</span></span>
<span class="line"><span>				],</span></span>
<span class="line"><span>			},</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>	},</span></span></code></pre></div><p>添加好之后点击 <code>Save</code>。</p><p><img src="https://img.slarker.me/wiki/202409111723252.png" alt=""></p><p>如果想要确认 fnOS 是否连上了中继服务器，在 fnOS 中，进入 tailscale 容器的终端：</p><p><img src="https://img.slarker.me/wiki/202409111727552.png" alt=""></p><p>输入命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tailscale</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> netcheck</span></span></code></pre></div><p>就能看到结果，如图中继延迟只有 <code>44.6ms</code>。</p><p><img src="https://img.slarker.me/wiki/202409111731691.png" alt=""></p><p>此时在手机上再次测速，速度会好很多：</p><p><img src="https://img.slarker.me/wiki/202409111747412.jpg" alt=""></p><h2 id="网络出口节点-exit-node" tabindex="-1">网络出口节点 <code>Exit node</code> <a class="header-anchor" href="#网络出口节点-exit-node" aria-label="Permalink to &quot;网络出口节点 \`Exit node\`&quot;">​</a></h2><p>Tailscale 还有个很厉害的功能，那就是可以指定一个设备作为 <code>Exit node</code>。意思就是把其它设备的网络流量转发到这个设备，然后由这个设备作为整个虚拟局域网的网络出口。</p><p>举个例子：将 fnOS 设置为 <code>Exit node</code>，并且在手机端也开启 fnOS 作为 <code>Exit node</code>，手机的访问请求，会先转发到家里的 fnOS 设备，然后通过家里的宽带网络来上网。</p><p><img src="https://img.slarker.me/wiki/202409111753183.png" alt=""></p>`,50)]))}const g=a(e,[["render",p]]);export{r as __pageData,g as default};