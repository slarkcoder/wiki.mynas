# 常见的 CPU 核显转码效果对比

测试文件：[123 云盘：4K+IMAX DTS：X-碟中谍4.7z](https://www.123pan.com/s/1JKMjv-5lxo.html)，下载后需解压。

解压密码：

```sh
wiki.slarker.me
```

测试环境：`Synology v7.2`，`SA6400`，nyanmisaka/jellyfin `v10.8.13`

## [i5-14400T](https://www.intel.cn/content/www/cn/zh/products/sku/236790/intel-core-i5-processor-14400t-20m-cache-up-to-4-50-ghz/specifications.html)
- 核显：Intel® UHD Graphics 730，24 个执行单元
- 转码帧率：101 fps

![Snipaste_2024-07-24_17-24-36_iXpmAY](https://img.slarker.me/wiki/Snipaste_2024-07-24_17-24-36_iXpmAY.jpg)

## [i5-12500](https://www.intel.cn/content/www/cn/zh/products/sku/96144/intel-core-i512500-processor-18m-cache-up-to-4-60-ghz/specifications.html)
- 核显：Intel® UHD Graphics 770，32 个执行单元
- 转码帧率：72 fps

![12500_DMRanZ_kHwjNF](https://img.slarker.me/wiki/12500_DMRanZ_kHwjNF.jpg)

## [i5-12400](https://ark.intel.com/content/www/cn/zh/ark/products/134586/intel-core-i5-12400-processor-18m-cache-up-to-4-40-ghz.html)

- 核显：Intel® UHD Graphics 730，24 个执行单元
- 转码帧率：82 fps

![SA6400_12400_4K120Mbps_tjzRpb](https://img.slarker.me/wiki/SA6400_12400_4K120Mbps_tjzRpb.jpg)

## [i3-12300T](https://www.intel.cn/content/www/cn/zh/products/sku/223096/intel-core-i312300t-processor-12m-cache-up-to-4-20-ghz/specifications.html)

- 核显：Intel® UHD Graphics 730，24 个执行单元
- 转码帧率：73 fps

![Snipaste_2024-05-07_22-06-41_PDwSQa](https://img.slarker.me/wiki/Snipaste_2024-05-07_22-06-41_PDwSQa.png)

## [i3-12100](https://ark.intel.com/content/www/cn/zh/ark/products/134584/intel-core-i3-12100-processor-12m-cache-up-to-4-30-ghz.html)

- 核显：Intel® UHD Graphics 730，24 个执行单元
- 转码帧率：65 fps

![Snipaste_2024-03-26_16-40-00_h9Nvyy](https://img.slarker.me/wiki/Snipaste_2024-03-26_16-40-00_h9Nvyy.png)

## [至强 E2124G](https://www.intel.cn/content/www/cn/zh/products/sku/134854/intel-xeon-e2124g-processor-8m-cache-up-to-4-50-ghz/specifications.html)

- 核显：Intel® UHD Graphics P630，24 个执行单元
- 转码帧率：57 fps

> 该 CPU 核显转码效果在 Unraid 下面测试。

![eurhohcy.hy2_lWkVmr_6bVIue](https://img.slarker.me/wiki/eurhohcy.hy2_lWkVmr_6bVIue.jpg)

## [8505](https://ark.intel.com/content/www/cn/zh/ark/products/226262/intel-pentium-gold-processor-8505-8m-cache-up-to-4-40-ghz.html)

- 核显：Intel® UHD Graphics，48 个执行单元
- 转码帧率：76 fps

![](https://img.slarker.me/wiki/202409102214980.jpg)

## [N100](https://ark.intel.com/content/www/cn/zh/ark/products/231803/intel-processor-n100-6m-cache-up-to-3-40-ghz.html)

- 核显：Intel® UHD Graphics，24 个执行单元
- 转码帧率：57 fps

![jellyfin_10_h2KYo1](https://img.slarker.me/wiki/jellyfin_10_h2KYo1.png)

### 多路转码能力

以下截图为测试 N100 核显的多路转码能力，也就是最多可以同时满足多少个人远程流畅观看 NAS 视频（不考虑宽带上行带宽的情况下），测试使用 Emby 作为服务端。

#### 4K40Mbps 码率

转码质量选择 `4K 40Mbps`，最多可满足 4 个终端同时流畅观看。

![Emby_4K_40Mbps_wAmPKF_uMLGP1](https://img.slarker.me/wiki/Emby_4K_40Mbps_wAmPKF_uMLGP1.jpg)

## [N5105](https://www.intel.cn/content/www/cn/zh/products/sku/212328/intel-celeron-processor-n5105-4m-cache-up-to-2-90-ghz/specifications.html)

- 核显：Intel® UHD Graphics，24 个执行单元
- 转码帧率：47 fps

![jellyfin_n5105_decode_lho0rY](https://img.slarker.me/wiki/jellyfin_n5105_decode_lho0rY.png)

## [N5095](https://www.intel.cn/content/www/cn/zh/products/sku/212322/intel-celeron-processor-n5095-4m-cache-up-to-2-90-ghz/specifications.html)

- 核显：Intel® UHD Graphics，16 个执行单元
- 转码帧率：45 fps

![N5095_jellyfin_k24Duo](https://img.slarker.me/wiki/N5095_jellyfin_k24Duo.png)