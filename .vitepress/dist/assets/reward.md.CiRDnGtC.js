import {
  _ as t,
  c as r,
  j as e,
  a as s,
  o,
} from "./chunks/framework.eme8ZeBJ.js";
const _ = JSON.parse(
    '{"title":"打赏支持","description":"","frontmatter":{},"headers":[],"relativePath":"reward.md","filePath":"reward.md","lastUpdated":1725293933000}'
  ),
  d = { name: "reward.md" };
function n(l, a, c, p, i, m) {
  return (
    o(),
    r(
      "div",
      null,
      a[0] ||
        (a[0] = [
          e(
            "h1",
            { id: "打赏支持", tabindex: "-1" },
            [
              s("打赏支持 "),
              e(
                "a",
                {
                  class: "header-anchor",
                  href: "#打赏支持",
                  "aria-label": 'Permalink to "打赏支持"',
                },
                "​"
              ),
            ],
            -1
          ),
          e("p", null, "如果我的分享对你有用，不妨请我喝杯咖啡!", -1),
          e(
            "p",
            null,
            [
              e("img", {
                src: "https://img.slarker.me/wiki/wechatpay_vKNMDj.jpg",
                alt: "",
              }),
            ],
            -1
          ),
          e("p", null, "谢谢！", -1),
        ])
    )
  );
}
const f = t(d, [["render", n]]);
export { _ as __pageData, f as default };
