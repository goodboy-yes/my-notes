"use strict";(self.webpackChunkmy_notes=self.webpackChunkmy_notes||[]).push([[734],{3865:(e,a,n)=>{n.r(a),n.d(a,{data:()=>s});const s={key:"v-7393289b",path:"/development-practice/technical-scheme.html",title:"技术方案",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"时间库",slug:"时间库",children:[{level:3,title:"Moment.js",slug:"moment-js",children:[]},{level:3,title:"Day.js",slug:"day-js",children:[]},{level:3,title:"date-fns",slug:"date-fns",children:[]}]},{level:2,title:"文件下载",slug:"文件下载",children:[{level:3,title:"FileSaver.js",slug:"filesaver-js",children:[]}]},{level:2,title:"更多 NPM 包",slug:"更多-npm-包",children:[]},{level:2,title:"网页离开时的请求发送",slug:"网页离开时的请求发送",children:[]},{level:2,title:"解决 node_modules 中第三方库 bug",slug:"解决-node-modules-中第三方库-bug",children:[]}],filePathRelative:"development-practice/technical-scheme.md",git:{updatedTime:1632585714e3,contributors:[]}}},687:(e,a,n)=>{n.r(a),n.d(a,{default:()=>L});var s=n(6252);const r=(0,s._)("h1",{id:"技术方案",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#技术方案","aria-hidden":"true"},"#"),(0,s.Uk)(" 技术方案")],-1),l=(0,s._)("h2",{id:"时间库",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#时间库","aria-hidden":"true"},"#"),(0,s.Uk)(" 时间库")],-1),t={id:"moment-js",tabindex:"-1"},d=(0,s._)("a",{class:"header-anchor",href:"#moment-js","aria-hidden":"true"},"#",-1),p=(0,s.Uk)(),i={href:"http://momentjs.cn/",target:"_blank",rel:"noopener noreferrer"},c=(0,s.Uk)("Moment.js"),o=(0,s._)("p",null,"最知名、最古老的 JavaScript 日期处理类库",-1),h={id:"day-js",tabindex:"-1"},u=(0,s._)("a",{class:"header-anchor",href:"#day-js","aria-hidden":"true"},"#",-1),m=(0,s.Uk)(),b={href:"https://dayjs.fenxianglu.cn/",target:"_blank",rel:"noopener noreferrer"},_=(0,s.Uk)("Day.js"),g=(0,s._)("p",null,"Day.js 是一个极简的 JavaScript 库，可以为现代浏览器解析、验证、操作和显示日期和时间，是 Moment.js 替代方案(自 2020 年 9 月起进入纯维护模式,不再开发新版本）",-1),k={id:"date-fns",tabindex:"-1"},f=(0,s._)("a",{class:"header-anchor",href:"#date-fns","aria-hidden":"true"},"#",-1),v=(0,s.Uk)(),j={href:"https://date-fns.org/",target:"_blank",rel:"noopener noreferrer"},U=(0,s.Uk)("date-fns"),x=(0,s._)("p",null,"date-fns 提供了最全面、最简单且一致的工具集，用于在浏览器和 Node.js 中操作 JavaScript 日期。",-1),y=(0,s._)("h2",{id:"文件下载",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#文件下载","aria-hidden":"true"},"#"),(0,s.Uk)(" 文件下载")],-1),q={id:"filesaver-js",tabindex:"-1"},N=(0,s._)("a",{class:"header-anchor",href:"#filesaver-js","aria-hidden":"true"},"#",-1),W=(0,s.Uk)(),M={href:"https://github.com/eligrey/FileSaver.js/",target:"_blank",rel:"noopener noreferrer"},S=(0,s.Uk)("FileSaver.js"),P=(0,s._)("p",null,"FileSaver.js 在没有原生支持 saveAs() 的浏览器上实现了 saveAs() 接口。是文件下载的标杆项目。",-1),w=(0,s._)("h2",{id:"更多-npm-包",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#更多-npm-包","aria-hidden":"true"},"#"),(0,s.Uk)(" 更多 NPM 包")],-1),C={href:"https://juejin.cn/post/6950584088462163982",target:"_blank",rel:"noopener noreferrer"},D=(0,s.Uk)("让我告诉你一些强无敌的 NPM 软件包"),F=(0,s._)("h2",{id:"网页离开时的请求发送",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#网页离开时的请求发送","aria-hidden":"true"},"#"),(0,s.Uk)(" 网页离开时的请求发送")],-1),z={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/sendBeacon",target:"_blank",rel:"noopener noreferrer"},A=(0,s.Uk)("Navigator.sendBeacon"),B=(0,s.uE)('<p>这个方法主要用于满足统计和诊断代码的需要，这些代码通常尝试在卸载（unload）文档之前向 web 服务器发送数据。</p><p>同步的 <code>XMLHttpRequest</code> 迫使用户代理延迟卸载文档，并使得下一个导航出现的更晚。有一些技术被用来保证数据的发送。其中一种是通过在卸载事件处理器中创建一个图片元素并设置它的 <code>src</code> 属性的方法来延迟卸载以保证数据的发送，但会延迟卸载以保证图片的载入</p><p>使用 <code>sendBeacon()</code> 方法会使用户代理在有机会时异步地向服务器发送数据，同时不会延迟页面的卸载或影响下一导航的载入性能。这就解决了提交分析数据时的所有的问题：数据可靠，传输异步并且不会影响下一页面的加载。此外，代码实际上还要比其他技术简单许多！</p><h2 id="解决-node-modules-中第三方库-bug" tabindex="-1"><a class="header-anchor" href="#解决-node-modules-中第三方库-bug" aria-hidden="true">#</a> 解决 node_modules 中第三方库 bug</h2><p>一般来说，解决 node_modules 中第三方库的 bug 大概有两种思路：</p>',5),J=(0,s._)("li",null,[(0,s._)("p",null,[(0,s.Uk)("第一种思路是将第三方库中有问题的文件 copy 一份进行修复，放在项目目录里面(非 node_modules)，然后通过构建工具 "),(0,s._)("code",null,"resolve.alias"),(0,s.Uk)(" 能力重定向到修复后的位置。")])],-1),R=(0,s.uE)('<p>另一种是通过 <code>patch-package</code> 记录 node_modules 更改记录，生成 patches 目录，然后通过项目的 post-install 脚本在团队中同步这个更改，实现第三方库的临时 patch，当然这也适合其他第三方库问题的临时修复。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// 1. 安装\nnpm i patch-package\n//of\nyarn add patch-package postinstall-postinstall\n\n// 2. 修改 node_modules 代码后执行：\nyarn patch-package package-name(修改的包名)\n//of\nnpx patch-package package-name（npm版本 &gt; 5.2）\n\n// 3. package.json 中 scripts 增加：\n&quot;scripts&quot;: {\n    ***,\n+   &quot;postinstall&quot;: &quot;patch-package&quot;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>手动删除 node_modules 文件夹，重新执行 npm install 安装依赖包。可以看到在依赖包安装结束后执行了 patch-package 命令，之前生成的补丁被应用了。 最后将 patches 文件夹推送到远端仓库，日后无论是谁拉取代码，安装依赖，我们之前修改的部分都会生效的</p><p><strong>注意事项：</strong> patch 是锁定版本号的，如果升级了版本，patch 内容将会失效，最好在 package.json 能够锁定版本号。 魔改的同时，也局限了升级的能力，尽量还是去提 issue 和 PR。</p>',4),E={href:"https://github.com/ds300/patch-package",target:"_blank",rel:"noopener noreferrer"},H=(0,s.Uk)("patch-package-官方"),L={render:function(e,a){const n=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[r,l,(0,s._)("h3",t,[d,p,(0,s._)("a",i,[c,(0,s.Wm)(n)])]),o,(0,s._)("h3",h,[u,m,(0,s._)("a",b,[_,(0,s.Wm)(n)])]),g,(0,s._)("h3",k,[f,v,(0,s._)("a",j,[U,(0,s.Wm)(n)])]),x,y,(0,s._)("h3",q,[N,W,(0,s._)("a",M,[S,(0,s.Wm)(n)])]),P,w,(0,s._)("blockquote",null,[(0,s._)("p",null,[(0,s._)("a",C,[D,(0,s.Wm)(n)])])]),F,(0,s._)("p",null,[(0,s._)("a",z,[A,(0,s.Wm)(n)])]),B,(0,s._)("ul",null,[J,(0,s._)("li",null,[R,(0,s._)("p",null,[(0,s._)("a",E,[H,(0,s.Wm)(n)])])])])],64)}}}}]);