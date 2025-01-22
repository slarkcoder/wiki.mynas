import{_ as e,c as n,a2 as r,o as t}from"./chunks/framework.eme8ZeBJ.js";const d=JSON.parse('{"title":"fnOS 常见问题解答","description":"","frontmatter":{},"headers":[],"relativePath":"fnos/question.md","filePath":"fnos/question.md","lastUpdated":1737559787000}'),o={name:"fnos/question.md"};function s(i,a,f,l,h,p){return t(),n("div",null,a[0]||(a[0]=[r('<h1 id="fnos-常见问题解答" tabindex="-1">fnOS 常见问题解答 <a class="header-anchor" href="#fnos-常见问题解答" aria-label="Permalink to &quot;fnOS 常见问题解答&quot;">​</a></h1><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-31_14-51-40_EuryBP.jpg" alt="Snipaste_2024-08-31_14-51-40_EuryBP"></p><h2 id="反馈问题" tabindex="-1">反馈问题 <a class="header-anchor" href="#反馈问题" aria-label="Permalink to &quot;反馈问题&quot;">​</a></h2><p>目前 fnOS 处于公测阶段，如果遇到问题，可以向开发团队 <a href="https://trim-nas.feishu.cn/share/base/form/shrcn2iVepeqaASZzMF0iMNAC5e" target="_blank" rel="noreferrer">提交反馈</a>。</p><h2 id="fnos-系统是付费的吗" tabindex="-1">fnOS 系统是付费的吗？ <a class="header-anchor" href="#fnos-系统是付费的吗" aria-label="Permalink to &quot;fnOS 系统是付费的吗？&quot;">​</a></h2><p>国内用户免费使用，具体信息可以看 <a href="https://help.fnnas.com/articles/fnosV1/contact/profit-statement.md" target="_blank" rel="noreferrer">官网公告</a>。</p><h2 id="如何在虚拟机上安装体验-fnos" tabindex="-1">如何在虚拟机上安装体验 fnOS？ <a class="header-anchor" href="#如何在虚拟机上安装体验-fnos" aria-label="Permalink to &quot;如何在虚拟机上安装体验 fnOS？&quot;">​</a></h2><ul><li><a href="/unraid/fnos.html">Unraid 虚拟 fnOS</a></li><li><a href="/synology/fnos.html">群晖虚拟 fnOS</a></li><li>PVE、ESXi 虚拟 fnOS 可以参考 <a href="https://help.fnnas.com/articles/fnosV1/start/install-virtual.md" target="_blank" rel="noreferrer">官方教程</a>。</li></ul><h2 id="fnos-系统安装在哪里" tabindex="-1">fnOS 系统安装在哪里？ <a class="header-anchor" href="#fnos-系统安装在哪里" aria-label="Permalink to &quot;fnOS 系统安装在哪里？&quot;">​</a></h2><p>fnOS 建议安装在 SSD 硬盘上，如果是 128G 的 SSD 硬盘，可以分配 32G～64G 用来作为系统盘，剩下的空间可以建立一个存储空间用来存储 docker。</p><h2 id="fnos-有手机-app-吗" tabindex="-1">fnOS 有手机 App 吗？ <a class="header-anchor" href="#fnos-有手机-app-吗" aria-label="Permalink to &quot;fnOS 有手机 App 吗？&quot;">​</a></h2><p>iOS，Android App 都有，并且还有 TV 版（飞牛影视）。</p><p><img src="https://static2.fnnas.com/official/web/download_img_3.png" alt=""></p><h2 id="fnos-可以远程访问吗" tabindex="-1">fnOS 可以远程访问吗？ <a class="header-anchor" href="#fnos-可以远程访问吗" aria-label="Permalink to &quot;fnOS 可以远程访问吗？&quot;">​</a></h2><p>可以远程，自带 FN Connect（类似于群晖 QC），操作简单，使用方便，对小白很友好。但官方的服务器资源也有限，会限制速度。推荐尝试使用公网 IPv4、IPv6，或者 zerotier、tailscale 等方案。</p><h2 id="fnos-支持-docker-和虚拟机吗" tabindex="-1">fnOS 支持 Docker 和虚拟机吗？ <a class="header-anchor" href="#fnos-支持-docker-和虚拟机吗" aria-label="Permalink to &quot;fnOS 支持 Docker 和虚拟机吗？&quot;">​</a></h2><p>目前公测版支持 Docker，暂不支持虚拟机功能，后续版本会支持。如果想使用虚拟机功能，推荐使用 PVE 来安装 fnOS。</p><h2 id="如果从其他-nas-系统切换到-fnos-需要格式化硬盘吗" tabindex="-1">如果从其他 NAS 系统切换到 fnOS，需要格式化硬盘吗？ <a class="header-anchor" href="#如果从其他-nas-系统切换到-fnos-需要格式化硬盘吗" aria-label="Permalink to &quot;如果从其他 NAS 系统切换到 fnOS，需要格式化硬盘吗？&quot;">​</a></h2><p>需要格式化，请先备份好重要数据再切换。</p><h2 id="如果想要同时使用-istoreos-和-fnos-怎么办" tabindex="-1">如果想要同时使用 iStoreOS 和 fnOS 怎么办？ <a class="header-anchor" href="#如果想要同时使用-istoreos-和-fnos-怎么办" aria-label="Permalink to &quot;如果想要同时使用 iStoreOS 和 fnOS 怎么办？&quot;">​</a></h2><p>目前 fnOS 不支持虚拟机，推荐的方案是使用 PVE（iStoreOS + fnOS）。即底层使用 PVE 来作为虚拟化平台，虚拟 iStoreOS 和 fnOS 两个虚拟机。iStoreOS 负责网络，fnOS 负责 NAS 存储。</p><h2 id="fnos-开关机很快吗" tabindex="-1">fnOS 开关机很快吗？ <a class="header-anchor" href="#fnos-开关机很快吗" aria-label="Permalink to &quot;fnOS 开关机很快吗？&quot;">​</a></h2><p>快！非常快！实测系统装在 SSD 上，开机只需要不超过 20s，在不安装应用的情况下关机只需要大约 8s。</p><h2 id="fnos-支持硬盘休眠吗" tabindex="-1">fnOS 支持硬盘休眠吗？ <a class="header-anchor" href="#fnos-支持硬盘休眠吗" aria-label="Permalink to &quot;fnOS 支持硬盘休眠吗？&quot;">​</a></h2><p>支持。</p><p><img src="https://img.slarker.me/wiki/sipi22us.jph_7A6HOa.png" alt="sipi22us.jph_7A6HOa"></p><h2 id="fnos-的兼容性怎么样" tabindex="-1">fnOS 的兼容性怎么样？ <a class="header-anchor" href="#fnos-的兼容性怎么样" aria-label="Permalink to &quot;fnOS 的兼容性怎么样？&quot;">​</a></h2><p>fnOS 基于 Debian 开发，兼容性很好。实测在华擎 N3150 这种较老主板，以及倍控 N100 这种比较新的主板都可以正常安装运行，而且非常流畅，多个网口也可以正常识别。</p><p><img src="https://img.slarker.me/wiki/9WrxAt_C7CzDr.png" alt="9WrxAt_C7CzDr"></p><h2 id="fnos-是否支持无线网卡" tabindex="-1">fnOS 是否支持无线网卡？ <a class="header-anchor" href="#fnos-是否支持无线网卡" aria-label="Permalink to &quot;fnOS 是否支持无线网卡？&quot;">​</a></h2><p>目前支持部分无线网卡，但没有一个详细的支持列表，可以看官方 <a href="https://help.fnnas.com/articles/fnosV1/settings/wifi.md" target="_blank" rel="noreferrer">说明</a>。</p><h2 id="fnos-多网口设备可以作为交换机使用吗" tabindex="-1">fnOS 多网口设备可以作为交换机使用吗？ <a class="header-anchor" href="#fnos-多网口设备可以作为交换机使用吗" aria-label="Permalink to &quot;fnOS 多网口设备可以作为交换机使用吗？&quot;">​</a></h2><p>fnOS 兼容性很好，像是 N100 这种多网口的设备可以正常识别到多网口，但目前不支持作为交换机使用。</p><p>如果需要将多网口设置为交换机使用，推荐使用 PVE 来安装 fnOS，设置交换机非常方便。具体可以参考教程：<a href="/basic/bridge_network.html#pve">设置交换机模式</a>。</p><h2 id="fnos-支持外接-usb-存储设备吗" tabindex="-1">fnOS 支持外接 USB 存储设备吗？ <a class="header-anchor" href="#fnos-支持外接-usb-存储设备吗" aria-label="Permalink to &quot;fnOS 支持外接 USB 存储设备吗？&quot;">​</a></h2><p>支持。</p><h2 id="fnos-支持-ups-吗" tabindex="-1">fnOS 支持 UPS 吗？ <a class="header-anchor" href="#fnos-支持-ups-吗" aria-label="Permalink to &quot;fnOS 支持 UPS 吗？&quot;">​</a></h2><p>目前官方不支持，后续肯定也会支持。如果你想用 UPS，可以通过这个教程来实现 <a href="/fnos/ups.html">支持 UPS</a>。</p>',38)]))}const c=e(o,[["render",s]]);export{d as __pageData,c as default};
