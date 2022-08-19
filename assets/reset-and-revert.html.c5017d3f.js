import{r as s,o,c as n,a as e,d as r,F as c,e as d,b as t}from"./app.48d470f5.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const p={},l=d(`<h1 id="git-reset-\u548C-git-revert-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#git-reset-\u548C-git-revert-\u7684\u533A\u522B" aria-hidden="true">#</a> git reset \u548C git revert \u7684\u533A\u522B</h1><h2 id="git-reset" tabindex="-1"><a class="header-anchor" href="#git-reset" aria-hidden="true">#</a> git reset</h2><p>reset \u7528\u4E8E\u56DE\u9000\u7248\u672C\uFF0C\u6709\u4E09\u79CD\u6A21\u5F0F\uFF0Csoft\u3001mixed\u3001hard <img src="https://upload-images.jianshu.io/upload_images/4428238-fcad08ebe26933a6.png?imageMogr2/auto-orient/strip|imageView2/2/w/638/format/webp" alt=""></p><h3 id="hard" tabindex="-1"><a class="header-anchor" href="#hard" aria-hidden="true">#</a> --hard</h3><p><strong>\u91CD\u7F6E stage \u533A\u548C\u5DE5\u4F5C\u76EE\u5F55</strong></p><p><code>reset --hard</code> \u4F1A\u5728\u91CD\u7F6E HEAD \u548C branch \u7684\u540C\u65F6\uFF0C\u91CD\u7F6E stage \u533A\u548C\u5DE5\u4F5C\u76EE\u5F55\u91CC\u7684\u5185\u5BB9\u3002\u5F53\u4F60\u5728 reset \u540E\u9762\u52A0\u4E86 --hard \u53C2\u6570\u65F6\uFF0C\u4F60\u7684 stage \u533A\u548C\u5DE5\u4F5C\u76EE\u5F55\u91CC\u7684\u5185\u5BB9\u4F1A\u88AB\u5B8C\u5168\u91CD\u7F6E\u4E3A\u548C HEAD \u7684\u65B0\u4F4D\u7F6E\u76F8\u540C\u7684\u5185\u5BB9\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u5C31\u662F\u4F60\u7684\u6CA1\u6709 commit \u7684\u4FEE\u6539\u4F1A\u88AB\u5168\u90E8\u64E6\u6389\u3002</p><h3 id="soft" tabindex="-1"><a class="header-anchor" href="#soft" aria-hidden="true">#</a> --soft</h3><p><strong>\u4FDD\u7559\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u5E76\u628A\u91CD\u7F6E HEAD \u6240\u5E26\u6765\u7684\u65B0\u7684\u5DEE\u5F02\u653E\u8FDB\u6682\u5B58\u533A</strong></p><p><code>reset --soft</code> \u4F1A\u5728\u91CD\u7F6E HEAD \u548C branch \u65F6\uFF0C\u4FDD\u7559\u5DE5\u4F5C\u76EE\u5F55\u548C\u6682\u5B58\u533A\u4E2D\u7684\u5185\u5BB9\uFF0C\u5E76\u628A\u91CD\u7F6E HEAD \u6240\u5E26\u6765\u7684\u65B0\u7684\u5DEE\u5F02\u653E\u8FDB\u6682\u5B58\u533A\u3002</p><h3 id="mixed" tabindex="-1"><a class="header-anchor" href="#mixed" aria-hidden="true">#</a> --mixed</h3><p><strong>\u4FDD\u7559\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u5E76\u6E05\u7A7A\u6682\u5B58\u533A</strong></p><p><code>reset</code> \u5982\u679C\u4E0D\u52A0\u53C2\u6570\uFF0C\u90A3\u4E48\u9ED8\u8BA4\u4F7F\u7528 <code>--mixed</code> \u53C2\u6570\u3002\u5B83\u7684\u884C\u4E3A\u662F\uFF1A\u4FDD\u7559\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u5E76\u4E14\u6E05\u7A7A\u6682\u5B58\u533A\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5DE5\u4F5C\u76EE\u5F55\u7684\u4FEE\u6539\u3001\u6682\u5B58\u533A\u7684\u5185\u5BB9\u4EE5\u53CA\u7531 reset \u6240\u5BFC\u81F4\u7684\u65B0\u7684\u6587\u4EF6\u5DEE\u5F02\uFF0C\u90FD\u4F1A\u88AB\u653E\u8FDB\u5DE5\u4F5C\u76EE\u5F55\u3002\u7B80\u800C\u8A00\u4E4B\uFF0C\u5C31\u662F\u300C\u628A\u6240\u6709\u5DEE\u5F02\u90FD\u6DF7\u5408\uFF08mixed\uFF09\u653E\u5728\u5DE5\u4F5C\u76EE\u5F55\u4E2D\u300D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> reset --<span class="token operator">&lt;</span>\u53C2\u6570<span class="token operator">&gt;</span> HEAD^ //\u56DE\u9000\u5230\u4E0A\u4E00\u4E2A\u63D0\u4EA4
<span class="token function">git</span> reset --<span class="token operator">&lt;</span>\u53C2\u6570<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>id<span class="token operator">&gt;</span> //\u56DE\u9000\u5230\u6307\u5B9A\u63D0\u4EA4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h3><p>\u5B9E\u8D28\u4E0A\uFF0C<code>reset</code> \u8FD9\u4E2A\u6307\u4EE4\u867D\u7136\u53EF\u4EE5\u7528\u6765\u64A4\u9500 commit \uFF0C\u4F46\u5B83\u7684\u5B9E\u8D28\u884C\u4E3A\u5E76\u4E0D\u662F\u64A4\u9500\uFF0C\u800C\u662F\u79FB\u52A8 HEAD \uFF0C\u5E76\u4E14\u300C\u634E\u5E26\u300D\u4E0A HEAD \u6240\u6307\u5411\u7684 branch\uFF08\u5982\u679C\u6709\u7684\u8BDD\uFF09\u3002</p><p>\u800C<code>reset --hard HEAD^</code>\u4E4B\u6240\u4EE5\u8D77\u5230\u4E86\u64A4\u9500 commit \u7684\u6548\u679C\uFF0C\u662F\u56E0\u4E3A\u5B83\u628A HEAD \u548C\u5B83\u6240\u6307\u5411\u7684 branch \u4E00\u8D77\u79FB\u52A8\u5230\u4E86\u5F53\u524D commit \u7684\u7236 commit \u4E0A\uFF0C\u4ECE\u800C\u8D77\u5230\u4E86\u300C\u64A4\u9500\u300D\u7684\u6548\u679C\uFF1A</p><h3 id="\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4F7F\u7528\u573A\u666F</h3><ul><li><strong>--hard</strong>\uFF1A\u8981\u653E\u5F03\u76EE\u524D\u672C\u5730\u7684\u6240\u6709\u6539\u53D8,\u629B\u5F03\u76EE\u6807\u8282\u70B9\u540E\u7684\u6240\u6709 commit</li><li><strong>--soft</strong>\uFF1A\u60F3\u5408\u5E76\u300C\u5F53\u524D\u8282\u70B9\u300D\u4E0E\u300Creset \u76EE\u6807\u8282\u70B9\u300D\u4E4B\u95F4\u4E0D\u5177\u592A\u5927\u610F\u4E49\u7684 commit \u8BB0\u5F55\uFF0C\u5047\u5982\u4F60\u9700\u8981\u628A\u9891\u7E41\u63D0\u4EA4\u7684 commit \u6574\u5408\u6210\u4E00\u4E2A commit \u7684\u65F6\u5019</li><li><strong>--mixed\uFF08\u9ED8\u8BA4\uFF09</strong>\uFF1A\u4E0E--soft \u7C7B\u4F3C\uFF0C\u518D\u6B21\u63D0\u4EA4\u591A\u4E86 git add \u6DFB\u52A0\u5230\u6682\u5B58\u533A\u7684\u64CD\u4F5C</li></ul><h2 id="git-revert" tabindex="-1"><a class="header-anchor" href="#git-revert" aria-hidden="true">#</a> git revert</h2><p>\u5728\u5F53\u524D\u63D0\u4EA4\u540E\u9762\uFF0C\u65B0\u589E\u4E00\u6B21\u63D0\u4EA4\uFF0C\u62B5\u6D88\u6389\u4E0A\u4E00\u6B21\u63D0\u4EA4\u5BFC\u81F4\u7684\u6240\u6709\u53D8\u5316\uFF0C\u4E0D\u4F1A\u6539\u53D8\u8FC7\u53BB\u7684\u5386\u53F2\uFF0C\u4E3B\u8981\u662F\u7528\u4E8E\u5B89\u5168\u5730\u53D6\u6D88\u8FC7\u53BB\u53D1\u5E03\u7684\u63D0\u4EA4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> revert <span class="token operator">&lt;</span>commit_id<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="revert-\u5408\u5E76\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#revert-\u5408\u5E76\u63D0\u4EA4" aria-hidden="true">#</a> revert \u5408\u5E76\u63D0\u4EA4</h3><p>\u5408\u5E76\u63D0\u4EA4\u901A\u5E38\u65E0\u6CD5 <code>revert</code>\uFF0C\u5408\u5E76\u63D0\u4EA4\u662F\u4E24\u6761\u5206\u652F\u7684\u4EA4\u96C6\u8282\u70B9\uFF0C\u800C git \u4E0D\u77E5\u9053\u9700\u8981\u64A4\u9500\u7684\u54EA\u4E00\u6761\u5206\u652F\uFF0C\u9700\u8981\u6DFB\u52A0\u53C2\u6570 <code>-m</code> \u6307\u5B9A\u4E3B\u7EBF\u5206\u652F\uFF0C\u4FDD\u7559\u4E3B\u7EBF\u5206\u652F\u7684\u4EE3\u7801\uFF0C\u53E6\u4E00\u6761\u5219\u88AB\u64A4\u9500\u3002</p><p>-m \u540E\u9762\u8981\u8DDF\u4E00\u4E2A parent number \u6807\u8BC6\u51FA&quot;\u4E3B\u7EBF&quot;\uFF0C\u4E00\u822C\u4F7F\u7528 1 \u4FDD\u7559\u4E3B\u5206\u652F\u4EE3\u7801\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> revert -m <span class="token number">1</span> <span class="token operator">&lt;</span>commitHash<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5728 <code>master</code> \u5206\u652F <code>revert</code> \u5408\u5E76\u63D0\u4EA4\u540E\uFF0C\u7136\u540E\u5207\u5230 <code>feature</code> \u5206\u652F\u4FEE\u590D\u597D <code>bug</code>\uFF0C\u518D\u5408\u5E76\u5230 <code>master</code> \u5206\u652F\u65F6\uFF0C\u4F1A\u53D1\u73B0\u4E4B\u524D\u88AB <code>revert</code> \u7684\u4FEE\u6539\u5185\u5BB9\u6CA1\u6709\u91CD\u65B0\u5408\u5E76\u8FDB\u6765\u3002</p><p>\u56E0\u4E3A\u4F7F\u7528 <code>revert</code> \u540E\uFF0C <code>feature</code> \u5206\u652F\u7684 <code>commit</code> \u8FD8\u662F\u4F1A\u4FDD\u7559\u5728 <code>master</code> \u5206\u652F\u7684\u8BB0\u5F55\u4E2D\uFF0C\u5F53\u4F60\u518D\u6B21\u5408\u5E76\u8FDB\u53BB\u65F6\uFF0C<code>git</code> \u5224\u65AD\u6709\u76F8\u540C\u7684 <code>commitHash</code>\uFF0C\u5C31\u5FFD\u7565\u4E86\u76F8\u5173 <code>commit</code> \u4FEE\u6539\u7684\u5185\u5BB9\u3002</p><p>\u8FD9\u65F6\u5C31\u9700\u8981 <code>revert</code> \u6389\u4E4B\u524D <code>revert</code> \u7684\u5408\u5E76\u63D0\u4EA4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> revert <span class="token operator">&lt;</span>\u4E4B\u524Drevert\u5408\u5E76\u63D0\u4EA4\u7684commitHash<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u533A\u522B" aria-hidden="true">#</a> \u533A\u522B</h2><ul><li><code>git revert</code> \u662F\u7528\u4E00\u6B21\u65B0\u7684 commit \u6765\u56DE\u6EDA\u4E4B\u524D\u7684 commit\uFF0C<code>git reset</code> \u662F\u76F4\u63A5\u5220\u9664\u6307\u5B9A\u7684 commit</li><li><code>git reset</code> \u662F\u628A HEAD \u5411\u540E\u79FB\u52A8\u4E86\u4E00\u4E0B\uFF0C\u800C <code>git revert</code> \u662F HEAD \u7EE7\u7EED\u524D\u8FDB\uFF0C\u53EA\u662F\u65B0\u7684 commit \u7684\u5185\u5BB9\u548C\u8981 revert \u7684\u5185\u5BB9\u6B63\u597D\u76F8\u53CD\uFF0C\u80FD\u591F\u62B5\u6D88\u8981\u88AB revert \u7684\u5185\u5BB9</li><li>\u5728\u56DE\u6EDA\u8FD9\u4E00\u64CD\u4F5C\u4E0A\u770B\uFF0C\u6548\u679C\u5DEE\u4E0D\u591A\u3002<strong>\u4F46\u662F\u5728\u65E5\u540E\u7EE7\u7EED merge \u4EE5\u524D\u7684\u8001\u7248\u672C\u65F6\u6709\u533A\u522B</strong><ul><li><code>git revert</code> \u662F\u7528\u4E00\u6B21\u9006\u5411\u7684 commit\u201C\u4E2D\u548C\u201D\u4E4B\u524D\u7684\u63D0\u4EA4\uFF0C\u56E0\u6B64\u65E5\u540E\u5408\u5E76\u8001\u7684 branch \u65F6\uFF0C\u4E4B\u524D\u63D0\u4EA4\u5408\u5E76\u7684\u4EE3\u7801\u4ECD\u7136\u5B58\u5728\uFF0C\u5BFC\u81F4\u4E0D\u80FD\u591F\u91CD\u65B0\u5408\u5E76</li><li><code>git reset</code> \u662F\u4E4B\u95F4\u628A\u67D0\u4E9B commit \u5728\u67D0\u4E2A branch \u4E0A\u5220\u9664\uFF0C\u56E0\u800C\u548C\u8001\u7684 branch \u518D\u6B21 merge \u65F6\uFF0C\u8FD9\u4E9B\u88AB\u56DE\u6EDA\u7684 commit \u5E94\u8BE5\u8FD8\u4F1A\u88AB\u5F15\u5165</li></ul></li></ul><p><strong>\u53C2\u8003\u6587\u7AE0\uFF1A</strong></p>`,32),h={href:"https://www.jianshu.com/p/c2ec5f06cf1a",target:"_blank",rel:"noopener noreferrer"},m=t("Git Reset \u4E09\u79CD\u6A21\u5F0F"),g={href:"https://mp.weixin.qq.com/s/Z3kLQz67omQdT8GA5LsC7g",target:"_blank",rel:"noopener noreferrer"},u=t("\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9 git reset \u548C git revert \u7684\u7406\u89E3\uFF1F\u533A\u522B\uFF1F");function b(v,f){const a=s("ExternalLinkIcon");return o(),n(c,null,[l,e("p",null,[e("a",h,[m,r(a)])]),e("p",null,[e("a",g,[u,r(a)])])],64)}var k=i(p,[["render",b]]);export{k as default};