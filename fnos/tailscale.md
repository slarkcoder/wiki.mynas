# 方便、安全远程访问 fnOS - Tailscale

fnOS 官方自带远程访问，应对基本的小流量需求应该没啥问题，但如果是需要高带宽的场景，使用人数过多的话，官方提供的中转服务可能也撑不住，所以推荐使用 ipv6 来远程访问。除了 ipv6 之外，也有很多其它的选择，比如 Zerotier，Tailscale，星空组网等等，都很不错，可以作为替代方案。本篇将介绍如何使用 Tailscale 远程访问 fnOS。

:::info 提示
Tailscale，Zerotier，星空组网的组网逻辑都类似，都是首先尝试是否能够 P2P 直连（打洞）成功，如果无法直连，就会走中转服务器。
:::

## 获取 Auth key

注册登录 [Tailscale](https://tailscale.com/)，依次点击 `Machines` -> `Add device` -> `Linux Server` -> `Generate install script` 获取 `Auth key`。

![](https://img.slarker.me/wiki/202409111605371.png)

复制截图中 `--auth-key=` 后面的 `Auth key` 字符串备用。

## fnOS 安装 Tailscale

在 fnOS 中，可以用 `Compose` 安装 Tailscale。首先 [使用 SSH 登录](/fnos/ssh.md) fnOS，使用下面的命令建立所需文件夹：

```sh
mkdir -p /vol1/1000/docker/tailscale/var/lib
mkdir -p /vol1/1000/docker/tailscale/dev/net
```

在 Docker 中新增 Compose 项目：

![](https://img.slarker.me/wiki/202409111638034.png)

名称填写 `tailscale`，路径选择 `/vol1/1000/docker/tailscale`，来源选择 `创建 docker-compose.yml`，内容如下：

```yml
version: '3.7'
services:
    tailscale:
        container_name: tailscale
        volumes:
            - /vol1/1000/docker/tailscale/var/lib:/var/lib
            - /vol1/1000/docker/tailscale/dev/net/tun:/dev/net/tun
        network_mode: host
        restart: unless-stopped
        environment:
            - TS_AUTHKEY=    #填上一步生成的 Auth key
            - TS_EXTRA_ARGS=--advertise-exit-node
            - TS_ROUTES=192.168.xx.0/24   #把xx替换成自己网关的网段
            - TS_HOSTNAME=xx    #把xx替换成自己喜欢的名字，比如 fnOS
            - TS_STATE_DIR=./state/
        image: tailscale/tailscale
```

- TS_AUTHKEY：填写上一步生成的 `Auth key`。
- TS_ROUTES：填写 fnOS 所在的网段，比如 fnOS IP 为 `192.168.2.22`，TS_ROUTES 就填 `192.168.2.0/24`。
- TS_HOSTNAME：填写自己喜欢的名字，比如 fnOS。

勾选 `创建项目后立即启动`，确认没问题，点击 `完成`，`tailscale` 很快就能启动。

## 授权设置

登录到 [tailscale 网站](https://login.tailscale.com/) 后台，可以看到 fnOS 这台设备已经连上了，可以看到 `Subnets` 旁边有叹号提示：

![](https://img.slarker.me/wiki/202409111648080.png)

点击设备名称进入设备详情页批准（Approval）：

![](https://img.slarker.me/wiki/202409111651655.png)

勾选网段，点击 `Save`。

![](https://img.slarker.me/wiki/202409111649891.png)

:::warning 注意
这里还有个 `Exit node` 的选项，可以到文章末尾看看介绍，如果有需要可以勾选。
:::

## 手机 App

Tailscale App 比较简单，使用同样的账号登录 App，需要远程访问 NAS 的时候，打开 App 里的开关就能连上了。

连上之后，依然使用 fnOS 的 `局域网 IP` 来访问 fnOS，不需要考虑端口映射问题，相比使用公网 IP，不要暴露任何端口到公网，更加安全。

## 测速

手机远程连上之后，可以访问 NAS 上的测速工具测试网络连接速度。

![](https://img.slarker.me/wiki/202409111746274.jpg)

延迟（473ms）比较高，速度也很慢。

## 使用中继

`Tailscale` 官方的服务器使用的人比较多，国内连接速度比较慢，所以如果无法直连的话，可以尝试使用自建中继。自建教程可以 [参考这里](https://cqjn.cc/archives/1719844788120)。

建好之后，在 `Tailscale` 后台的 `Access controls` 中，`"ssh"` 前面添加下面的内容（需要按提示修改相关信息）：

```
"derpMap": {
		// OmitDefaultRegions 用来忽略官方的中继节点
		"OmitDefaultRegions": true,
		"Regions": {
			// 这里的 901 从 900 开始随便取数字
			"901": {
				// RegionID 和上面的相等
				"RegionID": 901,
				// RegionCode，RegionName 自己取个易于自己名字
				"RegionCode": "1",
				"RegionName": "RegionName",
				"Nodes": [
					{
						// Name 保持 1不动
						"Name": "1",
						// 这个也和 RegionID 一样
						"RegionID": 901,
						// 中继服务器域名
						"HostName": "xxx.xxx.com",
						// 端口号,如果上方derp安装一致则无需改动
						"DERPPort": 443,
						"STUNPort": 3478,
					},
				],
			},
		},
	},
```

添加好之后点击 `Save`。

![](https://img.slarker.me/wiki/202409111723252.png)

如果想要确认 fnOS 是否连上了中继服务器，在 fnOS 中，进入 tailscale 容器的终端：

![](https://img.slarker.me/wiki/202409111727552.png)

输入命令：

```sh
tailscale netcheck
```

就能看到结果，如图中继延迟只有 `44.6ms`。

![](https://img.slarker.me/wiki/202409111731691.png)

此时在手机上再次测速，速度会好很多：

![](https://img.slarker.me/wiki/202409111747412.jpg)

## 网络出口节点 `Exit node`

Tailscale 还有个很厉害的功能，那就是可以指定一个设备作为 `Exit node`。意思就是把其它设备的网络流量转发到这个设备，然后由这个设备作为整个虚拟局域网的网络出口。

举个例子：将 fnOS 设置为 `Exit node`，并且在手机端也开启 fnOS 作为 `Exit node`，手机的访问请求，会先转发到家里的 fnOS 设备，然后通过家里的宽带网络来上网。

![](https://img.slarker.me/wiki/202409111753183.png)