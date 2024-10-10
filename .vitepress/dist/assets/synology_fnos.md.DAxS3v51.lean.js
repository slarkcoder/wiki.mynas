import {
  _ as e,
  c as p,
  a2 as o,
  o as a,
} from "./chunks/framework.eme8ZeBJ.js";
const l = JSON.parse(
    '{"title":"虚拟 fnOS (飞牛OS)","description":"","frontmatter":{},"headers":[],"relativePath":"synology/fnos.md","filePath":"synology/fnos.md","lastUpdated":1725293933000}'
  ),
  t = { name: "synology/fnos.md" };
function n(s, c, i, d, _, g) {
  return (
    a(),
    p(
      "div",
      null,
      c[0] ||
        (c[0] = [
          o(
            '<h1 id="虚拟-fnos-飞牛os" tabindex="-1">虚拟 fnOS (飞牛OS) <a class="header-anchor" href="#虚拟-fnos-飞牛os" aria-label="Permalink to &quot;虚拟 fnOS (飞牛OS)&quot;">​</a></h1><p><a href="https://www.fnnas.com/" target="_blank" rel="noreferrer">fnOS</a> 可以说是国产 NAS 系统中的佼佼者，尽管目前处于公测阶段，但其功能已经比较完整。从实际系统体验来看，fnOS 团队的技术实力在国内属于第一梯队，我个人认为，fnOS 成为国内最好的 NAS 系统，只是时间问题。</p><p>如果你想使用群晖的虚拟机功能体验 <code>fnOS</code>，可以按照本教程安装。</p><h2 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-label="Permalink to &quot;准备&quot;">​</a></h2><ul><li>在套件中心安装 <code>Virtual Machine Manager</code> 套件</li><li><code>在控制面板</code> -&gt; <code>网络</code> -&gt; <code>网络界面</code> -&gt; <code>管理</code> -&gt; <code>Open vSwitch 设置</code> 中 <code>启用 Open vSwitch</code></li><li>在官网 <a href="https://www.fnnas.com/download" target="_blank" rel="noreferrer">下载 fnOS ISO 镜像公测包</a> 文件。</li></ul><p>打开 <code>Virtual Machine Manager</code> 后确认条件都符合要求。</p><p><img src="https://img.slarker.me/wiki/glugn1ff.4dk_AkTpCf.png" alt="glugn1ff.4dk_AkTpCf"></p><p>将 ISO 镜像上传到 <code>Virtual Machine Manager</code> 中。</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-30_21-15-56_pg6lXm.png" alt="Snipaste_2024-08-30_21-15-56_pg6lXm"></p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-30_21-16-39_FmikVx.png" alt="Snipaste_2024-08-30_21-16-39_FmikVx"></p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-30_21-17-00_EicZTT.png" alt="Snipaste_2024-08-30_21-17-00_EicZTT"></p><h2 id="建立虚拟机" tabindex="-1">建立虚拟机 <a class="header-anchor" href="#建立虚拟机" aria-label="Permalink to &quot;建立虚拟机&quot;">​</a></h2><p>按下图所示建立虚拟机：</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-30_21-21-35_27lvmj.png" alt="Snipaste_2024-08-30_21-21-35_27lvmj"></p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-30_21-22-11_AiZp4w.png" alt="Snipaste_2024-08-30_21-22-11_AiZp4w"></p><p>点开 <code>CPU</code> 右边的齿轮，将 <code>启用 Hyper-V Enlightenments</code> 取消勾选，内存建议至少分配 <code>2G</code>，视频卡选择 <code>vga</code>，机器类型选择 <code>Q35</code>。</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-30_22-22-23_EChYjX.png" alt="Snipaste_2024-08-30_22-22-23_EChYjX"></p><p>fnOS 系统盘只需要不到 70G 的空间就足够，图中我添加的 <code>虚拟盘 1</code> 作为系统盘，大小为 80G，磁盘类型点开右边的齿轮选择 <code>SATA 控制器</code>。</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-30_21-40-43_vLp5B1.png" alt="Snipaste_2024-08-30_21-40-43_vLp5B1"></p><p>网络类型保持默认，默认的网络驱动是 <code>virtio</code>，fnOS 基于 Debian 开发，对 <code>virtio</code> 支持一般都没啥问题。</p><p><img src="https://img.slarker.me/wiki/tfqJRU_gr9fwW.png" alt="tfqJRU_gr9fwW"></p><p>启动 ISO 文件选择 fnOS 映像 <code>TRIM</code>，固件类型选择 <code>UEFI</code>。</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-30_21-43-30_iGChwm.png" alt="Snipaste_2024-08-30_21-43-30_iGChwm"></p><p>电源权限都勾选。</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-30_21-46-26_U1M6tY.png" alt="Snipaste_2024-08-30_21-46-26_U1M6tY"></p><p>确认没有问题，点击 <code>完成</code>。</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-30_22-22-54_k5yPNh.png" alt="Snipaste_2024-08-30_22-22-54_k5yPNh"></p><p>创建完成之后，点击 <code>开机</code>，选中 <code>fnOS</code> 虚拟机，点击 <code>连接</code>，即可打开虚拟机的 VNC 控制台。</p><p><img src="https://img.slarker.me/wiki/Maoj4R_xaQWJ6.png" alt="Maoj4R_xaQWJ6"></p><h2 id="安装系统" tabindex="-1">安装系统 <a class="header-anchor" href="#安装系统" aria-label="Permalink to &quot;安装系统&quot;">​</a></h2><p>启动之后，安装过程很简单，一路下一步，<code>安装位置</code> 选择 <code>80G</code> 的系统盘。</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-30_21-47-17_FmcJxO.png" alt="Snipaste_2024-08-30_21-47-17_FmcJxO"></p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-30_13-50-22_FbrI55.png" alt="Snipaste_2024-08-30_13-50-22_FbrI55"></p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-30_13-51-38_h9hZNu.png" alt="Snipaste_2024-08-30_13-51-38_h9hZNu"></p><p>网卡在安装阶段只能通过 DHCP 自动获取，如果需要设置静态 IP，可以在安装成功之后，在网络中设置。</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-30_13-52-02_7gsl6B.png" alt="Snipaste_2024-08-30_13-52-02_7gsl6B"></p><p>安装完成之后，会自动从 <code>80G</code> 的虚拟系统盘启动。启动完成后，在 VNC 中可以看到 NAS IP 地址和端口。</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-30_13-54-26_WhS3P7.png" alt="Snipaste_2024-08-30_13-54-26_WhS3P7"></p><p>使用浏览器访问 <code>fnOS IP:8000</code>。</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-30_13-53-58_TvaPgi.png" alt="Snipaste_2024-08-30_13-53-58_TvaPgi"></p>',
            40
          ),
        ])
    )
  );
}
const r = e(t, [["render", n]]);
export { l as __pageData, r as default };
