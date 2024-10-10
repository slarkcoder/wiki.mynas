# 用户和共享

## 添加用户

Unraid 自带一个 root 用户，该用户拥有系统的最高控制权限，可以通过 WebUI 控制台登陆。如果希望给家庭成员分配账号，那可以在 `用户` 设置中添加用户。

![5cfdBe_PRgDYK](https://img.slarker.me/wiki/5cfdBe_PRgDYK.png)

这里需要指出的是，这里添加的用户无法像 root 用户一样可以登陆 WebUI，仅限于通过共享文件夹的方式，在局域网或者通过远程的方式，来访问由 root 用户分配的共享资源。

添加用户也非常简单，输入用户名称和登陆密码，点击 `添加` 就好了。

![mDxs5D_W5LiIo](https://img.slarker.me/wiki/mDxs5D_W5LiIo.png)

## 设置 SMB 共享

在 Unraid 中如果要添加一个共享文件夹非常简单，只需要点击 `添加共享`，输入共享文件夹的名称，其他设置保持默认，点击最下方的添加共享按钮之后会出现一个 `SMB 安全设置`，将导出设置为 `是`，点击应用即可。

![BlEZZA_c0Vp6E](https://img.slarker.me/wiki/BlEZZA_c0Vp6E.png)

此时设置的共享为公开的、不对用户进行权限认证的共享文件夹，只要位于局域网中，就可以通过网络共享发现这个共享文件夹，并可以访问其中的资源。

如果需要对用户进行认证，可以设置下 `安全性` 这个选项，点击应用后，设置下对应的用户权限即可。

![0UywwF_HJAOsX](https://img.slarker.me/wiki/0UywwF_HJAOsX.png)
 