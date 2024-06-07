# 温度监控

不管是 Unraid，PVE 还是群晖，都可以通过仪表板来显示温度信息，包括 CPU 和硬盘。

## 温度范围

以下数据范围来自 [Kimi AI](https://kimi.moonshot.cn) 和 [通义 AI](https://tongyi.aliyun.com/)。

CPU 正常温度：30~85℃，空闲状态应在 50℃ 以下
机械硬盘正常温度：5~55℃，理想状态温度：30~45℃
SSD 正常温度：0~70℃，理想状态温度： 40~50℃

## Unraid

在 Unraid 中，可以通过 `Dynamix System Temperature` 插件来显示 CPU 温度、主板温度。

![qvnmw4ec.zdy_llo4Mg](https://img-1255332810.cos.ap-chengdu.myqcloud.com/qvnmw4ec.zdy_llo4Mg.png)

在主界面中，也可以看到硬盘的具体温度。

![o0mp3gub.w2v_9EQAIL](https://img-1255332810.cos.ap-chengdu.myqcloud.com/o0mp3gub.w2v_9EQAIL.png)

Unraid 自带硬盘温度报警功能，当硬盘温度超过预警阈值，就会发出警告提示。默认的报警温度阈值（45℃）是 **针对机械硬盘的**，如果你的 NAS 里有 SSD，可以在主界面中点击具体的 SSD 磁盘编号，到磁盘的 `S.M.A.R.T` 设置中对 SSD 单独设置报警阈值，推荐将 SSD 设置为 55℃。

![nmtjsbjk.zv1_s0MTMW](https://img-1255332810.cos.ap-chengdu.myqcloud.com/nmtjsbjk.zv1_s0MTMW.png)

## 群晖

群晖的硬盘温度在存储管理器中 `HDD/SSD` 列表可以看到。

![IThojI_qKeYJS](https://img-1255332810.cos.ap-chengdu.myqcloud.com/IThojI_qKeYJS.png)

## PVE





