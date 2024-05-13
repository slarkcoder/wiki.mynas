import {
  _ as r,
  c as e,
  o as a,
  a4 as t,
} from "./chunks/framework.BOW58p_D.js";
const m = JSON.parse(
    '{"title":"常见的远程访问 NAS 方法","description":"","frontmatter":{},"headers":[],"relativePath":"basic/remote.md","filePath":"basic/remote.md","lastUpdated":1711615324000}'
  ),
  o = { name: "basic/remote.md" },
  p = t(
    '<h1 id="常见的远程访问-nas-方法" tabindex="-1">常见的远程访问 NAS 方法 <a class="header-anchor" href="#常见的远程访问-nas-方法" aria-label="Permalink to &quot;常见的远程访问 NAS 方法&quot;">​</a></h1><p><img src="https://slark-blog.s3.bitiful.net/remote_En32qD.jpg" alt="remote_En32qD"></p><h2 id="最佳方案-公网-ipv4" tabindex="-1">最佳方案 - 公网 IPv4 <a class="header-anchor" href="#最佳方案-公网-ipv4" aria-label="Permalink to &quot;最佳方案 - 公网 IPv4&quot;">​</a></h2><ul><li>优点：无须中转，直连，速度最快！</li><li>缺点：需要将对应的服务端口暴露到公网上。理论上，你可以访问，别人同样也可以访问，如果你的密码比较简单，那别人想进来，也不是什么难事！关于安全，可以看看我写的 <a href="https://slarker.me/remote-nas/" target="_blank" rel="noreferrer">自组 NAS 的远程访问方案，总有一款适合你！</a>。</li></ul><p>如果你的宽带是电信、联通，那可以打电话向运营商申请。如果是移动，基本没希望。如果能申请到，同时让运营商帮你把光猫改桥接，可以用你自己的路由器或者软路由来拨号。</p><blockquote><p>如果申请不到公网 IPv4，也可以试试 IPv6，网上也有很多教程，可以试试看。</p></blockquote><h2 id="值得试试-zerotier" tabindex="-1">值得试试 - Zerotier <a class="header-anchor" href="#值得试试-zerotier" aria-label="Permalink to &quot;值得试试 - Zerotier&quot;">​</a></h2><p>如果申请不到公网 IPv4，可以试试 Zerotier。</p><ul><li>优点：采用虚拟 VPN 的方式来组建网络，相较于公网 IP 暴露端口的方式，比较安全。</li><li>缺点：Zerotier 的逻辑是优先尝试直连，如果能够直连，那速度可以等同于公网 IPv4，如果直连不成功，那就走 Zerotier 的中转服务器，这个时候就比较慢。</li></ul><p>具体使用可以参考我的教程：<a href="https://slarker.me/zerotier" target="_blank" rel="noreferrer">使用 Zerotier 进行内网穿透</a></p><p>类似的方案还有 <a href="https://tailscale.com/" target="_blank" rel="noreferrer">tailscale</a>，原理和 Zerotier 类似，可以自行了解。</p><h2 id="星空组网-starvpn" tabindex="-1">星空组网 - <a href="https://starvpn.cn/" target="_blank" rel="noreferrer">Starvpn</a> <a class="header-anchor" href="#星空组网-starvpn" aria-label="Permalink to &quot;星空组网 - [Starvpn](https://starvpn.cn/)&quot;">​</a></h2><p>星空组网是一个国产的异地虚拟组网软件，原理也和 Zerotier 类似，但因为服务器在国内，所以连接速度非常快。如果能够实现点对点直连，效果也就和使用公网 IP 一样，如果直连不成功，就走星空组网提供的中转服务器，限速 10Mbps。支持各种客户端，包括 Openwrt，群晖，iOS 和 Android，官网也提供了详细的设置教程，使用起来没难度。</p><p>但也有缺点，就是目前不支持自定义路由映射，只能使用网站分配的固定 IP 来访问，这点不如 zerotier 方便。</p><h2 id="免费方案-星空-frp" tabindex="-1">免费方案 - 星空 frp <a class="header-anchor" href="#免费方案-星空-frp" aria-label="Permalink to &quot;免费方案 - 星空 frp&quot;">​</a></h2><p><a href="https://frp.starryfrp.com" target="_blank" rel="noreferrer">https://frp.starryfrp.com</a></p><p>星空内网穿透，是一个提供免费+付费 frp 内网穿透的网站，免费方案提供 5 条可用隧道数量，8Mbps 限速，每日签到获取 1 ~ 10 GiB 随机流量，如果对穿透要求不高，可以使用这个方案。</p><p>官网也有详细的 <a href="https://doc.starryfrp.com/#/app/synology" target="_blank" rel="noreferrer">设置教程</a> 可供参考。</p><h2 id="付费方案-nps" tabindex="-1">付费方案 - NPS <a class="header-anchor" href="#付费方案-nps" aria-label="Permalink to &quot;付费方案 - NPS&quot;">​</a></h2><p>NPS 是我用开源的 NPS 服务搭建的中转服务器，提供给上述几种方案都无法满足需求的用户。所有购买 NAS 的用户都可以免费使用 1 年的中转服务。支持 Unraid、群晖。</p><p>因为服务器资源有限，中转服务带宽限速 10Mbps，支持最多 10 个映射数量，延迟大约在 100ms 左右。远程管理 BT 下载任务，传一些小文件没什么问题，支持 HTTPS 自定义域名访问（*.mynas.chat）。</p><p>如果觉得服务不错，到期后可续费购买，续费价格 99 元/年。</p><p>如果觉得带宽不够用，也可以联系我定制套餐。</p>',
    23
  ),
  i = [p];
function l(s, n, h, c, d, f) {
  return a(), e("div", null, i);
}
const b = r(o, [["render", l]]);
export { m as __pageData, b as default };
