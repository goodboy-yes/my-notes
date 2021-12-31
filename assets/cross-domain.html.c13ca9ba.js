import{e as n}from"./app.13eaa599.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u8DE8\u57DF" tabindex="-1"><a class="header-anchor" href="#\u8DE8\u57DF" aria-hidden="true">#</a> \u8DE8\u57DF</h1><h2 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6848</h2><h3 id="jsonp" tabindex="-1"><a class="header-anchor" href="#jsonp" aria-hidden="true">#</a> JSONP</h3><p>JSONP \u662F JSON with Padding \u7684\u7F29\u5199\uFF0C\u5229\u7528\u4E86<code>&lt;script&gt;</code> \u6807\u7B7E\u7684 src \u5C5E\u6027\u6CA1\u6709\u8DE8\u57DF\u9650\u5236</p><p>\u5177\u4F53\u5B9E\u73B0\u601D\u8DEF\u5927\u81F4\u5206\u4E3A\u4EE5\u4E0B\u6B65\u9AA4\uFF1A</p><ul><li>\u672C\u7AD9\u7684\u811A\u672C\u521B\u5EFA\u4E00\u4E2A \u5143\u7D20\uFF0Csrc \u5730\u5740\u6307\u5411\u8DE8\u57DF\u8BF7\u6C42\u6570\u636E\u7684\u670D\u52A1\u5668</li><li>\u63D0\u4F9B\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u6765\u63A5\u53D7\u6570\u636E\uFF0C\u51FD\u6570\u540D\u53EF\u4EE5\u901A\u8FC7\u5730\u5740\u53C2\u6570\u4F20\u9012\u8FDB\u884C\u7EA6\u5B9A</li><li>\u670D\u52A1\u5668\u6536\u5230\u8BF7\u6C42\u540E\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5305\u88C5\u4E86 JSON \u6570\u636E\u7684\u54CD\u5E94\u5B57\u7B26\u4E32\uFF0C\u7C7B\u4F3C\u8FD9\u6837\uFF1Acallback({...})</li></ul><p>\u6D4F\u89C8\u5668\u63A5\u53D7\u54CD\u5E94\u540E\u5C31\u4F1A\u53BB\u6267\u884C\u56DE\u8C03\u51FD\u6570 callback\uFF0C\u4F20\u9012\u89E3\u6790\u540E\u7684 JSON \u5BF9\u8C61\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728 callback \u91CC\u5904\u7406\u6570\u636E\u4E86</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">jsonp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> url<span class="token punctuation">,</span> params<span class="token punctuation">,</span> callback <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u4E34\u65F6\u7684 script \u6807\u7B7E\u7528\u4E8E\u53D1\u8D77\u8BF7\u6C42</span>
    <span class="token keyword">const</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;script&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5C06\u56DE\u8C03\u51FD\u6570\u4E34\u65F6\u7ED1\u5B9A\u5230 window \u5BF9\u8C61\uFF0C\u56DE\u8C03\u51FD\u6570\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u79FB\u9664 script \u6807\u7B7E</span>
    window<span class="token punctuation">[</span>callback<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6784\u9020 GET \u8BF7\u6C42\u53C2\u6570\uFF0Ckey=value&amp;callback=callback</span>
    <span class="token keyword">const</span> formatParams <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>params<span class="token punctuation">,</span> callback <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> requestParams <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>formatParams<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> acc<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>cur<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>formatParams<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&amp;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">// \u6784\u9020 GET \u8BF7\u6C42\u7684 url \u5730\u5740</span>
    <span class="token keyword">const</span> src <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>requestParams<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    script<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">,</span> src<span class="token punctuation">)</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8C03\u7528\u65F6</span>
<span class="token function">jsonp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token string">&#39;https://xxx.xxx&#39;</span><span class="token punctuation">,</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  callback<span class="token operator">:</span> <span class="token string">&#39;func&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u672C\u8D28\u4E0A\u5C31\u662F\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>https://xxx.xxx.xx?key=value&amp;callback=xxx<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>\u7F3A\u70B9\uFF1A</strong> \u9700\u8981\u670D\u52A1\u5668\u652F\u6301\u800C\u4E14\u53EA\u652F\u6301 GET \u8BF7\u6C42</p><h3 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h3><p>CORS\uFF08Cross-Origin Resource Sharing\uFF09\u7684\u5168\u79F0\u53EB \u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB</p><p>CORS \u5B9E\u73B0\u7684\u539F\u7406\uFF1A\u4F7F\u7528\u989D\u5916\u7684 HTTP \u5934\u6765\u544A\u8BC9\u6D4F\u89C8\u5668\uFF0C\u8BA9\u8FD0\u884C\u5728\u67D0\u4E00\u4E2A origin \u4E0A\u7684 Web \u5E94\u7528\u5141\u8BB8\u8BBF\u95EE\u6765\u81EA\u4E0D\u540C\u6E90\u670D\u52A1\u5668\u4E0A\u7684\u6307\u5B9A\u7684\u8D44\u6E90\u3002</p><p>\u6574\u4E2A CORS \u7684\u901A\u4FE1\u8FC7\u7A0B\uFF0C\u90FD\u662F\u6D4F\u89C8\u5668\u81EA\u52A8\u5B8C\u6210\u3002</p><p>\u6D4F\u89C8\u5668\u4E00\u65E6\u53D1\u73B0\u8BF7\u6C42\u662F\u4E00\u4E2A\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u9996\u5148\u4F1A\u5224\u65AD\u8BF7\u6C42\u7684\u7C7B\u578B\uFF0C</p><p>\u5982\u679C\u662F<strong>\u7B80\u5355\u8BF7\u6C42</strong>\uFF0C\u4F1A\u5728\u8BF7\u6C42\u5934\u4E2D\u589E\u52A0\u4E00\u4E2A Origin \u5B57\u6BB5\uFF0C\u8868\u793A\u8FD9\u6B21\u8BF7\u6C42\u662F\u6765\u81EA\u54EA\u4E00\u4E2A\u6E90\u3002\u800C\u670D\u52A1\u5668\u63A5\u53D7\u5230\u8BF7\u6C42\u540E\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u54CD\u5E94\uFF0C\u54CD\u5E94\u5934\u4E2D\u4F1A\u5305\u542B\u4E00\u4E2A\u53EB Access-Control-Allow-Origin \u7684\u5B57\u6BB5\uFF0C\u5B83\u7684\u503C\u8981\u4E48\u5305\u542B\u7531 Origin \u9996\u90E8\u5B57\u6BB5\u6240\u6307\u660E\u7684\u57DF\u540D\uFF0C\u8981\u4E48\u662F\u4E00\u4E2A &quot;*&quot;\uFF0C\u8868\u793A\u63A5\u53D7\u4EFB\u610F\u57DF\u540D\u7684\u8BF7\u6C42\u3002\u5982\u679C\u54CD\u5E94\u5934\u4E2D\u6CA1\u6709\u8FD9\u4E2A\u5B57\u6BB5\uFF0C\u5C31\u8BF4\u660E\u5F53\u524D\u6E90\u4E0D\u5728\u670D\u52A1\u5668\u7684\u8BB8\u53EF\u8303\u56F4\u5185\uFF0C\u6D4F\u89C8\u5668\u5C31\u4F1A\u62A5\u9519</p><p>\u5982\u679C\u662F<strong>\u975E\u7B80\u5355\u8BF7\u6C42</strong>\uFF0C\u4F1A\u5728\u6B63\u5F0F\u901A\u4FE1\u4E4B\u524D\uFF0C\u53D1\u9001\u4E00\u4E2A\u9884\u68C0\u8BF7\u6C42\uFF08preflight\uFF09\uFF0C\u76EE\u7684\u5728\u4E8E\u8BE2\u95EE\u670D\u52A1\u5668\uFF0C\u5F53\u524D\u7F51\u9875\u6240\u5728\u7684\u57DF\u540D\u662F\u5426\u5728\u670D\u52A1\u5668\u7684\u8BB8\u53EF\u540D\u5355\u4E4B\u4E2D\uFF0C\u4EE5\u53CA\u53EF\u4EE5\u4F7F\u7528\u54EA\u4E9B HTTP \u52A8\u8BCD\u548C\u5934\u4FE1\u606F\u5B57\u6BB5\uFF0C\u53EA\u6709\u5F97\u5230\u80AF\u5B9A\u7B54\u590D\uFF0C\u6D4F\u89C8\u5668\u624D\u4F1A\u53D1\u51FA\u6B63\u5F0F\u7684\u8BF7\u6C42\uFF0C\u5426\u5219\u5C31\u62A5\u9519\u3002</p><blockquote><p>\u7B80\u5355\u8BF7\u6C42: GET, HEAD, POST,\u5E76\u4E14 Content-Type \u7684\u503C\u4EC5\u9650\u4E8E\u4E0B\u5217\u4E09\u8005\u4E4B\u4E00\uFF1A text/plain multipart/form-data application/x-www-form-urlencoded</p></blockquote><p>\u5B9E\u73B0 CORS \u7684\u5173\u952E\u662F\u670D\u52A1\u5668\uFF0C\u53EA\u8981\u670D\u52A1\u5668\u5B9E\u73B0\u4E86 CORS \u7684\u76F8\u5173\u63A5\u53E3\uFF0C\u5C31\u53EF\u4EE5\u5B9E\u73B0\u8DE8\u57DF\u3002</p><p>CORS \u4E0E JSONP\u76F8\u6BD4\uFF0C<strong>\u4F18\u52BF</strong>\u662F\u652F\u6301\u6240\u6709\u7684\u8BF7\u6C42\u65B9\u6CD5\uFF0C<strong>\u7F3A\u70B9</strong>\u662F\u517C\u5BB9\u6027\u4E0A\u8F83 JSONP \u5DEE</p><h3 id="postmessage" tabindex="-1"><a class="header-anchor" href="#postmessage" aria-hidden="true">#</a> PostMessage</h3><p>PostMessage \u662F Html5 XMLHttpRequest Level 2 \u4E2D\u7684 API\uFF0C\u5B83\u53EF\u4EE5\u5B9E\u73B0\u8DE8\u6587\u6863\u901A\u4FE1\uFF08Cross-document messaging\uFF09</p><h3 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> Websocket</h3><p>Websocket \u662F HTML5 \u7684\u4E00\u4E2A\u6301\u4E45\u5316\u7684\u534F\u8BAE\uFF0C\u5B83\u5B9E\u73B0\u4E86\u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u5668\u7684\u5168\u53CC\u5DE5\u901A\u4FE1\uFF0C\u540C\u65F6\u4E5F\u662F\u8DE8\u57DF\u7684\u4E00\u79CD\u89E3\u51B3\u65B9\u6848\u3002</p><h3 id="nginx-\u53CD\u5411\u4EE3\u7406-\u548C-node-\u4E2D\u95F4\u4EF6\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#nginx-\u53CD\u5411\u4EE3\u7406-\u548C-node-\u4E2D\u95F4\u4EF6\u4EE3\u7406" aria-hidden="true">#</a> Nginx \u53CD\u5411\u4EE3\u7406 \u548C Node \u4E2D\u95F4\u4EF6\u4EE3\u7406</h3><h3 id="document-domain" tabindex="-1"><a class="header-anchor" href="#document-domain" aria-hidden="true">#</a> document.domain</h3><p>\u4E8C\u7EA7\u57DF\u540D\u76F8\u540C\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BBE\u7F6E document.domain \u5C31\u53EF\u4EE5\u5B9E\u73B0\u8DE8\u57DF\u3002</p>`,28);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};