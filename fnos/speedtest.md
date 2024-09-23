# 网速测试工具 - OpenSpeedtest

:::warning 注意
- 这里的网速测试，指的是你的设备到 NAS 之间的连接速度。比如你在电脑上测试，测试的结果就表示你的电脑到 NAS 之间的网速，和你的宽带速度没有关系。
- 如果你认为你的设备和 NAS 之间的连接速度有问题，可以用这个测试工具来测试网速是否正常。
:::

使用 OpenSpeedtest 可以轻松找出你的家庭内网网速是否存在瓶颈，在 fnOS 中使用 Docker 安装 OpenSpeedtest 非常简单，类似的工具还有 `librespeed`。

使用下面两种方法都可以安装 OpenSpeedtest，任选其一。

## 通过 Docker GUI 安装

在 Docker 应用中搜索 `OpenSpeedtest`，下载 `openspeedtest/latest` 这个镜像。

![](https://img.slarker.me/wiki/1551ad7d50ec49b8bcc5f5646528b332.png)

下载后启动镜像，名称设置为 `openspeedtest`，勾选 `开机自动开启`，点击下一步。

![](https://img.slarker.me/wiki/929a46da421b4309a595fb6ccdc0f4f1.png)

`端口设置` 仅保留 `3000` -> `3000`，其它设置都保持默认，一直下一步，直到完成。

![](https://img.slarker.me/wiki/2e9ffded585a4e57a2feb49c1012b5a7.png)

## 通过命令安装

[使用 SSH 登录](/fnos/ssh.md) fnOS，并切换到 `root` 用户，粘贴执行下面的命令：

```sh
docker run --restart=unless-stopped --name openspeedtest -d -p 3000:3000 openspeedtest/latest
```

## 网速测试

启动容器之后，就可以使用 `fnOS IP:3000` 打开测速页面了。如图是我的电脑通过无线路由器访问 fnOS 的速度。

![](https://img.slarker.me/wiki/fa7614de51734aa4a1c97d35f4f82d97.png)