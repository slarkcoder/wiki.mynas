import{_ as e,c as a,a3 as o,o as t}from"./chunks/framework.CghS9iDj.js";const g=JSON.parse('{"title":"升级 Compose","description":"","frontmatter":{},"headers":[],"relativePath":"synology/compose_upgrade.md","filePath":"synology/compose_upgrade.md","lastUpdated":1725293933000}'),i={name:"synology/compose_upgrade.md"};function p(c,s,n,r,l,d){return t(),a("div",null,s[0]||(s[0]=[o('<h1 id="升级-compose" tabindex="-1">升级 Compose <a class="header-anchor" href="#升级-compose" aria-label="Permalink to &quot;升级 Compose&quot;">​</a></h1><p>最近有群友安装最新版的 immich 时遇到问题，提示不支持 <code>start_interval</code> 属性：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/WechatIMG166_rpHaX1.png" alt="WechatIMG166_rpHaX1"></p><p>经过查询，应该是群晖自带的 Compose 版本过低导致，只要将 Compose 升级到最新版就可以解决。</p><p>查询当前 <code>Docker Compose</code> 版本：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span></code></pre></div><h2 id="如何升级" tabindex="-1">如何升级？ <a class="header-anchor" href="#如何升级" aria-label="Permalink to &quot;如何升级？&quot;">​</a></h2><p><a href="/synology/ssh.html">使用 SSH 登录</a> 群晖，并切换到 <code>root</code> 用户。</p><p>进入到 Compose 的安装目录：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/packages/ContainerManager/target/usr/bin</span></span></code></pre></div><p>最新的版本号可以在 <a href="https://github.com/docker/compose/releases" target="_blank" rel="noreferrer">这里</a> 看到，将下面命令中的版本号 <code>v2.27.1</code> 可以替换成最新的，然后执行升级命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -SL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/docker/compose/releases/download/v2.27.1/docker-compose-linux-x86_64</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-compose</span></span></code></pre></div><p>升级完成后，可以再次使用 <code>docker-compose version</code> 检查下版本号，是否升级成功。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/3c2SNM_ZO65r5.png" alt="3c2SNM_ZO65r5"></p>',14)]))}const k=e(i,[["render",p]]);export{g as __pageData,k as default};
