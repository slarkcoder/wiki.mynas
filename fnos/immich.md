# 优秀的照片管理工具 - immich

![](https://img.slarker.me/wiki/202409112117284.jpg)

Immich 的优秀无须多说，相比一些自带的相册应用，immich 已经很成熟了人脸识别，自然语言搜索，支持中文，支持多账户等等，该有的功能也都有。尤其是目前 fnOS 自带的相册功能也比较基础，使用 immich 来替代自带的相册也会是大多数人的选择。之前我也写过在 Unraid、群晖上的安装教程，具体可以看：

- Unraid：[安装 Immich 并开启硬件加速](/unraid/deploy_immich.md)
- Synology：[使用 Compose 安装照片管理工具 - Immich](/synology/immich_deploy.md)

在 fnOS 上安装 immich 和群晖上没什么区别，但为了方便 fnOS 用户安装，我还是决定再写一篇如何在 fnOS 上安装 immich 的教程。有英文阅读能力的，建议跟着 [官网教程](https://immich.app/docs/install/docker-compose) 走一遍。

> 值得注意的是，fnOS 的 docker 版本比较新，目前为 `Docker version 26.0.0`，而 Unraid 6.12.13 的 docker 版本为 `Docker version 24.0.9`。所以在 Unraid 和群晖上出现的 Docker 参数 `start_interval` 不支持的问题，在 fnOS 上不会出现，这一点也方便很多。

## 建立共享文件夹

按照下图所示建立文件夹。

- `/docker/immich`：Compose 配置文件夹
- `/docker/immich/db`：数据库文件夹
- `/photos`：保存照片文件夹

![VnJnSQ_eyrmOC](https://img.slarker.me/wiki/VnJnSQ_eyrmOC.png)

文件夹的实际路径也可以在文件夹上右击 -> 选择 `详细信息` -> `复制原始路径` 得到。

![Snipaste_2024-09-07_23-10-38_kGBfHx](https://img.slarker.me/wiki/Snipaste_2024-09-07_23-10-38_kGBfHx.png)

## 准备配置文件

:::info 提示
- 配置文件中的 `vol1` 表示 `存储空间 1`，需要和上面建立的文件夹的实际路径保持一致。
- 配置文件中的 `1000` 为当前用户的 `User ID`。
:::

下载配置文件 [docker-compose.yml](https://github.com/immich-app/immich/releases/latest/download/docker-compose.yml) 和 [example.env](https://github.com/immich-app/immich/releases/latest/download/example.env)。`docker-compose.yml` 不需要修改，example.env 需要修改其中的：

- UPLOAD_LOCATION：照片上传位置，也就是保存照片的文件夹。
- DB_DATA_LOCATION：数据库保存位置。
- TZ：时区，国内可以修改为 `Asia/Shanghai`。

```yml
# You can find documentation for all the supported env variables at https://immich.app/docs/install/environment-variables

# The location where your uploaded files are stored
UPLOAD_LOCATION=/vol1/1000/photos
# The location where your database files are stored
DB_DATA_LOCATION=/vol1/1000/docker/immich/db

# To set a timezone, uncomment the next line and change Etc/UTC to a TZ identifier from this list: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
TZ=Asia/Shanghai

# The Immich version to use. You can pin this to a specific version like "v1.71.0"
IMMICH_VERSION=release

# Connection secret for postgres. You should change it to a random password
# Please use only the characters `A-Za-z0-9`, without special characters or spaces
DB_PASSWORD=postgres

# The values below this line do not need to be changed
###################################################################################
DB_USERNAME=postgres
DB_DATABASE_NAME=immich
```

## 上传配置文件

将配置文件 `docker-compose.yml` 和 `example.env` 上传到 immich 中，并将 `example.env` 重命名为 `.env`。

![Snipaste_2024-09-07_22-24-40_EDIwzE](https://img.slarker.me/wiki/Snipaste_2024-09-07_22-24-40_EDIwzE.png)

## 通过 Compose 安装 immich

在 fnOS 的 Docker 中创建 Compose 项目，路径选择 `/docker/immich`，使用现有配置文件创建项目，点击 `确定`。勾选 `创建项目后立即启动`，点击 `完成`。

![NQzP7e_7ni8iX](https://img.slarker.me/wiki/NQzP7e_7ni8iX.png)

Compose 会自动拉取相关的 Docker 镜像，按照配置自动构建相关容器，等待完成，immich 就装好了。

![YE6ffu_TW5LNK](https://img.slarker.me/wiki/YE6ffu_TW5LNK.png)

immich 的默认端口为：`2283`，浏览器打开 `fnOS IP:2283` 就能访问了。

## 人脸识别设置问题

### 模型下载失败问题

如果你的 `immich` 人脸识别不生效，可能是由于人脸识别模型 [buffalo_l](https://huggingface.co/immich-app/buffalo_l) 下载失败，可以尝试使用下面的两种（任选一种）办法解决。

![](https://img.slarker.me/wiki/e122d51d4bc84c73b07813ef9da25771.webp)

#### 方法一：使用 git 命令拉取模型

[使用 SSH 登录](/fnos/ssh.md) fnOS，并切换到 `root` 用户。`cd` 进入到 immich 模型的路径下面。如果你的 `docker` 安装在 `存储空间 1` 上面，那么模型的路径就应该是：

```sh
# 进入到 immich  模型路径
cd /vol1/docker/volumes/immich_model-cache/_data/facial-recognition
# 使用 git 命令拉取模型
git clone https://huggingface.co/immich-app/buffalo_l
```

拉取完成之后，重新运行人脸识别任务。

#### 方法二：手动上传模型

下载 [buffalo_l 模型](https://www.123pan.com/s/1JKMjv-oVao) 到本地，使用 fnOS 自带的文件管理器，切换到管理员视角，将 `zip` 文件上传到 immich 模型的路径下面。

如果你的 `docker` 安装在 `存储空间 1` 上面，那么模型的路径就应该是：

```sh
/vol1/docker/volumes/immich_model-cache/_data/facial-recognition
```

上传完成之后，解压 `zip`，重新运行人脸识别任务。

### container name 不一致问题

`container name` 不一致也有可能导致人脸识别失败。

在 immich 后台，点击头像 -> `管理` -> `设置` -> `机器学习设置`，确认 `机器学习的 URL` 为：

```sh
http://immich_machine_learning:3003
```

![](https://img.slarker.me/wiki/477f81956e184107ad2b2244b21657be.webp)

这里的 `immich_machine_learning` 需要和 `yml` 配置文件中的机器学习容器的 `container name` 一致。

![](https://img.slarker.me/wiki/7a17b0c2aa3547a0ad59e12bf9687daf.webp)

目前默认为：`http://immich-machine-learning:3003`。

修改后 `保存`，在 `任务` 中重新运行 `人脸检测`。

## 支持中文的智能搜索 CLIP 模型

Immich 目前已经支持直接修改模型名称，保存之后，即可自动拉取模型。只要你的模型名称和网络都没问题，直接改模型名称即可，不需要手动拉模型了。

目前比较推荐的是这个支持中文的 CLIP 大模型：`XLM-Roberta-Large-Vit-B-16Plus`。

在 `immich` 后台 `管理` -> `设置` -> `机器学习设置` -> `智能搜索` -> `CLIP 模型` 中粘贴上面的模型名称，点击保存。之后在 `任务` 中重新运行 `智能搜索` 任务。

![](https://img.slarker.me/wiki/52a4873d487343efb1ff740100f10955.webp)