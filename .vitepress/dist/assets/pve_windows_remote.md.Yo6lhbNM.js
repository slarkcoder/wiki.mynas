import {
  _ as e,
  c as o,
  o as a,
  a4 as t,
} from "./chunks/framework.BOW58p_D.js";
const w = JSON.parse(
    '{"title":"远程访问 Windows 虚拟机","description":"","frontmatter":{},"headers":[],"relativePath":"pve/windows_remote.md","filePath":"pve/windows_remote.md","lastUpdated":1714882123000}'
  ),
  r = { name: "pve/windows_remote.md" },
  d = t(
    '<h1 id="远程访问-windows-虚拟机" tabindex="-1">远程访问 Windows 虚拟机 <a class="header-anchor" href="#远程访问-windows-虚拟机" aria-label="Permalink to &quot;远程访问 Windows 虚拟机&quot;">​</a></h1><h2 id="安装-virto-驱动" tabindex="-1">安装 Virto 驱动 <a class="header-anchor" href="#安装-virto-驱动" aria-label="Permalink to &quot;安装 Virto 驱动&quot;">​</a></h2><p>虚拟的 <code>Windows</code> 一般都会默认有一块桥接的虚拟网卡，需要手动安装 <code>VirtIO</code> 驱动才能连上网。</p><p>如果宿主机是 <code>Unraid</code> 驱动可以从 <code>设置</code> -&gt; <code>管理器</code> 中下载，在创建虚拟机的时候选择驱动就行。</p><p><img src="https://slark-blog.s3.bitiful.net/ls2zrvod.spn_xguAii.png" alt="ls2zrvod.spn_xguAii"></p><p>如果宿主机是 PVE，可以从 PVE 官网 <a href="https://pve.proxmox.com/wiki/Windows_VirtIO_Drivers#Installation" target="_blank" rel="noreferrer">下载 VirtIO 驱动</a>，在创建虚拟机的时候额外添加一个 ISO 镜像，装好 <code>Windows</code> 进入系统之后就能直接从 CD 驱动器中安装 <code>VirtIO</code> 驱动。</p><h2 id="开启自动登录" tabindex="-1">开启自动登录 <a class="header-anchor" href="#开启自动登录" aria-label="Permalink to &quot;开启自动登录&quot;">​</a></h2><p>如果想让 <code>Windows</code> 系统开机自动登录账户，常规的办法是修改注册表，而微软官方提供了一个小工具 <a href="https://learn.microsoft.com/zh-tw/sysinternals/downloads/autologon" target="_blank" rel="noreferrer">Autologon</a> 来方便的完成这个操作。</p><p>下载并执行，输入 <code>Windows</code> 账户和密码就可以开启自动登录。</p><h2 id="开启远程桌面" tabindex="-1">开启远程桌面 <a class="header-anchor" href="#开启远程桌面" aria-label="Permalink to &quot;开启远程桌面&quot;">​</a></h2><p>在 Windows 搜索中输入 <code>远程桌面</code>，进去就可以看到开启选项。</p><h2 id="使用微软官方的远程桌面客户端" tabindex="-1">使用微软官方的远程桌面客户端 <a class="header-anchor" href="#使用微软官方的远程桌面客户端" aria-label="Permalink to &quot;使用微软官方的远程桌面客户端&quot;">​</a></h2><p>一般虚拟 Windows 都会自带一个 VNC，但这个 VNC 体验并不好，屏幕分辨率无法调节，使用起来也不流畅。使用微软官方的 <code>Remote Desktop</code> 远程工具，可以自适应屏幕分辨率，体验也很顺畅，推荐使用！</p>',
    13
  ),
  i = [d];
function n(s, c, l, p, h, _) {
  return a(), o("div", null, i);
}
const u = e(r, [["render", n]]);
export { w as __pageData, u as default };
