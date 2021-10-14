"use strict";(self.webpackChunkmy_notes=self.webpackChunkmy_notes||[]).push([[437],{7356:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-03a96631",path:"/webpack/principle-analysis.html",title:"原理分析",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Tree Shaking",slug:"tree-shaking",children:[{level:3,title:"在 Webpack 中启动 Tree Shaking",slug:"在-webpack-中启动-tree-shaking",children:[]},{level:3,title:"实现原理",slug:"实现原理",children:[]},{level:3,title:"最佳实践",slug:"最佳实践",children:[]}]}],filePathRelative:"webpack/principle-analysis.md",git:{updatedTime:1634206527e3,contributors:[]}}},8404:(n,a,s)=>{s.r(a),s.d(a,{default:()=>N});var e=s(6252),l=s(4949);const t=(0,e._)("h1",{id:"原理分析",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#原理分析","aria-hidden":"true"},"#"),(0,e.Uk)(" 原理分析")],-1),o=(0,e._)("h2",{id:"tree-shaking",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#tree-shaking","aria-hidden":"true"},"#"),(0,e.Uk)(" Tree Shaking")],-1),p=(0,e._)("p",null,"Tree-Shaking 是一种基于 ES Module 规范的 Dead Code Elimination 技术，它会在运行过程中静态分析模块之间的导入导出，确定 ESM 模块中哪些导出值未曾其它模块使用，并将其删除，以此实现打包产物的优化。",-1),r=(0,e._)("p",null,"Tree Shaking 较早前由 Rich Harris 在 Rollup 中率先实现，Webpack 自 2.0 版本开始接入，至今已经成为一种应用广泛的性能优化手段。",-1),c=(0,e._)("h3",{id:"在-webpack-中启动-tree-shaking",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#在-webpack-中启动-tree-shaking","aria-hidden":"true"},"#"),(0,e.Uk)(" 在 Webpack 中启动 Tree Shaking")],-1),i=(0,e._)("p",null,"在 Webpack 中，启动 Tree Shaking 功能必须同时满足三个条件：",-1),u=(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("p",null,"使用 ESM 规范编写模块代码")]),(0,e._)("li",null,[(0,e._)("p",null,"配置 optimization.usedExports 为 true，启动标记功能")]),(0,e._)("li",null,[(0,e._)("p",null,"启动代码优化功能，可以通过如下方式实现："),(0,e._)("ul",null,[(0,e._)("li",null,"配置 mode = production"),(0,e._)("li",null,"配置 optimization.minimize = true"),(0,e._)("li",null,"提供 optimization.minimizer 数组")])])],-1),k=(0,e._)("p",null,"例如：",-1),_=(0,e._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e._)("pre",{class:"language-javascript"},[(0,e._)("code",null,[(0,e._)("span",{class:"token comment"},"// webpack.config.js"),(0,e.Uk)("\nmodule"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("exports "),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  entry"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'"./src/index"'),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n  mode"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'"production"'),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n  devtool"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token boolean"},"false"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n  optimization"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    usedExports"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token boolean"},"true"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token punctuation"},"}"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"4"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"5"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"6"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"7"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"8"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"9"),(0,e._)("br")])],-1),b=(0,e._)("p",null,"ESM 下模块之间的依赖关系是高度确定的，与运行状态无关，编译工具只需要对 ESM 模块做静态分析，就可以从代码字面量中推断出哪些模块值未曾被其它模块使用，这是实现 Tree Shaking 技术的必要条件。",-1),d=(0,e._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e._)("pre",{class:"language-javascript"},[(0,e._)("code",null,[(0,e._)("span",{class:"token comment"},"// index.js"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token keyword"},"import"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)(" bar "),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"from"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'"./bar"'),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\nconsole"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"log"),(0,e._)("span",{class:"token punctuation"},"("),(0,e.Uk)("bar"),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token comment"},"// bar.js"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token keyword"},"export"),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"const"),(0,e.Uk)(" bar "),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'"bar"'),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token keyword"},"export"),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"const"),(0,e.Uk)(" foo "),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'"foo"'),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"4"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"5"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"6"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"7"),(0,e._)("br")])],-1),m=(0,e._)("p",null,"示例中，bar.js 模块导出了 bar 、foo ，但只有 bar 导出值被其它模块使用，经过 Tree Shaking 处理后，foo 变量会被视作无用代码删除。",-1),g=(0,e._)("h3",{id:"实现原理",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#实现原理","aria-hidden":"true"},"#"),(0,e.Uk)(" 实现原理")],-1),U=(0,e._)("p",null,"Webpack 中，Tree-shaking 的实现一是先标记出模块导出值中哪些没有被用过，二是使用 Terser 删掉这些没被用到的导出语句。标记过程大致可划分为三个步骤：（具体步骤见参考链接）",-1),h=(0,e._)("ul",null,[(0,e._)("li",null,"Make 阶段，收集模块导出变量并记录到模块依赖关系图 ModuleGraph 变量中"),(0,e._)("li",null,"Seal 阶段，遍历 ModuleGraph 标记模块导出变量有没有被使用"),(0,e._)("li",null,"生成产物时，若变量没有被其它模块使用则删除对应的导出语句")],-1),f=(0,e._)("h3",{id:"最佳实践",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#最佳实践","aria-hidden":"true"},"#"),(0,e.Uk)(" 最佳实践")],-1),S=(0,e._)("p",null,"虽然 Webpack 自 2.x 开始就原生支持 Tree Shaking 功能，但受限于 JS 的动态特性与模块的复杂性，直至最新的 5.0 版本依然没有解决许多代码副作用带来的问题，使得优化效果并不如 Tree Shaking 原本设想的那么完美，所以需要使用者有意识地优化代码结构，或使用一些补丁技术帮助 Webpack 更精确地检测无效代码，完成 Tree Shaking 操作。",-1),v=(0,e._)("p",null,[(0,e._)("strong",null,"避免无意义的赋值")],-1),x=(0,e._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e._)("pre",{class:"language-javascript"},[(0,e._)("code",null,[(0,e._)("span",{class:"token keyword"},"import"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)(" bar"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" foo "),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"from"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'"./bar"'),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\nconsole"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"log"),(0,e._)("span",{class:"token punctuation"},"("),(0,e.Uk)("bar"),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token keyword"},"const"),(0,e.Uk)(" f "),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(" foo"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br")])],-1),j=(0,e._)("p",null,"示例中，index.js 模块引用了 bar.js 模块的 foo 并赋值给 f 变量，但后续并没有继续用到 foo 或 f 变量，这种场景下 bar.js 模块导出的 foo 值实际上并没有被使用，理应被删除，但 Webpack 的 Tree Shaking 操作并没有生效，产物中依然保留",-1),w=(0,e._)("p",null,[(0,e._)("strong",null,"使用 #pure 标注纯函数调用")],-1),T=(0,e._)("p",null,[(0,e.Uk)("与赋值语句类似，JavaScript 中的函数调用语句也可能产生副作用，因此默认情况下 Webpack 并不会对函数调用做 Tree Shaking 操作。不过，开发者可以在调用语句前添加"),(0,e._)("code",null,"/*#__PURE__*/"),(0,e.Uk)("备注，明确告诉 Webpack 该次函数调用并不会对上下文环境产生副作用")],-1),y=(0,e._)("p",null,[(0,e._)("strong",null,"禁止 Babel 转译模块导入导出语句")],-1),W=(0,e._)("p",null,"Babel 是一个非常流行的 JavaScript 代码转换器，它能够将高版本的 JS 代码等价转译为兼容性更佳的低版本代码，使得前端开发者能够使用最新的语言特性开发出兼容旧版本浏览器的代码。",-1),E=(0,e._)("p",null,"但 Babel 提供的部分功能特性会致使 Tree Shaking 功能失效，例如 Babel 可以将 import/export 风格的 ESM 语句等价转译为 CommonJS 风格的模块化语句，但该功能却导致 Webpack 无法对转译后的模块导入导出内容做静态分析",-1),M=(0,e._)("p",null,[(0,e._)("img",{src:l,alt:""})],-1),C=(0,e._)("p",null,[(0,e.Uk)("示例使用 babel-loader 处理 *.js 文件，并设置 Babel 配置项 "),(0,e._)("code",null,"modules = 'commonjs'"),(0,e.Uk)("，将模块化方案从 ESM 转译到 CommonJS，导致转译代码(右图上一)没有正确标记出未被使用的导出值 foo。作为对比，右图 2 为 modules = false 时打包的结果，此时 foo 变量被正确标记为 Dead Code。")],-1),z=(0,e._)("p",null,"所以，在 Webpack 中使用 babel-loader 时，建议将 babel-preset-env 的 moduels 配置项设置为 false，关闭模块导入导出语句的转译。",-1),J=(0,e._)("p",null,[(0,e._)("strong",null,"优化导出值的粒度")],-1),B=(0,e._)("p",null,"Tree Shaking 逻辑作用在 ESM 的 export 语句上，因此对于下面这种导出场景：",-1),R=(0,e._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e._)("pre",{class:"language-javascript"},[(0,e._)("code",null,[(0,e._)("span",{class:"token keyword"},"export"),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"default"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  bar"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'"bar"'),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n  foo"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'"foo"'),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"4"),(0,e._)("br")])],-1),q=(0,e._)("p",null,"即使实际上只用到 default 导出值的其中一个属性，整个 default 对象依然会被完整保留。所以实际开发中，应该尽量保持导出值颗粒度和原子性，上例代码的优化版本：",-1),D=(0,e._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e._)("pre",{class:"language-javascript"},[(0,e._)("code",null,[(0,e._)("span",{class:"token keyword"},"const"),(0,e.Uk)(" bar "),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'"bar"'),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token keyword"},"const"),(0,e.Uk)(" foo "),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'"foo"'),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token keyword"},"export"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)(" bar"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" foo "),(0,e._)("span",{class:"token punctuation"},"}"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"4"),(0,e._)("br")])],-1),G=(0,e._)("p",null,[(0,e._)("strong",null,"使用支持 Tree Shaking 的包")],-1),P=(0,e._)("p",null,"如果可以的话，应尽量使用支持 Tree Shaking 的 npm 包，例如：",-1),H=(0,e._)("p",null,"使用 lodash-es 替代 lodash ，或者使用 babel-plugin-lodash 实现类似效果",-1),L=(0,e._)("p",null,"不过，并不是所有 npm 包都存在 Tree Shaking 的空间，诸如 React、Vue2 一类的框架原本已经对生产版本做了足够极致的优化，此时业务代码需要整个代码包提供的完整功能，基本上不太需要进行 Tree Shaking。",-1),A=(0,e.Uk)("参考链接 "),I={href:"https://mp.weixin.qq.com/s/K5rPkiCfj1I__J6GMfUBLA",target:"_blank",rel:"noopener noreferrer"},K=(0,e.Uk)("Webpack 原理系列九：Tree-Shaking 实现原理"),N={render:function(n,a){const s=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,o,p,r,c,i,u,k,_,b,d,m,g,U,h,f,S,v,x,j,w,T,y,W,E,M,C,z,J,B,R,q,D,G,P,H,L,(0,e._)("blockquote",null,[(0,e._)("p",null,[A,(0,e._)("a",I,[K,(0,e.Wm)(s)])])])],64)}}},4949:(n,a,s)=>{n.exports=s.p+"assets/img/tree-shaking-babel.92f45a02.webp"}}]);