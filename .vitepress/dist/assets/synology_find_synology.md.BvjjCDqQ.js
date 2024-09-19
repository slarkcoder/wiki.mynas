import{_ as a,c as t,a2 as e,o as s}from"./chunks/framework.eme8ZeBJ.js";const h=JSON.parse('{"title":"查找群晖设备","description":"","frontmatter":{},"headers":[],"relativePath":"synology/find_synology.md","filePath":"synology/find_synology.md","lastUpdated":null}'),n={name:"synology/find_synology.md"};function l(r,o,i,d,c,p){return s(),t("div",null,o[0]||(o[0]=[e('<h1 id="查找群晖设备" tabindex="-1">查找群晖设备 <a class="header-anchor" href="#查找群晖设备" aria-label="Permalink to &quot;查找群晖设备&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">注意</p><ul><li>查找群晖要先确保你的 NAS 和电脑都连到了同一台路由器上。</li><li>如果使用网页查找不到，可以试试桌面版 <code>Synology Assistant</code>。</li></ul></div><p>有时候会因为某些情况（比如搬家换地方、更换路由器等等，导致网络环境有变化），连不上群晖，有哪些办法能找到群晖呢？</p><h2 id="常见的两种群晖失联情况" tabindex="-1">常见的两种群晖失联情况 <a class="header-anchor" href="#常见的两种群晖失联情况" aria-label="Permalink to &quot;常见的两种群晖失联情况&quot;">​</a></h2><p>群晖默认的 IP 地址是通过动态 DHCP 获取的，所以如果你没有给群晖设置过静态 IP，突然连不上了，一般都是因为群晖的 IP 地址发生了变化。这种情况通过路由器后台都可以看到新的群晖 IP，使用 Web 查找工具也可以快速找到新的群晖 IP，找到之后记得把群晖的 IP 设置成静态地址。</p><p>如果是群晖设置了静态 IP，但是网络环境发生变化，比如换了新的路由器或者光猫，搬了新家等等，这种一般都是因为网段发生了变化，导致你的电脑和群晖不在同一网段，所以群晖找不到。这种网段变化导致群晖失联情况，一般用 Web 查找工具都找不到，可以直接用桌面版的 <code>Synology Assistant</code> 来查找。尽管群晖和你的电脑不在同一网段，但是通过 <code>Synology Assistant</code> 可以直接设置群晖的 IP，只要在同一网段，就能连上了。</p><h2 id="通过网页群晖查找工具" tabindex="-1">通过网页群晖查找工具 <a class="header-anchor" href="#通过网页群晖查找工具" aria-label="Permalink to &quot;通过网页群晖查找工具&quot;">​</a></h2><p>为了简单一些，可以先使用群晖官方的 Web 查找工具：</p><p><a href="https://find.synology.com" target="_blank" rel="noreferrer">https://find.synology.com</a></p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/xgg5ydms.kz3_9DKwY8.png" alt="xgg5ydms.kz3_9DKwY8"></p><h2 id="通过-synology-assistant" tabindex="-1">通过 Synology Assistant <a class="header-anchor" href="#通过-synology-assistant" aria-label="Permalink to &quot;通过 Synology Assistant&quot;">​</a></h2><p>如果网页工具找不到，可以下载桌面版的 <code>Synology Assistant</code> 安装后查找。</p><p><a href="https://www.synology.cn/zh-cn/support/download/DS923+?version=7.2#utilities" target="_blank" rel="noreferrer">下载 Synology Assistant</a></p><p>备用下载地址：</p><ul><li><a href="https://www.123pan.com/s/1JKMjv-Trpo.html" target="_blank" rel="noreferrer">Windows 版</a></li><li><a href="https://www.123pan.com/s/1JKMjv-vrpo.html" target="_blank" rel="noreferrer">macOS 版</a></li></ul>',15)]))}const g=a(n,[["render",l]]);export{h as __pageData,g as default};
