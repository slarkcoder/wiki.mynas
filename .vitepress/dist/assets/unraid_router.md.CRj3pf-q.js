import{_ as a,c as r,a2 as t,o as i}from"./chunks/framework.eme8ZeBJ.js";const m=JSON.parse('{"title":"一文搞定 Unraid 安装软路由","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/router.md","filePath":"unraid/router.md","lastUpdated":1728523562000}'),p={name:"unraid/router.md"};function o(s,e,d,n,l,c){return i(),r("div",null,e[0]||(e[0]=[t('<h1 id="一文搞定-unraid-安装软路由" tabindex="-1">一文搞定 Unraid 安装软路由 <a class="header-anchor" href="#一文搞定-unraid-安装软路由" aria-label="Permalink to &quot;一文搞定 Unraid 安装软路由&quot;">​</a></h1><p>本文以 <a href="https://fw.koolcenter.com/iStoreOS/x86_64/" target="_blank" rel="noreferrer">iStoreOS</a> 为例来介绍如何在 Unraid 中安装软路由。IStoreOS 基于 OpenWrt 开发，在易用性上做了很多优化，系统支持在线更新。</p><p>由于是国内公司开发的系统，默认并不含有代理功能。如有代理需求，可以看这里：</p><p><a href="/basic/question.html#istoreos代理插件到哪里下载">iStoreOS 代理插件到哪里下载？</a></p><h2 id="各种常见网络拓扑的区别" tabindex="-1">各种常见网络拓扑的区别 <a class="header-anchor" href="#各种常见网络拓扑的区别" aria-label="Permalink to &quot;各种常见网络拓扑的区别&quot;">​</a></h2><p>在安装软路由之前，可以先仔细看看下面这个图，了解各种网络拓扑的区别。</p><p><img src="https://img.slarker.me/wiki/main_router.drawio_9x2DFh.svg" alt="main_router.drawio_9x2DFh"></p><h2 id="旁路由-单网口" tabindex="-1">旁路由（单网口） <a class="header-anchor" href="#旁路由-单网口" aria-label="Permalink to &quot;旁路由（单网口）&quot;">​</a></h2><p>如果你的设备只有一个网口，那可以设置为旁路由。</p><p>因为我们装的 iStoreOS 只有一个虚拟网卡，开机后会自动从主路由获取 IP 地址。</p><p><img src="https://img.slarker.me/wiki/P5fuml_LHABaf.png" alt="P5fuml_LHABaf"></p><p>浏览器打开该 IP，就可以登录旁路由了。默认用户名/密码：root/password。</p><p>登录之后，直接点击首页的网络向导，设置为旁路由模式。</p><p><img src="https://img.slarker.me/wiki/si1yxa1r.ke0_ncNe0K.png" alt="si1yxa1r.ke0_ncNe0K"></p><p>点击 <code>配置为旁路由</code>。</p><p><img src="https://img.slarker.me/wiki/BXn4qF_39KVlS.png" alt="BXn4qF_39KVlS"></p><p>可以直接点 <code>自动配置</code>。</p><p><img src="https://img.slarker.me/wiki/pbi1225x.sig_qD2m9X.png" alt="pbi1225x.sig_qD2m9X"></p><p>点击 <code>点此刷新</code>，会自动刷新当前连接信息，点击 <code>自动填写</code>。</p><p><img src="https://img.slarker.me/wiki/0qsqklj0.le0_yaUwUg.png" alt="0qsqklj0.le0_yaUwUg"></p><p>如果需要修改旁路由 IP，可以在这里修改，关闭 <code>提供 DHCPv4 服务</code>，打开 <code>开启 NAT</code>，最后点击 <code>保存配置</code>。</p><p><img src="https://img.slarker.me/wiki/hs35odhz.4ej_49Iqxd.png" alt="hs35odhz.4ej_49Iqxd"></p><p>到这里旁路由就设置好了。</p><p>设置完成之后，将 Unraid 的默认网关和 DNS 服务器都修改为旁路由的 IP，Unraid 就可以通过旁路由来上网了。</p><h2 id="主路由-多网口" tabindex="-1">主路由（多网口） <a class="header-anchor" href="#主路由-多网口" aria-label="Permalink to &quot;主路由（多网口）&quot;">​</a></h2><p>如果你的设备有多个网口，在 Unraid 里，可以很方便安装主路由。这里分两种情况，对于网卡能够直通的设备，可以使用直通的方式来添加网卡，对于直通时如果出错的设备，可以使用桥接的方法来添加网卡。</p><h3 id="网卡直通" tabindex="-1">网卡直通 <a class="header-anchor" href="#网卡直通" aria-label="Permalink to &quot;网卡直通&quot;">​</a></h3><p>在 <code>工具 -&gt; 系统设备</code> 里勾选需要直通的网卡，重启生效。</p><p><img src="https://img.slarker.me/wiki/20231208005316_W54ool.png" alt=""></p><p>虚拟机建立过程和上面的旁路由一致，不过这里需要再勾选上直通的网卡。</p><p><img src="https://img.slarker.me/wiki/20231208005547_JvLatS.png" alt=""></p><p>虚拟机启动之后，编辑（可以用 vi 命令编辑） <code>/etc/config/network</code> 修改网络设置。这里需要说明一下，我用的这个机器是双网口，在 iStoreOS 中需要把 LAN 口设置为桥接的 eth0，WAN 口设置为直通的物理网卡 eth1。</p><p>一般情况下，软路由中默认的 eth0 都是桥接的网卡，可以作为 LAN 口，其它的网卡（比如直通的网卡）可以作为 WAN 口。</p><p><img src="https://img.slarker.me/wiki/5dsGV0_wQ2pnl.png" alt=""></p><p>除了修改网卡之外，再把 LAN 口的 IP 设置好就可以了。</p><h3 id="桥接网卡" tabindex="-1">桥接网卡 <a class="header-anchor" href="#桥接网卡" aria-label="Permalink to &quot;桥接网卡&quot;">​</a></h3><p>在把物理网卡加到虚拟机的时候，如果出现报错，那就可以用桥接的方式来添加网卡了。</p><p>在 Unraid 网络设置中，eth0 的桥接默认已经开启，将 eth1 的启用桥接设置为 <code>是</code>。</p><p><img src="https://img.slarker.me/wiki/20231208020629_fjnrR0.png" alt=""></p><p>创建虚拟机的过程和上面一致，在网卡部分，添加一个 <code>br2</code> 的网卡，随机生成一个 mac 地址即可。剩下的操作和上面的多网口一样，这里不再赘述。</p>',40)]))}const g=a(p,[["render",o]]);export{m as __pageData,g as default};