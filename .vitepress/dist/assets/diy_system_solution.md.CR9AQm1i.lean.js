import{_ as e,c as l,a3 as i,o as n}from"./chunks/framework.CghS9iDj.js";const h=JSON.parse('{"title":"系统方案","description":"","frontmatter":{},"headers":[],"relativePath":"diy/system_solution.md","filePath":"diy/system_solution.md","lastUpdated":1725293933000}'),o={name:"diy/system_solution.md"};function t(r,a,s,p,d,S){return n(),l("div",null,a[0]||(a[0]=[i('<h1 id="系统方案" tabindex="-1">系统方案 <a class="header-anchor" href="#系统方案" aria-label="Permalink to &quot;系统方案&quot;">​</a></h1><p>用户的需求各种各样，不同的用户对 NAS 或者电脑知识的了解程度也不一样，所以同样的 NAS 在有的人手里是一把 “瑞士军刀”，在有的人手里却只能 ”吃灰“。归根结底，还是匹配没有做好。</p><p>对于不同的需求，我这里提供了多种不同的方案，从小白到专业用户都可以满足。你可以根据自己的情况来选择合适的方案。</p><h2 id="群晖" tabindex="-1">群晖 <a class="header-anchor" href="#群晖" aria-label="Permalink to &quot;群晖&quot;">​</a></h2><ul><li>上手难度：简单</li><li>系统启动方式：通过 U 盘启动</li></ul><p>上手简单，适合小白，各种功能都是开箱即用，自带的套件以及第三方适配的套件可以满足绝大部分需求。支持 Docker，支持硬解。</p><h2 id="unraid" tabindex="-1">Unraid <a class="header-anchor" href="#unraid" aria-label="Permalink to &quot;Unraid&quot;">​</a></h2><ul><li>上手难度：中等</li><li>系统启动方式：通过 U 盘启动</li></ul><p>相比群晖，Unraid 上手稍有难度，但功能强大。适合玩 Docker 和虚拟机，支持硬解。使用 Unraid 同样可以实现 All in one。</p><p>配置默认包含系统 U 盘，不含硬盘，如果需要安装 All in one，需要添加一块 128GB SATA SSD 用来安装系统，因为该方案安装也较为复杂，需要加 ¥120（包含 128G SSD）。</p><h2 id="truenas-scale" tabindex="-1">TrueNAS Scale <a class="header-anchor" href="#truenas-scale" aria-label="Permalink to &quot;TrueNAS Scale&quot;">​</a></h2><ul><li>上手难度：困难</li><li>系统启动方式：通过 SSD 启动</li></ul><p>TrueNAS 上手较为困难，非常适合对稳定性要求极高的用户，比如专门用来剪辑视频的场景。</p><h2 id="pve-all-in-one" tabindex="-1">PVE（All in one） <a class="header-anchor" href="#pve-all-in-one" aria-label="Permalink to &quot;PVE（All in one）&quot;">​</a></h2><ul><li>上手难度：中等</li><li>系统启动方式：通过 SSD 启动</li><li>底层系统：PVE</li><li>虚拟机：群晖 + iStoreOS（OpenWRT）</li></ul><p>PVE 是一个开源稳定的专业虚拟化平台，很适合用来实现 All in one，底层基于 Debian 系统，对硬件的兼容性非常好，同时虚拟化的效率也比较高，支持硬件直通，因此可以充分利用物理主机上的各种硬件来实现相应的功能。</p><p>对于有软路由需求的用户来说，可以在 NAS 上使用 PVE 来虚拟 OpenWRT 作为软路由，而不必单独购买相应的软路由设备。软路由本身并不需要多么强的性能，因为其使用场景和 NAS 一样是 24 小时开机，所以非常适合在 NAS 上虚拟使用。</p><p>比如对于 N5105/N100 这种自带 4 个 2.5G 网口的主板来说，该方案能充分利用多网口，为你省下一台交换机的钱。需要添加一块 SSD 硬盘，使用开源稳定的 PVE 虚拟化平台来实现 All in one，核显、SATA 接口直通给群晖，网口直通给 iStoreOS。</p><p>该方案虽然比较复杂，但复杂的部分我都已经帮你做好了，日常使用不需要关心 PVE。适合既想用群晖，又想使用软路由的用户。</p><p>配置默认不含硬盘，该方案需要添加一块 128GB SATA SSD 用来安装系统，因为该方案安装也较为复杂，需要加 ¥120（包含 128G SSD）。</p><h2 id="nas-还能打游戏" tabindex="-1">NAS 还能打游戏？ <a class="header-anchor" href="#nas-还能打游戏" aria-label="Permalink to &quot;NAS 还能打游戏？&quot;">​</a></h2><ul><li>上手难度：中等</li><li>系统启动方式：通过 SSD 启动</li><li>底层系统：PVE</li><li>虚拟机：群晖 + iStoreOS（OpenWRT）+ Windows</li></ul><p>对于某些既想用 NAS，又想偶尔使用 NAS 虚拟 Windows 来打游戏的用户，可以采用核显 + 独显的组合，使用 PVE 同时安装 NAS 系统以及 Windows 虚拟机，核显直通给 NAS 用来解码，独显直通给 Windows 打游戏，NAS 和 Windows 可以同时使用，互不影响。</p><p>需要添加 SSD 用来安装系统，详情可以咨询。</p><h2 id="关于-u-盘启动" tabindex="-1">关于 U 盘启动 <a class="header-anchor" href="#关于-u-盘启动" aria-label="Permalink to &quot;关于 U 盘启动&quot;">​</a></h2><p>对于使用 U 盘启动的系统，没必要担心 U 盘质量问题，我这里选用的 U 盘都是质量可靠，经过时间验证过的产品。</p><p>购买后三年内如果出现 U 盘质量问题，直接免费更换，包括免费重新制作系统。</p><p>如果你实在担心 U 盘问题，需要额外加一个启动盘作为备用，需要加 ￥39。</p>',28)]))}const c=e(o,[["render",t]]);export{h as __pageData,c as default};
