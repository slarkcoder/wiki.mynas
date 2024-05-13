import {
  _ as e,
  c as a,
  o as r,
  a4 as i,
} from "./chunks/framework.BOW58p_D.js";
const k = JSON.parse(
    '{"title":"通过模板更新 Docker 应用","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/unraid_docker_template.md","filePath":"unraid/unraid_docker_template.md","lastUpdated":1713618409000}'
  ),
  l = { name: "unraid/unraid_docker_template.md" },
  t = i(
    '<h1 id="通过模板更新-docker-应用" tabindex="-1">通过模板更新 Docker 应用 <a class="header-anchor" href="#通过模板更新-docker-应用" aria-label="Permalink to &quot;通过模板更新 Docker 应用&quot;">​</a></h1><p>使用 Unraid 过程中，有时候会遇到这样的问题：Docker 应用提示更新，但点击 <code>应用更新</code> 按钮，却提示找不到配置。</p><p><img src="https://slark-blog.s3.bitiful.net/fK3jKZ_e40bFt.png" alt="fK3jKZ_e40bFt"></p><p>要想解决这个问题，必须要了解下 Docker 是如何更新的。Docker 本身并不支持直接更新应用，即便使用命令，也需要先删除应用，然后拉取应用的最新镜像，再使用命令重新创建应用。</p><p>Unraid 为了用户可以更方便的使用 Docker，加入了模板这个概念，Unraid 的应用市场里的应用都已经有现成的模板，模板就是把该应用需要填写的应用参数都预先设置好，用户通过模板无须修改设置或者仅做少数修改即可轻松部署应用。对于应用市场没有的应用，只要用户自己通过 Unraid 添加容器，也会自动将该应用的配置保存为模板，方便用户后续的修改设置和更新。</p><p><img src="https://slark-blog.s3.bitiful.net/a2LIVX_S9i0gC.png" alt="a2LIVX_S9i0gC"></p><p>应用的模板文件会保存到 <code>/boot/config/plugins/dockerMan/templates-user</code> 目录中，该文件夹位于启动 U 盘中，模板会保存为 <code>*.xml</code> 文件。</p><p><img src="https://slark-blog.s3.bitiful.net/9gJHbl_OuIYYS.png" alt="9gJHbl_OuIYYS"></p><p>只要应用模板存在，就可以在提示 <code>应用更新</code> 的时候，直接更新应用。Unraid 会根据应用模板，自动的完成停止容器，移除容器，拉取镜像，重新创建容器的操作。</p><p><img src="https://slark-blog.s3.bitiful.net/w200mA_3JMTsA.png" alt="w200mA_3JMTsA"></p><p>所以在更新的时候提示 <code>找不到配置</code> ，是因为找不到该应用的模板，Unraid 的 Docker 不知道该应用到底需要哪些参数，就无法自动完成重新创建应用容器的操作。</p><h2 id="分享自用的模板" tabindex="-1">分享自用的模板 <a class="header-anchor" href="#分享自用的模板" aria-label="Permalink to &quot;分享自用的模板&quot;">​</a></h2><p>这里有一些我自己创建的模板，可以方便的安装常用的 Docker 应用。</p><p><a href="https://files.mynas.chat/share/BXbuuhLC" target="_blank" rel="noreferrer">Unraid_Docker_Template</a></p><p>目前包含下面这些应用：</p><ul><li>AList</li><li>Aria2-Pro，默认下载目录为共享文件夹 downloads，默认 RPC Secret 为：7iQzqgg6Soe5MqpWGaLODhAbNcFwkFEaQYCQhCAtDrIZ</li><li>Ariang</li><li>Duplicati</li><li>Filebrowser</li><li>Jellyfin，默认媒体目录为共享文件夹 media</li><li>MetaTube</li><li>Metube，默认下载目录为共享文件夹 downloads</li><li>Navidrome，默认音乐目录为共享文件夹 musics</li><li>qBittorrent，默认下载目录为共享文件夹 downloads</li><li>Homepage</li><li>SpeedTest</li><li>SyncClipboard</li><li>TinyMediaManager</li><li>xunlei，默认下载目录为共享文件夹 downloads</li></ul><p>下载解压，将里面的 xml 文件都复制到引导 U 盘的 <code>/config/plugins/dockerMan/templates-user</code> 目录中。可以把引导 U 盘的 SMB 共享打开，通过网络共享就可以直接把文件复制进去，之后在 Docker 页面添加容器的时候，就可以通过模板来添加了。</p><p><img src="https://slark-blog.s3.bitiful.net/lvz4tgnp.z2o_lEfsj3.png" alt="lvz4tgnp.z2o_lEfsj3"><img src="https://slark-blog.s3.bitiful.net/2dqqtu55.4ck_xjjLY5.png" alt="2dqqtu55.4ck_xjjLY5"></p>',
    18
  ),
  o = [t];
function p(c, d, s, n, _, m) {
  return r(), a("div", null, o);
}
const u = e(l, [["render", p]]);
export { k as __pageData, u as default };
