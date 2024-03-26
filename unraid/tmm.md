# 安装 TinyMediaManager 并解决中文乱码问题

TinyMediaManager 是一个影视元数据刮削工具，安装起来很简单。

![](https://blog-1255332810.cos.ap-shanghai.myqcloud.com//202312111615290.png)

也可以直接使用命令安装：

```
docker run \
  --name tinymediamanager \
  --net=bridge  \
  -v /mnt/user/appdata/tinymediamanager:/config \
  -v /mnt/user/media:/media \
  -p 5800:5800 \
  -e UID=0 \
  -e GID=0 \
  -e GIDLIST=0 \
  --restart always \
  -d romancin/tinymediamanager:latest
```

TinyMediaManager 默认是英文，直接切换为中文会显示乱码，需要安装下面的字体后才能切换。

Docker 容器启动之后需要进入控制台安装中文字体：

```
wget https://mirrors.huaweicloud.com/alpine/edge/testing/x86_64/font-wqy-zenhei-0.9.45-r3.apk
apk add --allow-untrusted font-wqy-zenhei-0.9.45-r3.apk
```

网上的教程基本都是阿里云镜像的源，而这个源的字体链接已经失效了。华为云镜像提供的这个字体目前亲测有效，可以使用。

装好字体后，就可以在 UI 中正常切换为中文了。

如果有版本提示，切记不要更新。

![](https://blog-1255332810.cos.ap-shanghai.myqcloud.com//202312111617895.png)