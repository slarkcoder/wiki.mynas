import{_ as a,c as e,a2 as i,o as t}from"./chunks/framework.eme8ZeBJ.js";const g=JSON.parse('{"title":"使用命令行格式化硬盘","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/format.md","filePath":"unraid/format.md","lastUpdated":1725293933000}'),p={name:"unraid/format.md"};function d(n,s,o,l,c,h){return t(),e("div",null,s[0]||(s[0]=[i('<h1 id="使用命令行格式化硬盘" tabindex="-1">使用命令行格式化硬盘 <a class="header-anchor" href="#使用命令行格式化硬盘" aria-label="Permalink to &quot;使用命令行格式化硬盘&quot;">​</a></h1><p>在 Unraid 里，有时候需要把默认的 xfs 格式硬盘格式化成其它格式，可以通过命令行来完成格式化。</p><p>首先在命令行里使用下面的命令来查看设备列表：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fdisk</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span></span></code></pre></div><p>例如下面的 <code>/dev/sdb</code> 就是需要格式化的设备，在后面你也可以看到具体的容量。后续的命令中也请将 <code>/dev/sdb</code> 替换为自己的设备。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/bghptvyc.d0i_EJVLqo.png" alt="bghptvyc.d0i_EJVLqo"></p><p>如果你的硬盘容量不大（1TB 以内），可以直接使用下面的命令进行格式化，期间如果提示 <code>Proceed anyway</code>，输入 <code>y</code> 确认：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkfs.ext4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/sdb</span></span></code></pre></div><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/9p4EWH_F8wOao.png" alt="9p4EWH_F8wOao"></p><p>如果你的硬盘容量比较大，可以使用下面的命令格式化，会比较快：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkfs.ext4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -T</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> largefile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/sdb</span></span></code></pre></div><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/bz2dsgpw.4vf_BpqoLp.png" alt="bz2dsgpw.4vf_BpqoLp"></p>',12)]))}const k=a(p,[["render",d]]);export{g as __pageData,k as default};
