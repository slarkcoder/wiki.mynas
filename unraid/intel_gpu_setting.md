# Intel 第 11 代低功耗 CPU 开启核显硬解

> 本教程适⽤于 Intel 第 11 代低功耗 CPU，诸如采用 N5095、N5105、N6005 的机器，12 代及以后的 CPU 不需要额外设置。

## 开启硬解

在 Unraid 的终端中输⼊下⾯命令：

```sh
nano /boot/config/modprobe.d/i915.conf
```

将下⾯的内容粘贴进去：

```sh
options i915 force_probe=4e61
options i915 enable_guc=3
```

键盘按下 Ctrl + X（退出），再输⼊ Y（确认），回⻋保存。重启 Unraid。

后续的硬解设置可以参考 [安装 Jellyfin 实现硬解 4K](/unraid/jellyfin_harddecode.md)。