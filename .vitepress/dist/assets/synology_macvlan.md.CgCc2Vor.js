import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.Dx5AVRXu.js";const g=JSON.parse('{"title":"使用 macvlan 为 qBittorrent 设置独立 IP","description":"","frontmatter":{},"headers":[],"relativePath":"synology/macvlan.md","filePath":"synology/macvlan.md","lastUpdated":1719719434000}'),l={name:"synology/macvlan.md"},t=n(`<h1 id="使用-macvlan-为-qbittorrent-设置独立-ip" tabindex="-1">使用 macvlan 为 qBittorrent 设置独立 IP <a class="header-anchor" href="#使用-macvlan-为-qbittorrent-设置独立-ip" aria-label="Permalink to &quot;使用 macvlan 为 qBittorrent 设置独立 IP&quot;">​</a></h1><p>很多 PT 网站对盒子（就是专门用来刷上传的 VPS）有限制，如果群晖前面的主路由（比如 iStoreOS）上面配置了魔法工具，可能导致 BT/PT 流量也会走代理，从而被 PT 网站识别为盒子。比较好的解决这个问题的办法是在魔法软件上，通过端口或者 IP 来设置规则，来避免 PT 流量走代理。</p><p>但在有些魔法软件上面，并不支持针对端口来设置规则，只能针对 IP 来设置规则，好在为 Docker 设置独立的 IP 也不复杂。下面就介绍如何使用 macvlan 来给 qBittorrent 设置独立的 IP。</p><p>这篇教程虽然步骤比较多，但流程比较清晰。教程中涉及到的 IP 如下，为了尽量减少出错，你可以把自己的 IP 也都提前列出来，根据自己的实际情况来替换：</p><ul><li>主路由 IP：<code>192.168.2.1</code></li><li>群晖 IP：<code>192.168.2.164</code></li><li>独立的 qBittorrent IP：<code>192.168.2.101</code></li><li>macvlan 网桥：<code>192.168.2.102</code></li></ul><h2 id="启用-open-vswitch" tabindex="-1">启用 Open vSwitch <a class="header-anchor" href="#启用-open-vswitch" aria-label="Permalink to &quot;启用 Open vSwitch&quot;">​</a></h2><p>打开 <code>控制面板</code> -&gt; <code>网络</code> -&gt; <code>网络界面</code> -&gt; <code>管理</code> -&gt; <code>Open vSwitch 设置</code>，勾选 <code>启用 Open vSwitch</code> 并确定。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/XPjbNQ_D6FmC7.png" alt="XPjbNQ_D6FmC7"></p><p><a href="/synology/ssh.html">使用 SSH 登录</a> 群晖，并切换到 <code>root</code> 用户。查看群晖网络：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> addr</span></span></code></pre></div><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/yrMGvJ_PXa74H.png" alt="yrMGvJ_PXa74H"></p><p>可以看到，开启 <code>Open vSwitch</code> 之后，群晖通过一个名为 <code>ovs_eth0</code> 的网桥来连接网络。</p><h2 id="创建-macvlan-网络" tabindex="-1">创建 macvlan 网络 <a class="header-anchor" href="#创建-macvlan-网络" aria-label="Permalink to &quot;创建 macvlan 网络&quot;">​</a></h2><p>这里介绍下我的网络情况：主路由：<code>192.168.2.1</code>（主路由安装了魔法），其它设备都通过主路由上网，你可以根据自己的网络情况修改：</p><p>如果只需要 IPv4，创建 IPv4 macvlan 网络命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#创建一个名为 vlan 的 macvlan 网络，网关为主路由 192.168.2.1，子网为 192.168.2.0/24，ovs_eth0 为默认的网桥</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> network</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> macvlan</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --subnet=192.168.2.0/24</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --gateway=192.168.2.1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> parent=ovs_eth0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vlan</span></span></code></pre></div><p>如果需要 IPv6，创建 IPv4 + IPv6 macvlan 网络命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#创建一个名为 vlan 的 macvlan 网络，IPv4 网关为主路由 192.168.2.1，IPv4 子网为 192.168.2.0/24，IPv6 网关为 2408::1，IPv6 子网为 2408::/60，ovs_eth0 为默认的网桥</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> network</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> macvlan</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --subnet=192.168.2.0/24</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --gateway=192.168.2.1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --ipv6</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --subnet=2408::/60</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --gateway=2408::1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> parent=ovs_eth0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vlan</span></span></code></pre></div><p>创建好之后，可以使用下面的命令查看 docker 网络：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> network</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span></span></code></pre></div><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/khmw1rwv.ri0_kVxAoX.png" alt="khmw1rwv.ri0_kVxAoX"></p><p>也可以在群晖的 <code>Container Manager</code> 的网络中查看：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/RqaBH6_pSzO7r.png" alt="RqaBH6_pSzO7r"></p><p>如果需要删除创建的 macvlan 网络，可以使用下面的命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#vlan 为 macvlan 网络名称</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> network</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vlan</span></span></code></pre></div><h2 id="使用-docker-命令安装-qbittorrent" tabindex="-1">使用 docker 命令安装 qBittorrent <a class="header-anchor" href="#使用-docker-命令安装-qbittorrent" aria-label="Permalink to &quot;使用 docker 命令安装 qBittorrent&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">提示</p><ul><li>由于群晖 Container Manager 暂不支持添加额外的参数（比如 <code>--net</code>，<code>--ip</code>），所以只能通过命令安装 qBittorrent。</li><li>如果你之前装过套件版或者使用 Container Manager 安装了 qBittorrent，请先卸载，然后再用下面的命令重新安装。</li></ul></div><p>建好 macvlan 网络之后，就可以使用下面的命令来安装 qBittorrent 了。可以将下面命令中的 <code>端口</code> 和 <code>文件夹</code> 按需修改：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --name=qbittorrent</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --net=vlan</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --ip=192.168.2.101</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PUID=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PGID=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TZ=Asia/Shanghai</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> WEBUI_PORT=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8080</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TORRENTING_PORT=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 8080:8080</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 50000:50000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 50000:50000/udp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /volume1/docker/qbittorrent:/config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /volume1/downloads:/downloads</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unless-stopped</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  lscr.io/linuxserver/qbittorrent:latest</span></span></code></pre></div><p>这里的 <code>--net=vlan</code> 参数表示使用前面创建的 macvlan 网络，<code>--ip=192.168.2.101</code> 参数就是为 qBittorrent 设置的独立 IP，命令执行成功后，就可以用 <code>192.168.2.101:8080</code> 来访问 qBittorrent 了。</p><h2 id="解决宿主机与-macvlan-网络互通问题" tabindex="-1">解决宿主机与 macvlan 网络互通问题 <a class="header-anchor" href="#解决宿主机与-macvlan-网络互通问题" aria-label="Permalink to &quot;解决宿主机与 macvlan 网络互通问题&quot;">​</a></h2><p>为了安全起见，macvlan 禁止宿主机和容器直接通信。以我的群晖为例，qBittorrent 容器的 IP 为 <code>192.168.2.101</code>，宿主机群晖的 IP 为 <code>192.168.2.164</code>，那么宿主机和容器之间就无法通信。</p><p>在群晖里直接 ping qBittorrent 容器的 IP 就会失败：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/WdWJ4S_SFuiIA.png" alt="WdWJ4S_SFuiIA"></p><p>而使用网络中的其它设备 ping qBittorrent 容器的 IP 就可以成功：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/vZ8GrD_Gifmzm.png" alt="vZ8GrD_Gifmzm"></p><p>这就导致群晖上面装的其它应用也无法和 qBittorrent 容器通信。解决办法如下：</p><p>创建一个 macvlan 网桥，并设置静态 ip，这里设置为：<code>192.168.2.102</code>，设置路由，让宿主机（群晖 <code>192.168.2.164</code>）访问容器的数据经过 macvlan 网桥。命令如下：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vlan_bridge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ovs_eth0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> macvlan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mode</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bridge</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> addr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.2.102</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vlan_bridge</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vlan_bridge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> route</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.2.101</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vlan_bridge</span></span></code></pre></div><p>可以看到设置好 vlan_bridge 这个 macvlan 网桥之后，宿主机就可以访问 qBittorrent 容器了：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/vRysK0_TKjMPs.png" alt="vRysK0_TKjMPs"></p><h2 id="使用-systemd-管理-macvlan-服务" tabindex="-1">使用 systemd 管理 macvlan 服务 <a class="header-anchor" href="#使用-systemd-管理-macvlan-服务" aria-label="Permalink to &quot;使用 systemd 管理 macvlan 服务&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">注意</p><p>由于群晖各个版本对 Docker 服务的命名有所变化，所以下面的命令需要根据群晖系统版本进行修改。下面默认的命令均适用于 <code>DSM 7.2</code> 版本。</p><ul><li><code>DSM 7.2</code>：pkg-ContainerManager-dockerd.service</li><li><code>DSM 7.1</code>：pkg-Docker-dockerd.service</li><li><code>DSM 7.0</code>：pkgctl-Docker.service</li></ul></div><p>由于群晖开机会重置 macvlan 网络相关的设置，需要添加 <code>systemd</code> 服务（Systemd 是目前 Linux 系统上主要的系统守护进程管理工具）来管理 macvlan。在命令行中输入下面命令：</p><p>vi 命令基本操作可以参考：<a href="/synology/vi.html">vi 编辑器基本命令</a></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/lib/systemd/system/macvlan.service</span></span></code></pre></div><p>按 <code>i</code> 进入编辑模式，复制粘贴以下内容，作用是将启动、停止 macvlan 配置为 <code>systemd</code> 服务：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Unit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Description=Macvlan shim to allow docker to route to host</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Ensure macvlan is stopped if pkg-ContainerManager-dockerd.service stops/fails</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BindsTo=pkg-ContainerManager-dockerd.service</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Define dependency</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Requires=pkg-ContainerManager-dockerd.service</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Ensure order of startup</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">After=pkg-ContainerManager-dockerd.service</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Service</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Type=oneshot</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ExecStart=/bin/bash /usr/local/bin/macvlan_start.sh</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ExecStop=/bin/bash /usr/local/bin/macvlan_stop.sh</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RemainAfterExit=yes</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Restart=no</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Install</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Informs systemd to start macvlan after this service at startup</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">WantedBy=pkg-ContainerManager-dockerd.service</span></span></code></pre></div><p>完成后按 <code>esc</code>，输入<code>:wq</code>保存退出。</p><p>接下来再添加两个脚本：</p><ul><li><code>/usr/local/bin/macvlan_start.sh</code> 用来启动 macvlan</li><li><code>/usr/local/bin/macvlan_stop.sh</code> 用来停止 macvlan。</li></ul><p>编辑启动脚本：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/macvlan_start.sh</span></span></code></pre></div><p>内容如下：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 请根据自己的实际情况修改</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ip link add vlan_bridge link ovs_eth0 type macvlan mode bridge</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ip addr add 192.168.2.102 dev vlan_bridge</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ip link set vlan_bridge up</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ip route add 192.168.2.101 dev vlan_bridge</span></span></code></pre></div><p>编辑停止脚本：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/macvlan_stop.sh</span></span></code></pre></div><p>内容如下：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 请根据自己的实际情况修改</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ip route del 192.168.2.101 dev vlan_bridge || true</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ip link set vlan_bridge down || true</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ip addr del 192.168.2.102 dev vlan_bridge || true</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ip link del vlan_bridge || true</span></span></code></pre></div><p>启动脚本和停止脚本添加好之后，重载 <code>systemd</code> 服务：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> daemon-reload</span></span></code></pre></div><p>现在就可以使用 systemd 来管理 macvlan 服务了。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#开机启动</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> macvlan</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#取消开机启动</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> disable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> macvlan</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#开启 macvlan 服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> macvlan</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#停止 macvlan 服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> macvlan</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查看 macvlan 服务状态</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> macvlan</span></span></code></pre></div><p>执行 <code>systemctl enable macvlan</code> 设置开机启动后，可以重启群晖用上面的 <code>systemctl status macvlan</code> 查看 macvlan 服务是否正常（显示绿色 <code>active</code> 表示已经启动）。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/cniz6B_s2Lt9F.png" alt="cniz6B_s2Lt9F"></p><h2 id="设置访问控制" tabindex="-1">设置访问控制 <a class="header-anchor" href="#设置访问控制" aria-label="Permalink to &quot;设置访问控制&quot;">​</a></h2><p>现在 qbittorrent 已经有独立的 IP（192.168.2.101），那么我们就可以在软路由的魔法插件中设置访问控制了。以 iStoreOS 中的 SSRP 插件为例：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/jmDHb3_PXWTwU.png" alt="jmDHb3_PXWTwU"></p><p>如此，就可以避免 PT 流量走代理，从而被识别为盒子了。</p>`,69),e=[t];function p(h,k,d,c,r,o){return a(),i("div",null,e)}const y=s(l,[["render",p]]);export{g as __pageData,y as default};
