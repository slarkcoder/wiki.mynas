# 开源免费的跨平台文件同步工具 - [Syncthing](https://syncthing.net/)

![](https://img.slarker.me/wiki/e310d62f71fd4b8eaf65461e6e437fb9.png)

多设备同步文件可以说是 NAS 必备的一个功能，作为 24 小时开机的设备，通过 NAS 来同步文件，可以做到不管其他终端是否在线，也能实时保持同步。在群晖上可以用 `Synology Drive` 来实现多端同步，目前 fnOS 上暂时还没有官方的同步软件，推荐直接使用 [Syncthing](https://syncthing.net/) 来实现多端同步。

以我为例，我用 [Syncthing](https://syncthing.net/) 这款软件已经好多年了，用它来把电脑的截图同步到手机相册，电脑端直接截图保存，手机端直接访问相册就能发送。把电脑端的 Calibre 书库同步到 NAS 端的 `calibre-Web`，可以随时在想看某本书的时候，一键推送到 Kindle，把电脑的常用文档以及音乐库同步到 NAS 以及各个终端，即便在无网络的时候也能随时编辑文档，听喜欢的音乐。

相比 Synology Drive，Syncthing 利用 P2P 技术来传输文件，不需要设置内网穿透，只要添加好远程设备，即便不在一个局域网里也可以自动连接。但这有时候也是一个缺点，需要依靠发现服务器才能建立连接，而国内的发现服务器较少，所以连接起来有时候会比较慢。好在可以通过自建中继和发现服务器来解决这个问题。

下面我就来介绍如何使用 Syncthing。

## 在 fnOS 上安装 Docker 版 Syncthing

按照下图所示建立文件夹，实际路径以你自己的为准，前后需要保持一致。比如这里实际保存位置都在 `存储空间 1 ` 上面。

- `/docker/syncthing`：用来存放 synchting 的 docker 配置
- `/document`：用来存放你的同步文档

![](https://img.slarker.me/wiki/07dff7385de64be4adf7e3c6dabb0792.png)

在 Docker 的镜像仓库中搜索 `syncthing`，下载 `linuxserver/syncthing` 这个镜像。

![](https://img.slarker.me/wiki/6c0ccc456e1b4ab38de788a782af2541.png)

这里只需要修改文件夹映射，其它都保持默认。在存储位置中设置文件夹映射，这里容器中的 `/document` 你可以自己来决定文件夹名称。如果有多个文件夹需要同步，可以添加多个映射。

- `/vol1/1000/docker/syncthing` -> `/config`
- `/vol1/1000/document` -> `/document`

上面的 `->` 表示映射，`->` 左侧的属于 fnOS 主机的端口号或者路径，`->` 右侧的属于 Docker 容器内部的端口号或者路径。

![](https://img.slarker.me/wiki/3cb8fd716db44970a944a7a2f0458076.png)

其它都保持默认，设置好之后点击完成就可以启动了。

默认的端口是 `8384`。你可以使用 `fnOS IP:8384` 来访问 Syncthing 的 WebUI。打开 Syncthing 之后，可以先设置密码，然后移除默认的文件夹（Default Folder）。

## 客户端

Syncthing 支持 Windows（推荐使用 [SyncTrayzor](https://github.com/canton7/SyncTrayzor)），macOS，Linux，Android，可以到 [官网](https://syncthing.net/downloads/) 或者应用市场下载。

iOS 没有官方的 App，可以使用第三方开源的客户端 [Synctrain](https://github.com/pixelspark/sushitrain)。

## 添加设备 ID

每个设备安装 Syncthing 之后都会有一个唯一的 `设备 ID`，当前设备的 ID 在 `操作` -> `显示 ID` 中可以看到。要想同步文件，需要先互相添加远程设备 ID，类似于添加好友。比如我在 fnOS 的 Syncthing 中添加 macOS 的设备 ID，`设备名` 可以自己起一个容易区分的名字。

![](https://img.slarker.me/wiki/6fb3f253215147daa9e9e2d3d0097eb1.png)

添加之后，在 macOS 中也会有提示添加 `fnOS` 的设备 ID。添加完成之后，就会显示已连接（未使用）。

![](https://img.slarker.me/wiki/ea7dc9f6c52e453d8ebf33a6283711d4.png)

## 文件夹同步

比如我想把 macOS 上的文件夹同步到 NAS 里，那就先在 macOS 的 Syncthing 中添加一个本地文件夹（比如 document，实际路径 `/Users/slark/document`），然后在这个文件夹中设置共享给 `fnOS` 这个设备。

![](https://img.slarker.me/wiki/82d26c4957d5424fa74dc2296505b335.png)

保存后，在 fnOS 端就可以看到一个共享文件夹的请求：

![](https://img.slarker.me/wiki/2a171e38b0f14435aa9ff090a3b69433.png)

点击添加，将文件夹路径设置为 Syncthing 容器中映射的 `/document`。

![](https://img.slarker.me/wiki/2cab1ef8442e47eeaf9732c3540a405e.png)

设置好之后，点击保存，同步就会自动开始。fnOS 上的 `document` 会和 macOS 上的 `document` 保持实时同步。

![](https://img.slarker.me/wiki/6b861902047d4375ba43a25f50cd03d9.png)

## 版本控制

除了基本的同步功能外，Syncthing 还支持文件版本控制，非常适合有版本管理需求的用户：

![](https://img.slarker.me/wiki/8f084c49fc874d08a0fd8948cda7d645.png)

如果你想防止误删文件，可以在 NAS 上的 Syncthing 中将版本控制设置为 `回收站文件版本控制` 模式。

![](https://img.slarker.me/wiki/a21412247d9f4f72b92e14795cdbb762.png)

当你在其他设备中（比如 macOS）删除文件时，NAS 端会将删除的文件移动到 `.stversions 目录`，在 fnOS 的文件管理器中可以直接看到 `.stversions` 目录中被删除的文件。

![](https://img.slarker.me/wiki/5ef827b6117a4710a722045118f910d1.png)

如果你想恢复某个版本的文件，可以直接在 `历史版本` 中按具体时间恢复到某个版本。

![](https://img.slarker.me/wiki/6ac81b4c08a345b98524e9bd0723b02f.png)

## 其它特性

此外，还可以设置文件夹类型（发送和接受，仅发送，仅接受），可以应对更多的场景。

![](https://img.slarker.me/wiki/e3eedc00f0eb4f02bb34fa62f2c34e02.png)

比如，我只想给其他人共享文件，不想接受别人对文件的修改，就可以用 `仅发送` 模式。