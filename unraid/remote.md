# 解决虚拟组网远程无法访问 80 端口问题

::: warning 注意
适用于 Unraid 6.12.0 及以后版本，之前版本没有这个问题，无需设置。
:::

如果你没有公网 IP，用的 Zerotier，TailScale，StarVPN 等类似的虚拟组网方案来实现远程访问，而且是直接通过 Docker 在 Unraid 上面安装对应的容器来实现组网，那可能会遇到下面这个问题：

Unraid 的默认 80 端口，也就是 WebUI 无法访问，而其它的 Docker 容器端口都可以正常访问。

这个问题解决起来也很简单，以 StarVPN 为例，在添加完 StarVPN 的 Docker 容器之后，会在网络里多出来一个名为 `StarVPN` 的网关，然后把这个网关名称添加到 `额外接口` 的 `包含监听的接口` 中，点应用就可以了。

![WechatIMG64_6EJfqy](https://img.slarker.me/wiki/WechatIMG64_6EJfqy.jpg)

如果用的 Zerotier 或者 TailScale，解决办法类似，照猫画虎操作即可。
