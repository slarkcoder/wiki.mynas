import {
  _ as d,
  c as i,
  a2 as t,
  o as e,
} from "./chunks/framework.eme8ZeBJ.js";
const h = JSON.parse(
    '{"title":"Unraid 挂载、共享外接磁盘","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/additional_disk.md","filePath":"unraid/additional_disk.md","lastUpdated":1725293933000}'
  ),
  n = { name: "unraid/additional_disk.md" };
function s(o, a, c, r, l, p) {
  return (
    e(),
    i(
      "div",
      null,
      a[0] ||
        (a[0] = [
          t(
            '<h1 id="unraid-挂载、共享外接磁盘" tabindex="-1">Unraid 挂载、共享外接磁盘 <a class="header-anchor" href="#unraid-挂载、共享外接磁盘" aria-label="Permalink to &quot;Unraid 挂载、共享外接磁盘&quot;">​</a></h1><h2 id="安装-unassigned-devices-插件" tabindex="-1">安装 Unassigned Devices 插件 <a class="header-anchor" href="#安装-unassigned-devices-插件" aria-label="Permalink to &quot;安装 Unassigned Devices 插件&quot;">​</a></h2><p>外接磁盘需要在应用市场安装 Unassigned Devices 插件，并在插件设置中按自己需要将 SMB 设置为公共或者私有。</p><p><img src="https://img.slarker.me/wiki/smb2023_fwbmdU.png" alt="smb2023_fwbmdU"></p><h2 id="挂载外接磁盘" tabindex="-1">挂载外接磁盘 <a class="header-anchor" href="#挂载外接磁盘" aria-label="Permalink to &quot;挂载外接磁盘&quot;">​</a></h2><p><img src="https://img.slarker.me/wiki/additional2_rxW6ZM.png" alt="additional2_rxW6ZM"></p><p>首先挂载外接磁盘，在右侧的设置里，将 <code>共享</code> 开关都打开。</p><p><img src="https://img.slarker.me/wiki/additional23_l6gnFG.png" alt="additional23_l6gnFG"></p><p><img src="https://img.slarker.me/wiki/additional24_N9hWzD.png" alt="additional24_N9hWzD"></p><p>按照上面步骤操作，就可以在网络共享里找到挂载的磁盘了。</p><p><img src="https://img.slarker.me/wiki/additional25_TxRFXv.png" alt="additional25_TxRFXv"></p>',
            11
          ),
        ])
    )
  );
}
const g = d(n, [["render", s]]);
export { h as __pageData, g as default };
