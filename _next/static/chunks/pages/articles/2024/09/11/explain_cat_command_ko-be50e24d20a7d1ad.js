(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[549],{866:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/2024/09/11/explain_cat_command_ko",function(){return t(5773)}])},5773:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return p},default:function(){return _},markdoc:function(){return h}});var r=t(5271),a=t(487),i=t(8860),c=t(3975),u=t(9339),o=t(5746);let s={tags:(0,c.w)(u),nodes:(0,c.w)(o),functions:(0,c.w)({}),...(0,c.w)({})},l=new i.ZP.Tokenizer({allowComments:!0}).tokenize("---\ndocName: 'explain_cat_command_ko'\ntitle: 'Explain cat command in Korean'\ndescription: 'Explain cat command in Korean.'\ncoverImageName: 'ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg'\nkeywords: ['posix cat', 'linux cat', 'ko']\nwrittenAt: '2024-09-11 11:00'\nupdatedAt: '2024-09-11 11:00'\n---\n\n# cat\n\n{% image src=\"./ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg\" width=340 height=200 alt=\"cat\" /%}\n\n> 파일 출력 및 연결.\n> 더 많은 정보: <https://manned.org/cat.1posix>.\n\n- 파일 내용을 `stdout`으로 출력:\n\n```bash\ncat {{경로/대상/파일}}\n```\n\n- 여러 파일을 출력 파일로 연결:\n\n```bash\ncat {{경로/대상/파일1 경로/대상/파일2 ...}} > {{경로/대상/출력_파일}}\n```\n\n- 여러 파일을 출력 파일에 추가:\n\n```bash\ncat {{경로/대상/파일1 경로/대상/파일2 ...}} >> {{경로/대상/출력_파일}}\n```\n\n- 버퍼링 없이 파일 내용을 출력 파일로 복사:\n\n```bash\ncat -u {{/dev/tty12}} > {{/dev/tty13}}\n```\n\n- `stdin`을 파일로 쓰기:\n\n```bash\ncat - > {{경로/대상/파일}}\n```\n\n> _src. <https://github.com/tldr-pages/tldr/blob/main/pages.ko/common/cat.md>_\n"),d=i.ZP.parse(l,{slots:!1}),m=d.attributes.frontmatter?a.ZP.load(d.attributes.frontmatter):{},{components:f}=(0,c.J)(s);var p=!0;let h={frontmatter:m};function _(e){let n=e.markdoc;return i.RZ.react(n.content,r,{components:{...f,...e.components}})}},5746:function(e,n,t){"use strict";t.r(n),t.d(n,{fence:function(){return u}});var r=t(2676),a=t(5488),i=t.n(a);t(3745),t(1199),t(5256),t(9819),t(4586),t(2808);var c=t(5271);let u={render:e=>{let{children:n,"data-language":t}=e,a=(0,c.useRef)(null);return(0,c.useEffect)(()=>{a.current&&i().highlightElement(a.current,!1)},[n]),(0,r.jsx)("div",{className:"code","aria-live":"polite",children:(0,r.jsx)("pre",{ref:a,className:"language-".concat(t),children:n})})},attributes:t(8860).td.fence.attributes}},9339:function(e,n,t){"use strict";t.r(n),t.d(n,{image:function(){return a},jsfiddle:function(){return c}});var r=t(670),a={render:t.n(r)(),attributes:{width:{type:Number,default:"500",errorLevel:"critical",required:!0},height:{type:Number,default:"500",errorLevel:"critical",required:!0},src:{type:String,errorLevel:"critical",required:!0},alt:{type:String,errorLevel:"critical",required:!0}}},i=t(2676),c={render:e=>(0,i.jsx)("iframe",{...e}),attributes:{width:{type:String,default:"100%",errorLevel:"critical",required:!0},height:{type:String,default:"500",errorLevel:"critical",required:!0},src:{type:String,errorLevel:"critical",required:!0}}}}},function(e){e.O(0,[219,518,888,774,179],function(){return e(e.s=866)}),_N_E=e.O()}]);