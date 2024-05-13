# 给使用命令安装的 Docker 应用添加图标

在 Unraid 中，通过应用市场的模板来安装 Docker 应用，一般都会自带一个图标，Unraid 提供了非常直观的编辑 Docker 页面，可以很方便的修改这些图标。

![8lprAH_T3kK1n](https://img-1255332810.cos.ap-chengdu.myqcloud.com/8lprAH_T3kK1n.png)

应用成功安装后，会将当前的设置都保存到 `xml` 模板文件中。比如以迅雷为例，其模板文件是这样的：

```xml
<?xml version="1.0"?>
<Container version="2">
  <Name>Xunlei</Name>
  <Repository>cnk3x/xunlei:latest</Repository>
  <Registry/>
  <Network>bridge</Network>
  <MyIP/>
  <Shell>sh</Shell>
  <Privileged>true</Privileged>
  <Support/>
  <Project/>
  <Overview/>
  <Category/>
  <WebUI/>
  <TemplateURL/>
  <Icon>https://img.slarker.me/unraid/Xunlei_A.png</Icon>
  <ExtraParams>--restart=unless-stopped</ExtraParams>
  <PostArgs/>
  <CPUset/>
  <DateInstalled>1709632637</DateInstalled>
  <DonateText/>
  <DonateLink/>
  <Requires/>
  <Config Name="WebUI" Target="2345" Default="" Mode="tcp" Description="WebUI" Type="Port" Display="always" Required="false" Mask="false">2345</Config>
  <Config Name="downloads" Target="/xunlei/downloads" Default="" Mode="rw" Description="&#x4E0B;&#x8F7D;&#x8DEF;&#x5F84;" Type="Path" Display="always" Required="false" Mask="false">/mnt/user/downloads</Config>
  <Config Name="data" Target="/xunlei/data" Default="" Mode="rw" Description="&#x8FC5;&#x96F7; Data" Type="Path" Display="always" Required="false" Mask="false">/mnt/user/appdata/xunlei</Config>
</Container>
```

但是对于有些只能通过 Docker 命令或者脚本安装的应用，就不太方便去设置图标了。有没有办法去为这些应用添加图标呢？

## 思路

既然通过模板可以给 Docker 配置图标，而模板配置最终肯定是要转换成 Docker 的运行命令去执行的，所以模板中的参数应该也是以某种形式添加到 Docker 命令中了。能不能通过查看这些有图标的 Docker 的执行命令来照猫画虎给这些没有图标的 Docker 添加图标呢？所以问题就成了如何获取已运行 Docker 的运行命令。

比如 `xiaoyakeeper` 这个可以定期清理阿里云盘中转文件夹的守护应用，是通过脚本生成的 docker 应用，连运行命令都不知道是啥。

```
bash -c "$(curl -s https://xiaoyahelper.zengge99.eu.org/aliyun_clear.sh| tail -n +2)" -s 3
```

## 安装 Nerd Tools 插件

经过查询得知，使用 `runlike` 这个工具可以查看已运行容器（应用）的运行命令。但这个工具是基于 `Python3` 的，Unraid 默认没有带 `Python3` 环境，通过 `Nerd Tools` 这个插件就很容易解决。

> Unraid 并非基于常见的 Linux 发行版开发，而是基于 `Slackware` 这个古老的 Linux 定制而来，很多常用的包都没带，`Nerd Tools` 这个插件就集成了非常多常用的包，可以说是 Unraid 上面的包管理器。

到应用市场安装这个插件：

![OqI14a_JpoEhS](https://img-1255332810.cos.ap-chengdu.myqcloud.com/OqI14a_JpoEhS.png)

在插件中打开 `Nerd Tools` 后输入想安装的包的关键字，找到结果点应用就能自动装好：

![lNiuxh_6ayjQt](https://img-1255332810.cos.ap-chengdu.myqcloud.com/lNiuxh_6ayjQt.png)

比如你还可以装一个命令行版的 `7z` 解压工具，以后就能直接在 `Unraid` 命令行解压缩文件了：

![6ga2hY_A5Lq9y](https://img-1255332810.cos.ap-chengdu.myqcloud.com/6ga2hY_A5Lq9y.png)

![Wyg8cT_UJko7C](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Wyg8cT_UJko7C.png)

## 查看 Docker 运行命令

`Python3` 装好之后，可以安装 `runlike` 工具。

```sh
pip3 install runlike
```

之后就可以查看安装命令了，比如查看 `Xunlei` 的安装命令：

```sh
# 命令格式：runlike -p [docker 应用名称]
runlike -p Xunlei 
```

> Xunlei 就是 docker 应用的名称，也是 xml 模板中的 `Name` 参数，也是 docker 运行命令中的 --name 参数。

![rhGgjq_E9KB3B](https://img-1255332810.cos.ap-chengdu.myqcloud.com/rhGgjq_E9KB3B.png)

到这里，眼尖的朋友应该已经发现了，我们想要的参数已经出来了。就是这里的 `--label` 参数：

```sh
--label='net.unraid.docker.icon=https://img.slarker.me/unraid/Xunlei_A.png'
```

后面跟的 `https` 链接正是 Docker 应用的图标地址。接下来就是照猫画虎，先查看没有图标的 Docker 的运行命令，比如 `xiaoyakeeper`：

```sh
runlike -p xiaoyakeeper 
```

![ksJ35m_p9LAxA](https://img-1255332810.cos.ap-chengdu.myqcloud.com/ksJ35m_p9LAxA.png)

把这个 docker 运行命令复制下来，然后把上面的图标链接 `--label` 参数给加上去，注意是把整行参数都加上：

```yml
--label='net.unraid.docker.icon=https://img.slarker.me/unraid/Alist_encrypt_A.png' \
```

上面这个参数我把图标链接设置成了 `https://img.slarker.me/unraid/Alist_encrypt_A.png` 。具体图标该怎么找可以查看 [自定义 Docker 图标](/unraid/custom_docker_icon.md)。

图标链接参数加好之后是这样：

```yml
docker run --name=xiaoyakeeper \
        --hostname=Tower \
        --env=TZ=Asia/Shanghai \
        --volume=/var/run/docker.sock:/var/run/docker.sock \
        --network=host \
        --privileged \
        --restart=always \
        --log-opt max-file=1 \
        --log-opt max-size=50m \
        --runtime=runc \
        --detach=true \
        --label='net.unraid.docker.icon=https://img.slarker.me/unraid/Alist_encrypt_A.png' \
        alpine:3.18.2 \
        sh -c 'if [ -f /etc/xiaoya/aliyun_clear.sh ];then sh /etc/xiaoya/aliyun_clear.sh 0;else sleep 60;fi'
```

把之前的没有图标的 docker 删掉（不需要移除镜像），重新执行下加好参数的命令，新的 docker 就有图标啦！

![vfssVa_IrpJq7](https://img-1255332810.cos.ap-chengdu.myqcloud.com/vfssVa_IrpJq7.png)