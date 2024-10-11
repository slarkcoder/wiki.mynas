import{_ as o,c as a,a2 as c,o as d}from"./chunks/framework.eme8ZeBJ.js";const m=JSON.parse('{"title":"重装系统","description":"","frontmatter":{},"headers":[],"relativePath":"pve/reset.md","filePath":"pve/reset.md","lastUpdated":1727972712000}'),i={name:"pve/reset.md"};function t(s,e,r,p,l,n){return d(),a("div",null,e[0]||(e[0]=[c('<h1 id="重装系统" tabindex="-1">重装系统 <a class="header-anchor" href="#重装系统" aria-label="Permalink to &quot;重装系统&quot;">​</a></h1><p>本篇教程介绍如何重新安装系统，包括 <code>iStoreOS</code> 和 <code>fnOS</code>。</p><h2 id="镜像" tabindex="-1">镜像 <a class="header-anchor" href="#镜像" aria-label="Permalink to &quot;镜像&quot;">​</a></h2><ul><li><a href="https://fw.koolcenter.com/iStoreOS/x86_64/" target="_blank" rel="noreferrer">下载最新的固件 iStoreOS x86 固件</a>，解压后重命名为：<code>istoreos.img</code>。</li><li><a href="https://www.fnnas.com/download" target="_blank" rel="noreferrer">下载 fnOS 镜像</a></li></ul><p>将 <code>istoreos.img</code> 或者 fnOS 的 <code>iso 镜像</code> 上传到 <code>PVE</code> 的 <code>local(pve)</code>。</p><p><img src="https://img.slarker.me/wiki/0c9d93996b55468ab8a1e6c7c2dc3efc.webp" alt=""></p><h2 id="重装-istoreos" tabindex="-1">重装 iStoreOS <a class="header-anchor" href="#重装-istoreos" aria-label="Permalink to &quot;重装 iStoreOS&quot;">​</a></h2><h3 id="移除虚拟启动磁盘" tabindex="-1">移除虚拟启动磁盘 <a class="header-anchor" href="#移除虚拟启动磁盘" aria-label="Permalink to &quot;移除虚拟启动磁盘&quot;">​</a></h3><p>停止 <code>iStoreOS</code> 虚拟机，在 iStoreOS 虚拟机的 <code>硬件</code> 中，选中虚拟硬盘 <code>sata0</code>，点击上面的 <code>分离</code>。</p><p><img src="https://img.slarker.me/wiki/446d3daa17674dbfaae37553ba490dbc.webp" alt=""></p><p>再选中下面的 <code>未使用的磁盘 0</code>，点击上面的 <code>移除</code>。</p><p><img src="https://img.slarker.me/wiki/885b965b1feb4ca3a3938a6dd5ba7f91.webp" alt=""></p><h3 id="重新导入虚拟磁盘" tabindex="-1">重新导入虚拟磁盘 <a class="header-anchor" href="#重新导入虚拟磁盘" aria-label="Permalink to &quot;重新导入虚拟磁盘&quot;">​</a></h3><p>这里 <code>iStoreOS</code> 虚拟机的 ID 为 <code>100</code>，之前已经将 <code>istoreos.img</code> 上传到了 <code>PVE</code> 的 <code>local(pve)</code>，在 PVE 的 <code>Shell</code> 中，使用下面的命令将 <code>istoreos.img</code> 导入 ID 为 <code>100</code> 的虚拟机中：</p><p><img src="https://img.slarker.me/wiki/4952568a763344b1b562fc20c691672a.webp" alt=""></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">qm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> importdisk</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/lib/vz/template/iso/istoreos.img</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> local</span></span></code></pre></div><p>在 iStoreOS 虚拟机的 <code>硬件</code> 中，双击 <code>未使用的磁盘 0</code>，修改 <code>总线/设备</code> 为 <code>SATA</code>，点击 <code>添加</code>。</p><p><img src="https://img.slarker.me/wiki/3146be5972ff47c59456840f356a810f.webp" alt=""></p><p>在 iStoreOS 虚拟机的 <code>选项</code> 中，双击 <code>引导顺序</code>，勾选启用 <code>sata0</code>，并移动到第一个启动顺序，之后点击 <code>OK</code>。</p><p><img src="https://img.slarker.me/wiki/aef755f647cd4160baa57ef494664480.webp" alt=""></p><p>启动 iStoreOS 虚拟机，接下来就可以按自己需求设置为 <code>主路由</code> 或者 <code>旁路由</code> 了。</p><h2 id="重装-fnos" tabindex="-1">重装 fnOS <a class="header-anchor" href="#重装-fnos" aria-label="Permalink to &quot;重装 fnOS&quot;">​</a></h2><p>停止 <code>fnOS</code> 虚拟机，在 <code>fnOS</code> 虚拟机的 <code>硬件</code> 中，添加 <code>CD/DVD 驱动器</code>，选择本地（local）的 <code>fnOS</code> iso 镜像，总线设备选择 <code>SATA</code>。</p><p><img src="https://img.slarker.me/wiki/91bbcf9205e04815a5a7bb96b88a9ce1.webp" alt=""></p><p>在 fnOS 虚拟机的 <code>选项</code> 中，双击 <code>引导顺序</code>，勾选启用 <code>iso</code> 镜像，并移动到第一个启动顺序，之后点击 <code>OK</code>。</p><p><img src="https://img.slarker.me/wiki/21e4bbda264441bdbe9671ee707cfc3e.webp" alt=""></p><p>接下来启动 fnOS 虚拟机，就会首先从 iso 镜像启动，开始安装流程。</p><p>安装完成后，记得先停止 fnOS 虚拟机，将 iso 镜像 <code>移除</code>，系统会从虚拟的系统磁盘（这里为 <code>virtio0</code>）启动。</p>',28)]))}const b=o(i,[["render",t]]);export{m as __pageData,b as default};