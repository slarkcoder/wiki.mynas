import {
  _ as e,
  c as i,
  a2 as r,
  o as t,
} from "./chunks/framework.eme8ZeBJ.js";
const u = JSON.parse(
    '{"title":"Unraid 必装的一些插件","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/plugins.md","filePath":"unraid/plugins.md","lastUpdated":1725293933000}'
  ),
  n = { name: "unraid/plugins.md" };
function o(d, a, s, c, p, l) {
  return (
    t(),
    i(
      "div",
      null,
      a[0] ||
        (a[0] = [
          r(
            '<h1 id="unraid-必装的一些插件" tabindex="-1">Unraid 必装的一些插件 <a class="header-anchor" href="#unraid-必装的一些插件" aria-label="Permalink to &quot;Unraid 必装的一些插件&quot;">​</a></h1><p>本篇教程给大家推荐一些 Unraid 必装的插件。</p><h2 id="dynamix-file-manager" tabindex="-1">Dynamix File Manager <a class="header-anchor" href="#dynamix-file-manager" aria-label="Permalink to &quot;Dynamix File Manager&quot;">​</a></h2><p>Unraid 官方的文件管理器，基础功能够用，如果不想装第三方的管理器，那这个就是必备的。安装后在右上角会有下图所示的图标。</p><p><img src="https://img.slarker.me/wiki/bjO62T_F8p5yb.png" alt="bjO62T_F8p5yb"></p><h2 id="unassigned-devices" tabindex="-1">Unassigned Devices <a class="header-anchor" href="#unassigned-devices" aria-label="Permalink to &quot;Unassigned Devices&quot;">​</a></h2><p>通常用来挂载远程 NAS 设备的 SMB、NFS 共享文件夹。</p><p>如果要挂载远程的 SMB 和 NFS 共享文件夹，需要先确保本机的 SMB 或 NFS 服务已开启。</p><h2 id="unassigned-devices-plus" tabindex="-1">Unassigned Devices Plus <a class="header-anchor" href="#unassigned-devices-plus" aria-label="Permalink to &quot;Unassigned Devices Plus&quot;">​</a></h2><p>这个插件可以支持更多的文件磁盘格式，比如 HFS+、exFAT、APFS。</p><h2 id="user-scripts" tabindex="-1">User Scripts <a class="header-anchor" href="#user-scripts" aria-label="Permalink to &quot;User Scripts&quot;">​</a></h2><p>可以方便的运行一些脚本，定时任务。比如 PhotoPrism 的定时索引脚本。</p><h2 id="compose-manager" tabindex="-1">Compose Manager <a class="header-anchor" href="#compose-manager" aria-label="Permalink to &quot;Compose Manager&quot;">​</a></h2><p>Unraid 默认自带 Docker，使用 Docker Compose 可以运行一些更复杂的容器组合。</p><h2 id="ca-auto-update-applications" tabindex="-1">CA Auto Update Applications <a class="header-anchor" href="#ca-auto-update-applications" aria-label="Permalink to &quot;CA Auto Update Applications&quot;">​</a></h2><p>可以实现自动更新 Docker 应用以及插件。</p><h2 id="intel-gpu-top-仅适用-intel-带核显-cpu" tabindex="-1">Intel GPU TOP（仅适用 Intel 带核显 CPU） <a class="header-anchor" href="#intel-gpu-top-仅适用-intel-带核显-cpu" aria-label="Permalink to &quot;Intel GPU TOP（仅适用 Intel 带核显 CPU）&quot;">​</a></h2><p>安装后可以通过 <code>intel_gpu_top</code> 命令查看 GPU 占用情况。</p><h2 id="nvidia-driver-仅适用-nvidia-gpu" tabindex="-1">Nvidia-Driver（仅适用 Nvidia GPU） <a class="header-anchor" href="#nvidia-driver-仅适用-nvidia-gpu" aria-label="Permalink to &quot;Nvidia-Driver（仅适用 Nvidia GPU）&quot;">​</a></h2><p>安装后需要在插件里再安装对应的 Nvidia 驱动。</p><h2 id="gpu-statistics" tabindex="-1">GPU Statistics <a class="header-anchor" href="#gpu-statistics" aria-label="Permalink to &quot;GPU Statistics&quot;">​</a></h2><p>前置条件：安装 <code>Intel GPU TOP</code> 或者 <code>Nvidia-Driver</code>。</p><p>可以让 GPU 占用情况直接显示在 Unraid 面板山。安装后在仪表板的 GPU 模块里选中 GPU 显卡。</p><p><img src="https://img.slarker.me/wiki/7frKWZ_Czob7R.png" alt="7frKWZ_Czob7R"></p><h2 id="dynamix-system-temperature" tabindex="-1">Dynamix System Temperature <a class="header-anchor" href="#dynamix-system-temperature" aria-label="Permalink to &quot;Dynamix System Temperature&quot;">​</a></h2><p>可以在 Unraid 仪表板显示 CPU 和主板温度的插件。</p><p><img src="https://img.slarker.me/wiki/HdGsUe_MHctSf.png" alt="HdGsUe_MHctSf"></p><h2 id="gui-search" tabindex="-1">GUI Search <a class="header-anchor" href="#gui-search" aria-label="Permalink to &quot;GUI Search&quot;">​</a></h2><p>快速查找 Unraid 功能，设置的插件，当你不知道想要的功能在哪里的时候非常有用。</p><p><img src="https://img.slarker.me/wiki/3wzbahqq.vqj_6CakFO.png" alt="3wzbahqq.vqj_6CakFO"></p><h2 id="nerdtools" tabindex="-1">NerdTools <a class="header-anchor" href="#nerdtools" aria-label="Permalink to &quot;NerdTools&quot;">​</a></h2><p>Unraid 上的包管理工具，可以方便安装第三方工具。比如常用的 <code>python</code>，<code>7z</code>，<code>zsh</code> 等等都可以直接在 <code>NerdTools</code> 中安装。</p><p><img src="https://img.slarker.me/wiki/d02rufl2.0oq_c0j5XO.png" alt="d02rufl2.0oq_c0j5XO"></p><h2 id="unbalanced" tabindex="-1">unbalanced <a class="header-anchor" href="#unbalanced" aria-label="Permalink to &quot;unbalanced&quot;">​</a></h2><p>Unraid 上的文件归集、转移插件。由于 Unraid 磁盘阵列的存储机制，一个文件夹中的内容可能会分散到多个不同的硬盘上，如果你想把文件夹中的内容都集中到一块硬盘上，那这个插件就能帮上你的大忙。</p>',
            35
          ),
        ])
    )
  );
}
const m = e(n, [["render", o]]);
export { u as __pageData, m as default };
