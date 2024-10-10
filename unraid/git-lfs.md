# 安装 git-lfs

`Git-lfs` 是一个 git 的开源扩展，目的是为了解决 git 仓库的大文件托管问题。很多包含大模型的仓库都必须使用 `git-lfs` 才能把整个 `git` 仓库拉下来。本篇就介绍如何在 Unraid 上面安装 `git-lfs`。

[Git-lfs Release](https://github.com/git-lfs/git-lfs/releases)

打开 Unraid 终端，依次输入下面的命令：

```sh
# 进入到 /home 目录
cd /home/

# 下载 git-lfs 安装包（默认是 x86_64 平台）
wget https://github.com/git-lfs/git-lfs/releases/download/v3.5.1/git-lfs-linux-amd64-v3.5.1.tar.gz

# 解压 tar.gz
tar -zxvf git-lfs-linux-amd64-v3.5.1.tar.gz

# 进入解压后的路径
cd git-lfs-3.5.1/

# 安装 git-lfs
./install.sh

# 安装完成后测试
git lfs install
```

显示 `Git LFS initialized.` 就表示安装好了。

![WJYKWb_Bx8fg3](https://img.slarker.me/wiki/WJYKWb_Bx8fg3.png)