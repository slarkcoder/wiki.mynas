import {
  _ as o,
  c as a,
  a2 as c,
  o as d,
} from "./chunks/framework.eme8ZeBJ.js";
const u = JSON.parse(
    '{"title":"通过模板更新 Docker 应用","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/unraid_docker_template.md","filePath":"unraid/unraid_docker_template.md","lastUpdated":1725293933000}'
  ),
  i = { name: "unraid/unraid_docker_template.md" };
function l(r, e, t, p, n, s) {
  return (
    d(),
    a(
      "div",
      null,
      e[0] ||
        (e[0] = [
          c(
            '<h1 id="通过模板更新-docker-应用" tabindex="-1">通过模板更新 Docker 应用 <a class="header-anchor" href="#通过模板更新-docker-应用" aria-label="Permalink to &quot;通过模板更新 Docker 应用&quot;">​</a></h1><p>使用 Unraid 过程中，有时候会遇到这样的问题：Docker 应用提示更新，但点击 <code>应用更新</code> 按钮，却提示找不到配置。</p><p><img src="https://img.slarker.me/wiki/fK3jKZ_e40bFt.png" alt="fK3jKZ_e40bFt"></p><p>要想解决这个问题，必须要了解下 Docker 是如何更新的。Docker 本身并不支持直接更新应用，即便使用命令，也需要先删除应用，然后拉取应用的最新镜像，再使用命令重新创建应用。</p><p>Unraid 为了用户可以更方便的使用 Docker，加入了模板这个概念，Unraid 的应用市场里的应用都已经有现成的模板，模板就是把该应用需要填写的应用参数都预先设置好，用户通过模板无须修改设置或者仅做少数修改即可轻松部署应用。对于应用市场没有的应用，只要用户自己通过 Unraid 添加容器，也会自动将该应用的配置保存为模板，方便用户后续的修改设置和更新。</p><p><img src="https://img.slarker.me/wiki/a2LIVX_S9i0gC.png" alt="a2LIVX_S9i0gC"></p><p>应用的模板文件会保存到 <code>/boot/config/plugins/dockerMan/templates-user</code> 目录中，该文件夹位于启动 U 盘中，模板会保存为 <code>*.xml</code> 文件。</p><p><img src="https://img.slarker.me/wiki/9gJHbl_OuIYYS.png" alt="9gJHbl_OuIYYS"></p><p>只要应用模板存在，就可以在提示 <code>应用更新</code> 的时候，直接更新应用。Unraid 会根据应用模板，自动的完成停止容器，移除容器，拉取镜像，重新创建容器的操作。</p><p><img src="https://img.slarker.me/wiki/w200mA_3JMTsA.png" alt="w200mA_3JMTsA"></p><p>所以在更新的时候提示 <code>找不到配置</code> ，是因为找不到该应用的模板，Unraid 的 Docker 不知道该应用到底需要哪些参数，就无法自动完成重新创建应用容器的操作。</p><h2 id="分享自用的模板" tabindex="-1">分享自用的模板 <a class="header-anchor" href="#分享自用的模板" aria-label="Permalink to &quot;分享自用的模板&quot;">​</a></h2><p>这里有一些我自己创建的模板，可以方便的安装常用的 Docker 应用。</p><p><a href="https://files.mynas.chat/share/BXbuuhLC" target="_blank" rel="noreferrer">Unraid_Docker_Template</a></p><p>目前包含下面这些应用：</p><ul><li>AList，挂载各大网盘，方便其它设备通过统一的 <code>WebDAV</code> 访问。</li><li>Aria2-Pro，强大的轻量级下载工具，默认下载目录为共享文件夹 <code>downloads</code>，默认 RPC Secret 为：<code>7iQzqgg6Soe5MqpWGaLODhAbNcFwkFEaQYCQhCAtDrIZ</code></li><li>Ariang，搭配 <code>Aria2-Pro</code> 使用的 Web 前端。</li><li><a href="/unraid/duplicati.html">Duplicati</a>，自动备份工具。</li><li><a href="/application/douban_tool.html">Douban_tool</a>，通过豆瓣标记自动下载资源神器！</li><li>Filebrowser，第三方的文件管理器，简洁易用。</li><li><a href="/unraid/jellyfin_harddecode.html">Jellyfin</a>，默认媒体目录为共享文件夹 <code>media</code></li><li><a href="/unraid/javspider.html">MetaTube</a>，自动刮削小姐姐插件</li><li>Metube，支持主流视频网站（B 站，油管）的下载视频，默认下载目录为共享文件夹 <code>downloads</code></li><li>Navidrome，自建音乐库的不二之选，默认音乐目录为共享文件夹 <code>musics</code></li><li>qBittorrent，知名的 BT/PT 下载客户端，默认下载目录为共享文件夹 <code>downloads</code></li><li><a href="/unraid/deploy_immich.html">Immich</a>，媲美 <code>Google Photos</code> 的开源照片备份工具，默认的照片备份文件夹为 <code>photos</code></li><li><a href="/application/homepage.html">Homepage</a>，美观的 NAS 主页导航。</li><li><a href="/unraid/speedtest.html">SpeedTest</a>，局域网测速。</li><li><a href="/unraid/clipboard_sync.html">SyncClipboard</a>，跨平台多设备剪贴板同步。</li><li><a href="/unraid/tmm.html">TinyMediaManager</a>，影视刮削。</li><li>xunlei，默认下载目录为共享文件夹 <code>downloads</code>。</li></ul><p>其中 <code>xml</code> 都是 docker 模板，<code>zip</code> 压缩包都是 docker compose 模板。</p><p>将里面的 xml 文件都复制到引导 U 盘的 <code>/config/plugins/dockerMan/templates-user</code> 目录中。</p><p>如果是 <code>zip</code>，解压后将整个文件夹都复制到引导 U 盘的 <code>/config/plugins/compose.manager/projects</code> 目录中。</p><p>可以把引导 U 盘的 SMB 共享打开，通过网络共享就可以直接把文件复制进去，之后在 Docker 页面添加容器的时候，就可以通过模板来添加了。</p><p><img src="https://img.slarker.me/wiki/lvz4tgnp.z2o_lEfsj3.png" alt="lvz4tgnp.z2o_lEfsj3"><img src="https://img.slarker.me/wiki/2dqqtu55.4ck_xjjLY5.png" alt="2dqqtu55.4ck_xjjLY5"></p>',
            21
          ),
        ])
    )
  );
}
const h = o(i, [["render", l]]);
export { u as __pageData, h as default };
