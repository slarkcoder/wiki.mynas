import { _ as e, c as t, a2 as r, o } from "./chunks/framework.eme8ZeBJ.js";
const P = JSON.parse(
    '{"title":"关于硬解的一些科普","description":"","frontmatter":{},"headers":[],"relativePath":"hardware/decode.md","filePath":"hardware/decode.md","lastUpdated":1725293933000}'
  ),
  p = { name: "hardware/decode.md" };
function d(l, a, n, c, s, i) {
  return (
    o(),
    t(
      "div",
      null,
      a[0] ||
        (a[0] = [
          r(
            '<h1 id="关于硬解的一些科普" tabindex="-1">关于硬解的一些科普 <a class="header-anchor" href="#关于硬解的一些科普" aria-label="Permalink to &quot;关于硬解的一些科普&quot;">​</a></h1><p><img src="https://img.slarker.me/wiki/camera-lens_oZVMTp.jpg" alt="camera-lens_oZVMTp"></p><h2 id="什么是硬解" tabindex="-1">什么是硬解？ <a class="header-anchor" href="#什么是硬解" aria-label="Permalink to &quot;什么是硬解？&quot;">​</a></h2><p>硬解是指使用专门的硬件模块来实现对视频的解码。如果是 CPU 自带核显，这个硬件模块一般都集成到了 CPU 的核显里，所以也称为核显硬解，相应的，独显也集成了这个硬件模块，可以用来硬解。如果是不带核显的 CPU，就没法硬解，只能让 CPU 通过软件算法去实现解码，也称为软解。</p><p>硬解的好处是解码不占用 CPU，性能好，功耗也低。软解就完全依靠 CPU 的计算能力，解码时会占用一部分 CPU，功耗也会高一些，如果是性能弱一些的 CPU，软解时会导致 CPU 占用达到 100%，造成卡死或者重启等等。</p><h2 id="什么情况下需要硬解" tabindex="-1">什么情况下需要硬解？ <a class="header-anchor" href="#什么情况下需要硬解" aria-label="Permalink to &quot;什么情况下需要硬解？&quot;">​</a></h2><p>如果是在家里使用终端设备（电视，投影仪，手机，平板，电脑）去看 NAS 里下载的电影，这种情况下一般都不需要硬解，因为这些终端设备硬件里都集成了相应的视频解码模块，在终端上安装相应的播放软件，就可以很好的完成视频播放任务。</p><p><img src="https://img.slarker.me/wiki/eyurgptb.fov_UwsrsB.png" alt=""></p><p>只有在外网远程播放 NAS 里的视频（比如公网 IP），才需要用到硬解。由于家庭带宽上传有限，一般即便是千兆带宽也只有 30~50Mbps 左右，也有可能远程设备的网络情况不太好，如果远程播放码率较高的视频，很有可能会卡顿。这个时候，依靠 NAS 的核显或者独显来硬解，就可以把码率较高的视频转换为码率较低的视频，以便匹配你的网络状况，达到流畅观看的目的。</p><h2 id="哪些-cpu-适合用来硬解" tabindex="-1">哪些 CPU 适合用来硬解？ <a class="header-anchor" href="#哪些-cpu-适合用来硬解" aria-label="Permalink to &quot;哪些 CPU 适合用来硬解？&quot;">​</a></h2><p>一般 Intel 的低功耗 CPU 都集成了核显，也都支持硬解，包括 J 系列（比如 J4125），N 系列（N5105，N100），G 系列（G6900，G7400）等等。视频编码格式有很多，不同的 CPU 对不同的编码格式支持也不一样，一般来说，越新的 CPU 支持的编码也就越全面。比如 Intel 第 12 代 CPU（比如 N100）就支持最新的 AV1 编解码，之前的 CPU 就不支持。</p><p>桌面级处理器中，Intel 的命名规则是，一般后缀不带 F 就表示自带核显（比如 12100 和 12100F）。AMD 的规则是：一般后缀带了 G 就表示带了核显（比如 5600G 和 5600）。</p><p>做 NAS，因为长期开机，功耗肯定是越低越好，Intel 在低功耗领域做的明显比 AMD 要好很多，第三方的软件（比如 Jellyfin）支持也是比较完善，所以如果要用到硬解，首选 Intel，如果同时考虑功耗，首选 Intel 的低功耗 CPU。</p>',
            13
          ),
        ])
    )
  );
}
const m = e(p, [["render", d]]);
export { P as __pageData, m as default };
