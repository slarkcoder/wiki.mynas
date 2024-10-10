import {
  _ as e,
  c as i,
  a2 as c,
  o as t,
} from "./chunks/framework.eme8ZeBJ.js";
const m = JSON.parse(
    '{"title":"Immich 智能搜索 - 支持中文的 CLIP 大模型","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/immich_ai_model.md","filePath":"unraid/immich_ai_model.md","lastUpdated":1725293933000}'
  ),
  s = { name: "unraid/immich_ai_model.md" };
function o(r, a, d, p, n, l) {
  return (
    t(),
    i(
      "div",
      null,
      a[0] ||
        (a[0] = [
          c(
            `<h1 id="immich-智能搜索-支持中文的-clip-大模型" tabindex="-1">Immich 智能搜索 - 支持中文的 CLIP 大模型 <a class="header-anchor" href="#immich-智能搜索-支持中文的-clip-大模型" aria-label="Permalink to &quot;Immich 智能搜索 - 支持中文的 CLIP 大模型&quot;">​</a></h1><p>Immich 默认的智能搜索模型是 <code>ViT-B-32__openai</code>，但这个模型不支持中文，Immich 官方提供了一些大模型，在 <a href="https://huggingface.co/immich-app" target="_blank" rel="noreferrer">模型列表</a> 可以找到。其中就有一个 <a href="https://huggingface.co/immich-app/XLM-Roberta-Large-Vit-B-16Plus" target="_blank" rel="noreferrer">XLM-Roberta-Large-Vit-B-16Plus</a> 支持中文。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>模型的体积比较大，下面介绍的拉取模型办法实际是把模型保存到了 <code>/mnt/user/system/docker/docker.img</code> 中， Unraid 默认的 Docker 虚拟磁盘大小为 20G，如果你没有修改过，可以提前将虚拟磁盘容量改大一些，避免拉取过程出错。具体办法如下：</p><p>在 Unraid <code>设置</code> -&gt; <code>Docker</code> -&gt; <code>启用 Docker</code> 修改为 <code>否</code>，修改虚拟磁盘大小之后重新启用即可。</p></div><h2 id="拉取模型" tabindex="-1">拉取模型 <a class="header-anchor" href="#拉取模型" aria-label="Permalink to &quot;拉取模型&quot;">​</a></h2><p>网上介绍的办法有点麻烦，路径很容易搞错，这里介绍一个比较简单的办法。可以直接通过 git 将这个模型直接拉到本地。需要提前 <a href="/unraid/git-lfs.html">安装 git-lfs</a>。</p><p>安装好 <code>git-lfs</code> 之后，可以打开 Unraid 终端，直接用下面的命令拉取模型：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入到 immich 默认的模型目录</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/lib/docker/volumes/immich_model-cache/_data/clip</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 拉取模型</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://huggingface.co/immich-app/XLM-Roberta-Large-Vit-B-16Plus</span></span></code></pre></div><h2 id="更新模型" tabindex="-1">更新模型 <a class="header-anchor" href="#更新模型" aria-label="Permalink to &quot;更新模型&quot;">​</a></h2><p>如果后续模型有更新，可以直接 <code>cd</code> 到对应的模型下面，使用 <code>git pull</code> 直接更新。</p><p><img src="https://img.slarker.me/wiki/ldGAKu_zvmuzo.png" alt="ldGAKu_zvmuzo"></p><h2 id="设置-smart-search" tabindex="-1">设置 Smart Search <a class="header-anchor" href="#设置-smart-search" aria-label="Permalink to &quot;设置 Smart Search&quot;">​</a></h2><p>模型拉下来之后，可以在 Immich 后台 <code>Administration</code> -&gt; <code>Setting</code> -&gt; <code>Machine Learning Setting</code> -&gt; <code>Smart Search</code> 中，将 <code>CLIP MODEL</code> 修改为大模型的名称，并点击保存。</p><p><img src="https://img.slarker.me/wiki/t43n4f01.asi_BJGHiR.png" alt="t43n4f01.asi_BJGHiR"></p><p>之后可以在 <code>Docker Compose</code> 中 <code>UPDATE STACK</code>，然后在 Immich 后台 <code>Administration</code> -&gt; <code>Job</code> 中重新跑一遍 <code>SMART SEARCH</code>。</p><p><img src="https://img.slarker.me/wiki/ksyuslwu.0yd_pmsMrr.png" alt="ksyuslwu.0yd_pmsMrr"></p><p>跑的过程中 CPU 占用会比较高，属于正常现象，跑完之后就会正常。跑完就能用中文搜索了：</p><p><img src="https://img.slarker.me/wiki/WechatIMG9029_Y9m36O.jpg" alt="WechatIMG9029_Y9m36O"></p><h2 id="其它模型" tabindex="-1">其它模型 <a class="header-anchor" href="#其它模型" aria-label="Permalink to &quot;其它模型&quot;">​</a></h2><p>如果你想试试其它模型，可以在 <a href="https://huggingface.co/immich-app" target="_blank" rel="noreferrer">模型列表</a>，点具体某个模型进去，在右侧可以找到 <code>Clone repository</code>：</p><p><img src="https://img.slarker.me/wiki/CKxbdq_mqWVnH.png" alt="CKxbdq_mqWVnH"></p><p>打开后点击命令右侧的复制按钮：</p><p><img src="https://img.slarker.me/wiki/SEGqHx_eWztII.png" alt="SEGqHx_eWztII"></p><p>到 Unraid 终端直接执行即可。</p><p><img src="https://img.slarker.me/wiki/iteqsuse.3rl_nP7EXQ.png" alt="iteqsuse.3rl_nP7EXQ"></p>`,
            24
          ),
        ])
    )
  );
}
const g = e(s, [["render", o]]);
export { m as __pageData, g as default };
