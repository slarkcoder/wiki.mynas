import {
  _ as s,
  c as e,
  a2 as i,
  o as p,
} from "./chunks/framework.eme8ZeBJ.js";
const k = JSON.parse(
    '{"title":"常见功能设置","description":"","frontmatter":{},"headers":[],"relativePath":"pve/basic.md","filePath":"pve/basic.md","lastUpdated":1727625406000}'
  ),
  t = { name: "pve/basic.md" };
function n(l, a, c, h, o, d) {
  return (
    p(),
    e(
      "div",
      null,
      a[0] ||
        (a[0] = [
          i(
            `<h1 id="常见功能设置" tabindex="-1">常见功能设置 <a class="header-anchor" href="#常见功能设置" aria-label="Permalink to &quot;常见功能设置&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">警告</p><p>如果你不明白自己在做什么，请不要随意修改 PVE 中的设置。</p></div><p>打开 <code>PVE</code> 管理后台，会提示登录，语言可以选择中文。</p><p><img src="https://img.slarker.me/wiki/k5c23woo.1me_CaGu6T.png" alt="k5c23woo.1me_CaGu6T"></p><h2 id="pve-系列教程" tabindex="-1">PVE 系列教程 <a class="header-anchor" href="#pve-系列教程" aria-label="Permalink to &quot;PVE 系列教程&quot;">​</a></h2><p>如果你是小白，想学习 PVE，推荐观看群友 <code>@红茶海</code> 的 <a href="https://space.bilibili.com/2093259559" target="_blank" rel="noreferrer">系列视频教程</a>。零基础入门，对小白友好！</p><p>哔哩哔哩：<a href="https://space.bilibili.com/2093259559" target="_blank" rel="noreferrer">喝红茶聊技术</a>。</p><h2 id="关闭虚拟机" tabindex="-1">关闭虚拟机 <a class="header-anchor" href="#关闭虚拟机" aria-label="Permalink to &quot;关闭虚拟机&quot;">​</a></h2><p>如果需要修改虚拟机设置，或者给虚拟机添加 USB 设备，需要 <strong>先关闭虚拟机</strong>。</p><p>关机有两种办法：可以直接在虚拟机中关闭系统（比如群晖系统的关机按钮），或者也可以如下图所示直接在 PVE 中点 <code>停止</code> 按钮关机。</p><p><img src="https://img.slarker.me/wiki/rg0napgj.nek_HdkpXP.png" alt="rg0napgj.nek_HdkpXP"></p><h2 id="查看配置" tabindex="-1">查看配置 <a class="header-anchor" href="#查看配置" aria-label="Permalink to &quot;查看配置&quot;">​</a></h2><p>在 PVE 中点击 <code>概要</code> 可以查看机器配置。</p><p><img src="https://img.slarker.me/wiki/TVR47P_lmekU7.png" alt="TVR47P_lmekU7"></p><p>机器的所有硬件资源（直通的设备除外）都由 PVE 来管理，包括内存，CPU，网卡，硬盘，USB 接口等等。</p><p>使用 PVE 安装的 All in one 系统，一般会将 SATA 控制器直通给 NAS，将部分网口（PVE 管理口不需要直通）直通给 iStoreOS（软路由），直通的设备就由对应的虚拟机直接管理。</p><h2 id="修改虚拟机内存" tabindex="-1">修改虚拟机内存 <a class="header-anchor" href="#修改虚拟机内存" aria-label="Permalink to &quot;修改虚拟机内存&quot;">​</a></h2><p>PVE 作为一个系统，本身也需要一些内存来稳定运行，所以分配内存的时候，所有虚拟机的内存容量之和不能超过物理内存容量，并且至少要预留 1G 的内存给 PVE。</p><p>以 8GB 的物理内存为例，预留 1GB 给 PVE，分配 1GB 给 iStoreOS，剩下的 6GB 都可以分配给群晖。</p><p>如果想修改内存大小，关闭虚拟机之后，修改对应的硬件设置。</p><p><img src="https://img.slarker.me/wiki/RH0SEa_yYOHAc.png" alt="RH0SEa_yYOHAc"></p><p>只修改 <code>内存</code> 这一项即可，<code>最小内存</code> 保持默认不需要修改。修改完成之后，启动虚拟机即可。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>这里的内存单位是 MB，1GB = 1024MB，可以按实际需求换算填写。</p><p>PVE 的内存分配逻辑是：虚拟机启动后 PVE 会立即分配设定的所有内存给虚拟机，因此在 PVE 中会看到内存占用很高，这是正常的。</p></div><p><img src="https://img.slarker.me/wiki/Snipaste_2024-05-30_21-55-21_Xr9i1g.png" alt="Snipaste_2024-05-30_21-55-21_Xr9i1g"></p><h2 id="添加外接-usb-设备" tabindex="-1">添加外接 USB 设备 <a class="header-anchor" href="#添加外接-usb-设备" aria-label="Permalink to &quot;添加外接 USB 设备&quot;">​</a></h2><p>所有的 USB 设备也都由 PVE 来管理，因此如果需要外接 USB 鼠标，USB 移动硬盘到虚拟机中，也要在 PVE 中设置。</p><p>在主板自带的 USB 接口插上你需要添加的 USB 设备。PVE 中对应的虚拟机关机之后，在 <code>硬件</code> 中添加 USB 设备。</p><p><img src="https://img.slarker.me/wiki/ild0aqcm.2ke_zbDS87.png" alt="ild0aqcm.2ke_zbDS87"></p><p>添加 USB 设备，<code>使用 USB 供应商</code> 或者 <code>使用 USB 端口</code>，只要能看到对应的设备都可以。选中设备后，点击添加。</p><p><img src="https://img.slarker.me/wiki/lhrb33rz.log_MnGdYR.png" alt="lhrb33rz.log_MnGdYR"></p><p>之后在 <code>硬件</code> 中就能看到多出来一个 <code>USB 设备</code>，启动虚拟机就能在虚拟机中看到相关的设备。</p><p><img src="https://img.slarker.me/wiki/1tvqmtss.mg3_REB9ey.png" alt="1tvqmtss.mg3_REB9ey"></p><h2 id="切换-dhcp" tabindex="-1">切换 DHCP <a class="header-anchor" href="#切换-dhcp" aria-label="Permalink to &quot;切换 DHCP&quot;">​</a></h2><p>PVE 在安装的时候，会要求设置静态 IP，如果装好后想要切换成 DHCP 的方式，自动从路由器获取 IP，可以打开 PVE 的 Shell 输入下面的命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入到 /etc/network</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/network</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修改之前，查看网络配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> interfaces</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修改为 DHCP</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s/addr/#addr/g&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s/gate/#gate/g&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s/static/dhcp/g&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> interfaces</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修改之后，查看网络配置，确认 vmbr0 由 static 变成了 dhcp 就可以了</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> interfaces</span></span></code></pre></div><p>修改完成可以重启 PVE 测试下。</p><h2 id="pve-如何关机" tabindex="-1">PVE 如何关机？ <a class="header-anchor" href="#pve-如何关机" aria-label="Permalink to &quot;PVE 如何关机？&quot;">​</a></h2><p>关机有两种办法：</p><ul><li>第一种是直接按一下 NAS 的电源键。</li><li>第二种是在 <code>PVE 控制台</code> -&gt; <code>PVE 节点</code> 中点 <code>关机</code> 按钮（注意：是关闭 PVE，不是关闭某个虚拟机）。</li></ul><p>这两种办法效果一样，都属于正常的关机操作，都会触发 PVE 的关机流程：PVE 会按开机顺序的倒序，依次关闭虚拟机，之后完成关机动作。关机过程需要几分钟，请耐心等待。</p><p><img src="https://img.slarker.me/wiki/20240530195417_eyKd7r.png" alt="20240530195417_eyKd7r"></p><h2 id="pve-频繁提示登录" tabindex="-1">PVE 频繁提示登录 <a class="header-anchor" href="#pve-频繁提示登录" aria-label="Permalink to &quot;PVE 频繁提示登录&quot;">​</a></h2><p>有时候会遇到 PVE 每隔几分钟就要求登录，这种情况一般都是系统本地时间不对导致的，可以用下面的命令解决：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>touch /etc/pve/authkey.pub</span></span>
<span class="line"><span>touch /etc/pve/authkey.pub.old</span></span></code></pre></div>`,
            44
          ),
        ])
    )
  );
}
const g = s(t, [["render", n]]);
export { k as __pageData, g as default };
