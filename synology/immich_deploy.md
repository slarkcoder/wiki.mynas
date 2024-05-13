# 使用 Compose 安装照片管理工具 - Immich

Immich 是一个非常好用的，开源的照片管理工具，支持 iOS 和 Android App，本篇教程就来介绍如何在群晖中安装 immich。

## 建立照片共享文件夹

建立共享文件夹 immich 用来保存照片文件。共享文件夹建好之后，可以在 `File Station` 中右击选择属性查看文件夹的路径，记下备用。

![4YcuE6_aUBkpB](https://slark-blog.s3.bitiful.net/4YcuE6_aUBkpB.png)

## 下载配置文件

由于 immich 依赖的服务比较多，所以官方推荐使用 Compose 的方式来安装。首先从 [immich 官网](https://immich.app/docs/install/docker-compose) 下载配置文件：[docker-compose.yml](https://github.com/immich-app/immich/releases/latest/download/docker-compose.yml)，[example.env](https://github.com/immich-app/immich/releases/latest/download/example.env)。

下载好之后，使用文本编辑器修改 example.env 中的 `UPLOAD_LOCATION` 路径为上一步的照片共享文件夹的路径，并保存，修改好应该像下面这样。docker-compose.yml 不需要修改。

```yml
# You can find documentation for all the supported env variables at https://immich.app/docs/install/environment-variables

# The location where your uploaded files are stored
UPLOAD_LOCATION=/volume1/immich

# The Immich version to use. You can pin this to a specific version like "v1.71.0"
IMMICH_VERSION=release

# Connection secret for postgres. You should change it to a random password
DB_PASSWORD=postgres

# The values below this line do not need to be changed
###################################################################################
DB_HOSTNAME=immich_postgres
DB_USERNAME=postgres
DB_DATABASE_NAME=immich

REDIS_HOSTNAME=immich_redis

```

## 建立 Compose 项目并部署

在 File Station 中的 docker 文件夹下面建立 immich 文件夹，用来保存配置文件。将修改好的 example.env 和 docker-compose.yml 上传到 /docker/immich 下面。并把 example.env 重命名为 .env。

![TIk4cP_iMOlbi](https://slark-blog.s3.bitiful.net/TIk4cP_iMOlbi.png)

在 Container Manager 项目中新增，项目名称填写 immich，设置路径选择 /docekr/immich 后会提示已含有 docker-compose.yml，使用现有的 yml 来创建项目，一直下一步就自动开始拉取镜像部署了。

![vfnsdszh.3eh_htNSwa](https://slark-blog.s3.bitiful.net/vfnsdszh.3eh_htNSwa.png)

部署完成之后，会自动启动所有的容器。

![LwYuGy_nUqG5G](https://slark-blog.s3.bitiful.net/LwYuGy_nUqG5G.png)

Immich 默认的 Web 端口是 2283。

![uwz3fsc3.ujp_MuBCtH](https://slark-blog.s3.bitiful.net/uwz3fsc3.ujp_MuBCtH.png)

## 如何更新？

Immich 这个项目更新的非常频繁，当有新版本需要更新的时候，在 `映像` 里会有更新的提示，直接点击更新就可以了。