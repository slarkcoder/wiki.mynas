# 使用 SSH 登录

![](https://img.slarker.me/wiki/03dcfaed1b9f40b5d8c16066f18f786f.webp)

`SSH` 是一种网络协议，用于在远程服务器上执行命令，并通过网络传输数据。玩 NAS，学会如何使用 `SSH` 是必备的基本操作。

在创建 fnOS 账户的时候，填写的管理员名称和密码，就是 `SSH` 的用户名和密码。除此之外，系统中还会创建一个默认的 `root` 用户，密码和你的 fnOS 管理员密码相同。由于 Linux 的安全策略，`root` 拥有系统最高的权限，所以默认禁止远程登录。你只能先使用管理员账号这个身份通过 SSH 登录到 fnOS，然后使用 `sudo -i` 命令切换到 `root` 用户。

## 如何判断当前用户身份？

很简单，看你的终端前面显示的用户名是哪个，当前的用户身份就是哪个。以下图为例：

![](https://img.slarker.me/wiki/202409172124748.webp)

首先我使用 `slark` 这个身份登录 fnOS，登录之后，终端前面显示的用户名就是 `slark`。
接下来我使用 `sudo -i` 切换到 `root` 用户，切换之后，终端前面显示的用户名就是 `root`。

## 开启 SSH 服务

在 fnOS `设置` -> `SSH` 中打开 `SSH 功能` 开关。

![OK2SIN_7sTAMA](https://img.slarker.me/wiki/OK2SIN_7sTAMA.png)

## 通过 SSH 登录 fnOS

:::info 提示
- Windows 用户，可以使用系统自带的 `cmd`，或者第三方的 `putty` 等工具。
- macOS 用户，可以使用系统自带的 `Terminal`，或者第三方的 `iTerm2` 等工具，
- 如果是首次 ssh 登录，需要输入 `yes` 确认。
- 如果提示需要输入密码，只能盲输，不会有提示，输完回车确认。
:::

打开你的电脑 `终端`，在终端中使用 `ssh` 登录 fnOS：

```sh
# ssh 命令格式为: ssh [fnOS 用户名]@[fnOS IP 地址]
ssh slark@192.168.2.113
```

使用 `sudo -i` 切换到 root 用户。

![KtM6vm_OpSjwA](https://img.slarker.me/wiki/KtM6vm_OpSjwA.png)