import {
  _ as d,
  c as r,
  a2 as i,
  o as t,
} from "./chunks/framework.eme8ZeBJ.js";
const u = JSON.parse(
    '{"title":"我的 Unraid 数据存储方案","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/storage.md","filePath":"unraid/storage.md","lastUpdated":1725293933000}'
  ),
  n = { name: "unraid/storage.md" };
function e(o, a, s, p, c, m) {
  return (
    t(),
    r(
      "div",
      null,
      a[0] ||
        (a[0] = [
          i(
            '<h1 id="我的-unraid-数据存储方案" tabindex="-1">我的 Unraid 数据存储方案 <a class="header-anchor" href="#我的-unraid-数据存储方案" aria-label="Permalink to &quot;我的 Unraid 数据存储方案&quot;">​</a></h1><p><img src="https://img.slarker.me/wiki/unraid_data.drawio_64Uonr.svg" alt="unraid_data.drawio_64Uonr"></p><p>Unraid 默认的阵列和 Raid0 类似，都可以把几块盘组成一个更大的存储空间，但是 Unraid 阵列的存储逻辑并不像 Raid0 那样把同一个文件分拆到多块硬盘上存储，而是按照文件的粒度将文件完整的保存到某块具体的磁盘上。带来的结果是读取速度不如 Raid0，最快读取速度也就是单盘最大读取速度，但是也带来了更好的安全性。如果某块磁盘损坏，只会丢失这块盘上的数据，并不会像 Raid0 那样导致整个阵列损毁。</p><p>Unraid 默认的阵列仅能通过添加校验盘来实现对数据的保护，但使用校验盘的缺点也很明显，那就是写入速度非常慢，仅能达到 50MB/s，对很多场景来说实在太慢了。自从 Unraid 6.12 原生加入了对 ZFS 的支持之后，Unraid 中也可以实现 Raid 功能了，默认的阵列里比较鸡肋的校验盘也就没有再使用的必要了。使用 ZFS 就可以实现 Raid 数据保护，Unraid 因此也补上了一大短板。</p><p>SSD 的优点是读写小文件快，多任务同时读写不会卡 IO，缺点是容量小。机械盘的优点是容量大，适合存储大容量电影，缺点是小文件读写慢，大量 BT/PT 容易产生读写卡 IO 导致 CPU 占用很高。使用 Unraid 可以结合多种不同的存储池以及充分利用 SSD 和机械盘的优点来使得整体的存储策略达到最优。</p><p><img src="https://img.slarker.me/wiki/j5TRr7_5rsTJn.png" alt="j5TRr7_5rsTJn"></p><p>Unraid 默认的系统共享文件夹有四个，分别是 system（docker images 镜像），appdata（docker 的配置数据），domains（虚拟机文件），isos（虚拟机镜像）。这四个共享文件夹体积不算大，如果不包含 Windows 虚拟机，加起来大概也就几十 GB。而且以大量的小文件为主，虽然数据重要性不算高，但是很多 docker 配置起来也比较麻烦，如果能存到 Raid 阵列里，那自然最好。</p><p>我自己的重要数据并不多，一些收藏的电子书，音乐，个人图片，文档等等，加起来也就 100G，且基本都是小文档，非常适合用 SSD 来组 Raid 存储。剩下的都是一些 BT/PT 下载的电影，这些大文件不需要使用 Raid，即便硬盘坏掉也影响不大。</p><p><img src="https://img.slarker.me/wiki/N7KjWs_97tokq.png" alt="N7KjWs_97tokq"></p><p>Unraid 支持硬盘休眠，如果有硬盘连续一段时间没有读写之后，可以自动休眠，在需要的时候也可以唤醒。如上图所示，休眠的磁盘会显示为灰色，正常工作的会显示绿色。这也是 Unraid 的阵列特性带来的好处，按照文件的粒度来存储可以让磁盘有更多的休眠机会。</p><p>我使用了两块 500G 的 SATA SSD 来组成 ZFS Raid1 存储池，用来存储系统创建的四个文件夹，以及我的重要数据。三块东芝 14TB 机械盘和一块 512G 的 SSD 组成了默认的阵列，用来存储电影和 TimeMachine 备份。这样做可以充分利用各种磁盘的优点，既保护了重要数据，也不浪费空间。</p><p>以上就是我的存储方案，你可以根据自己的存储需求，结合自己的硬盘容量，为自己的存储做好规划</p>',
            12
          ),
        ])
    )
  );
}
const g = d(n, [["render", e]]);
export { u as __pageData, g as default };
