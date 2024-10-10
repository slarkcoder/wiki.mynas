# 更新群晖引导

:::warning 提示
- 本教程适用于使用 PVE 安装的群晖系统，CPU 为 N5105/N6005/N100/12~14 代桌面级 CPU 的机器。
- 更换引导，重装系统不会影响现有数据。
- 如果系统版本差异过大，可能会有部分系统软件需要重新设置。
:::

有时候想更新群晖系统，或者群晖系统出问题无法解决，可以尝试更新引导，重新安装系统解决。

更新引导有两种方式，优先推荐使用 `在线更新`，如果在线更新异常，可以尝试手动更新引导。

## 在线更新引导

`RR` 引导支持在线更新，你可以在群晖的 `控制面板` -> `任务计划` 中手动运行名为 `RebootToLoader` 的任务，然后重启群晖就会自动进入引导菜单，在引导菜单中可以直接更新引导。

![Snipaste_2024-08-14_23-49-02_gWeY5Q](https://img.slarker.me/wiki/Snipaste_2024-08-14_23-49-02_gWeY5Q.png)

重启后访问 `NAS IP:7681` 端口，就能进入引导菜单，选择 `Update menu` 菜单。

![lgigko4n.ppz_GlAKrm](https://img.slarker.me/wiki/lgigko4n.ppz_GlAKrm.png)

按提示就可以在线更新，更新完成后重新 `Boot the loader`，就可以启动群晖。

![ejhzz3gh.feb_UVe7ZY](https://img.slarker.me/wiki/ejhzz3gh.feb_UVe7ZY.png)

## 手动更新引导

如果无法在线更新引导，或者切换其它的引导，可以参考下面的教程操作。

### 下载引导

目前最新的引导可以从这里下载：

[Synology RR 引导](https://www.123pan.com/s/1JKMjv-vlfo.html)

其中的 `*.pat` 文件为离线安装包，如果后续在线安装失败，可以使用手动上传安装包的方式进行安装。

下载最新的 `img.zip` 后解压，为确保后面操作不出问题，可以将解压得到的 `*.img` 文件重命名为 `rr.img` 之后上传到 PVE 的 ISO 镜像。

![vdoeq5za.ogt_O91rPX](https://img.slarker.me/wiki/vdoeq5za.ogt_O91rPX.png)

### 替换虚拟群晖引导

替换群晖引导，首先要删除现有群晖的引导。确保群晖虚拟机已经停止，然后在群晖虚拟机的 `硬件` 中选中虚拟的引导磁盘（通常应该为 sata0），点击 `分离`，确认选 `是`。

![sd20yzcs.mhn_c25VYM](https://img.slarker.me/wiki/sd20yzcs.mhn_c25VYM.png)

此时在 `硬件` 最下方，会多出来一个 `未使用的磁盘`，再选中点击 `移除`，确认选 `是`。

![ojIxLn_ygJM7Q](https://img.slarker.me/wiki/ojIxLn_ygJM7Q.png)

之后在 `PVE` 的 `Shell` 命令行粘贴下面的命令，导入新的引导：

> 注意：命令中的 `100` 为群晖虚拟机的 ID（虚拟机名称前面括号中的数字就是 ID），根据自己的情况修改。
```
qm importdisk 100 /var/lib/vz/template/iso/rr.img local
```

![tzn5nrvc.ec0_7Ex4Ox](https://img.slarker.me/wiki/tzn5nrvc.ec0_7Ex4Ox.png)

没什么问题的话，很快就会导入完成。接下来回到虚拟群晖的 `硬件` 中，最下面会看到一个新的 `未使用的磁盘`，双击后点击 `添加`。

最后在群晖虚拟机的 `选项` 中，双击设置 `引导顺序`，勾选 `sata0` 并拖动到第一个位置。 

![kpJO8E_hjP8w4](https://img.slarker.me/wiki/kpJO8E_hjP8w4.png)

设置好之后就可以启动虚拟机了。

后续部分可以参考 [设置引导](/synology/setting_loader.md)。