# 磁盘阵列和 ZFS

自从 Unraid 更新到 6.12 新增了对 ZFS 的支持，使用比较鸡肋的校验盘已经没什么必要了。虽然名字是 Unraid，但随着 Unraid 用户群体的扩大，加入 Raid 功能似乎也是早晚的事。这不 6.12 版本，ZFS 就来了！既然使用校验盘会导致写入慢，那就别用校验盘了，如果有 Raid 需求，直接用 ZFS 吧。

![y0l8wN_HiR8ug](https://img-1255332810.cos.ap-chengdu.myqcloud.com/y0l8wN_HiR8ug.png)

在具体的设置阵列之前，我建议你可以先考虑清楚自己的数据有哪些是重要的，有哪些是不重要的，数据大概会有多少。针对不同的需求，看自己到底需要什么样的阵列比较合适。具体可以参考 [我的 Unraid 数据存储方案](/unraid/storage.md)。

## 磁盘阵列设备

尽管可以直接使用 ZFS，但 Unraid 要求默认的磁盘阵列设备里至少要有一块盘，否则阵列无法启动。

创建磁盘阵列很简单，直接在磁盘阵列设备中选中想要加入阵列的磁盘，点击最下方的 `启动` 按钮。

![AIPRrG_92gknm](https://img-1255332810.cos.ap-chengdu.myqcloud.com/AIPRrG_92gknm.png)

如果有新盘加入需要格式化的话，启动按钮旁边会提示 `格式化`，勾选 `是的，我想这样做` 确认提示，点击 `格式化` 按钮，稍等便会格式化完成，阵列就会建好。

![5ayhbzsa.xp5_3HT1hg](https://img-1255332810.cos.ap-chengdu.myqcloud.com/5ayhbzsa.xp5_3HT1hg.png)

Unraid 对加入磁盘阵列设备中的磁盘容量没有要求，不管容量大小，只要把磁盘加进来，就会把所有的盘的容量都聚合在一起。从容量上看，和 Raid0 的效果是一样的。但和 Raid0 不同的是，磁盘阵列设备实际在存储文件的时候和 Raid0 有非常大的区别。下面举个例子来说明区别：

> 由单盘读写都为 150MB/s 的 `disk1`、`disk2` 两块 1TB 的机械盘组成 Raid0，总容量为 2TB。读写 Raid0 中的文件时，速度是两块盘叠加，理论速度可以达到 300MB/s。这是因为向 Raid0 中写入文件时，会把文件分成两份，分别写入 `disk1` 和 `disk2`，所以速度会叠加。由于文件会被分割存储，带来的坏处就是，任何一块 Raid0 磁盘损坏，都会导致所有数据丢失。

> 由单盘读写都为 150MB/s 的 `disk3`、`disk4` 两块 1TB 的机械盘组成 Unraid 的磁盘阵列，总容量为 2TB。读写磁盘阵列中的文件时，速度依然是单盘读写速度 150MB/s。这是因为向磁盘阵列中写入文件时，Unraid 会根据文件夹的分配策略，来决定文件应该存储到 `disk3` 还是 `disk4`。也就是说磁盘阵列是按照文件的粒度来分配的。对于具体的某个文件，只会存储到 `disk3` 或者 `disk4`，而不会像 Raid0 那样，文件的一部分在 `disk1`，另一部分在 `disk2`。这样做虽然速度不如 Raid0，但同时也有好处：任何一块阵列设备中的磁盘损坏，不会影响其他盘上的数据。

## ZFS 池

> 关于 ZFS，这里有一篇不错的博客，有兴趣可以看看。[ZFS──瑞士军刀般的文件系统](https://www.eaimty.com/2020/zfs-file-system/)

如果你需要创建 ZFS 池设备，点击 `添加池`，输入池名称，选择所需的插槽数量（也就是你需要在池中加入盘的数量），点击 `添加`。

![jqqYA1_ARC9vg](https://img-1255332810.cos.ap-chengdu.myqcloud.com/jqqYA1_ARC9vg.png)

然后将需要加的盘都添加到池里，这里我添加了两块 240G 的 SSD。

![Db7kmK_jmZUA7](https://img-1255332810.cos.ap-chengdu.myqcloud.com/Db7kmK_jmZUA7.png)

点击池名称，进去可以修改文件系统类型，选择好之后点击应用。

![kCER3g_b261cx](https://img-1255332810.cos.ap-chengdu.myqcloud.com/kCER3g_b261cx.png)

回到主界面启动阵列就可以了，如果提示需要格式化，参考上面的磁盘阵列设备 `格式化` 部分操作。

## 重置阵列

当你需要向阵列中添加新盘，先停止阵列，直接选择新盘再启动就可以，添加新盘不需要重置阵列！

当你需要从阵列中移除掉某块磁盘时，需要重置阵列。重置不会影响数据，但你最好提前确认下，移除的这块盘里没有什么重要数据，如果有的话，可以提前先把数据转移到别的盘上再从阵列中移除。

如果你没有重置阵列，直接关机把盘从阵列中拿出来，下次启动的时候也会直接提示 `缺少磁盘`。

![sulnw1fa.l4y_bRJLbc](https://img-1255332810.cos.ap-chengdu.myqcloud.com/sulnw1fa.l4y_bRJLbc.png)

重置阵列在 `工具` -> `新配置` 中按下图操作：

![yspp5dbz.1y2_p2CBbG](https://img-1255332810.cos.ap-chengdu.myqcloud.com/yspp5dbz.1y2_p2CBbG.png)

重置之后，磁盘阵列就和新的一样，你可以按之前的设置，把现有的磁盘都加回来再启动就行了。

需要注意的是，重置之后，磁盘 `自动启动` 和 `休眠` 都会恢复到默认关闭状态，如果需要可以重新设置。

![2szluszr.ewq_Vgfry4](https://img-1255332810.cos.ap-chengdu.myqcloud.com/2szluszr.ewq_Vgfry4.png)

另外有部分共享文件夹的设置可能会因为重置阵列而受到影响，需要你自己确认下，比如 `新文件和文件夹的主存储空间`，`包含的磁盘`，`已排除的磁盘` 这几个设置。

![HbVpkp_s83htT](https://img-1255332810.cos.ap-chengdu.myqcloud.com/HbVpkp_s83htT.png)