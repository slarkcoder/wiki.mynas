import{_ as a,c as e,o as r,a4 as d}from"./chunks/framework.BOW58p_D.js";const u=JSON.parse('{"title":"我的 Unraid 使用体验","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/user_experience.md","filePath":"unraid/user_experience.md","lastUpdated":1715591290000}'),i={name:"unraid/user_experience.md"},o=d('<h1 id="我的-unraid-使用体验" tabindex="-1">我的 Unraid 使用体验 <a class="header-anchor" href="#我的-unraid-使用体验" aria-label="Permalink to &quot;我的 Unraid 使用体验&quot;">​</a></h1><p>从接触 Unraid 到现在，我使用 Unraid 也有两年的时间了。总体感觉是这个系统的优缺点都非常鲜明，不管是和专业的虚拟化平台（PVE，ESXi）还是和常见的 NAS 系统（群晖，威联通）相比，都有很多非常值得探讨的地方。本文就从易用性、磁盘阵列和文件系统、权限控制、Docker 和虚拟机、适合的场景等方面来聊聊 Unraid。</p><h2 id="易用性" tabindex="-1">易用性 <a class="header-anchor" href="#易用性" aria-label="Permalink to &quot;易用性&quot;">​</a></h2><p>Unraid 默认语言是英文，但官方也支持中文，需要从应用中心安装中文插件。这就涉及到一个问题，由于 Unraid 的官方服务器位于国外，所以国内连接可能比较慢，或者干脆就连不上。如果想要流畅的使用 Unraid，可以说科学的网络环境是必须要解决的问题。尤其是 Unraid 绝大多数应用都是 Docker 应用，国内的 Docker 镜像服务器提供的源也并不一定很全。解决这个问题最好的办法就是通过 openwrt 主路由或者旁路由进行代理，具体可以看我写的这篇教程：<a href="https://slarker.me/unraid-openwrt-network-proxy/" target="_blank" rel="noreferrer">使用 OpenWRT 解决 Unraid 应用下载缓慢</a>。</p><p>Unraid 的控制面板设计的比较清晰明了，在仪表板这一个页面就可以查看 NAS 的几乎所有状态。CPU，GPU，内存，网络，磁盘阵列，Docker，虚拟机，共享文件夹，外接的 UPS 等都一览无余。并且 Docker 和虚拟机的基本的操作（启动，暂停等等）都可以直接在这个页面完成。模块化的布局即便对于新手来说也很容易上手。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/EFOSYD_vwE4cU.png" alt="EFOSYD_vwE4cU"></p><p>作为一个上手并不难的系统，Unraid 的帮助系统也非常好用，如果你对某项菜单有疑问，可以直接在对应的菜单上出现 <code>?</code> 的时候点击，或者直接点开系统右上角的 <code>?</code> 来打开帮助指示器，相关的设置就会显示出来详细的解释供你参考。看完帮助之后，再点一次就会关闭这些帮助信息。推荐大家在遇到问题的时候优先查看这个帮助，通常情况下都非常有用。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/WcAGV9_JJb9Qc.png" alt="WcAGV9_JJb9Qc"></p><h2 id="磁盘阵列和文件系统" tabindex="-1">磁盘阵列和文件系统 <a class="header-anchor" href="#磁盘阵列和文件系统" aria-label="Permalink to &quot;磁盘阵列和文件系统&quot;">​</a></h2><p>从 Unraid 的名字就可以看出来，这是一个没有 Raid 的的 NAS 系统，尽管 Unraid 支持添加校验盘可以达到类似 Raid 5 的效果，但通常添加校验盘之后，组成的磁盘阵列读写速度并不理想（在没有缓存的情况下写入速度只有 50MB/s 左右），和 Raid 5 依然有不小的差距，虽然支持速度更快的 SSD 来作为缓存，但缓存的加入又给使用者带来了更高的门槛。</p><p>因为没有 Raid ，Unraid 会把所有的硬盘都加到同一个磁盘阵列中，总容量相当于所有硬盘容量之和。通过对共享文件夹包含磁盘的设置，我们也可以很轻松的将某个文件夹存到指定的硬盘中，这种做法在使用 SSD + HDD 组成的磁盘阵列时非常有用。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/TgJx1z_jpbfl8.png" alt="TgJx1z_jpbfl8"></p><p>HDD 的缺点是读写小文件比较慢，而 SSD 的优点恰恰是读写小文件非常快。因此像是 Unraid 系统自动创建的四个文件夹（appdata、domains、isos、system）都适合只存储到 SSD 里，而用来作为下载（比如 downloads）的或者存储影音（比如 media）的文件夹，都比较适合存储到 HDD 里，像是存储照片（比如 photos）的文件夹，小文件非常多，适合存储到 SSD 里。</p><p>需要提一嘴的是，最好在创建文件夹的时候，就把这个文件夹打算存到哪里规划好。因为 Unraid 默认会把文件夹存到所有硬盘里，也就是每个硬盘都可能保存有这个文件夹的一部分。等到使用了一段时间之后再去改将会非常麻烦，因为这个时候，文件夹里的文件会散落在所有的硬盘上，手动合并比较麻烦。</p><p>打开官方的文件管理器插件 <code>Dynamix File Manager</code> ，可以看到 <code>disk1</code> 、<code>disk2</code> 这种单个磁盘，Unraid 将所有磁盘都挂载到了 <code>/mnt </code> 路径下面 （ <code>Dynamix File Manager</code> 默认打开的就是这个路径），所有的共享文件夹都在 <code>/mnt/user</code> 这个路径下面。如果你想对某个磁盘里的文件进行操作，那就从 <code>/mnt/disk*</code> 这种位置进入。如果你想对某个共享文件夹进行操作，那就从 <code>/mnt/user</code> 这种位置进入。</p><p>Unraid 的文件存储分配策略有三种，<code>High-water</code> 、<code>填满</code>、<code>高可用</code>，如果你想详细了解这些策略的细节，不妨打开 Unraid 的帮助菜单具体了解，这里就不赘述。</p><h2 id="权限控制" tabindex="-1">权限控制 <a class="header-anchor" href="#权限控制" aria-label="Permalink to &quot;权限控制&quot;">​</a></h2><p>Unraid 对于文件权限的控制非常简陋，仅能满足非常基础的文件共享需求，只能通过对用户或用户组进行简单的设置（无访问权限，只读，读/写），在这一点上远不如群晖做的精细。对于应用的权限控制压根没有。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/E03aFE_QhwPy6.png" alt="E03aFE_QhwPy6"></p><h2 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-label="Permalink to &quot;Docker&quot;">​</a></h2><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/Ry8UWJ_Og694I.png" alt="Ry8UWJ_Og694I"></p><p>Unraid 自带的 Docker 管理面板非常直观，应用的基本信息在面板里都可以直接看到，如果想看到更多信息，还可以点击右上角的 <code>基本视图/高级视图</code> 进行切换。相比于一些其他的 NAS 系统自带的 Docker 管理功能比较简陋，可能还需要安装一些第三方的管理面板（比如 Portainer），Unraid 自带的就足够好用。</p><p>由于 Unraid 的应用绝大多数都是第三方的 Docker 应用，像是照片同步备份这种功能也只能使用第三方的解决方案，比如 PhotoPrism、immich 等等，需要用户自行部署。对于一些不熟悉 Docker 的用户来说，上手难度较高。针对这种问题，Unraid 的应用中心提供了大量的常见应用模板，相当多的应用可以做到不用修改配置即可一键安装，降低了新手的上手门槛。</p><p>但若想使用好 Unraid，仅仅依靠应用中心这些现成的模板还是稍显不够，你总会在使用中遇到各种各样的问题，有能力的最好还是学习一些如何使用 Docker 的基础教程。而且目前 Docker 可以说已经成为了 NAS 的基础功能，缺少了 Docker，NAS 就像是具有先天缺陷一样不完整。单纯依靠厂商的力量，无法满足用户各种各样的需求，NAS 系统支持 Docker 是必然的选择。所以说学会了 Docker，即便将来换个其它的 NAS 系统，也一样可以轻松上手。</p><h2 id="虚拟机" tabindex="-1">虚拟机 <a class="header-anchor" href="#虚拟机" aria-label="Permalink to &quot;虚拟机&quot;">​</a></h2><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/pay8uO_5j9V7U.png" alt="pay8uO_5j9V7U"></p><p>Unraid 的虚拟机相比 PVE 和 ESXi 来说非常易用。因为 Unraid 的特点就是不针对某个平台去开发，硬件兼容性非常好，不管是老的平台还是很新的 x86 平台，不管是 AMD 还是 Intel， Unraid 都能支持的非常好，最新的 Unraid 6.12.2 版本的 Linux 内核也已经更新到了 6.1.36。</p><p>虚拟机比较重要的一点是性能损耗，根据网上的资料来看，Unraid 虚拟机采用和 PVE 一样的 KVM 实现，效率也差不多，大约有 5% 左右的性能损失，这点不如 EXSi 的 VMware 表现优秀。</p><p>硬件直通是玩虚拟机经常需要用到的功能，把硬件直通给虚拟机，可以发挥出硬件最佳的性能。Unraid 的硬件直通相比 PVE、ESXi 来说简直不要太方便，直接在系统设备里打钩重启就可以直通。</p><p>在 Unraid 里安装虚拟机不需要转换成专门的格式，常见的 img，iso 镜像都可以直接使用，不像 PVE 和 ESXi 一样要么用命令去转换，要么还得用转换工具，非常省事。</p><h2 id="unraid-适合的场景" tabindex="-1">Unraid 适合的场景 <a class="header-anchor" href="#unraid-适合的场景" aria-label="Permalink to &quot;Unraid 适合的场景&quot;">​</a></h2><p>看完这篇文章，相信你对 Unraid 的优缺点也有了一定的了解。</p><p>对于个人用户而言，如果你对磁盘阵列要求不高，对用户权限没有什么要求，或者说使用范围仅限在家庭内部，日常也就是存点照片和同步备份文件，下载观看电影，喜欢折腾 Docker 和虚拟机，那么组建一台使用 Unraid 的 NAS 是再合适不过了。</p><p>反之，但凡你对用户管理、权限控制以及易于使用的磁盘阵列（实现数据冗余）有较高的要求，比如大多数企业应用场景，Unraid 都不是很适合。</p><p>虽然在最新的 6.12 版本中，Unraid 加入了对 ZFS 的支持，可以实现 Raid 功能，但是目前实现的 ZFS 的功能比较有限，相信等待后续版本对 ZFS 的支持逐渐完善之后，Unraid 终将成为 NAS 系统里面的佼佼者。</p>',35),n=[o];function c(p,t,s,h,l,m){return r(),e("div",null,n)}const _=a(i,[["render",c]]);export{u as __pageData,_ as default};
