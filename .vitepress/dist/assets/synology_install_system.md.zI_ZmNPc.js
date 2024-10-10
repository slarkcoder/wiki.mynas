import {
  _ as l,
  c as s,
  a2 as c,
  o as t,
} from "./chunks/framework.eme8ZeBJ.js";
const y = JSON.parse(
    '{"title":"安装系统","description":"","frontmatter":{},"headers":[],"relativePath":"synology/install_system.md","filePath":"synology/install_system.md","lastUpdated":1725293933000}'
  ),
  n = { name: "synology/install_system.md" };
function p(a, o, e, i, _, d) {
  return (
    t(),
    s(
      "div",
      null,
      o[0] ||
        (o[0] = [
          c(
            '<h1 id="安装系统" tabindex="-1">安装系统 <a class="header-anchor" href="#安装系统" aria-label="Permalink to &quot;安装系统&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">注意事项</p><ul><li>如果你装入的硬盘安装过其它系统，建议在 Windows 中使用 <a href="https://www.diskgenius.cn/download.php" target="_blank" rel="noreferrer">DiskGenius</a> 工具把所有的分区表删除并保存修改。</li><li>安装过程中需要格式化硬盘，请确保你装入的硬盘中的重要数据已经做好了备份。</li><li>安装过程中需要联网下载系统镜像，网络状况不佳可能导致安装失败，如果下载缓慢，建议修改路由器上的 <code>DNS</code> 为 <code>223.5.5.5/114.114.114.114</code> 重启之后再试。</li><li>群晖的每块硬盘上面都会有群晖的系统分区，群晖里不存在 <code>系统盘</code> 这个说法。</li><li>建议添加一块 SSD 用来安装套件，容量 <code>256G</code> 就足够使用，如果你需要安装 <code>小雅</code>，建议使用 <code>512G</code>。第一次安装套件会提示选择 <code>默认的安装位置</code>，可以选择 SSD 所在的存储空间。</li><li>插入的硬盘中如果有旧的群晖硬盘，群晖会提示迁移，数据会得到保留，可能有部分配置需要重新设置。</li><li>请确保你的 NAS 和电脑都接入到了同一个网络（同一个交换机，路由器或者光猫）。</li></ul></div><p>当你的群晖系统启动后，你可以按照这个教程来进行系统安装设置。</p><h2 id="查找群晖-ip" tabindex="-1">查找群晖 IP <a class="header-anchor" href="#查找群晖-ip" aria-label="Permalink to &quot;查找群晖 IP&quot;">​</a></h2><p>可以参考 <a href="/synology/find_synology.html">查找群晖设备</a>。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>浏览器打开群晖 IP 后，按照下面的步骤完成安装。</p><p>点击 <code>安装</code>。</p><p><img src="https://img.slarker.me/wiki/synology_install_1_W0BwB0.png" alt="synology_install_1_W0BwB0"></p><p>默认为 <code>自动从 Synology 网站下载</code>，这里推荐选择 <code>从计算机手动上传 .pat 文件</code>，手动上传可以避免因网络原因导致安装失败。</p><p>下载 <a href="https://www.123pan.com/s/1JKMjv-o9fo.html" target="_blank" rel="noreferrer">DSM_SA6400_69057.pat</a>，上传后点击下一步。</p><p><img src="https://img.slarker.me/wiki/synology_install_2_cpnHbP.png" alt="synology_install_2_cpnHbP"></p><p>安装系统需要格式化硬盘，请确认你的硬盘数据已经备份，点击 <code>继续</code>。</p><p><img src="https://img.slarker.me/wiki/synology_install_3_ScPUy7.png" alt="synology_install_3_ScPUy7"></p><p>按提示输入型号 <code>SA6400</code>，点击删除。</p><p><img src="https://img.slarker.me/wiki/synology_install_4_C9RZOc.png" alt="synology_install_4_C9RZOc"></p><p>正在安装，会显示进度，之后会显示倒计时 10 分钟。</p><p><img src="https://img.slarker.me/wiki/synology_install_5_wZc0ly.png" alt="synology_install_5_wZc0ly"></p><p>如果一切顺利，到这里系统就装好了，点击开始。</p><p><img src="https://img.slarker.me/wiki/synology_install_6_4vg0q1.png" alt="synology_install_6_4vg0q1"></p><p>接下来设置群晖设备名，以及本地账户，按提示填写即可。</p><p><img src="https://img.slarker.me/wiki/Synology_install_7_2uG5eu.png" alt="Synology_install_7_2uG5eu"></p><p>更新选择 <code>手动安装</code>。</p><p><img src="https://img.slarker.me/wiki/synolog_install_9_thP6XQ.png" alt="synolog_install_9_thP6XQ"></p><p>选择 <code>跳过</code>。</p><p><img src="https://img.slarker.me/wiki/synology_install_10_Ldz9E8.png" alt="synology_install_10_Ldz9E8"></p><p>设备分析，不用勾选，点击 <code>提交</code>。</p><p><img src="https://img.slarker.me/wiki/synology_install_11_uWWJbT.png" alt="synology_install_11_uWWJbT"></p><p>点击 <code>高级选项</code>，选择 <code>继续前往</code>。</p><p><img src="https://img.slarker.me/wiki/synology_install_12_QW8Tiz.png" alt="synology_install_12_QW8Tiz"></p><p>选择 <code>不用了，谢谢</code>。</p><p><img src="https://img.slarker.me/wiki/synology_install_13_Ict3Zl.png" alt="synology_install_13_Ict3Zl"></p><p>选择 <code>不用了，谢谢</code>。</p><p><img src="https://img.slarker.me/wiki/synology_install_14_C6AnwM.png" alt="synology_install_14_C6AnwM"></p><p>选择 <code>放弃保护我的账户</code>。</p><p><img src="https://img.slarker.me/wiki/synology_install_15_8ZjZP5.png" alt="synology_install_15_8ZjZP5"></p><p>至此系统安装完成，你已经可以开始使用群晖了。</p>',
            37
          ),
        ])
    )
  );
}
const m = l(n, [["render", p]]);
export { y as __pageData, m as default };
