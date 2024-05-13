import { _ as e, c as a, o, a4 as r } from "./chunks/framework.BOW58p_D.js";
const g = JSON.parse(
    '{"title":"用户和共享","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/user_share.md","filePath":"unraid/user_share.md","lastUpdated":1711470861000}'
  ),
  t = { name: "unraid/user_share.md" },
  s = r(
    '<h1 id="用户和共享" tabindex="-1">用户和共享 <a class="header-anchor" href="#用户和共享" aria-label="Permalink to &quot;用户和共享&quot;">​</a></h1><h2 id="添加用户" tabindex="-1">添加用户 <a class="header-anchor" href="#添加用户" aria-label="Permalink to &quot;添加用户&quot;">​</a></h2><p>Unraid 自带一个 root 用户，该用户拥有系统的最高控制权限，可以通过 WebUI 控制台登陆。如果希望给家庭成员分配账号，那可以在 <code>用户</code> 设置中添加用户。</p><p><img src="https://slark-blog.s3.bitiful.net/5cfdBe_PRgDYK.png" alt="5cfdBe_PRgDYK"></p><p>这里需要指出的是，这里添加的用户无法像 root 用户一样可以登陆 WebUI，仅限于通过共享文件夹的方式，在局域网或者通过远程的方式，来访问由 root 用户分配的共享资源。</p><p>添加用户也非常简单，输入用户名称和登陆密码，点击 <code>添加</code> 就好了。</p><p><img src="https://slark-blog.s3.bitiful.net/mDxs5D_W5LiIo.png" alt="mDxs5D_W5LiIo"></p><h2 id="设置共享文件夹" tabindex="-1">设置共享文件夹 <a class="header-anchor" href="#设置共享文件夹" aria-label="Permalink to &quot;设置共享文件夹&quot;">​</a></h2><p>Unraid 默认的共享文件夹有四个。</p><ul><li><code>appdata</code>，用来保存默认的 Docker 应用设置，如果要从应用中心安装应用，这个会经常用到</li><li><code>domains</code>，默认的虚拟机虚拟磁盘文件夹</li><li><code>isos</code>，默认的 iso 镜像文件路径</li><li><code>system</code>，系统文件夹，一般用不到</li></ul><p><img src="https://slark-blog.s3.bitiful.net/TM4Sa3_q4MDrd.png" alt="TM4Sa3_q4MDrd"></p><p>在 Unraid 中如果要添加一个共享文件夹非常简单，只需要点击 <code>添加共享</code>，输入共享文件夹的名称，其他设置保持默认，点击最下方的添加共享按钮之后会出现一个 <code>SMB 安全设置</code>，将导出设置为 <code>是</code>，点击应用即可。</p><p><img src="https://slark-blog.s3.bitiful.net/BlEZZA_c0Vp6E.png" alt="BlEZZA_c0Vp6E"></p><p>此时设置的共享为公开的、不对用户进行权限认证的共享文件夹，只要位于局域网中，就可以通过网络共享发现这个共享文件夹，并可以访问其中的资源。</p><p>如果需要对用户进行认证，可以设置下 <code>安全性</code> 这个选项，点击应用后，设置下对应的用户权限即可。</p><p><img src="https://slark-blog.s3.bitiful.net/0UywwF_HJAOsX.png" alt="0UywwF_HJAOsX"></p>',
    16
  ),
  d = [s];
function c(i, p, l, _, n, m) {
  return o(), a("div", null, d);
}
const u = e(t, [["render", c]]);
export { g as __pageData, u as default };
