# 使用 Compose 安装照片管理工具 - Immich

Immich 是一个非常好用的，开源的照片管理工具，支持 iOS 和 Android App，本篇教程就来介绍如何在群晖中安装 immich。

## 建立照片共享文件夹

建立共享文件夹 immich 用来保存照片文件。共享文件夹建好之后，可以在 `File Station` 中右击选择属性查看文件夹的路径，记下备用。

![4YcuE6_aUBkpB](https://img-1255332810.cos.ap-chengdu.myqcloud.com/4YcuE6_aUBkpB.png)

## 配置文件

由于 immich 依赖的服务比较多，所以官方推荐使用 Compose 的方式来安装。首先从 [immich 官网](https://immich.app/docs/install/docker-compose) 下载配置文件：[docker-compose.yml](https://github.com/immich-app/immich/releases/latest/download/docker-compose.yml)，[example.env](https://github.com/immich-app/immich/releases/latest/download/example.env)。

下载好之后，使用文本编辑器修改 example.env 中的 `UPLOAD_LOCATION` 路径为上一步的照片共享文件夹的路径，修改 `DB_DATA_LOCATION` 路径为 `/volume1/docker/immich/postgres` 并保存，修改好应该像下面这样。

:::warning 注意
这里示例配置中的 `immich 照片文件夹` 和 `docker 配置文件夹` 都位于 `volume1` 上面，你需要根据自己的实际情况修改。
:::

```yml
# You can find documentation for all the supported env variables at https://immich.app/docs/install/environment-variables

# The location where your uploaded files are stored
UPLOAD_LOCATION=/volume1/immich
# The location where your database files are stored
DB_DATA_LOCATION=/volume1/docker/immich/postgres

# To set a timezone, uncomment the next line and change Etc/UTC to a TZ identifier from this list: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
# TZ=Etc/UTC

# The Immich version to use. You can pin this to a specific version like "v1.71.0"
IMMICH_VERSION=release

# Connection secret for postgres. You should change it to a random password
DB_PASSWORD=postgres

# The values below this line do not need to be changed
###################################################################################
DB_USERNAME=postgres
DB_DATABASE_NAME=immich
```

按照下面提示修改 `docker-compose.yml`：

最近有群友安装最新版的 immich 时遇到问题，提示不支持 `start_interval` 属性：

![WechatIMG166_rpHaX1](https://img-1255332810.cos.ap-chengdu.myqcloud.com/WechatIMG166_rpHaX1.png)

由于群晖目前版本的 Docker 不支持该属性，可以将该属性所在行直接删除，不影响 `immich` 正常使用。

## 建立 Compose 项目并部署

在 `File Station` 中的 docker 文件夹下面建立 `immich` 文件夹，用来保存配置文件。将修改好的 `example.env` 和 `docker-compose.yml` 上传到 `/docker/immich` 路径下面，并在 `/docker/immich` 下面建立 `postgres` 文件夹用来存储数据库，最后把 `example.env` 重命名为 `.env`。

![x0gx320b.gbe_OyT7Yk](https://img-1255332810.cos.ap-chengdu.myqcloud.com/x0gx320b.gbe_OyT7Yk.png)

在 Container Manager 项目中新增，项目名称填写 immich，设置路径选择 /docekr/immich 后会提示已含有 docker-compose.yml，选择 `使用现有的 docker-compose.yml 来创建项目`，点击确定，一直下一步就自动开始拉取镜像部署了。

![vfnsdszh.3eh_htNSwa](https://img-1255332810.cos.ap-chengdu.myqcloud.com/vfnsdszh.3eh_htNSwa.png)

部署完成之后，会自动启动所有的容器。

![LwYuGy_nUqG5G](https://img-1255332810.cos.ap-chengdu.myqcloud.com/LwYuGy_nUqG5G.png)

Immich 默认的 Web 端口是 2283。

![uwz3fsc3.ujp_MuBCtH](https://img-1255332810.cos.ap-chengdu.myqcloud.com/uwz3fsc3.ujp_MuBCtH.png)

## 设置中文

目前，最新版的 `immich` Web 端已支持中文，登录 Web 版后台，点击自己的头像，在 `Account Setting` -> `App Setting` -> `Language` 中可以找到 `Chinese(Simplified)` 选项，点击就可以切换。

## 如何更新？

Immich 这个项目更新的非常频繁，当有新版本需要更新的时候，在 `映像` 里会有更新的提示，直接点击更新就可以了。