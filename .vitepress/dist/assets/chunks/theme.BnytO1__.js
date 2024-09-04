const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.B4JlWAEV.js","assets/chunks/framework.Dx5AVRXu.js"])))=>i.map(i=>d[i]);
import{d as g,o as c,c as f,r as d,n as L,a as U,t as E,b as y,w as h,e as _,T as Je,_ as k,u as Cn,i as Dn,f as Vn,g as Ye,h as w,j as p,k as u,p as N,l as B,m as te,q as Re,s as A,v as z,x as ge,y as oe,z as Xe,A as Qe,B as Mn,C as Nn,D as re,F as D,E as O,G as Ct,H as be,I as b,J as H,K as Dt,L as ye,M as K,N as ke,O as Bn,P as Vt,Q as Fe,R as On,S as Mt,U as $e,V as Rn,W as Fn,X as Hn,Y as Nt,Z as Bt,$ as jn,a0 as Un,a1 as zn,a2 as Gn,a3 as Wn}from"./framework.Dx5AVRXu.js";const qn=g({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(t){return(e,n)=>(c(),f("span",{class:L(["VPBadge",e.type])},[d(e.$slots,"default",{},()=>[U(E(e.text),1)])],2))}}),xn={key:0,class:"VPBackdrop"},Kn=g({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(t){return(e,n)=>(c(),y(Je,{name:"fade"},{default:h(()=>[e.show?(c(),f("div",xn)):_("",!0)]),_:1}))}}),Jn=k(Kn,[["__scopeId","data-v-54a304ca"]]),T=Cn;function Yn(t,e){let n,a=!1;return()=>{n&&clearTimeout(n),a?n=setTimeout(t,e):(t(),(a=!0)&&setTimeout(()=>a=!1,e))}}function He(t){return/^\//.test(t)?t:`/${t}`}function Ze(t){const{pathname:e,search:n,hash:a,protocol:s}=new URL(t,"http://a.com");if(Dn(t)||t.startsWith("#")||!s.startsWith("http")||!Vn(e))return t;const{site:o}=T(),r=e.endsWith("/")||e.endsWith(".html")?t:t.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,o.value.cleanUrls?"":".html")}${n}${a}`);return Ye(r)}function de({correspondingLink:t=!1}={}){const{site:e,localeIndex:n,page:a,theme:s,hash:o}=T(),r=w(()=>{var l,m;return{label:(l=e.value.locales[n.value])==null?void 0:l.label,link:((m=e.value.locales[n.value])==null?void 0:m.link)||(n.value==="root"?"/":`/${n.value}/`)}});return{localeLinks:w(()=>Object.entries(e.value.locales).flatMap(([l,m])=>r.value.label===m.label?[]:{text:m.label,link:Xn(m.link||(l==="root"?"/":`/${l}/`),s.value.i18nRouting!==!1&&t,a.value.relativePath.slice(r.value.link.length-1),!e.value.cleanUrls)+o.value})),currentLang:r}}function Xn(t,e,n,a){return e?t.replace(/\/$/,"")+He(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,a?".html":"")):t}const Qn=t=>(N("data-v-6ff51ddd"),t=t(),B(),t),Zn={class:"NotFound"},es={class:"code"},ts={class:"title"},ns=Qn(()=>p("div",{class:"divider"},null,-1)),ss={class:"quote"},as={class:"action"},os=["href","aria-label"],rs=g({__name:"NotFound",setup(t){const{theme:e}=T(),{currentLang:n}=de();return(a,s)=>{var o,r,i,l,m;return c(),f("div",Zn,[p("p",es,E(((o=u(e).notFound)==null?void 0:o.code)??"404"),1),p("h1",ts,E(((r=u(e).notFound)==null?void 0:r.title)??"PAGE NOT FOUND"),1),ns,p("blockquote",ss,E(((i=u(e).notFound)==null?void 0:i.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),p("div",as,[p("a",{class:"link",href:u(Ye)(u(n).link),"aria-label":((l=u(e).notFound)==null?void 0:l.linkLabel)??"go to home"},E(((m=u(e).notFound)==null?void 0:m.linkText)??"Take me home"),9,os)])])}}}),is=k(rs,[["__scopeId","data-v-6ff51ddd"]]);function Ot(t,e){if(Array.isArray(t))return fe(t);if(t==null)return[];e=He(e);const n=Object.keys(t).sort((s,o)=>o.split("/").length-s.split("/").length).find(s=>e.startsWith(He(s))),a=n?t[n]:[];return Array.isArray(a)?fe(a):fe(a.items,a.base)}function cs(t){const e=[];let n=0;for(const a in t){const s=t[a];if(s.items){n=e.push(s);continue}e[n]||e.push({items:[]}),e[n].items.push(s)}return e}function ls(t){const e=[];function n(a){for(const s of a)s.text&&s.link&&e.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&n(s.items)}return n(t),e}function je(t,e){return Array.isArray(e)?e.some(n=>je(t,n)):te(t,e.link)?!0:e.items?je(t,e.items):!1}function fe(t,e){return[...t].map(n=>{const a={...n},s=a.base||e;return s&&a.link&&(a.link=s+a.link),a.items&&(a.items=fe(a.items,s)),a})}function W(){const{frontmatter:t,page:e,theme:n}=T(),a=Re("(min-width: 960px)"),s=A(!1),o=w(()=>{const M=n.value.sidebar,P=e.value.relativePath;return M?Ot(M,P):[]}),r=A(o.value);z(o,(M,P)=>{JSON.stringify(M)!==JSON.stringify(P)&&(r.value=o.value)});const i=w(()=>t.value.sidebar!==!1&&r.value.length>0&&t.value.layout!=="home"),l=w(()=>m?t.value.aside==null?n.value.aside==="left":t.value.aside==="left":!1),m=w(()=>t.value.layout==="home"?!1:t.value.aside!=null?!!t.value.aside:n.value.aside!==!1),I=w(()=>i.value&&a.value),v=w(()=>i.value?cs(r.value):[]);function $(){s.value=!0}function S(){s.value=!1}function V(){s.value?S():$()}return{isOpen:s,sidebar:r,sidebarGroups:v,hasSidebar:i,hasAside:m,leftAside:l,isSidebarEnabled:I,open:$,close:S,toggle:V}}function us(t,e){let n;ge(()=>{n=t.value?document.activeElement:void 0}),oe(()=>{window.addEventListener("keyup",a)}),Xe(()=>{window.removeEventListener("keyup",a)});function a(s){s.key==="Escape"&&t.value&&(e(),n==null||n.focus())}}function ds(t){const{page:e,hash:n}=T(),a=A(!1),s=w(()=>t.value.collapsed!=null),o=w(()=>!!t.value.link),r=A(!1),i=()=>{r.value=te(e.value.relativePath,t.value.link)};z([e,t,n],i),oe(i);const l=w(()=>r.value?!0:t.value.items?je(e.value.relativePath,t.value.items):!1),m=w(()=>!!(t.value.items&&t.value.items.length));ge(()=>{a.value=!!(s.value&&t.value.collapsed)}),Qe(()=>{(r.value||l.value)&&(a.value=!1)});function I(){s.value&&(a.value=!a.value)}return{collapsed:a,collapsible:s,isLink:o,isActiveLink:r,hasActiveLink:l,hasChildren:m,toggle:I}}function fs(){const{hasSidebar:t}=W(),e=Re("(min-width: 960px)"),n=Re("(min-width: 1280px)");return{isAsideEnabled:w(()=>!n.value&&!e.value?!1:t.value?n.value:e.value)}}const Ue=[];function Rt(t){return typeof t.outline=="object"&&!Array.isArray(t.outline)&&t.outline.label||t.outlineTitle||"On this page"}function et(t){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const a=Number(n.tagName[1]);return{element:n,title:hs(n),link:"#"+n.id,level:a}});return ps(e,t)}function hs(t){let e="";for(const n of t.childNodes)if(n.nodeType===1){if(n.classList.contains("VPBadge")||n.classList.contains("header-anchor")||n.classList.contains("ignore-header"))continue;e+=n.textContent}else n.nodeType===3&&(e+=n.textContent);return e.trim()}function ps(t,e){if(e===!1)return[];const n=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[a,s]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;t=t.filter(r=>r.level>=a&&r.level<=s),Ue.length=0;for(const{element:r,link:i}of t)Ue.push({element:r,link:i});const o=[];e:for(let r=0;r<t.length;r++){const i=t[r];if(r===0)o.push(i);else{for(let l=r-1;l>=0;l--){const m=t[l];if(m.level<i.level){(m.children||(m.children=[])).push(i);continue e}}o.push(i)}}return o}function ms(t,e){const{isAsideEnabled:n}=fs(),a=Yn(o,100);let s=null;oe(()=>{requestAnimationFrame(o),window.addEventListener("scroll",a)}),Mn(()=>{r(location.hash)}),Xe(()=>{window.removeEventListener("scroll",a)});function o(){if(!n.value)return;const i=window.scrollY,l=window.innerHeight,m=document.body.offsetHeight,I=Math.abs(i+l-m)<1,v=Ue.map(({element:S,link:V})=>({link:V,top:vs(S)})).filter(({top:S})=>!Number.isNaN(S)).sort((S,V)=>S.top-V.top);if(!v.length){r(null);return}if(i<1){r(null);return}if(I){r(v[v.length-1].link);return}let $=null;for(const{link:S,top:V}of v){if(V>i+Nn()+4)break;$=S}r($)}function r(i){s&&s.classList.remove("active"),i==null?s=null:s=t.value.querySelector(`a[href="${decodeURIComponent(i)}"]`);const l=s;l?(l.classList.add("active"),e.value.style.top=l.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function vs(t){let e=0;for(;t!==document.body;){if(t===null)return NaN;e+=t.offsetTop,t=t.offsetParent}return e}const _s=["href","title"],gs=g({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(t){function e({target:n}){const a=n.href.split("#")[1],s=document.getElementById(decodeURIComponent(a));s==null||s.focus({preventScroll:!0})}return(n,a)=>{const s=re("VPDocOutlineItem",!0);return c(),f("ul",{class:L(["VPDocOutlineItem",n.root?"root":"nested"])},[(c(!0),f(D,null,O(n.headers,({children:o,link:r,title:i})=>(c(),f("li",null,[p("a",{class:"outline-link",href:r,onClick:e,title:i},E(i),9,_s),o!=null&&o.length?(c(),y(s,{key:0,headers:o},null,8,["headers"])):_("",!0)]))),256))],2)}}}),Ft=k(gs,[["__scopeId","data-v-53c99d69"]]),bs={class:"content"},ys={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},ks=g({__name:"VPDocAsideOutline",setup(t){const{frontmatter:e,theme:n}=T(),a=Ct([]);be(()=>{a.value=et(e.value.outline??n.value.outline)});const s=A(),o=A();return ms(s,o),(r,i)=>(c(),f("nav",{"aria-labelledby":"doc-outline-aria-label",class:L(["VPDocAsideOutline",{"has-outline":a.value.length>0}]),ref_key:"container",ref:s},[p("div",bs,[p("div",{class:"outline-marker",ref_key:"marker",ref:o},null,512),p("div",ys,E(u(Rt)(u(n))),1),b(Ft,{headers:a.value,root:!0},null,8,["headers"])])],2))}}),$s=k(ks,[["__scopeId","data-v-f610f197"]]),Is={class:"VPDocAsideCarbonAds"},ws=g({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(t){const e=()=>null;return(n,a)=>(c(),f("div",Is,[b(u(e),{"carbon-ads":n.carbonAds},null,8,["carbon-ads"])]))}}),Ss=t=>(N("data-v-cb998dce"),t=t(),B(),t),Ts={class:"VPDocAside"},Ps=Ss(()=>p("div",{class:"spacer"},null,-1)),Es=g({__name:"VPDocAside",setup(t){const{theme:e}=T();return(n,a)=>(c(),f("div",Ts,[d(n.$slots,"aside-top",{},void 0,!0),d(n.$slots,"aside-outline-before",{},void 0,!0),b($s),d(n.$slots,"aside-outline-after",{},void 0,!0),Ps,d(n.$slots,"aside-ads-before",{},void 0,!0),u(e).carbonAds?(c(),y(ws,{key:0,"carbon-ads":u(e).carbonAds},null,8,["carbon-ads"])):_("",!0),d(n.$slots,"aside-ads-after",{},void 0,!0),d(n.$slots,"aside-bottom",{},void 0,!0)]))}}),As=k(Es,[["__scopeId","data-v-cb998dce"]]);function Ls(){const{theme:t,page:e}=T();return w(()=>{const{text:n="Edit this page",pattern:a=""}=t.value.editLink||{};let s;return typeof a=="function"?s=a(e.value):s=a.replace(/:path/g,e.value.filePath),{url:s,text:n}})}function Cs(){const{page:t,theme:e,frontmatter:n}=T();return w(()=>{var m,I,v,$,S,V,M,P;const a=Ot(e.value.sidebar,t.value.relativePath),s=ls(a),o=Ds(s,q=>q.link.replace(/[?#].*$/,"")),r=o.findIndex(q=>te(t.value.relativePath,q.link)),i=((m=e.value.docFooter)==null?void 0:m.prev)===!1&&!n.value.prev||n.value.prev===!1,l=((I=e.value.docFooter)==null?void 0:I.next)===!1&&!n.value.next||n.value.next===!1;return{prev:i?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((v=o[r-1])==null?void 0:v.docFooterText)??(($=o[r-1])==null?void 0:$.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??((S=o[r-1])==null?void 0:S.link)},next:l?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((V=o[r+1])==null?void 0:V.docFooterText)??((M=o[r+1])==null?void 0:M.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((P=o[r+1])==null?void 0:P.link)}}})}function Ds(t,e){const n=new Set;return t.filter(a=>{const s=e(a);return n.has(s)?!1:n.add(s)})}const j=g({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(t){const e=t,n=w(()=>e.tag??(e.href?"a":"span")),a=w(()=>e.href&&Dt.test(e.href)||e.target==="_blank");return(s,o)=>(c(),y(H(n.value),{class:L(["VPLink",{link:s.href,"vp-external-link-icon":a.value,"no-icon":s.noIcon}]),href:s.href?u(Ze)(s.href):void 0,target:s.target??(a.value?"_blank":void 0),rel:s.rel??(a.value?"noreferrer":void 0)},{default:h(()=>[d(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Vs={class:"VPLastUpdated"},Ms=["datetime"],Ns=g({__name:"VPDocFooterLastUpdated",setup(t){const{theme:e,page:n,lang:a}=T(),s=w(()=>new Date(n.value.lastUpdated)),o=w(()=>s.value.toISOString()),r=A("");return oe(()=>{ge(()=>{var i,l,m;r.value=new Intl.DateTimeFormat((l=(i=e.value.lastUpdated)==null?void 0:i.formatOptions)!=null&&l.forceLocale?a.value:void 0,((m=e.value.lastUpdated)==null?void 0:m.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(s.value)})}),(i,l)=>{var m;return c(),f("p",Vs,[U(E(((m=u(e).lastUpdated)==null?void 0:m.text)||u(e).lastUpdatedText||"Last updated")+": ",1),p("time",{datetime:o.value},E(r.value),9,Ms)])}}}),Bs=k(Ns,[["__scopeId","data-v-1bb0c8a8"]]),Ht=t=>(N("data-v-1bcd8184"),t=t(),B(),t),Os={key:0,class:"VPDocFooter"},Rs={key:0,class:"edit-info"},Fs={key:0,class:"edit-link"},Hs=Ht(()=>p("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),js={key:1,class:"last-updated"},Us={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},zs=Ht(()=>p("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),Gs={class:"pager"},Ws=["innerHTML"],qs=["innerHTML"],xs={class:"pager"},Ks=["innerHTML"],Js=["innerHTML"],Ys=g({__name:"VPDocFooter",setup(t){const{theme:e,page:n,frontmatter:a}=T(),s=Ls(),o=Cs(),r=w(()=>e.value.editLink&&a.value.editLink!==!1),i=w(()=>n.value.lastUpdated),l=w(()=>r.value||i.value||o.value.prev||o.value.next);return(m,I)=>{var v,$,S,V;return l.value?(c(),f("footer",Os,[d(m.$slots,"doc-footer-before",{},void 0,!0),r.value||i.value?(c(),f("div",Rs,[r.value?(c(),f("div",Fs,[b(j,{class:"edit-link-button",href:u(s).url,"no-icon":!0},{default:h(()=>[Hs,U(" "+E(u(s).text),1)]),_:1},8,["href"])])):_("",!0),i.value?(c(),f("div",js,[b(Bs)])):_("",!0)])):_("",!0),(v=u(o).prev)!=null&&v.link||($=u(o).next)!=null&&$.link?(c(),f("nav",Us,[zs,p("div",Gs,[(S=u(o).prev)!=null&&S.link?(c(),y(j,{key:0,class:"pager-link prev",href:u(o).prev.link},{default:h(()=>{var M;return[p("span",{class:"desc",innerHTML:((M=u(e).docFooter)==null?void 0:M.prev)||"Previous page"},null,8,Ws),p("span",{class:"title",innerHTML:u(o).prev.text},null,8,qs)]}),_:1},8,["href"])):_("",!0)]),p("div",xs,[(V=u(o).next)!=null&&V.link?(c(),y(j,{key:0,class:"pager-link next",href:u(o).next.link},{default:h(()=>{var M;return[p("span",{class:"desc",innerHTML:((M=u(e).docFooter)==null?void 0:M.next)||"Next page"},null,8,Ks),p("span",{class:"title",innerHTML:u(o).next.text},null,8,Js)]}),_:1},8,["href"])):_("",!0)])])):_("",!0)])):_("",!0)}}}),Xs=k(Ys,[["__scopeId","data-v-1bcd8184"]]),Qs=t=>(N("data-v-e6f2a212"),t=t(),B(),t),Zs={class:"container"},ea=Qs(()=>p("div",{class:"aside-curtain"},null,-1)),ta={class:"aside-container"},na={class:"aside-content"},sa={class:"content"},aa={class:"content-container"},oa={class:"main"},ra=g({__name:"VPDoc",setup(t){const{theme:e}=T(),n=ye(),{hasSidebar:a,hasAside:s,leftAside:o}=W(),r=w(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(i,l)=>{const m=re("Content");return c(),f("div",{class:L(["VPDoc",{"has-sidebar":u(a),"has-aside":u(s)}])},[d(i.$slots,"doc-top",{},void 0,!0),p("div",Zs,[u(s)?(c(),f("div",{key:0,class:L(["aside",{"left-aside":u(o)}])},[ea,p("div",ta,[p("div",na,[b(As,null,{"aside-top":h(()=>[d(i.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":h(()=>[d(i.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":h(()=>[d(i.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[d(i.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[d(i.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[d(i.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):_("",!0),p("div",sa,[p("div",aa,[d(i.$slots,"doc-before",{},void 0,!0),p("main",oa,[b(m,{class:L(["vp-doc",[r.value,u(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),b(Xs,null,{"doc-footer-before":h(()=>[d(i.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),d(i.$slots,"doc-after",{},void 0,!0)])])]),d(i.$slots,"doc-bottom",{},void 0,!0)],2)}}}),ia=k(ra,[["__scopeId","data-v-e6f2a212"]]),ca=g({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(t){const e=t,n=w(()=>e.href&&Dt.test(e.href)),a=w(()=>e.tag||e.href?"a":"button");return(s,o)=>(c(),y(H(a.value),{class:L(["VPButton",[s.size,s.theme]]),href:s.href?u(Ze)(s.href):void 0,target:e.target??(n.value?"_blank":void 0),rel:e.rel??(n.value?"noreferrer":void 0)},{default:h(()=>[U(E(s.text),1)]),_:1},8,["class","href","target","rel"]))}}),la=k(ca,[["__scopeId","data-v-c9cf0e3c"]]),ua=["src","alt"],da=g({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(t){return(e,n)=>{const a=re("VPImage",!0);return e.image?(c(),f(D,{key:0},[typeof e.image=="string"||"src"in e.image?(c(),f("img",K({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:u(Ye)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,ua)):(c(),f(D,{key:1},[b(a,K({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),b(a,K({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):_("",!0)}}}),he=k(da,[["__scopeId","data-v-ab19afbb"]]),fa=t=>(N("data-v-b10c5094"),t=t(),B(),t),ha={class:"container"},pa={class:"main"},ma={key:0,class:"name"},va=["innerHTML"],_a=["innerHTML"],ga=["innerHTML"],ba={key:0,class:"actions"},ya={key:0,class:"image"},ka={class:"image-container"},$a=fa(()=>p("div",{class:"image-bg"},null,-1)),Ia=g({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(t){const e=ke("hero-image-slot-exists");return(n,a)=>(c(),f("div",{class:L(["VPHero",{"has-image":n.image||u(e)}])},[p("div",ha,[p("div",pa,[d(n.$slots,"home-hero-info-before",{},void 0,!0),d(n.$slots,"home-hero-info",{},()=>[n.name?(c(),f("h1",ma,[p("span",{innerHTML:n.name,class:"clip"},null,8,va)])):_("",!0),n.text?(c(),f("p",{key:1,innerHTML:n.text,class:"text"},null,8,_a)):_("",!0),n.tagline?(c(),f("p",{key:2,innerHTML:n.tagline,class:"tagline"},null,8,ga)):_("",!0)],!0),d(n.$slots,"home-hero-info-after",{},void 0,!0),n.actions?(c(),f("div",ba,[(c(!0),f(D,null,O(n.actions,s=>(c(),f("div",{key:s.link,class:"action"},[b(la,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):_("",!0),d(n.$slots,"home-hero-actions-after",{},void 0,!0)]),n.image||u(e)?(c(),f("div",ya,[p("div",ka,[$a,d(n.$slots,"home-hero-image",{},()=>[n.image?(c(),y(he,{key:0,class:"image-src",image:n.image},null,8,["image"])):_("",!0)],!0)])])):_("",!0)])],2))}}),wa=k(Ia,[["__scopeId","data-v-b10c5094"]]),Sa=g({__name:"VPHomeHero",setup(t){const{frontmatter:e}=T();return(n,a)=>u(e).hero?(c(),y(wa,{key:0,class:"VPHomeHero",name:u(e).hero.name,text:u(e).hero.text,tagline:u(e).hero.tagline,image:u(e).hero.image,actions:u(e).hero.actions},{"home-hero-info-before":h(()=>[d(n.$slots,"home-hero-info-before")]),"home-hero-info":h(()=>[d(n.$slots,"home-hero-info")]),"home-hero-info-after":h(()=>[d(n.$slots,"home-hero-info-after")]),"home-hero-actions-after":h(()=>[d(n.$slots,"home-hero-actions-after")]),"home-hero-image":h(()=>[d(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):_("",!0)}}),Ta=t=>(N("data-v-bd37d1a2"),t=t(),B(),t),Pa={class:"box"},Ea={key:0,class:"icon"},Aa=["innerHTML"],La=["innerHTML"],Ca=["innerHTML"],Da={key:4,class:"link-text"},Va={class:"link-text-value"},Ma=Ta(()=>p("span",{class:"vpi-arrow-right link-text-icon"},null,-1)),Na=g({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(t){return(e,n)=>(c(),y(j,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:h(()=>[p("article",Pa,[typeof e.icon=="object"&&e.icon.wrap?(c(),f("div",Ea,[b(he,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(c(),y(he,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(c(),f("div",{key:2,class:"icon",innerHTML:e.icon},null,8,Aa)):_("",!0),p("h2",{class:"title",innerHTML:e.title},null,8,La),e.details?(c(),f("p",{key:3,class:"details",innerHTML:e.details},null,8,Ca)):_("",!0),e.linkText?(c(),f("div",Da,[p("p",Va,[U(E(e.linkText)+" ",1),Ma])])):_("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Ba=k(Na,[["__scopeId","data-v-bd37d1a2"]]),Oa={key:0,class:"VPFeatures"},Ra={class:"container"},Fa={class:"items"},Ha=g({__name:"VPFeatures",props:{features:{}},setup(t){const e=t,n=w(()=>{const a=e.features.length;if(a){if(a===2)return"grid-2";if(a===3)return"grid-3";if(a%3===0)return"grid-6";if(a>3)return"grid-4"}else return});return(a,s)=>a.features?(c(),f("div",Oa,[p("div",Ra,[p("div",Fa,[(c(!0),f(D,null,O(a.features,o=>(c(),f("div",{key:o.title,class:L(["item",[n.value]])},[b(Ba,{icon:o.icon,title:o.title,details:o.details,link:o.link,"link-text":o.linkText,rel:o.rel,target:o.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):_("",!0)}}),ja=k(Ha,[["__scopeId","data-v-b1eea84a"]]),Ua=g({__name:"VPHomeFeatures",setup(t){const{frontmatter:e}=T();return(n,a)=>u(e).features?(c(),y(ja,{key:0,class:"VPHomeFeatures",features:u(e).features},null,8,["features"])):_("",!0)}}),za=g({__name:"VPHomeContent",setup(t){const{width:e}=Bn({initialWidth:0,includeScrollbar:!1});return(n,a)=>(c(),f("div",{class:"vp-doc container",style:Vt(u(e)?{"--vp-offset":`calc(50% - ${u(e)/2}px)`}:{})},[d(n.$slots,"default",{},void 0,!0)],4))}}),Ga=k(za,[["__scopeId","data-v-c141a4bd"]]),Wa={class:"VPHome"},qa=g({__name:"VPHome",setup(t){const{frontmatter:e}=T();return(n,a)=>{const s=re("Content");return c(),f("div",Wa,[d(n.$slots,"home-hero-before",{},void 0,!0),b(Sa,null,{"home-hero-info-before":h(()=>[d(n.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[d(n.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[d(n.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[d(n.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[d(n.$slots,"home-hero-image",{},void 0,!0)]),_:3}),d(n.$slots,"home-hero-after",{},void 0,!0),d(n.$slots,"home-features-before",{},void 0,!0),b(Ua),d(n.$slots,"home-features-after",{},void 0,!0),u(e).markdownStyles!==!1?(c(),y(Ga,{key:0},{default:h(()=>[b(s)]),_:1})):(c(),y(s,{key:1}))])}}}),xa=k(qa,[["__scopeId","data-v-07b1ad08"]]),Ka={},Ja={class:"VPPage"};function Ya(t,e){const n=re("Content");return c(),f("div",Ja,[d(t.$slots,"page-top"),b(n),d(t.$slots,"page-bottom")])}const Xa=k(Ka,[["render",Ya]]),Qa=g({__name:"VPContent",setup(t){const{page:e,frontmatter:n}=T(),{hasSidebar:a}=W();return(s,o)=>(c(),f("div",{class:L(["VPContent",{"has-sidebar":u(a),"is-home":u(n).layout==="home"}]),id:"VPContent"},[u(e).isNotFound?d(s.$slots,"not-found",{key:0},()=>[b(is)],!0):u(n).layout==="page"?(c(),y(Xa,{key:1},{"page-top":h(()=>[d(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":h(()=>[d(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):u(n).layout==="home"?(c(),y(xa,{key:2},{"home-hero-before":h(()=>[d(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":h(()=>[d(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[d(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[d(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[d(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[d(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":h(()=>[d(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":h(()=>[d(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":h(()=>[d(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):u(n).layout&&u(n).layout!=="doc"?(c(),y(H(u(n).layout),{key:3})):(c(),y(ia,{key:4},{"doc-top":h(()=>[d(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":h(()=>[d(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":h(()=>[d(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":h(()=>[d(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":h(()=>[d(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":h(()=>[d(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":h(()=>[d(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[d(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[d(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[d(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":h(()=>[d(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Za=k(Qa,[["__scopeId","data-v-9a6c75ad"]]),eo={class:"container"},to=["innerHTML"],no=["innerHTML"],so=g({__name:"VPFooter",setup(t){const{theme:e,frontmatter:n}=T(),{hasSidebar:a}=W();return(s,o)=>u(e).footer&&u(n).footer!==!1?(c(),f("footer",{key:0,class:L(["VPFooter",{"has-sidebar":u(a)}])},[p("div",eo,[u(e).footer.message?(c(),f("p",{key:0,class:"message",innerHTML:u(e).footer.message},null,8,to)):_("",!0),u(e).footer.copyright?(c(),f("p",{key:1,class:"copyright",innerHTML:u(e).footer.copyright},null,8,no)):_("",!0)])],2)):_("",!0)}}),ao=k(so,[["__scopeId","data-v-566314d4"]]);function oo(){const{theme:t,frontmatter:e}=T(),n=Ct([]),a=w(()=>n.value.length>0);return be(()=>{n.value=et(e.value.outline??t.value.outline)}),{headers:n,hasLocalNav:a}}const ro=t=>(N("data-v-883964e0"),t=t(),B(),t),io={class:"menu-text"},co=ro(()=>p("span",{class:"vpi-chevron-right icon"},null,-1)),lo={class:"header"},uo={class:"outline"},fo=g({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(t){const e=t,{theme:n}=T(),a=A(!1),s=A(0),o=A(),r=A();function i(v){var $;($=o.value)!=null&&$.contains(v.target)||(a.value=!1)}z(a,v=>{if(v){document.addEventListener("click",i);return}document.removeEventListener("click",i)}),Fe("Escape",()=>{a.value=!1}),be(()=>{a.value=!1});function l(){a.value=!a.value,s.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function m(v){v.target.classList.contains("outline-link")&&(r.value&&(r.value.style.transition="none"),On(()=>{a.value=!1}))}function I(){a.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(v,$)=>(c(),f("div",{class:"VPLocalNavOutlineDropdown",style:Vt({"--vp-vh":s.value+"px"}),ref_key:"main",ref:o},[v.headers.length>0?(c(),f("button",{key:0,onClick:l,class:L({open:a.value})},[p("span",io,E(u(Rt)(u(n))),1),co],2)):(c(),f("button",{key:1,onClick:I},E(u(n).returnToTopLabel||"Return to top"),1)),b(Je,{name:"flyout"},{default:h(()=>[a.value?(c(),f("div",{key:0,ref_key:"items",ref:r,class:"items",onClick:m},[p("div",lo,[p("a",{class:"top-link",href:"#",onClick:I},E(u(n).returnToTopLabel||"Return to top"),1)]),p("div",uo,[b(Ft,{headers:v.headers},null,8,["headers"])])],512)):_("",!0)]),_:1})],4))}}),ho=k(fo,[["__scopeId","data-v-883964e0"]]),po=t=>(N("data-v-2488c25a"),t=t(),B(),t),mo={class:"container"},vo=["aria-expanded"],_o=po(()=>p("span",{class:"vpi-align-left menu-icon"},null,-1)),go={class:"menu-text"},bo=g({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(t){const{theme:e,frontmatter:n}=T(),{hasSidebar:a}=W(),{headers:s}=oo(),{y:o}=Mt(),r=A(0);oe(()=>{r.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),be(()=>{s.value=et(n.value.outline??e.value.outline)});const i=w(()=>s.value.length===0),l=w(()=>i.value&&!a.value),m=w(()=>({VPLocalNav:!0,"has-sidebar":a.value,empty:i.value,fixed:l.value}));return(I,v)=>u(n).layout!=="home"&&(!l.value||u(o)>=r.value)?(c(),f("div",{key:0,class:L(m.value)},[p("div",mo,[u(a)?(c(),f("button",{key:0,class:"menu","aria-expanded":I.open,"aria-controls":"VPSidebarNav",onClick:v[0]||(v[0]=$=>I.$emit("open-menu"))},[_o,p("span",go,E(u(e).sidebarMenuLabel||"Menu"),1)],8,vo)):_("",!0),b(ho,{headers:u(s),navHeight:r.value},null,8,["headers","navHeight"])])],2)):_("",!0)}}),yo=k(bo,[["__scopeId","data-v-2488c25a"]]);function ko(){const t=A(!1);function e(){t.value=!0,window.addEventListener("resize",s)}function n(){t.value=!1,window.removeEventListener("resize",s)}function a(){t.value?n():e()}function s(){window.outerWidth>=768&&n()}const o=ye();return z(()=>o.path,n),{isScreenOpen:t,openScreen:e,closeScreen:n,toggleScreen:a}}const $o={},Io={class:"VPSwitch",type:"button",role:"switch"},wo={class:"check"},So={key:0,class:"icon"};function To(t,e){return c(),f("button",Io,[p("span",wo,[t.$slots.default?(c(),f("span",So,[d(t.$slots,"default",{},void 0,!0)])):_("",!0)])])}const Po=k($o,[["render",To],["__scopeId","data-v-b4ccac88"]]),jt=t=>(N("data-v-be9742d9"),t=t(),B(),t),Eo=jt(()=>p("span",{class:"vpi-sun sun"},null,-1)),Ao=jt(()=>p("span",{class:"vpi-moon moon"},null,-1)),Lo=g({__name:"VPSwitchAppearance",setup(t){const{isDark:e,theme:n}=T(),a=ke("toggle-appearance",()=>{e.value=!e.value}),s=A("");return Qe(()=>{s.value=e.value?n.value.lightModeSwitchTitle||"Switch to light theme":n.value.darkModeSwitchTitle||"Switch to dark theme"}),(o,r)=>(c(),y(Po,{title:s.value,class:"VPSwitchAppearance","aria-checked":u(e),onClick:u(a)},{default:h(()=>[Eo,Ao]),_:1},8,["title","aria-checked","onClick"]))}}),tt=k(Lo,[["__scopeId","data-v-be9742d9"]]),Co={key:0,class:"VPNavBarAppearance"},Do=g({__name:"VPNavBarAppearance",setup(t){const{site:e}=T();return(n,a)=>u(e).appearance&&u(e).appearance!=="force-dark"&&u(e).appearance!=="force-auto"?(c(),f("div",Co,[b(tt)])):_("",!0)}}),Vo=k(Do,[["__scopeId","data-v-3f90c1a5"]]),nt=A();let Ut=!1,Le=0;function Mo(t){const e=A(!1);if($e){!Ut&&No(),Le++;const n=z(nt,a=>{var s,o,r;a===t.el.value||(s=t.el.value)!=null&&s.contains(a)?(e.value=!0,(o=t.onFocus)==null||o.call(t)):(e.value=!1,(r=t.onBlur)==null||r.call(t))});Xe(()=>{n(),Le--,Le||Bo()})}return Rn(e)}function No(){document.addEventListener("focusin",zt),Ut=!0,nt.value=document.activeElement}function Bo(){document.removeEventListener("focusin",zt)}function zt(){nt.value=document.activeElement}const Oo={class:"VPMenuLink"},Ro=g({__name:"VPMenuLink",props:{item:{}},setup(t){const{page:e}=T();return(n,a)=>(c(),f("div",Oo,[b(j,{class:L({active:u(te)(u(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel},{default:h(()=>[U(E(n.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),Ie=k(Ro,[["__scopeId","data-v-f51f088d"]]),Fo={class:"VPMenuGroup"},Ho={key:0,class:"title"},jo=g({__name:"VPMenuGroup",props:{text:{},items:{}},setup(t){return(e,n)=>(c(),f("div",Fo,[e.text?(c(),f("p",Ho,E(e.text),1)):_("",!0),(c(!0),f(D,null,O(e.items,a=>(c(),f(D,null,["link"in a?(c(),y(Ie,{key:0,item:a},null,8,["item"])):_("",!0)],64))),256))]))}}),Uo=k(jo,[["__scopeId","data-v-a6b0397c"]]),zo={class:"VPMenu"},Go={key:0,class:"items"},Wo=g({__name:"VPMenu",props:{items:{}},setup(t){return(e,n)=>(c(),f("div",zo,[e.items?(c(),f("div",Go,[(c(!0),f(D,null,O(e.items,a=>(c(),f(D,{key:JSON.stringify(a)},["link"in a?(c(),y(Ie,{key:0,item:a},null,8,["item"])):"component"in a?(c(),y(H(a.component),K({key:1,ref_for:!0},a.props),null,16)):(c(),y(Uo,{key:2,text:a.text,items:a.items},null,8,["text","items"]))],64))),128))])):_("",!0),d(e.$slots,"default",{},void 0,!0)]))}}),qo=k(Wo,[["__scopeId","data-v-20ed86d6"]]),xo=t=>(N("data-v-af5898d3"),t=t(),B(),t),Ko=["aria-expanded","aria-label"],Jo={key:0,class:"text"},Yo=["innerHTML"],Xo=xo(()=>p("span",{class:"vpi-chevron-down text-icon"},null,-1)),Qo={key:1,class:"vpi-more-horizontal icon"},Zo={class:"menu"},er=g({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(t){const e=A(!1),n=A();Mo({el:n,onBlur:a});function a(){e.value=!1}return(s,o)=>(c(),f("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:o[1]||(o[1]=r=>e.value=!0),onMouseleave:o[2]||(o[2]=r=>e.value=!1)},[p("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":s.label,onClick:o[0]||(o[0]=r=>e.value=!e.value)},[s.button||s.icon?(c(),f("span",Jo,[s.icon?(c(),f("span",{key:0,class:L([s.icon,"option-icon"])},null,2)):_("",!0),s.button?(c(),f("span",{key:1,innerHTML:s.button},null,8,Yo)):_("",!0),Xo])):(c(),f("span",Qo))],8,Ko),p("div",Zo,[b(qo,{items:s.items},{default:h(()=>[d(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),st=k(er,[["__scopeId","data-v-af5898d3"]]),tr=["href","aria-label","innerHTML"],nr=g({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(t){const e=t,n=w(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}" />`);return(a,s)=>(c(),f("a",{class:"VPSocialLink no-icon",href:a.link,"aria-label":a.ariaLabel??(typeof a.icon=="string"?a.icon:""),target:"_blank",rel:"noopener",innerHTML:n.value},null,8,tr))}}),sr=k(nr,[["__scopeId","data-v-358b6670"]]),ar={class:"VPSocialLinks"},or=g({__name:"VPSocialLinks",props:{links:{}},setup(t){return(e,n)=>(c(),f("div",ar,[(c(!0),f(D,null,O(e.links,({link:a,icon:s,ariaLabel:o})=>(c(),y(sr,{key:a,icon:s,link:a,ariaLabel:o},null,8,["icon","link","ariaLabel"]))),128))]))}}),at=k(or,[["__scopeId","data-v-e71e869c"]]),rr={key:0,class:"group translations"},ir={class:"trans-title"},cr={key:1,class:"group"},lr={class:"item appearance"},ur={class:"label"},dr={class:"appearance-action"},fr={key:2,class:"group"},hr={class:"item social-links"},pr=g({__name:"VPNavBarExtra",setup(t){const{site:e,theme:n}=T(),{localeLinks:a,currentLang:s}=de({correspondingLink:!0}),o=w(()=>a.value.length&&s.value.label||e.value.appearance||n.value.socialLinks);return(r,i)=>o.value?(c(),y(st,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:h(()=>[u(a).length&&u(s).label?(c(),f("div",rr,[p("p",ir,E(u(s).label),1),(c(!0),f(D,null,O(u(a),l=>(c(),y(Ie,{key:l.link,item:l},null,8,["item"]))),128))])):_("",!0),u(e).appearance&&u(e).appearance!=="force-dark"&&u(e).appearance!=="force-auto"?(c(),f("div",cr,[p("div",lr,[p("p",ur,E(u(n).darkModeSwitchLabel||"Appearance"),1),p("div",dr,[b(tt)])])])):_("",!0),u(n).socialLinks?(c(),f("div",fr,[p("div",hr,[b(at,{class:"social-links-list",links:u(n).socialLinks},null,8,["links"])])])):_("",!0)]),_:1})):_("",!0)}}),mr=k(pr,[["__scopeId","data-v-f953d92f"]]),vr=t=>(N("data-v-6bee1efd"),t=t(),B(),t),_r=["aria-expanded"],gr=vr(()=>p("span",{class:"container"},[p("span",{class:"top"}),p("span",{class:"middle"}),p("span",{class:"bottom"})],-1)),br=[gr],yr=g({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(t){return(e,n)=>(c(),f("button",{type:"button",class:L(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=a=>e.$emit("click"))},br,10,_r))}}),kr=k(yr,[["__scopeId","data-v-6bee1efd"]]),$r=["innerHTML"],Ir=g({__name:"VPNavBarMenuLink",props:{item:{}},setup(t){const{page:e}=T();return(n,a)=>(c(),y(j,{class:L({VPNavBarMenuLink:!0,active:u(te)(u(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,noIcon:n.item.noIcon,target:n.item.target,rel:n.item.rel,tabindex:"0"},{default:h(()=>[p("span",{innerHTML:n.item.text},null,8,$r)]),_:1},8,["class","href","noIcon","target","rel"]))}}),wr=k(Ir,[["__scopeId","data-v-08fbf4b6"]]),Sr=g({__name:"VPNavBarMenuGroup",props:{item:{}},setup(t){const e=t,{page:n}=T(),a=o=>"component"in o?!1:"link"in o?te(n.value.relativePath,o.link,!!e.item.activeMatch):o.items.some(a),s=w(()=>a(e.item));return(o,r)=>(c(),y(st,{class:L({VPNavBarMenuGroup:!0,active:u(te)(u(n).relativePath,o.item.activeMatch,!!o.item.activeMatch)||s.value}),button:o.item.text,items:o.item.items},null,8,["class","button","items"]))}}),Tr=t=>(N("data-v-afb2845e"),t=t(),B(),t),Pr={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Er=Tr(()=>p("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),Ar=g({__name:"VPNavBarMenu",setup(t){const{theme:e}=T();return(n,a)=>u(e).nav?(c(),f("nav",Pr,[Er,(c(!0),f(D,null,O(u(e).nav,s=>(c(),f(D,{key:JSON.stringify(s)},["link"in s?(c(),y(wr,{key:0,item:s},null,8,["item"])):"component"in s?(c(),y(H(s.component),K({key:1,ref_for:!0},s.props),null,16)):(c(),y(Sr,{key:2,item:s},null,8,["item"]))],64))),128))])):_("",!0)}}),Lr=k(Ar,[["__scopeId","data-v-afb2845e"]]);function Cr(t){const{localeIndex:e,theme:n}=T();function a(s){var V,M,P;const o=s.split("."),r=(V=n.value.search)==null?void 0:V.options,i=r&&typeof r=="object",l=i&&((P=(M=r.locales)==null?void 0:M[e.value])==null?void 0:P.translations)||null,m=i&&r.translations||null;let I=l,v=m,$=t;const S=o.pop();for(const q of o){let x=null;const ce=$==null?void 0:$[q];ce&&(x=$=ce);const Ee=v==null?void 0:v[q];Ee&&(x=v=Ee);const Ae=I==null?void 0:I[q];Ae&&(x=I=Ae),ce||($=x),Ee||(v=x),Ae||(I=x)}return(I==null?void 0:I[S])??(v==null?void 0:v[S])??($==null?void 0:$[S])??""}return a}const Dr=["aria-label"],Vr={class:"DocSearch-Button-Container"},Mr=p("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1),Nr={class:"DocSearch-Button-Placeholder"},Br=p("span",{class:"DocSearch-Button-Keys"},[p("kbd",{class:"DocSearch-Button-Key"}),p("kbd",{class:"DocSearch-Button-Key"},"K")],-1),dt=g({__name:"VPNavBarSearchButton",setup(t){const n=Cr({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(a,s)=>(c(),f("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":u(n)("button.buttonAriaLabel")},[p("span",Vr,[Mr,p("span",Nr,E(u(n)("button.buttonText")),1)]),Br],8,Dr))}}),Or={class:"VPNavBarSearch"},Rr={id:"local-search"},Fr={key:1,id:"docsearch"},Hr=g({__name:"VPNavBarSearch",setup(t){const e=Fn(()=>Hn(()=>import("./VPLocalSearchBox.B4JlWAEV.js"),__vite__mapDeps([0,1]))),n=()=>null,{theme:a}=T(),s=A(!1),o=A(!1);oe(()=>{});function r(){s.value||(s.value=!0,setTimeout(i,16))}function i(){const v=new Event("keydown");v.key="k",v.metaKey=!0,window.dispatchEvent(v),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||i()},16)}function l(v){const $=v.target,S=$.tagName;return $.isContentEditable||S==="INPUT"||S==="SELECT"||S==="TEXTAREA"}const m=A(!1);Fe("k",v=>{(v.ctrlKey||v.metaKey)&&(v.preventDefault(),m.value=!0)}),Fe("/",v=>{l(v)||(v.preventDefault(),m.value=!0)});const I="local";return(v,$)=>{var S;return c(),f("div",Or,[u(I)==="local"?(c(),f(D,{key:0},[m.value?(c(),y(u(e),{key:0,onClose:$[0]||($[0]=V=>m.value=!1)})):_("",!0),p("div",Rr,[b(dt,{onClick:$[1]||($[1]=V=>m.value=!0)})])],64)):u(I)==="algolia"?(c(),f(D,{key:1},[s.value?(c(),y(u(n),{key:0,algolia:((S=u(a).search)==null?void 0:S.options)??u(a).algolia,onVnodeBeforeMount:$[2]||($[2]=V=>o.value=!0)},null,8,["algolia"])):_("",!0),o.value?_("",!0):(c(),f("div",Fr,[b(dt,{onClick:r})]))],64)):_("",!0)])}}}),jr=g({__name:"VPNavBarSocialLinks",setup(t){const{theme:e}=T();return(n,a)=>u(e).socialLinks?(c(),y(at,{key:0,class:"VPNavBarSocialLinks",links:u(e).socialLinks},null,8,["links"])):_("",!0)}}),Ur=k(jr,[["__scopeId","data-v-ef6192dc"]]),zr=["href","rel","target"],Gr={key:1},Wr={key:2},qr=g({__name:"VPNavBarTitle",setup(t){const{site:e,theme:n}=T(),{hasSidebar:a}=W(),{currentLang:s}=de(),o=w(()=>{var l;return typeof n.value.logoLink=="string"?n.value.logoLink:(l=n.value.logoLink)==null?void 0:l.link}),r=w(()=>{var l;return typeof n.value.logoLink=="string"||(l=n.value.logoLink)==null?void 0:l.rel}),i=w(()=>{var l;return typeof n.value.logoLink=="string"||(l=n.value.logoLink)==null?void 0:l.target});return(l,m)=>(c(),f("div",{class:L(["VPNavBarTitle",{"has-sidebar":u(a)}])},[p("a",{class:"title",href:o.value??u(Ze)(u(s).link),rel:r.value,target:i.value},[d(l.$slots,"nav-bar-title-before",{},void 0,!0),u(n).logo?(c(),y(he,{key:0,class:"logo",image:u(n).logo},null,8,["image"])):_("",!0),u(n).siteTitle?(c(),f("span",Gr,E(u(n).siteTitle),1)):u(n).siteTitle===void 0?(c(),f("span",Wr,E(u(e).title),1)):_("",!0),d(l.$slots,"nav-bar-title-after",{},void 0,!0)],8,zr)],2))}}),xr=k(qr,[["__scopeId","data-v-0ad69264"]]),Kr={class:"items"},Jr={class:"title"},Yr=g({__name:"VPNavBarTranslations",setup(t){const{theme:e}=T(),{localeLinks:n,currentLang:a}=de({correspondingLink:!0});return(s,o)=>u(n).length&&u(a).label?(c(),y(st,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:u(e).langMenuLabel||"Change language"},{default:h(()=>[p("div",Kr,[p("p",Jr,E(u(a).label),1),(c(!0),f(D,null,O(u(n),r=>(c(),y(Ie,{key:r.link,item:r},null,8,["item"]))),128))])]),_:1},8,["label"])):_("",!0)}}),Xr=k(Yr,[["__scopeId","data-v-acee064b"]]),Qr=t=>(N("data-v-9fd4d1dd"),t=t(),B(),t),Zr={class:"wrapper"},ei={class:"container"},ti={class:"title"},ni={class:"content"},si={class:"content-body"},ai=Qr(()=>p("div",{class:"divider"},[p("div",{class:"divider-line"})],-1)),oi=g({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(t){const e=t,{y:n}=Mt(),{hasSidebar:a}=W(),{frontmatter:s}=T(),o=A({});return Qe(()=>{o.value={"has-sidebar":a.value,home:s.value.layout==="home",top:n.value===0,"screen-open":e.isScreenOpen}}),(r,i)=>(c(),f("div",{class:L(["VPNavBar",o.value])},[p("div",Zr,[p("div",ei,[p("div",ti,[b(xr,null,{"nav-bar-title-before":h(()=>[d(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[d(r.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),p("div",ni,[p("div",si,[d(r.$slots,"nav-bar-content-before",{},void 0,!0),b(Hr,{class:"search"}),b(Lr,{class:"menu"}),b(Xr,{class:"translations"}),b(Vo,{class:"appearance"}),b(Ur,{class:"social-links"}),b(mr,{class:"extra"}),d(r.$slots,"nav-bar-content-after",{},void 0,!0),b(kr,{class:"hamburger",active:r.isScreenOpen,onClick:i[0]||(i[0]=l=>r.$emit("toggle-screen"))},null,8,["active"])])])])]),ai],2))}}),ri=k(oi,[["__scopeId","data-v-9fd4d1dd"]]),ii={key:0,class:"VPNavScreenAppearance"},ci={class:"text"},li=g({__name:"VPNavScreenAppearance",setup(t){const{site:e,theme:n}=T();return(a,s)=>u(e).appearance&&u(e).appearance!=="force-dark"&&u(e).appearance!=="force-auto"?(c(),f("div",ii,[p("p",ci,E(u(n).darkModeSwitchLabel||"Appearance"),1),b(tt)])):_("",!0)}}),ui=k(li,[["__scopeId","data-v-a3e2920d"]]),di=g({__name:"VPNavScreenMenuLink",props:{item:{}},setup(t){const e=ke("close-screen");return(n,a)=>(c(),y(j,{class:"VPNavScreenMenuLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:u(e),innerHTML:n.item.text},null,8,["href","target","rel","onClick","innerHTML"]))}}),fi=k(di,[["__scopeId","data-v-1a934d60"]]),hi=g({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(t){const e=ke("close-screen");return(n,a)=>(c(),y(j,{class:"VPNavScreenMenuGroupLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:u(e)},{default:h(()=>[U(E(n.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),Gt=k(hi,[["__scopeId","data-v-aea78dd1"]]),pi={class:"VPNavScreenMenuGroupSection"},mi={key:0,class:"title"},vi=g({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(t){return(e,n)=>(c(),f("div",pi,[e.text?(c(),f("p",mi,E(e.text),1)):_("",!0),(c(!0),f(D,null,O(e.items,a=>(c(),y(Gt,{key:a.text,item:a},null,8,["item"]))),128))]))}}),_i=k(vi,[["__scopeId","data-v-f60dbfa7"]]),gi=t=>(N("data-v-d99bfeec"),t=t(),B(),t),bi=["aria-controls","aria-expanded"],yi=["innerHTML"],ki=gi(()=>p("span",{class:"vpi-plus button-icon"},null,-1)),$i=["id"],Ii={key:0,class:"item"},wi={key:1,class:"item"},Si={key:2,class:"group"},Ti=g({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(t){const e=t,n=A(!1),a=w(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function s(){n.value=!n.value}return(o,r)=>(c(),f("div",{class:L(["VPNavScreenMenuGroup",{open:n.value}])},[p("button",{class:"button","aria-controls":a.value,"aria-expanded":n.value,onClick:s},[p("span",{class:"button-text",innerHTML:o.text},null,8,yi),ki],8,bi),p("div",{id:a.value,class:"items"},[(c(!0),f(D,null,O(o.items,i=>(c(),f(D,{key:JSON.stringify(i)},["link"in i?(c(),f("div",Ii,[b(Gt,{item:i},null,8,["item"])])):"component"in i?(c(),f("div",wi,[(c(),y(H(i.component),K({ref_for:!0},i.props,{"screen-menu":""}),null,16))])):(c(),f("div",Si,[b(_i,{text:i.text,items:i.items},null,8,["text","items"])]))],64))),128))],8,$i)],2))}}),Pi=k(Ti,[["__scopeId","data-v-d99bfeec"]]),Ei={key:0,class:"VPNavScreenMenu"},Ai=g({__name:"VPNavScreenMenu",setup(t){const{theme:e}=T();return(n,a)=>u(e).nav?(c(),f("nav",Ei,[(c(!0),f(D,null,O(u(e).nav,s=>(c(),f(D,{key:JSON.stringify(s)},["link"in s?(c(),y(fi,{key:0,item:s},null,8,["item"])):"component"in s?(c(),y(H(s.component),K({key:1,ref_for:!0},s.props,{"screen-menu":""}),null,16)):(c(),y(Pi,{key:2,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):_("",!0)}}),Li=g({__name:"VPNavScreenSocialLinks",setup(t){const{theme:e}=T();return(n,a)=>u(e).socialLinks?(c(),y(at,{key:0,class:"VPNavScreenSocialLinks",links:u(e).socialLinks},null,8,["links"])):_("",!0)}}),Wt=t=>(N("data-v-516e4bc3"),t=t(),B(),t),Ci=Wt(()=>p("span",{class:"vpi-languages icon lang"},null,-1)),Di=Wt(()=>p("span",{class:"vpi-chevron-down icon chevron"},null,-1)),Vi={class:"list"},Mi=g({__name:"VPNavScreenTranslations",setup(t){const{localeLinks:e,currentLang:n}=de({correspondingLink:!0}),a=A(!1);function s(){a.value=!a.value}return(o,r)=>u(e).length&&u(n).label?(c(),f("div",{key:0,class:L(["VPNavScreenTranslations",{open:a.value}])},[p("button",{class:"title",onClick:s},[Ci,U(" "+E(u(n).label)+" ",1),Di]),p("ul",Vi,[(c(!0),f(D,null,O(u(e),i=>(c(),f("li",{key:i.link,class:"item"},[b(j,{class:"link",href:i.link},{default:h(()=>[U(E(i.text),1)]),_:2},1032,["href"])]))),128))])],2)):_("",!0)}}),Ni=k(Mi,[["__scopeId","data-v-516e4bc3"]]),Bi={class:"container"},Oi=g({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(t){const e=A(null),n=Nt($e?document.body:null);return(a,s)=>(c(),y(Je,{name:"fade",onEnter:s[0]||(s[0]=o=>n.value=!0),onAfterLeave:s[1]||(s[1]=o=>n.value=!1)},{default:h(()=>[a.open?(c(),f("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[p("div",Bi,[d(a.$slots,"nav-screen-content-before",{},void 0,!0),b(Ai,{class:"menu"}),b(Ni,{class:"translations"}),b(ui,{class:"appearance"}),b(Li,{class:"social-links"}),d(a.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):_("",!0)]),_:3}))}}),Ri=k(Oi,[["__scopeId","data-v-2dd6d0c7"]]),Fi={key:0,class:"VPNav"},Hi=g({__name:"VPNav",setup(t){const{isScreenOpen:e,closeScreen:n,toggleScreen:a}=ko(),{frontmatter:s}=T(),o=w(()=>s.value.navbar!==!1);return Bt("close-screen",n),ge(()=>{$e&&document.documentElement.classList.toggle("hide-nav",!o.value)}),(r,i)=>o.value?(c(),f("header",Fi,[b(ri,{"is-screen-open":u(e),onToggleScreen:u(a)},{"nav-bar-title-before":h(()=>[d(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[d(r.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":h(()=>[d(r.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":h(()=>[d(r.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),b(Ri,{open:u(e)},{"nav-screen-content-before":h(()=>[d(r.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":h(()=>[d(r.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):_("",!0)}}),ji=k(Hi,[["__scopeId","data-v-7ad780c2"]]),qt=t=>(N("data-v-edd2eed8"),t=t(),B(),t),Ui=["role","tabindex"],zi=qt(()=>p("div",{class:"indicator"},null,-1)),Gi=qt(()=>p("span",{class:"vpi-chevron-right caret-icon"},null,-1)),Wi=[Gi],qi={key:1,class:"items"},xi=g({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(t){const e=t,{collapsed:n,collapsible:a,isLink:s,isActiveLink:o,hasActiveLink:r,hasChildren:i,toggle:l}=ds(w(()=>e.item)),m=w(()=>i.value?"section":"div"),I=w(()=>s.value?"a":"div"),v=w(()=>i.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),$=w(()=>s.value?void 0:"button"),S=w(()=>[[`level-${e.depth}`],{collapsible:a.value},{collapsed:n.value},{"is-link":s.value},{"is-active":o.value},{"has-active":r.value}]);function V(P){"key"in P&&P.key!=="Enter"||!e.item.link&&l()}function M(){e.item.link&&l()}return(P,q)=>{const x=re("VPSidebarItem",!0);return c(),y(H(m.value),{class:L(["VPSidebarItem",S.value])},{default:h(()=>[P.item.text?(c(),f("div",K({key:0,class:"item",role:$.value},Un(P.item.items?{click:V,keydown:V}:{},!0),{tabindex:P.item.items&&0}),[zi,P.item.link?(c(),y(j,{key:0,tag:I.value,class:"link",href:P.item.link,rel:P.item.rel,target:P.item.target},{default:h(()=>[(c(),y(H(v.value),{class:"text",innerHTML:P.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(c(),y(H(v.value),{key:1,class:"text",innerHTML:P.item.text},null,8,["innerHTML"])),P.item.collapsed!=null&&P.item.items&&P.item.items.length?(c(),f("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:M,onKeydown:jn(M,["enter"]),tabindex:"0"},Wi,32)):_("",!0)],16,Ui)):_("",!0),P.item.items&&P.item.items.length?(c(),f("div",qi,[P.depth<5?(c(!0),f(D,{key:0},O(P.item.items,ce=>(c(),y(x,{key:ce.text,item:ce,depth:P.depth+1},null,8,["item","depth"]))),128)):_("",!0)])):_("",!0)]),_:1},8,["class"])}}}),Ki=k(xi,[["__scopeId","data-v-edd2eed8"]]),Ji=g({__name:"VPSidebarGroup",props:{items:{}},setup(t){const e=A(!0);let n=null;return oe(()=>{n=setTimeout(()=>{n=null,e.value=!1},300)}),zn(()=>{n!=null&&(clearTimeout(n),n=null)}),(a,s)=>(c(!0),f(D,null,O(a.items,o=>(c(),f("div",{key:o.text,class:L(["group",{"no-transition":e.value}])},[b(Ki,{item:o,depth:0},null,8,["item"])],2))),128))}}),Yi=k(Ji,[["__scopeId","data-v-51288d80"]]),xt=t=>(N("data-v-42c4c606"),t=t(),B(),t),Xi=xt(()=>p("div",{class:"curtain"},null,-1)),Qi={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Zi=xt(()=>p("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),ec=g({__name:"VPSidebar",props:{open:{type:Boolean}},setup(t){const{sidebarGroups:e,hasSidebar:n}=W(),a=t,s=A(null),o=Nt($e?document.body:null);z([a,s],()=>{var i;a.open?(o.value=!0,(i=s.value)==null||i.focus()):o.value=!1},{immediate:!0,flush:"post"});const r=A(0);return z(e,()=>{r.value+=1},{deep:!0}),(i,l)=>u(n)?(c(),f("aside",{key:0,class:L(["VPSidebar",{open:i.open}]),ref_key:"navEl",ref:s,onClick:l[0]||(l[0]=Gn(()=>{},["stop"]))},[Xi,p("nav",Qi,[Zi,d(i.$slots,"sidebar-nav-before",{},void 0,!0),(c(),y(Yi,{items:u(e),key:r.value},null,8,["items"])),d(i.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):_("",!0)}}),tc=k(ec,[["__scopeId","data-v-42c4c606"]]),nc=g({__name:"VPSkipLink",setup(t){const e=ye(),n=A();z(()=>e.path,()=>n.value.focus());function a({target:s}){const o=document.getElementById(decodeURIComponent(s.hash).slice(1));if(o){const r=()=>{o.removeAttribute("tabindex"),o.removeEventListener("blur",r)};o.setAttribute("tabindex","-1"),o.addEventListener("blur",r),o.focus(),window.scrollTo(0,0)}}return(s,o)=>(c(),f(D,null,[p("span",{ref_key:"backToTop",ref:n,tabindex:"-1"},null,512),p("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:a}," Skip to content ")],64))}}),sc=k(nc,[["__scopeId","data-v-c8291ffa"]]),ac=g({__name:"Layout",setup(t){const{isOpen:e,open:n,close:a}=W(),s=ye();z(()=>s.path,a),us(e,a);const{frontmatter:o}=T(),r=Wn(),i=w(()=>!!r["home-hero-image"]);return Bt("hero-image-slot-exists",i),(l,m)=>{const I=re("Content");return u(o).layout!==!1?(c(),f("div",{key:0,class:L(["Layout",u(o).pageClass])},[d(l.$slots,"layout-top",{},void 0,!0),b(sc),b(Jn,{class:"backdrop",show:u(e),onClick:u(a)},null,8,["show","onClick"]),b(ji,null,{"nav-bar-title-before":h(()=>[d(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[d(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":h(()=>[d(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":h(()=>[d(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":h(()=>[d(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":h(()=>[d(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),b(yo,{open:u(e),onOpenMenu:u(n)},null,8,["open","onOpenMenu"]),b(tc,{open:u(e)},{"sidebar-nav-before":h(()=>[d(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":h(()=>[d(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),b(Za,null,{"page-top":h(()=>[d(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":h(()=>[d(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":h(()=>[d(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":h(()=>[d(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":h(()=>[d(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[d(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[d(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[d(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[d(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":h(()=>[d(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":h(()=>[d(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":h(()=>[d(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":h(()=>[d(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":h(()=>[d(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":h(()=>[d(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":h(()=>[d(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":h(()=>[d(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":h(()=>[d(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":h(()=>[d(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":h(()=>[d(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[d(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[d(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[d(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),b(ao),d(l.$slots,"layout-bottom",{},void 0,!0)],2)):(c(),y(I,{key:1}))}}}),oc=k(ac,[["__scopeId","data-v-d8b57b2d"]]),rc={Layout:oc,enhanceApp:({app:t})=>{t.component("Badge",qn)}};var ft={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=function(t){const e=[];let n=0;for(let a=0;a<t.length;a++){let s=t.charCodeAt(a);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&a+1<t.length&&(t.charCodeAt(a+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++a)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ic=function(t){const e=[];let n=0,a=0;for(;n<t.length;){const s=t[n++];if(s<128)e[a++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[a++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],r=t[n++],i=t[n++],l=((s&7)<<18|(o&63)<<12|(r&63)<<6|i&63)-65536;e[a++]=String.fromCharCode(55296+(l>>10)),e[a++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],r=t[n++];e[a++]=String.fromCharCode((s&15)<<12|(o&63)<<6|r&63)}}return e.join("")},Jt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let s=0;s<t.length;s+=3){const o=t[s],r=s+1<t.length,i=r?t[s+1]:0,l=s+2<t.length,m=l?t[s+2]:0,I=o>>2,v=(o&3)<<4|i>>4;let $=(i&15)<<2|m>>6,S=m&63;l||(S=64,r||($=64)),a.push(n[I],n[v],n[$],n[S])}return a.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kt(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ic(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],i=s<t.length?n[t.charAt(s)]:0;++s;const m=s<t.length?n[t.charAt(s)]:64;++s;const v=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||i==null||m==null||v==null)throw new cc;const $=o<<2|i>>4;if(a.push($),m!==64){const S=i<<4&240|m>>2;if(a.push(S),v!==64){const V=m<<6&192|v;a.push(V)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lc=function(t){const e=Kt(t);return Jt.encodeByteArray(e,!0)},Yt=function(t){return lc(t).replace(/\./g,"")},uc=function(t){try{return Jt.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=()=>dc().__FIREBASE_DEFAULTS__,hc=()=>{if(typeof process>"u"||typeof ft>"u")return;const t=ft.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pc=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&uc(t[1]);return e&&JSON.parse(e)},mc=()=>{try{return fc()||hc()||pc()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xt=()=>{var t;return(t=mc())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,a)=>{n?this.reject(n):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,a))}}}function _c(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Qt(){try{return typeof indexedDB=="object"}catch{return!1}}function Zt(){return new Promise((t,e)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(a);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(a),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function gc(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc="FirebaseError";class ie extends Error{constructor(e,n,a){super(n),this.code=e,this.customData=a,this.name=bc,Object.setPrototypeOf(this,ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,we.prototype.create)}}class we{constructor(e,n,a){this.service=e,this.serviceName=n,this.errors=a}create(e,...n){const a=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],r=o?yc(o,a):"Error",i=`${this.serviceName}: ${r} (${s}).`;return new ie(s,i,a)}}function yc(t,e){return t.replace(kc,(n,a)=>{const s=e[a];return s!=null?String(s):`<${a}?>`})}const kc=/\{\$([^}]+)}/g;function pe(t,e){if(t===e)return!0;const n=Object.keys(t),a=Object.keys(e);for(const s of n){if(!a.includes(s))return!1;const o=t[s],r=e[s];if(ht(o)&&ht(r)){if(!pe(o,r))return!1}else if(o!==r)return!1}for(const s of a)if(!n.includes(s))return!1;return!0}function ht(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=1e3,Ic=2,wc=4*60*60*1e3,Sc=.5;function pt(t,e=$c,n=Ic){const a=e*Math.pow(n,t),s=Math.round(Sc*a*(Math.random()-.5)*2);return Math.min(wc,a+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t){return t&&t._delegate?t._delegate:t}class Q{constructor(e,n,a){this.name=e,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const a=new vc;if(this.instancesDeferred.set(n,a),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&a.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ec(e))try{this.getOrInitializeService({instanceIdentifier:Z})}catch{}for(const[n,a]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});a.resolve(o)}catch{}}}}clearInstance(e=Z){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Z){return this.instances.has(e)}getOptions(e=Z){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:a,options:n});for(const[o,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(o);a===i&&r.resolve(s)}return s}onInit(e,n){var a;const s=this.normalizeInstanceIdentifier(n),o=(a=this.onInitCallbacks.get(s))!==null&&a!==void 0?a:new Set;o.add(e),this.onInitCallbacks.set(s,o);const r=this.instances.get(s);return r&&e(r,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const a=this.onInitCallbacks.get(n);if(a)for(const s of a)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:Pc(e),options:n}),this.instances.set(e,a),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=Z){return this.component?this.component.multipleInstances?e:Z:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pc(t){return t===Z?void 0:t}function Ec(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Tc(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var C;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(C||(C={}));const Lc={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},Cc=C.INFO,Dc={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},Vc=(t,e,...n)=>{if(e<t.logLevel)return;const a=new Date().toISOString(),s=Dc[e];if(s)console[s](`[${a}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tn{constructor(e){this.name=e,this._logLevel=Cc,this._logHandler=Vc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in C))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...e),this._logHandler(this,C.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...e),this._logHandler(this,C.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,C.INFO,...e),this._logHandler(this,C.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,C.WARN,...e),this._logHandler(this,C.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...e),this._logHandler(this,C.ERROR,...e)}}const Mc=(t,e)=>e.some(n=>t instanceof n);let mt,vt;function Nc(){return mt||(mt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bc(){return vt||(vt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nn=new WeakMap,ze=new WeakMap,sn=new WeakMap,Ce=new WeakMap,ot=new WeakMap;function Oc(t){const e=new Promise((n,a)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",r)},o=()=>{n(J(t.result)),s()},r=()=>{a(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",r)});return e.then(n=>{n instanceof IDBCursor&&nn.set(n,t)}).catch(()=>{}),ot.set(e,t),e}function Rc(t){if(ze.has(t))return;const e=new Promise((n,a)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",r),t.removeEventListener("abort",r)},o=()=>{n(),s()},r=()=>{a(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",r),t.addEventListener("abort",r)});ze.set(t,e)}let Ge={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ze.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return J(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fc(t){Ge=t(Ge)}function Hc(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const a=t.call(De(this),e,...n);return sn.set(a,e.sort?e.sort():[e]),J(a)}:Bc().includes(t)?function(...e){return t.apply(De(this),e),J(nn.get(this))}:function(...e){return J(t.apply(De(this),e))}}function jc(t){return typeof t=="function"?Hc(t):(t instanceof IDBTransaction&&Rc(t),Mc(t,Nc())?new Proxy(t,Ge):t)}function J(t){if(t instanceof IDBRequest)return Oc(t);if(Ce.has(t))return Ce.get(t);const e=jc(t);return e!==t&&(Ce.set(t,e),ot.set(e,t)),e}const De=t=>ot.get(t);function an(t,e,{blocked:n,upgrade:a,blocking:s,terminated:o}={}){const r=indexedDB.open(t,e),i=J(r);return a&&r.addEventListener("upgradeneeded",l=>{a(J(r.result),l.oldVersion,l.newVersion,J(r.transaction),l)}),n&&r.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),i.then(l=>{o&&l.addEventListener("close",()=>o()),s&&l.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),i}const Uc=["get","getKey","getAll","getAllKeys","count"],zc=["put","add","delete","clear"],Ve=new Map;function _t(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ve.get(e))return Ve.get(e);const n=e.replace(/FromIndex$/,""),a=e!==n,s=zc.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(s||Uc.includes(n)))return;const o=async function(r,...i){const l=this.transaction(r,s?"readwrite":"readonly");let m=l.store;return a&&(m=m.index(i.shift())),(await Promise.all([m[n](...i),s&&l.done]))[0]};return Ve.set(e,o),o}Fc(t=>({...t,get:(e,n,a)=>_t(e,n)||t.get(e,n,a),has:(e,n)=>!!_t(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Wc(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function Wc(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const We="@firebase/app",gt="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=new tn("@firebase/app"),qc="@firebase/app-compat",xc="@firebase/analytics-compat",Kc="@firebase/analytics",Jc="@firebase/app-check-compat",Yc="@firebase/app-check",Xc="@firebase/auth",Qc="@firebase/auth-compat",Zc="@firebase/database",el="@firebase/database-compat",tl="@firebase/functions",nl="@firebase/functions-compat",sl="@firebase/installations",al="@firebase/installations-compat",ol="@firebase/messaging",rl="@firebase/messaging-compat",il="@firebase/performance",cl="@firebase/performance-compat",ll="@firebase/remote-config",ul="@firebase/remote-config-compat",dl="@firebase/storage",fl="@firebase/storage-compat",hl="@firebase/firestore",pl="@firebase/vertexai-preview",ml="@firebase/firestore-compat",vl="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="[DEFAULT]",_l={[We]:"fire-core",[qc]:"fire-core-compat",[Kc]:"fire-analytics",[xc]:"fire-analytics-compat",[Yc]:"fire-app-check",[Jc]:"fire-app-check-compat",[Xc]:"fire-auth",[Qc]:"fire-auth-compat",[Zc]:"fire-rtdb",[el]:"fire-rtdb-compat",[tl]:"fire-fn",[nl]:"fire-fn-compat",[sl]:"fire-iid",[al]:"fire-iid-compat",[ol]:"fire-fcm",[rl]:"fire-fcm-compat",[il]:"fire-perf",[cl]:"fire-perf-compat",[ll]:"fire-rc",[ul]:"fire-rc-compat",[dl]:"fire-gcs",[fl]:"fire-gcs-compat",[hl]:"fire-fst",[ml]:"fire-fst-compat",[pl]:"fire-vertex","fire-js":"fire-js",[vl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=new Map,gl=new Map,xe=new Map;function bt(t,e){try{t.container.addComponent(e)}catch(n){G.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ne(t){const e=t.name;if(xe.has(e))return G.debug(`There were multiple attempts to register component ${e}.`),!1;xe.set(e,t);for(const n of me.values())bt(n,t);for(const n of gl.values())bt(n,t);return!0}function Se(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Y=new we("app","Firebase",bl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Q("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Y.create("app-deleted",{appName:this._name})}}function on(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const a=Object.assign({name:qe,automaticDataCollectionEnabled:!1},e),s=a.name;if(typeof s!="string"||!s)throw Y.create("bad-app-name",{appName:String(s)});if(n||(n=Xt()),!n)throw Y.create("no-options");const o=me.get(s);if(o){if(pe(n,o.options)&&pe(a,o.config))return o;throw Y.create("duplicate-app",{appName:s})}const r=new Ac(s);for(const l of xe.values())r.addComponent(l);const i=new yl(n,a,r);return me.set(s,i),i}function kl(t=qe){const e=me.get(t);if(!e&&t===qe&&Xt())return on();if(!e)throw Y.create("no-app",{appName:t});return e}function X(t,e,n){var a;let s=(a=_l[t])!==null&&a!==void 0?a:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),r=e.match(/\s|\//);if(o||r){const i=[`Unable to register library "${s}" with version "${e}":`];o&&i.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&r&&i.push("and"),r&&i.push(`version name "${e}" contains illegal characters (whitespace or "/")`),G.warn(i.join(" "));return}ne(new Q(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l="firebase-heartbeat-database",Il=1,ue="firebase-heartbeat-store";let Me=null;function rn(){return Me||(Me=an($l,Il,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ue)}catch(n){console.warn(n)}}}}).catch(t=>{throw Y.create("idb-open",{originalErrorMessage:t.message})})),Me}async function wl(t){try{const n=(await rn()).transaction(ue),a=await n.objectStore(ue).get(cn(t));return await n.done,a}catch(e){if(e instanceof ie)G.warn(e.message);else{const n=Y.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});G.warn(n.message)}}}async function yt(t,e){try{const a=(await rn()).transaction(ue,"readwrite");await a.objectStore(ue).put(e,cn(t)),await a.done}catch(n){if(n instanceof ie)G.warn(n.message);else{const a=Y.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});G.warn(a.message)}}}function cn(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=1024,Tl=30*24*60*60*1e3;class Pl{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Al(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=kt();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(r=>r.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Tl}),this._storage.overwrite(this._heartbeatsCache))}catch(a){G.warn(a)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kt(),{heartbeatsToSend:a,unsentEntries:s}=El(this._heartbeatsCache.heartbeats),o=Yt(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return G.warn(n),""}}}function kt(){return new Date().toISOString().substring(0,10)}function El(t,e=Sl){const n=[];let a=t.slice();for(const s of t){const o=n.find(r=>r.agent===s.agent);if(o){if(o.dates.push(s.date),$t(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$t(n)>e){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class Al{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qt()?Zt().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wl(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function $t(t){return Yt(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(t){ne(new Q("platform-logger",e=>new Gc(e),"PRIVATE")),ne(new Q("heartbeat",e=>new Pl(e),"PRIVATE")),X(We,gt,t),X(We,gt,"esm2017"),X("fire-js","")}Ll("");var Cl="firebase",Dl="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */X(Cl,Dl,"app");const ln="@firebase/installations",rt="0.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=1e4,dn=`w:${rt}`,fn="FIS_v2",Vl="https://firebaseinstallations.googleapis.com/v1",Ml=60*60*1e3,Nl="installations",Bl="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},se=new we(Nl,Bl,Ol);function hn(t){return t instanceof ie&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn({projectId:t}){return`${Vl}/projects/${t}/installations`}function mn(t){return{token:t.token,requestStatus:2,expiresIn:Fl(t.expiresIn),creationTime:Date.now()}}async function vn(t,e){const a=(await e.json()).error;return se.create("request-failed",{requestName:t,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function _n({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Rl(t,{refreshToken:e}){const n=_n(t);return n.append("Authorization",Hl(e)),n}async function gn(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Fl(t){return Number(t.replace("s","000"))}function Hl(t){return`${fn} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jl({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const a=pn(t),s=_n(t),o=e.getImmediate({optional:!0});if(o){const m=await o.getHeartbeatsHeader();m&&s.append("x-firebase-client",m)}const r={fid:n,authVersion:fn,appId:t.appId,sdkVersion:dn},i={method:"POST",headers:s,body:JSON.stringify(r)},l=await gn(()=>fetch(a,i));if(l.ok){const m=await l.json();return{fid:m.fid||n,registrationStatus:2,refreshToken:m.refreshToken,authToken:mn(m.authToken)}}else throw await vn("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=/^[cdef][\w-]{21}$/,Ke="";function Gl(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Wl(t);return zl.test(n)?n:Ke}catch{return Ke}}function Wl(t){return Ul(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new Map;function kn(t,e){const n=Te(t);$n(n,e),ql(n,e)}function $n(t,e){const n=yn.get(t);if(n)for(const a of n)a(e)}function ql(t,e){const n=xl();n&&n.postMessage({key:t,fid:e}),Kl()}let ee=null;function xl(){return!ee&&"BroadcastChannel"in self&&(ee=new BroadcastChannel("[Firebase] FID Change"),ee.onmessage=t=>{$n(t.data.key,t.data.fid)}),ee}function Kl(){yn.size===0&&ee&&(ee.close(),ee=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="firebase-installations-database",Yl=1,ae="firebase-installations-store";let Ne=null;function it(){return Ne||(Ne=an(Jl,Yl,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ae)}}})),Ne}async function ve(t,e){const n=Te(t),s=(await it()).transaction(ae,"readwrite"),o=s.objectStore(ae),r=await o.get(n);return await o.put(e,n),await s.done,(!r||r.fid!==e.fid)&&kn(t,e.fid),e}async function In(t){const e=Te(t),a=(await it()).transaction(ae,"readwrite");await a.objectStore(ae).delete(e),await a.done}async function Pe(t,e){const n=Te(t),s=(await it()).transaction(ae,"readwrite"),o=s.objectStore(ae),r=await o.get(n),i=e(r);return i===void 0?await o.delete(n):await o.put(i,n),await s.done,i&&(!r||r.fid!==i.fid)&&kn(t,i.fid),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(t){let e;const n=await Pe(t.appConfig,a=>{const s=Xl(a),o=Ql(t,s);return e=o.registrationPromise,o.installationEntry});return n.fid===Ke?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Xl(t){const e=t||{fid:Gl(),registrationStatus:0};return wn(e)}function Ql(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(se.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},a=Zl(t,n);return{installationEntry:n,registrationPromise:a}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:eu(t)}:{installationEntry:e}}async function Zl(t,e){try{const n=await jl(t,e);return ve(t.appConfig,n)}catch(n){throw hn(n)&&n.customData.serverCode===409?await In(t.appConfig):await ve(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function eu(t){let e=await It(t.appConfig);for(;e.registrationStatus===1;)await bn(100),e=await It(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:a}=await ct(t);return a||n}return e}function It(t){return Pe(t,e=>{if(!e)throw se.create("installation-not-found");return wn(e)})}function wn(t){return tu(t)?{fid:t.fid,registrationStatus:0}:t}function tu(t){return t.registrationStatus===1&&t.registrationTime+un<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nu({appConfig:t,heartbeatServiceProvider:e},n){const a=su(t,n),s=Rl(t,n),o=e.getImmediate({optional:!0});if(o){const m=await o.getHeartbeatsHeader();m&&s.append("x-firebase-client",m)}const r={installation:{sdkVersion:dn,appId:t.appId}},i={method:"POST",headers:s,body:JSON.stringify(r)},l=await gn(()=>fetch(a,i));if(l.ok){const m=await l.json();return mn(m)}else throw await vn("Generate Auth Token",l)}function su(t,{fid:e}){return`${pn(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(t,e=!1){let n;const a=await Pe(t.appConfig,o=>{if(!Sn(o))throw se.create("not-registered");const r=o.authToken;if(!e&&ru(r))return o;if(r.requestStatus===1)return n=au(t,e),o;{if(!navigator.onLine)throw se.create("app-offline");const i=cu(o);return n=ou(t,i),i}});return n?await n:a.authToken}async function au(t,e){let n=await wt(t.appConfig);for(;n.authToken.requestStatus===1;)await bn(100),n=await wt(t.appConfig);const a=n.authToken;return a.requestStatus===0?lt(t,e):a}function wt(t){return Pe(t,e=>{if(!Sn(e))throw se.create("not-registered");const n=e.authToken;return lu(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ou(t,e){try{const n=await nu(t,e),a=Object.assign(Object.assign({},e),{authToken:n});return await ve(t.appConfig,a),n}catch(n){if(hn(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await In(t.appConfig);else{const a=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ve(t.appConfig,a)}throw n}}function Sn(t){return t!==void 0&&t.registrationStatus===2}function ru(t){return t.requestStatus===2&&!iu(t)}function iu(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Ml}function cu(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function lu(t){return t.requestStatus===1&&t.requestTime+un<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uu(t){const e=t,{installationEntry:n,registrationPromise:a}=await ct(e);return a?a.catch(console.error):lt(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function du(t,e=!1){const n=t;return await fu(n),(await lt(n,e)).token}async function fu(t){const{registrationPromise:e}=await ct(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t){if(!t||!t.options)throw Be("App Configuration");if(!t.name)throw Be("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Be(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Be(t){return se.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="installations",pu="installations-internal",mu=t=>{const e=t.getProvider("app").getImmediate(),n=hu(e),a=Se(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},vu=t=>{const e=t.getProvider("app").getImmediate(),n=Se(e,Tn).getImmediate();return{getId:()=>uu(n),getToken:s=>du(n,s)}};function _u(){ne(new Q(Tn,mu,"PUBLIC")),ne(new Q(pu,vu,"PRIVATE"))}_u();X(ln,rt);X(ln,rt,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="analytics",gu="firebase_id",bu="origin",yu=60*1e3,ku="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ut="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=new tn("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},F=new we("analytics","Analytics",$u);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t){if(!t.startsWith(ut)){const e=F.create("invalid-gtag-resource",{gtagURL:t});return R.warn(e.message),""}return t}function Pn(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function wu(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Su(t,e){const n=wu("firebase-js-sdk-policy",{createScriptURL:Iu}),a=document.createElement("script"),s=`${ut}?l=${t}&id=${e}`;a.src=n?n==null?void 0:n.createScriptURL(s):s,a.async=!0,document.head.appendChild(a)}function Tu(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Pu(t,e,n,a,s,o){const r=a[s];try{if(r)await e[r];else{const l=(await Pn(n)).find(m=>m.measurementId===s);l&&await e[l.appId]}}catch(i){R.error(i)}t("config",s,o)}async function Eu(t,e,n,a,s){try{let o=[];if(s&&s.send_to){let r=s.send_to;Array.isArray(r)||(r=[r]);const i=await Pn(n);for(const l of r){const m=i.find(v=>v.measurementId===l),I=m&&e[m.appId];if(I)o.push(I);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",a,s||{})}catch(o){R.error(o)}}function Au(t,e,n,a){async function s(o,...r){try{if(o==="event"){const[i,l]=r;await Eu(t,e,n,i,l)}else if(o==="config"){const[i,l]=r;await Pu(t,e,n,a,i,l)}else if(o==="consent"){const[i,l]=r;t("consent",i,l)}else if(o==="get"){const[i,l,m]=r;t("get",i,l,m)}else if(o==="set"){const[i]=r;t("set",i)}else t(o,...r)}catch(i){R.error(i)}}return s}function Lu(t,e,n,a,s){let o=function(...r){window[a].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=Au(o,t,e,n),{gtagCore:o,wrappedGtag:window[s]}}function Cu(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ut)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=30,Vu=1e3;class Mu{constructor(e={},n=Vu){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const En=new Mu;function Nu(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Bu(t){var e;const{appId:n,apiKey:a}=t,s={method:"GET",headers:Nu(a)},o=ku.replace("{app-id}",n),r=await fetch(o,s);if(r.status!==200&&r.status!==304){let i="";try{const l=await r.json();!((e=l.error)===null||e===void 0)&&e.message&&(i=l.error.message)}catch{}throw F.create("config-fetch-failed",{httpStatus:r.status,responseMessage:i})}return r.json()}async function Ou(t,e=En,n){const{appId:a,apiKey:s,measurementId:o}=t.options;if(!a)throw F.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:a};throw F.create("no-api-key")}const r=e.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},i=new Hu;return setTimeout(async()=>{i.abort()},yu),An({appId:a,apiKey:s,measurementId:o},r,i,e)}async function An(t,{throttleEndTimeMillis:e,backoffCount:n},a,s=En){var o;const{appId:r,measurementId:i}=t;try{await Ru(a,e)}catch(l){if(i)return R.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${i} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:r,measurementId:i};throw l}try{const l=await Bu(t);return s.deleteThrottleMetadata(r),l}catch(l){const m=l;if(!Fu(m)){if(s.deleteThrottleMetadata(r),i)return R.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${i} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:r,measurementId:i};throw l}const I=Number((o=m==null?void 0:m.customData)===null||o===void 0?void 0:o.httpStatus)===503?pt(n,s.intervalMillis,Du):pt(n,s.intervalMillis),v={throttleEndTimeMillis:Date.now()+I,backoffCount:n+1};return s.setThrottleMetadata(r,v),R.debug(`Calling attemptFetch again in ${I} millis`),An(t,v,a,s)}}function Ru(t,e){return new Promise((n,a)=>{const s=Math.max(e-Date.now(),0),o=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(o),a(F.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Fu(t){if(!(t instanceof ie)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Hu{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ju(t,e,n,a,s){if(s&&s.global){t("event",n,a);return}else{const o=await e,r=Object.assign(Object.assign({},a),{send_to:o});t("event",n,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uu(){if(Qt())try{await Zt()}catch(t){return R.warn(F.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return R.warn(F.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function zu(t,e,n,a,s,o,r){var i;const l=Ou(t);l.then(S=>{n[S.measurementId]=S.appId,t.options.measurementId&&S.measurementId!==t.options.measurementId&&R.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>R.error(S)),e.push(l);const m=Uu().then(S=>{if(S)return a.getId()}),[I,v]=await Promise.all([l,m]);Cu(o)||Su(o,I.measurementId),s("js",new Date);const $=(i=r==null?void 0:r.config)!==null&&i!==void 0?i:{};return $[bu]="firebase",$.update=!0,v!=null&&($[gu]=v),s("config",I.measurementId,$),I.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e){this.app=e}_delete(){return delete le[this.app.options.appId],Promise.resolve()}}let le={},St=[];const Tt={};let Oe="dataLayer",Wu="gtag",Pt,Ln,Et=!1;function qu(){const t=[];if(_c()&&t.push("This is a browser extension environment."),gc()||t.push("Cookies are not available."),t.length>0){const e=t.map((a,s)=>`(${s+1}) ${a}`).join(" "),n=F.create("invalid-analytics-context",{errorInfo:e});R.warn(n.message)}}function xu(t,e,n){qu();const a=t.options.appId;if(!a)throw F.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)R.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw F.create("no-api-key");if(le[a]!=null)throw F.create("already-exists",{id:a});if(!Et){Tu(Oe);const{wrappedGtag:o,gtagCore:r}=Lu(le,St,Tt,Oe,Wu);Ln=o,Pt=r,Et=!0}return le[a]=zu(t,St,Tt,e,Pt,Oe,n),new Gu(t)}function Ku(t=kl()){t=en(t);const e=Se(t,_e);return e.isInitialized()?e.getImmediate():Ju(t)}function Ju(t,e={}){const n=Se(t,_e);if(n.isInitialized()){const s=n.getImmediate();if(pe(e,n.getOptions()))return s;throw F.create("already-initialized")}return n.initialize({options:e})}function Yu(t,e,n,a){t=en(t),ju(Ln,le[t.app.options.appId],e,n,a).catch(s=>R.error(s))}const At="@firebase/analytics",Lt="0.10.7";function Xu(){ne(new Q(_e,(e,{options:n})=>{const a=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return xu(a,s,n)},"PUBLIC")),ne(new Q("analytics-internal",t,"PRIVATE")),X(At,Lt),X(At,Lt,"esm2017");function t(e){try{const n=e.getProvider(_e).getImmediate();return{logEvent:(a,s,o)=>Yu(n,a,s,o)}}catch(n){throw F.create("interop-component-reg-failed",{reason:n})}}}Xu();const td={...rc},Qu={apiKey:"AIzaSyDcKx1dBRVlvaoR62jKeR_t22EnPgZsy3k",authDomain:"nas-wiki.firebaseapp.com",projectId:"nas-wiki",storageBucket:"nas-wiki.appspot.com",messagingSenderId:"438774902687",appId:"1:438774902687:web:f160b922e7b50d5ef197aa",measurementId:"G-YHZ0PVFXQ3"},Zu=on(Qu);Ku(Zu);export{td as R,Cr as c,T as u};
