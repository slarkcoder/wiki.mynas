# 支持加密的备份工具 - Duplicati

之前我介绍过 [在 Unraid 中安装使用 Duplicati](/unraid/duplicati.md)，我也一直用这个工具来备份重要的数据。

![](https://img.slarker.me/wiki/202409202046557.webp)

fnOS 自带了备份工具，但是目前仍然缺少一些重要的功能，比如想把重要资料备份到网盘，但备份工具不支持加密。而上次我介绍的 Duplicati 就支持备份加密，这篇就介绍如何在 fnOS 中安装 Duplicati。

## 安装

Duplicati 不仅有 Docker 版，还支持主流的 Linux，Windows 等平台，比如 `Debian/Ubuntu` 就有 deb 安装包，相比使用 Docker，在系统里直接安装无须添加路径映射，Duplicati 直接就可以读取到系统里的所有文件，也很少会产生权限问题，会方便不少。而 fnOS 基于 Debian，所以可以直接在 Debian 中安装。

[使用 SSH 登录](/fnos/ssh.md) fnOS，并切换到 `root` 用户，粘贴执行下面的命令：

```sh
# 更新系统
apt update && apt upgrade

# 下载 Duplicati deb 安装包
wget https://updates.duplicati.com/beta/duplicati_2.0.8.1-1_all.deb

# 安装 Duplicati，此时会提示缺少依赖
dpkg -i duplicati_2.0.8.1-1_all.deb

# 安装依赖
apt-get --fix-broken install

# 再次安装 Duplicati
dpkg -i duplicati_2.0.8.1-1_all.deb
```

Duplicati 默认仅允许本机（localhost）访问，需要对配置文件 `/etc/default/duplicati` 做一点点修改：

```sh
# 使用 nano 编辑配置文件
nano /etc/default/duplicati

# 把配置文件中的 DAEMON_OPTS 所在的行替换成下面这行内容。
# webservice-interface 参数为 any 表示任意接口都可以访问 duplicati 服务。
# webservice-port 参数为 8200，表示 Web 服务访问端口，如果需要改成其他端口，可以在这里修改。
DAEMON_OPTS="--webservice-interface=any --webservice-port=8200 --portable-mode"
```

修改完成，应该像下面这样：

![](https://img.slarker.me/wiki/202409202128689.webp)

编辑完成按 `Ctrl+X`，输入 `Y` 确认，回车退出。接下来配置 Duplicati 服务：

```sh
# 启动服务
systemctl start duplicati.service
# 开机启动
systemctl enable duplicati.service
# 查看服务状态
systemctl status duplicati.service
```

![](https://img.slarker.me/wiki/202409202127788.webp)

Duplicati 默认端口是 `8200`，使用 `fnOS IP:8200` 就可以访问了。

## 备份

新增备份，可以选择加密。

![](https://img.slarker.me/wiki/kcc2wyry.jtd.webp)

备份保存位置，这里可以直接看到 fnOS 里的所有文件夹。

![](https://img.slarker.me/wiki/km50zsmv.e0k.webp)

支持的备份位置也比较多。

![](https://img.slarker.me/wiki/202409202148556.webp)

源数据，选择需要备份的源数据文件夹。

![](https://img.slarker.me/wiki/p0gj5qsh.fhv.webp)

支持备份计划。

![](https://img.slarker.me/wiki/5zll2frn.4mm.webp)

备份操作非常简单，一路下一步就行了。

![](https://img.slarker.me/wiki/cutjqfz4.ql0.webp)

加密过的备份文件。

![](https://img.slarker.me/wiki/202409202145448.webp)