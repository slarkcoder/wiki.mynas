import {
  _ as c,
  c as o,
  a2 as t,
  o as a,
} from "./chunks/framework.eme8ZeBJ.js";
const r = JSON.parse(
    '{"title":"使用 Docker 安装 Emby 并设置硬解","description":"","frontmatter":{},"headers":[],"relativePath":"synology/emby_decode.md","filePath":"synology/emby_decode.md","lastUpdated":1725293933000}'
  ),
  l = { name: "synology/emby_decode.md" };
function p(s, e, i, d, n, m) {
  return (
    a(),
    o(
      "div",
      null,
      e[0] ||
        (e[0] = [
          t(
            '<h1 id="使用-docker-安装-emby-并设置硬解" tabindex="-1">使用 Docker 安装 Emby 并设置硬解 <a class="header-anchor" href="#使用-docker-安装-emby-并设置硬解" aria-label="Permalink to &quot;使用 Docker 安装 Emby 并设置硬解&quot;">​</a></h1><blockquote><p>本教程适用于使用 Intel 11~14 代 CPU，群晖型号为 SA6400 的物理群晖，或者是直通了核显的虚拟群晖。</p></blockquote><p>开始之前，可以先下载测试视频文件备用。</p><p>测试文件：<a href="https://www.123pan.com/s/1JKMjv-5lxo.html" target="_blank" rel="noreferrer">123 云盘：4K+IMAX DTS：X-碟中谍4.7z</a>，下载后需解压。</p><p>解压密码：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wiki.slarker.me</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>Jellyfin 和 Emby 默认都使用 8096 端口，不能共存，只能二选一。</p></div><h2 id="新建共享文件夹" tabindex="-1">新建共享文件夹 <a class="header-anchor" href="#新建共享文件夹" aria-label="Permalink to &quot;新建共享文件夹&quot;">​</a></h2><p>新建一个共享文件夹，用来存储视频文件，稍后会把这个文件夹添加到 Docker 的 emby 里，以便 emby 能够读取。</p><p><img src="https://img.slarker.me/wiki/jellyfin_01_TwQTjT.png" alt="jellyfin_01_TwQTjT"></p><p>在 File Station 中，选择你想要设置的文件夹，右击选择属性，添加 Everyone 读写权限。</p><p><img src="https://img.slarker.me/wiki/jellyfin_02_RSEnbh.png" alt="jellyfin_02_RSEnbh"></p><p>在套件中心安装 Container Manager，安装好打开在注册表中搜索 emby <code>amilys/embyserver</code> 映像。</p><p><img src="https://img.slarker.me/wiki/emby_install_1_51B2ih.png" alt="emby_install_1_51B2ih"></p><p>下载完成之后，点击运行。</p><p><img src="https://img.slarker.me/wiki/emby_install_2_EHrxTq.png" alt="emby_install_2_EHrxTq"></p><p>选中 <code>启用自动重新启动</code>，点击下一步。</p><p><img src="https://img.slarker.me/wiki/emby_install_3_xA7Z6T.png" alt="emby_install_3_xA7Z6T"></p><p>按图中所示映射端口号、文件夹：</p><ul><li><code>1901</code> -&gt; <code>1900</code>，这里使用 1901 是为了避免 1900 被占用导致安装失败</li><li><code>7359</code> -&gt; <code>7359</code></li><li><code>8096</code> -&gt; <code>8096</code></li><li><code>8920</code> -&gt; <code>8920</code></li><li><code>/docker/emby/config</code> -&gt; <code>/config</code></li><li><code>/media</code> -&gt; <code>/media</code></li></ul><p>其中，<code>-&gt;</code> 表示映射，<code>-&gt;</code> 左侧的属于群晖本身的端口号或者路径，<code>-&gt;</code> 右侧的属于 Docker 容器内部的端口号或者路径。</p><p><img src="https://img.slarker.me/wiki/emby_install_7_GKetJo.png" alt="emby_install_7_GKetJo"></p><p>拉到下面，选择 <code>使用高权限执行容器</code>。</p><p><img src="https://img.slarker.me/wiki/emby_install_8_AiwlJi.png" alt="emby_install_8_AiwlJi"></p><p>Emby 启动之后，默认的访问端口为 8096，设置账号并登录，添加完媒体库之后，进入到控制台的 <code>Emby Premiere</code> 页面，设置密钥并保存。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>疯狂星期四V我50</span></span></code></pre></div><p><img src="https://img.slarker.me/wiki/emby_install_9_JbG1Kv.png" alt="emby_install_9_JbG1Kv"></p><p>切换到转码页面，启用硬件加速选择 <code>高级</code>，选择最下面的保存。</p><p><img src="https://img.slarker.me/wiki/emby_install_10_U9SklF.png" alt="emby_install_10_U9SklF"></p><p>把测试视频文件，上传到 <code>media</code> 共享文件夹里，在 emby 中直接打开播放，可以看到已经在转码了，流畅观看没问题，并且色调也正常。</p><p><img src="https://img.slarker.me/wiki/EVSkuM_wdvZ0o.png" alt="EVSkuM_wdvZ0o"></p><p>同时 CPU 占用也很低，看起来新版的 emby 转码提升很大，效果很不错！</p><p><img src="https://img.slarker.me/wiki/Za3pdA_hTT5bn.png" alt="Za3pdA_hTT5bn"></p>',
            33
          ),
        ])
    )
  );
}
const _ = c(l, [["render", p]]);
export { r as __pageData, _ as default };
