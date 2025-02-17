# iStoreOS 路由模式设置

::: info 提示
- 这里假设你已经完成了 iStoreOS 的安装（物理机/虚拟机），并且已经能够正常访问 iStoreOS 的控制台。
- 如果你想把 iStoreOS 设置为主路由，这里假设你已经直通了一个 PCIE 网卡设备，也就是这个 iStoreOS 一共有两个网卡（虚拟网卡 + PCIE 网卡设备）。
:::

iStoreOS 的默认用户名/密码：`root/password`。

## 设置 iStoreOS 为主路由

使用命令编辑 iStoreOS 网络配置文件：

```sh
vi /etc/config/network
```

输入 `i` 进入编辑模式，按下图所示修改，修改完成之后按 `ESC` 退出编辑，输入 `:wq` 保存并退出。

下面这张图展示了如何设置为主路由：

![](https://img.slarker.me/wiki/Snipaste_2025-01-22_14-47-35.webp)

重启虚拟机之后，如果不出意外，iStoreOS 就可以作为主路由来用了。

设置为主路由之后，推荐使用下面的网络拓扑来规划你的网络：

![](https://img.slarker.me/wiki/istoreos.drawio2.drawio.webp)

## 设置 iStoreOS 为旁路由

如果你的 iStoreOS 虚拟机只有一个网卡，那么 iStoreOS 在启动的时候会自动从主路由获取 IP，iStoreOS 官方已经支持使用网络向导来配置为旁路由，所以不需要通过命令来修改网络配置，非常方便。

iStoreOS 虚拟机启动后，直接到你的主路由中查找 iStoreOS 的 IP 地址，然后在浏览器中打开这个 IP 地址。

![](https://img.slarker.me/wiki/9290b8f0f115411b9ad3bc64d8547c4c.webp)

登录后点击首页的 `网络向导`，点击 `配置为旁路由`。

![](https://img.slarker.me/wiki/91eaaa3983d54718863a6b066bf2d5f0.webp)

点击 `自动配置`。

![](https://img.slarker.me/wiki/af0a4c21344249e1ba2b955feeea252b.webp)

点击灰色的 `当前 IPV4 上游信息（点此刷新）`，会自动从主路由获取相关信息，之后点击 `自动填写`。

![](https://img.slarker.me/wiki/64dc189c740643429d96f06cabbfa21f.webp)

确认 IP 地址，网关地址，DNS 服务器都正常，关闭 `提供 DHCPv4 服务`，打开 `开启 NAT`，点击 `保存配置`。

![](https://img.slarker.me/wiki/996fd5f265c14649bd4d9f61020236b1.webp)

到这里就配置成功了，点击 `进入控制台`。

![](https://img.slarker.me/wiki/0b9ea5d43fde42f4b2c05869f302d917.webp)

### 使用旁路由

上面创建的 iStoreOS 旁路由的 IP 为 `192.168.2.186`。以 fnOS 为例，设置 fnOS 通过旁路由上网。

在 fnOS 的 `网络设置` 中，手动设置 `IPv4` 为静态 IP，并将 `网关地址` 和 `DNS` 设置为 `旁路由的 IP`。

![](https://img.slarker.me/wiki/1536e93bc814445bb9fcc05719cb1ff6.webp)
