import {
  _ as e,
  c as a,
  o as t,
  a4 as r,
} from "./chunks/framework.BOW58p_D.js";
const u = JSON.parse(
    '{"title":"解决虚拟组网远程无法访问 80 端口问题","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/remote.md","filePath":"unraid/remote.md","lastUpdated":1713248316000}'
  ),
  o = { name: "unraid/remote.md" },
  c = r(
    '<h1 id="解决虚拟组网远程无法访问-80-端口问题" tabindex="-1">解决虚拟组网远程无法访问 80 端口问题 <a class="header-anchor" href="#解决虚拟组网远程无法访问-80-端口问题" aria-label="Permalink to &quot;解决虚拟组网远程无法访问 80 端口问题&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">注意</p><p>适用于 Unraid 6.12.0 及以后版本，之前版本没有这个问题，无需设置。</p></div><p>如果你没有公网 IP，用的 Zerotier，TailScale，StarVPN 等类似的虚拟组网方案来实现远程访问，而且是直接通过 Docker 在 Unraid 上面安装对应的容器来实现组网，那可能会遇到下面这个问题：</p><p>Unraid 的默认 80 端口，也就是 WebUI 无法访问，而其它的 Docker 容器端口都可以正常访问。</p><p>这个问题解决起来也很简单，以 StarVPN 为例，在添加完 StarVPN 的 Docker 容器之后，会在网络里多出来一个名为 <code>StarVPN</code> 的网关，然后把这个网关名称添加到 <code>额外接口</code> 的 <code>包含监听的接口</code> 中，点应用就可以了。</p><p><img src="https://slark-blog.s3.bitiful.net/WechatIMG64_6EJfqy.jpg" alt="WechatIMG64_6EJfqy"></p><p>如果用的 Zerotier 或者 TailScale，解决办法类似，照猫画虎操作即可。</p>',
    7
  ),
  i = [c];
function s(d, n, _, p, l, m) {
  return t(), a("div", null, i);
}
const f = e(o, [["render", s]]);
export { u as __pageData, f as default };
