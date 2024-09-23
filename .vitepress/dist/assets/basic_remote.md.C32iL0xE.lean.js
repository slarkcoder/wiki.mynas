import{_ as r,c as a,a2 as t,o}from"./chunks/framework.eme8ZeBJ.js";const m=JSON.parse('{"title":"常见的远程访问 NAS 方法","description":"","frontmatter":{},"headers":[],"relativePath":"basic/remote.md","filePath":"basic/remote.md","lastUpdated":1726060699000}'),i={name:"basic/remote.md"};function l(s,e,p,n,c,d){return o(),a("div",null,e[0]||(e[0]=[t('<h1 id="常见的远程访问-nas-方法" tabindex="-1">常见的远程访问 NAS 方法 <a class="header-anchor" href="#常见的远程访问-nas-方法" aria-label="Permalink to &quot;常见的远程访问 NAS 方法&quot;">​</a></h1><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/remote_En32qD.jpg" alt="remote_En32qD"></p><h2 id="最佳方案-公网-ipv4" tabindex="-1">最佳方案 - 公网 IPv4 <a class="header-anchor" href="#最佳方案-公网-ipv4" aria-label="Permalink to &quot;最佳方案 - 公网 IPv4&quot;">​</a></h2><ul><li>优点：无须中转，直连，速度最快！</li><li>缺点：需要将对应的服务端口暴露到公网上。理论上，你可以访问，别人同样也可以访问，如果你的密码比较简单，那别人想进来，也不是什么难事！关于安全，可以看看我写的 <a href="https://slarker.me/remote-nas/" target="_blank" rel="noreferrer">自组 NAS 的远程访问方案，总有一款适合你！</a>。</li></ul><p>如果你的宽带是电信、联通，那可以打电话向运营商申请。如果是移动，基本没希望。如果能申请到，同时让运营商帮你把光猫改桥接，可以用你自己的路由器或者软路由来拨号。</p><blockquote><p>如果申请不到公网 IPv4，也可以试试 IPv6，网上也有很多教程，可以试试看。</p></blockquote><h2 id="值得试试-zerotier" tabindex="-1">值得试试 - Zerotier <a class="header-anchor" href="#值得试试-zerotier" aria-label="Permalink to &quot;值得试试 - Zerotier&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">提示</p><p>如果你在 Unraid 中使用 docker 安装 <code>zerotier</code>，遇到无法远程访问 unraid 管理页面，但其它 docker 服务端口可以正常访问时，可以试试这个解决办法。<a href="/unraid/remote.html">解决虚拟组网远程无法访问 80 端口问题</a>。</p></div><p>如果申请不到公网 IPv4，可以试试 Zerotier。</p><ul><li>优点：采用虚拟 VPN 的方式来组建网络，相较于公网 IP 暴露端口的方式，比较安全。</li><li>缺点：Zerotier 的逻辑是优先尝试直连，如果能够直连，那速度可以等同于公网 IPv4，如果直连不成功，那就走 Zerotier 的中转服务器，这个时候就比较慢。</li></ul><p>具体使用可以参考我的教程：<a href="https://slarker.me/zerotier" target="_blank" rel="noreferrer">使用 Zerotier 进行内网穿透</a></p><p>类似的方案还有 <a href="/fnos/tailscale.html">Tailscale</a>，原理和 Zerotier 类似。</p><h2 id="星空组网-starvpn" tabindex="-1">星空组网 - <a href="https://starvpn.cn/" target="_blank" rel="noreferrer">Starvpn</a> <a class="header-anchor" href="#星空组网-starvpn" aria-label="Permalink to &quot;星空组网 - [Starvpn](https://starvpn.cn/)&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">提示</p><p>如果你在 Unraid 中使用 docker 安装 <code>星空组网</code>，遇到无法远程访问 unraid 管理页面，但其它 docker 服务端口可以正常访问时，可以试试这个解决办法。<a href="/unraid/remote.html">解决虚拟组网远程无法访问 80 端口问题</a>。</p></div><p>星空组网是一个国产的异地虚拟组网软件，原理也和 Zerotier 类似，但因为服务器在国内，所以连接速度非常快。如果能够实现点对点直连，效果也就和使用公网 IP 一样，如果直连不成功，就走星空组网提供的中转服务器，限速 10Mbps。支持各种客户端，包括 Openwrt，群晖，iOS 和 Android，官网也提供了详细的设置教程，使用起来没难度。</p><p>但也有缺点，就是目前不支持自定义路由映射，只能使用网站分配的固定 IP 来访问，这点不如 zerotier 方便。</p><h2 id="上手简单-节点小宝" tabindex="-1">上手简单 - <a href="https://www.iepose.com/" target="_blank" rel="noreferrer">节点小宝</a> <a class="header-anchor" href="#上手简单-节点小宝" aria-label="Permalink to &quot;上手简单 - [节点小宝](https://www.iepose.com/)&quot;">​</a></h2><p>节点小宝是一款专为远程访问设计的网络利器，支持各种常见的移动，桌面，以及 NAS 客户端。使用也比较简单，在各个客户端上安装节点小宝之后，通过 App 绑定并配置自定义二级域名，就可以顺利的远程访问了。</p><p>免费版支持 4Mbps 转发速度，支持添加 4 条穿透通道，每月流量 20G，只要不涉及大文件传输，应对日常的远程访问需求（查看 NAS 状态，管理 BT/PT，备份照片）都可以满足。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/l51Mwl_9ilQxW.png" alt="l51Mwl_9ilQxW"></p>',20)]))}const u=r(i,[["render",l]]);export{m as __pageData,u as default};