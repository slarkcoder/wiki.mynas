import{_ as s,c as e,o as a,a4 as o}from"./chunks/framework.BOW58p_D.js";const m=JSON.parse('{"title":"升级 Compose","description":"","frontmatter":{},"headers":[],"relativePath":"synology/compose_upgrade.md","filePath":"synology/compose_upgrade.md","lastUpdated":1718446220000}'),t={name:"synology/compose_upgrade.md"},i=o('<h1 id="升级-compose" tabindex="-1">升级 Compose <a class="header-anchor" href="#升级-compose" aria-label="Permalink to &quot;升级 Compose&quot;">​</a></h1><p>最近有群友安装最新版的 immich 时遇到问题，提示不支持 <code>start_interval</code> 属性：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/WechatIMG166_rpHaX1.png" alt="WechatIMG166_rpHaX1"></p><p>经过查询，应该是群晖自带的 Compose 版本过低导致，只要将 Compose 升级到最新版就可以解决。</p><p>查询当前 <code>Docker Compose</code> 版本：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span></code></pre></div><h2 id="如何升级" tabindex="-1">如何升级？ <a class="header-anchor" href="#如何升级" aria-label="Permalink to &quot;如何升级？&quot;">​</a></h2><p><a href="/synology/ssh.html">使用 SSH 登录</a> 群晖，并切换到 <code>root</code> 用户。</p><p>进入到 Compose 的安装目录：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/packages/ContainerManager/target/usr/bin</span></span></code></pre></div><p>最新的版本号可以在 <a href="https://github.com/docker/compose/releases" target="_blank" rel="noreferrer">这里</a> 看到，将下面命令中的版本号 <code>v2.27.1</code> 可以替换成最新的，然后执行升级命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -SL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/docker/compose/releases/download/v2.27.1/docker-compose-linux-x86_64</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-compose</span></span></code></pre></div><p>升级完成后，可以再次使用 <code>docker-compose version</code> 检查下版本号，是否升级成功。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/3c2SNM_ZO65r5.png" alt="3c2SNM_ZO65r5"></p>',14),p=[i];function c(n,h,r,l,d,g){return a(),e("div",null,p)}const _=s(t,[["render",c]]);export{m as __pageData,_ as default};