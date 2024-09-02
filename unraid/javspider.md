# 小姐姐元数据刮削解决方案

:::warning 友情提示
- 请不要在国内的各种网站论坛，聊天工具转发本教程，低调使用！
- 请自行解决网络问题！
:::

如果你在 NAS 上收集了不少小姐姐，想必你也希望能有个海报墙，具体效果像下面这样：

![J63DJA_bxqbbn_ggjsEO](https://img-1255332810.cos.ap-chengdu.myqcloud.com/J63DJA_bxqbbn_ggjsEO.jpg)

正常电影可以使用 [TinyMediaManager](/unraid/tmm.md) 来刮削，像是小姐姐这种日本电影就得通过别的方法来单独刮削，很多  GitHub 上的开源项目，都是通过抓取类似 `javbus` 这种第三方的信息网站来实现刮削。相比正常电影，日本电影的元数据信息比较简单，而且命名来说规则性很强，第三方适配起来难度也不算高。本篇教程就介绍一个相对比较简单的方案，使用 [MetaTube](https://metatube-community.github.io/) 来刮削小姐姐。

## 安装服务端

`MetaTube` 是一个服务端 + 插件的组合。可以在 NAS 上通过 Docker 安装服务端，在 Jellyfin/Emby/Plex 中安装相应的刮削插件。直接复制下面的命令在 Unraid 终端中执行，就可以安装好服务端：

```yml
docker run -d -p 8900:8080 -v /mnt/user/appdata/metatube/config:/config --name metatube metatube/metatube-server:latest -dsn /config/metatube.db
```

上面的命令中，为了避免和其他常用端口冲突，默认的服务端端口改成了 `8900`，所以在插件中需要填写的 `服务端地址` 就是：

```yml
http://[你的 NAS IP]:8900
```

## 安装插件

这里直接照搬插件官方的文档，非常简单。

### Jellyfin

- 进入 Jellyfin 控制台 > 插件 > 存储库，点击添加
- 输入存储库名称：`MetaTube`
- 输入存储库URL：

```sh
https://raw.githubusercontent.com/metatube-community/jellyfin-plugin-metatube/dist/manifest.json
```

- 在插件目录下找到 `MetaTube`，点击安装
- 重启 Jellyfin
- 适用于中国大陆的存储库URL：

```
https://cdn.jsdelivr.net/gh/metatube-community/jellyfin-plugin-metatube@dist/manifest.json（可能有缓存）
```

### Emby

- 从 [Releases](https://github.com/metatube-community/jellyfin-plugin-metatube/releases) 下载 `MetaTube` 最新插件
- 解压出 MetaTube.dll 文件
- 将 dll 文件复制到 Emby 插件目录
- 重启 Emby 服务

## 设置插件

到 Jellyfin/Emby 控制台，找到 `MetaTube` 插件，只需填写上面的 `服务端地址`，`Token` 默认不用填，并保存。

![144rn30e.xjx_Ng2M3Q](https://img-1255332810.cos.ap-chengdu.myqcloud.com/144rn30e.xjx_Ng2M3Q.png)

## 设置媒体库

添加你的小姐姐媒体库，并在媒体库的刮削选项中勾选 `MetaTube` 插件，把其它插件可以取消勾选。

![ojwlelqp.unv_tqGinN](https://img-1255332810.cos.ap-chengdu.myqcloud.com/ojwlelqp.unv_tqGinN.png)

![u3hsti00.3o5_Eu27v6](https://img-1255332810.cos.ap-chengdu.myqcloud.com/u3hsti00.3o5_Eu27v6.png)

保存之后，在媒体库里刷新元数据就可以了。