import{_ as e,c as l,a2 as a,o as r}from"./chunks/framework.eme8ZeBJ.js";const x=JSON.parse('{"title":"常用的下载工具","description":"","frontmatter":{},"headers":[],"relativePath":"fnos/download.md","filePath":"fnos/download.md","lastUpdated":1727768034000}'),d={name:"fnos/download.md"};function n(i,t,c,o,s,h){return r(),l("div",null,t[0]||(t[0]=[a('<h1 id="常用的下载工具" tabindex="-1">常用的下载工具 <a class="header-anchor" href="#常用的下载工具" aria-label="Permalink to &quot;常用的下载工具&quot;">​</a></h1><p><img src="https://img.slarker.me/wiki/d16588893b7a4c8e8e25ee3cf3a18970.webp" alt=""></p><p>虽然 fnOS 自带了一些下载工具，比如迅雷，qBittorrent 等等，但是需要改一些设置的时候，比如自定义 WebUI，下载路径等等都不如 docker 版方便，本篇就来介绍安装一些 docker 版的下载工具。</p><p>由于这些下载工具的 docker 配置都很简单，安装过程基本都一样，仅有端口和配置路径略有区别，所以下面就只贴出需要修改的配置。</p><div class="info custom-block"><p class="custom-block-title">提示</p><p>下面所有 docker 配置中的 fnOS 主机路径（配置、下载）均表示相对路径。以迅雷 docker 为例：</p><ul><li>配置路径 <code>/docker/xunlei</code> 在我的 NAS 中的实际路径为 <code>/vol1/1000/docker/xunlei</code>。</li><li>下载路径 <code>/downloads</code> 在我的 NAS 中的实际路径为 <code>/vol2/1000/downloads</code>。</li></ul></div><h2 id="安装过程" tabindex="-1">安装过程 <a class="header-anchor" href="#安装过程" aria-label="Permalink to &quot;安装过程&quot;">​</a></h2><ul><li><p>建立下载文件夹（比如下面 fnOS 中的统一下载路径都为 <code>/downloads</code>）和 docker 配置文件夹</p><p><img src="https://img.slarker.me/wiki/cb3a4dafb21646dc8cced50a10dd23aa.webp" alt=""></p></li><li><p>在 docker 镜像仓库中搜索相关镜像并下载</p><p><img src="https://img.slarker.me/wiki/3effeb8db6db42eab8d49cf231594b0e.webp" alt=""></p></li><li><p>设置应用，勾选 <code>开机启动</code>，按照镜像要求设置 <code>WebUI 端口</code>、<code>配置路径</code>、<code>下载路径</code></p><p><img src="https://img.slarker.me/wiki/f0335699bd8949f5a384422934c20ea4.webp" alt=""></p></li><li><p>设置过程中，未提及的参数不需要设置，保持默认</p></li><li><p>如果有需要配置其它参数，可以点击镜像名称链接，查看项目的详细说明</p></li></ul><h2 id="迅雷" tabindex="-1">迅雷 <a class="header-anchor" href="#迅雷" aria-label="Permalink to &quot;迅雷&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">注意</p><p>需要在功能选项中勾选 <code>使用高权限执行容器</code>。</p></div><ul><li>镜像介绍：迅雷 docker 版，从群晖套件中提取出来的，支持绑定手机迅雷，可以远程控制。</li><li>镜像名称：<a href="https://hub.docker.com/r/cnk3x/xunlei" target="_blank" rel="noreferrer">cnk3x/xunlei</a></li></ul><table tabindex="0"><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">fnOS 主机</th><th style="text-align:center;">容器</th></tr></thead><tbody><tr><td style="text-align:center;">WebUI 端口</td><td style="text-align:center;">2345</td><td style="text-align:center;">2345</td></tr><tr><td style="text-align:center;">配置路径</td><td style="text-align:center;">/docker/xunlei</td><td style="text-align:center;">/xunlei/data</td></tr><tr><td style="text-align:center;">下载路径</td><td style="text-align:center;">/downloads</td><td style="text-align:center;">/xunlei/downloads</td></tr></tbody></table><h2 id="qbittorrent" tabindex="-1">qBittorrent <a class="header-anchor" href="#qbittorrent" aria-label="Permalink to &quot;qBittorrent&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">注意</p><ul><li>qBittorrent 初始密码请查看 docker 应用日志。</li><li>下面的连接端口（TCP、UDP）为 50000，安装好之后需要在 WebUI 中将监听端口修改为 <code>50000</code>。</li></ul></div><ul><li>镜像介绍：非常流行的 BT/PT 下载客户端。</li><li>镜像名称：<a href="https://hub.docker.com/r/linuxserver/qbittorrent" target="_blank" rel="noreferrer">linuxserver/qbittorrent</a></li></ul><table tabindex="0"><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">fnOS 主机</th><th style="text-align:center;">容器</th></tr></thead><tbody><tr><td style="text-align:center;">连接端口 TCP</td><td style="text-align:center;">50000</td><td style="text-align:center;">50000</td></tr><tr><td style="text-align:center;">连接端口 UDP</td><td style="text-align:center;">50000</td><td style="text-align:center;">50000</td></tr><tr><td style="text-align:center;">WebUI 端口</td><td style="text-align:center;">8080</td><td style="text-align:center;">8080</td></tr><tr><td style="text-align:center;">配置路径</td><td style="text-align:center;">/docker/qbittorrent</td><td style="text-align:center;">/config</td></tr><tr><td style="text-align:center;">下载路径</td><td style="text-align:center;">/downloads</td><td style="text-align:center;">/downloads</td></tr></tbody></table><h2 id="metube" tabindex="-1">Metube <a class="header-anchor" href="#metube" aria-label="Permalink to &quot;Metube&quot;">​</a></h2><ul><li>镜像介绍：基于知名的 <a href="https://github.com/yt-dlp/yt-dlp" target="_blank" rel="noreferrer">yt-dlp</a> 封装，支持主流视频网站的视频下载器。</li><li>镜像名称：<a href="https://github.com/alexta69/metube" target="_blank" rel="noreferrer">alexta69/metube</a></li></ul><table tabindex="0"><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">fnOS 主机</th><th style="text-align:center;">容器</th></tr></thead><tbody><tr><td style="text-align:center;">WebUI 端口</td><td style="text-align:center;">8081</td><td style="text-align:center;">8081</td></tr><tr><td style="text-align:center;">下载路径</td><td style="text-align:center;">/downloads</td><td style="text-align:center;">/downloads</td></tr></tbody></table><h2 id="百度网盘" tabindex="-1">百度网盘 <a class="header-anchor" href="#百度网盘" aria-label="Permalink to &quot;百度网盘&quot;">​</a></h2><ul><li>镜像介绍：官方百度网盘客户端 VNC 版。</li><li>镜像名称：<a href="https://hub.docker.com/r/johngong/baidunetdisk" target="_blank" rel="noreferrer">johngong/baidunetdisk</a></li></ul><table tabindex="0"><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">fnOS 主机</th><th style="text-align:center;">容器</th></tr></thead><tbody><tr><td style="text-align:center;">WebUI 端口（VNC）</td><td style="text-align:center;">5800</td><td style="text-align:center;">5800</td></tr><tr><td style="text-align:center;">配置路径</td><td style="text-align:center;">/docker/baidunetdisk</td><td style="text-align:center;">/config</td></tr><tr><td style="text-align:center;">下载路径</td><td style="text-align:center;">/downloads</td><td style="text-align:center;">/config/baidunetdiskdownload</td></tr></tbody></table><h2 id="_115-网盘" tabindex="-1">115 网盘 <a class="header-anchor" href="#_115-网盘" aria-label="Permalink to &quot;115 网盘&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">注意</p><p>如果 115 docker 内提示更新，不要更新！</p></div><ul><li>镜像介绍：115 网盘 Linux 版本的 Docker 封装。</li><li>镜像名称：<a href="https://hub.docker.com/r/funcman/115pc/" target="_blank" rel="noreferrer">funcman/115pc</a></li></ul><table tabindex="0"><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">fnOS 主机</th><th style="text-align:center;">容器</th></tr></thead><tbody><tr><td style="text-align:center;">WebUI 端口（VNC）</td><td style="text-align:center;">15800</td><td style="text-align:center;">5800</td></tr><tr><td style="text-align:center;">配置路径</td><td style="text-align:center;">/docker/115pc</td><td style="text-align:center;">/config</td></tr><tr><td style="text-align:center;">下载路径</td><td style="text-align:center;">/downloads</td><td style="text-align:center;">/Downloads/115download</td></tr></tbody></table>',25)]))}const g=e(d,[["render",n]]);export{x as __pageData,g as default};
