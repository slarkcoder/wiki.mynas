import {
  _ as e,
  c as a,
  a2 as i,
  o as d,
} from "./chunks/framework.eme8ZeBJ.js";
const h = JSON.parse(
    '{"title":"虚拟 Windows","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/windows.md","filePath":"unraid/windows.md","lastUpdated":1725293933000}'
  ),
  n = { name: "unraid/windows.md" };
function t(c, o, r, l, s, p) {
  return (
    d(),
    a(
      "div",
      null,
      o[0] ||
        (o[0] = [
          i(
            '<h1 id="虚拟-windows" tabindex="-1">虚拟 Windows <a class="header-anchor" href="#虚拟-windows" aria-label="Permalink to &quot;虚拟 Windows&quot;">​</a></h1><p>本篇以安装 Windows 10 为例，介绍如何在 Unraid 中安装 Windows 虚拟机。</p><h2 id="资源" tabindex="-1">资源 <a class="header-anchor" href="#资源" aria-label="Permalink to &quot;资源&quot;">​</a></h2><ul><li><a href="https://www.123pan.com/s/1JKMjv-xbxo.html" target="_blank" rel="noreferrer">Win_10_22H2_64BIT</a></li><li><a href="https://www.123pan.com/s/1JKMjv-abxo.html" target="_blank" rel="noreferrer">Win_11_23H2_64BIT</a></li><li><a href="https://www.123pan.com/s/1JKMjv-Bbxo.html" target="_blank" rel="noreferrer">VirtIO 驱动</a></li><li><a href="https://learn.microsoft.com/zh-cn/sysinternals/downloads/autologon" target="_blank" rel="noreferrer">Autologon</a>，开启 Windows 自动登录</li></ul><h2 id="安装-windows" tabindex="-1">安装 Windows <a class="header-anchor" href="#安装-windows" aria-label="Permalink to &quot;安装 Windows&quot;">​</a></h2><p>Unraid 可以直接在 <code>设置</code> -&gt; <code>虚拟机管理器</code> 中 <code>下载 VirtIO 驱动</code>，也可以手动下载上面提供的 VirtIO 驱动，上传到 <code>iso</code> 共享文件夹中。：</p><p><img src="https://img.slarker.me/wiki/unraid_win10_1_qQ29fS.png" alt="unraid_win10_1_qQ29fS"></p><p>下载 Windows 镜像，上传到 <code>iso</code> 共享文件夹中。</p><p><img src="https://img.slarker.me/wiki/unraid_win10_2_bgq58G.png" alt="unraid_win10_2_bgq58G"></p><p>在 <code>虚拟机</code> 标签页中 <code>添加虚拟机</code>，选择 <code>Windows 10</code>。</p><p><img src="https://img.slarker.me/wiki/unraid_win10_3_7au6ir.png" alt="unraid_win10_3_7au6ir"></p><ul><li>设置虚拟机名称</li><li>勾选逻辑 CPU</li><li>选择内存大小</li><li>机器选择 <code>Q35-7.2</code></li><li>BIOS 选择 <code>SeaBIOS</code></li><li>选择 <code>系统</code> ISO 镜像，总线选择 <code>SATA</code>，启动顺序改为 <code>1</code></li><li>选择 <code>VirtIO 驱动</code> ISO 镜像，总线选择 <code>SATA</code></li><li>选择主要虚拟磁盘的存储位置，并设置大小，注意单位为 <code>G</code>，启动顺序改为 <code>2</code></li></ul><p><img src="https://img.slarker.me/wiki/unraid_win10_4_XbW6li.png" alt="unraid_win10_4_XbW6li"></p><p>其它的设置保持默认，点击创建后会打开控制台，可以看到安装界面，按正常安装 Windows 10 来操作即可。</p><p><img src="https://img.slarker.me/wiki/unraid_win10_5_LFLLaR.png" alt="unraid_win10_5_LFLLaR"></p><p>安装完成之后，关闭虚拟 Windows 10，将系统 ISO 镜像移除，将虚拟磁盘的启动顺序修改为 <code>1</code> 并更新虚拟机。</p><p><img src="https://img.slarker.me/wiki/unraid_win10_6_LOtk82.png" alt="unraid_win10_6_LOtk82"></p><h2 id="安装-virtio-驱动" tabindex="-1">安装 VirtIO 驱动 <a class="header-anchor" href="#安装-virtio-驱动" aria-label="Permalink to &quot;安装 VirtIO 驱动&quot;">​</a></h2><p>虚拟的 <code>Windows</code> 默认都会有一块桥接的虚拟网卡，需要手动安装 <code>VirtIO</code> 驱动才能连上网。在资源管理器中打开 <code>VirtIO CD 驱动器</code>，运行最下面的 <code>virtio-win-gt-x64</code>，一路下一步就能装好驱动，装完驱动之后，Windows 就能正常上网了。</p><p><img src="https://img.slarker.me/wiki/i4im3l1u.rb4_p6RUsw.png" alt="i4im3l1u.rb4_p6RUsw"></p><h2 id="开启自动登录" tabindex="-1">开启自动登录 <a class="header-anchor" href="#开启自动登录" aria-label="Permalink to &quot;开启自动登录&quot;">​</a></h2><p>如果想让 <code>Windows</code> 系统开机自动登录账户，常规的办法是修改注册表，而微软官方提供了一个小工具 <a href="https://learn.microsoft.com/zh-tw/sysinternals/downloads/autologon" target="_blank" rel="noreferrer">Autologon</a> 可以方便的开启自动登录。</p><p>下载并执行，输入 <code>Windows</code> 用户名和密码，点击 <code>Enable</code> 就可以开启自动登录。</p><p><img src="https://img.slarker.me/wiki/KserGB_8twBGt.png" alt="KserGB_8twBGt"></p><h2 id="开启远程桌面" tabindex="-1">开启远程桌面 <a class="header-anchor" href="#开启远程桌面" aria-label="Permalink to &quot;开启远程桌面&quot;">​</a></h2><p>在 Windows 搜索中输入 <code>远程桌面设置</code>，进去就可以看到 <code>启用远程桌面</code> 选项。</p><p><img src="https://img.slarker.me/wiki/n7891m_75k1dl.png" alt="n7891m_75k1dl"></p><h2 id="使用微软官方的远程桌面客户端" tabindex="-1">使用微软官方的远程桌面客户端 <a class="header-anchor" href="#使用微软官方的远程桌面客户端" aria-label="Permalink to &quot;使用微软官方的远程桌面客户端&quot;">​</a></h2><p>一般虚拟 Windows 都会自带一个 VNC，但这个 VNC 体验并不好，屏幕分辨率无法调节，使用起来也不流畅。使用微软官方的 <code>Remote Desktop</code> 远程工具，可以自适应屏幕分辨率，体验也很顺畅，推荐使用！</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-05-22_18-28-17_mwv9Sr.jpg" alt="Snipaste_2024-05-22_18-28-17_mwv9Sr"></p>',
            30
          ),
        ])
    )
  );
}
const _ = e(n, [["render", t]]);
export { h as __pageData, _ as default };
