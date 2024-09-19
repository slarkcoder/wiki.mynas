import{_ as e,c as t,a2 as r,o as i}from"./chunks/framework.eme8ZeBJ.js";const b=JSON.parse('{"title":"排查文件传输速度问题","description":"","frontmatter":{},"headers":[],"relativePath":"basic/transfer_rate.md","filePath":"basic/transfer_rate.md","lastUpdated":1725293933000}'),l={name:"basic/transfer_rate.md"};function s(o,a,n,d,p,h){return i(),t("div",null,a[0]||(a[0]=[r('<h1 id="排查文件传输速度问题" tabindex="-1">排查文件传输速度问题 <a class="header-anchor" href="#排查文件传输速度问题" aria-label="Permalink to &quot;排查文件传输速度问题&quot;">​</a></h1><p>如果你的电脑和 NAS 之间的文件传输速度没有达到预期，可以按照本文所述的步骤来排查。除了下面提到的几点之外，传输的文件大小（机械盘读写小文件会慢很多）也会影响传输速度，所以在测试的时候，尽量使用大体积的视频文件来测试。</p><h2 id="排查步骤" tabindex="-1">排查步骤 <a class="header-anchor" href="#排查步骤" aria-label="Permalink to &quot;排查步骤&quot;">​</a></h2><p>整体排查步骤主要包括以下几点，最慢的一点将会成为传输速度的瓶颈。</p><ul><li>网络测速</li><li>源位置读取测试</li><li>目标位置写入测试</li></ul><h2 id="网络测速" tabindex="-1">网络测速 <a class="header-anchor" href="#网络测速" aria-label="Permalink to &quot;网络测速&quot;">​</a></h2><h3 id="换算关系" tabindex="-1">换算关系 <a class="header-anchor" href="#换算关系" aria-label="Permalink to &quot;换算关系&quot;">​</a></h3><p>这里首先要明白一个概念，网速的单位是 <code>Mbps</code>，文件的大小的 <code>MB</code>，两者的换算关系（8 倍）如下：</p><ul><li>1Mbps = 125KB/s = 0.125MB/s</li><li>1Gbps = 125MB/s</li><li>2.5Gbps = 312.5MB/s</li><li>10Gbps = 1250MB/s</li></ul><p>上面的这些只是理论上的传输速度，实际只要达到 90% 左右就可以算正常。</p><h3 id="硬件条件" tabindex="-1">硬件条件 <a class="header-anchor" href="#硬件条件" aria-label="Permalink to &quot;硬件条件&quot;">​</a></h3><p>首先要确保你的电脑和 NAS 之间满足预期传输速度的条件。比如你想要达到跑满 2.5Gbps，你的电脑网卡，NAS 网卡，以及中间涉及到的交换机、路由器等网络设备都要使用 2.5G 网卡，包括所用到的网线（超五类，六类都可以）也要满足 2.5G 传输速度。</p><p>如果你确认你的网卡没问题，都有 2.5G 网卡，而文件传输速度卡在 10MB/s 左右，那大概率是某根网线有问题，找出来这根网线更换就可以解决。</p><h3 id="测速方法" tabindex="-1">测速方法 <a class="header-anchor" href="#测速方法" aria-label="Permalink to &quot;测速方法&quot;">​</a></h3><p>网络测速，如果是 2.5G 网络，可以在 NAS 上安装 homebox，librespeed，openspeedtest 等工具。如果是万兆网络，可以使用 iperf3 来测试。</p>',15)]))}const u=e(l,[["render",s]]);export{b as __pageData,u as default};
