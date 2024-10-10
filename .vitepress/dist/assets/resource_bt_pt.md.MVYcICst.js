import { _ as a, c as t, a2 as r, o } from "./chunks/framework.eme8ZeBJ.js";
const T = JSON.parse(
    '{"title":"BT 和 PT","description":"","frontmatter":{},"headers":[],"relativePath":"resource/bt_pt.md","filePath":"resource/bt_pt.md","lastUpdated":1725293933000}'
  ),
  c = { name: "resource/bt_pt.md" };
function d(h, e, l, i, n, p) {
  return (
    o(),
    t(
      "div",
      null,
      e[0] ||
        (e[0] = [
          r(
            '<h1 id="bt-和-pt" tabindex="-1">BT 和 PT <a class="header-anchor" href="#bt-和-pt" aria-label="Permalink to &quot;BT 和 PT&quot;">​</a></h1><p><img src="https://img.slarker.me/wiki/88024_I7kPbs.jpg" alt="88024_I7kPbs"></p><h2 id="bt-原理" tabindex="-1">BT 原理 <a class="header-anchor" href="#bt-原理" aria-label="Permalink to &quot;BT 原理&quot;">​</a></h2><p>BT 是一种很 <code>古老</code> 的文件下载方式，在网盘大行其道的今天，甚至有很多人都不知道什么是 BT，如果你想了解 BT 是什么，这里有一个很不错的视频可以帮你了解 <a href="https://www.bilibili.com/video/BV1pv421k7ao/?vd_source=29eb9b18b4b69e99493d17fe1ef55ca4" target="_blank" rel="noreferrer">BT 的原理</a>。</p><p>简而言之，就是人人为我，我为人人。你通过 BT 下载的每 <code>byte</code> 数据，都来自于 BT 网络中的某个用户为你提供了上传。当你下载到数据之后，也可以为别人提供上传。BT 没有分享率的要求，你可以随时停止上传，甚至也可以直接在 BT 下载软件中关闭上传都没问题。迅雷就是因为只从 BT 网络中 <code>白嫖</code> 别人的上传，而从不贡献上传，所以才被人称为 <a href="https://tsingjyujing.github.io/blog/other-tech/fuck-thunder.html" target="_blank" rel="noreferrer">吸血雷</a>。虽然 BT 现在用的人也越来越少，但是 BT 的核心 P2P 技术反而被用在了很多地方，比如视频网站加速，比如各种 PCDN，或者百度网盘的用上传带宽来换下载加速的功能也用的是这个技术。</p><h2 id="pt" tabindex="-1">PT <a class="header-anchor" href="#pt" aria-label="Permalink to &quot;PT&quot;">​</a></h2><p>关于 PT 的一些基本概念和解决问题的办法，这里也贴一个群里大佬分享的 PDF 文件。</p><p>新手必看：<a href="https://www.123pan.com/s/1JKMjv-Kcpo.html" target="_blank" rel="noreferrer">从零开始玩PT_V1.0_2.pdf</a></p><h3 id="分享率" tabindex="-1">分享率 <a class="header-anchor" href="#分享率" aria-label="Permalink to &quot;分享率&quot;">​</a></h3><p>由于 BT 没有分享率的要求，所以整个 BT 网络的下载速度并不稳定。如果你看到某个种子下载速度为 0KB/s 也并不奇怪，因为没有人给你提供上传。为了解决这个问题，所以就有了 PT，PT 对每个下载者都有分享率的要求，你下载完了某个 PT 种子，必须保持一定的做种时间，PT 网站的会实时统计你的总下载和总的上传比例，也就是你的分享率，如果你的分享率低于网站的要求，可能会被警告，降级或者封号。也因为有了分享率要求，PT 种子一般都会有人一直在做种，出现 <code>死种</code> 的几率也比较低，下载速度相比 BT 也更快更稳定。如果你想要下载更多自己想要的资源，就需要持续的为别人做种获取上传流量，提高分享率来获取对应下载的流量。</p><h3 id="如何提高分享率" tabindex="-1">如何提高分享率？ <a class="header-anchor" href="#如何提高分享率" aria-label="Permalink to &quot;如何提高分享率？&quot;">​</a></h3><p>很多网站都会定期发布一些免费资源（比如带有 <code>Free</code>，<code>2xFree</code> 标记），在免费期限内，下载这些资源是不计算下载流量的，但是你的上传都会计算。所以提高分享率的最有效办法就是，多下载一些免费资源，同时尽量的找那些 <code>下载人数多，上传人数少</code> 的资源，因为这个时候你最容易抢到上传流量。等到大多数人都下载完了你再去下载，就很难抢到上传流量，因为这个时候大多数人都是给你提供上传的，根本就不需要下载。</p><h3 id="客户端" tabindex="-1">客户端 <a class="header-anchor" href="#客户端" aria-label="Permalink to &quot;客户端&quot;">​</a></h3><p>PT 是如何统计用户的下载上传信息呢？你从 PT 网站下载的种子，都包含了你的 PT 账号信息，也就是说，用户 A 和 B 从 PT 网站下载了同一个种子文件，但这两个种子文件其实是不同的。你只能用 PT 网站指定的客户端去打开这个种子，否则有可能被封号。特别需要注意的是，任何 PT 网站都禁止使用迅雷，具体可以看网站要求。</p><h3 id="新手如何获得邀请" tabindex="-1">新手如何获得邀请？ <a class="header-anchor" href="#新手如何获得邀请" aria-label="Permalink to &quot;新手如何获得邀请？&quot;">​</a></h3><p>很多 PT 网站都是靠邀请来拓展新用户的，新手如果不熟悉规则随便下载资源，很容易导致连新手考核都无法通过。所以 PT 圈默认的求药（邀）方式，一般都是先玩小站，一段时间之后拿小站的数据再去向大佬求邀。如果你是新手，可以到贴吧等地方求药，也可以加上面的群，看群里的大佬能否邀请。也有一些网站会定期的开放注册，可以关注下 <a href="http://www.ptyqm.com/" target="_blank" rel="noreferrer"> PT 邀请码</a> 这个网站。</p>',
            16
          ),
        ])
    )
  );
}
const b = a(c, [["render", d]]);
export { T as __pageData, b as default };
