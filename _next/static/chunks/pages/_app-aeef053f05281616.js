(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8154:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(1410)}])},5783:function(e,t){"use strict";var r,n,i,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_FAST_REFRESH:function(){return d},ACTION_NAVIGATE:function(){return a},ACTION_PREFETCH:function(){return c},ACTION_REFRESH:function(){return l},ACTION_RESTORE:function(){return s},ACTION_SERVER_ACTION:function(){return f},ACTION_SERVER_PATCH:function(){return u},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r},isThenable:function(){return p}});let l="refresh",a="navigate",s="restore",u="server-patch",c="prefetch",d="fast-refresh",f="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(i=r||(r={})).AUTO="auto",i.FULL="full",i.TEMPORARY="temporary",(o=n||(n={})).fresh="fresh",o.reusable="reusable",o.expired="expired",o.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},842:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8498),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7823:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let n=r(2430),i=r(1778),o=r(2676),l=i._(r(5271)),a=n._(r(967)),s=n._(r(1144)),u=r(6701),c=r(1772),d=r(2856);r(7757);let f=r(4604),p=n._(r(7714)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/template-nextjs-blog/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,n,i,o,l){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function m(e){return l.use?{fetchPriority:e}:{fetchpriority:e}}let b=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:a,width:s,decoding:u,className:c,style:d,fetchPriority:f,placeholder:p,loading:g,unoptimized:b,fill:v,onLoadRef:y,onLoadingCompleteRef:x,setBlurComplete:j,setShowAltText:_,sizesInput:w,onLoad:C,onError:E,...O}=e;return(0,o.jsx)("img",{...O,...m(f),loading:g,width:s,height:a,decoding:u,"data-nimg":v?"fill":"1",className:c,style:d,sizes:i,srcSet:n,src:r,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&h(e,p,y,x,j,b,w))},[r,p,y,x,j,E,b,w,t]),onLoad:e=>{h(e.currentTarget,p,y,x,j,b,w)},onError:e=>{_(!0),"empty"!==p&&j(!0),E&&E(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...m(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,n),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let y=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(f.RouterContext),n=(0,l.useContext)(d.ImageConfigContext),i=(0,l.useMemo)(()=>{let e=g||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:a,onLoadingComplete:s}=e,h=(0,l.useRef)(a);(0,l.useEffect)(()=>{h.current=a},[a]);let m=(0,l.useRef)(s);(0,l.useEffect)(()=>{m.current=s},[s]);let[y,x]=(0,l.useState)(!1),[j,_]=(0,l.useState)(!1),{props:w,meta:C}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:y,showAltText:j});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{...w,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:h,onLoadingCompleteRef:m,setBlurComplete:x,setShowAltText:_,sizesInput:e.sizes,ref:t}),C.priority?(0,o.jsx)(v,{isAppRouter:!r,imgAttributes:w}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1578:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x}});let n=r(2430),i=r(2676),o=n._(r(5271)),l=r(1253),a=r(9404),s=r(7035),u=r(5957),c=r(5634),d=r(4604),f=r(2869),p=r(8011),g=r(842),h=r(1802),m=r(5783),b=new Set;function v(e,t,r,n,i,o){if(o||(0,a.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let i=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(b.has(i))return;b.add(i)}(async()=>o?e.prefetch(t,i):e.prefetch(t,r,n))().catch(e=>{})}}function y(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let x=o.default.forwardRef(function(e,t){let r,n;let{href:s,as:b,children:x,prefetch:j=null,passHref:_,replace:w,shallow:C,scroll:E,locale:O,onClick:P,onMouseEnter:A,onTouchStart:S,legacyBehavior:R=!1,...k}=e;r=x,R&&("string"==typeof r||"number"==typeof r)&&(r=(0,i.jsx)("a",{children:r}));let I=o.default.useContext(d.RouterContext),M=o.default.useContext(f.AppRouterContext),N=null!=I?I:M,T=!I,z=!1!==j,L=null===j?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:D,as:F}=o.default.useMemo(()=>{if(!I){let e=y(s);return{href:e,as:b?y(b):e}}let[e,t]=(0,l.resolveHref)(I,s,!0);return{href:e,as:b?(0,l.resolveHref)(I,b):t||e}},[I,s,b]),U=o.default.useRef(D),B=o.default.useRef(F);R&&(n=o.default.Children.only(r));let K=R?n&&"object"==typeof n&&n.ref:t,[H,V,G]=(0,p.useIntersection)({rootMargin:"200px"}),W=o.default.useCallback(e=>{(B.current!==F||U.current!==D)&&(G(),B.current=F,U.current=D),H(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[F,K,D,G,H]);o.default.useEffect(()=>{N&&V&&z&&v(N,D,F,{locale:O},{kind:L},T)},[F,D,V,O,z,null==I?void 0:I.locale,N,T,L]);let Y={ref:W,onClick(e){R||"function"!=typeof P||P(e),R&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,r,n,i,l,s,u,c){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let f=()=>{let e=null==s||s;"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:l,locale:u,scroll:e}):t[i?"replace":"push"](n||r,{scroll:e})};c?o.default.startTransition(f):f()}(e,N,D,F,w,C,E,O,T)},onMouseEnter(e){R||"function"!=typeof A||A(e),R&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),N&&(z||!T)&&v(N,D,F,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:L},T)},onTouchStart:function(e){R||"function"!=typeof S||S(e),R&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),N&&(z||!T)&&v(N,D,F,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:L},T)}};if((0,u.isAbsoluteUrl)(F))Y.href=F;else if(!R||_||"a"===n.type&&!("href"in n.props)){let e=void 0!==O?O:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,g.getDomainLocale)(F,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);Y.href=t||(0,h.addBasePath)((0,c.addLocale)(F,e,null==I?void 0:I.defaultLocale))}return R?o.default.cloneElement(n,Y):(0,i.jsx)("a",{...k,...Y,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8011:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(5271),i=r(6823),o="function"==typeof IntersectionObserver,l=new Map,a=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,u=s||!o,[c,d]=(0,n.useState)(!1),f=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{f.current=e},[]);return(0,n.useEffect)(()=>{if(o){if(u||c)return;let e=f.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:i,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let i=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:i},a.push(r),l.set(r,t),t}(r);return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),l.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,i.requestIdleCallback)(()=>d(!0));return()=>(0,i.cancelIdleCallback)(e)}},[u,r,t,c,f.current]),[p,c,(0,n.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6701:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(7757);let n=r(2877),i=r(1772);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,s,u,{src:c,sizes:d,unoptimized:f=!1,priority:p=!1,loading:g,className:h,quality:m,width:b,height:v,fill:y=!1,style:x,overrideSrc:j,onLoad:_,onLoadingComplete:w,placeholder:C="empty",blurDataURL:E,fetchPriority:O,layout:P,objectFit:A,objectPosition:S,lazyBoundary:R,lazyRoot:k,...I}=e,{imgConf:M,showAltText:N,blurComplete:T,defaultLoader:z}=t,L=M||i.imageConfigDefault;if("allSizes"in L)a=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);a={...L,allSizes:e,deviceSizes:t}}if(void 0===z)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let D=I.loader||z;delete I.loader,delete I.srcSet;let F="__next_img_default"in D;if(F){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:r,...n}=t;return e(n)}}if(P){"fill"===P&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(x={...x,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!d&&(d=t)}let U="",B=l(b),K=l(v);if("object"==typeof(r=c)&&(o(r)||void 0!==r.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,E=E||e.blurDataURL,U=e.src,!y){if(B||K){if(B&&!K){let t=B/e.width;K=Math.round(e.height*t)}else if(!B&&K){let t=K/e.height;B=Math.round(e.width*t)}}else B=e.width,K=e.height}}let H=!p&&("lazy"===g||void 0===g);(!(c="string"==typeof c?c:U)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,H=!1),a.unoptimized&&(f=!0),F&&c.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(O="high");let V=l(m),G=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:S}:{},N?{}:{color:"transparent"},x),W=T||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:B,heightInt:K,blurWidth:s,blurHeight:u,blurDataURL:E||"",objectFit:G.objectFit})+'")':'url("'+C+'")',Y=W?{backgroundSize:G.objectFit||"cover",backgroundPosition:G.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:W}:{},Q=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:l,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,l),c=s.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:s.map((e,n)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:a({config:t,src:r,quality:o,width:s[c]})}}({config:a,src:c,unoptimized:f,width:B,quality:V,sizes:d,loader:D});return{props:{...I,loading:H?"lazy":g,fetchPriority:O,width:B,height:K,decoding:"async",className:h,style:{...G,...Y},sizes:Q.sizes,srcSet:Q.srcSet,src:j||Q.src},meta:{unoptimized:f,priority:p,placeholder:C,fill:y}}}},2877:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:l}=e,a=n?40*n:t,s=i?40*i:r,u=a&&s?"viewBox='0 0 "+a+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},829:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return a}});let n=r(2430),i=r(6701),o=r(7823),l=n._(r(7714));function a(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/template-nextjs-blog/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=o.Image},7714:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},1410:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(2676),i=r(5271);function o({id:e,host:t,repo:o,repoId:l,category:a,categoryId:s,mapping:u,term:c,strict:d,reactionsEnabled:f,emitMetadata:p,inputPosition:g,theme:h,lang:m,loading:b}){let[v,y]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{v||(r.e(620).then(r.bind(r,620)),y(!0))},[]),v?(0,n.jsx)("giscus-widget",{id:e,host:t,repo:o,repoid:l,category:a,categoryid:s,mapping:u,term:c,strict:d,reactionsenabled:f,emitmetadata:p,inputposition:g,theme:h,lang:m,loading:b}):null}r(5497);var l=r(7399),a=r(8491);function s(e){var t;let{Component:r,pageProps:i}=e;return(null!==(t=r.getLayout)&&void 0!==t?t:e=>{var t,r;let i=null!==(r=null===(t=e.props.markdoc)||void 0===t?void 0:t.frontmatter.title)&&void 0!==r?r:a.y;return(0,n.jsxs)(l.default,{title:i,children:[e,(0,n.jsx)("hr",{}),e.props.markdoc&&(0,n.jsx)(o,{id:"comments",repo:"binarydiver/template-nextjs-blog",repoId:"R_kgDOIogC8w",category:"Q&A",categoryId:"DIC_kwDOIogC884CiTNx",mapping:"pathname",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"bottom",theme:"dark",lang:"en",loading:"lazy"})]})})((0,n.jsx)(r,{...i}))}},248:function(e,t,r){"use strict";r.r(t);var n=r(2676);t.default=()=>(0,n.jsx)("footer",{className:"border-t mt-auto p-4 text-center",children:"\xa9 2024 Author"})},1393:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(2676),i={src:"/template-nextjs-blog/_next/static/media/github-mark-white.fd5c0afd.svg",height:96,width:98,blurWidth:0,blurHeight:0},o={src:"/template-nextjs-blog/_next/static/media/rss-512.806268e7.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA40lEQVR42i2Ou0oDURRFd6PgD4iV2OhXKYKFUdA0anx8g5BgPsBa1FItRCtRTG6RIpAiCYEkxcwZBoYwM8kEcnfuuaQ7HBZrL0S320bOweAANiyB0d0u3c/K9Sajmy0DKYN564fFuM/ktc7wBJTKmoN2qBDkAjZ5umfW+OQiT1mMepQrhda9CarP2/+cDTqMH445D0Yshl1n0rk9QiobjKuHHlrMcsb1kjclLzVqE8JT2PT3nZO3R05Xpqz55aeCfVioKjPfTP8+GNeOPJQ8V324nIFwtUYhNemcNsmlu8vQSLMELBW4OfveOb4AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},l=r(8478),a=r.n(l),s=r(8215),u=r.n(s),c=e=>{let{title:t}=e,r=()=>{"dark"===localStorage.getItem("color-theme")?(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light")):(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark"))};return(0,n.jsx)("nav",{className:"border-b p-4",children:(0,n.jsxs)("div",{className:"flex max-w-screen-lg m-auto",children:[(0,n.jsx)("div",{className:"flex-auto",children:(0,n.jsx)(u(),{className:"no-underline",href:"/",children:(0,n.jsx)("h1",{className:"leading-normal m-0",children:t})})}),(0,n.jsxs)("div",{className:"flex flex-1 gap-x-2 items-center justify-end",children:[(0,n.jsx)("button",{type:"button",className:"text-white bg-gray-300 hover:bg-gray-400 focus:ring-gray-500 focus:outline-none focus:ring-2 font-medium rounded-lg text-4xl px-1.5 pb-1 dark:bg-gray-100 dark:hover:dark:bg-gray-400 dark:focus:ring-gray-200",onClick:()=>r(),children:"\uD83C\uDF13︎"}),(0,n.jsx)(u(),{href:"/rss.xml",children:(0,n.jsx)(a(),{alt:"rss icon",className:"m-0",height:44,src:o,style:{maxWidth:"44px"},width:44})}),(0,n.jsx)(u(),{href:"https://github.com/binarydiver/template-nextjs-blog",target:"_blank",children:(0,n.jsx)(a(),{alt:"github icon",className:"m-0",height:44,src:i,style:{maxWidth:"44px"},width:44})})]})]})})}},7399:function(e,t,r){"use strict";r.r(t),r.d(t,{revalidate:function(){return u}});var n=r(2676),i=r(9996),o=r.n(i),l=r(8491),a=r(248),s=r(1393);t.default=e=>{let{children:t,title:r}=e;return(0,n.jsxs)("div",{className:"flex flex-col h-screen",children:[(0,n.jsx)(o(),{children:(0,n.jsx)("title",{children:r})}),(0,n.jsx)(s.default,{title:l.y}),(0,n.jsx)("main",{className:"max-w-screen-lg mx-auto w-full p-4",children:t}),(0,n.jsx)(a.default,{})]})};let u=3600},8491:function(e,t,r){"use strict";r.d(t,{y:function(){return n}});let n="Next.js Blog Template"},5497:function(){},9996:function(e,t,r){e.exports=r(1144)},8478:function(e,t,r){e.exports=r(829)},8215:function(e,t,r){e.exports=r(1578)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(8154),t(9513)}),_N_E=e.O()}]);