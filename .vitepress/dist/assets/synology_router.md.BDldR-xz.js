import{_ as c,c as e,a2 as p,o as a}from"./chunks/framework.eme8ZeBJ.js";const n=JSON.parse('{"title":"虚拟旁路由 (iStoreOS)","description":"","frontmatter":{},"headers":[],"relativePath":"synology/router.md","filePath":"synology/router.md","lastUpdated":null}'),t={name:"synology/router.md"};function d(r,o,i,l,s,g){return a(),e("div",null,o[0]||(o[0]=[p('<h1 id="虚拟旁路由-istoreos" tabindex="-1">虚拟旁路由 (iStoreOS) <a class="header-anchor" href="#虚拟旁路由-istoreos" aria-label="Permalink to &quot;虚拟旁路由 (iStoreOS)&quot;">​</a></h1><p>旁路由可以方便的设置代理，解决不少由于网络导致的问题，比如 docker 镜像下载缓慢，刮削失败等等。虽然群晖的虚拟机效率不如 PVE、Unraid，好在软路由本身所需要的资源也不多，所以虚拟一个旁路由也没啥问题。本篇教程就介绍如何在群晖上安装 iStoreOS 作为旁路由来用。</p><h2 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-label="Permalink to &quot;准备&quot;">​</a></h2><ul><li>在套件中心安装 <code>Virtual Machine Manager</code> 套件</li><li><code>在控制面板</code> -&gt; <code>网络</code> -&gt; <code>网络界面</code> -&gt; <code>管理</code> -&gt; <code>Open vSwitch 设置</code> 中 <code>启用 Open vSwitch</code></li><li><a href="https://fw.koolcenter.com/iStoreOS/x86_64/" target="_blank" rel="noreferrer">下载 iStoreOS 镜像</a>（x86-64），并解压备用</li></ul><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/cfzEGv_4gHGyD.png" alt="cfzEGv_4gHGyD"></p><p>打开 <code>Virtual Machine Manager</code> 后确认条件都符合要求。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/glugn1ff.4dk_AkTpCf.png" alt="glugn1ff.4dk_AkTpCf"></p><h2 id="上传映像" tabindex="-1">上传映像 <a class="header-anchor" href="#上传映像" aria-label="Permalink to &quot;上传映像&quot;">​</a></h2><p>在 <code>Virtual Machine Manager</code> 中选择 <code>映像</code> -&gt; <code>硬盘映像</code> -&gt; <code>新增</code> -&gt; <code>从计算机</code>，选择刚才解压得到的 <code>img</code> 镜像，点击 <code>下一步</code>。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/y2oLZV_ly9fNJ.png" alt="y2oLZV_ly9fNJ"></p><p><code>选择存储空间</code>，并点击 <code>完成</code>。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/1HIiiM_6V8Kcn.png" alt="1HIiiM_6V8Kcn"></p><h2 id="创建虚拟机" tabindex="-1">创建虚拟机 <a class="header-anchor" href="#创建虚拟机" aria-label="Permalink to &quot;创建虚拟机&quot;">​</a></h2><p>在 <code>虚拟机</code> 中 <code>新增</code> -&gt; <code>导入</code> -&gt; <code>从硬盘映像导入</code>，点击下一步。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/xmmaoviz.vor_oSWUbR.png" alt="xmmaoviz.vor_oSWUbR"></p><p>选择存储空间后，按下图所示配置虚拟机，点击下一步。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/rorp4X_my8nh8.png" alt="rorp4X_my8nh8"></p><p>虚拟盘 1 选择 <code>iStoreOS 映像</code>，点击下一步。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/Xn5kA8_ISahgO.png" alt="Xn5kA8_ISahgO"></p><p>网络保持默认。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/DFbDfX_zxHIMh.png" alt="DFbDfX_zxHIMh"></p><p>如果有需要，可以把自动启动打开。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/H92UrH_Lf1mbZ.png" alt="H92UrH_Lf1mbZ"></p><p>分配电源管理权限把当前用户和 <code>admin</code> 勾上就行。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/UUjFFA_SD45HA.png" alt="UUjFFA_SD45HA"></p><p>最后检查设置没问题，可以勾上 <code>创建后开启虚拟机</code>，点击完成，虚拟机就会启动。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/gURGIE_0kWRQP.png" alt="gURGIE_0kWRQP"></p><p>等 iStoreOS 虚拟机状态变为运行中，就可以到路由器中查找 iStoreOS 的 IP 了。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/Jytj19_YjWu7J.png" alt="Jytj19_YjWu7J"></p><h2 id="设置旁路由" tabindex="-1">设置旁路由 <a class="header-anchor" href="#设置旁路由" aria-label="Permalink to &quot;设置旁路由&quot;">​</a></h2><p>因为我们装的 iStoreOS 只有一个虚拟网卡，开机后会自动从主路由获取 IP 地址。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/P5fuml_LHABaf.png" alt="P5fuml_LHABaf"></p><p>浏览器打开该 IP，就可以登录旁路由了。默认用户名/密码：root/password。</p><p>登录之后，直接点击首页的网络向导，设置为旁路由模式。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/si1yxa1r.ke0_ncNe0K.png" alt="si1yxa1r.ke0_ncNe0K"></p><p>点击 <code>配置为旁路由</code>。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/BXn4qF_39KVlS.png" alt="BXn4qF_39KVlS"></p><p>可以直接点 <code>自动配置</code>。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/pbi1225x.sig_qD2m9X.png" alt="pbi1225x.sig_qD2m9X"></p><p>点击 <code>点此刷新</code>，会自动刷新当前连接信息，点击 <code>自动填写</code>。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/0qsqklj0.le0_yaUwUg.png" alt="0qsqklj0.le0_yaUwUg"></p><p>如果需要修改旁路由 IP，可以在这里修改，关闭 <code>提供 DHCPv4 服务</code>，打开 <code>开启 NAT</code>，最后点击 <code>保存配置</code>。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/hs35odhz.4ej_49Iqxd.png" alt="hs35odhz.4ej_49Iqxd"></p><p>到这里旁路由就设置好了。</p><h2 id="安装代理插件" tabindex="-1">安装代理插件 <a class="header-anchor" href="#安装代理插件" aria-label="Permalink to &quot;安装代理插件&quot;">​</a></h2><p>由于 iStoreOS 是国内公司开发的系统，默认并不含有代理功能。如有代理需求，可以看这里：</p><p><a href="/basic/question.html#istoreos代理插件到哪里下载">iStoreOS 代理插件到哪里下载？</a></p><h2 id="群晖使用旁路由" tabindex="-1">群晖使用旁路由 <a class="header-anchor" href="#群晖使用旁路由" aria-label="Permalink to &quot;群晖使用旁路由&quot;">​</a></h2><p>可以直接到 <code>控制面板</code> -&gt; <code>网络</code> -&gt; <code>网络界面</code> 中编辑网络配置，切换成 <code>手动设置网络配置</code>。</p><p>将群晖的 IP 修改为 <code>静态 IP</code>，DNS 和网关都修改为 <code>旁路由的 IP</code>，点击确定。</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/ymbwcH_uCEhsy.png" alt="ymbwcH_uCEhsy"></p><h2 id="外网访问端口转发问题" tabindex="-1">外网访问端口转发问题 <a class="header-anchor" href="#外网访问端口转发问题" aria-label="Permalink to &quot;外网访问端口转发问题&quot;">​</a></h2><p>如果你有公网 IP，此时群晖也通过旁路由上网，在端口转发的时候需要注意：</p><blockquote><p>先从主路由转发端口到旁路由，再从旁路由转发端口到群晖。</p></blockquote><p>比如，此时主路由为：192.168.2.1，旁路由为：192.168.2.147，群晖为：192.168.2.143。</p><p>端口转发就要先从 192.168.2.1 转发到 192.168.2.147，再从 192.168.2.147 转发到 192.168.2.143。</p><p>旁路由的端口转发应该这样设置，在 <code>网络</code> -&gt; <code>防火墙</code> -&gt; <code>端口转发</code> 中添加类似于下面这样的规则：</p><p><img src="https://img-1255332810.cos.ap-chengdu.myqcloud.com/t2k2iqrl.ipr_hz2Q17.png" alt="t2k2iqrl.ipr_hz2Q17"></p>',58)]))}const h=c(t,[["render",d]]);export{n as __pageData,h as default};
