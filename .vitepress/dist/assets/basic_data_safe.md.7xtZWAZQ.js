import{_ as a,c as t,o as e,a4 as r}from"./chunks/framework.BOW58p_D.js";const _=JSON.parse('{"title":"如何确保数据安全？","description":"","frontmatter":{},"headers":[],"relativePath":"basic/data_safe.md","filePath":"basic/data_safe.md","lastUpdated":1715586764000}'),i={name:"basic/data_safe.md"},n=r('<h1 id="如何确保数据安全" tabindex="-1">如何确保数据安全？ <a class="header-anchor" href="#如何确保数据安全" aria-label="Permalink to &quot;如何确保数据安全？&quot;">​</a></h1><p><img src="https://slark-blog.s3.bitiful.net/pexels-anthony-170290_HMSadH.jpg" alt="pexels-anthony-170290_HMSadH"></p><p>当你有了 NAS，所有的数据也都由你自己掌握，但同时你也得为自己的数据多操点心，不至于在家里人把数据都存到你这台 NAS 之后，由于意外导致数据全丢，你又没法找回，那这损失可就大了。</p><p>我这里有几条经验分享给你：</p><ul><li>区分清楚你的数据，哪些是重要的，哪些是不重要的，这些数据大致需要多少容量的存储空间，这个问题最好在你使用 NAS 之前就考虑清楚，方便后续建立具有相应容错等级的 raid 存储池来满足要求。</li><li>根据 3-2-1 原则，对重要的数据做备份，即便是已经将重要数据存到了具有容错功能的 raid 磁盘上面，这里有篇文章可以参考：<a href="https://sspai.com/post/39591" target="_blank" rel="noreferrer">不想被勒索软件毁掉数据，就按照「3-2-1 原则」来备份文件</a>。</li><li>设想几种可能发生的情况，比如某块磁盘坏掉，比如系统无法启动，又比如某些重要文件被误删，更极端一点，假设你的 NAS 被雷击了的时候，你能否顺利的从备份中恢复数据？</li></ul><h2 id="使用带有容错-冗余-功能的-raid-磁盘阵列" tabindex="-1">使用带有容错（冗余）功能的 Raid 磁盘阵列 <a class="header-anchor" href="#使用带有容错-冗余-功能的-raid-磁盘阵列" aria-label="Permalink to &quot;使用带有容错（冗余）功能的 Raid 磁盘阵列&quot;">​</a></h2><p>这里推荐一个群晖的在线工具 <a href="https://www.synology.cn/zh-cn/support/RAID_calculator" target="_blank" rel="noreferrer">Raid 计算器</a>，可以直观的计算出各种 Raid 类型的冗余情况。</p><p><img src="https://slark-blog.s3.bitiful.net/ujgeyx12.1jz_iGlDXE.png" alt="ujgeyx12.1jz_iGlDXE"></p><p>比如，这里使用了 4 块 16TB 硬盘，如果使用 Raid5 类型，可用空间就是 43.7TB，有 14.6TB 的空间用来保护数据，4 块盘里最多同时允许坏 1 块，你的数据不会丢失。如果使用 Raid1 类型，可用空间就是 14.6TB，有 43.7TB 的空间用来保护数据，4 块盘里最多同时允许坏 3 块，你的数据不会丢失。</p><p><img src="https://slark-blog.s3.bitiful.net/yhy4bout.1tn_tufIzv.png" alt="yhy4bout.1tn_tufIzv"></p><p><img src="https://slark-blog.s3.bitiful.net/pv4tq3yo.njp_mzEFQ5.png" alt="pv4tq3yo.njp_mzEFQ5"></p><p>在 Unraid 里，能实现同样功能的是 ZFS，原理大致都一样，叫法略有不同。</p><h2 id="自动备份数据" tabindex="-1">自动备份数据 <a class="header-anchor" href="#自动备份数据" aria-label="Permalink to &quot;自动备份数据&quot;">​</a></h2><p>在 Unraid 上面，推荐使用开源的 Duplicati 来定期自动备份数据。不仅可以把数据备份到 NAS 上的其他磁盘里，还可以同时备份到云服务或者挂载好的网盘里。具体可以看这篇教程：<a href="/unraid/duplicati.html">开源免费的备份方案 - Duplicati</a></p><h2 id="避免意外断电-给-nas-配一个-ups" tabindex="-1">避免意外断电 - 给 NAS 配一个 UPS <a class="header-anchor" href="#避免意外断电-给-nas-配一个-ups" aria-label="Permalink to &quot;避免意外断电 - 给 NAS 配一个 UPS&quot;">​</a></h2><p>机械硬盘成本在 NAS 里肯定算是大头，同时机械硬盘在 NAS 的所有部件里也是最脆弱的，异常断电对机械硬盘造成的危害不小，我见过不少因为异常断电导致硬盘损坏丢数据的用户。基于这些惨痛的教训，有必要为 NAS 配一个不间断电源，也就是 UPS。一个 UPS 也就几百块，对于 NAS 整机成本来说影响很小，却可以很大程度保障你的 NAS 安全，因此非常推荐购买。</p><p>首先需要说明一点，UPS 的存在并不是为了让你的设备能够一直持续在开机状态工作，而是为了让你的设备在市电中断后，能够有足够的时间来完成关机动作，避免意外断电对你的设备造成损坏。家用 UPS 基本上都配备了一根 USB 信号线，以便在市电中断时通知需要关机的设备。</p><h2 id="nas-都支持-ups-吗" tabindex="-1">NAS 都支持 UPS 吗？ <a class="header-anchor" href="#nas-都支持-ups-吗" aria-label="Permalink to &quot;NAS 都支持 UPS 吗？&quot;">​</a></h2><p>群晖，Unraid，或者是使用 PVE 安装的 All in one 都支持 UPS，只要购买带有 USB 接口的 UPS 就可以。</p><h3 id="unraid-配置-ups" tabindex="-1">Unraid 配置 UPS <a class="header-anchor" href="#unraid-配置-ups" aria-label="Permalink to &quot;Unraid 配置 UPS&quot;">​</a></h3><p>Unraid 的 UPS 设置非常简单，把 UPS 的 USB 线接入 NAS，就可以在 <code>设置 -&gt; UPS 设置</code> 中配置：</p><p><img src="https://slark-blog.s3.bitiful.net/2GGO8X_XyxJWn.png" alt="2GGO8X_XyxJWn"></p><h3 id="如何让一台-ups-支持多台设备" tabindex="-1">如何让一台 UPS 支持多台设备 <a class="header-anchor" href="#如何让一台-ups-支持多台设备" aria-label="Permalink to &quot;如何让一台 UPS 支持多台设备&quot;">​</a></h3><p>目前市面上的 UPS 基本只带了一根 USB 信号线，那么如果有两台设备，能否同时使用 USB 来接到 UPS 呢？一个开脑洞的想法是买一根 1 分 2 的 USB 线，把两台设备都同时接到 UPS 上，不过经过搜索后发现，已经有网友试过了，这种办法并不可行。</p><p>另一种可行的办法是看这两个 UPS 是否都支持 nut，比如群晖，Unraid 都支持，像是极空间就不支持。如果都支持的话，那就可以把其中一台（A）接到 UPS 上，并设置为 nut 网络服务器，另一台（B）作为 nut 客户端，这样等市电中断时，A 可以从 UPS 获取到断电信号，并把这个消息发送给 B，这样 A 和 B 就都可以做到正常关机。</p><p>用上面这个办法也可以做到让使用 PVE 安装的群晖虚拟机也能够使用 UPS。在逻辑上，PVE 和群晖是两台设备，可以将 USB 接口的 UPS 通过虚拟机添加到群晖里，并将群晖设置为 nut 服务器，在 PVE 里设置 nut 作为客户端，这样群晖和 PVE 就都可以正常关机，具体操作可以参考这个教程： <a href="https://www.purefish.cc/pve-synology-ups.html" target="_blank" rel="noreferrer">PVE 群晖 连接UPS实现停电关机</a>。</p>',26),s=[n];function l(p,o,d,h,S,u){return e(),t("div",null,s)}const P=a(i,[["render",l]]);export{_ as __pageData,P as default};
