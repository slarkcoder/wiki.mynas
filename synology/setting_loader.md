# 设置引导

## 下载 pat 文件

下载 [DSM_SA6400_69057.pat](https://www.123pan.com/s/1JKMjv-o9fo.html) 备用。

## 编译引导

群晖启动后，首先到路由器中查找 `新设备 IP`，访问该 IP。

![QutP3e_P50O0X](https://img-1255332810.cos.ap-chengdu.myqcloud.com/QutP3e_P50O0X.png)

:::info 提示
推荐使用 `Parse pat` 的方式安装，不需要在线下载，能降低因网络原因导致失败的可能性。
:::

- 选择 `Parse pat`，回车会提示在 `/tmp/pats/folder` 找不到 `pat` 文件，选择 `OK`。
- 在右侧的文件目录中进入 `/tmp/pats/` 文件夹，上传上面下载好的 `DSM_SA6400_69057.pat` 文件，重新选择 `Parse pat`，确认后返回。
  ![fzowpsmh.ic2_jMTeRI](https://img-1255332810.cos.ap-chengdu.myqcloud.com/fzowpsmh.ic2_jMTeRI.png)

- 在 `Addons menu` -> `Add an addon` 中选择 `cpuinfo`，确认后返回。
- 选择 `Build the loader`，等待编译完成。

![5mjefdjo.s5f_3HQvA8](https://img-1255332810.cos.ap-chengdu.myqcloud.com/5mjefdjo.s5f_3HQvA8.png)

- 选择 `Boot the loader`，等待启动。

![grnocw2m.lo0_LtarFN](https://img-1255332810.cos.ap-chengdu.myqcloud.com/grnocw2m.lo0_LtarFN.png)

后续具体安装过程可以参考：

- [查找群晖设备](/synology/find_synology.md)
- [安装系统](/synology/install_system.md)