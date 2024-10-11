import{_ as a,c as s,a2 as i,o as p}from"./chunks/framework.eme8ZeBJ.js";const m=JSON.parse('{"title":"虚拟 HomeAssistantOS","description":"","frontmatter":{},"headers":[],"relativePath":"pve/haos.md","filePath":"pve/haos.md","lastUpdated":1728523562000}'),t={name:"pve/haos.md"};function o(c,e,d,l,r,h){return p(),s("div",null,e[0]||(e[0]=[i(`<h1 id="虚拟-homeassistantos" tabindex="-1">虚拟 HomeAssistantOS <a class="header-anchor" href="#虚拟-homeassistantos" aria-label="Permalink to &quot;虚拟 HomeAssistantOS&quot;">​</a></h1><p>HomeAssistant 可以通过独立的 HAOS，Docker，Core，Supervised 等方式安装，各个版本区别如下：</p><p><img src="https://img.slarker.me/wiki/m5clphqn.bnz_aboQwI.png" alt="m5clphqn.bnz_aboQwI"></p><p>HAOS 对各种特性支持最完整，因此只要条件允许，推荐安装 HAOS。本篇就来介绍如何在 PVE 中虚拟 HAOS。</p><h2 id="获取镜像" tabindex="-1">获取镜像 <a class="header-anchor" href="#获取镜像" aria-label="Permalink to &quot;获取镜像&quot;">​</a></h2><p>HAOS 的 PVE 虚拟机镜像可以从 <a href="https://github.com/home-assistant/operating-system/releases" target="_blank" rel="noreferrer">Github 下载</a>，比如最新的适合 PVE 的镜像为：<code>haos_ova-13.1.qcow2.xz</code>，下载后解压得到 <code>haos_ova-13.1.qcow2</code>，将这个镜像放到电脑桌面上。</p><h2 id="创建虚拟机" tabindex="-1">创建虚拟机 <a class="header-anchor" href="#创建虚拟机" aria-label="Permalink to &quot;创建虚拟机&quot;">​</a></h2><p>新建虚拟机，名称填写：<code>HAOS</code>。</p><p><img src="https://img.slarker.me/wiki/644a159a929a4832be4e1d194915e690.webp" alt=""></p><p>操作系统选择 <code>不使用任何介质</code>，操作系统保持默认。</p><p><img src="https://img.slarker.me/wiki/276058b5baaf4e6da10b01fd22278f76.webp" alt=""></p><p>机型选择 <code>i440fx</code>，BIOS 选择 <code>OVMF（UEFI）</code>，取消勾选 <code>添加 EFI 磁盘</code>。</p><p><img src="https://img.slarker.me/wiki/f1f65f1f105c427783994153cc593b51.webp" alt=""></p><p>删除默认的 SCSI 磁盘。</p><p><img src="https://img.slarker.me/wiki/a355f4f2efa64809afd5cc21a5dd3482.webp" alt=""></p><p>CPU 核心可以按需选择，这里选 <code>2</code> 核心，类别改为 <code>host</code>。</p><p><img src="https://img.slarker.me/wiki/e0ef35b5449543bb9da4e65d7e65bbd1.webp" alt=""></p><p>内存设置为 <code>2048</code> MB，也就是 2GB 大小。</p><p><img src="https://img.slarker.me/wiki/c74818a56e0644a0a685a9713c84398d.webp" alt=""></p><p>网络保持默认。</p><p><img src="https://img.slarker.me/wiki/caff5286e4d742938a0de6aa347667f9.webp" alt=""></p><p>确认设置没有问题，点击 <code>完成</code>。</p><p><img src="https://img.slarker.me/wiki/b9f64fb9a7d24fcd95a6d7c81ddafa2e.webp" alt=""></p><h2 id="导入镜像" tabindex="-1">导入镜像 <a class="header-anchor" href="#导入镜像" aria-label="Permalink to &quot;导入镜像&quot;">​</a></h2><p>适用于 PVE 的镜像格式为 <code>qcow2</code>，不能直接通过 PVE 的 <code>ISO 镜像</code> 上传。我们可以通过 <code>scp</code> 命令将镜像直接上传到 PVE 的临时目录 <code>/tmp</code> 下面。</p><p>以我使用的 <code>macOS</code> 为例，可以通过下面的命令来上传到 PVE 的 <code>/tmp</code> 目录：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 命令格式：scp [本机文件路径] root@[pve ip 地址]:/tmp</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /Users/slark/Desktop/haos_ova-13.1.qcow2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root@192.168.2.200:/tmp</span></span></code></pre></div><p>如果是 <code>Windows</code>，可以使用自带的 <code>Terminal</code> 或者第三方的终端（比如 putty，xshell 等）执行 <code>scp</code> 命令，也可以直接使用 <code>winscp</code> 上传文件。</p><p>上传完成之后，可以在 PVE 的 <code>shell</code> 中使用下面的命令导入镜像：</p><div class="info custom-block"><p class="custom-block-title">提示</p><p>此处命令末尾为 local 是因为在 PVE 安装好之后，将 local 和 local-lvm 进行了合并，所以此时只有 local。</p></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 100 为 HAOS 虚拟机 ID，local 为 PVE 的存储空间</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">qm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> importdisk</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /tmp/haos_ova-13.1.qcow2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> local</span></span></code></pre></div><p>导入完成就会在 HAOS 的硬件中看到一个 <code>未使用的磁盘 0</code>，双击添加硬盘，<code>总线/设备</code> 改为 <code>SATA</code>，点击 <code>添加</code>。</p><p><img src="https://img.slarker.me/wiki/202409212330627.webp" alt=""></p><p>接下来在 <code>选项</code> 中设置 <code>引导顺序</code>，将 sata0 已启用勾选，并移动到第一个位置，将其它的两个设备取消勾选。</p><p><img src="https://img.slarker.me/wiki/202409212329936.webp" alt=""></p><p>最后就可以启动 <code>HAOS</code> 虚拟机了。如果一切正常，稍等就可以看到启动成功的界面：</p><p><img src="https://img.slarker.me/wiki/ba976e15f6ff4a5e8587c34749295728.webp" alt=""></p><p>可以直接在浏览器中访问显示的 <code>HAOS IP:8123</code>。</p><p><img src="https://img.slarker.me/wiki/7a2eec06842a4e2786b97504dbcb2fbb.webp" alt=""></p>`,39)]))}const k=a(t,[["render",o]]);export{m as __pageData,k as default};