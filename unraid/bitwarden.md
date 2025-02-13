# 开源的密码管理器 - Bitwarden

说起密码管理，我自己是多年的 1Password 老用户，1Password 在 Apple 生态内体验属于最佳，至今我还用着 7.x 的买断版本，同步也是用的 Dropbox。但新版的 1Password 现在也改成了订阅制，长期订阅的话也花费不菲。如果要找一款可靠的替代品，那 Bitwarden 是为数不多的选择。

Bitwarden 是一款开源的，支持 [自部署](https://github.com/dani-garcia/vaultwarden) 的跨平台密码管理器，官方的服务需要付费使用，如果你有一台 NAS，那么就可以自己部署一个 Bitwarden，可以免费使用还支持多账户，分享给家人和朋友一起使用也没问题。

自部署的好处是密码数据都加密存储在本地，数据泄露的风险会小很多。但使用自己部署 Bitwarden 一定要注意：做好数据备份并且知道如何从故障中恢复，因为 Bitwarden 里的数据几乎是你最重要的数据了。如果你保存了上百条的密码数据，有一天硬盘挂了，而你又没有任何备份，那手动找回上百个密码的画面想想都觉得酸爽！

## Unraid 部署 Bitwarden

在应用中心直接搜索 bitwarden，点击安装就可以。

默认数据文件都会保存到 `/mnt/user/appdata/vaultwarden`，这个也是你需要备份的目录，备份教程可以参考：[开源免费的 Unraid 备份方案 - Duplicati](https://slarker.me/unraid-backup-duplicati/)。

这里还需要设置个 `ADMIN_TOKEN`，也就是管理员密码，用来对 Bitwarden 的功能进行设置。管理页面地址是： http:// 你的 NAS IP : 端口/admin。启动后可以使用默认端口 4743 访问 Bitwarden 服务。

![qUIsLs_xk0AHF](https://img.slarker.me/wiki/qUIsLs_xk0AHF.png)

## 群晖部署 Bitwarden

建立一个用来存储 Bitwarden 数据的文件夹，比如 `/docker/bitwarden`，这个也就是需要备份的文件夹。

在群晖 Docker 中搜索 `vaultwarden/server` 镜像，下载并运行，只需要修改下面的设置就可以顺利启动容器了，启动后可以使用 8080 端口访问 Bitwarden 服务。

![a7bxi8_xrcbaS](https://img.slarker.me/wiki/a7bxi8_xrcbaS.png)

Bitwarden 默认并不需要设置 ADMIN_TOKEN，如果你也想通过 Admin 来配置 Bitwarden 选项，可以在环境变量中加入 `ADMIN_TOKEN`。

![QpN2Ov_kKA3hY](https://img.slarker.me/wiki/QpN2Ov_kKA3hY.png)

## 添加 HTTPS 反向代理

为了保证传输安全，Bitwarden 不能通过 HTTP 直接访问，需要添加 HTTPS 证书。

![SKXCQl_zQwpf8](https://img.slarker.me/wiki/SKXCQl_zQwpf8.png)

对于有公网 IP 的朋友，可以申请域名配合  [Lucky](https://github.com/gdy666/lucky) 来为 Bitwarden 添加 HTTPS 证书。

对于没有公网 IP 的朋友，可以直接使用我部署好的 Bitwarden 服务。如果你有需要，可以直接点击右上角的联系我，添加微信私聊。

## 客户端设置

:::info 提示
为了便于更新到最新版，Android 用户请尽量通过 `Google Play` 安装 Bitwarden。
:::

Bitwarden 有浏览器插件（支持 Chrome，Safari，Edge 等主流浏览器），Windows、macOS、Android、iOS 客户端。

使用自建的 Bitwarden 服务需要填写托管的 `服务器 URL` 地址，以及注册的 `用户名`、`密码` 就可以登录。

如下图所示，选择登录到 `自托管`：

![](https://img.slarker.me/wiki/16fb8c4ba2c34e7195d8b9858ee277c7.png)

填写 `服务器 URL`，点击保存：

![](https://img.slarker.me/wiki/d6bbea162b014ed1a41a9ee6345e0997.png)

输入注册的 `电子邮件地址`，点击 `继续`：

![](https://img.slarker.me/wiki/646ee0d068234f398bae964513ac0469.png)

输入密码后，选择 `使用主密码登录`。

![](https://img.slarker.me/wiki/34e7ada4354f4a7db97b146916e57a24.png)

## 自动填充

推荐按下面的选项设置自动填充。

![](https://img.slarker.me/wiki/e1134042eba34b3eb7ede2e6e52af536.png)

默认 URI 匹配检测设置为 `主机`，可以区分具有相同 IP，但端口不同的服务。

![](https://img.slarker.me/wiki/8c3e56456c7b4236be6e7c51639da2a4.png)

## 两步验证

两步验证能增强你的账号安全性，如果你开启了两步验证，在新设备上登录你的账户时，会要求你额外输入两步验证 App 实时生成的两步验证码。

为了确保安全，请尽可能使用 `验证器 App` 开启两步登录验证，并妥善保管好或者单独记下你的 `恢复代码`。

![](https://img.slarker.me/wiki/bb9ca895622d484e839efbeed2151f3c.png)

`验证器 App` 推荐使用：

- 微软的 Authenticator（国内应用市场可以直接下载）
- Google Authenticator
- [Authenticator Pro](https://stratumauth.com/)（Android、开源）

:::info 提示
如果你已经开启了两步验证，请尽可能使用下面的办法备份你的两步验证信息：

- 如果你有闲置手机，你可以在多台手机上同时安装两步验证 App，并通过备份导入或者在线账户同步的方式，来确保在极端情况（主力手机丢失）下两步验证依然可用。
- 将两步验证的 `恢复代码` 手写/打印到纸上，妥善保管。
:::