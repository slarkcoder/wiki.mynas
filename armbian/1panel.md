# 使用 1Panel 安装 Docker 应用

在 1Panel 的容器中，使用 Compose 安装 docker，下面以安装 Alist 为例：

![](https://img.slarker.me/wiki/20250318180035431.webp)

在 `容器` -> `编排` 中 `创建编排`，填写 compose `文件夹` 名称和 `yml` 配置：

![](https://img.slarker.me/wiki/20250318180434525.webp)

将 Armbian 中的下载文件夹 `/mnt/disk/downloads` 映射到容器的 `/mnt/downloads`：

```yml
name: alist
services:
  alist:
    restart: always
    volumes:
      - ./data:/opt/alist/data
      - /mnt/disk/downloads:/mnt/downloads #映射自己的路径
    ports:
      - '5244:5244'
      - '5245:5245'
    environment:
      - PUID=0
      - PGID=0
      - UMASK=022
      - TZ=Asia/Shanghai
    container_name: alist
    image: xhofe/alist:latest

  watchtower:
    image: containrrr/watchtower
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    command: --interval 86400 --cleanup --remove-volumes
    environment:
      - WATCHTOWER_CLEANUP=true
      - WATCHTOWER_REMOVE_VOLUMES=true
```

编辑完之后，点击 `确认`，就会自动拉取镜像，创建好 docker 应用了。

Alist 的默认用户名：admin，默认密码在日志中查看：

![](https://img.slarker.me/wiki/20250318180752670.webp)