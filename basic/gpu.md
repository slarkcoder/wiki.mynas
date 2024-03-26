# 常见的 CPU 核显转码效果对比

测试文件：[阿里云盘：4K+IMAX DTS：X-碟中谍4.mkv](https://www.alipan.com/s/WbghdnCdCxo)

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