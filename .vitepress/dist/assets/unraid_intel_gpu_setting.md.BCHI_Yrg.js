import{_ as a,c as s,o as i,a4 as e}from"./chunks/framework.Dx5AVRXu.js";const g=JSON.parse('{"title":"Intel 第 11 代低功耗 CPU 开启核显硬解","description":"","frontmatter":{},"headers":[],"relativePath":"unraid/intel_gpu_setting.md","filePath":"unraid/intel_gpu_setting.md","lastUpdated":1713248316000}'),t={name:"unraid/intel_gpu_setting.md"},n=e(`<h1 id="intel-第-11-代低功耗-cpu-开启核显硬解" tabindex="-1">Intel 第 11 代低功耗 CPU 开启核显硬解 <a class="header-anchor" href="#intel-第-11-代低功耗-cpu-开启核显硬解" aria-label="Permalink to &quot;Intel 第 11 代低功耗 CPU 开启核显硬解&quot;">​</a></h1><blockquote><p>本教程适⽤于 Intel 第 11 代低功耗 CPU，诸如采用 N5095、N5105、N6005 的机器，12 代及以后的 CPU 不需要额外设置。</p></blockquote><h2 id="开启硬解" tabindex="-1">开启硬解 <a class="header-anchor" href="#开启硬解" aria-label="Permalink to &quot;开启硬解&quot;">​</a></h2><p>在 Unraid 的终端中输⼊下⾯的命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nano</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /boot/config/modprobe.d/i915.conf</span></span></code></pre></div><p>将下⾯的内容粘贴进去：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">options</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i915</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> force_probe=4e61</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">options</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i915</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable_guc=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span></code></pre></div><p>键盘按下 Ctrl + X（退出），再输⼊ Y（确认），回⻋保存。重启 Unraid。</p><p>后续的硬解设置可以参考 <a href="/unraid/jellyfin_harddecode.html">安装 Jellyfin 实现硬解 4K</a>。</p>`,9),l=[n];function p(h,o,d,r,c,k){return i(),s("div",null,l)}const u=a(t,[["render",p]]);export{g as __pageData,u as default};
