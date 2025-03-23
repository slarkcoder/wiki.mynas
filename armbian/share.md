# 设置共享服务

如果需要共享文件给局域网的其他设备，Armbian 需要手动配置共享服务。

在磁盘挂载设置好之后，这里先创建一个下载文件夹，路径为 `/mnt/disk/downloads`。你可以用 1Panel 或者其他的文件管理器来创建文件夹。以 1Panel 为例，在 `系统` 的 `文件` 中就可以直接创建：

![](https://img.slarker.me/wiki/20250318175459592.webp)

## SMB 共享

### 安装 SMB 服务

```sh
apt-get install samba
```

### 编辑 SMB 配置文件

方法一，直接通过 1Panel 编辑：

![](https://img.slarker.me/wiki/20250318175813197.webp)

方法二，使用 nano 命令编辑：

```sh
nano /etc/samba/smb.conf
```

在配置文件末尾按下面的示例新增配置：

```yml
[armbian_share]
comment = armbian_share
path = /mnt/disk/downloads
writable = yes
```

编辑完成，按 `Ctrl+X`，输入 `Y` 回车保存退出。

### 设置 SMB 用户

创建 SMB 共享用户 root，按提示设置密码：

```sh
smbpasswd -a root
```

### 重启 SMB 服务

```sh
service smbd restart
```

## WebDAV 共享

建议直接通过 Docker 安装 AList，挂载本地路径，AList 自带 WebDAV 服务，使用起来也很方便。