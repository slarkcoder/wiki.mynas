import{_ as a,c as i,a2 as n,o as p}from"./chunks/framework.BsQYyOtK.js";const c=JSON.parse('{"title":"适合个人和小团队的看板应用 - Planka","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/planka.md","filePath":"unraid/planka.md","lastUpdated":1725293933000}'),l={name:"unraid/planka.md"};function e(t,s,h,k,E,r){return p(),i("div",null,s[0]||(s[0]=[n(`<h1 id="适合个人和小团队的看板应用-planka" tabindex="-1">适合个人和小团队的看板应用 - Planka <a class="header-anchor" href="#适合个人和小团队的看板应用-planka" aria-label="Permalink to &quot;适合个人和小团队的看板应用 - Planka&quot;">​</a></h1><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-05-22_14-21-25_zlCEIu.jpg" alt="Snipaste_2024-05-22_14-21-25_zlCEIu"></p><p><a href="https://planka.app/" target="_blank" rel="noreferrer">Planka</a> 是一个开源免费的看板应用，界面简洁清爽，适合个人或者小团队来实现工作内容可视化，任务安排，追踪进度，帮你提高工作效率。</p><p>可以打开 <a href="https://plankanban.github.io/planka/#/" target="_blank" rel="noreferrer">官方的 Demo</a> 试试效果。如果你想在 NAS 上使用，可以按照下面的教程部署。</p><h2 id="unraid" tabindex="-1">Unraid <a class="header-anchor" href="#unraid" aria-label="Permalink to &quot;Unraid&quot;">​</a></h2><p>Unraid 可以使用 <code>Docker Compose</code> 来安装 <code>Planka</code>。可以直接新建 Compose 项目，使用下面的配置来安装 Planka。</p><p>如果你想更简单一些，也可以直接从这里 <a href="https://files.mynas.chat/share/BXbuuhLC" target="_blank" rel="noreferrer">下载 Planka.zip 模板</a>。</p><p>将下载到的 <code>Planka.zip</code> 解压后直接存到启动 U 盘的 <code>/config/plugins/compose.manager/projects</code> 下面。就可以在 Docker 中看到 Planka 了。</p><p>这里需要修改一些配置，<code>点击 Planka 小齿轮图标</code> -&gt; <code>EDIT STACK</code> -&gt; <code>COMPOSE FILE</code>，按照下面的提示修改：</p><ul><li>将 <code>BASE_URL</code> 中的 IP 替换为自己的 NAS IP。</li><li>将 <code>DEFAULT_ADMIN_EMAIL</code> 修改为自己的邮箱。</li><li>将 <code>DEFAULT_ADMIN_PASSWORD</code> 修改为自己的密码。</li><li>将 <code>DEFAULT_ADMIN_NAME</code> 修改为自己的管理员名称。</li><li>将 <code>DEFAULT_ADMIN_USERNAME</code> 修改为自己的管理员用户名。</li></ul><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  planka</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ghcr.io/plankanban/planka:latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">on-failure</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/mnt/user/appdata/planka/user-avatars:/app/public/user-avatars</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/mnt/user/appdata/planka/project-background-images:/app/public/project-background-images</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/mnt/user/appdata/planka/attachments:/app/private/attachments</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">5000:1337</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BASE_URL=http://192.168.2.2:5000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DATABASE_URL=postgresql://postgres@postgres/planka</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">SECRET_KEY=405f12c3275f9132cd870fabdeffb42d92cd6e129ed8cf64e70e4bd4ea6cae73ac7f4e63f0653540fcecfc4ba823200a96c822ffc37d064b1de642860e3b5832</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - TRUST_PROXY=0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - TOKEN_EXPIRES_IN=365 # In days</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # related: https://github.com/knex/knex/issues/2354</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # As knex does not pass query parameters from the connection string we</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # have to use environment variables in order to pass the desired values, e.g.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - PGSSLMODE=&lt;value&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # Configure knex to accept SSL certificates</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - KNEX_REJECT_UNAUTHORIZED_SSL_CERTIFICATE=false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DEFAULT_ADMIN_EMAIL=zhangsan@qq.com</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Do not remove if you want to prevent this user from being edited/deleted</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DEFAULT_ADMIN_PASSWORD=password</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DEFAULT_ADMIN_NAME=zhangsan</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DEFAULT_ADMIN_USERNAME=zhangsan</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - OIDC_ISSUER=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - OIDC_CLIENT_ID=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - OIDC_CLIENT_SECRET=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - OIDC_SCOPES=openid email profile</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - OIDC_ADMIN_ROLES=admin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - OIDC_EMAIL_ATTRIBUTE=email</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - OIDC_NAME_ATTRIBUTE=name</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - OIDC_USERNAME_ATTRIBUTE=preferred_username</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - OIDC_ROLES_ATTRIBUTE=groups</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - OIDC_IGNORE_USERNAME=true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - OIDC_IGNORE_ROLES=true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - OIDC_ENFORCED=true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # Email Notifications (https://nodemailer.com/smtp/)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - SMTP_HOST=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - SMTP_PORT=587</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - SMTP_SECURE=true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - SMTP_USER=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - SMTP_PASSWORD=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - SMTP_FROM=&quot;Demo Demo&quot; &lt;demo@demo.demo&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - SLACK_BOT_TOKEN=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - SLACK_CHANNEL_ID=</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    depends_on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      postgres</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        condition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">service_healthy</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  postgres</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">postgres:14-alpine</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">on-failure</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/mnt/user/appdata/planka/db:/var/lib/postgresql/data</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">POSTGRES_DB=planka</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">POSTGRES_HOST_AUTH_METHOD=trust</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    healthcheck</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;CMD-SHELL&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pg_isready -U postgres -d planka&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      interval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">10s</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">5s</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      retries</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span></code></pre></div><p>修改完成之后，直接点 <code>COMPOSE UP</code> 就可以安装成功。</p><p>Planka 的默认端口是 5000，应用数据都存到了 <code>/user/appdata/planka</code> 下面。</p>`,13)]))}const g=a(l,[["render",e]]);export{c as __pageData,g as default};
