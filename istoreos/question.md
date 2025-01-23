# iStoreOS 常见问题

## iStoreOS代理插件到哪里下载？

iStoreOS 本身并不自带代理插件，可以使用这里的包一键自动安装。

[iStoreOS 软件包](https://github.com/AUK9527/Are-u-ok/tree/main/x86)

如果上面的地址无法打开，可以到这里下载：

[iStoreOS 插件](https://files.slarker.me)

下载好之后到 iStoreOS 中手动上传安装：

![voo450c5.qrq_PH9mYj](https://img.slarker.me/wiki/voo450c5.qrq_PH9mYj.png)

装好之后，在 `服务` 中可以找到相关插件。

## 使用 iStoreOS 作为主路由时，无法正常上网，该怎么解决?

最常见的问题是 iStoreOS 的 DHCP 分配不起作用。

使用有线把电脑连接到 iStoreOS 网口，可以先检查你的电脑是否能正常从 iStoreOS 中获取到 IP。如果获取不到，首先确保你的 iStoreOS 正常运行，把你的电脑改成和 iStoreOS 同一网段，使用浏览器登录 iStoreOS，然后打开 `网络` -> `接口` -> `lan`，点击右侧的 `编辑`，在 `高级设置` 中将 `使用自定义的 DNS 服务器` 修改为 `114.114.114.114` 和 `223.5.5.5`，然后点击 `保存`。切换到 `DHCP 服务器`，勾选 `高级设置` 中的 `强制` 选项，然后点击 `保存`，最后点击 `保存并应用`。

![h7SAXM_dtaHXh](https://img.slarker.me/wiki/h7SAXM_dtaHXh.png)

## 外网访问端口转发问题

如果你有公网 IP，此时 NAS 也通过旁路由上网，在端口转发的时候需要注意：

> 先从主路由转发端口到旁路由，再从旁路由转发端口到 NAS。

比如，此时主路由为：192.168.2.1，旁路由为：192.168.2.147，NAS 为：192.168.2.143。

端口转发就要先从 192.168.2.1 转发到 192.168.2.147，再从 192.168.2.147 转发到 192.168.2.143。

旁路由的端口转发应该这样设置，在 `网络` -> `防火墙` -> `端口转发` 中添加类似于下面这样的规则：

![t2k2iqrl.ipr_hz2Q17](https://img.slarker.me/wiki/t2k2iqrl.ipr_hz2Q17.png)
