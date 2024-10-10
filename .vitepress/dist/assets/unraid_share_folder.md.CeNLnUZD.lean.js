import {
  _ as o,
  c as a,
  a2 as c,
  o as d,
} from "./chunks/framework.eme8ZeBJ.js";
const u = JSON.parse(
    '{"title":"共享文件夹","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/share_folder.md","filePath":"unraid/share_folder.md","lastUpdated":1725293933000}'
  ),
  t = { name: "unraid/share_folder.md" };
function r(p, e, i, l, s, n) {
  return (
    d(),
    a(
      "div",
      null,
      e[0] ||
        (e[0] = [
          c(
            '<h1 id="共享文件夹" tabindex="-1">共享文件夹 <a class="header-anchor" href="#共享文件夹" aria-label="Permalink to &quot;共享文件夹&quot;">​</a></h1><h2 id="系统共享文件夹" tabindex="-1">系统共享文件夹 <a class="header-anchor" href="#系统共享文件夹" aria-label="Permalink to &quot;系统共享文件夹&quot;">​</a></h2><p>磁盘阵列第一次启动后会自动创建四个系统共享文件夹，默认也都会保存到磁盘阵列设备里。Unraid 默认的共享文件夹有四个：</p><ul><li><code>appdata</code>，用来保存默认的 Docker 应用设置，如果要从应用中心安装应用，这个会经常用到</li><li><code>domains</code>，默认的虚拟机虚拟磁盘文件夹</li><li><code>isos</code>，默认的 iso 镜像文件路径</li><li><code>system</code>，系统文件夹，一般用不到</li></ul><p><img src="https://img.slarker.me/wiki/TM4Sa3_q4MDrd.png" alt="TM4Sa3_q4MDrd"></p><p>共享文件夹前面显示黄色 ⚠️ 表示这个文件夹里的部分或者全部内容没有受到保护。如果你需要将这四个系统文件夹保存到 ZFS 里，可以在将 ZFS 创建好之后，将这几个系统文件夹的存储位置修改为 zfs，然后使用 Unraid 的文件管理器插件移动到 ZFS 阵列中。</p><div class="warning custom-block"><p class="custom-block-title">提示</p><p>如果需要移动系统文件夹到 ZFS 池，最好在设置中将 <code>Docker</code> 和 <code>虚拟机</code> 先停止之后再移动，避免移动过程中有新的数据写入，造成异常。移动完成之后再启动 <code>Docker</code> 和 <code>虚拟机</code>。</p></div><p>当系统文件夹都存到了 ZFS 池中，共享文件夹前面也会变成绿色的 ●。</p><p><img src="https://img.slarker.me/wiki/HgwXpJ_Av7txg.png" alt="HgwXpJ_Av7txg"></p><h2 id="主存储空间" tabindex="-1">主存储空间 <a class="header-anchor" href="#主存储空间" aria-label="Permalink to &quot;主存储空间&quot;">​</a></h2><p>共享文件夹默认的主存储空间为阵列，如果你的文件夹里的数据比较重要，可以在创建的时候选择存储到 ZFS 池中。</p><p><img src="https://img.slarker.me/wiki/tQETbL_qIWMQN.png" alt="tQETbL_qIWMQN"></p><p>对于已经存储到磁盘阵列中的共享文件夹，如果想要移动到 ZFS 池中，由于共享文件夹中的数据都是分散在阵列中的每块磁盘上面，手动移动的话会非常麻烦，可以借助 <code>unbalanced</code> 插件来归集和转移文件。</p><p><img src="https://img.slarker.me/wiki/cdMBN4_a2pARf.png" alt="cdMBN4_a2pARf"></p><h2 id="分配方法" tabindex="-1">分配方法 <a class="header-anchor" href="#分配方法" aria-label="Permalink to &quot;分配方法&quot;">​</a></h2><p>磁盘阵列中的共享文件夹有三种分配方法可选，默认为 <code>High-water</code>，还有 <code>填充</code> 和 <code>最多可用</code>。</p><p>下面是官方的帮助提示：</p><blockquote><p>此设置确定在创建新文件或目录时，Unraid OS 如何选择要使用的磁盘： High-water 选择编号最小且其可用空间仍高于当前 High Water 标记的磁盘。 High Water 标记用最大数据磁盘的大小除以 2 初始化。如果 没有磁盘具有高于当前 High Water 标记的可用空间，请将 High Water 标记除以 2，然后再次选择。</p></blockquote><blockquote><p>High-water 的目标是向每个磁盘写入尽可能多的数据（以便最大程度地 减少磁盘唤醒的频率），同时尝试在每个磁盘上保留相同数量的 可用空间（以便在整个阵列上均匀分布数据）。</p></blockquote><blockquote><p>填充 选择编号最小且可用空间仍高于当前最小可用空间设置 的磁盘。</p></blockquote><blockquote><p>最多可用 选择当前具有最大可用空间的磁盘。</p></blockquote><p>如果没有特殊需求，推荐使用默认的策略，可以最大限度减少磁盘唤醒频率。</p><h2 id="包含的磁盘" tabindex="-1">包含的磁盘 <a class="header-anchor" href="#包含的磁盘" aria-label="Permalink to &quot;包含的磁盘&quot;">​</a></h2><p>如果你想让共享文件夹只存储到某些指定的盘上面，也可以通过 <code>包含的磁盘</code> 和 <code>已排除的磁盘</code> 来实现。</p><p>比如，想让 downloads 文件夹只存储到 <code>Disk 4</code> 上面，可以在包含的磁盘中只勾选 <code>Disk 4</code>，同时在 <code>已排除的磁盘</code> 中将其它盘（<code>Disk 1</code>，<code>Disk 2</code>，<code>Disk 3</code>）都勾上。</p><p><img src="https://img.slarker.me/wiki/tVz0mH_A5OvNY.png" alt="tVz0mH_A5OvNY"></p>',
            26
          ),
        ])
    )
  );
}
const m = o(t, [["render", r]]);
export { u as __pageData, m as default };
