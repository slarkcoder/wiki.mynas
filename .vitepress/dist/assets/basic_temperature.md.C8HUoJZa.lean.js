import{_ as e,c as i,a2 as t,o as s}from"./chunks/framework.eme8ZeBJ.js";const k=JSON.parse('{"title":"温度监控","description":"","frontmatter":{},"headers":[],"relativePath":"basic/temperature.md","filePath":"basic/temperature.md","lastUpdated":1728523562000}'),r={name:"basic/temperature.md"};function p(n,a,l,h,o,d){return s(),i("div",null,a[0]||(a[0]=[t('<h1 id="温度监控" tabindex="-1">温度监控 <a class="header-anchor" href="#温度监控" aria-label="Permalink to &quot;温度监控&quot;">​</a></h1><p><img src="https://img.slarker.me/wiki/pexels-enginakyurt-143551_wD65iA.jpg" alt="pexels-enginakyurt-143551_wD65iA"></p><p>使用 NAS 的过程中，需要注意硬件的温度是否有异常。不管是 Unraid，PVE 还是群晖，都可以通过 CPU，主板和硬盘内置的温度传感器来获取到温度信息。</p><h2 id="温度范围" tabindex="-1">温度范围 <a class="header-anchor" href="#温度范围" aria-label="Permalink to &quot;温度范围&quot;">​</a></h2><p>以下数据范围来自 <a href="https://kimi.moonshot.cn" target="_blank" rel="noreferrer">Kimi AI</a> 和 <a href="https://tongyi.aliyun.com/" target="_blank" rel="noreferrer">通义 AI</a>。</p><ul><li>CPU 正常温度：30~85℃，空闲状态应在 50℃ 以下</li><li>机械硬盘正常温度：5~55℃，理想状态温度：30~45℃</li><li>SSD 正常温度：0~70℃，理想状态温度： 40~50℃</li></ul><h2 id="unraid" tabindex="-1">Unraid <a class="header-anchor" href="#unraid" aria-label="Permalink to &quot;Unraid&quot;">​</a></h2><p>在 Unraid 中，可以通过 <code>Dynamix System Temperature</code> 插件来显示 CPU 温度、主板温度。</p><p><img src="https://img.slarker.me/wiki/qvnmw4ec.zdy_llo4Mg.png" alt="qvnmw4ec.zdy_llo4Mg"></p><p>在主界面中，也可以看到硬盘的具体温度。</p><p><img src="https://img.slarker.me/wiki/o0mp3gub.w2v_9EQAIL.png" alt="o0mp3gub.w2v_9EQAIL"></p><p>Unraid 自带硬盘温度报警功能，当硬盘温度超过预警阈值，就会发出警告提示。默认的报警温度阈值（45℃）是 <strong>针对机械硬盘的</strong>，如果你的 NAS 里有 SSD，可以在主界面中点击具体的 SSD 磁盘编号，到磁盘的 <code>S.M.A.R.T</code> 设置中对 SSD 单独设置报警阈值，推荐将 SSD 设置为 55℃。</p><p><img src="https://img.slarker.me/wiki/nmtjsbjk.zv1_s0MTMW.png" alt="nmtjsbjk.zv1_s0MTMW"></p><h2 id="群晖" tabindex="-1">群晖 <a class="header-anchor" href="#群晖" aria-label="Permalink to &quot;群晖&quot;">​</a></h2><p>群晖的硬盘温度在存储管理器中 <code>HDD/SSD</code> 列表可以看到。</p><p><img src="https://img.slarker.me/wiki/IThojI_qKeYJS.png" alt="IThojI_qKeYJS"></p><h2 id="pve" tabindex="-1">PVE <a class="header-anchor" href="#pve" aria-label="Permalink to &quot;PVE&quot;">​</a></h2><p>对于使用 PVE 方案用户来说，如果是把硬盘控制器都直通给了 NAS 系统，那么硬盘温度就应该在该 NAS 系统里去查看。CPU 和主板温度，可以通过安装 <code>sensors</code> 来解决,具体教程可以参考：</p><p><a href="https://tendcode.com/subject/article/pve-cpu-temperature/" target="_blank" rel="noreferrer">PVE系统在概要中显示CPU温度的方法</a></p><p>如果觉得上述教程比较麻烦，这里也有个一键脚本可以方便的让 PVE 在主界面显示温度：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -q</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /root/pve_source.tar.gz</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;https://bbs.x86pi.cn/file/topic/2023-11-28/file/01ac88d7d2b840cb88c15cb5e19d4305b2.gz&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zxvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /root/pve_source.tar.gz</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/root/./pve_source</span></span></code></pre></div><h2 id="什么样的风扇转速最合适" tabindex="-1">什么样的风扇转速最合适？ <a class="header-anchor" href="#什么样的风扇转速最合适" aria-label="Permalink to &quot;什么样的风扇转速最合适？&quot;">​</a></h2><p>经常有人问我，NAS 风扇能否支持自动调速？这个问题实际想问的是：机箱的硬盘散热风扇能否根据硬盘温度来自动调节转速。当然，这也是最理想的情况。</p><p>要回答这个问题，首先得搞清楚，主板或者机箱背板有没有提供硬盘温度的 PWM 接口，答案是绝大部分主板或者机箱都没有。主板上的接口要么是 CPU PWM 接口，要么是主板 PWM 接口。如果直接把机箱硬盘散热风扇接到这两个接口上面，想实现根据硬盘温度风扇自动调速，显然是牛头不对马嘴。而大部分 NAS 机箱背板虽然有自带 4pin 的 PWM 接口，但是据我测试，几乎都无法实现自动调速，比如乔思伯 N2，虽然背板有 4pin 的风扇接口，但是即便不装硬盘，机箱风扇也是满速在转，所以这个 4pin 接口根本就没有调速功能。</p><p>既然主板和机箱背板都没法实现自动调速，那退而求其次的办法是什么呢？答案是让机箱风扇保持定速。只要能满足硬盘散热需求，同时噪音不大也可以。大部分主板都支持自定义转速，可以将机箱风扇接到主板上的 PWM 接口，到 BIOS 里将对应的 PWM 接口设置成自定义模式，手动调节合适的转速。对于不支持自定义转速的主板，可以搭配降速线将机箱风扇控制到合适的转速。</p>',25)]))}const m=e(r,[["render",p]]);export{k as __pageData,m as default};
