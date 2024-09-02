import{_ as e,c as o,o as a,a4 as t}from"./chunks/framework.Dx5AVRXu.js";const u=JSON.parse('{"title":"虚拟 HomeAssistantOS","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/haos.md","filePath":"unraid/haos.md","lastUpdated":1719156689000}'),s={name:"unraid/haos.md"},c=t('<h1 id="虚拟-homeassistantos" tabindex="-1">虚拟 HomeAssistantOS <a class="header-anchor" href="#虚拟-homeassistantos" aria-label="Permalink to &quot;虚拟 HomeAssistantOS&quot;">​</a></h1><p>HomeAssistant 可以通过独立的 HAOS，Docker，Core，Supervised 等方式安装，各个版本区别如下：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/m5clphqn.bnz_aboQwI.png" alt="m5clphqn.bnz_aboQwI"></p><p>HAOS 对各种特性支持最完整，因此只要条件允许，推荐安装 HAOS。</p><h2 id="获取镜像" tabindex="-1">获取镜像 <a class="header-anchor" href="#获取镜像" aria-label="Permalink to &quot;获取镜像&quot;">​</a></h2><p>HAOS 的镜像可以从 <a href="https://www.home-assistant.io/installation/generic-x86-64#method-2-installing-haos-directly-from-a-boot-medium" target="_blank" rel="noreferrer">官网下载</a>。</p><p>下载解压后，将 <code>img</code> 文件保存到 Unraid 的 <code>domains</code> 目录中。</p><h2 id="创建虚拟机" tabindex="-1">创建虚拟机 <a class="header-anchor" href="#创建虚拟机" aria-label="Permalink to &quot;创建虚拟机&quot;">​</a></h2><p>在 Unraid 虚拟机中点击 <code>添加虚拟机</code>，选择 <code>Linux</code>。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/ID1kpi_J4VoFX.png" alt="ID1kpi_J4VoFX"></p><p>CPU 和内存按需选择，BIOS 选择 <code>OVMF</code>，主要虚拟磁盘选择 <code>domains</code> 目录中的 <code>haos_generic-x86-64-12.4.img</code>，磁盘总线选择 <code>SATA</code>，最后点击创建。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/kuEuQr_j9q1jZ.png" alt="kuEuQr_j9q1jZ"></p><p>稍等片刻，虚拟机启动完成后，在控制台就可以看到 <code>HAOS IP</code> 地址和端口（默认端口：8123）。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/oq32rge0.ezq_PISmU2.png" alt="oq32rge0.ezq_PISmU2"></p><p>在浏览器中输入 <code>HAOS IP 地址:端口</code>，即可进入 HAOS 登录页面。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/9LLmjY_DBBllt.png" alt="9LLmjY_DBBllt"></p>',16),d=[c];function i(n,r,p,m,h,l){return a(),o("div",null,d)}const g=e(s,[["render",i]]);export{u as __pageData,g as default};
