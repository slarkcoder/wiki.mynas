# 共享文件夹

## 系统共享文件夹

磁盘阵列第一次启动后会自动创建四个系统共享文件夹，默认也都会保存到磁盘阵列设备里。Unraid 默认的共享文件夹有四个：

- `appdata`，用来保存默认的 Docker 应用设置，如果要从应用中心安装应用，这个会经常用到
- `domains`，默认的虚拟机虚拟磁盘文件夹
- `isos`，默认的 iso 镜像文件路径
- `system`，系统文件夹，一般用不到

![TM4Sa3_q4MDrd](https://img.slarker.me/wiki/TM4Sa3_q4MDrd.png)

共享文件夹前面显示黄色 ⚠️ 表示这个文件夹里的部分或者全部内容没有受到保护。如果你需要将这四个系统文件夹保存到 ZFS 里，可以在将 ZFS 创建好之后，将这几个系统文件夹的存储位置修改为 zfs，然后使用 Unraid 的文件管理器插件移动到 ZFS 阵列中。

:::warning 提示
如果需要移动系统文件夹到 ZFS 池，最好在设置中将 `Docker` 和 `虚拟机` 先停止之后再移动，避免移动过程中有新的数据写入，造成异常。移动完成之后再启动 `Docker` 和 `虚拟机`。
:::

当系统文件夹都存到了 ZFS 池中，共享文件夹前面也会变成绿色的 ●。

![HgwXpJ_Av7txg](https://img.slarker.me/wiki/HgwXpJ_Av7txg.png)

## 主存储空间

共享文件夹默认的主存储空间为阵列，如果你的文件夹里的数据比较重要，可以在创建的时候选择存储到 ZFS 池中。

![tQETbL_qIWMQN](https://img.slarker.me/wiki/tQETbL_qIWMQN.png)

对于已经存储到磁盘阵列中的共享文件夹，如果想要移动到 ZFS 池中，由于共享文件夹中的数据都是分散在阵列中的每块磁盘上面，手动移动的话会非常麻烦，可以借助 `unbalanced` 插件来归集和转移文件。

![cdMBN4_a2pARf](https://img.slarker.me/wiki/cdMBN4_a2pARf.png)

## 分配方法

磁盘阵列中的共享文件夹有三种分配方法可选，默认为 `High-water`，还有 `填充` 和 `最多可用`。

下面是官方的帮助提示：

> 此设置确定在创建新文件或目录时，Unraid OS 如何选择要使用的磁盘：
> High-water 选择编号最小且其可用空间仍高于当前 High Water 标记的磁盘。 High Water 标记用最大数据磁盘的大小除以 2 初始化。如果 没有磁盘具有高于当前 High Water 标记的可用空间，请将 High Water 标记除以 2，然后再次选择。

> High-water 的目标是向每个磁盘写入尽可能多的数据（以便最大程度地 减少磁盘唤醒的频率），同时尝试在每个磁盘上保留相同数量的 可用空间（以便在整个阵列上均匀分布数据）。

> 填充 选择编号最小且可用空间仍高于当前最小可用空间设置 的磁盘。

> 最多可用 选择当前具有最大可用空间的磁盘。

如果没有特殊需求，推荐使用默认的策略，可以最大限度减少磁盘唤醒频率。

## 包含的磁盘

如果你想让共享文件夹只存储到某些指定的盘上面，也可以通过 `包含的磁盘` 和 `已排除的磁盘` 来实现。

比如，想让 downloads 文件夹只存储到 `Disk 4` 上面，可以在包含的磁盘中只勾选 `Disk 4`，同时在 `已排除的磁盘` 中将其它盘（`Disk 1`，`Disk 2`，`Disk 3`）都勾上。

![tVz0mH_A5OvNY](https://img.slarker.me/wiki/tVz0mH_A5OvNY.png)