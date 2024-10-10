import {
  _ as a,
  c as l,
  a2 as t,
  o as s,
} from "./chunks/framework.eme8ZeBJ.js";
const u = JSON.parse(
    '{"title":"使用 Jellyfin 直接播放网盘！","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/jellyfin_play_clouddrive.md","filePath":"unraid/jellyfin_play_clouddrive.md","lastUpdated":1725293933000}'
  ),
  i = { name: "unraid/jellyfin_play_clouddrive.md" };
function n(p, e, o, c, d, r) {
  return (
    s(),
    l(
      "div",
      null,
      e[0] ||
        (e[0] = [
          t(
            '<h1 id="使用-jellyfin-直接播放网盘" tabindex="-1">使用 Jellyfin 直接播放网盘！ <a class="header-anchor" href="#使用-jellyfin-直接播放网盘" aria-label="Permalink to &quot;使用 Jellyfin 直接播放网盘！&quot;">​</a></h1><p>整体流程是先使用 Alist 挂载网盘，然后通过 rclone 将 Alist 的 WebDAV 挂载为本地的目录，最后 jellyfin 直接添加本地的目录。</p><h2 id="使用-alist-挂载网盘" tabindex="-1">使用 alist 挂载网盘 <a class="header-anchor" href="#使用-alist-挂载网盘" aria-label="Permalink to &quot;使用 alist 挂载网盘&quot;">​</a></h2><p>Alist 支持常见的十几种网盘，挂载方法 <a href="https://alist.nn.ci/zh/faq/" target="_blank" rel="noreferrer">Alist 官方文档</a> 有非常详细的介绍，这里就不讲了。将网盘都挂载到 alist 之后，可以很方便的通过 Alist 的 WebDAV 服务统一提供访问。</p><p>默认的 Alist WebDAV 地址是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http://[替换为你的 Unraid IP]:5244/dav</span></span></code></pre></div><p>Alist WebDAV 的用户名密码就是你的 alist 的登录用户名、密码。</p><h2 id="将-webdav-映射到本地目录" tabindex="-1">将 WebDAV 映射到本地目录 <a class="header-anchor" href="#将-webdav-映射到本地目录" aria-label="Permalink to &quot;将 WebDAV 映射到本地目录&quot;">​</a></h2><p>挂载 WebDAV 到本地需要使用 rclone 这个插件，可以直接在 Unraid 应用中心安装。安装好之后打开 Unraid 自带的终端配置 rclone。</p><p>输入下面命令进入配置菜单：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rclone config</span></span></code></pre></div><p>配置按照下图输入：</p><p><img src="https://img.slarker.me/wiki/2FtgnX_jYL2jU.png" alt="2FtgnX_jYL2jU"></p><p><img src="https://img.slarker.me/wiki/J7NSeE_KwOwJ6.png" alt="J7NSeE_KwOwJ6"></p><p><img src="https://img.slarker.me/wiki/SJp8In_1haXeu.png" alt="SJp8In_1haXeu"></p><p>如果你的配置没有填错，那到这里，我们已经把 Alist 的 WebDAV 的配置添加好了。</p><p>先使用下面的命令创建挂载位置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir -p /mnt/user/rclone/alist</span></span></code></pre></div><p>接下来使用命令把 alist 挂载为本地目录：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rclone mount alist: /mnt/user/rclone/alist --umask 0022 --default-permissions --allow-non-empty --allow-other --buffer-size 32M --low-level-retries 200 --dir-cache-time 2h --vfs-read-chunk-size 64M --vfs-read-chunk-size-limit 1G &amp;</span></span></code></pre></div><p>第三个单词 alist 就是上一步在 rclone 中新建配置的名字，后面的 <code>/mnt/user/rclone/alist</code> 就是要把这个 WebDAV 挂载到本地的位置。挂载好之后，在文件管理器里就可以直接网盘里的文件：</p><p><img src="https://img.slarker.me/wiki/l4z2wn_6v9MBx.png" alt="l4z2wn_6v9MBx"></p><p>确定没问题之后，我们可以使用 User Script 将这段挂载脚本设置为开机自动挂载。</p><h2 id="开机自动挂载" tabindex="-1">开机自动挂载 <a class="header-anchor" href="#开机自动挂载" aria-label="Permalink to &quot;开机自动挂载&quot;">​</a></h2><p>在 Unraid 应用中心安装 <code>User Script</code> 插件。安装后打开插件，添加新脚本，此处命名为 <code>automount_rclone</code>：</p><p><img src="https://img.slarker.me/wiki/aad3bx_k90sRu.png" alt="aad3bx_k90sRu"></p><p><img src="https://img.slarker.me/wiki/eY0fRm_RoWUzB.png" alt="eY0fRm_RoWUzB"></p><p>设置好之后，就可以开机启动阵列自动挂载了。</p><h2 id="将映射的本地目录添加到-jellyfin" tabindex="-1">将映射的本地目录添加到 Jellyfin <a class="header-anchor" href="#将映射的本地目录添加到-jellyfin" aria-label="Permalink to &quot;将映射的本地目录添加到 Jellyfin&quot;">​</a></h2><p>编辑 Jellyfin 的 Docker 配置，添加路径，将容器路径设置为 <code>/alist</code>，主机路径设置为我们映射好的目录 <code>/mnt/user/rclone/alist</code>。</p><p><img src="https://img.slarker.me/wiki/vnVK6W_fFP1GG.png" alt="vnVK6W_fFP1GG"></p><p>点击应用之后，就可以在 Jellyfin 媒体库设置里看到我们添加的 <code>/alist</code> 目录了。</p><p><img src="https://img.slarker.me/wiki/IA5XUo_O96u4T.png" alt="IA5XUo_O96u4T"></p>',
            33
          ),
        ])
    )
  );
}
const m = a(i, [["render", n]]);
export { u as __pageData, m as default };
