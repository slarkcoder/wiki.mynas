# 温度监控

![pexels-enginakyurt-143551_wD65iA](https://img.slarker.me/wiki/pexels-enginakyurt-143551_wD65iA.jpg)

使用 NAS 的过程中，需要注意硬件的温度是否有异常。不管是 Unraid，PVE 还是群晖，都可以通过 CPU，主板和硬盘内置的温度传感器来获取到温度信息。

:::info 提示
为了让 NAS 有良好的散热，请尽量不要把 NAS 放到密闭空间内。如果你想把 NAS 放到弱电箱或者柜子里，至少需要给柜门开一些散热孔，最好能加个风扇，保持通风。
:::

## 温度范围

以下数据范围来自 [Kimi AI](https://kimi.moonshot.cn) 和 [通义 AI](https://tongyi.aliyun.com/)。

- CPU 正常温度：30~85℃，空闲状态应在 50℃ 以下
- 机械硬盘正常温度：5~55℃，理想状态温度：30~45℃
- SSD 正常温度：0~70℃，理想状态温度： 40~50℃

## fnOS

fnOS 在 `系统设置` -> `硬盘信息` 中可以看到硬盘温度。

![](https://img.slarker.me/wiki/20250320133543917.webp)

## Unraid

在 Unraid 中，可以通过 `Dynamix System Temperature` 插件来显示 CPU 温度、主板温度。

![qvnmw4ec.zdy_llo4Mg](https://img.slarker.me/wiki/qvnmw4ec.zdy_llo4Mg.png)

在主界面中，也可以看到硬盘的具体温度。

![o0mp3gub.w2v_9EQAIL](https://img.slarker.me/wiki/o0mp3gub.w2v_9EQAIL.png)

Unraid 自带硬盘温度报警功能，当硬盘温度超过预警阈值，就会发出警告提示。默认的报警温度阈值（45℃）是 **针对机械硬盘的**，如果你的 NAS 里有 SSD，可以在主界面中点击具体的 SSD 磁盘编号，到磁盘的 `S.M.A.R.T` 设置中对 SSD 单独设置报警阈值，推荐将 SSD 设置为 55℃。

![nmtjsbjk.zv1_s0MTMW](https://img.slarker.me/wiki/nmtjsbjk.zv1_s0MTMW.png)

## 群晖

群晖的硬盘温度在存储管理器中 `HDD/SSD` 列表可以看到。

![IThojI_qKeYJS](https://img.slarker.me/wiki/IThojI_qKeYJS.png)

## PVE

对于使用 PVE 方案用户来说，如果是把硬盘控制器都直通给了 NAS 系统，那么硬盘温度就应该在该 NAS 系统里去查看。CPU 和主板温度，可以通过安装 `sensors` 来解决,具体教程可以参考：

[PVE系统在概要中显示CPU温度的方法](https://tendcode.com/subject/article/pve-cpu-temperature/)

如果觉得上述教程比较麻烦，这里也有个一键脚本可以方便的让 PVE 在主界面显示温度：

```sh
wget -q -O /root/pve_source.tar.gz 'https://bbs.x86pi.cn/file/topic/2023-11-28/file/01ac88d7d2b840cb88c15cb5e19d4305b2.gz' && tar zxvf /root/pve_source.tar.gz && /root/./pve_source
```

## 什么样的风扇转速最合适？

经常有人问我，NAS 风扇能否支持自动调速？这个问题实际想问的是：机箱的硬盘散热风扇能否根据硬盘温度来自动调节转速。当然，这也是最理想的情况。

要回答这个问题，首先得搞清楚，主板或者机箱背板有没有提供硬盘温度的 PWM 接口，答案是绝大部分主板或者机箱都没有。主板上的接口要么是 CPU PWM 接口，要么是主板 PWM 接口。如果直接把机箱硬盘散热风扇接到这两个接口上面，想实现根据硬盘温度风扇自动调速，显然是牛头不对马嘴。而大部分 NAS 机箱背板虽然有自带 4pin 的 PWM 接口，但是据我测试，几乎都无法实现自动调速，比如乔思伯 N2，虽然背板有 4pin 的风扇接口，但是即便不装硬盘，机箱风扇也是满速在转，所以这个 4pin 接口根本就没有调速功能。

既然主板和机箱背板都没法实现自动调速，那退而求其次的办法是什么呢？答案是让机箱风扇保持定速。只要能满足硬盘散热需求，同时噪音不大也可以。大部分主板都支持自定义转速，可以将机箱风扇接到主板上的 PWM 接口，到 BIOS 里将对应的 PWM 接口设置成自定义模式，手动调节合适的转速。对于不支持自定义转速的主板，可以搭配降速线将机箱风扇控制到合适的转速。





