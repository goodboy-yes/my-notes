"use strict";(self.webpackChunkmy_notes=self.webpackChunkmy_notes||[]).push([[750],{3251:(n,s,t)=>{t.r(s),t.d(s,{data:()=>a});const a={key:"v-7956879f",path:"/css/bfc.html",title:"块级格式化上下文(BFC)",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"常见定位方案",slug:"常见定位方案",children:[]},{level:2,title:"Box",slug:"box",children:[]},{level:2,title:"BFC 介绍",slug:"bfc-介绍",children:[]},{level:2,title:"BFC 产生条件",slug:"bfc-产生条件",children:[]},{level:2,title:"BFC 的布局规则",slug:"bfc-的布局规则",children:[]},{level:2,title:"BFC 应用",slug:"bfc-应用",children:[{level:3,title:"避免 margin 重叠",slug:"避免-margin-重叠",children:[]},{level:3,title:"BFC 可以包含浮动的元素（清除浮动）",slug:"bfc-可以包含浮动的元素-清除浮动",children:[]},{level:3,title:"自适应两栏布局(阻止元素被浮动元素覆盖)",slug:"自适应两栏布局-阻止元素被浮动元素覆盖",children:[]}]},{level:2,title:"总结",slug:"总结",children:[]}],filePathRelative:"css/bfc.md",git:{updatedTime:162999496e4,contributors:[]}}},5482:(n,s,t)=>{t.r(s),t.d(s,{default:()=>$});var a=t(6252),A=t(3736),B=t(380),l=t(5613),c=t(9666);const e=(0,a._)("h1",{id:"块级格式化上下文-bfc",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#块级格式化上下文-bfc","aria-hidden":"true"},"#"),(0,a.Uk)(" 块级格式化上下文(BFC)")],-1),o=(0,a._)("h2",{id:"常见定位方案",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#常见定位方案","aria-hidden":"true"},"#"),(0,a.Uk)(" 常见定位方案")],-1),i=(0,a._)("p",null,"在讲 BFC 之前，我们先来了解一下常见的定位方案，定位方案是控制元素的布局，有三种常见方案:",-1),g=(0,a._)("ul",null,[(0,a._)("li",null,"普通流 (normal flow)")],-1),p=(0,a._)("p",null,"在普通流中，元素按照其在 HTML 中的先后位置至上而下布局，在这个过程中，行内元素水平排列，直到当行被占满然后换行，块级元素则会被渲染为完整的一个新行，除非另外指定，否则所有元素默认都是普通流定位，也可以说，普通流中元素的位置由该元素在 HTML 文档中的位置决定。",-1),k=(0,a._)("ul",null,[(0,a._)("li",null,"浮动 (float)")],-1),E=(0,a._)("p",null,"在浮动布局中，元素首先按照普通流的位置出现，然后根据浮动的方向尽可能的向左边或右边偏移，其效果与印刷排版中的文本环绕相似。",-1),u=(0,a._)("ul",null,[(0,a._)("li",null,"绝对定位 (absolute positioning)")],-1),I=(0,a._)("p",null,"在绝对定位布局中，元素会整体脱离普通流，因此绝对定位元素不会对其兄弟元素造成影响，而元素具体的位置由绝对定位的坐标决定。",-1),Q=(0,a._)("h2",{id:"box",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#box","aria-hidden":"true"},"#"),(0,a.Uk)(" Box")],-1),C=(0,a._)("p",null,"Box 是 CSS 布局的对象和基本单位， 直观点来说，就是一个页面是由很多个 Box 组成的。元素的类型和 display 属性，决定了这个 Box 的类型。 不同类型的 Box， 会参与不同的 Formatting Context（一个决定如何渲染文档的容器），因此 Box 内的元素会以不同的方式渲染。让我们看看有哪些盒子：",-1),h=(0,a._)("p",null,[(0,a._)("strong",null,"block-level box")],-1),r=(0,a._)("p",null,[(0,a.Uk)("display 属性为 block, list-item, table 的元素，会生成 block-level box。并且参与 "),(0,a._)("code",null,"block fomatting context"),(0,a.Uk)("；")],-1),Y=(0,a._)("p",null,[(0,a._)("strong",null,"inline-level box")],-1),d=(0,a._)("p",null,[(0,a.Uk)("display 属性为 inline, inline-block, inline-table 的元素，会生成 inline-level box。并且参与 "),(0,a._)("code",null,"inline formatting context"),(0,a.Uk)("；")],-1),_=(0,a._)("p",null,[(0,a._)("strong",null,"run-in box")],-1),b=(0,a._)("h2",{id:"bfc-介绍",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#bfc-介绍","aria-hidden":"true"},"#"),(0,a.Uk)(" BFC 介绍")],-1),y=(0,a._)("p",null,"Formatting context(格式化上下文) 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。最常见的 Formatting context 有 Block fomatting context (简称 BFC)和 Inline formatting context (简称 IFC)。",-1),J=(0,a._)("p",null,"块级格式上下文 Block Formatting Context（简称 BFC ）属于普通流，里面的元素按文档流中的顺序垂直排列，并且发生垂直方向上的 margin 折叠，同时这个区域内的元素布局不会对外面的元素有任何影响，反过来外面元素也一样不会影响这个区域，具有 BFC 特性的元素可以看作是隔离了的独立容器，",-1),M=(0,a._)("h2",{id:"bfc-产生条件",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#bfc-产生条件","aria-hidden":"true"},"#"),(0,a.Uk)(" BFC 产生条件")],-1),m=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("p",null,"html 根元素是一个 BFC")]),(0,a._)("li",null,[(0,a._)("p",null,"float 属性取值不是“none”")]),(0,a._)("li",null,[(0,a._)("p",null,"overflow 属性取值不是“visible”")]),(0,a._)("li",null,[(0,a._)("p",null,"display 的值为 “flex”，“inline-flex”，“table-cell”，“table-caption”，或者 “inline-block”中的任何一个")]),(0,a._)("li",null,[(0,a._)("p",null,"position 的值不为 “static” 或 “relative”中的任何一个")])],-1),w=(0,a._)("h2",{id:"bfc-的布局规则",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#bfc-的布局规则","aria-hidden":"true"},"#"),(0,a.Uk)(" BFC 的布局规则")],-1),U=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("p",null,"内部的 Box 会在垂直方向，一个接一个地放置。")]),(0,a._)("li",null,[(0,a._)("p",null,"Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠。")]),(0,a._)("li",null,[(0,a._)("p",null,"每个盒子（块盒与行盒）的 margin box 的左边，与包含块 border box 的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。")]),(0,a._)("li",null,[(0,a._)("p",null,"BFC 的区域不会与 float box 重叠。")]),(0,a._)("li",null,[(0,a._)("p",null,"BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。")]),(0,a._)("li",null,[(0,a._)("p",null,"计算 BFC 的高度时，浮动元素也参与计算。")])],-1),O=(0,a._)("h2",{id:"bfc-应用",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#bfc-应用","aria-hidden":"true"},"#"),(0,a.Uk)(" BFC 应用")],-1),D=(0,a._)("h3",{id:"避免-margin-重叠",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#避免-margin-重叠","aria-hidden":"true"},"#"),(0,a.Uk)(" 避免 margin 重叠")],-1),H=(0,a._)("p",null,"属于同一个 BFC 的两个相邻的 Box 会发生 margin 重叠",-1),T=(0,a._)("img",{src:A,style:{zoom:"50%"}},null,-1),S=(0,a._)("p",null,"我们可以设置两个不同的 BFC 避免 margin 重叠。下面例子把第二个 p 用 div 包起来，然后激活它使其成为一个 BFC",-1),F=(0,a._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,a._)("pre",{class:"language-html"},[(0,a._)("code",null,[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("body")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("p")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("p")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("div")]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"class"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a.Uk)("container"),(0,a._)("span",{class:"token punctuation"},'"')]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("p")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("p")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("div")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n"),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("body")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n"),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("style")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a._)("span",{class:"token style"},[(0,a._)("span",{class:"token language-css"},[(0,a.Uk)("\n  "),(0,a._)("span",{class:"token selector"},"p"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token property"},"width"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" 100px"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token property"},"height"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" 100px"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token property"},"background"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" lightblue"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token property"},"margin"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" 100px"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token selector"},".container"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token property"},"overflow"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" hidden"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])]),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("style")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"6"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"7"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"8"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"9"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"10"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"11"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"12"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"13"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"14"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"15"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"16"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"17"),(0,a._)("br")])],-1),x=(0,a._)("img",{src:B,style:{zoom:"50%"}},null,-1),R=(0,a._)("h3",{id:"bfc-可以包含浮动的元素-清除浮动",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#bfc-可以包含浮动的元素-清除浮动","aria-hidden":"true"},"#"),(0,a.Uk)(" BFC 可以包含浮动的元素（清除浮动）")],-1),j=(0,a._)("p",null,"触发容器的 BFC，那么容器将会包裹着浮动元素。",-1),K=(0,a._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,a._)("pre",{class:"language-html"},[(0,a._)("code",null,[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("div")]),(0,a.Uk)(),(0,a._)("span",{class:"token special-attr"},[(0,a._)("span",{class:"token attr-name"},"style"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a._)("span",{class:"token value css language-css"},[(0,a._)("span",{class:"token property"},"border"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" 1px solid #000"),(0,a._)("span",{class:"token punctuation"},";"),(0,a._)("span",{class:"token property"},"overflow"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" hidden")]),(0,a._)("span",{class:"token punctuation"},'"')])]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("div")]),(0,a.Uk)(),(0,a._)("span",{class:"token special-attr"},[(0,a._)("span",{class:"token attr-name"},"style"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a._)("span",{class:"token value css language-css"},[(0,a._)("span",{class:"token property"},"width"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" 100px"),(0,a._)("span",{class:"token punctuation"},";"),(0,a._)("span",{class:"token property"},"height"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" 100px"),(0,a._)("span",{class:"token punctuation"},";"),(0,a._)("span",{class:"token property"},"background"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" #eee"),(0,a._)("span",{class:"token punctuation"},";"),(0,a._)("span",{class:"token property"},"float"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" left"),(0,a._)("span",{class:"token punctuation"},";")]),(0,a._)("span",{class:"token punctuation"},'"')])]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("div")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n"),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("div")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br")])],-1),L=(0,a._)("img",{src:l},null,-1),G=(0,a._)("h3",{id:"自适应两栏布局-阻止元素被浮动元素覆盖",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#自适应两栏布局-阻止元素被浮动元素覆盖","aria-hidden":"true"},"#"),(0,a.Uk)(" 自适应两栏布局(阻止元素被浮动元素覆盖)")],-1),f=(0,a._)("p",null,"right 会自动的适应宽度，这时候就形成了一个两栏自适应的布局。",-1),v=(0,a._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,a._)("pre",{class:"language-html"},[(0,a._)("code",null,[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("body")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("div")]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"class"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a.Uk)("left"),(0,a._)("span",{class:"token punctuation"},'"')]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("div")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("div")]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"class"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a.Uk)("right"),(0,a._)("span",{class:"token punctuation"},'"')]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("div")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n"),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("body")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n"),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("style")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a._)("span",{class:"token style"},[(0,a._)("span",{class:"token language-css"},[(0,a.Uk)("\n  "),(0,a._)("span",{class:"token selector"},".left"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token property"},"height"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" 100px"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token property"},"width"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" 100px"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token property"},"float"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" left"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token property"},"background"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" lightblue"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token selector"},".right"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token property"},"overflow"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" hidden"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token property"},"height"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" 300px"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token property"},"background"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" green"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])]),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("style")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"6"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"7"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"8"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"9"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"10"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"11"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"12"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"13"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"14"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"15"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"16"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"17"),(0,a._)("br")])],-1),X=(0,a._)("img",{src:c},null,-1),q=(0,a._)("h2",{id:"总结",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),(0,a.Uk)(" 总结")],-1),Z=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("p",null,"因为 BFC 内部的元素和外部的元素绝对不会互相影响，因此， 当 BFC 外部存在浮动时，它不应该影响 BFC 内部 Box 的布局，BFC 会通过变窄，而不与浮动有重叠。同样的，当 BFC 内部有浮动时，为了不影响外部元素的布局，BFC 计算高度时会包括浮动的高度。避免 margin 重叠也是这样的一个道理。")]),(0,a._)("li",null,[(0,a._)("p",null,"BFC 属于普通流，但还需要结合 CSS 属性本身，比如 position:absolute/fixed 这些优先级高于 BFC 规则，即通过设置 position 创建 BFC 时元素并不在普通流中。")]),(0,a._)("li",null,[(0,a._)("p",null,"BFC 可解决两栏自适应、清除浮动、消除 margin 折叠等问题")])],-1),W=(0,a._)("p",null,"参考链接",-1),N={href:"https://blog.csdn.net/sinat_36422236/article/details/88763187",target:"_blank",rel:"noopener noreferrer"},z=(0,a.Uk)("什么是 BFC？看这一篇就够了"),P={href:"https://zhuanlan.zhihu.com/p/25321647",target:"_blank",rel:"noopener noreferrer"},V=(0,a.Uk)("10 分钟理解 BFC 原理"),$={render:function(n,s){const t=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[e,o,i,g,p,k,E,u,I,Q,C,h,r,Y,d,_,b,y,J,M,m,w,U,O,D,H,T,S,F,x,R,j,K,L,G,f,v,X,q,Z,(0,a._)("blockquote",null,[W,(0,a._)("p",null,[(0,a._)("a",N,[z,(0,a.Wm)(t)])]),(0,a._)("p",null,[(0,a._)("a",P,[V,(0,a.Wm)(t)])])])],64)}}},5613:n=>{n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVoAAADHCAYAAABY3ptfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAANtSURBVHhe7dQxagMAEANB//+x/oJDwI0IcZO9KjOwlXo9XgCccrQAx3492sfjIUkqev/qD9/j8/nUPwvoOVpNQM/RagJ6jlYT0HO0moCeo9UE9BytJqDnaDUBPUerCeg5Wk1Az9FqAnqOVhPQc7SagJ6j1QT0HK0moOdoNQE9R6sJ6DlaTUDP0WoCeo5WE9BztJqAnqPVBPQcrSag52g1AT1HqwnoOVpNQM/RagJ6jlYT0HO0moCeo9UE9BytJqDnaDUBPUerCeg5Wk1Az9FqAnqOVhPQc7SagJ6j1QT0HK0moOdoNQE9R6sJ6DlaTUDP0WoCeo5WE9BztJqAnqPVBPQcrSag52g1AT1HqwnoOVpNQM/RagJ6jlYT0HO0moCeo9UE9BytJqDnaDUBPUerCeg5Wk1Az9FqAnqOVhPQc7SagJ6j1QT0HK0moOdoNQE9R6sJ6DlaTUDP0WoCeo5WE9BztJqAnqPVBPQcrSag52g1AT1HqwnoOVpNQM/RagJ6jlYT0HO0moCeo9UE9BytJqDnaDUBPUerCeg5Wk1Az9FqAnqOVhPQc7SagJ6j1QT0HK0moOdoNQE9R6sJ6DlaTUDP0WoCeo5WE9BztJqAnqPVBPQcrSag52g1AT1HqwnoOVpNQM/RagJ6jlYT0HO0moCeo9UE9BytJqDnaDUBPUerCeg5Wk1Az9FqAnqOVhPQc7SagJ6j1QT0HK0moOdoNQE9R6sJ6DlaTUDP0WoCeo5WE9BztJqAnqPVBPQcrSag52g1AT1HqwnoOVpNQM/RagJ6jlYT0HO0moDex6MF4O8+Hq0kKej9qwAccbQAxxwtwDFHC3DM0QIcc7QAxxwtwDFHC3DM0QIcc7QAxxwtwDFHC3DM0QIcc7QAxxwtwDFHC3DM0QIcc7QAxxwtwDFHC3DM0QIcc7QAxxwtwDFHC3DM0QIcc7QAxxwtwDFHC3DM0QIcc7QAxxwtwDFHC3DM0QIcc7QAxxwtwDFHC3DM0QIcc7QAxxwtwDFHC3DM0QIcc7QAxxwtwDFHC3DM0QIcc7QAxxwtwDFHC3DM0QIcc7QAxxwtwDFHC3DM0QIcc7QAxxwtwDFHC3DM0QIcc7QAxxwtwDFHC3DM0QIcc7QAxxwtwDFHC3DM0QIcc7QAxxwtwDFHC3DM0QKcer2+AJDOUFaADR77AAAAAElFTkSuQmCC"},3736:n=>{n.exports="data:image/png;base64,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"},380:n=>{n.exports="data:image/png;base64,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mABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhAiBFmABIESYAUoQJgBRhYrw/X/uzQZEwMbbjstuDImFibMdltwdFwsTYjstuD4qEibEdl90eFAkTYzsuuz0oEibGdlx2e1AkTIztuOz2oEiYGNtx2e1BkTAxtuOy24MiYWJsx2W3B0XCxNiOy24PioSJsR2X3R4UCRNjOy67PSgSJsZ2XHZ7UCRMjO247PagSJgY23HZ7UGRMDG247LbgyJhYmzHZbcHRcLE2I7Lbg+KhImxHZfdHhQJE2M7Lrs9KBImxnZcdntQJEyM7bjs9qBImBjbcdntQZEwMbbjstuDImFibMdltwdFwsTYjstuD4qEibEdl90eFAkTYzsuuz0oEibGdlx2e1AkTIztuOz2oEiYGNtx2e1BkTAxtuOy24MiYWJsx2W3B0XCxNiOy24PioSJsR2X3R4UCRNjOy67PSgSJsZ2XHZ7UCRMjO247PagSJgY23HZ7UGRMDG247LbgyJhYmzHZbcHRcLE2I7Lbg+KhImxHZfdHhQJE2M7Lrs9KBImxnZcdntQJEyM7bjs9qBImBjbcdntQZEwMbbjstuDImFibMdltwdFwsTYjstuD4qEibEdl90eFAkTYzsuuz0oEibGdlx2e1AkTIztuOz2oEiYGNtx2e1BkTAxtuOy24MiYWJsx2W3B0XCxNiOy24PioSJsR2X3R4UCRNjOy67PSgSJsZ2XHZ7UCRMjO247PagSJgY23HZ7UGRMDG247LbgyJhYmzHZbcHRcLE2I7Lbg+KhImxHZfdHhQJE2M7Lrs9KBImxnZcdntQJEyM7bjs9qBImBjbcdntQZEwMbbjstuDImFibMdltwdFwsTYjstuD4qEibEdl90eFAkTYzsuuz0oEibGdlx2e1AkTIztuOz2oEiYGNtx2e1BkTAxtuOy24MiYWJsx2W3B0XCxNiOy24PioSJsR2X3R4UCRNjOy67PSgSJsZ2XHZ7UCRMjO247PagSJgY23HZ7UGRMDG247LbgyJhYmzHZbcHRcLE2I7Lbg+KhImxHZfdHhQJE2M7Lrs9KBImxnZcdntQJEyM7bjs9qBImBjbcdntQZEwMbbjstuDImFibMdltwdFwsTYjstuD4qEibEdl90eFAkTYzsuuz0oEibGdlx2e1AkTIztuOz2oEiYGNtx2e1BkTAxtuOy24MiYWJsx2W3B0XCxNiOy24PioSJsR2X3R4UCRNjOy67PSgSJsZ2XHZ7UCRMjO247PagSJgY23HZ7UGRMDG247LbgyJhYmzHZbcHRcLE2I7Lbg+KhImxHZfdHhQJE2M7Lrs9KBImxnZcdntQJEyM7bjs9qBImBjbcdntQZEwMbbjstuDImFibMdltwdFwsTYjstuD4qEibEdl90eFAkTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAGQIkwApAgTACnCBECKMAEQ8jw/97X5Cz+Vis8AAAAASUVORK5CYII="},9666:n=>{n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATIAAAGCCAYAAABjDE+wAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAlzSURBVHhe7dQxbUQBEEPB8OcSDulDIAhC41+3bnwArJsnDQPLX8+bvv/++TDPzy9McmScNhBY4Mg4bSCwwJFx2kBggSPjtIHAAkfGaQOBBY6M0wYCCxwZpw0EFjgyThsILHBknDYQWODIOG0gsMCRcdpAYIEj47SBwAJHxmkDgQWOjNMGAgscGacNBBY4Mk4bCCxwZJw2EFjgyDhtILDAkXHaQGCBI+O0gcACR8ZpA4EFjozTBgILHBmnDQQWODJOGwgscGScNhBY4Mg4bSCwwJFx2kBggSPjtIHAAkfGaQOBBY6M0wYCCxwZpw0EFjgyThsILHBknDYQWODIOG0gsMCRcdpAYIEj47SBwAJHxmkDgQWOjNMGAgscGacNBBY4Mk4bCCxwZJw2EFjgyDhtILDAkXHaQGCBI+O0gcACR8ZpA4EFjozTBgILHBmnDQQWODJOGwgscGScNhBY4Mg4bSCwwJFx2kBggSPjtIHAAkfGaQOBBY6M0wYCCxwZpw0EFjgyThsILHBknDYQWODIOG0gsMCRcdpAYIEj47SBwAJHxmkDgQWOjNMGAgscGacNBBY4Mk4bCCxwZJw2EFjgyDhtILDAkXHaQGCBI+O0gcACR8ZpA4EFjozTBgILHBmnDQQWODJOGwgscGScNhBY4Mg4bSCwwJFx2kBggSPjtIHAAkfGaQOBBY6M0wYCCxwZpw0EFjgyThsILHBknDYQWODIOG0gsMCRcdpAYIEj47SBwAJHxmkDgQWOjNMGAgscGacNBBY4Mk4bCCxwZJw2EFjgyDhtILDAkXHaQGCBI+O0gcACR8ZpA4EFjozTBgILHBmnDQQWODJOGwgscGScNhBY4Mg4bSCwwJFx2kBggSPjtIHAAkfGaQOBBY6M0wYCCxwZpw0EFjgyThsILHBknDYQWODIOG0gsMCRcdpAYIEj47SBwAJHxmkDgQWOjNMGAgscGacNBBY4Mk4bCCxwZJw2EFjgyDhtILDAkXHaQGCBI+O0gcACR8ZpA4EFjozTBgILHBmnDQQWODJOGwgscGScNhBY4Mg4bSCwwJFx2kBggSPjtIHAgrdHpg+sDAQWODKlMhBY4MiUykBggSNTKgOBBY5MqQwEFjgypTIQWODIlMpAYIEjUyoDgQWOTKkMBBY4MqUyEFjgyJTKQGCBI1MqA4EFjkypDAQWODKlMhBY4MiUykBggSNTKgOBBY5MqQwEFjgypTIQWODIlMpAYIEjUyoDgQWOTKkMBBY4MqUyEFjgyJTKQGCBI1MqA4EFjkypDAQWODKlMhBY4MiUykBggSNTKgOBBY5MqQwEFjgypTIQWODIlMpAYIEjUyoDgQWOTKkMBBY4MqUyEFjgyJTKQGCBI1MqA4EFjkypDAQWODKlMhBY4MiUykBggSNTKgOBBY5MqQwEFjgypTIQWODIlMpAYIEjUyoDgQWOTKkMBBY4MqUyEFjgyJTKQGCBI1MqA4EFjkypDAQWODKlMhBY4MiUykBggSNTKgOBBY5MqQwEFjgypTIQWODIlMpAYIEjUyoDgQWOTKkMBBY4MqUyEFjgyJTKQGCBI1MqA4EFjkypDAQWODKlMhBY4MiUykBggSNTKgOBBY5MqQwEFjgypTIQWODIlMpAYIEjUyoDgQWOTKkMBBY4MqUyEFjgyJTKQGCBI1MqA4EFjkypDAQWODKlMhBY4MiUykBggSNTKgOBBY5MqQwEFjgypTIQWODIlMpAYIEjUyoDgQWOTKkMBBY4MqUyEFjgyJTKQGCBI1MqA4EFjkypDAQWODKlMhBY4MiUykBggSNTKgOBBY5MqQwEFjgypTIQWODIlMpAYIEjUyoDgQWOTKkMBBY4MqUyEFjgyJTKQGCBI1MqA4EFjkypDAQWODKlMhBY4MiUykBggSNTKgOBBY5MqQwEFjgypTIQWODIlMpAYIEjUyoDgQWOTKkMBBY4MqUyEFjgyJTKQGCBI1MqA4EFjkypDAQWODKlMhBY4MiUykBggSNTKgOBBY5MqQwEFjgypTIQWODIlMpAYIEjUyoDgQWOTKkMBBY4MqUyEFjgyJTKQGCBI1MqA4EFjkypDAQWODKlMhBY4MiUykBggSNTKgOBBY5MqQwEFjgypTIQWODIlMpAYIEjUyoDgQWOTKkMBBY4MqUyEFjgyJTKQGCBI1MqA4EFjkypDAQWODKlMhBY4MiUykBggSNTKgOBBY5MqQwEFjgypTIQWODIlMpAYIEjUyoDgQWOTKkMBBY4MqUyEFjgyJTKQGCBI1MqA4EFjkypDAQWODKlMhBY4MiUykBggSNTKgOBBY5MqQwEFjgypTIQWODIlMpAYIEjUyoDgQWOTKkMBBY4MqUyEFjgyJTKQGCBI1MqA4EFjkypDAQWODKlMhBY4MiUykBggSNTKgOBBY5MqQwEFjgypTIQWODIlMpAYIEjUyoDgQWOTKkMBBY4MqUyEFjgyJTKQGCBI1MqA4EFjkypDAQWODKlMhBY4MiUykBggSNTKgOBBY5MqQwEFjgypTIQWODIlMpAYIEjUyoDgQWOTKkMBBY4MqUyEFjgyJTKQGCBI1MqA4EFjkypDAQWODKlMhBY4MiUykBggSNTKgOBBY5MqQwEFjgypTIQWODIlMpAYIEjUyoDgQWOTKkMBBY4MqUyEFjgyJTKQGCBI1MqA4EFjkypDAQWODKlMhBY4MiUykBggSNTKgOBBY5MqQwEFjgypTIQWODIlMpAYIEjUyoDgQWOTKkMBBY4MqUyEFjgyJTKQGCBI1MqA4EFjkypDAQWODKlMhBY4MiUykBggSNTKgOBBY5MqQwEFjgypTIQWODIlMpAYIEjUyoDgQWOTKkMBBY4MqUyEFjgyJTKQGCBI1MqA4EFjkypDAQWODKlMhBY4MiUykBggSNTKgOBBY5MqQwEFjgypTIQWODIlMpAYIEjUyoDgQWOTKkMBBY4MqUyEFjgyJTKQGCBI1MqA4EFjkypDAQWODKlMhBY4MiUykBggSNTKgOBBY5MqQwEFjgypTIQWODIlMpAYIEjUyoDgQWOTKkMBBY4MqUyEFjgyJTKQGCBI1MqA4EFjkypDAQWODKlMhBY4MiUykBggSNTKgOBBY5MqQwEFjgypTIQWODIlMpAYIEjUyoDgQWOTKkMBBY4MqUyEFjgyCTN58gkzefIJM3nyCTN58gkzefIJM3nyCTN58gkzefIJM3nyCTN58gkjfc8Lwj/xjyDaO2RAAAAAElFTkSuQmCC"}}]);