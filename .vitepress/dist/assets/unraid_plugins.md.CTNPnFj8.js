import {
  _ as a,
  c as e,
  o as i,
  a4 as t,
} from "./chunks/framework.BOW58p_D.js";
const g = JSON.parse(
    '{"title":"Unraid 必装的一些插件","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/plugins.md","filePath":"unraid/plugins.md","lastUpdated":1711511608000}'
  ),
  r = { name: "unraid/plugins.md" },
  n = t(
    '<h1 id="unraid-必装的一些插件" tabindex="-1">Unraid 必装的一些插件 <a class="header-anchor" href="#unraid-必装的一些插件" aria-label="Permalink to &quot;Unraid 必装的一些插件&quot;">​</a></h1><p>本篇教程给大家推荐一些 Unraid 必装的插件。</p><h2 id="dynamix-file-manager" tabindex="-1">Dynamix File Manager <a class="header-anchor" href="#dynamix-file-manager" aria-label="Permalink to &quot;Dynamix File Manager&quot;">​</a></h2><p>Unraid 官方的文件管理器，基础功能够用，如果不想装第三方的管理器，那这个就是必备的。安装后在右上角会有下图所示的图标。</p><p><img src="https://slark-blog.s3.bitiful.net/bjO62T_F8p5yb.png" alt="bjO62T_F8p5yb"></p><h2 id="unassigned-devices" tabindex="-1">Unassigned Devices <a class="header-anchor" href="#unassigned-devices" aria-label="Permalink to &quot;Unassigned Devices&quot;">​</a></h2><p>通常用来挂载远程 NAS 设备的 SMB、NFS 共享文件夹。</p><p>如果要挂载远程的 SMB 和 NFS 共享文件夹，需要先确保本机的 SMB 或 NFS 服务已开启。</p><h2 id="unassigned-devices-plus" tabindex="-1">Unassigned Devices Plus <a class="header-anchor" href="#unassigned-devices-plus" aria-label="Permalink to &quot;Unassigned Devices Plus&quot;">​</a></h2><p>这个插件可以支持更多的文件磁盘格式，比如 HFS+、exFAT、APFS。</p><h2 id="user-scripts" tabindex="-1">User Scripts <a class="header-anchor" href="#user-scripts" aria-label="Permalink to &quot;User Scripts&quot;">​</a></h2><p>可以方便的运行一些脚本，定时任务。比如 PhotoPrism 的定时索引脚本。</p><h2 id="compose-manager" tabindex="-1">Compose Manager <a class="header-anchor" href="#compose-manager" aria-label="Permalink to &quot;Compose Manager&quot;">​</a></h2><p>Unraid 默认自带 Docker，使用 Docker Compose 可以运行一些更复杂的容器组合。</p><h2 id="ca-auto-update-applications" tabindex="-1">CA Auto Update Applications <a class="header-anchor" href="#ca-auto-update-applications" aria-label="Permalink to &quot;CA Auto Update Applications&quot;">​</a></h2><p>可以实现自动更新 Docker 应用以及插件。</p><h2 id="intel-gpu-top-仅适用-intel-带核显-cpu" tabindex="-1">Intel GPU TOP（仅适用 Intel 带核显 CPU） <a class="header-anchor" href="#intel-gpu-top-仅适用-intel-带核显-cpu" aria-label="Permalink to &quot;Intel GPU TOP（仅适用 Intel 带核显 CPU）&quot;">​</a></h2><p>安装后可以通过 <code>intel_gpu_top</code> 命令查看 GPU 占用情况。</p><h2 id="nvidia-driver-仅适用-nvidia-gpu" tabindex="-1">Nvidia-Driver（仅适用 Nvidia GPU） <a class="header-anchor" href="#nvidia-driver-仅适用-nvidia-gpu" aria-label="Permalink to &quot;Nvidia-Driver（仅适用 Nvidia GPU）&quot;">​</a></h2><p>安装后需要在插件里再安装对应的 Nvidia 驱动。</p><h2 id="gpu-statistics" tabindex="-1">GPU Statistics <a class="header-anchor" href="#gpu-statistics" aria-label="Permalink to &quot;GPU Statistics&quot;">​</a></h2><p>前置条件：安装 <code>Intel GPU TOP</code> 或者 <code>Nvidia-Driver</code>。</p><p>可以让 GPU 占用情况直接显示在 Unraid 面板山。安装后在仪表板的 GPU 模块里选中 GPU 显卡。</p><p><img src="https://slark-blog.s3.bitiful.net/7frKWZ_Czob7R.png" alt="7frKWZ_Czob7R"></p>',
    24
  ),
  s = [n];
function o(d, p, l, c, h, u) {
  return i(), e("div", null, s);
}
const P = a(r, [["render", o]]);
export { g as __pageData, P as default };
