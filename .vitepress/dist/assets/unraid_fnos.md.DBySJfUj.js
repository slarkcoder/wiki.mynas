import { _ as e, c as t, a2 as p, o } from "./chunks/framework.eme8ZeBJ.js";
const m = JSON.parse(
    '{"title":"虚拟 fnOS（飞牛 OS）","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/fnos.md","filePath":"unraid/fnos.md","lastUpdated":1725293933000}'
  ),
  n = { name: "unraid/fnos.md" };
function s(c, a, i, d, r, _) {
  return (
    o(),
    t(
      "div",
      null,
      a[0] ||
        (a[0] = [
          p(
            '<h1 id="虚拟-fnos-飞牛-os" tabindex="-1">虚拟 fnOS（飞牛 OS） <a class="header-anchor" href="#虚拟-fnos-飞牛-os" aria-label="Permalink to &quot;虚拟 fnOS（飞牛 OS）&quot;">​</a></h1><p><a href="https://www.fnnas.com/" target="_blank" rel="noreferrer">fnOS</a> 可以说是国产 NAS 系统中的佼佼者，尽管目前处于公测阶段，但其功能已经比较完整。从实际系统体验来看，fnOS 团队的技术实力在国内属于第一梯队，我个人认为，fnOS 成为国内最好的 NAS 系统，只是时间问题。</p><p>如果你想使用 Unraid 的虚拟机功能体验 <code>fnOS</code>，可以按照本教程安装。</p><h2 id="下载镜像" tabindex="-1">下载镜像 <a class="header-anchor" href="#下载镜像" aria-label="Permalink to &quot;下载镜像&quot;">​</a></h2><p>在官网 <a href="https://www.fnnas.com/download" target="_blank" rel="noreferrer">下载 fnOS ISO 镜像公测包</a> 文件，上传到 Unraid 的 <code>isos</code> 共享文件夹。</p><h2 id="建立虚拟机" tabindex="-1">建立虚拟机 <a class="header-anchor" href="#建立虚拟机" aria-label="Permalink to &quot;建立虚拟机&quot;">​</a></h2><p>按下图所示建立虚拟机：</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-30_13-49-02_FtkpmI.png" alt="Snipaste_2024-08-30_13-49-02_FtkpmI"></p><p>fnOS 系统盘只需要不到 70G 的空间就足够，图中我添加的虚拟磁盘 <code>vdisk1</code> 作为系统盘，大小为 80G。添加的虚拟磁盘 <code>vdisk2</code> 作为数据盘，大小为 100G。</p><p>第一次启动，安装 ISO 镜像启动顺序应该为 <code>1</code>，表示首先从 ISO 镜像启动。</p><h2 id="安装系统" tabindex="-1">安装系统 <a class="header-anchor" href="#安装系统" aria-label="Permalink to &quot;安装系统&quot;">​</a></h2><p>启动之后，安装过程很简单，一路下一步，<code>安装位置</code> 选择 <code>80G</code> 的系统盘。</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-30_13-50-05_8IiDsO.png" alt="Snipaste_2024-08-30_13-50-05_8IiDsO"></p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-30_13-50-22_FbrI55.png" alt="Snipaste_2024-08-30_13-50-22_FbrI55"></p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-30_13-51-38_h9hZNu.png" alt="Snipaste_2024-08-30_13-51-38_h9hZNu"></p><p>网卡在安装阶段只能通过 DHCP 自动获取，如果需要设置静态 IP，可以在安装成功之后，在网络中设置。</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-30_13-52-02_7gsl6B.png" alt="Snipaste_2024-08-30_13-52-02_7gsl6B"></p><p>安装完成之后，需要先关机，然后编辑虚拟机配置，移除 ISO 镜像，将系统盘启动顺序设置为 <code>1</code>，之后更新虚拟机配置，开机启动。</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-30_13-52-56_JbKtgQ.png" alt="Snipaste_2024-08-30_13-52-56_JbKtgQ"></p><p>启动完成后，在 VNC 中可以看到 NAS IP 地址和端口。</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-30_13-54-26_WhS3P7.png" alt="Snipaste_2024-08-30_13-54-26_WhS3P7"></p><p>使用浏览器访问 <code>fnOS IP:8000</code>。</p><p><img src="https://img.slarker.me/wiki/Snipaste_2024-08-30_13-53-58_TvaPgi.png" alt="Snipaste_2024-08-30_13-53-58_TvaPgi"></p>',
            23
          ),
        ])
    )
  );
}
const h = e(n, [["render", s]]);
export { m as __pageData, h as default };
