import {
  _ as s,
  c as e,
  a2 as a,
  o as t,
} from "./chunks/framework.eme8ZeBJ.js";
const r = JSON.parse(
    '{"title":"Synology Photos 常见问题","description":"","frontmatter":{},"headers":[],"relativePath":"synology/photos.md","filePath":"synology/photos.md","lastUpdated":1725293933000}'
  ),
  p = { name: "synology/photos.md" };
function c(h, o, d, n, i, l) {
  return (
    t(),
    e(
      "div",
      null,
      o[0] ||
        (o[0] = [
          a(
            '<h1 id="synology-photos-常见问题" tabindex="-1">Synology Photos 常见问题 <a class="header-anchor" href="#synology-photos-常见问题" aria-label="Permalink to &quot;Synology Photos 常见问题&quot;">​</a></h1><p>本篇教程解决一些使用 <code>Synology Photos</code> 经常遇到的问题。涉及到 <code>SSH</code> 的一些操作，可以参考这里：<a href="/synology/ssh.html">使用 SSH 登录</a>。</p><h2 id="相册视频没有缩略图" tabindex="-1">相册视频没有缩略图 <a class="header-anchor" href="#相册视频没有缩略图" aria-label="Permalink to &quot;相册视频没有缩略图&quot;">​</a></h2><p>很多视频在上传到 <code>Synology Photos</code> 之后经过索引，也没有缩略图，像下面这样：</p><p><img src="https://img.slarker.me/wiki/synology_photo_01_Bx8NP8.png" alt="synology_photo_01_Bx8NP8"></p><p>解决起来也不难，可以使用 <code>FFmpeg 6</code> 来生成缩略图。</p><h3 id="安装-ffmpeg-6" tabindex="-1">安装 <code>FFmpeg 6</code> <a class="header-anchor" href="#安装-ffmpeg-6" aria-label="Permalink to &quot;安装 `FFmpeg 6`&quot;">​</a></h3><p>在 <code>套件中心</code> -&gt; <code>设置</code> -&gt; <code>套件来源</code> 中新增 <code>矿神</code> 套件源：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https://spk7.imnks.com</span></span></code></pre></div><p><img src="https://img.slarker.me/wiki/synology_photo_03_oD0zrU.png" alt="synology_photo_03_oD0zrU"></p><p>之后在套件中心搜索 <code>FFmpeg 6</code> 并安装：</p><p><img src="https://img.slarker.me/wiki/synology_photo_04_t4YRh6.png" alt="synology_photo_04_t4YRh6"></p><h3 id="ssh-操作" tabindex="-1">SSH 操作 <a class="header-anchor" href="#ssh-操作" aria-label="Permalink to &quot;SSH 操作&quot;">​</a></h3><p><a href="/synology/ssh.html">使用 SSH 登录</a> 群晖，并切换到 <code>root</code> 用户，执行下面的命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/packages/ffmpeg6/target/bin/ffmpeg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/bin/</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/packages/ffmpeg6/target/bin/ffmpeg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/packages/SynologyPhotos/target/usr/bin/</span></span></code></pre></div><p>之后使用 <code>exit</code> 退出就可以了。</p><h3 id="设置权限" tabindex="-1">设置权限 <a class="header-anchor" href="#设置权限" aria-label="Permalink to &quot;设置权限&quot;">​</a></h3><p>在 <code>控制面板</code> -&gt; <code>共享文件夹</code> 中分别给 <code>homes</code> 和 <code>photo</code> 文件夹添加 <code>sc-ffmpeg6</code> 读写权限：</p><p><img src="https://img.slarker.me/wiki/synology_photo_09_ZJdbjs.png" alt="synology_photo_09_ZJdbjs"></p><p>选中具体的文件夹，点击 <code>编辑</code> -&gt; <code>权限</code>，点击 <code>本地用户</code> 切换到 <code>系统内部用户账号</code>，在 <code>sc-ffmpeg6</code> 后面勾选 <code>可读写</code> 并保存。</p><p><img src="https://img.slarker.me/wiki/synology_photo_07_HbL1TF.png" alt="synology_photo_07_HbL1TF"></p><h3 id="重新索引" tabindex="-1">重新索引 <a class="header-anchor" href="#重新索引" aria-label="Permalink to &quot;重新索引&quot;">​</a></h3><p>最后在 <code>Synology Photos</code> 中点击重新索引就可以了，稍等片刻缩略图就会出来。</p><p><img src="https://img.slarker.me/wiki/synology_photo_02_QerRXs.png" alt="synology_photo_02_QerRXs"></p><p><img src="https://img.slarker.me/wiki/synology_photo_08_EFbPsg.png" alt="synology_photo_08_EFbPsg"></p>',
            25
          ),
        ])
    )
  );
}
const y = s(p, [["render", c]]);
export { r as __pageData, y as default };
