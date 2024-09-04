import{_ as i,c as a,a3 as n,o as l}from"./chunks/framework.CghS9iDj.js";const c=JSON.parse('{"title":"安装 git-lfs","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/git-lfs.md","filePath":"unraid/git-lfs.md","lastUpdated":1725293933000}'),t={name:"unraid/git-lfs.md"};function e(p,s,h,d,r,k){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="安装-git-lfs" tabindex="-1">安装 git-lfs <a class="header-anchor" href="#安装-git-lfs" aria-label="Permalink to &quot;安装 git-lfs&quot;">​</a></h1><p><code>Git-lfs</code> 是一个 git 的开源扩展，目的是为了解决 git 仓库的大文件托管问题。很多包含大模型的仓库都必须使用 <code>git-lfs</code> 才能把整个 <code>git</code> 仓库拉下来。本篇就介绍如何在 Unraid 上面安装 <code>git-lfs</code>。</p><p><a href="https://github.com/git-lfs/git-lfs/releases" target="_blank" rel="noreferrer">Git-lfs Release</a></p><p>打开 Unraid 终端，依次输入下面的命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入到 /home 目录</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下载 git-lfs 安装包（默认是 x86_64 平台）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/git-lfs/git-lfs/releases/download/v3.5.1/git-lfs-linux-amd64-v3.5.1.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 解压 tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -zxvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git-lfs-linux-amd64-v3.5.1.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入解压后的路径</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git-lfs-3.5.1/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装 git-lfs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./install.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装完成后测试</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lfs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><p>显示 <code>Git LFS initialized.</code> 就表示安装好了。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/WJYKWb_Bx8fg3.png" alt="WJYKWb_Bx8fg3"></p>`,7)]))}const o=i(t,[["render",e]]);export{c as __pageData,o as default};
