import {
  _ as e,
  c as a,
  a2 as c,
  o as i,
} from "./chunks/framework.eme8ZeBJ.js";
const _ = JSON.parse(
    '{"title":"虚拟 Windows","description":"","frontmatter":{},"headers":[],"relativePath":"pve/windows.md","filePath":"pve/windows.md","lastUpdated":1725293933000}'
  ),
  d = { name: "pve/windows.md" };
function t(n, o, p, s, r, l) {
  return (
    i(),
    a(
      "div",
      null,
      o[0] ||
        (o[0] = [
          c(
            '<h1 id="虚拟-windows" tabindex="-1">虚拟 Windows <a class="header-anchor" href="#虚拟-windows" aria-label="Permalink to &quot;虚拟 Windows&quot;">​</a></h1><p>本篇以安装 Windows 10 为例，介绍如何在 PVE 中安装 Windows 虚拟机。</p><h2 id="资源" tabindex="-1">资源 <a class="header-anchor" href="#资源" aria-label="Permalink to &quot;资源&quot;">​</a></h2><ul><li><a href="https://www.123pan.com/s/1JKMjv-xbxo.html" target="_blank" rel="noreferrer">Win_10_22H2_64BIT</a></li><li><a href="https://www.123pan.com/s/1JKMjv-abxo.html" target="_blank" rel="noreferrer">Win_11_23H2_64BIT</a></li><li><a href="https://www.123pan.com/s/1JKMjv-b2fo.html" target="_blank" rel="noreferrer">VirtIO 驱动</a></li><li><a href="https://learn.microsoft.com/zh-cn/sysinternals/downloads/autologon" target="_blank" rel="noreferrer">Autologon</a>，开启 Windows 自动登录</li></ul><h2 id="安装-windows" tabindex="-1">安装 Windows <a class="header-anchor" href="#安装-windows" aria-label="Permalink to &quot;安装 Windows&quot;">​</a></h2><h3 id="上传-iso-镜像" tabindex="-1">上传 ISO 镜像 <a class="header-anchor" href="#上传-iso-镜像" aria-label="Permalink to &quot;上传 ISO 镜像&quot;">​</a></h3><p>下载上面提供的 Windows 10 镜像以及 Virtio 驱动，你也可以自己从官网下载，并上传到 PVE 的 <code>ISO 镜像</code> 中。</p><p><img src="https://img.slarker.me/wiki/aOpGeJ_dMNn3m.png" alt="aOpGeJ_dMNn3m"></p><h3 id="创建虚拟机" tabindex="-1">创建虚拟机 <a class="header-anchor" href="#创建虚拟机" aria-label="Permalink to &quot;创建虚拟机&quot;">​</a></h3><p>点击 PVE 右上角的 <code>创建虚拟机</code> 按钮，按下面的步骤来操作。</p><p>填写虚拟机名称：<code>Windows10</code>，点击下一步。</p><p><img src="https://img.slarker.me/wiki/pve_win10_1_F1YGm9.png" alt="pve_win10_1_F1YGm9"></p><p>选择使用 CD/DVD 光盘镜像文件（ISO），也就是 <code>Windows 10 ISO 镜像</code>，选择操作系统为 <code>Microsoft Windows</code>，版本选 <code>10/2016/2019</code>，勾选 <code>为 VirtIO 驱动程序添加额外的驱动器</code>，并选择 <code>Virtio-win-0.1.240.iso</code> 驱动，点击下一步。</p><p><img src="https://img.slarker.me/wiki/pve_win10_2_J2Ak9w.png" alt="pve_win10_2_J2Ak9w"></p><p>机型选择 <code>q35</code>，点击下一步。</p><p><img src="https://img.slarker.me/wiki/pve_win10_3_PDmXlT.png" alt="pve_win10_3_PDmXlT"></p><p>磁盘 <code>总线/设备</code> 切换为 <code>SATA</code>，磁盘大小按你的实际情况来填写（建议至少 50G，也就是 Windows 的系统盘），点击下一步。</p><p><img src="https://img.slarker.me/wiki/pve_win10_4_VJrrLX.png" alt="pve_win10_4_VJrrLX"></p><p>CPU 核心可以按需填写，最大不要超过 CPU 的物理核心数量，类别改成 <code>host</code>，点击下一步。</p><p><img src="https://img.slarker.me/wiki/pve_win10_5_jVa58a.png" alt="pve_win10_5_jVa58a"></p><p>内存最少分配 4G（4096MB），物理内存比较充足可以多分点，注意这里单位是 <code>MB</code>，点击下一步。</p><p><img src="https://img.slarker.me/wiki/pve_win10_6_Iu4xqa.png" alt="pve_win10_6_Iu4xqa"></p><p>网络不用修改，保持默认，点击下一步。</p><p><img src="https://img.slarker.me/wiki/pve_win10_7_HQMrns.png" alt="pve_win10_7_HQMrns"></p><p>确认所有信息没问题，点击完成。</p><p><img src="https://img.slarker.me/wiki/pve_win10_8_devcv5.png" alt="pve_win10_8_devcv5"></p><p>到 Windows 10 虚拟机的 <code>选项</code> 中修改 <code>引导顺序</code>，将 Windows 10 ISO 镜像设置为第一个启动，SATA 磁盘设置为第二个启动，其它的都取消勾选。如果需要 Windows 开机自启，也可以将 <code>开机自启动</code> 改为 <code>是</code>。点击 OK。</p><p><img src="https://img.slarker.me/wiki/pve_win10_9_vmKsKw.png" alt="pve_win10_9_vmKsKw"></p><p>设置好之后，就可以点击启动虚拟机了，不出意外的话，在虚拟机的 <code>控制台</code> 里就会显示正常 Windows 10 的安装界面。</p><p><img src="https://img.slarker.me/wiki/pve_win10_10_23LiPg.png" alt="pve_win10_10_23LiPg"></p><p>接下来就是正常的安装过程，按提示安装即可。安装完成之后关闭 Windows 10 虚拟机，在 <code>引导顺序</code> 中将 SATA 磁盘设置为第一启动。</p><h2 id="安装-virtio-驱动" tabindex="-1">安装 VirtIO 驱动 <a class="header-anchor" href="#安装-virtio-驱动" aria-label="Permalink to &quot;安装 VirtIO 驱动&quot;">​</a></h2><p>虚拟的 <code>Windows</code> 默认都会有一块桥接的虚拟网卡，需要手动安装 <code>VirtIO</code> 驱动才能连上网。在资源管理器中打开 <code>VirtIO CD 驱动器</code>，运行最下面的 <code>virtio-win-gt-x64</code>，一路下一步就能装好驱动，装完驱动之后，Windows 就能正常上网了。</p><p><img src="https://img.slarker.me/wiki/i4im3l1u.rb4_p6RUsw.png" alt="i4im3l1u.rb4_p6RUsw"></p><h2 id="开启自动登录" tabindex="-1">开启自动登录 <a class="header-anchor" href="#开启自动登录" aria-label="Permalink to &quot;开启自动登录&quot;">​</a></h2><p>如果想让 <code>Windows</code> 系统开机自动登录账户，常规的办法是修改注册表，而微软官方提供了一个小工具 <a href="https://learn.microsoft.com/zh-tw/sysinternals/downloads/autologon" target="_blank" rel="noreferrer">Autologon</a> 可以方便的开启自动登录。</p><p>下载并执行，输入 <code>Windows</code> 用户名和密码，点击 <code>Enable</code> 就可以开启自动登录。</p><p><img src="https://img.slarker.me/wiki/KserGB_8twBGt.png" alt="KserGB_8twBGt"></p><h2 id="开启远程桌面" tabindex="-1">开启远程桌面 <a class="header-anchor" href="#开启远程桌面" aria-label="Permalink to &quot;开启远程桌面&quot;">​</a></h2><p>在 Windows 搜索中输入 <code>远程桌面设置</code>，进去就可以看到 <code>启用远程桌面</code> 选项。</p><p><img src="https://img.slarker.me/wiki/n7891m_75k1dl.png" alt="n7891m_75k1dl"></p><h2 id="使用微软官方的远程桌面客户端" tabindex="-1">使用微软官方的远程桌面客户端 <a class="header-anchor" href="#使用微软官方的远程桌面客户端" aria-label="Permalink to &quot;使用微软官方的远程桌面客户端&quot;">​</a></h2><p>一般虚拟 Windows 都会自带一个 VNC，但这个 VNC 体验并不好，屏幕分辨率无法调节，使用起来也不流畅。使用微软官方的 <code>Remote Desktop</code> 远程工具，可以自适应屏幕分辨率，体验也很顺畅，推荐使用！</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-05-22_18-28-17_mwv9Sr.jpg" alt="Snipaste_2024-05-22_18-28-17_mwv9Sr"></p>',
            44
          ),
        ])
    )
  );
}
const h = e(d, [["render", t]]);
export { _ as __pageData, h as default };
