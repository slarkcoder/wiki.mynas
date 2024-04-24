# 常见的 CPU 核显转码效果对比

测试文件：[阿里云盘：4K+IMAX DTS：X-碟中谍4.mkv](https://www.alipan.com/s/Zrbgxt3rPTW)

测试环境：`Synology v7.2`，`SA6400`，nyanmisaka/jellyfin `v10.8.13`

## [i3-12100](https://ark.intel.com/content/www/cn/zh/ark/products/134584/intel-core-i3-12100-processor-12m-cache-up-to-4-30-ghz.html)

- 核显：Intel® UHD Graphics 730，24 个执行单元
- 转码帧率：65 fps

![Snipaste_2024-03-26_16-40-00_h9Nvyy](https://img.slarker.me/blog/Snipaste_2024-03-26_16-40-00_h9Nvyy.png)

## [N100](https://ark.intel.com/content/www/cn/zh/ark/products/231803/intel-processor-n100-6m-cache-up-to-3-40-ghz.html)

- 核显：Intel® UHD Graphics，24 个执行单元
- 转码帧率：57 fps

![jellyfin_10_h2KYo1](https://img.slarker.me/blog/jellyfin_10_h2KYo1.png)

## [N5105](https://www.intel.cn/content/www/cn/zh/products/sku/212328/intel-celeron-processor-n5105-4m-cache-up-to-2-90-ghz/specifications.html)

- 核显：Intel® UHD Graphics，24 个执行单元
- 转码帧率：47 fps

![jellyfin_n5105_decode_lho0rY](https://img.slarker.me/blog/jellyfin_n5105_decode_lho0rY.png)

## [N5095](https://www.intel.cn/content/www/cn/zh/products/sku/212322/intel-celeron-processor-n5095-4m-cache-up-to-2-90-ghz/specifications.html)

- 核显：Intel® UHD Graphics，16 个执行单元
- 转码帧率：45 fps

![N5095_jellyfin_k24Duo](https://img.slarker.me/blog/N5095_jellyfin_k24Duo.png)

## N100 核显多路转码能力

以下截图为测试 N100 核显的多路转码能力，也就是最多可以同时满足多少个人远程流畅观看 NAS 视频（不考虑宽带上行带宽的情况下），测试使用 Emby 作为服务端。

- 核显：Intel® UHD Graphics，24 个执行单元

### 4K40Mbps 码率

转码质量选择 `4K 40Mbps`，最多可满足 4 个终端同时流畅观看。

![Emby_4K_40Mbps_wAmPKF](https://img.slarker.me/blog/Emby_4K_40Mbps_wAmPKF.png)