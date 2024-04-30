# 更新群晖引导

:::warning 提示
本教程适用于使用 PVE 安装的群晖系统，CPU 为 N5105/N6005/N100 的机器
:::

有时候想更新群晖系统，或者群晖系统出问题无法解决，可以尝试更新引导，重新安装系统解决。

## 下载引导

目前最新的引导可以从这里下载：

[群晖 SA6400 引导](https://d.gxnas.com/GXNAS%E7%BD%91%E7%9B%98-OneDrive/%E9%BB%91%E7%BE%A4%E6%99%96/SA6400/SA6400_7.21-69057%EF%BC%88%E5%BC%95%E5%AF%BC%E6%96%87%E4%BB%B6%EF%BC%89.zip)

下载后解压，为确保后面操作不出问题，可以将得到的 `img` 文件名改成 `rr.img` 之后上传到 PVE 的 ISO 镜像。

![vdoeq5za.ogt_O91rPX](https://img.slarker.me/blog/vdoeq5za.ogt_O91rPX.png)

## 替换虚拟群晖引导

替换群晖引导，首先要删除现有群晖的引导。确保群晖虚拟机已经停止，然后在群晖虚拟机的硬件中选中虚拟的引导磁盘（通常显示为 sata0），点击 `分离`，确认选 `是`。

![sd20yzcs.mhn_c25VYM](https://img.slarker.me/blog/sd20yzcs.mhn_c25VYM.png)

此时在硬件最下方，会多出来一个 `未使用的磁盘`，再选中点击 `移除`。

![ojIxLn_ygJM7Q](https://img.slarker.me/blog/ojIxLn_ygJM7Q.png)

## 安装