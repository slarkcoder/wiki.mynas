import {
  _ as e,
  c as o,
  a2 as t,
  o as d,
} from "./chunks/framework.eme8ZeBJ.js";
const u = JSON.parse(
    '{"title":"网络唤醒","description":"","frontmatter":{},"headers":[],"relativePath":"basic/wake_on_lan.md","filePath":"basic/wake_on_lan.md","lastUpdated":1725293933000}'
  ),
  n = { name: "basic/wake_on_lan.md" };
function c(s, a, i, p, l, r) {
  return (
    d(),
    o(
      "div",
      null,
      a[0] ||
        (a[0] = [
          t(
            '<h1 id="网络唤醒" tabindex="-1">网络唤醒 <a class="header-anchor" href="#网络唤醒" aria-label="Permalink to &quot;网络唤醒&quot;">​</a></h1><p><img src="https://img.slarker.me/wiki/pexels-pixabay-21052_suMSDk.jpg" alt="pexels-pixabay-21052_suMSDk"></p><p>网络唤醒功能可以让你的 NAS 在关机状态时，通过其它设备发送网络唤醒魔术包实现远程开机，不需要你手动按下 NAS 的开机键。如果你需要使用网络唤醒功能，需要主板支持并打开网络唤醒的设置。</p><h2 id="主板设置" tabindex="-1">主板设置 <a class="header-anchor" href="#主板设置" aria-label="Permalink to &quot;主板设置&quot;">​</a></h2><p>以倍控 N100 NAS 主板为例，开机进入到 BIOS 里，找到 <code>ACPI Settings</code> -&gt; <code>Resume By Onboard LAN</code> 将选项设置为 <code>Enabled</code> 就可以了（默认为 Disabled）。</p><h2 id="群晖" tabindex="-1">群晖 <a class="header-anchor" href="#群晖" aria-label="Permalink to &quot;群晖&quot;">​</a></h2><p>以群晖系统为例，在 <code>控制面板</code> -&gt; <code>电源</code> 选项中勾选下面的选项并应用。</p><p><img src="https://img.slarker.me/wiki/synology_wol_1_dhfzD6.png" alt="synology_wol_1_dhfzD6"></p><h2 id="unraid" tabindex="-1">Unraid <a class="header-anchor" href="#unraid" aria-label="Permalink to &quot;Unraid&quot;">​</a></h2><p>如果你的 Unraid 虚拟了 iStoreOS 之类的软路由系统作为主/旁路由来用，那基本上就是 24 小时开机的，也就是说基本上没有关机状态需要唤醒的时候，这种情况就不需要设置唤醒了。</p><p>在 Unraid 的终端中，使用下面的命令开启网络唤醒：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ethtool -s eth0 wol g</span></span></code></pre></div><p><img src="https://img.slarker.me/wiki/lsjqn0su.hdn_UHrPac.png" alt="lsjqn0su.hdn_UHrPac"></p><h2 id="如何唤醒" tabindex="-1">如何唤醒？ <a class="header-anchor" href="#如何唤醒" aria-label="Permalink to &quot;如何唤醒？&quot;">​</a></h2><p>需要唤醒时，可以使用支持网络唤醒的路由器（OpenWRT、iStoreOS），或者其它客户端（Windows、macOS、iOS、Android）App。</p><p>以 <code>iStoreOS</code> 为例，在 <code>服务</code> -&gt; <code>网络唤醒</code> 中，选择需要唤醒设备的 mac 地址或者 IP，点击 <code>唤醒主机</code> 就可以。</p><p><img src="https://img.slarker.me/wiki/5ewuknk5.k0k_iYDofa.png" alt="5ewuknk5.k0k_iYDofa"></p>',
            17
          ),
        ])
    )
  );
}
const m = e(n, [["render", c]]);
export { u as __pageData, m as default };
