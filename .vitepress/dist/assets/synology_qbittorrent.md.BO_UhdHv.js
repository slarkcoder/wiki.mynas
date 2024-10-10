import {
  _ as e,
  c as t,
  a2 as c,
  o as d,
} from "./chunks/framework.eme8ZeBJ.js";
const g = JSON.parse(
    '{"title":"使用 Docker 安装 qBittorrent","description":"","frontmatter":{},"headers":[],"relativePath":"synology/qbittorrent.md","filePath":"synology/qbittorrent.md","lastUpdated":1725293933000}'
  ),
  r = { name: "synology/qbittorrent.md" };
function a(n, o, i, p, l, s) {
  return (
    d(),
    t(
      "div",
      null,
      o[0] ||
        (o[0] = [
          c(
            '<h1 id="使用-docker-安装-qbittorrent" tabindex="-1">使用 Docker 安装 qBittorrent <a class="header-anchor" href="#使用-docker-安装-qbittorrent" aria-label="Permalink to &quot;使用 Docker 安装 qBittorrent&quot;">​</a></h1><p>qBittorrent 是流行的 BT/PT 下载客户端，相比于套件版的 qBittorrent，Docker 版的 qBittorrent 更新比较及时，可自定义的配置项更多。所以如果能够使用 Docker，推荐优先使用 Docker 安装 qBittorrent。</p><h2 id="创建共享文件夹" tabindex="-1">创建共享文件夹 <a class="header-anchor" href="#创建共享文件夹" aria-label="Permalink to &quot;创建共享文件夹&quot;">​</a></h2><p>到 <code>控制面板</code> -&gt; <code>共享文件夹</code> 中创建一个共享文件夹，例如 <code>downloads</code>。</p><p><img src="https://img.slarker.me/wiki/M0XsNE_Tn3iNV.png" alt="M0XsNE_Tn3iNV"></p><p>在 <code>File Station</code> 中为其添加 <code>Everyone</code> 读写权限，允许所有用户访问。</p><p><img src="https://img.slarker.me/wiki/usto1pbr.j3k_zrCaWh.png" alt="usto1pbr.j3k_zrCaWh"></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p><strong>推荐使用 Docker 版的 qBittorrent</strong>。在 <code>Container Manager</code> -&gt; <code>注册表</code> 中搜索 qBittorrent，下载 <code>linuxserver/qbittorrent</code>，版本选择 <code>lastest</code>。</p><p><img src="https://img.slarker.me/wiki/nMKSxT_GlqIJJ.png" alt="nMKSxT_GlqIJJ"></p><p>下载完成后到映像中选中该映像，点击 <code>运行</code>。</p><p><img src="https://img.slarker.me/wiki/pmgmk5lz.v0r_jNjvUY.png" alt="pmgmk5lz.v0r_jNjvUY"></p><p>勾选 <code>启用自动重新启动</code>，点击 <code>下一步</code>。</p><p><img src="https://img.slarker.me/wiki/EthdqL_Q6dqGb.png" alt="EthdqL_Q6dqGb"></p><p>按图中所示映射端口号、文件夹（<code>-&gt;</code> 左边的为主机端口号、文件夹，右边的为容器端口号、文件夹）：</p><ul><li><code>50000</code> -&gt; <code>6881</code></li><li><code>8080</code> -&gt; <code>8080</code></li><li><code>/docker/qbittorrent/config</code> -&gt; <code>/config</code></li><li><code>/downloads</code> -&gt; <code>/downloads</code></li></ul><div class="warning custom-block"><p class="custom-block-title">注意</p><p>容器内部的端口号和文件夹一般都不需要修改，只需要修改主机端口号和文件夹即可。</p></div><p><img src="https://img.slarker.me/wiki/tq6kmU_F8XxK6.png" alt="tq6kmU_F8XxK6"></p><p>之后点击下一步，直到完成，qbittorrent 的 Docker 容器就已经启动了。默认的端口就是上面填写的 8080，使用 <code>NAS IP:8080</code> 访问。</p><h2 id="默认密码" tabindex="-1">默认密码 <a class="header-anchor" href="#默认密码" aria-label="Permalink to &quot;默认密码&quot;">​</a></h2><p>新版的 qbittorrent 默认密码需要到 <code>日志</code> 中查看，在该容器上面点击 <code>详情</code> 就可以看到 <code>日志</code> 标签，登录后可以修改密码。</p><p><img src="https://img.slarker.me/wiki/33GAu8_M5JVQF.png" alt="33GAu8_M5JVQF"></p><h2 id="修改监听端口" tabindex="-1">修改监听端口 <a class="header-anchor" href="#修改监听端口" aria-label="Permalink to &quot;修改监听端口&quot;">​</a></h2><p>qBittorrent 的默认监听端口是 <code>6881</code>，很多 PT 网站默认都屏蔽了这个端口，使用默认监听端口在 PT 种子的 Tracker 选项中会提示：<code>Port 6881 is blacklisted</code>。</p><p><img src="https://img.slarker.me/wiki/XN7fl7_1ZR9YM.png" alt="XN7fl7_1ZR9YM"></p><p>因此上面在安装的时候把容器的 <code>6881</code> 端口映射到了主机的 <code>50000</code> 端口，登录 qbittorrent 后需要在 <code>连接</code> 选项中，把默认的 <code>6881</code> 修改成上面的端口 <code>50000</code>，这样 PT 站点就可以正常下载了。当然你也可以映射到其他端口，前后保持一致即可。</p><p><img src="https://img.slarker.me/wiki/QKnTnt_AaPJdz.png" alt="QKnTnt_AaPJdz"></p><h2 id="解决-pt-下载被识别为盒子问题" tabindex="-1">解决 PT 下载被识别为盒子问题 <a class="header-anchor" href="#解决-pt-下载被识别为盒子问题" aria-label="Permalink to &quot;解决 PT 下载被识别为盒子问题&quot;">​</a></h2><p>可以参考这篇教程：<a href="/synology/macvlan.html">使用 macvlan 为 qBittorrent 设置独立 IP</a>。</p>',
            29
          ),
        ])
    )
  );
}
const h = e(r, [["render", a]]);
export { g as __pageData, h as default };
