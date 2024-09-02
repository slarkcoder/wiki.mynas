import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.Dx5AVRXu.js";const c=JSON.parse('{"title":"给使用命令安装的 Docker 应用添加图标","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/app_icon.md","filePath":"unraid/app_icon.md","lastUpdated":1715591290000}'),n={name:"unraid/app_icon.md"},h=t(`<h1 id="给使用命令安装的-docker-应用添加图标" tabindex="-1">给使用命令安装的 Docker 应用添加图标 <a class="header-anchor" href="#给使用命令安装的-docker-应用添加图标" aria-label="Permalink to &quot;给使用命令安装的 Docker 应用添加图标&quot;">​</a></h1><p>在 Unraid 中，通过应用市场的模板来安装 Docker 应用，一般都会自带一个图标，Unraid 提供了非常直观的编辑 Docker 页面，可以很方便的修改这些图标。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/8lprAH_T3kK1n.png" alt="8lprAH_T3kK1n"></p><p>应用成功安装后，会将当前的设置都保存到 <code>xml</code> 模板文件中。比如以迅雷为例，其模板文件是这样的：</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;?</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xml</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">?&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Container</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Xunlei&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Repository</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;cnk3x/xunlei:latest&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Repository</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Registry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Network</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;bridge&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Network</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">MyIP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Shell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;sh&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Shell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Privileged</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;true&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Privileged</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Support</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Project</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Overview</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Category</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">WebUI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TemplateURL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;https://img.slarker.me/unraid/Xunlei_A.png&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ExtraParams</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;--restart=unless-stopped&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ExtraParams</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PostArgs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">CPUset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DateInstalled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;1709632637&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DateInstalled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DonateText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DonateLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Requires</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Config</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;WebUI&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2345&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tcp&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;WebUI&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Port&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;always&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Required</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Mask</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2345&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Config</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;downloads&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/xunlei/downloads&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;rw&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#x4E0B;&amp;#x8F7D;&amp;#x8DEF;&amp;#x5F84;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Path&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;always&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Required</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Mask</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;/mnt/user/downloads&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Config</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;data&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/xunlei/data&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;rw&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#x8FC5;&amp;#x96F7;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Data&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Path&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;always&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Required</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Mask</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;/mnt/user/appdata/xunlei&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>但是对于有些只能通过 Docker 命令或者脚本安装的应用，就不太方便去设置图标了。有没有办法去为这些应用添加图标呢？</p><h2 id="思路" tabindex="-1">思路 <a class="header-anchor" href="#思路" aria-label="Permalink to &quot;思路&quot;">​</a></h2><p>既然通过模板可以给 Docker 配置图标，而模板配置最终肯定是要转换成 Docker 的运行命令去执行的，所以模板中的参数应该也是以某种形式添加到 Docker 命令中了。能不能通过查看这些有图标的 Docker 的执行命令来照猫画虎给这些没有图标的 Docker 添加图标呢？所以问题就成了如何获取已运行 Docker 的运行命令。</p><p>比如 <code>xiaoyakeeper</code> 这个可以定期清理阿里云盘中转文件夹的守护应用，是通过脚本生成的 docker 应用，连运行命令都不知道是啥。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bash -c &quot;$(curl -s https://xiaoyahelper.zengge99.eu.org/aliyun_clear.sh| tail -n +2)&quot; -s 3</span></span></code></pre></div><h2 id="安装-nerd-tools-插件" tabindex="-1">安装 Nerd Tools 插件 <a class="header-anchor" href="#安装-nerd-tools-插件" aria-label="Permalink to &quot;安装 Nerd Tools 插件&quot;">​</a></h2><p>经过查询得知，使用 <code>runlike</code> 这个工具可以查看已运行容器（应用）的运行命令。但这个工具是基于 <code>Python3</code> 的，Unraid 默认没有带 <code>Python3</code> 环境，通过 <code>Nerd Tools</code> 这个插件就很容易解决。</p><blockquote><p>Unraid 并非基于常见的 Linux 发行版开发，而是基于 <code>Slackware</code> 这个古老的 Linux 定制而来，很多常用的包都没带，<code>Nerd Tools</code> 这个插件就集成了非常多常用的包，可以说是 Unraid 上面的包管理器。</p></blockquote><p>到应用市场安装这个插件：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/OqI14a_JpoEhS.png" alt="OqI14a_JpoEhS"></p><p>在插件中打开 <code>Nerd Tools</code> 后输入想安装的包的关键字，找到结果点应用就能自动装好：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/lNiuxh_6ayjQt.png" alt="lNiuxh_6ayjQt"></p><p>比如你还可以装一个命令行版的 <code>7z</code> 解压工具，以后就能直接在 <code>Unraid</code> 命令行解压缩文件了：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/6ga2hY_A5Lq9y.png" alt="6ga2hY_A5Lq9y"></p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/Wyg8cT_UJko7C.png" alt="Wyg8cT_UJko7C"></p><h2 id="查看-docker-运行命令" tabindex="-1">查看 Docker 运行命令 <a class="header-anchor" href="#查看-docker-运行命令" aria-label="Permalink to &quot;查看 Docker 运行命令&quot;">​</a></h2><p><code>Python3</code> 装好之后，可以安装 <code>runlike</code> 工具。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> runlike</span></span></code></pre></div><p>之后就可以查看安装命令了，比如查看 <code>Xunlei</code> 的安装命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 命令格式：runlike -p [docker 应用名称]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">runlike</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Xunlei</span></span></code></pre></div><blockquote><p>Xunlei 就是 docker 应用的名称，也是 xml 模板中的 <code>Name</code> 参数，也是 docker 运行命令中的 --name 参数。</p></blockquote><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/rhGgjq_E9KB3B.png" alt="rhGgjq_E9KB3B"></p><p>到这里，眼尖的朋友应该已经发现了，我们想要的参数已经出来了。就是这里的 <code>--label</code> 参数：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;net.unraid.docker.icon=https://img.slarker.me/unraid/Xunlei_A.png&#39;</span></span></code></pre></div><p>后面跟的 <code>https</code> 链接正是 Docker 应用的图标地址。接下来就是照猫画虎，先查看没有图标的 Docker 的运行命令，比如 <code>xiaoyakeeper</code>：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">runlike</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xiaoyakeeper</span></span></code></pre></div><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/ksJ35m_p9LAxA.png" alt="ksJ35m_p9LAxA"></p><p>把这个 docker 运行命令复制下来，然后把上面的图标链接 <code>--label</code> 参数给加上去，注意是把整行参数都加上：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">--label=&#39;net.unraid.docker.icon=https://img.slarker.me/unraid/Alist_encrypt_A.png&#39; \\</span></span></code></pre></div><p>上面这个参数我把图标链接设置成了 <code>https://img.slarker.me/unraid/Alist_encrypt_A.png</code> 。具体图标该怎么找可以查看 <a href="/unraid/custom_docker_icon.html">自定义 Docker 图标</a>。</p><p>图标链接参数加好之后是这样：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">docker run --name=xiaoyakeeper \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        --hostname=Tower \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        --env=TZ=Asia/Shanghai \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        --volume=/var/run/docker.sock:/var/run/docker.sock \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        --network=host \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        --privileged \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        --restart=always \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        --log-opt max-file=1 \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        --log-opt max-size=50m \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        --runtime=runc \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        --detach=true \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        --label=&#39;net.unraid.docker.icon=https://img.slarker.me/unraid/Alist_encrypt_A.png&#39; \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        alpine:3.18.2 \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        sh -c &#39;if [ -f /etc/xiaoya/aliyun_clear.sh ];then sh /etc/xiaoya/aliyun_clear.sh 0;else sleep 60;fi&#39;</span></span></code></pre></div><p>把之前的没有图标的 docker 删掉（不需要移除镜像），重新执行下加好参数的命令，新的 docker 就有图标啦！</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/vfssVa_IrpJq7.png" alt="vfssVa_IrpJq7"></p>`,39),l=[h];function p(k,e,E,d,r,g){return a(),i("div",null,l)}const y=s(n,[["render",p]]);export{c as __pageData,y as default};
