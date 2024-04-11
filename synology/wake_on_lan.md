# 网络唤醒

网络唤醒功能可以让你的 NAS 在关机状态时，通过其它设备发送网络唤醒魔术包实现远程开机，不需要你手动按下 NAS 的开机键。如果你需要使用网络唤醒功能，需要主板支持并打开网络唤醒的设置。

## 主板设置

以倍控 N100 NAS 主板为例，开机进入到 BIOS 里，找到 `ACPI Settings` -> `Resume By Onboard LAN` 将选项设置为 `Enabled` 就可以了（默认为 Disabled）。

## 系统设置

以群晖系统为例，在 `控制面板` -> `电源` 选项中勾选下面的选项并应用。

![synology_wol_1_dhfzD6](https://img.slarker.me/blog/synology_wol_1_dhfzD6.png)

## 如何唤醒？

需要唤醒时，可以使用支持网络唤醒的路由器（OpenWRT、iStoreOS），或者其它客户端（Windows、macOS、iOS、Android）App。

以 `iStoreOS` 为例，在 `服务` -> `网络唤醒` 中，选择需要唤醒设备的 mac 地址或者 IP，点击 `唤醒主机` 就可以。

![5ewuknk5.k0k_iYDofa](https://img.slarker.me/blog/5ewuknk5.k0k_iYDofa.png)

