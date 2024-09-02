# 适合个人和小团队的看板应用 - Planka

![Snipaste_2024-05-22_14-21-25_zlCEIu](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-05-22_14-21-25_zlCEIu.jpg)

[Planka](https://planka.app/) 是一个开源免费的看板应用，界面简洁清爽，适合个人或者小团队来实现工作内容可视化，任务安排，追踪进度，帮你提高工作效率。

可以打开 [官方的 Demo](https://plankanban.github.io/planka/#/) 试试效果。如果你想在 NAS 上使用，可以按照下面的教程部署。

## Unraid

Unraid 可以使用 `Docker Compose` 来安装 `Planka`。可以直接新建 Compose 项目，使用下面的配置来安装 Planka。

如果你想更简单一些，也可以直接从这里 [下载 Planka.zip 模板](https://files.mynas.chat/share/BXbuuhLC)。

将下载到的 `Planka.zip` 解压后直接存到启动 U 盘的 `/config/plugins/compose.manager/projects` 下面。就可以在 Docker 中看到 Planka 了。

这里需要修改一些配置，`点击 Planka 小齿轮图标` -> `EDIT STACK` -> `COMPOSE FILE`，按照下面的提示修改：

- 将 `BASE_URL` 中的 IP 替换为自己的 NAS IP。
- 将 `DEFAULT_ADMIN_EMAIL` 修改为自己的邮箱。
- 将 `DEFAULT_ADMIN_PASSWORD` 修改为自己的密码。
- 将 `DEFAULT_ADMIN_NAME` 修改为自己的管理员名称。
- 将 `DEFAULT_ADMIN_USERNAME` 修改为自己的管理员用户名。

```yml
version: "3"

services:
  planka:
    image: ghcr.io/plankanban/planka:latest
    restart: on-failure
    volumes:
      - /mnt/user/appdata/planka/user-avatars:/app/public/user-avatars
      - /mnt/user/appdata/planka/project-background-images:/app/public/project-background-images
      - /mnt/user/appdata/planka/attachments:/app/private/attachments
    ports:
      - 5000:1337
    environment:
      - BASE_URL=http://192.168.2.2:5000
      - DATABASE_URL=postgresql://postgres@postgres/planka
      - SECRET_KEY=405f12c3275f9132cd870fabdeffb42d92cd6e129ed8cf64e70e4bd4ea6cae73ac7f4e63f0653540fcecfc4ba823200a96c822ffc37d064b1de642860e3b5832

      # - TRUST_PROXY=0
      # - TOKEN_EXPIRES_IN=365 # In days

      # related: https://github.com/knex/knex/issues/2354
      # As knex does not pass query parameters from the connection string we
      # have to use environment variables in order to pass the desired values, e.g.
      # - PGSSLMODE=<value>

      # Configure knex to accept SSL certificates
      # - KNEX_REJECT_UNAUTHORIZED_SSL_CERTIFICATE=false

      - DEFAULT_ADMIN_EMAIL=zhangsan@qq.com # Do not remove if you want to prevent this user from being edited/deleted
      - DEFAULT_ADMIN_PASSWORD=password
      - DEFAULT_ADMIN_NAME=zhangsan
      - DEFAULT_ADMIN_USERNAME=zhangsan

      # - OIDC_ISSUER=
      # - OIDC_CLIENT_ID=
      # - OIDC_CLIENT_SECRET=
      # - OIDC_SCOPES=openid email profile
      # - OIDC_ADMIN_ROLES=admin
      # - OIDC_EMAIL_ATTRIBUTE=email
      # - OIDC_NAME_ATTRIBUTE=name
      # - OIDC_USERNAME_ATTRIBUTE=preferred_username
      # - OIDC_ROLES_ATTRIBUTE=groups
      # - OIDC_IGNORE_USERNAME=true
      # - OIDC_IGNORE_ROLES=true
      # - OIDC_ENFORCED=true

      # Email Notifications (https://nodemailer.com/smtp/)
      # - SMTP_HOST=
      # - SMTP_PORT=587
      # - SMTP_SECURE=true
      # - SMTP_USER=
      # - SMTP_PASSWORD=
      # - SMTP_FROM="Demo Demo" <demo@demo.demo>

      # - SLACK_BOT_TOKEN=
      # - SLACK_CHANNEL_ID=
    depends_on:
      postgres:
        condition: service_healthy

  postgres:
    image: postgres:14-alpine
    restart: on-failure
    volumes:
      - /mnt/user/appdata/planka/db:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=planka
      - POSTGRES_HOST_AUTH_METHOD=trust
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres -d planka"]
      interval: 10s
      timeout: 5s
      retries: 5
```

修改完成之后，直接点 `COMPOSE UP` 就可以安装成功。

Planka 的默认端口是 5000，应用数据都存到了 `/user/appdata/planka` 下面。