import{r as o,o as p,c as r,a as n,d as a,F as c,e as t,b as s}from"./app.f53609f4.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";var l="/my-notes/assets/image.64abcc5a.png",d="/my-notes/assets/communicationModel.790c4f01.png",u="/my-notes/assets/lifeCycle.3cf13beb.png";const h={},m=t('<h1 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h1><h2 id="\u5C0F\u7A0B\u5E8F\u4E0E\u666E\u901A\u7F51\u9875\u5F00\u53D1\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F\u4E0E\u666E\u901A\u7F51\u9875\u5F00\u53D1\u7684\u533A\u522B" aria-hidden="true">#</a> \u5C0F\u7A0B\u5E8F\u4E0E\u666E\u901A\u7F51\u9875\u5F00\u53D1\u7684\u533A\u522B</h2><ul><li><p>\u200B \u7F51\u9875\u5F00\u53D1\u6E32\u67D3\u7EBF\u7A0B\u548C\u811A\u672C\u7EBF\u7A0B\u662F\u4E92\u65A5\u7684\uFF0C\u957F\u65F6\u95F4\u7684\u811A\u672C\u8FD0\u884C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u9875\u9762\u5931\u53BB\u54CD\u5E94\uFF0C\u800C\u5728\u5C0F\u7A0B\u5E8F\u4E2D\uFF0C\u4E8C\u8005\u662F\u5206\u5F00\u7684\uFF0C\u5206\u522B\u8FD0\u884C\u5728\u4E0D\u540C\u7684\u7EBF\u7A0B\u4E2D\u3002</p></li><li><p>\u7F51\u9875\u5F00\u53D1\u8005\u53EF\u4EE5\u4F7F\u7528\u5230\u5404\u79CD\u6D4F\u89C8\u5668\u66B4\u9732\u51FA\u6765\u7684 DOM API\uFF0C\u8FDB\u884C DOM \u9009\u4E2D\u548C\u64CD\u4F5C\u3002\u5C0F\u7A0B\u5E8F\u7684\u903B\u8F91\u5C42\u548C\u6E32\u67D3\u5C42\u662F\u5206\u5F00\u7684\uFF0C\u903B\u8F91\u5C42\u8FD0\u884C\u5728 JSCore \u4E2D\uFF0C\u5E76\u6CA1\u6709\u4E00\u4E2A\u5B8C\u6574\u6D4F\u89C8\u5668\u5BF9\u8C61\uFF0C\u56E0\u800C\u7F3A\u5C11\u76F8\u5173\u7684 DOM API \u548C BOM API</p></li><li><p>JSCore \u7684\u73AF\u5883\u540C NodeJS \u73AF\u5883\u4E5F\u662F\u4E0D\u5C3D\u76F8\u540C\uFF0C\u6240\u4EE5\u4E00\u4E9B NPM \u7684\u5305\u5728\u5C0F\u7A0B\u5E8F\u4E2D\u4E5F\u662F\u65E0\u6CD5\u8FD0\u884C\u7684</p></li><li><p>\u7F51\u9875\u5F00\u53D1\u8005\u9700\u8981\u9762\u5BF9\u7684\u73AF\u5883\u662F\u5404\u5F0F\u5404\u6837\u7684\u6D4F\u89C8\u5668\uFF0C\u800C\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u9700\u8981\u9762\u5BF9\u7684\u662F\u4E24\u5927\u64CD\u4F5C\u7CFB\u7EDF iOS \u548C Android \u7684\u5FAE\u4FE1\u5BA2\u6237\u7AEF</p><p>\u5C0F\u7A0B\u5E8F\u7684\u8FD0\u884C\u73AF\u5883</p><table><thead><tr><th>\u8FD0\u884C\u73AF\u5883</th><th>\u903B\u8F91\u5C42</th><th>\u6E32\u67D3\u5C42</th></tr></thead><tbody><tr><td>iOS</td><td>JavaScriptCore</td><td>WKWebView</td></tr><tr><td>\u5B89\u5353</td><td>V8</td><td>chromium \u5B9A\u5236\u5185\u6838</td></tr><tr><td>\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u8005\u5DE5\u5177</td><td>NWJS</td><td>Chrome WebView</td></tr></tbody></table></li></ul><h2 id="\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684\u57FA\u7840\u6846\u67B6" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684\u57FA\u7840\u6846\u67B6" aria-hidden="true">#</a> \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684\u57FA\u7840\u6846\u67B6</h2><p>\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u4F7F\u7528\u7684\u6846\u67B6\u53EB <code>MINA</code> \u6846\u67B6\u3002<code>MINA</code> \u6846\u67B6\u901A\u8FC7\u5C01\u88C5\u5FAE\u4FE1\u5BA2\u6237\u7AEF\u63D0\u4F9B\u7684\u6587\u4EF6\u7CFB\u7EDF\u3001\u7F51\u7EDC\u901A\u4FE1\u3001\u4EFB\u52A1\u7BA1\u7406\u3001\u6570\u636E\u5B89\u5168\u7B49\u57FA\u7840\u529F\u80FD\uFF0C\u5BF9\u4E0A\u5C42\u63D0\u4F9B\u4E00\u6574\u5957 JavaScript API\uFF0C\u8BA9\u5F00\u53D1\u8005\u80FD\u591F\u975E\u5E38\u65B9\u4FBF\u5730\u4F7F\u7528\u5FAE\u4FE1\u5BA2\u6237\u7AEF\u63D0\u4F9B\u7684\u5404\u79CD\u57FA\u7840\u529F\u80FD\u4E0E\u80FD\u529B\uFF0C\u5FEB\u901F\u6784\u5EFA\u5E94\u7528\uFF0C\u5E76\u5177\u6709\u539F\u751F App \u4F53\u9A8C\u7684\u670D\u52A1\u3002</p><p>\u6574\u4E2A\u7CFB\u7EDF\u5206\u4E3A\u89C6\u56FE\u5C42\uFF08View\uFF09\u548C\u903B\u8F91\u5C42\uFF08App Service\uFF09\u4E24\u90E8\u5206\u3002\u89C6\u56FE\u5C42\u7531 <code>WXML</code>(WeiXin Mark Language)\u548C <code>WXSS</code>\uFF08WeiXin Style Sheet\uFF09\u7EC4\u6210\u3002\u903B\u8F91\u5C42\u662F <code>MINA</code> \u7684\u670D\u52A1\u4E2D\u5FC3\uFF0C\u7531 JavaScript \u6765\u7F16\u5199\u5B8C\u6210\u3002</p><p>MINA \u6846\u67B6\u7684\u6838\u5FC3\u662F\u4E00\u4E2A\u54CD\u5E94\u7684\u6570\u636E\u7ED1\u5B9A\u7CFB\u7EDF\uFF0C\u5B83\u8BA9\u6570\u636E\u4E0E\u89C6\u56FE\u975E\u5E38\u7B80\u5355\u5730\u4FDD\u6301\u540C\u6B65\u3002\u5F53\u4F5C\u6570\u636E\u4FEE\u6539\u7684\u65F6\u5019\uFF0C\u53EA\u9700\u8981\u5728\u903B\u8F91\u5C42\u4FEE\u6539\u6570\u636E\uFF0C\u89C6\u56FE\u5C42\u5C31\u4F1A\u505A\u76F8\u5E94\u7684\u66F4\u65B0</p><p><img src="'+l+'" alt="\u54CD\u5E94\u7CFB\u7EDF"></p><p>\u5C0F\u7A0B\u5E8F\u7684\u8FD0\u884C\u73AF\u5883\u5206\u6210\u6E32\u67D3\u5C42\u548C\u903B\u8F91\u5C42\uFF0C\u5176\u4E2D WXML \u6A21\u677F\u548C WXSS \u6837\u5F0F\u5DE5\u4F5C\u5728\u6E32\u67D3\u5C42\uFF0CJS \u811A\u672C\u5DE5\u4F5C\u5728\u903B\u8F91\u5C42\u3002</p><p>\u5C0F\u7A0B\u5E8F\u7684\u6E32\u67D3\u5C42\u548C\u903B\u8F91\u5C42\u5206\u522B\u75312\u4E2A\u7EBF\u7A0B\u7BA1\u7406\uFF1A\u6E32\u67D3\u5C42\u7684\u754C\u9762\u4F7F\u7528\u4E86WebView \u8FDB\u884C\u6E32\u67D3\uFF1B\u903B\u8F91\u5C42\u91C7\u7528JsCore\u7EBF\u7A0B\u8FD0\u884CJS\u811A\u672C\u3002\u4E00\u4E2A\u5C0F\u7A0B\u5E8F\u5B58\u5728\u591A\u4E2A\u754C\u9762\uFF0C\u6240\u4EE5\u6E32\u67D3\u5C42\u5B58\u5728\u591A\u4E2AWebView\u7EBF\u7A0B\uFF0C\u8FD9\u4E24\u4E2A\u7EBF\u7A0B\u7684\u901A\u4FE1\u4F1A\u7ECF\u7531\u5FAE\u4FE1\u5BA2\u6237\u7AEF\u505A\u4E2D\u8F6C\uFF0C\u903B\u8F91\u5C42\u53D1\u9001\u7F51\u7EDC\u8BF7\u6C42\u4E5F\u7ECF\u7531Native\u8F6C\u53D1</p><p>\u5C0F\u7A0B\u5E8F\u7684\u901A\u4FE1\u6A21\u578B\u4E0B\u56FE\u6240\u793A</p><p><img src="'+d+'" alt="\u901A\u4FE1\u6A21\u578B"></p><p>\u5FAE\u4FE1\u5BA2\u6237\u7AEF\u5728\u6253\u5F00\u5C0F\u7A0B\u5E8F\u4E4B\u524D\uFF0C\u4F1A\u628A\u6574\u4E2A\u5C0F\u7A0B\u5E8F\u7684\u4EE3\u7801\u5305\u4E0B\u8F7D\u5230\u672C\u5730\uFF0C\u901A\u8FC7 app.json \u7684 pages \u5B57\u6BB5\u5C31\u53EF\u4EE5\u77E5\u9053\u4F60\u5F53\u524D\u5C0F\u7A0B\u5E8F\u7684\u6240\u6709\u9875\u9762\u8DEF\u5F84</p><p>\u5C0F\u7A0B\u5E8F\u542F\u52A8\u4E4B\u540E\uFF0C\u5728 app.js \u5B9A\u4E49\u7684 App \u5B9E\u4F8B\u7684 onLaunch \u56DE\u8C03\u4F1A\u88AB\u6267\u884C\uFF0C\u6574\u4E2A\u5C0F\u7A0B\u5E8F\u53EA\u6709\u4E00\u4E2A App \u5B9E\u4F8B\uFF0C\u662F\u5168\u90E8\u9875\u9762\u5171\u4EAB\u7684</p><h2 id="\u6587\u4EF6\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u76EE\u5F55" aria-hidden="true">#</a> \u6587\u4EF6\u76EE\u5F55</h2><p>\u901A\u8FC7\u5F00\u53D1\u8005\u5DE5\u5177\u751F\u6210\u7684\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u76EE\u5F55\u4E00\u822C\u5206\u4E3A<strong>\u5168\u5C40\u914D\u7F6E\u6587\u4EF6\u3001\u9875\u9762\u6587\u4EF6\u548C\u5DE5\u5177\u7C7B\u6587\u4EF6</strong>\u4E09\u90E8\u5206</p><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h3><p>\u5C0F\u7A0B\u5E8F\u5168\u5C40\u914D\u7F6E\u9875\u9762\u4E3B\u4F53\u90E8\u5206\u7531\u4E09\u4E2A\u6587\u4EF6\u7EC4\u6210\uFF0C<strong>\u5E76\u4E14\u5FC5\u987B\u653E\u5728\u9879\u76EE\u7684\u6839\u76EE\u5F55</strong></p><p><strong>\u5C0F\u7A0B\u5E8F\u903B\u8F91\u6587\u4EF6\uFF08app.js\uFF09</strong></p><p>app.js \u6587\u4EF6\u662F\u5FC5\u9700\u914D\u7F6E\u6587\u4EF6\uFF0C\u4E0D\u4EC5\u53EF\u4EE5\u5B9A\u4E49\u5168\u5C40\u51FD\u6570\u548C\u6570\u636E\uFF0C\u8FD8\u53EF\u4EE5\u6CE8\u518C\u5C0F\u7A0B\u5E8F\u3002 <img src="'+u+'" alt="Alt text"></p><p><strong>\u5C0F\u7A0B\u5E8F\u516C\u5171\u914D\u7F6E\u6587\u4EF6\uFF08app.json\uFF09</strong></p><p>app.json \u4E5F\u662F\u5FC5\u9700\u914D\u7F6E\u6587\u4EF6\uFF0C\u5B83\u5305\u542B\u7684\u662F\u5F53\u524D\u5C0F\u7A0B\u5E8F\u7684\u5168\u5C40\u914D\u7F6E\uFF0C\u5305\u62EC\u4E86\u5C0F\u7A0B\u5E8F\u7684\u6240\u6709\u9875\u9762\u8DEF\u5F84\u3001\u754C\u9762\u8868\u73B0\u3001\u7F51\u7EDC\u8D85\u65F6\u65F6\u95F4\u3001\u5E95\u90E8 tab \u7B49\u3002</p>',22),_=s("\u5B8C\u6574\u914D\u7F6E\u9879\u8BF4\u660E\u8BF7\u53C2\u8003"),g={href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html",target:"_blank",rel:"noopener noreferrer"},b=s("\u5C0F\u7A0B\u5E8F\u5168\u5C40\u914D\u7F6E"),k=t(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// \u7528\u4E8E\u63CF\u8FF0\u5F53\u524D\u5C0F\u7A0B\u5E8F\u6240\u6709\u9875\u9762\u8DEF\u5F84\uFF0C\u8FD9\u662F\u4E3A\u4E86\u8BA9\u5FAE\u4FE1\u5BA2\u6237\u7AEF\u77E5\u9053\u5F53\u524D\u4F60\u7684\u5C0F\u7A0B\u5E8F\u9875\u9762\u5B9A\u4E49\u5728\u54EA\u4E2A\u76EE\u5F55</span>
  <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pages/logs/logs&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5B9A\u4E49\u5C0F\u7A0B\u5E8F\u6240\u6709\u9875\u9762\u7684\u9876\u90E8\u80CC\u666F\u989C\u8272\uFF0C\u6587\u5B57\u989C\u8272\u5B9A\u4E49\u7B49</span>
  <span class="token property">&quot;window&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;backgroundTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;light&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;navigationBarBackgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Weixin&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;navigationBarTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;black&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u6BCF\u4E00\u4E2A\u5C0F\u7A0B\u5E8F\u9875\u9762\u4E5F\u53EF\u4EE5\u4F7F\u7528\u540C\u540D .json \u6587\u4EF6\u6765\u5BF9\u672C\u9875\u9762\u7684\u7A97\u53E3\u8868\u73B0\u8FDB\u884C\u914D\u7F6E\uFF0C\u9875\u9762\u4E2D\u914D\u7F6E\u9879\u4F1A\u8986\u76D6 app.json \u7684 window \u4E2D\u76F8\u540C\u7684\u914D\u7F6E\u9879\u3002</p>`,2),f=s("\u6CE8\uFF1A\u5E76\u4E0D\u662F\u6240\u6709 app.json \u4E2D\u7684\u914D\u7F6E\u90FD\u53EF\u4EE5\u5728\u9875\u9762\u8986\u76D6\u6216\u5355\u72EC\u6307\u5B9A\uFF0C\u5177\u4F53\u53C2\u8003"),q={href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html",target:"_blank",rel:"noopener noreferrer"},x=s("\u5C0F\u7A0B\u5E8F\u9875\u9762\u914D\u7F6E"),v=n("p",null,[n("strong",null,"\u5C0F\u7A0B\u5E8F\u516C\u5171\u6837\u5F0F\u6587\u4EF6\uFF08app.wxss\uFF09")],-1),S=n("p",null,"app.wxss \u6587\u4EF6\u53EF\u914D\u7F6E\u4E5F\u53EF\u4E0D\u914D\u7F6E\uFF0C\u662F\u9488\u5BF9\u6240\u6709\u9875\u9762\u5B9A\u4E49\u7684\u5168\u5C40\u6837\u5F0F",-1),j=n("p",null,[n("strong",null,"\u5DE5\u5177\u914D\u7F6E project.config.json")],-1),w=n("p",null,"\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u8005\u5DE5\u5177\u5728\u6BCF\u4E2A\u9879\u76EE\u7684\u6839\u76EE\u5F55\u90FD\u4F1A\u751F\u6210\u4E00\u4E2A project.config.json\uFF0C\u4F60\u5728\u5DE5\u5177\u4E0A\u505A\u7684\u4EFB\u4F55\u914D\u7F6E\u90FD\u4F1A\u5199\u5165\u5230\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u5F53\u4F60\u91CD\u65B0\u5B89\u88C5\u5DE5\u5177\u6216\u8005\u6362\u7535\u8111\u5DE5\u4F5C\u65F6\uFF0C\u4F60\u53EA\u8981\u8F7D\u5165\u540C\u4E00\u4E2A\u9879\u76EE\u7684\u4EE3\u7801\u5305\uFF0C\u5F00\u53D1\u8005\u5DE5\u5177\u5C31\u81EA\u52A8\u4F1A\u5E2E\u4F60\u6062\u590D\u5230\u5F53\u65F6\u4F60\u5F00\u53D1\u9879\u76EE\u65F6\u7684\u4E2A\u6027\u5316\u914D\u7F6E\uFF0C\u5176\u4E2D\u4F1A\u5305\u62EC\u7F16\u8F91\u5668\u7684\u989C\u8272\u3001\u4EE3\u7801\u4E0A\u4F20\u65F6\u81EA\u52A8\u538B\u7F29\u7B49\u7B49\u4E00\u7CFB\u5217\u9009\u9879\u3002",-1),y=n("h1",{id:"\u53C2\u8003\u8D44\u6599",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C2\u8003\u8D44\u6599","aria-hidden":"true"},"#"),s(" \u53C2\u8003\u8D44\u6599")],-1),A={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/",target:"_blank",rel:"noopener noreferrer"},M=s("\u5C0F\u7A0B\u5E8F\u5B98\u65B9\u6587\u6863"),W={href:"https://developers.weixin.qq.com/community/business/course/00084edfb7c020caa70015b166b40d",target:"_blank",rel:"noopener noreferrer"},N=s("\u4ECE 0 \u5230 1 \u5F00\u53D1\u5C0F\u7A0B\u5E8F");function I(J,V){const e=o("ExternalLinkIcon");return p(),r(c,null,[m,n("p",null,[_,n("a",g,[b,a(e)])]),k,n("blockquote",null,[n("p",null,[f,n("a",q,[x,a(e)])])]),v,S,j,w,y,n("p",null,[n("a",A,[M,a(e)])]),n("p",null,[n("a",W,[N,a(e)])])],64)}var L=i(h,[["render",I]]);export{L as default};
