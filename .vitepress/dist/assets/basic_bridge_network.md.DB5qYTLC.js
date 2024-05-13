import{_ as s,c as e,o as t,a4 as i}from"./chunks/framework.BOW58p_D.js";const F=JSON.parse('{"title":"设置交换机模式","description":"","frontmatter":{},"headers":[],"relativePath":"basic/bridge_network.md","filePath":"basic/bridge_network.md","lastUpdated":1715586764000}'),a={name:"basic/bridge_network.md"},o=i(`<h1 id="设置交换机模式" tabindex="-1">设置交换机模式 <a class="header-anchor" href="#设置交换机模式" aria-label="Permalink to &quot;设置交换机模式&quot;">​</a></h1><h2 id="最常见的网络拓扑" tabindex="-1">最常见的网络拓扑 <a class="header-anchor" href="#最常见的网络拓扑" aria-label="Permalink to &quot;最常见的网络拓扑&quot;">​</a></h2><p>大部分情况下，我们的网络拓扑应该是这样的：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/synology_network.drawio_EiQOJh.svg" alt="synology_network.drawio_EiQOJh"></p><p>电脑和 NAS 都通过网线直连路由器，或者直连路由器下面的交换机。</p><p>使用这种最常见的网络拓扑，如果电脑有 2.5G/10G 网口，NAS 也有 2.5G/10G 网口，想让电脑和 NAS 之间可以跑满 2.5G/10G，那就要求路由器或者交换机至少需要两个 2.5G/10G 网口，分别把电脑和 NAS 的 2.5G/10G 网口插到路由器或者交换机的 2.5G/10G 网口，这样才能确保传输速度可以跑满 2.5G/10G 带宽。</p><h2 id="交换机模式" tabindex="-1">交换机模式 <a class="header-anchor" href="#交换机模式" aria-label="Permalink to &quot;交换机模式&quot;">​</a></h2><p>虽然上面这种网络拓扑最常见，也最简单，但对设备要求比较高，比如路由器或者交换机必须至少有两个 2.5G/10G 网口。目前带多个 2.5G 网口的交换机很多，也很便宜，但带多个 10G 网口的路由器或者交换机就比较贵，有没有更简单的办法来满足需求呢？</p><p>当然是有的，如果你的 NAS 有多个网口，可以在 NAS 上设置桥接，把 NAS 的 2.5G/10G 网口当成交换机来用，这样你的电脑就可以直接把 2.5G/10G 网口接到 NAS 的 2.5 G/10G 网口，既可以正常通过 NAS 来上网，也可以实现传输文件跑满带宽。 具体网络拓扑如下：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/synology_network.drawio3_egeUhs.svg" alt="synology_network.drawio3_egeUhs"></p><p>上图中的 NAS 具有一个千兆口，一个 2.5G/10G 网口，设置好交换机模式之后，把千兆口接到路由器上，2.5G/10G 网口和 <code>电脑 2</code> 的 2.5/10G 网口相连，这样电脑 2 就可以通过 NAS 上网，同时和 NAS 之间的传输速度也能达到 2.5G/10G 速度。</p><h2 id="群晖" tabindex="-1">群晖 <a class="header-anchor" href="#群晖" aria-label="Permalink to &quot;群晖&quot;">​</a></h2><p>以下面这台带千兆 + 双万兆网口的群晖为例，先把千兆网口接到路由器上。</p><h3 id="启用-open-vswitch" tabindex="-1">启用 Open vSwitch <a class="header-anchor" href="#启用-open-vswitch" aria-label="Permalink to &quot;启用 Open vSwitch&quot;">​</a></h3><p>打开 <code>控制面板</code> -&gt; <code>网络</code> -&gt; <code>网络界面</code> -&gt; <code>管理</code> -&gt; <code>Open vSwitch 设置</code>，勾选 <code>启用 Open vSwitch</code> 并确定。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/XPjbNQ_D6FmC7.png" alt="XPjbNQ_D6FmC7"></p><h3 id="查看当前网络" tabindex="-1">查看当前网络 <a class="header-anchor" href="#查看当前网络" aria-label="Permalink to &quot;查看当前网络&quot;">​</a></h3><p>在 <code>控制面板</code> -&gt; <code>网络</code> -&gt; <code>网络界面</code> 中可以看到当前的网络连接状态。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/upi5hb4s.oxh_KWdA4l.png" alt="upi5hb4s.oxh_KWdA4l"></p><p>前面已经说了，这台 NAS 上的网卡只有三个，分别是千兆和双口万兆。目前 NAS 只有千兆网卡连接了路由器，所以显示 <code>已联机</code> 的 <code>局域网 1</code> 就是千兆网卡，显示 <code>尚未联机</code> 的 <code>局域网 2</code> 和 <code>局域网 3</code> 就是两个万兆网卡。</p><h3 id="linux-中的网卡对应关系" tabindex="-1">Linux 中的网卡对应关系 <a class="header-anchor" href="#linux-中的网卡对应关系" aria-label="Permalink to &quot;Linux 中的网卡对应关系&quot;">​</a></h3><p><a href="/synology/ssh.html">使用 SSH 登录群晖</a>，并切换到 <code>root</code> 用户，使用下面的命令查看当前的网络配置：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ifconfig</span></span></code></pre></div><p>下面这张图是启用 <code>Open vSwitch</code> 之前的网络配置：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/1mlkyale.ev2_qnqpGe.png" alt="1mlkyale.ev2_qnqpGe"></p><p>下面这张图是启用 <code>Open vSwitch</code> 之后的网络配置：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/FMTgqF_epmJyh.png" alt="FMTgqF_epmJyh"></p><p>通过网卡 IP 可以判断，上面两张图中，eth0 就是千兆网卡，eth1 和 eth2 就是两个万兆网卡。对比可以看到，启用 <code>Open vSwitch</code> 之前，NAS 直接通过千兆物理网卡上网。启用 <code>Open vSwitch</code> 之后，系统为每个物理网卡分别生成并绑定了一个虚拟的交换机（<code>ovs_eth0</code>，<code>ovs_eth1</code>，<code>ovs_eth2</code>），而现在的联网方式变成了通过这个虚拟交换机 <code>ovs_eth0</code> 上网。</p><p>网卡、虚拟交换机之间的对应关系如下表：</p><table><thead><tr><th><code>网络界面</code> 中显示的网络</th><th style="text-align:center;">ifconfig 命令显示的对应网卡</th><th style="text-align:center;">绑定的虚拟交换机</th><th style="text-align:right;">物理网卡</th></tr></thead><tbody><tr><td>局域网 1</td><td style="text-align:center;">eth0</td><td style="text-align:center;">ovs_eth0</td><td style="text-align:right;">千兆网卡</td></tr><tr><td>局域网 2</td><td style="text-align:center;">eth1</td><td style="text-align:center;">ovs_eth1</td><td style="text-align:right;">万兆网卡 1</td></tr><tr><td>局域网 3</td><td style="text-align:center;">eth2</td><td style="text-align:center;">ovs_eth2</td><td style="text-align:right;">万兆网卡 2</td></tr></tbody></table><h3 id="设置虚拟交换机" tabindex="-1">设置虚拟交换机 <a class="header-anchor" href="#设置虚拟交换机" aria-label="Permalink to &quot;设置虚拟交换机&quot;">​</a></h3><p>我们需要做的就是将 <code>万兆网卡 1</code> 和 <code>万兆网卡 2</code> 绑定的虚拟交换机删掉，然后把 <code>万兆网卡 1</code> 和 <code>万兆网卡 2</code> 都添加到千兆网卡绑定的虚拟交换机 <code>ovs_eth0</code> 中，这样这三个网口就都可以通过 <code>ovs_eth0</code> 这个虚拟交换机来上网，也就实现了交换机模式。</p><p>使用下面的命令来删除绑定的虚拟交换机：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除万兆网卡 1 绑定的虚拟交换机 ovs_eth1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ovs-vsctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> del-br</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ovs_eth1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除万兆网卡 2 绑定的虚拟交换机 ovs_eth2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ovs-vsctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> del-br</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ovs_eth2</span></span></code></pre></div><p>删除之后可以重新使用 <code>ifconfig</code> 查看下当前的网络配置：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/z1ncz00g.qok_X6wJQM.png" alt="z1ncz00g.qok_X6wJQM"></p><p>可以看到，<code>ovs_eth1</code> 和 <code>ovs_eth2</code> 已经被删除了，下面我们把 <code>eth1</code> 和 <code>eth2</code> 这两个万兆网卡添加到 <code>ovs_eth0</code> 中：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ovs-vsctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add-port</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ovs_eth0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eth1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ovs-vsctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add-port</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ovs_eth0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eth2</span></span></code></pre></div><p>添加好之后，使用下面的命令来查看虚拟交换机配置：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ovs-vsctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span></span></code></pre></div><p>可以看到 <code>ovs_eth0</code> 中已经包含了 <code>eth0</code>，<code>eth1</code>，<code>eth2</code> 这三个网卡，说明交换机模式已经设置成功了。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/rzeksrx1.zvi_REiPLE.png" alt="rzeksrx1.zvi_REiPLE"></p><p>现在你就可以把电脑直接接到 NAS 的万兆网卡上，电脑使用 <code>DHCP</code> 的模式就可以自动从路由器获取到 IP 上网。在电脑的网络属性中，也可以看到网络的链接速度是 <code>10G</code>。</p><p>最后，用一张图来总结下涉及到的操作。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/ovs_switch2.drawio_KwKBr1.svg" alt="ovs_switch2.drawio_KwKBr1"></p><h3 id="开机脚本" tabindex="-1">开机脚本 <a class="header-anchor" href="#开机脚本" aria-label="Permalink to &quot;开机脚本&quot;">​</a></h3><p>由于群晖重启后，会将上面的设置都恢复成默认的 <code>Open vSwitch</code> 绑定关系。如果上面的操作都确定没问题，我们这里需要添加一个开机脚本来自动完成上面的设置。</p><p>在 <code>控制面板</code> -&gt; <code>任务计划</code> -&gt; <code>新增</code> -&gt; <code>触发的任务</code> -&gt; <code>用户定义的脚本</code> 中设置任务名称为 <code>ovs</code>，切换用户账号为 <code>root</code> 用户。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/xns9xs_7h9Fqn.png" alt="xns9xs_7h9Fqn"></p><p>切换到任务设置，填写上面设置虚拟交换机的命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sleep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 60</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ovs-vsctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> del-br</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ovs_eth1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ovs-vsctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> del-br</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ovs_eth2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ovs-vsctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add-port</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ovs_eth0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eth1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ovs-vsctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add-port</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ovs_eth0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eth2</span></span></code></pre></div><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/3voWYT_5I1Xcm.png" alt="3voWYT_5I1Xcm"></p><p>设置好之后点击 <code>确定</code>，出现系统提示再次 <code>确定</code> 之后输入密码提交。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/x95OJE_KboTMf.png" alt="x95OJE_KboTMf"></p><p>可以重启系统测试下是否 OK。</p><h2 id="unraid" tabindex="-1">Unraid <a class="header-anchor" href="#unraid" aria-label="Permalink to &quot;Unraid&quot;">​</a></h2><p>Unraid 的设置方法比较简单，默认情况下，Unraid 会将所有网口都绑定到 eth0 接口：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/utvpGD_5Ow2NU.png" alt="utvpGD_5Ow2NU"></p><p>这里把 <code>启用绑定</code> 改为 <code>否</code>，<code>启用桥接</code> 改为 <code>是</code>，在 <code>桥接其成员 br0</code> 勾选所有网口：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/CqmR8F_Bm2cnU.png" alt="CqmR8F_Bm2cnU"></p><p>然后点击应用即可，设置生效后，如果 eth0 接口默认是 DHCP 自动获取 IP，此时 IP 地址可能会有变化，可以到路由器后台查找新的 IP。</p>`,61),h=[o];function l(d,p,n,c,r,k){return t(),e("div",null,h)}const v=s(a,[["render",l]]);export{F as __pageData,v as default};
