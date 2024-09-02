import{_ as a,c as t,o as e,a4 as i}from"./chunks/framework.Dx5AVRXu.js";const m=JSON.parse('{"title":"如何确保数据安全？","description":"","frontmatter":{},"headers":[],"relativePath":"basic/data_safe.md","filePath":"basic/data_safe.md","lastUpdated":1716736442000}'),r={name:"basic/data_safe.md"},o=i('<h1 id="如何确保数据安全" tabindex="-1">如何确保数据安全？ <a class="header-anchor" href="#如何确保数据安全" aria-label="Permalink to &quot;如何确保数据安全？&quot;">​</a></h1><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/pexels-anthony-170290_HMSadH.jpg" alt="pexels-anthony-170290_HMSadH"></p><p>当你有了 NAS，所有的数据也都由你自己掌握，但同时你也得为自己的数据多操点心，不至于在家里人把数据都存到你这台 NAS 之后，由于意外导致数据全丢，你又没法找回，那这损失可就大了。</p><p>我这里有几条经验分享给你：</p><ul><li>区分清楚你的数据，哪些是重要的，哪些是不重要的，这些数据大致需要多少容量的存储空间，这个问题最好在你使用 NAS 之前就考虑清楚，方便后续建立具有相应容错等级的 raid 存储池来满足要求。</li><li>根据 3-2-1 原则，对重要的数据做备份，即便是已经将重要数据存到了具有容错功能的 raid 磁盘上面，这里有篇文章可以参考：<a href="https://sspai.com/post/39591" target="_blank" rel="noreferrer">不想被勒索软件毁掉数据，就按照「3-2-1 原则」来备份文件</a>。</li><li>设想几种可能发生的情况，比如某块磁盘坏掉，比如系统无法启动，又比如某些重要文件被误删，更极端一点，假设你的 NAS 被雷击了的时候，你能否顺利的从备份中恢复数据？</li></ul><h2 id="使用带有容错-冗余-功能的-raid-磁盘阵列" tabindex="-1">使用带有容错（冗余）功能的 Raid 磁盘阵列 <a class="header-anchor" href="#使用带有容错-冗余-功能的-raid-磁盘阵列" aria-label="Permalink to &quot;使用带有容错（冗余）功能的 Raid 磁盘阵列&quot;">​</a></h2><p>这里推荐一个群晖的在线工具 <a href="https://www.synology.cn/zh-cn/support/RAID_calculator" target="_blank" rel="noreferrer">Raid 计算器</a>，可以直观的计算出各种 Raid 类型的冗余情况。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/ujgeyx12.1jz_iGlDXE.png" alt="ujgeyx12.1jz_iGlDXE"></p><p>比如，这里使用了 4 块 16TB 硬盘，如果使用 Raid5 类型，可用空间就是 43.7TB，有 14.6TB 的空间用来保护数据，4 块盘里最多同时允许坏 1 块，你的数据不会丢失。如果使用 Raid1 类型，可用空间就是 14.6TB，有 43.7TB 的空间用来保护数据，4 块盘里最多同时允许坏 3 块，你的数据不会丢失。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/yhy4bout.1tn_tufIzv.png" alt="yhy4bout.1tn_tufIzv"></p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/pv4tq3yo.njp_mzEFQ5.png" alt="pv4tq3yo.njp_mzEFQ5"></p><p>在 Unraid 里，能实现同样功能的是 ZFS，原理大致都一样，叫法略有不同。</p><h2 id="自动备份数据" tabindex="-1">自动备份数据 <a class="header-anchor" href="#自动备份数据" aria-label="Permalink to &quot;自动备份数据&quot;">​</a></h2><p>在 Unraid 上面，推荐使用开源的 Duplicati 来定期自动备份数据。不仅可以把数据备份到 NAS 上的其他磁盘里，还可以同时备份到云服务或者挂载好的网盘里。具体可以看这篇教程：<a href="/unraid/duplicati.html">开源免费的备份方案 - Duplicati</a></p><h2 id="ups-不间断电源" tabindex="-1">UPS（不间断电源） <a class="header-anchor" href="#ups-不间断电源" aria-label="Permalink to &quot;UPS（不间断电源）&quot;">​</a></h2><p>UPS 可以有效的保护你的硬件设备，避免意外断电造成设备损坏，具体可以参考 <a href="/basic/ups.html">UPS - NAS 的好搭档</a>。</p>',16),p=[o];function s(c,l,d,n,h,_){return e(),t("div",null,p)}const f=a(r,[["render",s]]);export{m as __pageData,f as default};
