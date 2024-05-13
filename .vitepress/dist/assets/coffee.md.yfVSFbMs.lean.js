import {
  _ as t,
  c as a,
  o,
  l as e,
  a as s,
} from "./chunks/framework.BOW58p_D.js";
const k = JSON.parse(
    '{"title":"咖啡，我来啦！","description":"","frontmatter":{},"headers":[],"relativePath":"coffee.md","filePath":"coffee.md","lastUpdated":1711470861000}'
  ),
  c = { name: "coffee.md" },
  r = e(
    "h1",
    { id: "咖啡-我来啦", tabindex: "-1" },
    [
      s("咖啡，我来啦！ "),
      e(
        "a",
        {
          class: "header-anchor",
          href: "#咖啡-我来啦",
          "aria-label": 'Permalink to "咖啡，我来啦！"',
        },
        "​"
      ),
    ],
    -1
  ),
  n = e("p", null, "如果我的分享对你有用，不妨请我喝杯咖啡!", -1),
  l = e(
    "p",
    null,
    [
      e("img", {
        src: "https://slark-blog.s3.bitiful.net/wechatpay_vKNMDj.jpg",
        alt: "",
      }),
    ],
    -1
  ),
  d = e("p", null, "谢谢！", -1),
  _ = [r, n, l, d];
function i(p, f, h, m, u, g) {
  return o(), a("div", null, _);
}
const N = t(c, [["render", i]]);
export { k as __pageData, N as default };
