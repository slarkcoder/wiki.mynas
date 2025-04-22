# 基础设置

## 合并存储空间

```sh
lvremove pve/data
lvextend -l +100%FREE -r pve/root
```

在 `数据中心` -> `存储` 中移除 `local-lvm`，双击 `local`，勾选 `内容` 中的所有项目，点击 `OK`。

![](https://img.slarker.me/wiki/20250421155043922.webp)

## PVE 一键脚本

为了方便优化 PVE 和开启各种功能，有很多现成的一键脚本可以帮助我们快速完成某些操作。目前比较流行的脚本是 [x86pi](https://bbs.x86pi.com/) 的 [pve_source](https://bbs.x86pi.com/thread?topicId=20)。

```sh
wget -q -O /root/pve_source.tar.gz 'https://bbs.x86pi.cn/file/topic/2023-11-28/file/01ac88d7d2b840cb88c15cb5e19d4305b2.gz' && tar zxvf /root/pve_source.tar.gz && /root/./pve_source
```

具体功能如下：

![](https://img.slarker.me/wiki/20250421154310330.webp)