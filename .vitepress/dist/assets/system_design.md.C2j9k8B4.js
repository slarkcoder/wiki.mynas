import{_ as a,c as n,a2 as r,o as i}from"./chunks/framework.eme8ZeBJ.js";const f=JSON.parse('{"title":"系统方案","description":"","frontmatter":{},"headers":[],"relativePath":"system_design.md","filePath":"system_design.md","lastUpdated":1728523562000}'),t={name:"system_design.md"};function o(l,e,s,d,p,S){return i(),n("div",null,e[0]||(e[0]=[r('<h1 id="系统方案" tabindex="-1">系统方案 <a class="header-anchor" href="#系统方案" aria-label="Permalink to &quot;系统方案&quot;">​</a></h1><p><img src="https://img.slarker.me/wiki/fba9de411d46233ba1ff00ddd831a564_PeOKLc.png" alt="fba9de411d46233ba1ff00ddd831a564_PeOKLc"></p><h2 id="如何选择系统" tabindex="-1">如何选择系统？ <a class="header-anchor" href="#如何选择系统" aria-label="Permalink to &quot;如何选择系统？&quot;">​</a></h2><p>常见的 NAS 系统有 Unraid，<a href="https://www.fnnas.com/" target="_blank" rel="noreferrer">fnOS</a>，Synology，TrueNAS Scale，OpenMediaVault 等等，每个系统都有自己的独到之处。只有结合自己的实际需求、知识水平、动手能力，搭配合适的 NAS 系统，才能起到事半功倍的效果。</p><p>比如对于喜欢折腾的用户来说，我都直接推荐 Unraid。对于只用来影视剪辑的用户，我都倾向于推荐 TrueNAS Scale。对于想用 NAS 和软路由的用户来说，我更推荐 PVE（All in one）。如果是小白希望上手简单，我都推荐 <a href="https://www.fnnas.com/" target="_blank" rel="noreferrer">fnOS</a>，Synology。</p><h2 id="unraid" tabindex="-1">Unraid <a class="header-anchor" href="#unraid" aria-label="Permalink to &quot;Unraid&quot;">​</a></h2><p>我自用的 NAS 系统是 Unraid，也用 Unraid 来实现 All in one，Unraid 功能强大，非常适合玩 Docker 和虚拟机，但上手略有难度。如果你想试试 Unraid，不必担心上手问题，我写了不少的教程相信能帮你快速上手。</p><h2 id="pve-all-in-one" tabindex="-1">PVE（All in one） <a class="header-anchor" href="#pve-all-in-one" aria-label="Permalink to &quot;PVE（All in one）&quot;">​</a></h2><p>PVE 是一个开源稳定的专业虚拟化平台，很适合用来实现 All in one，底层基于 Debian 系统，对硬件的兼容性非常好，同时虚拟化的效率也比较高，支持硬件直通，因此可以充分利用物理主机上的各种硬件资源来实现相应的功能。</p><p>对于有软路由需求的用户来说，可以在 NAS 上使用 PVE 来虚拟 iStoreOS 作为软路由，而不必单独购买相应的软路由设备。软路由本身并不需要多么强的性能，因为其使用场景和 NAS 一样是 24 小时开机，所以非常适合在 NAS 上虚拟使用。</p><p>关于什么是软路由，可以看 <a href="https://sspai.com/post/75622" target="_blank" rel="noreferrer">这篇文章</a>。iStoreOS 国内公司是基于 OpenWRT 开发的系统，支持在线更新，界面简洁易用，整合了插件中心，安装插件非常方便。在 All in one 的系统中，建议仅在 iStoreOS 中实现网络相关功能，存储相关的功能请在 NAS 中完成。</p><p>比如对于 N5105/N100 这种自带 4 个 2.5G 网口的主板来说，使用开源稳定的 PVE 虚拟化平台来安装软路由，网口可以直通给 iStoreOS，该方案能充分利用四个 2.5G 网口，为你省下一台交换机的钱。</p><p>最常见的 All in one 方案是以 PVE 作为底层基础平台，在上面虚拟 iStoreOS、NAS（<a href="https://www.fnnas.com/" target="_blank" rel="noreferrer">fnOS</a>，Synology、TrueNAS、OpenMediaVault）、Home Assistant，包括 Windows，Linux 等常见的虚拟机。</p><p>常见的虚拟机用途如下：</p><ul><li>iStoreOS：用来负责网络，实现各种网络相关的功能。以我为例，我在 iStoreOS 中主要使用的是 zerotier 虚拟组网和魔法功能。</li><li>NAS 系统：将硬盘控制器直通到 NAS 系统里，利用 NAS 系统的 Raid 功能，实现数据的集中管理，同时可以安装各种 NAS 服务，比如下载，照片备份，影音服务、电子书，文件同步，协同办公等等。</li><li>Home Assistant：用来实现智能家居功能。</li><li>Windows：用来实现远程控制，游戏服务器挂机，安装 Windows 软件，如果有独立显卡，还可以将独显直通给 Windows，用来外接显示器打游戏，办公等等。这对于家里只有 mac 电脑，却需要使用 Windows 环境的用户来说，非常实用。</li><li>Linux：用来运行各种 Linux 脚本，服务，搭建测试环境等等。</li></ul>',15)]))}const h=a(t,[["render",o]]);export{f as __pageData,h as default};
