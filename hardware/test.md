# 硬件测试

![pexels-thisisengineering-386213_h4Lnzz](https://img.slarker.me/wiki/pexels-thisisengineering-386213_h4Lnzz.jpg)

硬件问题一般比较难排查，装好 NAS 之后建议做一些常规的测试，有助于找到可能存在的问题。下面就介绍一些常用的测试办法。

## 内存测试

内存测试可以使用 [MemTest86](https://www.memtest86.com/) 这个工具来测试，免费版的就够用。

### 制作内存测试启动 U 盘

在 Windows 中下载安装包后解压，插入 U 盘，打开 `imageUSB.exe`。

![Snipaste_2024-06-13_16-20-52_8QTVJY](https://img.slarker.me/wiki/Snipaste_2024-06-13_16-20-52_8QTVJY.png)

在弹出的对话框中勾选你的 U 盘，并点击 `Write`。

![Snipaste_2024-06-13_16-22-02_BxiIa1](https://img.slarker.me/wiki/Snipaste_2024-06-13_16-22-02_BxiIa1.png)

提示两次确认，都选择 `Yes`。

![Snipaste_2024-06-13_16-22-36_maS4cQ](https://img.slarker.me/wiki/Snipaste_2024-06-13_16-22-36_maS4cQ.png)

写入成功后，点击 OK，就可以拔出 U 盘了。

![Snipaste_2024-06-13_16-25-54_MuNRGw](https://img.slarker.me/wiki/Snipaste_2024-06-13_16-25-54_MuNRGw.png)

### 开始测试

将 NAS 关机，拔掉 NAS 系统的引导（系统） U 盘或者系统盘 SSD。插入制作好的启动 U 盘，接上显示器，一般都可以直接从内存测试 U 盘启动。

默认的语言为英文，下面的截图里已经切换为中文，不想切换也可以用，参考下面的截图就知道什么意思。如果键盘没有其它操作，启动后会自动开始内存测试：

![Snipaste_2024-06-13_16-37-07_Tcz7Vl](https://img.slarker.me/wiki/Snipaste_2024-06-13_16-37-07_Tcz7Vl.jpg)

默认测试一共会跑 4 轮，测试没问题会提示绿色的 `Pass`，表示通过。如果出现错误，也可以看到出错数量以及对应的错误位置。

整个测试时间会比较长，请耐心等待。以 16GB 的内存为例，跑完 4 轮需要 3 个小时左右。

![IMG_20240613_184333_Zao23S](https://img.slarker.me/wiki/IMG_20240613_184333_Zao23S.jpg)