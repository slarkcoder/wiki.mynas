# 网络测速

在 Unraid 上面可以部署测速工具，用来测试网络连接状况。我比较常用的工具有两个，分别是 SpeedTest 和 iPerf3。有这两个工具在手，你自己就可以找出家庭网络中有哪些是拖后腿的地方。

## SpeedTest

![tdzkww0r.srv_lnm7B0](https://img-1255332810.cos.ap-chengdu.myqcloud.com/tdzkww0r.srv_lnm7B0.png)

SpeedTest 部署很简单，在 Unraid 应用中心搜索点击安装，修改下默认的端口号（比如我修改成了 9000），其他配置保持不变，点击应用。

![3znoiN_R1nPeA](https://img-1255332810.cos.ap-chengdu.myqcloud.com/3znoiN_R1nPeA.png)

部署好之后，就可以打开对应的端口进行测速。

![bflv403e.jsq_V1fDUk](https://img-1255332810.cos.ap-chengdu.myqcloud.com/bflv403e.jsq_V1fDUk.png)

通常局域网内的 ping 延迟一般都很低，大概 2~3ms 左右。如果你通过远程访问 NAS，也可以用 SpeedTest 来测试延迟情况。以 zerotier 这种远程访问方式为例，如果你测试的延迟比较高，达到了几百 ms，那说明你当前的连接方式并非是直连，很可能是到国外绕路了一圈导致延迟较高。如果测试延迟在 30ms 左右，而且测速基本可以跑满宽带的上行带宽，那说明你当前的连接方式大概率是直连。

SpeedTest 也可以在局域网内用来测试各个设备间的传输速度是否正常，从而找到拖后腿的设备。比如你的内网明明是千兆网口路由器，NAS 也是千兆网口，测速却只能跑到 100Mbps 左右，那问题很可能出在网线上。

## iPerf3

iPerf3 是一款比较专业的网络测试工具。可以在 Unraid 应用中心搜索点击安装，所有设置都可以保持默认不变。

以下是我在 mac 上的测速命令（192.168.2.184 为 NAS IP 地址）：

```
iperf3 -c 192.168.2.184 -R
```

得到的结果：

![E6CnRF_kL7EAS](https://img-1255332810.cos.ap-chengdu.myqcloud.com/E6CnRF_kL7EAS.png)

因为我是通过 zerotier 远程连接到 NAS，NAS 的宽带是 30Mbps 上传。所以测速结果显示基本上跑满了带宽。iPerf3 的参数也有不少，想学习其他用法的可以自己去搜索相关资料。