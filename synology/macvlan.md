# 使用 macvlan 为 qBittorrent 设置独立 IP

> 关于 macvlan 的更详细的介绍，可以看看群友 @红茶海 大佬的视频：[MacVlan让Docker实现上网自由](https://www.bilibili.com/video/BV1242WYvEDv/?spm_id_from=333.999.0.0&vd_source=29eb9b18b4b69e99493d17fe1ef55ca4)

很多 PT 网站对盒子（就是专门用来刷上传的 VPS）有限制，如果群晖前面的主路由（比如 iStoreOS）上面配置了魔法工具，可能导致 BT/PT 流量也会走代理，从而被 PT 网站识别为盒子。比较好的解决这个问题的办法是在魔法软件上，通过端口或者 IP 来设置规则，来避免 PT 流量走代理。

但在有些魔法软件上面，并不支持针对端口来设置规则，只能针对 IP 来设置规则，好在为 Docker 设置独立的 IP 也不复杂。下面就介绍如何使用 macvlan 来给 qBittorrent 设置独立的 IP。

这篇教程虽然步骤比较多，但流程比较清晰。教程中涉及到的 IP 如下，为了尽量减少出错，你可以把自己的 IP 也都提前列出来，根据自己的实际情况来替换：

- 主路由 IP：`192.168.2.1`
- 群晖 IP：`192.168.2.164`
- 独立的 qBittorrent IP：`192.168.2.101`
- macvlan 网桥：`192.168.2.102`

## 启用 Open vSwitch

打开 `控制面板` -> `网络` -> `网络界面` -> `管理` -> `Open vSwitch 设置`，勾选 `启用 Open vSwitch` 并确定。

![XPjbNQ_D6FmC7](https://img.slarker.me/wiki/XPjbNQ_D6FmC7.png)

[使用 SSH 登录](/synology/ssh.md) 群晖，并切换到 `root` 用户。查看群晖网络：

```sh
ip addr
```

![yrMGvJ_PXa74H](https://img.slarker.me/wiki/yrMGvJ_PXa74H.png)

可以看到，开启 `Open vSwitch` 之后，群晖通过一个名为 `ovs_eth0` 的网桥来连接网络。

## 创建 macvlan 网络

这里介绍下我的网络情况：主路由：`192.168.2.1`（主路由安装了魔法），其它设备都通过主路由上网，你可以根据自己的网络情况修改：

如果只需要 IPv4，创建 IPv4 macvlan 网络命令：

```sh
#创建一个名为 vlan 的 macvlan 网络，网关为主路由 192.168.2.1，子网为 192.168.2.0/24，ovs_eth0 为默认的网桥
docker network create -d macvlan --subnet=192.168.2.0/24 --gateway=192.168.2.1 -o parent=ovs_eth0 vlan
```

如果需要 IPv6，创建 IPv4 + IPv6 macvlan 网络命令：

```sh
#创建一个名为 vlan 的 macvlan 网络，IPv4 网关为主路由 192.168.2.1，IPv4 子网为 192.168.2.0/24，IPv6 网关为 2408::1，IPv6 子网为 2408::/60，ovs_eth0 为默认的网桥
docker network create -d macvlan --subnet=192.168.2.0/24 --gateway=192.168.2.1 --ipv6 --subnet=2408::/60 --gateway=2408::1 -o parent=ovs_eth0 vlan
```

创建好之后，可以使用下面的命令查看 docker 网络：

```sh
docker network ls
```

![khmw1rwv.ri0_kVxAoX](https://img.slarker.me/wiki/khmw1rwv.ri0_kVxAoX.png)

也可以在群晖的 `Container Manager` 的网络中查看：

![RqaBH6_pSzO7r](https://img.slarker.me/wiki/RqaBH6_pSzO7r.png)

如果需要删除创建的 macvlan 网络，可以使用下面的命令：

```sh
#vlan 为 macvlan 网络名称
docker network rm vlan
```

## 使用 docker 命令安装 qBittorrent

:::info 提示
- 由于群晖 Container Manager 暂不支持添加额外的参数（比如 `--net`，`--ip`），所以只能通过命令安装 qBittorrent。
- 如果你之前装过套件版或者使用 Container Manager 安装了 qBittorrent，请先卸载，然后再用下面的命令重新安装。 
:::

建好 macvlan 网络之后，就可以使用下面的命令来安装 qBittorrent 了。可以将下面命令中的 `端口` 和 `文件夹` 按需修改：

```sh
docker run -d \
  --name=qbittorrent \
  --net=vlan \
  --ip=192.168.2.101 \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Asia/Shanghai \
  -e WEBUI_PORT=8080 \
  -e TORRENTING_PORT=50000 \
  -p 8080:8080 \
  -p 50000:50000 \
  -p 50000:50000/udp \
  -v /volume1/docker/qbittorrent:/config \
  -v /volume1/downloads:/downloads \
  --restart unless-stopped \
  lscr.io/linuxserver/qbittorrent:4.6.7
```

这里的 `--net=vlan` 参数表示使用前面创建的 macvlan 网络，`--ip=192.168.2.101` 参数就是为 qBittorrent 设置的独立 IP，命令执行成功后，就可以用 `192.168.2.101:8080` 来访问 qBittorrent 了。

## 解决宿主机与 macvlan 网络互通问题

为了安全起见，macvlan 禁止宿主机和容器直接通信。以我的群晖为例，qBittorrent 容器的 IP 为 `192.168.2.101`，宿主机群晖的 IP 为 `192.168.2.164`，那么宿主机和容器之间就无法通信。

在群晖里直接 ping qBittorrent 容器的 IP 就会失败：

![WdWJ4S_SFuiIA](https://img.slarker.me/wiki/WdWJ4S_SFuiIA.png)

而使用网络中的其它设备 ping qBittorrent 容器的 IP 就可以成功：

![vZ8GrD_Gifmzm](https://img.slarker.me/wiki/vZ8GrD_Gifmzm.png)

这就导致群晖上面装的其它应用也无法和 qBittorrent 容器通信。解决办法如下：

创建一个 macvlan 网桥，并设置静态 ip，这里设置为：`192.168.2.102`，设置路由，让宿主机（群晖 `192.168.2.164`）访问容器的数据经过 macvlan 网桥。命令如下：

```sh
ip link add vlan_bridge link ovs_eth0 type macvlan mode bridge
ip addr add 192.168.2.102 dev vlan_bridge
ip link set vlan_bridge up
ip route add 192.168.2.101 dev vlan_bridge
```

可以看到设置好 vlan_bridge 这个 macvlan 网桥之后，宿主机就可以访问 qBittorrent 容器了：

![vRysK0_TKjMPs](https://img.slarker.me/wiki/vRysK0_TKjMPs.png)

## 使用 systemd 管理 macvlan 服务

:::warning 注意
由于群晖各个版本对 Docker 服务的命名有所变化，所以下面的命令需要根据群晖系统版本进行修改。下面默认的命令均适用于 `DSM 7.2` 版本。

- `DSM 7.2`：pkg-ContainerManager-dockerd.service
- `DSM 7.1`：pkg-Docker-dockerd.service
- `DSM 7.0`：pkgctl-Docker.service
:::

由于群晖开机会重置 macvlan 网络相关的设置，需要添加 `systemd` 服务（Systemd 是目前 Linux 系统上主要的系统守护进程管理工具）来管理 macvlan。在命令行中输入下面命令：

vi 命令基本操作可以参考：[vi 编辑器基本命令](/synology/vi.md)

```sh
vi /usr/local/lib/systemd/system/macvlan.service
```

按 `i` 进入编辑模式，复制粘贴以下内容，作用是将启动、停止 macvlan 配置为 `systemd` 服务：

```yml
[Unit]
Description=Macvlan shim to allow docker to route to host
# Ensure macvlan is stopped if pkg-ContainerManager-dockerd.service stops/fails
BindsTo=pkg-ContainerManager-dockerd.service
# Define dependency
Requires=pkg-ContainerManager-dockerd.service
# Ensure order of startup
After=pkg-ContainerManager-dockerd.service

[Service]
Type=oneshot
ExecStart=/bin/bash /usr/local/bin/macvlan_start.sh
ExecStop=/bin/bash /usr/local/bin/macvlan_stop.sh
RemainAfterExit=yes
Restart=no

[Install]
# Informs systemd to start macvlan after this service at startup
WantedBy=pkg-ContainerManager-dockerd.service
```

完成后按 `esc`，输入`:wq`保存退出。

接下来再添加两个脚本：

- `/usr/local/bin/macvlan_start.sh` 用来启动 macvlan
- `/usr/local/bin/macvlan_stop.sh` 用来停止 macvlan。

编辑启动脚本：

```sh
vi /usr/local/bin/macvlan_start.sh
```

内容如下：

```yml
# 请根据自己的实际情况修改
ip link add vlan_bridge link ovs_eth0 type macvlan mode bridge
ip addr add 192.168.2.102 dev vlan_bridge
ip link set vlan_bridge up
ip route add 192.168.2.101 dev vlan_bridge
```

编辑停止脚本：

```sh
vi /usr/local/bin/macvlan_stop.sh
```

内容如下：

```yml
# 请根据自己的实际情况修改
ip route del 192.168.2.101 dev vlan_bridge || true
ip link set vlan_bridge down || true
ip addr del 192.168.2.102 dev vlan_bridge || true
ip link del vlan_bridge || true
```

启动脚本和停止脚本添加好之后，重载 `systemd` 服务：

```sh
systemctl daemon-reload
```

现在就可以使用 systemd 来管理 macvlan 服务了。

```sh
#开机启动
systemctl enable macvlan
#取消开机启动
systemctl disable macvlan
#开启 macvlan 服务
systemctl start macvlan
#停止 macvlan 服务
systemctl stop macvlan
#查看 macvlan 服务状态
systemctl status macvlan
```

执行 `systemctl enable macvlan` 设置开机启动后，可以重启群晖用上面的 `systemctl status macvlan` 查看 macvlan 服务是否正常（显示绿色 `active` 表示已经启动）。

![cniz6B_s2Lt9F](https://img.slarker.me/wiki/cniz6B_s2Lt9F.png)

## 设置访问控制

现在 qbittorrent 已经有独立的 IP（192.168.2.101），那么我们就可以在软路由的魔法插件中设置访问控制了。以 iStoreOS 中的 SSRP 插件为例：

![jmDHb3_PXWTwU](https://img.slarker.me/wiki/jmDHb3_PXWTwU.png)

如此，就可以避免 PT 流量走代理，从而被识别为盒子了。