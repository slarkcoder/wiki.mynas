# 配置 Docker 加速器

Unraid 上的绝大多数应用都是以 Docker 的方式部署的，但 Docker 镜像的服务器位于国外。如果没有网络代理服务，部署时经常会出现下载失败，或者网络错误。除了设置网络代理之外，还可以通过各大云服务厂商提供的 Docker 镜像加速服务来解决镜像下载问题。

## 腾讯云镜像加速地址

```
https://mirror.ccs.tencentyun.com
```

## 阿里云镜像加速地址

登录（如果没有，可以直接用手机号登录）阿里云 [https://cr.console.aliyun.com/cn-shanghai/instances/repositories](https://cr.console.aliyun.com/cn-shanghai/instances/repositories) 之后就可以在 `镜像工具 -> 镜像加速器` 中看到 `加速器地址` 了。

![b4hhN4_npdhLI](https://img-1255332810.cos.ap-chengdu.myqcloud.com/b4hhN4_npdhLI.png)

## 配置 Docker 加速

> 注意：将下面命令中的 `https://xxx.mirror.aliyuncs.com`  替换为上一步你获取到的阿里云镜像加速地址。

在 Unraid 终端工具输入下面的命令：

```
mkdir -p /etc/docker
tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://xxx.mirror.aliyuncs.com"]
}
EOF
```

https://mirror.ccs.tencentyun.com/

之后在 `设置 -> Docker` 中，先将 `启用 Docker` 设置为 `否`，点击应用，再将 `启用 Docker` 设置为 `是`，点击应用。这样就完成了重启 Docker 的操作，Docker 的镜像加速服务也就生效了。

![u1TStC_UEOb4d](https://img-1255332810.cos.ap-chengdu.myqcloud.com/u1TStC_UEOb4d.png)