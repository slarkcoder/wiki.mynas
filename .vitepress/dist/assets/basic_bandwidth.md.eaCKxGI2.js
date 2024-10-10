import {
  _ as e,
  c as p,
  a2 as t,
  o as r,
} from "./chunks/framework.eme8ZeBJ.js";
const b = JSON.parse(
    '{"title":"远程访问需要的上行带宽","description":"","frontmatter":{},"headers":[],"relativePath":"basic/bandwidth.md","filePath":"basic/bandwidth.md","lastUpdated":1725293933000}'
  ),
  o = { name: "basic/bandwidth.md" };
function i(s, a, l, c, d, h) {
  return (
    r(),
    p(
      "div",
      null,
      a[0] ||
        (a[0] = [
          t(
            '<h1 id="远程访问需要的上行带宽" tabindex="-1">远程访问需要的上行带宽 <a class="header-anchor" href="#远程访问需要的上行带宽" aria-label="Permalink to &quot;远程访问需要的上行带宽&quot;">​</a></h1><p><img src="https://img.slarker.me/wiki/pexels-garrettmorrow-610945_4iqSij.jpg" alt="pexels-garrettmorrow-610945_4iqSij"></p><p>由于家庭宽带一般上行只有 30Mbps~50Mbps 左右，所以很多人担心远程访问的时候是否够用，本篇就来具体说说这个问题。</p><h2 id="上行带宽测试" tabindex="-1">上行带宽测试 <a class="header-anchor" href="#上行带宽测试" aria-label="Permalink to &quot;上行带宽测试&quot;">​</a></h2><p>如果你是在家里，可以使用 <a href="https://www.speedtest.cn" target="_blank" rel="noreferrer">测速网</a> 来测试带宽速度。如果你想测的准一些，需要注意以下几点：</p><ul><li>建议优先使用有线连接测试网速，避免复杂的无线网络环境或者其它因素造成干扰</li><li>（推荐）电脑通过网线连接到路由器，使用浏览器打开 <a href="https://www.speedtest.cn" target="_blank" rel="noreferrer">测速网</a> 网页测速</li><li>（不推荐）手机浏览器打开 <a href="https://www.speedtest.cn" target="_blank" rel="noreferrer">测速网</a>，请确保你的手机连的 5GHz 频段的 WiFi，并且和路由器之间没有实体墙遮挡</li><li>（不推荐）手机也可以使用信通院的 <code>全球网测</code> App 来测试，请确保你的手机连的 5GHz 频段的 WiFi，并且和路由器之间没有实体墙遮挡</li></ul><p>如果你已经设置好了内网穿透，想在外网测试实际的穿透效果，可以直接在 NAS 上安装 <code>SpeedTest</code>、<code>HomeBox</code> 之类的测速工具，通过内网穿透直接访问就可以进行测试。</p><h2 id="实际上行带宽" tabindex="-1">实际上行带宽 <a class="header-anchor" href="#实际上行带宽" aria-label="Permalink to &quot;实际上行带宽&quot;">​</a></h2><p>先来说说实际上行带宽，上面提到的 30Mbps~50Mbps 是你的宽带实际的套餐标称的上行速度，也就是说，除了多拨（仅有部分地区，部分运营商可以多拨）之外，不管你用什么办法（公网 ip，frp，nps，zerotier，tailscale，星空组网等等）实现内网穿透，都没办法突破这个限制。</p><p>公网 IP 肯定是最快的，只要宽带套餐不虚标，一般测速都能跑满。</p><p>像是 Zerotier，TailScale，星空组网这种虚拟 VPN 的方案，如果能够实现 p2p 直连，那几乎也可以实现跑满上行带宽。如果不能直连，就要走服务器的中转，像是星空组网免费可以提供 10Mbps 的中转带宽，对于很多人需求不高的用户来说也足够使用。</p><p>像是 frp，nps 这种通过公网服务器中转的方案，如果服务器带宽足够，而且连接不错，那几乎也可以跑满上行带宽，否则的话，连接速度就受限于服务器的带宽或者网络质量。</p><h2 id="多大的上行带宽够用" tabindex="-1">多大的上行带宽够用？ <a class="header-anchor" href="#多大的上行带宽够用" aria-label="Permalink to &quot;多大的上行带宽够用？&quot;">​</a></h2><p>常见的需求无非是传输文件，访问 NAS 上的各种服务，远程观看 NAS 里的电影。</p><h3 id="传输文件" tabindex="-1">传输文件 <a class="header-anchor" href="#传输文件" aria-label="Permalink to &quot;传输文件&quot;">​</a></h3><p>上面所说的 30Mbps~50Mbps 是上行带宽速度，如果能跑满，换算成 <code>MB/s</code> 大概是 4~7MB/s，也就是你在外网访问（读取） NAS 文件的最快速度。</p><p>而如果你是在外网备份手机里的照片、视频到家里的 NAS，也就是往 NAS 里写入数据，那这个时候用的就是家里宽带的下行带宽以及你手机的 4G/5G 网络的上传带宽，如果你的 4G/5G 上行带宽足够快（比如我测的联通 5G 上行可以达到 100Mbps 左右），并且能使用公网 IP 或者通过虚拟组网实现 p2p 直连，那备份照片、视频理论上也就能跑满 4G/5G 的上行带宽。</p><h3 id="访问-nas-上的各种服务" tabindex="-1">访问 NAS 上的各种服务 <a class="header-anchor" href="#访问-nas-上的各种服务" aria-label="Permalink to &quot;访问 NAS 上的各种服务&quot;">​</a></h3><p>如果是在外网听 NAS 里的音乐，管理 NAS 上的下载任务，或者访问 NAS 上的其他 web 服务，这类需求对带宽需求比较低，即便没有公网 IP，也可以通过星空组网来实现远程访问，免费的 10Mbps 带宽就能很好的满足需求。</p><h3 id="远程看电影" tabindex="-1">远程看电影 <a class="header-anchor" href="#远程看电影" aria-label="Permalink to &quot;远程看电影&quot;">​</a></h3><p>经过实测，外网远程看电影对上行带宽需求没有想象中的多，以 <code>Emby</code> 为例，手机客户端传输质量设置为 <code>1080P 超清</code>，流畅观看所需的带宽仅为 10Mbps。也就是说，30Mbps 的上行带宽也可以满足 3 人同时观看 <code>1080P 超清</code> 的视频。</p><p>下面是一些实测截图，测试文件：<a href="https://www.alipan.com/s/Zrbgxt3rPTW" target="_blank" rel="noreferrer">阿里云盘：4K+IMAX DTS：X-碟中谍4.mkv</a>：</p><h4 id="_1080p-超清" tabindex="-1">1080p 超清 <a class="header-anchor" href="#_1080p-超清" aria-label="Permalink to &quot;1080p 超清&quot;">​</a></h4><p>所需带宽 10Mbps。</p><p><img src="https://img.slarker.me/wiki/1080p1_3mcIRp.jpg" alt="1080p1_3mcIRp"></p><h4 id="_1080p-高清" tabindex="-1">1080p 高清 <a class="header-anchor" href="#_1080p-高清" aria-label="Permalink to &quot;1080p 高清&quot;">​</a></h4><p>所需带宽 8Mbps。</p><p><img src="https://img.slarker.me/wiki/1080p2_cNB0KF.jpg" alt="1080p2_cNB0KF"></p><h4 id="_1080p-标清" tabindex="-1">1080p 标清 <a class="header-anchor" href="#_1080p-标清" aria-label="Permalink to &quot;1080p 标清&quot;">​</a></h4><p>所需带宽 6Mbps。</p><p><img src="https://img.slarker.me/wiki/1080p3_bvYaoQ.jpg" alt="1080p3_bvYaoQ"></p><h4 id="_1080p-流畅" tabindex="-1">1080p 流畅 <a class="header-anchor" href="#_1080p-流畅" aria-label="Permalink to &quot;1080p 流畅&quot;">​</a></h4><p>所需带宽 4Mbps。</p><p><img src="https://img.slarker.me/wiki/1080p4_x4ea9O.jpg" alt="1080p4_x4ea9O"></p>',
            34
          ),
        ])
    )
  );
}
const m = e(o, [["render", i]]);
export { b as __pageData, m as default };
