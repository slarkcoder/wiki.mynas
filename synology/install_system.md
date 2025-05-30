# 安装系统

::: warning 注意事项
- 如果你装入的硬盘安装过其它系统，建议在 Windows 中使用 [DiskGenius](https://www.diskgenius.cn/download.php) 工具把所有的分区表删除并保存修改。
- 安装过程中需要格式化硬盘，请确保你装入的硬盘中的重要数据已经做好了备份。
- 安装过程中需要联网下载系统镜像，网络状况不佳可能导致安装失败，如果下载缓慢，建议修改路由器上的 `DNS` 为 `223.5.5.5/114.114.114.114` 重启之后再试。
- 群晖的每块硬盘上面都会有群晖的系统分区，群晖里不存在 `系统盘` 这个说法。
- 建议添加一块 SSD 用来安装套件，容量 `256G` 就足够使用，如果你需要安装 `小雅`，建议使用 `512G`。第一次安装套件会提示选择 `默认的安装位置`，可以选择 SSD 所在的存储空间。
- 插入的硬盘中如果有旧的群晖硬盘，群晖会提示迁移，数据会得到保留，可能有部分配置需要重新设置。
- 请确保你的 NAS 和电脑都接入到了同一个网络（同一个交换机，路由器或者光猫）。
:::

当你的群晖系统启动后，你可以按照这个教程来进行系统安装设置。

## 查找群晖 IP

可以参考 [查找群晖设备](/synology/find_synology.md)。

## 安装

浏览器打开群晖 IP 后，按照下面的步骤完成安装。

点击 `安装`。

![synology_install_1_W0BwB0](https://img.slarker.me/wiki/synology_install_1_W0BwB0.png)

默认为 `自动从 Synology 网站下载`，这里推荐选择 `从计算机手动上传 .pat 文件`，手动上传可以避免因网络原因导致安装失败。

下载 [DSM_SA6400_69057.pat](https://www.123pan.com/s/1JKMjv-o9fo.html)，上传后点击下一步。

![synology_install_2_cpnHbP](https://img.slarker.me/wiki/synology_install_2_cpnHbP.png)

安装系统需要格式化硬盘，请确认你的硬盘数据已经备份，点击 `继续`。

![synology_install_3_ScPUy7](https://img.slarker.me/wiki/synology_install_3_ScPUy7.png)

按提示输入型号 `SA6400`，点击删除。

![synology_install_4_C9RZOc](https://img.slarker.me/wiki/synology_install_4_C9RZOc.png)

正在安装，会显示进度，之后会显示倒计时 10 分钟。

![synology_install_5_wZc0ly](https://img.slarker.me/wiki/synology_install_5_wZc0ly.png)

如果一切顺利，到这里系统就装好了，点击开始。

![synology_install_6_4vg0q1](https://img.slarker.me/wiki/synology_install_6_4vg0q1.png)

接下来设置群晖设备名，以及本地账户，按提示填写即可。

![Synology_install_7_2uG5eu](https://img.slarker.me/wiki/Synology_install_7_2uG5eu.png)

更新选择 `手动安装`。

![synolog_install_9_thP6XQ](https://img.slarker.me/wiki/synolog_install_9_thP6XQ.png)

选择 `跳过`。

![synology_install_10_Ldz9E8](https://img.slarker.me/wiki/synology_install_10_Ldz9E8.png)

设备分析，不用勾选，点击 `提交`。

![synology_install_11_uWWJbT](https://img.slarker.me/wiki/synology_install_11_uWWJbT.png)

点击 `高级选项`，选择 `继续前往`。

![synology_install_12_QW8Tiz](https://img.slarker.me/wiki/synology_install_12_QW8Tiz.png)

选择 `不用了，谢谢`。

![synology_install_13_Ict3Zl](https://img.slarker.me/wiki/synology_install_13_Ict3Zl.png)

选择 `不用了，谢谢`。

![synology_install_14_C6AnwM](https://img.slarker.me/wiki/synology_install_14_C6AnwM.png)

选择 `放弃保护我的账户`。

![synology_install_15_8ZjZP5](https://img.slarker.me/wiki/synology_install_15_8ZjZP5.png)

至此系统安装完成，你已经可以开始使用群晖了。