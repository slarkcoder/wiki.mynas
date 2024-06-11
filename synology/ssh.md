# 使用 SSH 登录

有些设置无法在系统的 Web 中操作，比如默认的 M.2 SSD 只能作为缓存使用，如果想要作为存储使用，就需要通过 SSH 修改，同样的还有将网络设置为交换机模式也需要通过 SSH 来操作。下面就介绍如何使用 SSH 连接到群晖。

### 开启 SSH

打开 `控制面板` -> `终端机和 SNMP`，勾选 `启动 SSH 功能` 并应用。

![5ei2wi4t.oer_CMYeJZ](https://img-1255332810.cos.ap-chengdu.myqcloud.com/5ei2wi4t.oer_CMYeJZ.png)

### 使用 SSH 登录群晖

> Windows、macOS 以及各种 Linux 都自带终端，在系统中搜索 `terminal` 就有。也可以使用第三方的终端，比如 Windows 自带的 `cmd` 终端，以及第三方的 `putty` 或者 macOS 中的 `iTerm2` 等等。

在终端中使用 `ssh` 登录群晖：

```sh
# ssh 命令格式为: ssh [群晖用户名]@[群晖 IP 地址]
ssh rooter@192.168.2.227
```

使用 `sudo -i` 切换到 root 用户。

> 切换到 `root` 用户并不是必须，是否需要切换到 root 用户，要具体的需求来确定。

![hlvan5eo.bhr_N5hslt](https://img-1255332810.cos.ap-chengdu.myqcloud.com/hlvan5eo.bhr_N5hslt.png)

>注意：在终端最左侧会显示当前的用户身份，使用 `sudo -i` 切换成 root 用户之后，前面显示的用户就会由 `rooter` 变成 `root`。

### 退出

将所需的命令执行完毕后，可以在终端中输入 `exit` 退出登录。如果当前是 `root` 用户，则需要先输入 `exit` 退到普通用户，再输一次才能退出登录。

![xzbjx0p0.hxv_CVxNnf](https://img-1255332810.cos.ap-chengdu.myqcloud.com/xzbjx0p0.hxv_CVxNnf.png)