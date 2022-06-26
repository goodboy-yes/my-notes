import{e as n}from"./app.7ec5ed72.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="ahooks" tabindex="-1"><a class="header-anchor" href="#ahooks" aria-hidden="true">#</a> ahooks</h1><h2 id="userequest" tabindex="-1"><a class="header-anchor" href="#userequest" aria-hidden="true">#</a> useRequest</h2><p>useRequest \u662F\u4E00\u4E2A\u5F3A\u5927\u7684\u5F02\u6B65\u6570\u636E\u7BA1\u7406\u7684 Hooks</p><p>\u76EE\u524D\u5DF2\u6709\u80FD\u529B\u5305\u62EC\uFF1A</p><ul><li>\u81EA\u52A8\u8BF7\u6C42/\u624B\u52A8\u8BF7\u6C42</li><li>\u8F6E\u8BE2</li><li>\u9632\u6296</li><li>\u8282\u6D41</li><li>\u5C4F\u5E55\u805A\u7126\u91CD\u65B0\u8BF7\u6C42</li><li>\u9519\u8BEF\u91CD\u8BD5</li><li>loading delay</li><li>SWR(stale-while-revalidate)</li><li>\u7F13\u5B58</li></ul><h3 id="\u9ED8\u8BA4\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u8BF7\u6C42" aria-hidden="true">#</a> \u9ED8\u8BA4\u8BF7\u6C42</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C<code>useRequest</code> \u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\uFF0C\u5728\u7EC4\u4EF6\u521D\u59CB\u5316\u65F6\uFF0C<strong>\u4F1A\u81EA\u52A8\u6267\u884C\u8BE5\u5F02\u6B65\u51FD\u6570</strong>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error<span class="token punctuation">,</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>service<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u624B\u52A8\u89E6\u53D1" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8\u89E6\u53D1" aria-hidden="true">#</a> \u624B\u52A8\u89E6\u53D1</h3><p>\u8BBE\u7F6E\u4E86 <code>options.manual = true</code>\uFF0C\u5219 <code>useRequest</code> \u4E0D\u4F1A\u9ED8\u8BA4\u6267\u884C\uFF0C\u9700\u8981\u901A\u8FC7 <code>run</code> \u6216\u8005 <code>runAsync</code> \u6765\u89E6\u53D1\u6267\u884C</p><p>run \u4E0E runAsync \u7684\u533A\u522B\u5728\u4E8E\uFF1A</p><ul><li>run \u662F\u4E00\u4E2A\u666E\u901A\u7684\u540C\u6B65\u51FD\u6570\uFF0C\u6211\u4EEC\u4F1A\u81EA\u52A8\u6355\u83B7\u5F02\u5E38\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 options.onError \u6765\u5904\u7406\u5F02\u5E38\u65F6\u7684\u884C\u4E3A\u3002</li><li>runAsync \u662F\u4E00\u4E2A\u8FD4\u56DE Promise \u7684\u5F02\u6B65\u51FD\u6570\uFF0C\u5982\u679C\u4F7F\u7528 runAsync \u6765\u8C03\u7528\uFF0C\u5219\u610F\u5473\u7740\u4F60\u9700\u8981\u81EA\u5DF1\u6355\u83B7\u5F02\u5E38\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;antd&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error<span class="token punctuation">,</span> loading<span class="token punctuation">,</span> run <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>editUsername<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  manual<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onSuccess</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">result<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">The username was changed to &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>params<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; !</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onError</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F</h3><p><code>useRequest</code> \u63D0\u4F9B\u4E86\u4EE5\u4E0B\u51E0\u4E2A\u751F\u547D\u5468\u671F\u914D\u7F6E\u9879\uFF0C\u4F9B\u4F60\u5728\u5F02\u6B65\u51FD\u6570\u7684\u4E0D\u540C\u9636\u6BB5\u505A\u4E00\u4E9B\u5904\u7406\u3002</p><ul><li>onBefore\uFF1A\u8BF7\u6C42\u4E4B\u524D\u89E6\u53D1</li><li>onSuccess\uFF1A\u8BF7\u6C42\u6210\u529F\u89E6\u53D1</li><li>onError\uFF1A\u8BF7\u6C42\u5931\u8D25\u89E6\u53D1</li><li>onFinally\uFF1A\u8BF7\u6C42\u5B8C\u6210\u89E6\u53D1</li></ul><h3 id="\u5237\u65B0-\u91CD\u590D\u4E0A\u4E00\u6B21\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u5237\u65B0-\u91CD\u590D\u4E0A\u4E00\u6B21\u8BF7\u6C42" aria-hidden="true">#</a> \u5237\u65B0\uFF08\u91CD\u590D\u4E0A\u4E00\u6B21\u8BF7\u6C42\uFF09</h3><p>useRequest \u63D0\u4F9B\u4E86 <code>refresh</code> \u548C <code>refreshAsync</code> \u65B9\u6CD5\uFF0C\u4F7F\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4E0A\u4E00\u6B21\u7684\u53C2\u6570\uFF0C\u91CD\u65B0\u53D1\u8D77\u8BF7\u6C42\u3002</p><h3 id="\u7ACB\u5373\u53D8\u66F4\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u7ACB\u5373\u53D8\u66F4\u6570\u636E" aria-hidden="true">#</a> \u7ACB\u5373\u53D8\u66F4\u6570\u636E</h3><p><code>useRequest</code> \u63D0\u4F9B\u4E86 <code>mutate</code>, \u652F\u6301\u7ACB\u5373\u4FEE\u6539 <code>useRequest</code> \u8FD4\u56DE\u7684 data \u53C2\u6570\u3002</p><p><code>mutate</code> \u7684\u7528\u6CD5\u4E0E <code>React.setState</code>\u4E00\u81F4\uFF0C\u652F\u6301 <code>mutate(newData)</code> \u548C <code>mutate((oldData) =&gt; newData)</code> \u4E24\u79CD\u5199\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token operator">:</span> username<span class="token punctuation">,</span> mutate <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>getUsername<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u53D6\u6D88\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u53D6\u6D88\u8BF7\u6C42" aria-hidden="true">#</a> \u53D6\u6D88\u8BF7\u6C42</h3><p><code>useRequest</code> \u63D0\u4F9B\u4E86 <code>cancel</code> \u51FD\u6570\uFF0C\u53EF\u4EE5\u53D6\u6D88\u5F53\u524D\u6B63\u5728\u8FDB\u884C\u7684\u8BF7\u6C42\u3002\u540C\u65F6 <code>useRequest</code> \u4F1A\u5728\u4EE5\u4E0B\u65F6\u673A\u81EA\u52A8\u53D6\u6D88\u5F53\u524D\u8BF7\u6C42\uFF1A</p><ul><li>\u7EC4\u4EF6\u5378\u8F7D\u65F6\uFF0C\u53D6\u6D88\u6B63\u5728\u8FDB\u884C\u7684\u8BF7\u6C42</li><li>\u7ADE\u6001\u53D6\u6D88\uFF0C\u5F53\u4E0A\u4E00\u6B21\u8BF7\u6C42\u8FD8\u6CA1\u8FD4\u56DE\u65F6\uFF0C\u53C8\u53D1\u8D77\u4E86\u4E0B\u4E00\u6B21\u8BF7\u6C42\uFF0C\u5219\u4F1A\u53D6\u6D88\u4E0A\u4E00\u6B21\u8BF7\u6C42</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> loading<span class="token punctuation">,</span> run<span class="token punctuation">,</span> cancel <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>editUsername<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  manual<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onSuccess</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">result<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setState</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">The username was changed to &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>params<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; !</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onError</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u53C2\u6570\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u7BA1\u7406" aria-hidden="true">#</a> \u53C2\u6570\u7BA1\u7406</h3><p><code>useRequest</code> \u8FD4\u56DE\u7684 <code>params</code> \u4F1A\u8BB0\u5F55\u5F53\u6B21\u8C03\u7528 <code>service</code> \u7684\u53C2\u6570\u6570\u7EC4\u3002\u6BD4\u5982\u4F60\u89E6\u53D1\u4E86 <code>run(1, 2, 3)</code>\uFF0C\u5219 <code>params</code> \u7B49\u4E8E <code>[1, 2, 3]</code> \u3002</p><p>\u5982\u679C\u6211\u4EEC\u8BBE\u7F6E\u4E86 <code>options.manual = false</code>\uFF0C\u5219\u9996\u6B21\u8C03\u7528 <code>service</code> \u7684\u53C2\u6570\u53EF\u4EE5\u901A\u8FC7 <code>options.defaultParams</code>\u6765\u8BBE\u7F6E\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// get username</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>
  data<span class="token operator">:</span> username<span class="token punctuation">,</span>
  run<span class="token punctuation">,</span>
  params<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>getUsername<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  defaultParams<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>
  loading<span class="token operator">:</span> boolean<span class="token punctuation">,</span>
  data<span class="token operator">?</span><span class="token operator">:</span> TData<span class="token punctuation">,</span>
  error<span class="token operator">?</span><span class="token operator">:</span> Error<span class="token punctuation">,</span>
  params<span class="token operator">:</span> TParams <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">run</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>params<span class="token operator">:</span> TParams</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
  <span class="token function-variable function">runAsync</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>params<span class="token operator">:</span> TParams</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Promise<span class="token operator">&lt;</span>TData<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">refresh</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
  <span class="token function-variable function">refreshAsync</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Promise<span class="token operator">&lt;</span>TData<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  mutate<span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">?</span><span class="token operator">:</span> TData <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">oldData<span class="token operator">?</span><span class="token operator">:</span> TData</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>TData <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
  <span class="token function-variable function">cancel</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> useRequest<span class="token operator">&lt;</span>TData<span class="token punctuation">,</span> TParams<span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token function-variable function">service</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args<span class="token operator">:</span> TParams</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Promise<span class="token operator">&lt;</span>TData<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    manual<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    defaultParams<span class="token operator">?</span><span class="token operator">:</span> TParams<span class="token punctuation">,</span>
    onBefore<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">params<span class="token operator">:</span> TParams</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
    onSuccess<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token operator">:</span> TData<span class="token punctuation">,</span> params<span class="token operator">:</span> TParams</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
    onError<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">e<span class="token operator">:</span> Error<span class="token punctuation">,</span> params<span class="token operator">:</span> TParams</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
    onFinally<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">params<span class="token operator">:</span> TParams<span class="token punctuation">,</span> data<span class="token operator">?</span><span class="token operator">:</span> TData<span class="token punctuation">,</span> e<span class="token operator">?</span><span class="token operator">:</span> Error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="loading-delay" tabindex="-1"><a class="header-anchor" href="#loading-delay" aria-hidden="true">#</a> Loading Delay</h3><p>\u901A\u8FC7\u8BBE\u7F6E <code>options.loadingDelay</code> \uFF0C\u53EF\u4EE5\u5EF6\u8FDF loading \u53D8\u6210 true \u7684\u65F6\u95F4\uFF0C\u6709\u6548\u9632\u6B62\u95EA\u70C1\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> loading<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>getUsername<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  loadingDelay<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u8F6E\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u8F6E\u8BE2" aria-hidden="true">#</a> \u8F6E\u8BE2</h3><p>\u901A\u8FC7\u8BBE\u7F6E <code>options.pollingInterval</code>\uFF0C\u8FDB\u5165\u8F6E\u8BE2\u6A21\u5F0F\uFF0CuseRequest \u4F1A\u5B9A\u65F6\u89E6\u53D1 service \u6267\u884C\u3002</p><p>\u53EF\u4EE5\u901A\u8FC7 <code>cancel</code> \u6765\u505C\u6B62\u8F6E\u8BE2\uFF0C\u901A\u8FC7 <code>run/runAsync</code> \u6765\u542F\u52A8\u8F6E\u8BE2</p><p><code>pollingWhenHidden</code>\uFF1A\u5728\u9875\u9762\u9690\u85CF\u65F6\uFF0C\u662F\u5426\u7EE7\u7EED\u8F6E\u8BE2</p><ul><li><code>options.pollingInterval</code>\u3001<code>options.pollingWhenHidden</code> \u652F\u6301\u52A8\u6001\u53D8\u5316\u3002</li><li>\u5982\u679C\u8BBE\u7F6E <code>options.manual = true</code>\uFF0C\u5219\u521D\u59CB\u5316\u4E0D\u4F1A\u542F\u52A8\u8F6E\u8BE2\uFF0C\u9700\u8981\u901A\u8FC7 <code>run/runAsync</code> \u89E6\u53D1\u5F00\u59CB\u3002</li><li>\u8F6E\u8BE2\u539F\u7406\u662F\u5728\u6BCF\u6B21\u8BF7\u6C42\u5B8C\u6210\u540E\uFF0C\u7B49\u5F85 <code>pollingInterval</code> \u65F6\u95F4\uFF0C\u53D1\u8D77\u4E0B\u4E00\u6B21\u8BF7\u6C42\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> run<span class="token punctuation">,</span> cancel <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>getUsername<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  pollingInterval<span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="ready" tabindex="-1"><a class="header-anchor" href="#ready" aria-hidden="true">#</a> Ready</h3><p><code>useRequest</code> \u63D0\u4F9B\u4E86\u4E00\u4E2A <code>options.ready</code> \u53C2\u6570\uFF0C\u5F53\u5176\u503C\u4E3A false \u65F6\uFF0C\u8BF7\u6C42\u6C38\u8FDC\u90FD\u4E0D\u4F1A\u53D1\u51FA\u3002</p><p>\u5176\u5177\u4F53\u884C\u4E3A\u5982\u4E0B\uFF1A</p><ul><li>\u5F53 <code>manual=false</code> \u81EA\u52A8\u8BF7\u6C42\u6A21\u5F0F\u65F6\uFF0C\u6BCF\u6B21 ready \u4ECE false \u53D8\u4E3A true \u65F6\uFF0C\u90FD\u4F1A\u81EA\u52A8\u53D1\u8D77\u8BF7\u6C42\uFF0C\u4F1A\u5E26\u4E0A\u53C2\u6570 options.defaultParams\u3002</li><li>\u5F53 <code>manual=true</code> \u624B\u52A8\u8BF7\u6C42\u6A21\u5F0F\u65F6\uFF0C\u53EA\u8981 <code>ready=false</code>\uFF0C\u5219\u901A\u8FC7 <code>run/runAsync</code> \u89E6\u53D1\u7684\u8BF7\u6C42\u90FD\u4E0D\u4F1A\u6267\u884C\u3002</li></ul><h3 id="\u4F9D\u8D56\u5237\u65B0" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56\u5237\u65B0" aria-hidden="true">#</a> \u4F9D\u8D56\u5237\u65B0</h3><p><code>useRequest</code> \u63D0\u4F9B\u4E86\u4E00\u4E2A <code>options.refreshDeps</code> \u53C2\u6570\uFF0C\u5F53\u5B83\u7684\u503C\u53D8\u5316\u540E\uFF0C\u4F1A\u91CD\u65B0\u89E6\u53D1\u8BF7\u6C42\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>userId<span class="token punctuation">,</span> setUserId<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> run <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">getUserSchool</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  refreshDeps<span class="token operator">:</span> <span class="token punctuation">[</span>userId<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u5C4F\u5E55\u805A\u7126\u91CD\u65B0\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u5C4F\u5E55\u805A\u7126\u91CD\u65B0\u8BF7\u6C42" aria-hidden="true">#</a> \u5C4F\u5E55\u805A\u7126\u91CD\u65B0\u8BF7\u6C42</h3><p>\u901A\u8FC7\u8BBE\u7F6E <code>options.refreshOnWindowFocus</code>\uFF0C\u5728\u6D4F\u89C8\u5668\u7A97\u53E3 <code>refocus</code> \u548C <code>revisible</code> \u65F6\uFF0C\u4F1A\u91CD\u65B0\u53D1\u8D77\u8BF7\u6C42\u3002</p><p><code>focusTimespan</code>\uFF1A\u91CD\u65B0\u8BF7\u6C42\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2</p><p><code>options.refreshOnWindowFocus\u3001options.focusTimespan</code> \u652F\u6301\u52A8\u6001\u53D8\u5316\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>getUsername<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  refreshOnWindowFocus<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u9632\u6296" tabindex="-1"><a class="header-anchor" href="#\u9632\u6296" aria-hidden="true">#</a> \u9632\u6296</h3><p>\u901A\u8FC7\u8BBE\u7F6E <code>options.debounceWait</code>\uFF0C\u8FDB\u5165\u9632\u6296\u6A21\u5F0F\uFF0C\u6B64\u65F6\u5982\u679C\u9891\u7E41\u89E6\u53D1 <code>run</code> \u6216\u8005 <code>runAsync</code>\uFF0C\u5219\u4F1A\u4EE5\u9632\u6296\u7B56\u7565\u8FDB\u884C\u8BF7\u6C42\u3002</p><p>\u9891\u7E41\u89E6\u53D1 run\uFF0C\u53EA\u4F1A\u5728\u6700\u540E\u4E00\u6B21\u89E6\u53D1\u7ED3\u675F\u540E\u6267\u884C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> run <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>getUsername<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  debounceWait<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  manual<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u8282\u6D41" tabindex="-1"><a class="header-anchor" href="#\u8282\u6D41" aria-hidden="true">#</a> \u8282\u6D41</h3><p>\u901A\u8FC7\u8BBE\u7F6E <code>options.throttleWait</code>\uFF0C\u8FDB\u5165\u8282\u6D41\u6A21\u5F0F\uFF0C\u6B64\u65F6\u5982\u679C\u9891\u7E41\u89E6\u53D1 <code>run</code> \u6216\u8005 <code>runAsync</code>\uFF0C\u5219\u4F1A\u4EE5\u8282\u6D41\u7B56\u7565\u8FDB\u884C\u8BF7\u6C42\u3002</p><p>\u9891\u7E41\u89E6\u53D1 run\uFF0C\u53EA\u4F1A\u6BCF\u9694 300ms \u6267\u884C\u4E00\u6B21\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> run <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>getUsername<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  throttleWait<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  manual<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u7F13\u5B58-swr" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58-swr" aria-hidden="true">#</a> \u7F13\u5B58 &amp; SWR</h3><p>\u5982\u679C\u8BBE\u7F6E\u4E86 <code>options.cacheKey\`\`\uFF0CuseRequest</code> \u4F1A\u5C06\u5F53\u524D\u8BF7\u6C42\u6210\u529F\u7684\u6570\u636E\u7F13\u5B58\u8D77\u6765\u3002\u4E0B\u6B21\u7EC4\u4EF6\u521D\u59CB\u5316\u65F6\uFF0C\u5982\u679C\u6709\u7F13\u5B58\u6570\u636E\uFF0C\u6211\u4EEC\u4F1A\u4F18\u5148\u8FD4\u56DE\u7F13\u5B58\u6570\u636E\uFF0C\u7136\u540E\u5728\u80CC\u540E\u53D1\u9001\u65B0\u8BF7\u6C42\uFF0C\u4E5F\u5C31\u662F SWR \u7684\u80FD\u529B\u3002</p><p>\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>options.staleTime</code> \u8BBE\u7F6E\u6570\u636E\u4FDD\u6301\u65B0\u9C9C\u65F6\u95F4\uFF0C\u5728\u8BE5\u65F6\u95F4\u5185\uFF0C\u6211\u4EEC\u8BA4\u4E3A\u6570\u636E\u662F\u65B0\u9C9C\u7684\uFF0C\u4E0D\u4F1A\u91CD\u65B0\u53D1\u8D77\u8BF7\u6C42\u3002</p><p>\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>options.cacheTime</code> \u8BBE\u7F6E\u6570\u636E\u7F13\u5B58\u65F6\u95F4\uFF0C\u8D85\u8FC7\u8BE5\u65F6\u95F4\uFF0C\u6211\u4EEC\u4F1A\u6E05\u7A7A\u8BE5\u6761\u7F13\u5B58\u6570\u636E\u3002</p><h3 id="\u9519\u8BEF\u91CD\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u91CD\u8BD5" aria-hidden="true">#</a> \u9519\u8BEF\u91CD\u8BD5</h3><p>\u901A\u8FC7\u8BBE\u7F6E <code>options.retryCount</code>\uFF0C\u6307\u5B9A\u9519\u8BEF\u91CD\u8BD5\u6B21\u6570\uFF0C\u5219 <code>useRequest</code> \u5728\u5931\u8D25\u540E\u4F1A\u8FDB\u884C\u91CD\u8BD5\u3002</p><p><code>cancel</code> \u53EF\u4EE5\u53D6\u6D88\u6B63\u5728\u8FDB\u884C\u7684\u91CD\u8BD5\u884C\u4E3A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> run <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>getUsername<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  retryCount<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,69);function e(t,o){return p}var l=s(a,[["render",e]]);export{l as default};