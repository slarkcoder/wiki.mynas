import {
  _ as a,
  c as e,
  o as r,
  a4 as t,
} from "./chunks/framework.BOW58p_D.js";
const b = JSON.parse(
    '{"title":"开源的密码管理器 - Bitwarden","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/bitwarden.md","filePath":"unraid/bitwarden.md","lastUpdated":1711470861000}'
  ),
  n = { name: "unraid/bitwarden.md" },
  i = t(
    '<h1 id="开源的密码管理器-bitwarden" tabindex="-1">开源的密码管理器 - Bitwarden <a class="header-anchor" href="#开源的密码管理器-bitwarden" aria-label="Permalink to &quot;开源的密码管理器 - Bitwarden&quot;">​</a></h1><p>说起密码管理，我自己是多年的 1Password 老用户，1Password 在 Apple 生态内体验属于最佳，至今我还用着 7.x 的买断版本，同步也是用的 Dropbox。但新版的 1Password 现在也改成了订阅制，长期订阅的话也花费不菲。如果要找一款可靠的替代品，那 Bitwarden 是为数不多的选择。</p><p>Bitwarden 是一款开源的，支持 <a href="https://github.com/dani-garcia/vaultwarden" target="_blank" rel="noreferrer">自部署</a> 的跨平台密码管理器，官方的服务需要付费使用，如果你有一台 NAS，那么就可以自己部署一个 Bitwarden，可以免费使用还支持多账户，分享给家人和朋友一起使用也没问题。</p><p>自部署的好处是密码数据都加密存储在本地，数据泄露的风险会小很多。但使用自己部署 Bitwarden 一定要注意：做好数据备份并且知道如何从故障中恢复，因为 Bitwarden 里的数据几乎是你最重要的数据了。如果你保存了上百条的密码数据，有一天硬盘挂了，而你又没有任何备份，那手动找回上百个密码的画面想想都觉得酸爽！</p><h2 id="unraid-部署-bitwarden" tabindex="-1">Unraid 部署 Bitwarden <a class="header-anchor" href="#unraid-部署-bitwarden" aria-label="Permalink to &quot;Unraid 部署 Bitwarden&quot;">​</a></h2><p>在应用中心直接搜索 bitwarden，点击安装就可以。</p><p>默认数据文件都会保存到 <code>/mnt/user/appdata/vaultwarden</code>，这个也是你需要备份的目录，备份教程可以参考：<a href="https://slarker.me/unraid-backup-duplicati/" target="_blank" rel="noreferrer">开源免费的 Unraid 备份方案 - Duplicati</a>。</p><p>这里还需要设置个 <code>ADMIN_TOKEN</code>，也就是管理员密码，用来对 Bitwarden 的功能进行设置。管理页面地址是： http:// 你的 NAS IP : 端口/admin。启动后可以使用默认端口 4743 访问 Bitwarden 服务。</p><p><img src="https://slark-blog.s3.bitiful.net/qUIsLs_xk0AHF.png" alt="qUIsLs_xk0AHF"></p><h2 id="群晖部署-bitwarden" tabindex="-1">群晖部署 Bitwarden <a class="header-anchor" href="#群晖部署-bitwarden" aria-label="Permalink to &quot;群晖部署 Bitwarden&quot;">​</a></h2><p>建立一个用来存储 Bitwarden 数据的文件夹，比如 <code>/docker/bitwarden</code>，这个也就是需要备份的文件夹。</p><p>在群晖 Docker 中搜索 <code>vaultwarden/server</code> 镜像，下载并运行，只需要修改下面的设置就可以顺利启动容器了，启动后可以使用 8080 端口访问 Bitwarden 服务。</p><p><img src="https://slark-blog.s3.bitiful.net/a7bxi8_xrcbaS.png" alt="a7bxi8_xrcbaS"></p><p>Bitwarden 默认并不需要设置 ADMIN_TOKEN，如果你也想通过 Admin 来配置 Bitwarden 选项，可以在环境变量中加入 <code>ADMIN_TOKEN</code>。</p><p><img src="https://slark-blog.s3.bitiful.net/QpN2Ov_kKA3hY.png" alt="QpN2Ov_kKA3hY"></p><h2 id="添加-https-反向代理" tabindex="-1">添加 HTTPS 反向代理 <a class="header-anchor" href="#添加-https-反向代理" aria-label="Permalink to &quot;添加 HTTPS 反向代理&quot;">​</a></h2><p>为了保证传输安全，Bitwarden 不能通过 HTTP 直接访问，需要添加 HTTPS 证书。</p><p><img src="https://slark-blog.s3.bitiful.net/SKXCQl_zQwpf8.png" alt="SKXCQl_zQwpf8"></p><p>对于有公网 IP 的朋友，可以申请域名配合  <a href="https://nginxproxymanager.com/" target="_blank" rel="noreferrer">Nginx Proxy Manager</a> 来为 Bitwarden 添加 HTTPS 证书。</p><p>对于没有公网 IP 的朋友，可以直接使用我部署好的 Bitwarden 服务。如果你有需要，可以直接点击右上角的联系我，添加微信私聊。</p>',
    20
  ),
  d = [i];
function p(o, s, l, c, h, w) {
  return r(), e("div", null, d);
}
const m = a(n, [["render", p]]);
export { b as __pageData, m as default };
