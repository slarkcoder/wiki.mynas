# Unraid 常见问题

## 如何在外网访问 Unraid ？

Unraid 官方是这么说的：

> Do Not Expose Servers to the Internet/DMZ We highly, highly recommend not exposing your server to the internet or placing it in the DMZ of your router unless you know what you are doing and are following strong security protocols.

> No matter how locked down you think you have your server, it is never advisable to place it in the DMZ on your network. By doing so, you are essentially forwarding every port on your public IP address to your server directly, allowing all locally accessible services to be remotely accessible as well. Regardless of how "locked down" you think you actually have the server, placing it in the DMZ exposes it to unnecessary risks.

无论你是否修改过 Unraid 的 WebUI 端口，都不推荐通过端口转发的形式，把 Unraid 的 WebUI 端口暴露到公网，官方也不建议这么做。

即便你有公网 IP，推荐的办法也是通过 Zerotier，Tailscale，Wireguard，OpenVPN 等方法来远程访问 Unraid。

建议阅读官方的 [Unraid 安全最佳实践](https://unraid.net/es/blog/unraid-server-security-best-practices)。

## Unraid 忘记密码怎么办？

可以把 Unraid 启动 U 盘插到电脑上，删除 U 盘里 `config` 目录下面的 `passwd` 和 `shadow` 文件。重新把 U 盘插到 NAS 上启动，就会提示重新设置密码。

![](https://img.slarker.me/wiki/67fdd1f1cd2844e598661c8669cbb48f.webp)