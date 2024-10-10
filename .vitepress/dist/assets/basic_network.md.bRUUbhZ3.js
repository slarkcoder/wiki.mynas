import {
  _ as a,
  c as o,
  a2 as t,
  o as c,
} from "./chunks/framework.eme8ZeBJ.js";
const P = JSON.parse(
    '{"title":"家庭组网的几个建议","description":"","frontmatter":{},"headers":[],"relativePath":"basic/network.md","filePath":"basic/network.md","lastUpdated":1725293933000}'
  ),
  d = { name: "basic/network.md" };
function i(l, e, r, p, n, s) {
  return (
    c(),
    o(
      "div",
      null,
      e[0] ||
        (e[0] = [
          t(
            '<h1 id="家庭组网的几个建议" tabindex="-1">家庭组网的几个建议 <a class="header-anchor" href="#家庭组网的几个建议" aria-label="Permalink to &quot;家庭组网的几个建议&quot;">​</a></h1><p><img src="https://img.slarker.me/wiki/pexels-field-engineer-147254-442154_chVhoT.jpg" alt="pexels-field-engineer-147254-442154_chVhoT"></p><h2 id="网络扁平化" tabindex="-1">网络扁平化 <a class="header-anchor" href="#网络扁平化" aria-label="Permalink to &quot;网络扁平化&quot;">​</a></h2><p>尽可能将网络扁平化，减少网络层级，降低网络复杂度。我用下面这张图来解释什么是扁平化：</p><p><img src="https://img.slarker.me/wiki/%E7%BD%91%E7%BB%9C%E6%89%81%E5%B9%B3%E5%8C%96.drawio_F7nufI.svg" alt="网络扁平化.drawio_F7nufI"></p><ul><li>图 1 网络只有一个网段，所有的联网设备都处在同一个网段，设备之间都可以互相访问。</li><li>图 2 网络存在三个网段，容易出现设备之间无法互相访问。</li></ul><h2 id="静态-ip-和-dhcp" tabindex="-1">静态 IP 和 DHCP <a class="header-anchor" href="#静态-ip-和-dhcp" aria-label="Permalink to &quot;静态 IP 和 DHCP&quot;">​</a></h2><p>如果你的网络里设备比较多，并且同时存在静态 IP 和 DHCP，那么 IP 冲突是很常见的问题，而且出现 IP 冲突时的现象也比较诡异。</p><p>对于 NAS 之类需要经常通过 IP 去访问的设备，强烈建议设置静态 IP，可以避免由于 DHCP 导致 IP 变化无法访问。并且最好在主路由将 DHCP 分配的范围和静态 IP 隔开，能有效避免 IP 冲突。</p><p>比如，我的主路由为 <code>192.168.2.1</code>，NAS 设置了固定的 IP 为 <code>192.168.2.100</code>，那么主路由的 DHCP 分配范围可以设置为 <code>192.168.2.101</code> 到 <code>192.168.2.254</code>。</p><ul><li>网段：<code>192.168.2.x</code></li><li>静态地址：<code>192.168.2.2</code> ~ <code>192.168.2.100</code>，手动为某些设备分配静态 IP。</li><li>DHCP 范围：<code>192.168.2.101</code> ~ <code>192.168.2.254</code>，不需要设置静态 IP 的设备可以从路由器通过 DHCP 自动获取。</li></ul><h2 id="网络测速" tabindex="-1">网络测速 <a class="header-anchor" href="#网络测速" aria-label="Permalink to &quot;网络测速&quot;">​</a></h2><p>网络设置好之后，可以利用 软路由、NAS 上的内网测速工具，比如在各个房间的 PC 上使用 <code>HomeBox</code>、<code>OpenSpeedTest</code>、<code>iperf3</code> 等工具来测试家里的网络速度是否存在异常。</p><ul><li>如果在 PC 端使用有线网络测试，那至少应该跑满千兆。</li><li>如果具备 2.5G 网络条件（测速两端都为 2.5G 网口），那应该跑满 2.5Gbps。</li><li>如果具备 10G（万兆）网络条件（测速两端都为 10Gbps 网口），那应该接近跑满 10Gbps。</li></ul><h2 id="fttr-和软路由" tabindex="-1">FTTR 和软路由 <a class="header-anchor" href="#fttr-和软路由" aria-label="Permalink to &quot;FTTR 和软路由&quot;">​</a></h2><p>现在很多地方的运营商都提供全屋光纤组网（FTTR），搭配运营商提供的子母路由实现全屋覆盖。如果你想使用软路由作为主路由，那我建议慎重选择 FTTR 方案。</p><p>软路由作为主路由，需要部署在家庭网络入口位置，正常来讲，需要把子母路由接到软路由下面，但 FTTR 不支持这么做。如果你已经使用了 FTTR，可以搭配旁路由来使用。</p>',
            17
          ),
        ])
    )
  );
}
const u = a(d, [["render", i]]);
export { P as __pageData, u as default };
