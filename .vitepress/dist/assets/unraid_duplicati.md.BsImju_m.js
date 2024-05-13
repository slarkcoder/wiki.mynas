import{_ as t,c as a,o as e,a4 as i}from"./chunks/framework.BOW58p_D.js";const h=JSON.parse('{"title":"开源免费的备份方案 - Duplicati","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/duplicati.md","filePath":"unraid/duplicati.md","lastUpdated":1715586764000}'),c={name:"unraid/duplicati.md"},p=i('<h1 id="开源免费的备份方案-duplicati" tabindex="-1">开源免费的备份方案 - Duplicati <a class="header-anchor" href="#开源免费的备份方案-duplicati" aria-label="Permalink to &quot;开源免费的备份方案 - Duplicati&quot;">​</a></h1><p>虽然 Unraid 6.12.x 已经支持建立 Raid 阵列了，但很多人的重要数据并不多，如果仅仅为了几十 GB 的数据需要备份，而不得不去牺牲整块硬盘的容量建立 Raid，实在是有点得不偿失。而通过一些开源免费的工具，能实现定时把数据备份到另一块磁盘或者云端，同样可以达到 Raid 的效果（防止硬盘损坏），甚至在恢复的速度上，是要好于 Raid 的。</p><p>Duplicati 就是这样一款开源免费的工具，在 Unraid 中很轻松就能部署，常见的协议都支持，备份到本地或者通过网络备份到云服务中都可以。</p><p>如果需要备份到本地，安装之前可以先建立好本地的备份共享目录（比如我建立的 backups）。在 Docker 设置页面将需要备份的目录（比如 /mnt/user）以及备份文件夹都加进来。需要注意的是，最好把 PUID 和 PGID 都设置为 0，避免备份的时候出现权限问题。</p><p><img src="https://slark-blog.s3.bitiful.net/L6Zm32_TQ2am6.png" alt="L6Zm32_TQ2am6"></p><p>部署好之后，打开 WebUI 端口进来，就可以新增备份了，一路根据向导操作即可，都非常简单。</p><p><img src="https://slark-blog.s3.bitiful.net/BExM8e_KSInY6.png" alt="BExM8e_KSInY6"></p><p>在第二步保存位置这里，如果选了保存到 <code>本地文件夹或磁盘</code>，在文件夹路径中，需要选中 <code>backups</code>。</p><p>在第三步源数据这里，需要选中 <code>source</code> 下面你需要备份的目录。并在最下面的排除选项中勾选：<code>隐藏文件</code>，<code>系统文件</code>，<code>临时文件</code>。</p><p>最后设置备份计划以及备份策略，之后点击保存就可以自动备份了。</p><p><img src="https://slark-blog.s3.bitiful.net/WXG5EZ_Wk37tx.png" alt="WXG5EZ_Wk37tx"></p>',11),d=[p];function o(s,r,l,n,_,u){return e(),a("div",null,d)}const f=t(c,[["render",o]]);export{h as __pageData,f as default};
