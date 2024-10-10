import {
  _ as d,
  c as e,
  a2 as o,
  o as a,
} from "./chunks/framework.eme8ZeBJ.js";
const g = JSON.parse(
    '{"title":"磁盘阵列和 ZFS","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/array.md","filePath":"unraid/array.md","lastUpdated":1725293933000}'
  ),
  p = { name: "unraid/array.md" };
function s(t, c, i, r, n, l) {
  return (
    a(),
    e(
      "div",
      null,
      c[0] ||
        (c[0] = [
          o(
            '<h1 id="磁盘阵列和-zfs" tabindex="-1">磁盘阵列和 ZFS <a class="header-anchor" href="#磁盘阵列和-zfs" aria-label="Permalink to &quot;磁盘阵列和 ZFS&quot;">​</a></h1><p>自从 Unraid 更新到 6.12 新增了对 ZFS 的支持，使用比较鸡肋的校验盘已经没什么必要了。虽然名字是 Unraid，但随着 Unraid 用户群体的扩大，加入 Raid 功能似乎也是早晚的事。这不 6.12 版本，ZFS 就来了！既然使用校验盘会导致写入慢，那就别用校验盘了，如果有 Raid 需求，直接用 ZFS 吧。</p><p><img src="https://img.slarker.me/wiki/y0l8wN_HiR8ug.png" alt="y0l8wN_HiR8ug"></p><p>在具体的设置阵列之前，我建议你可以先考虑清楚自己的数据有哪些是重要的，有哪些是不重要的，数据大概会有多少。针对不同的需求，看自己到底需要什么样的阵列比较合适。具体可以参考 <a href="/unraid/storage.html">我的 Unraid 数据存储方案</a>。</p><h2 id="磁盘阵列设备" tabindex="-1">磁盘阵列设备 <a class="header-anchor" href="#磁盘阵列设备" aria-label="Permalink to &quot;磁盘阵列设备&quot;">​</a></h2><p>尽管可以直接使用 ZFS，但 Unraid 要求默认的磁盘阵列设备里至少要有一块盘，否则阵列无法启动。</p><p>创建磁盘阵列很简单，直接在磁盘阵列设备中选中想要加入阵列的磁盘，点击最下方的 <code>启动</code> 按钮。</p><p><img src="https://img.slarker.me/wiki/AIPRrG_92gknm.png" alt="AIPRrG_92gknm"></p><p>如果有新盘加入需要格式化的话，启动按钮旁边会提示 <code>格式化</code>，勾选 <code>是的，我想这样做</code> 确认提示，点击 <code>格式化</code> 按钮，稍等便会格式化完成，阵列就会建好。</p><p><img src="https://img.slarker.me/wiki/5ayhbzsa.xp5_3HT1hg.png" alt="5ayhbzsa.xp5_3HT1hg"></p><p>Unraid 对加入磁盘阵列设备中的磁盘容量没有要求，不管容量大小，只要把磁盘加进来，就会把所有的盘的容量都聚合在一起。从容量上看，和 Raid0 的效果是一样的。但和 Raid0 不同的是，磁盘阵列设备实际在存储文件的时候和 Raid0 有非常大的区别。下面举个例子来说明区别：</p><blockquote><p>由单盘读写都为 150MB/s 的 <code>disk1</code>、<code>disk2</code> 两块 1TB 的机械盘组成 Raid0，总容量为 2TB。读写 Raid0 中的文件时，速度是两块盘叠加，理论速度可以达到 300MB/s。这是因为向 Raid0 中写入文件时，会把文件分成两份，分别写入 <code>disk1</code> 和 <code>disk2</code>，所以速度会叠加。由于文件会被分割存储，带来的坏处就是，任何一块 Raid0 磁盘损坏，都会导致所有数据丢失。</p></blockquote><blockquote><p>由单盘读写都为 150MB/s 的 <code>disk3</code>、<code>disk4</code> 两块 1TB 的机械盘组成 Unraid 的磁盘阵列，总容量为 2TB。读写磁盘阵列中的文件时，速度依然是单盘读写速度 150MB/s。这是因为向磁盘阵列中写入文件时，Unraid 会根据文件夹的分配策略，来决定文件应该存储到 <code>disk3</code> 还是 <code>disk4</code>。也就是说磁盘阵列是按照文件的粒度来分配的。对于具体的某个文件，只会存储到 <code>disk3</code> 或者 <code>disk4</code>，而不会像 Raid0 那样，文件的一部分在 <code>disk1</code>，另一部分在 <code>disk2</code>。这样做虽然速度不如 Raid0，但同时也有好处：任何一块阵列设备中的磁盘损坏，不会影响其他盘上的数据。</p></blockquote><h2 id="zfs-池" tabindex="-1">ZFS 池 <a class="header-anchor" href="#zfs-池" aria-label="Permalink to &quot;ZFS 池&quot;">​</a></h2><blockquote><p>关于 ZFS，这里有一篇不错的博客，有兴趣可以看看。<a href="https://www.eaimty.com/2020/zfs-file-system/" target="_blank" rel="noreferrer">ZFS──瑞士军刀般的文件系统</a></p></blockquote><p>如果你需要创建 ZFS 池设备，点击 <code>添加池</code>，输入池名称，选择所需的插槽数量（也就是你需要在池中加入盘的数量），点击 <code>添加</code>。</p><p><img src="https://img.slarker.me/wiki/jqqYA1_ARC9vg.png" alt="jqqYA1_ARC9vg"></p><p>然后将需要加的盘都添加到池里，这里我添加了两块 240G 的 SSD。</p><p><img src="https://img.slarker.me/wiki/Db7kmK_jmZUA7.png" alt="Db7kmK_jmZUA7"></p><p>点击池名称，进去可以修改文件系统类型，选择好之后点击应用。</p><p><img src="https://img.slarker.me/wiki/kCER3g_b261cx.png" alt="kCER3g_b261cx"></p><p>回到主界面启动阵列就可以了，如果提示需要格式化，参考上面的磁盘阵列设备 <code>格式化</code> 部分操作。</p><h2 id="重置阵列" tabindex="-1">重置阵列 <a class="header-anchor" href="#重置阵列" aria-label="Permalink to &quot;重置阵列&quot;">​</a></h2><p>当你需要向阵列中添加新盘，先停止阵列，直接选择新盘再启动就可以，添加新盘不需要重置阵列！</p><p>当你需要从阵列中移除掉某块磁盘时，需要重置阵列。重置不会影响数据，但你最好提前确认下，移除的这块盘里没有什么重要数据，如果有的话，可以提前先把数据转移到别的盘上再从阵列中移除。</p><p>如果你没有重置阵列，直接关机把盘从阵列中拿出来，下次启动的时候也会直接提示 <code>缺少磁盘</code>。</p><p><img src="https://img.slarker.me/wiki/sulnw1fa.l4y_bRJLbc.png" alt="sulnw1fa.l4y_bRJLbc"></p><p>重置阵列在 <code>工具</code> -&gt; <code>新配置</code> 中按下图操作：</p><p><img src="https://img.slarker.me/wiki/yspp5dbz.1y2_p2CBbG.png" alt="yspp5dbz.1y2_p2CBbG"></p><p>重置之后，磁盘阵列就和新的一样，你可以按之前的设置，把现有的磁盘都加回来再启动就行了。</p><p>需要注意的是，重置之后，磁盘 <code>自动启动</code> 和 <code>休眠</code> 都会恢复到默认关闭状态，如果需要可以重新设置。</p><p><img src="https://img.slarker.me/wiki/2szluszr.ewq_Vgfry4.png" alt="2szluszr.ewq_Vgfry4"></p><p>另外有部分共享文件夹的设置可能会因为重置阵列而受到影响，需要你自己确认下，比如 <code>新文件和文件夹的主存储空间</code>，<code>包含的磁盘</code>，<code>已排除的磁盘</code> 这几个设置。</p><p><img src="https://img.slarker.me/wiki/HbVpkp_s83htT.png" alt="HbVpkp_s83htT"></p>',
            34
          ),
        ])
    )
  );
}
const h = d(p, [["render", s]]);
export { g as __pageData, h as default };
