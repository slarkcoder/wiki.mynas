import{_ as a,c as e,o as s,a4 as o}from"./chunks/framework.Dx5AVRXu.js";const u=JSON.parse('{"title":"解决 Docker 镜像无法下载问题","description":"","frontmatter":{},"headers":[],"relativePath":"basic/docker_mirrors.md","filePath":"basic/docker_mirrors.md","lastUpdated":1720842724000}'),i={name:"basic/docker_mirrors.md"},c=o(`<h1 id="解决-docker-镜像无法下载问题" tabindex="-1">解决 Docker 镜像无法下载问题 <a class="header-anchor" href="#解决-docker-镜像无法下载问题" aria-label="Permalink to &quot;解决 Docker 镜像无法下载问题&quot;">​</a></h1><p>很多朋友安装 Docker 应用的时候出现下载失败问题。想解决这个问题通常有两种办法，第一种是设置代理，比如在主路由或者旁路由上配置代理，可以让拉取 docker 镜像是通过代理加速。第二种是直接使用镜像加速器。</p><h2 id="设置代理" tabindex="-1">设置代理 <a class="header-anchor" href="#设置代理" aria-label="Permalink to &quot;设置代理&quot;">​</a></h2><p>关于在 Unraid、群晖上如何安装 iStoreOS 主路由，旁路由，此前我已经写了几篇相关的教程，可以按需参考：</p><ul><li>适用于 <code>Unraid</code>：<a href="/unraid/router.html">一文搞定 Unraid 安装软路由</a></li><li>适用于 <code>群晖</code>：<a href="/synology/router.html">安装旁路由</a></li></ul><p>安装好 iStoreOS 之后，可以很方便的安装相关代理插件，配置好自己节点之后就可以正常拉取镜像了。</p><h2 id="镜像加速器" tabindex="-1">镜像加速器 <a class="header-anchor" href="#镜像加速器" aria-label="Permalink to &quot;镜像加速器&quot;">​</a></h2><p>使用镜像加速器可以有效解决 Docker 下载失败问题。</p><h3 id="群晖" tabindex="-1">群晖 <a class="header-anchor" href="#群晖" aria-label="Permalink to &quot;群晖&quot;">​</a></h3><blockquote><p>群晖仅支持为 Docker Hub 的镜像添加加速地址。对于其它仓库 （比如 Github）的 Docker 镜像，则需要 <code>手动替换为加速地址</code> 后再拉取。比如：<code>ghcr.io/ggerganov/llama.cpp:full</code>，则需要将 <code>ghcr.io</code> 替换为加速地址之后，通过命令行手动拉取。</p></blockquote><p>打开 <code>Container Manager</code>，在 <code>注册表</code> -&gt; <code>设置</code> 中编辑名为 <code>Docker Hub（v1）</code> 的条目。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/Su5bhz_pqRrkx.png" alt="Su5bhz_pqRrkx"></p><p>选中 <code>启用注册表镜像</code>，点击 <code>新增</code>，填写镜像加速地址，并应用。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/fadx1q1i.u1y_qkVNsU.png" alt="fadx1q1i.u1y_qkVNsU"></p><p>之后在 <code>套件中心</code> 先 <code>停用</code> Container Manager，再 <code>启动</code>，镜像加速地址就可以生效。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/DeBY64_ZtHWt7.png" alt="DeBY64_ZtHWt7"></p><h3 id="unraid" tabindex="-1">Unraid <a class="header-anchor" href="#unraid" aria-label="Permalink to &quot;Unraid&quot;">​</a></h3><p>打开 Unraid 的 <code>终端</code>，将下面命令中的 <code>xxxx</code> 替换为镜像加速地址之后再执行：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/docker</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/docker/daemon.json</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> EOF</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;registry-mirrors&quot;: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;xxxx&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    ]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span></code></pre></div><p>之后到 <code>设置</code> -&gt; <code>Docker</code> 中先将 <code>启用 Docker</code> 设置为 <code>否</code>，点击应用：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/adwo3ql1.34y_djmT5u.png" alt="adwo3ql1.34y_djmT5u"></p><p>之后再设置为 <code>是</code>，再次点击应用，加速镜像地址即可生效。</p><div class="warning custom-block"><p class="custom-block-title">解决重启失效问题</p><p>Unraid 重启之后，<code>/etc/docker/daemon.json</code> 会被清空。可以将上面的命令添加到 <code>/boot/config/go</code> 文件中来实现开机自动执行。</p><ul><li>方法 1：</li></ul><p>打开 Unraid 终端，使用 <code>nano boot/config/go</code> 命令编辑 <code>go</code> 文件。将上面的命令粘贴到 <code>go</code> 文件末尾，<code>Ctrl + X</code> 保存，输入 <code>Y</code> 确认退出。</p><ul><li>方法 2：</li></ul><p>在 Unraid 主界面中，点击引导设备 Flash，打开引导设备的 SMB，通过电脑上的文本编辑器编辑 <code>go</code> 文件，将上面的命令粘贴到 <code>go</code> 文件末尾，保存退出。</p></div><h4 id="unraid-移除加速镜像" tabindex="-1">Unraid 移除加速镜像 <a class="header-anchor" href="#unraid-移除加速镜像" aria-label="Permalink to &quot;Unraid 移除加速镜像&quot;">​</a></h4><p>如果不想使用加速镜像地址，可以把 <code>/etc/docker/daemon.json</code> 这个文件删除，把 <code>boot/config/go</code> 中添加的命令删除，然后重启 Docker 服务。删除文件可以用下面这个命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/docker/daemon.json</span></span></code></pre></div>`,26),d=[c];function t(n,r,l,p,h,k){return s(),e("div",null,d)}const m=a(i,[["render",t]]);export{u as __pageData,m as default};
