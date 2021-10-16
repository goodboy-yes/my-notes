"use strict";(self.webpackChunkmy_notes=self.webpackChunkmy_notes||[]).push([[740],{9427:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-1f875f88",path:"/git/commit-standard.html",title:"commit 规范",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"为什么我们需要 commit 规范？",slug:"为什么我们需要-commit-规范",children:[]},{level:2,title:"commit message 的内容",slug:"commit-message-的内容",children:[]},{level:2,title:"commit message 的格式",slug:"commit-message-的格式",children:[{level:3,title:"header",slug:"header",children:[]},{level:3,title:"body",slug:"body",children:[]},{level:3,title:"footer",slug:"footer",children:[]}]},{level:2,title:"在 commit message 里用 emoji",slug:"在-commit-message-里用-emoji",children:[]},{level:2,title:"集成 Commitizen 实现规范提交",slug:"集成-commitizen-实现规范提交",children:[]},{level:2,title:"集成 commitlint 验证提交规范",slug:"集成-commitlint-验证提交规范",children:[]}],filePathRelative:"git/commit-standard.md",git:{updatedTime:1634399637e3,contributors:[]}}},5369:(n,s,a)=>{a.r(s),a.d(s,{default:()=>vn});var e=a(6252),t=a(145);const l=(0,e._)("h1",{id:"commit-规范",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#commit-规范","aria-hidden":"true"},"#"),(0,e.Uk)(" commit 规范")],-1),o=(0,e._)("p",null,"现在主流的 commit message 规范就是 Angular 团队所用的准则，很多工具也是基于此规范。",-1),c=(0,e._)("h2",{id:"为什么我们需要-commit-规范",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#为什么我们需要-commit-规范","aria-hidden":"true"},"#"),(0,e.Uk)(" 为什么我们需要 commit 规范？")],-1),p=(0,e._)("ul",null,[(0,e._)("li",null,"格式统一的提交信息可以帮助自动化生成 changelog，版本库不只是存放代码的仓库, 也记录项目的开发记录。"),(0,e._)("li",null,"这些记录可以帮助后来者快速地学习和回顾代码。也方便其他协作者 review 你的代码")],-1),i=(0,e._)("h2",{id:"commit-message-的内容",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#commit-message-的内容","aria-hidden":"true"},"#"),(0,e.Uk)(" commit message 的内容")],-1),u=(0,e._)("ul",null,[(0,e._)("li",null,"为什么进行这次提交？提交改变了什么, 让其他 reviewer 更容易审核代码和忽略无关的改变，一个提交不应该做超过 2 个功能的变动"),(0,e._)("li",null,"如何解决的问题？问题是什么导致的？简短说明使用什么方式、策略修复了问题，变化可能影响哪些地方")],-1),_=(0,e._)("h2",{id:"commit-message-的格式",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#commit-message-的格式","aria-hidden":"true"},"#"),(0,e.Uk)(" commit message 的格式")],-1),r=(0,e._)("p",null,"每次提交，Commit message 都包括三个部分：header，body 和 footer，其中 header 有一个特殊的格式，包括了 type、scope、subject。",-1),k=(0,e._)("p",null,"header 是必选的，但是 header 里的 scope 是可选的",-1),m=(0,e._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e._)("pre",{class:"language-bash"},[(0,e._)("code",null,[(0,e._)("span",{class:"token operator"},"<"),(0,e.Uk)("type"),(0,e._)("span",{class:"token operator"},">"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token operator"},"<"),(0,e.Uk)("scope"),(0,e._)("span",{class:"token operator"},">"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)(": "),(0,e._)("span",{class:"token operator"},"<"),(0,e.Uk)("subject"),(0,e._)("span",{class:"token operator"},">"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token operator"},"<"),(0,e.Uk)("body"),(0,e._)("span",{class:"token operator"},">"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token operator"},"<"),(0,e.Uk)("footer"),(0,e._)("span",{class:"token operator"},">"),(0,e.Uk)("\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br")])],-1),b=(0,e._)("h3",{id:"header",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#header","aria-hidden":"true"},"#"),(0,e.Uk)(" header")],-1),U=(0,e._)("p",null,[(0,e._)("strong",null,"type")],-1),g=(0,e._)("p",null,"type 指明 git commit 的类别，应该使用以下类型",-1),d=(0,e._)("ul",null,[(0,e._)("li",null,"『feat』: 新增功能"),(0,e._)("li",null,"『fix』: 修复 bug"),(0,e._)("li",null,"『docs』: 仅仅修改了文档，比如 README, CHANGELOG 等等"),(0,e._)("li",null,"『test』: 增加/修改测试用例，包括单元测试、集成测试等"),(0,e._)("li",null,"『style』: 修改了空行、缩进格式、引用包排序、优化项目结构等等（不改变代码逻辑），注意不是 css 修改"),(0,e._)("li",null,"『perf』: 优化相关内容，比如提升性能、体验、算法等"),(0,e._)("li",null,"『refactor』: 代码重构，「没有新功能或者 bug 修复」"),(0,e._)("li",null,"『chore』: 改变构建流程、或者增加依赖库、工具等"),(0,e._)("li",null,"『revert』: 回滚到上一个版本"),(0,e._)("li",null,"『merge』: 代码合并"),(0,e._)("li",null,"『Build 或 Release』: 构建或发布版本"),(0,e._)("li",null,"『CI』: 持续集成"),(0,e._)("li",null,"『Safe』: 修复安全问题"),(0,e._)("li",null,"『workflow』: 工作流相关文件修改")],-1),h=(0,e._)("p",null,[(0,e._)("strong",null,"scope（可选）")],-1),f=(0,e._)("p",null,"scope 用于说明 commit 影响的范围，根据不同项目有不同层次描述。若没有特殊规定，也可以描述影响的哪些功能等，例如样式, 后端接口, 逻辑层等等，route, component, utils, build...",-1),v=(0,e._)("p",null,[(0,e._)("strong",null,"subject")],-1),x=(0,e._)("p",null,"subject 是 commit 目的的简短描述，不超过 50/80 个字符，结尾不加标点符号",-1),z=(0,e._)("h3",{id:"body",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#body","aria-hidden":"true"},"#"),(0,e.Uk)(" body")],-1),y=(0,e._)("p",null,"可选. 对本次提交的详细描述. 如果变动很简单, 可以省略",-1),j=(0,e._)("h3",{id:"footer",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#footer","aria-hidden":"true"},"#"),(0,e.Uk)(" footer")],-1),C=(0,e._)("p",null,"可选. 只用于说明不兼容变动(break change)和关闭 Issue(如果使用 gitlab 上的 Issuse，#1542)或禅道 BUG 号(#zentao203)",-1),w=(0,e._)("h2",{id:"在-commit-message-里用-emoji",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#在-commit-message-里用-emoji","aria-hidden":"true"},"#"),(0,e.Uk)(" 在 commit message 里用 emoji")],-1),E=(0,e._)("p",null,"在 git commit 上使用 emoji 提供了一种简单的方法，仅通过查看所使用的表情符号来确定提交的目的或意图",-1),S=(0,e._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e._)("pre",{class:"language-bash"},[(0,e._)("code",null,[(0,e.Uk)("$ "),(0,e._)("span",{class:"token function"},"git"),(0,e.Uk)(" commit -m "),(0,e._)("span",{class:"token string"},"':tada: init commit'"),(0,e.Uk)("\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br")])],-1),A={href:"https://gitmoji.dev/",target:"_blank",rel:"noopener noreferrer"},D=(0,e.Uk)("gitmoji 指南"),I=(0,e._)("p",null,[(0,e._)("strong",null,"各种表情代码代表的含义")],-1),T=(0,e._)("p",null,[(0,e._)("img",{src:t,alt:"emoji"})],-1),L=(0,e._)("h2",{id:"集成-commitizen-实现规范提交",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#集成-commitizen-实现规范提交","aria-hidden":"true"},"#"),(0,e.Uk)(" 集成 Commitizen 实现规范提交")],-1),N=(0,e._)("p",null,"上面介绍了 Angular 规范提交的格式，初次接触会觉得复杂，记不住不同的类型到底是用来定义什么，我们可以使用 Commitizen 工具来帮助我们自动生成 commit message 格式，从而实现规范提交。",-1),O=(0,e._)("blockquote",null,[(0,e._)("p",null,"Commitizen 是一个帮助撰写规范 commit message 的工具。它有一个命令行工具 cz-cli。")],-1),R=(0,e._)("p",null,[(0,e._)("strong",null,"安装 Commitizen")],-1),B=(0,e._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e._)("pre",{class:"language-bash"},[(0,e._)("code",null,[(0,e._)("span",{class:"token function"},"npm"),(0,e.Uk)(),(0,e._)("span",{class:"token function"},"install"),(0,e.Uk)(" commitizen -D\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br")])],-1),P=(0,e._)("p",null,[(0,e._)("strong",null,"初始化项目")],-1),$=(0,e._)("p",null,[(0,e.Uk)("成功安装 Commitizen 后，我们用 "),(0,e._)("code",null,"cz-conventional-changelog"),(0,e.Uk)(" 适配器来初始化项目：")],-1),q=(0,e._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e._)("pre",{class:"language-bash"},[(0,e._)("code",null,"npx commitizen init cz-conventional-changelog --save-dev --save-exact\n")]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br")])],-1),G=(0,e._)("p",null,"这行命令做了两件事：",-1),W=(0,e._)("ul",null,[(0,e._)("li",null,[(0,e.Uk)("安装 "),(0,e._)("code",null,"cz-conventional-changelog"),(0,e.Uk)(" 到开发依赖（devDependencies）")]),(0,e._)("li",null,"在 package.json 中增加了 config.commitizen")],-1),F=(0,e._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e._)("pre",{class:"language-bash"},[(0,e._)("code",null,[(0,e._)("span",{class:"token string"},'"config"'),(0,e._)("span",{class:"token builtin class-name"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token string"},'"commitizen"'),(0,e._)("span",{class:"token builtin class-name"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n        "),(0,e._)("span",{class:"token string"},'"path"'),(0,e._)("span",{class:"token builtin class-name"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'"./node_modules/cz-conventional-changelog"'),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"4"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"5"),(0,e._)("br")])],-1),H=(0,e._)("p",null,[(0,e._)("strong",null,"使用 Commitizen")],-1),M=(0,e._)("p",null,[(0,e.Uk)("以前我们提交代码都是 "),(0,e._)("code",null,'git commit -m "xxx"'),(0,e.Uk)("，现在改为 "),(0,e._)("code",null,"git cz"),(0,e.Uk)("，然后按照终端操作提示，逐步填入信息，就能自动生成规范的 commit message。")],-1),K=(0,e._)("p",null,[(0,e._)("strong",null,"自定义配置提交说明")],-1),Q=(0,e._)("p",null,"git cz 终端操作提示都是英文的，如果想改成中文的或者自定义这些配置选项，我们使用 cz-customizable 适配器",-1),V=(0,e._)("p",null,"运行如下命令使用 cz-customizable 初始化项目，注意之前已经初始化过一次，这次再初始化，需要加 --force 覆盖。",-1),X=(0,e._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e._)("pre",{class:"language-bash"},[(0,e._)("code",null,"npx commitizen init cz-customizable --save-dev --save-exact --force\n")]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br")])],-1),Y=(0,e._)("p",null,"这行命令做了两件事：",-1),J=(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("p",null,"安装 cz-customizable 到开发依赖（devDependencies）")]),(0,e._)("li",null,[(0,e._)("p",null,"修改 package.json 中的 config.commitizen 字段为：")])],-1),Z=(0,e._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e._)("pre",{class:"language-bash"},[(0,e._)("code",null,[(0,e._)("span",{class:"token string"},'"config"'),(0,e._)("span",{class:"token builtin class-name"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token string"},'"commitizen"'),(0,e._)("span",{class:"token builtin class-name"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token string"},'"path"'),(0,e._)("span",{class:"token builtin class-name"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'"./node_modules/cz-customizable"'),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"4"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"5"),(0,e._)("br")])],-1),nn=(0,e._)("p",null,[(0,e._)("strong",null,"使用 cz-customizable")],-1),sn=(0,e.Uk)("在项目根目录下创建 .cz-config.js 文件，然后按照官方提供的"),an={href:"https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js",target:"_blank",rel:"noopener noreferrer"},en=(0,e.Uk)("示例"),tn=(0,e.Uk)("来配置"),ln=(0,e._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e._)("pre",{class:"language-javascript"},[(0,e._)("code",null,[(0,e.Uk)("module"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("exports "),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token comment"},"// type 类型（定义之后，可通过上下键选择）"),(0,e.Uk)("\n  types"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)(" value"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'feat'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" name"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'feat:     新增功能'"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"}"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)(" value"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'fix'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" name"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'fix:      修复 bug'"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"}"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)(" value"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'docs'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" name"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'docs:     文档变更'"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"}"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)(" value"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'style'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" name"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'style:    代码格式（不影响功能，例如空格、分号等格式修正）'"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"}"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)(" value"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'refactor'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" name"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'refactor: 代码重构（不包括 bug 修复、功能新增）'"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"}"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)(" value"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'perf'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" name"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'perf:     性能优化'"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"}"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)(" value"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'test'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" name"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'test:     添加、修改测试用例'"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"}"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)(" value"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'build'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" name"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'build:    构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）'"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"}"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)(" value"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'ci'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" name"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'ci:       修改 CI 配置、脚本'"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"}"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)(" value"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'chore'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" name"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'chore:    对构建过程或辅助工具和库的更改（不影响源文件、测试用例）'"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"}"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)(" value"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'revert'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" name"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'revert:   回滚 commit'"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token punctuation"},"]"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n\n  "),(0,e._)("span",{class:"token comment"},"// scope 类型（定义之后，可通过上下键选择）"),(0,e.Uk)("\n  scopes"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"["),(0,e._)("span",{class:"token string"},"'components'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'组件相关'"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"["),(0,e._)("span",{class:"token string"},"'hooks'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'hook 相关'"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"["),(0,e._)("span",{class:"token string"},"'utils'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'utils 相关'"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"["),(0,e._)("span",{class:"token string"},"'element-ui'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'对 element-ui 的调整'"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"["),(0,e._)("span",{class:"token string"},"'styles'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'样式相关'"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"["),(0,e._)("span",{class:"token string"},"'deps'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'项目依赖'"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"["),(0,e._)("span",{class:"token string"},"'auth'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'对 auth 修改'"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"["),(0,e._)("span",{class:"token string"},"'other'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'其他修改'"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token comment"},"// 如果选择 custom，后面会让你再输入一个自定义的 scope。也可以不设置此项，把后面的 allowCustomScopes 设置为 true"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"["),(0,e._)("span",{class:"token string"},"'custom'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'以上都不是？我要自定义'"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token punctuation"},"]"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"map"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token parameter"},[(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("value"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" description"),(0,e._)("span",{class:"token punctuation"},"]")]),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e._)("span",{class:"token operator"},"=>"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token keyword"},"return"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n      value"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n      name"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token template-string"},[(0,e._)("span",{class:"token template-punctuation string"},"`"),(0,e._)("span",{class:"token interpolation"},[(0,e._)("span",{class:"token interpolation-punctuation punctuation"},"${"),(0,e.Uk)("value"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"padEnd"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token number"},"30"),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token interpolation-punctuation punctuation"},"}")]),(0,e._)("span",{class:"token string"}," ("),(0,e._)("span",{class:"token interpolation"},[(0,e._)("span",{class:"token interpolation-punctuation punctuation"},"${"),(0,e.Uk)("description"),(0,e._)("span",{class:"token interpolation-punctuation punctuation"},"}")]),(0,e._)("span",{class:"token string"},")"),(0,e._)("span",{class:"token template-punctuation string"},"`")]),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token punctuation"},"}"),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n\n  "),(0,e._)("span",{class:"token comment"},"// 是否允许自定义填写 scope，在 scope 选择的时候，会有 empty 和 custom 可以选择。"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token comment"},"// allowCustomScopes: true,"),(0,e.Uk)("\n\n  "),(0,e._)("span",{class:"token comment"},"// allowTicketNumber: false,"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token comment"},"// isTicketNumberRequired: false,"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token comment"},"// ticketNumberPrefix: 'TICKET-',"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token comment"},"// ticketNumberRegExp: '\\\\d{1,5}',"),(0,e.Uk)("\n\n\n  "),(0,e._)("span",{class:"token comment"},"// 针对每一个 type 去定义对应的 scopes，例如 fix"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token comment"},"/*\n  scopeOverrides: {\n    fix: [\n      { name: 'merge' },\n      { name: 'style' },\n      { name: 'e2eTest' },\n      { name: 'unitTest' }\n    ]\n  },\n  */"),(0,e.Uk)("\n\n  "),(0,e._)("span",{class:"token comment"},"// 交互提示信息"),(0,e.Uk)("\n  messages"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    type"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'确保本次提交遵循 Angular 规范！\\n选择你要提交的类型：'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    scope"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'\\n选择一个 scope（可选）：'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token comment"},"// 选择 scope: custom 时会出下面的提示"),(0,e.Uk)("\n    customScope"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'请输入自定义的 scope：'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    subject"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'填写简短精炼的变更描述：\\n'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    body"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)("\n      "),(0,e._)("span",{class:"token string"},"'填写更加详细的变更描述（可选）。使用 \"|\" 换行：\\n'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    breaking"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'列举非兼容性重大的变更（可选）：\\n'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    footer"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'列举出所有变更的 ISSUES CLOSED（可选）。 例如: #31, #34：\\n'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    confirmCommit"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'确认提交？'"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token punctuation"},"}"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n\n  "),(0,e._)("span",{class:"token comment"},"// 设置只有 type 选择了 feat 或 fix，才询问 breaking message"),(0,e.Uk)("\n  allowBreakingChanges"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"["),(0,e._)("span",{class:"token string"},"'feat'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'fix'"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n\n  "),(0,e._)("span",{class:"token comment"},"// 跳过要询问的步骤"),(0,e.Uk)("\n  skipQuestions"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"["),(0,e._)("span",{class:"token string"},"'body'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'footer'"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n\n  "),(0,e._)("span",{class:"token comment"},"// subject 限制长度"),(0,e.Uk)("\n  subjectLimit"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token number"},"100"),(0,e.Uk)("\n  breaklineChar"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'|'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token comment"},"// 支持 body 和 footer"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token comment"},"// footerPrefix : 'ISSUES CLOSED:'"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token comment"},"// askForBreakingChangeFirst : true,"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"4"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"5"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"6"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"7"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"8"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"9"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"10"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"11"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"12"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"13"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"14"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"15"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"16"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"17"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"18"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"19"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"20"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"21"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"22"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"23"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"24"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"25"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"26"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"27"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"28"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"29"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"30"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"31"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"32"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"33"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"34"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"35"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"36"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"37"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"38"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"39"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"40"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"41"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"42"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"43"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"44"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"45"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"46"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"47"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"48"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"49"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"50"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"51"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"52"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"53"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"54"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"55"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"56"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"57"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"58"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"59"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"60"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"61"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"62"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"63"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"64"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"65"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"66"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"67"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"68"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"69"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"70"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"71"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"72"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"73"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"74"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"75"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"76"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"77"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"78"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"79"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"80"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"81"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"82"),(0,e._)("br")])],-1),on=(0,e._)("p",null,"结合项目实际情况来自定义配置提交规则",-1),cn=(0,e._)("h2",{id:"集成-commitlint-验证提交规范",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#集成-commitlint-验证提交规范","aria-hidden":"true"},"#"),(0,e.Uk)(" 集成 commitlint 验证提交规范")],-1),pn=(0,e._)("p",null,[(0,e.Uk)("在多人协作的项目中，会有些人不按规范提交，我们可以在提交代码这个环节加以限制：只让符合 Angular 规范的 commit message 通过，我们借助 "),(0,e._)("code",null,"@commitlint/config-conventional"),(0,e.Uk)(" 和 "),(0,e._)("code",null,"@commitlint/cli"),(0,e.Uk)(" 来实现。")],-1),un=(0,e._)("p",null,[(0,e._)("strong",null,"配置 commitlint")],-1),_n=(0,e._)("p",null,[(0,e.Uk)("在项目根目录下创建 "),(0,e._)("code",null,"commitlint.config.js"),(0,e.Uk)(" 文件，并填入以下内容：")],-1),rn=(0,e._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e._)("pre",{class:"language-javascript"},[(0,e._)("code",null,[(0,e.Uk)("module"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("exports "),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"extends"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"["),(0,e._)("span",{class:"token string"},'"@commitlint/config-conventional"'),(0,e._)("span",{class:"token punctuation"},"]"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"}"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br")])],-1),kn=(0,e._)("p",null,[(0,e._)("strong",null,"使用 husky 的 commit-msg hook 触发验证提交信息的命令")],-1),mn=(0,e._)("p",null,"我们使用 husky 命令在 .husky 目录下创建 commit-msg 文件，并在此执行 commit message 的验证命令。",-1),bn=(0,e._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e._)("pre",{class:"language-bash"},[(0,e._)("code",null,[(0,e.Uk)("npx husky "),(0,e._)("span",{class:"token function"},"add"),(0,e.Uk)(" .husky/commit-msg "),(0,e._)("span",{class:"token string"},[(0,e.Uk)('"npx --no-install commitlint --edit '),(0,e._)("span",{class:"token variable"},"$1"),(0,e.Uk)('"')]),(0,e.Uk)("\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br")])],-1),Un=(0,e._)("p",null,"这时不符合规范的提交信息会提交失败",-1),gn=(0,e._)("hr",null,null,-1),dn=(0,e._)("p",null,"参考链接",-1),hn={href:"https://juejin.cn/post/6951649464637636622#heading-28",target:"_blank",rel:"noopener noreferrer"},fn=(0,e.Uk)("从 0 开始手把手带你搭建一套规范的 Vue3.x 项目工程环境"),vn={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[l,o,c,p,i,u,_,r,k,m,b,U,g,d,h,f,v,x,z,y,j,C,w,E,S,(0,e._)("p",null,[(0,e._)("a",A,[D,(0,e.Wm)(a)])]),I,T,L,N,O,R,B,P,$,q,G,W,F,H,M,K,Q,V,X,Y,J,Z,nn,(0,e._)("p",null,[sn,(0,e._)("a",an,[en,(0,e.Wm)(a)]),tn]),ln,on,cn,pn,un,_n,rn,kn,mn,bn,Un,gn,(0,e._)("blockquote",null,[dn,(0,e._)("p",null,[(0,e._)("a",hn,[fn,(0,e.Wm)(a)])])])],64)}}},145:(n,s,a)=>{n.exports=a.p+"assets/img/emoji.de535c16.webp"}}]);