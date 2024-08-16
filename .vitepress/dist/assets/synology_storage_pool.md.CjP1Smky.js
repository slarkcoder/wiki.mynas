import{_ as t,c as e,o as a,a4 as d}from"./chunks/framework.Dx5AVRXu.js";const m=JSON.parse('{"title":"存储池","description":"","frontmatter":{},"headers":[],"relativePath":"synology/storage_pool.md","filePath":"synology/storage_pool.md","lastUpdated":1723646606000}'),n={name:"synology/storage_pool.md"},o=d('<h1 id="存储池" tabindex="-1">存储池 <a class="header-anchor" href="#存储池" aria-label="Permalink to &quot;存储池&quot;">​</a></h1><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/d8fee6d8da2a4b79750c8a46aa42906b_Sp4NzU.jpeg" alt="d8fee6d8da2a4b79750c8a46aa42906b_Sp4NzU"></p><h2 id="常见-raid-类型" tabindex="-1">常见 Raid 类型 <a class="header-anchor" href="#常见-raid-类型" aria-label="Permalink to &quot;常见 Raid 类型&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;"><strong>RAID 类型</strong></th><th style="text-align:center;"><strong>硬盘数量</strong></th><th style="text-align:center;"><strong>冗余硬盘数量</strong></th><th style="text-align:center;"><strong>特点</strong></th></tr></thead><tbody><tr><td style="text-align:center;"><strong>RAID 0</strong></td><td style="text-align:center;">至少 2 个</td><td style="text-align:center;">无</td><td style="text-align:center;">提高性能，无冗余</td></tr><tr><td style="text-align:center;"><strong>RAID 1</strong></td><td style="text-align:center;">至少 2 个</td><td style="text-align:center;">N-1 个（ N 为硬盘总数）</td><td style="text-align:center;">高数据冗余</td></tr><tr><td style="text-align:center;"><strong>RAID 5</strong></td><td style="text-align:center;">至少 3 个</td><td style="text-align:center;">1 个</td><td style="text-align:center;">提供数据冗余和性能</td></tr><tr><td style="text-align:center;"><strong>RAID 6</strong></td><td style="text-align:center;">至少 4 个</td><td style="text-align:center;">2 个</td><td style="text-align:center;">更高的数据冗余</td></tr><tr><td style="text-align:center;"><strong>RAID 10</strong></td><td style="text-align:center;">至少 4 个</td><td style="text-align:center;">每个镜像集 1 个</td><td style="text-align:center;">结合 RAID 1 和 0</td></tr><tr><td style="text-align:center;"><strong>JBOD</strong></td><td style="text-align:center;">至少 1 个</td><td style="text-align:center;">无</td><td style="text-align:center;">无数据冗余</td></tr></tbody></table><h2 id="建立存储池" tabindex="-1">建立存储池 <a class="header-anchor" href="#建立存储池" aria-label="Permalink to &quot;建立存储池&quot;">​</a></h2><p>在 <code>存储管理器</code> 中，可以按需创建存储池。可以根据硬盘数量，选择不同的 <code>Raid</code> 类型。如果你不了解各种 <code>Raid</code> 类型有什么区别，也可以到群晖的 <a href="https://www.synology.cn/zh-cn/support/RAID_calculator" target="_blank" rel="noreferrer">容量计算器</a> 中对比。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/F9Gg3W_pMMh3c.png" alt="F9Gg3W_pMMh3c"></p><p>选择存储池类型之后可以看到详细的介绍：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-14_13-58-39_cXVsGb.png" alt="Snipaste_2024-08-14_13-58-39_cXVsGb"></p><h2 id="正常状态的存储池" tabindex="-1">正常状态的存储池 <a class="header-anchor" href="#正常状态的存储池" aria-label="Permalink to &quot;正常状态的存储池&quot;">​</a></h2><p>如下图所示，我使用 4 块 50G 的磁盘建立了 <code>Raid 6</code> 类型的存储池，<code>Raid 6</code> 有两块硬盘作为冗余，因此可以用的容量为 50G*2=100G，实际可用容量为 79.5G，大约有 20G 的空间为系统预留空间。</p><p>正常状态的存储池会显示 <code>良好</code>。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-14_14-40-02_d7dRWZ.png" alt="Snipaste_2024-08-14_14-40-02_d7dRWZ"></p><h2 id="存储池降级" tabindex="-1">存储池降级 <a class="header-anchor" href="#存储池降级" aria-label="Permalink to &quot;存储池降级&quot;">​</a></h2><p>当上面建立的 <code>Raid 6</code> 存储池中有任意 1块 / 2块 硬盘发生故障，此时存储池依然可以正常使用，数据都可以正常读写，但冗余能力会下降，也就是存储池出现了降级。</p><p>存储池会显示 <code>堪用</code>，意思就是可以继续用，数据没有丢失，需要通过更换硬盘让存储池恢复正常状态。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-14_14-45-45_0Ikoxf.png" alt="Snipaste_2024-08-14_14-45-45_0Ikoxf"></p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-14_15-51-05_dkOqAl.png" alt="Snipaste_2024-08-14_15-51-05_dkOqAl"></p><h2 id="修复存储池" tabindex="-1">修复存储池 <a class="header-anchor" href="#修复存储池" aria-label="Permalink to &quot;修复存储池&quot;">​</a></h2><p>出现存储池降级，需要更换掉故障的硬盘，然后按提示修复（存储池中有 <code>立即修复</code> 的按钮）。</p><div class="info custom-block"><p class="custom-block-title">提示</p><p>更换故障硬盘时，如果你没有办法根据盘位编号来判断故障硬盘是哪一个，可以比对 <code>HDD/SSD</code> 中显示的硬盘序列号和硬盘标签上的 <code>SN</code> 序列号来判断。</p></div><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-14_14-53-07_MAfGTB.png" alt="Snipaste_2024-08-14_14-53-07_MAfGTB"></p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-14_14-53-44_kbqBfD.png" alt="Snipaste_2024-08-14_14-53-44_kbqBfD"></p><p>修复完成，存储池恢复正常（显示 <code>良好</code>）。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/Snipaste_2024-08-14_15-14-03_Ra0hUe.png" alt="Snipaste_2024-08-14_15-14-03_Ra0hUe"></p><h2 id="存储池丢失" tabindex="-1">存储池丢失 <a class="header-anchor" href="#存储池丢失" aria-label="Permalink to &quot;存储池丢失&quot;">​</a></h2><p>当存储池中发生故障的硬盘数量超过存储池的最大冗余能力，会导致整个存储池 <code>丢失</code>，该存储池中的数据都会丢失，无法恢复。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/ayrxvupf.dpy_eans52.png" alt="ayrxvupf.dpy_eans52"></p>',28),c=[o];function s(r,l,i,p,g,_){return a(),e("div",null,c)}const y=t(n,[["render",s]]);export{m as __pageData,y as default};