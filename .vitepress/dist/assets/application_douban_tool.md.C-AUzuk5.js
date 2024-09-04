import{_ as e,c as a,a3 as t,o as c}from"./chunks/framework.CghS9iDj.js";const u=JSON.parse('{"title":"低门槛、易上手的自动化观影方案","description":"","frontmatter":{},"headers":[],"relativePath":"application/douban_tool.md","filePath":"application/douban_tool.md","lastUpdated":1725293933000}'),d={name:"application/douban_tool.md"};function r(l,o,i,n,p,s){return c(),a("div",null,o[0]||(o[0]=[t('<h1 id="低门槛、易上手的自动化观影方案" tabindex="-1">低门槛、易上手的自动化观影方案 <a class="header-anchor" href="#低门槛、易上手的自动化观影方案" aria-label="Permalink to &quot;低门槛、易上手的自动化观影方案&quot;">​</a></h1><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-07-25_13-13-51_L15NtG.jpg" alt="Snipaste_2024-07-25_13-13-51_L15NtG"></p><p>观影是很多 NAS 用户的刚需，传统的方案是先搜索 BT 资源链接，使用 BT 工具下载，然后通过各种播放软件直接打开播放。这两年流行的小雅主要是基于阿里云盘的资源，但最近也因为阿里云盘政策的收紧也变得不可用了，如果不充值第三方权益包的话速度也会很慢。很多人用的 MoviePilot，NAStool 需要依赖于 PT 站点的资源，玩 PT 对大部分人来说，门槛也比较高。</p><p>最近又出现了一个新的自动化观影方案 <code>douban-tool</code>，可以通过豆瓣标记想看的资源，通过 NAS 上的 BT 下载软件自动下载对应的资源到硬盘里，相比基于 PT 的方案，可以说是门槛降低了不少，而且配置也很简单。本文将介绍如何使用 <code>douban-tool</code>。</p><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ul><li><code>douban-tool</code> 默认的 web 端口是 5000，经过我在 Unraid 上面的测试，如果改成其它端口，可能会出现无法访问的情况，所以推荐使用默认的 5000 端口，如果有其它应用已经占用了 5000 端口，可以把该应用改成别的端口。</li><li>这个方案是基于 BT 下载资源，下载速度要看该资源是否热门。资源热门，BT 同时下载人数越多，下载就快。反之资源越冷门，BT 同时下载人数就越少，下载就慢。</li><li>使用 <code>qBittorrent</code> 作为下载工具，可以通过添加 <code>tracker</code> 来连接更多的下载用户，提高下载速度。</li><li>这个方案的原理是每隔一段时间去检查豆瓣标记（建议是间隔 2 个小时以上），避免被豆瓣风控，所以标记后不一定会立即下载，需要等一段时间。</li></ul><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><p><code>douban-tool</code> 实现的主要功能为获取豆瓣标记，通过 <a href="https://www.btnull.org/" target="_blank" rel="noreferrer">BTNULL</a> 这个网站匹配相应的 BT 资源，然后调用 BT 工具资源下载到本地并使用 <code>TMDB API</code> 来实现刮削。</p><p>需要提前注册好 <a href="https://www.btnull.org/" target="_blank" rel="noreferrer">BTNULL</a> 和 <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">TMDB</a> 账号。</p><p>整个流程比较清晰简单，步骤也不复杂，涉及到的 docker 也只有 2 个，分别是 <code>douban-tool</code> 和 <code>qBittorrent</code> 或者 <code>迅雷</code>，本篇教程以 <code>qBittorrent</code> 为例作为介绍，迅雷设置方法可以参考 <a href="https://www.bilibili.com/read/cv35942028/?jump_opus=1" target="_blank" rel="noreferrer">这里</a>。</p><p><code>douban-tool</code> 的资源目录和 <code>qBittorrent</code> 的下载目录，需要保持一致。</p><p>如果需要使用 <code>Emby</code> 或者 <code>Jellyfin</code> 等工具，可以通过 docker 单独安装，将 BT 的下载目录挂载到 <code>Emby</code> 或者 <code>Jellyfin</code> 中。</p><h2 id="unraid" tabindex="-1">Unraid <a class="header-anchor" href="#unraid" aria-label="Permalink to &quot;Unraid&quot;">​</a></h2><p>Unraid 可以通过模板安装 <code>douban-tool</code> 和 <code>qBittorrent</code>，具体可以看 <a href="/unraid/unraid_docker_template.html">通过模板更新 Docker 应用</a>。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/5vwApf_8Y84zi.png" alt="5vwApf_8Y84zi"></p><h2 id="群晖" tabindex="-1">群晖 <a class="header-anchor" href="#群晖" aria-label="Permalink to &quot;群晖&quot;">​</a></h2><p>群晖可以在 <code>Container Manager</code> 中安装 <code>douban-tool</code>，在注册表中搜索 <code>douban-tool</code>，下载镜像后运行。</p><p>按图中所示映射端口号、文件夹（左侧为 <code>主机</code>，右侧为 <code>容器</code>）：</p><ul><li><code>5002</code> -&gt; <code>5000</code>，为避免和群晖默认端口冲突，主机端口可以改成 <code>5002</code> 或者其它端口</li><li><code>/docker/douban-tool/config</code> -&gt; <code>/app/config</code></li><li><code>/docker/douban-tool/data</code> -&gt; <code>/app/data</code></li><li><code>/downloads</code> -&gt; <code>/downloads</code></li></ul><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/z35vukbq.zzt_gnMolb.png" alt="z35vukbq.zzt_gnMolb"></p><p>设置好之后，一路下一步，就可以完成了。</p><h2 id="设置-douban-tool" tabindex="-1">设置 douban-tool <a class="header-anchor" href="#设置-douban-tool" aria-label="Permalink to &quot;设置 douban-tool&quot;">​</a></h2><p>打开 <code>douban-tool</code> 的 web 页面（Unraid 模板默认端口：<code>5000</code>，群晖默认端口：<code>5002</code>），按照下图进行设置：</p><ul><li>豆瓣 id 可以使用浏览器打开你的 <a href="https://www.douban.com/" target="_blank" rel="noreferrer">豆瓣</a> 个人主页，浏览器地址栏 <code>people</code> 后面的一串 <code>数字</code>（不包含 <code>/</code>）就是你的豆瓣 ID。</li><li>Sleep Interval：设置检查豆瓣标记的间隔时间，默认为 <code>2</code> 小时，间隔过短可能导致账号被风控，建议保持默认。</li><li>Junk File Size：过滤掉小于多少 <code>MB</code> 的文件，可以避免下载低质量或者似是而非或者的垃圾资源。</li><li>TMDB API Key：如果需要刮削，可以 <a href="https://www.themoviedb.org/settings/api" target="_blank" rel="noreferrer">获取 TMDB API Key</a>，用于获取电影和电视剧的详细信息。</li></ul><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-07-25_16-33-44_Q263xo.png" alt="Snipaste_2024-07-25_16-33-44_Q263xo"></p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-07-25_16-54-57_FmOZH5.png" alt="Snipaste_2024-07-25_16-54-57_FmOZH5"></p><p>填写完成之后，点击 <code>Save</code> 保存，这个时候可以先到豆瓣标记几个想看的电影，重启 <code>douban-tool</code> 容器就会自动调用 <code>qBittorrent</code> 下载。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-07-25_12-51-09_QsX1Qj.png" alt="Snipaste_2024-07-25_12-51-09_QsX1Qj"></p><h2 id="设置-qbittorrent-tracker" tabindex="-1">设置 qBittorrent tracker <a class="header-anchor" href="#设置-qbittorrent-tracker" aria-label="Permalink to &quot;设置 qBittorrent tracker&quot;">​</a></h2><p>为了让 <code>qBittorrent</code> 能连接到更多的用户，可以添加 tracker 地址，具体地址可以到下面这几个网站获取：</p><ul><li><a href="https://dns.icoa.cn/tracker/" target="_blank" rel="noreferrer">https://dns.icoa.cn/tracker/</a></li><li><a href="https://trackerslist.com/#/zh" target="_blank" rel="noreferrer">https://trackerslist.com/#/zh</a></li></ul><p>在 <code>qBittorrent</code> 的设置中，找到 <code>BitTorrent</code>，可以在最下方看到 <code>自动将这些 tracker 添加到新下载</code>，勾选启用并加入 <code>tracker 地址</code> 后点击保存。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/7NQJZe_Y327ci.png" alt="7NQJZe_Y327ci"></p><h2 id="使用迅雷作为下载工具" tabindex="-1">使用迅雷作为下载工具 <a class="header-anchor" href="#使用迅雷作为下载工具" aria-label="Permalink to &quot;使用迅雷作为下载工具&quot;">​</a></h2><p>如果你有迅雷会员，想让迅雷作为 <code>douban-tool</code> 的默认下载工具，可以参照下面进行设置。推荐使用 docker 版的迅雷，注意迅雷的下载目录需要和 <code>douban-tool</code> 保持一致。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/5D2Vtt_pw7dLG.png" alt="5D2Vtt_pw7dLG"></p><p><code>Xunlei Device Name</code> 在绑定手机迅雷 App 后，可以在远程设备里看到，这里需要填写完整的设备名称，如下图所示：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/KWgyTV_XOapEc.png" alt="KWgyTV_XOapEc"></p><h2 id="常见错误排查" tabindex="-1">常见错误排查 <a class="header-anchor" href="#常见错误排查" aria-label="Permalink to &quot;常见错误排查&quot;">​</a></h2><p>可以查看 <code>douban-tool</code> 的日志，来确认是否正常。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/koapg4ho.g3a_7Sr6G5.png" alt="koapg4ho.g3a_7Sr6G5"></p><p>如果遇到错误提示不明白含义，可以到 <a href="https://www.bilibili.com/read/cv35942028/?jump_opus=1" target="_blank" rel="noreferrer">这篇文章</a> 查看具体错误原因及解决方案：</p>',42)]))}const m=e(d,[["render",r]]);export{u as __pageData,m as default};
