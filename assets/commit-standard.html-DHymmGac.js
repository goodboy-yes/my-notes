import{_ as p,r as o,o as i,c as l,a as n,b as s,d as e,e as t}from"./app-CtA61ec0.js";const c="/my-notes/assets/emoji-Ci3MVCc3.webp",r={},u=t(`<h1 id="commit-规范" tabindex="-1"><a class="header-anchor" href="#commit-规范"><span>commit 规范</span></a></h1><p>现在主流的 commit message 规范就是 Angular 团队所用的准则，很多工具也是基于此规范。</p><h2 id="为什么我们需要-commit-规范" tabindex="-1"><a class="header-anchor" href="#为什么我们需要-commit-规范"><span>为什么我们需要 commit 规范？</span></a></h2><ul><li>格式统一的提交信息可以帮助自动化生成 changelog，版本库不只是存放代码的仓库, 也记录项目的开发记录。</li><li>这些记录可以帮助后来者快速地学习和回顾代码。也方便其他协作者 review 你的代码</li></ul><h2 id="commit-message-的内容" tabindex="-1"><a class="header-anchor" href="#commit-message-的内容"><span>commit message 的内容</span></a></h2><ul><li>为什么进行这次提交？提交改变了什么, 让其他 reviewer 更容易审核代码和忽略无关的改变，一个提交不应该做超过 2 个功能的变动</li><li>如何解决的问题？问题是什么导致的？简短说明使用什么方式、策略修复了问题，变化可能影响哪些地方</li></ul><h2 id="commit-message-的格式" tabindex="-1"><a class="header-anchor" href="#commit-message-的格式"><span>commit message 的格式</span></a></h2><p>每次提交，Commit message 都包括三个部分：header，body 和 footer，其中 header 有一个特殊的格式，包括了 type、scope、subject。</p><p>header 是必选的，但是 header 里的 scope 是可选的</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>type<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>scope<span class="token operator">&gt;</span><span class="token punctuation">)</span>: <span class="token operator">&lt;</span>subject<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="header" tabindex="-1"><a class="header-anchor" href="#header"><span>header</span></a></h3><p><strong>type</strong></p><p>type 指明 git commit 的类别，应该使用以下类型</p><ul><li>『feat』: 新增功能</li><li>『fix』: 修复 bug</li><li>『docs』: 仅仅修改了文档，比如 README, CHANGELOG 等等</li><li>『test』: 增加/修改测试用例，包括单元测试、集成测试等</li><li>『style』: 修改了空行、缩进格式、引用包排序、优化项目结构等等（不改变代码逻辑），注意不是 css 修改</li><li>『perf』: 优化相关内容，比如提升性能、体验、算法等</li><li>『refactor』: 代码重构，「没有新功能或者 bug 修复」</li><li>『chore』: 改变构建流程、或者增加依赖库、工具等</li><li>『revert』: 回滚到上一个版本</li><li>『merge』: 代码合并</li><li>『Build 或 Release』: 构建或发布版本</li><li>『CI』: 持续集成</li><li>『Safe』: 修复安全问题</li><li>『workflow』: 工作流相关文件修改</li></ul><p><strong>scope（可选）</strong></p><p>scope 用于说明 commit 影响的范围，根据不同项目有不同层次描述。若没有特殊规定，也可以描述影响的哪些功能等，例如样式, 后端接口, 逻辑层等等，route, component, utils, build...</p><p><strong>subject</strong></p><p>subject 是 commit 目的的简短描述，不超过 50/80 个字符，结尾不加标点符号</p><h3 id="body" tabindex="-1"><a class="header-anchor" href="#body"><span>body</span></a></h3><p>可选. 对本次提交的详细描述. 如果变动很简单, 可以省略</p><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer"><span>footer</span></a></h3><p>可选. 只用于说明不兼容变动(break change)和关闭 Issue(如果使用 gitlab 上的 Issuse，#1542)或禅道 BUG 号(#zentao203)</p><h2 id="在-commit-message-里用-emoji" tabindex="-1"><a class="header-anchor" href="#在-commit-message-里用-emoji"><span>在 commit message 里用 emoji</span></a></h2><p>在 git commit 上使用 emoji 提供了一种简单的方法，仅通过查看所使用的表情符号来确定提交的目的或意图</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;:tada: init commit&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,25),m={href:"https://gitmoji.dev/",target:"_blank",rel:"noopener noreferrer"},d=t('<p><strong>各种表情代码代表的含义</strong></p><p><img src="'+c+`" alt="emoji"></p><h2 id="集成-commitizen-实现规范提交" tabindex="-1"><a class="header-anchor" href="#集成-commitizen-实现规范提交"><span>集成 Commitizen 实现规范提交</span></a></h2><p>上面介绍了 Angular 规范提交的格式，初次接触会觉得复杂，记不住不同的类型到底是用来定义什么，我们可以使用 Commitizen 工具来帮助我们自动生成 commit message 格式，从而实现规范提交。</p><blockquote><p>Commitizen 是一个帮助撰写规范 commit message 的工具。它有一个命令行工具 cz-cli。</p></blockquote><p><strong>安装 Commitizen</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> commitizen <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>初始化项目</strong></p><p>成功安装 Commitizen 后，我们用 <code>cz-conventional-changelog</code> 适配器来初始化项目：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>npx commitizen init cz-conventional-changelog --save-dev --save-exact
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这行命令做了两件事：</p><ul><li>安装 <code>cz-conventional-changelog</code> 到开发依赖（devDependencies）</li><li>在 package.json 中增加了 config.commitizen</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token string">&quot;config&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;commitizen&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;./node_modules/cz-conventional-changelog&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用 Commitizen</strong></p><p>以前我们提交代码都是 <code>git commit -m &quot;xxx&quot;</code>，现在改为 <code>git cz</code>，然后按照终端操作提示，逐步填入信息，就能自动生成规范的 commit message。</p><p><strong>自定义配置提交说明</strong></p><p>git cz 终端操作提示都是英文的，如果想改成中文的或者自定义这些配置选项，我们使用 cz-customizable 适配器</p><p>运行如下命令使用 cz-customizable 初始化项目，注意之前已经初始化过一次，这次再初始化，需要加 --force 覆盖。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>npx commitizen init cz-customizable --save-dev --save-exact <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这行命令做了两件事：</p><ul><li><p>安装 cz-customizable 到开发依赖（devDependencies）</p></li><li><p>修改 package.json 中的 config.commitizen 字段为：</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token string">&quot;config&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
  <span class="token string">&quot;commitizen&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;./node_modules/cz-customizable&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用 cz-customizable</strong></p>`,23),k={href:"https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js",target:"_blank",rel:"noopener noreferrer"},v=t(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// type 类型（定义之后，可通过上下键选择）</span>
  <span class="token literal-property property">types</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;feat&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;feat:     新增功能&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;fix&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;fix:      修复 bug&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;docs:     文档变更&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;style:    代码格式（不影响功能，例如空格、分号等格式修正）&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;refactor&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;refactor: 代码重构（不包括 bug 修复、功能新增）&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;perf&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;perf:     性能优化&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;test:     添加、修改测试用例&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;build:    构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;ci&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ci:       修改 CI 配置、脚本&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;chore&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;chore:    对构建过程或辅助工具和库的更改（不影响源文件、测试用例）&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;revert&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;revert:   回滚 commit&#39;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// scope 类型（定义之后，可通过上下键选择）</span>
  <span class="token literal-property property">scopes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&#39;components&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;组件相关&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;hooks&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hook 相关&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;utils&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utils 相关&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;element-ui&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;对 element-ui 的调整&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;styles&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;样式相关&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;deps&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;项目依赖&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;auth&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;对 auth 修改&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;other&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;其他修改&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 如果选择 custom，后面会让你再输入一个自定义的 scope。也可以不设置此项，把后面的 allowCustomScopes 设置为 true</span>
    <span class="token punctuation">[</span><span class="token string">&#39;custom&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;以上都不是？我要自定义&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>value<span class="token punctuation">,</span> description<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      value<span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> (</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>description<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment">// 是否允许自定义填写 scope，在 scope 选择的时候，会有 empty 和 custom 可以选择。</span>
  <span class="token comment">// allowCustomScopes: true,</span>

  <span class="token comment">// allowTicketNumber: false,</span>
  <span class="token comment">// isTicketNumberRequired: false,</span>
  <span class="token comment">// ticketNumberPrefix: &#39;TICKET-&#39;,</span>
  <span class="token comment">// ticketNumberRegExp: &#39;\\\\d{1,5}&#39;,</span>


  <span class="token comment">// 针对每一个 type 去定义对应的 scopes，例如 fix</span>
  <span class="token comment">/*
  scopeOverrides: {
    fix: [
      { name: &#39;merge&#39; },
      { name: &#39;style&#39; },
      { name: &#39;e2eTest&#39; },
      { name: &#39;unitTest&#39; }
    ]
  },
  */</span>

  <span class="token comment">// 交互提示信息</span>
  <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;确保本次提交遵循 Angular 规范！\\n选择你要提交的类型：&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">scope</span><span class="token operator">:</span> <span class="token string">&#39;\\n选择一个 scope（可选）：&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 选择 scope: custom 时会出下面的提示</span>
    <span class="token literal-property property">customScope</span><span class="token operator">:</span> <span class="token string">&#39;请输入自定义的 scope：&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">subject</span><span class="token operator">:</span> <span class="token string">&#39;填写简短精炼的变更描述：\\n&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span>
      <span class="token string">&#39;填写更加详细的变更描述（可选）。使用 &quot;|&quot; 换行：\\n&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">breaking</span><span class="token operator">:</span> <span class="token string">&#39;列举非兼容性重大的变更（可选）：\\n&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token string">&#39;列举出所有变更的 ISSUES CLOSED（可选）。 例如: #31, #34：\\n&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">confirmCommit</span><span class="token operator">:</span> <span class="token string">&#39;确认提交？&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 设置只有 type 选择了 feat 或 fix，才询问 breaking message</span>
  <span class="token literal-property property">allowBreakingChanges</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;feat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;fix&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// 跳过要询问的步骤</span>
  <span class="token literal-property property">skipQuestions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;footer&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// subject 限制长度</span>
  <span class="token literal-property property">subjectLimit</span><span class="token operator">:</span> <span class="token number">100</span>
  <span class="token literal-property property">breaklineChar</span><span class="token operator">:</span> <span class="token string">&#39;|&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 支持 body 和 footer</span>
  <span class="token comment">// footerPrefix : &#39;ISSUES CLOSED:&#39;</span>
  <span class="token comment">// askForBreakingChangeFirst : true,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结合项目实际情况来自定义配置提交规则</p><h2 id="集成-commitlint-验证提交规范" tabindex="-1"><a class="header-anchor" href="#集成-commitlint-验证提交规范"><span>集成 commitlint 验证提交规范</span></a></h2><p>在多人协作的项目中，会有些人不按规范提交，我们可以在提交代码这个环节加以限制：只让符合 Angular 规范的 commit message 通过，我们借助 <code>@commitlint/config-conventional</code> 和 <code>@commitlint/cli</code> 来实现。</p><p><strong>配置 commitlint</strong></p><p>在项目根目录下创建 <code>commitlint.config.js</code> 文件，并填入以下内容：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@commitlint/config-conventional&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>使用 husky 的 commit-msg hook 触发验证提交信息的命令</strong></p><p>我们使用 husky 命令在 .husky 目录下创建 commit-msg 文件，并在此执行 commit message 的验证命令。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>npx husky <span class="token function">add</span> .husky/commit-msg <span class="token string">&quot;npx --no-install commitlint --edit <span class="token variable">$1</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这时不符合规范的提交信息会提交失败</p><hr>`,12),g=n("p",null,"参考链接",-1),b={href:"https://juejin.cn/post/6951649464637636622#heading-28",target:"_blank",rel:"noopener noreferrer"};function h(y,f){const a=o("ExternalLinkIcon");return i(),l("div",null,[u,n("p",null,[n("a",m,[s("gitmoji 指南"),e(a)])]),d,n("p",null,[s("在项目根目录下创建 .cz-config.js 文件，然后按照官方提供的"),n("a",k,[s("示例"),e(a)]),s("来配置")]),v,n("blockquote",null,[g,n("p",null,[n("a",b,[s("从 0 开始手把手带你搭建一套规范的 Vue3.x 项目工程环境"),e(a)])])])])}const z=p(r,[["render",h],["__file","commit-standard.html.vue"]]),_=JSON.parse('{"path":"/git/commit-standard.html","title":"commit 规范","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"为什么我们需要 commit 规范？","slug":"为什么我们需要-commit-规范","link":"#为什么我们需要-commit-规范","children":[]},{"level":2,"title":"commit message 的内容","slug":"commit-message-的内容","link":"#commit-message-的内容","children":[]},{"level":2,"title":"commit message 的格式","slug":"commit-message-的格式","link":"#commit-message-的格式","children":[{"level":3,"title":"header","slug":"header","link":"#header","children":[]},{"level":3,"title":"body","slug":"body","link":"#body","children":[]},{"level":3,"title":"footer","slug":"footer","link":"#footer","children":[]}]},{"level":2,"title":"在 commit message 里用 emoji","slug":"在-commit-message-里用-emoji","link":"#在-commit-message-里用-emoji","children":[]},{"level":2,"title":"集成 Commitizen 实现规范提交","slug":"集成-commitizen-实现规范提交","link":"#集成-commitizen-实现规范提交","children":[]},{"level":2,"title":"集成 commitlint 验证提交规范","slug":"集成-commitlint-验证提交规范","link":"#集成-commitlint-验证提交规范","children":[]}],"git":{"updatedTime":1708503944000,"contributors":[{"name":"guokc","email":"guokc@tsintergy.com","commits":1}]},"filePathRelative":"git/commit-standard.md"}');export{z as comp,_ as data};