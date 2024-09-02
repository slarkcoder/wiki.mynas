# 使用 SSH 登录

## 开启 SSH 服务

在 fnOS `设置` -> `SSH` 中打开 `SSH 功能` 开关。

![OK2SIN_7sTAMA](https://img-1255332810.cos.ap-chengdu.myqcloud.com/OK2SIN_7sTAMA.png)

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

![KtM6vm_OpSjwA](https://img-1255332810.cos.ap-chengdu.myqcloud.com/KtM6vm_OpSjwA.png)