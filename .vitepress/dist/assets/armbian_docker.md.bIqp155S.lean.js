import{_ as a,c as e,a2 as i,o as t}from"./chunks/framework.eme8ZeBJ.js";const h=JSON.parse('{"title":"修改 Docker 默认存储路径","description":"","frontmatter":{},"headers":[],"relativePath":"armbian/docker.md","filePath":"armbian/docker.md","lastUpdated":1742456683000}'),n={name:"armbian/docker.md"};function o(r,s,c,p,l,d){return t(),e("div",null,s[0]||(s[0]=[i(`<h1 id="修改-docker-默认存储路径" tabindex="-1">修改 Docker 默认存储路径 <a class="header-anchor" href="#修改-docker-默认存储路径" aria-label="Permalink to &quot;修改 Docker 默认存储路径&quot;">​</a></h1><p>Armbian 设备一般自带的 EMMC 空间都比较有限，装完系统后，留给 Docker 的可用空间就不多了。所以在安装好 Docker 引擎，挂载完大容量存储设备之后，尽量先把 Docker 的默认存储位置修改为大容量的存储设备上，避免后续由于空间不够出问题。</p><div class="warning custom-block"><p class="custom-block-title">提示</p><p>本文所介绍的方法，仅适合在未安装任何 Docker 应用的时候修改默认存储路径。</p></div><h2 id="docker-默认路径" tabindex="-1">Docker 默认路径 <a class="header-anchor" href="#docker-默认路径" aria-label="Permalink to &quot;Docker 默认路径&quot;">​</a></h2><p>Docker 的默认存储路径为 <code>/var/lib/docker</code>，使用下面的命令可以看到：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> info</span></span></code></pre></div><p><img src="https://img.slarker.me/wiki/20250320150524765.webp" alt=""></p><h2 id="修改-docker-配置文件" tabindex="-1">修改 Docker 配置文件 <a class="header-anchor" href="#修改-docker-配置文件" aria-label="Permalink to &quot;修改 Docker 配置文件&quot;">​</a></h2><p>使用 1Panel 自带的文本编辑器，或者 nano 命令编辑配置文件：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nano /usr/lib/systemd/system/docker.service</span></span></code></pre></div><p>修改 <code>Service</code> 中的 ExecStart 参数：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加 --data-root /mnt/disk/docker 参数</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># /mnt/disk/docker 就是位于你的大容量磁盘上的 docker 路径</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ExecStart=/usr/bin/dockerd --data-root /mnt/disk/docker -H fd:// --containerd=/run/containerd/containerd.sock</span></span></code></pre></div><p><img src="https://img.slarker.me/wiki/20250320152614490.webp" alt=""></p><p>保存之后，重启服务：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span></span></code></pre></div><p>之后再使用 <code>docker info</code> 重新查看默认路径，可以看到已经 OK 了。</p><p><img src="https://img.slarker.me/wiki/20250320153146296.webp" alt=""></p>`,17)]))}const m=a(n,[["render",o]]);export{h as __pageData,m as default};
