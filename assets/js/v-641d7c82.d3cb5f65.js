"use strict";(self.webpackChunkmy_notes=self.webpackChunkmy_notes||[]).push([[779],{2061:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-641d7c82",path:"/js/bit-operation.html",title:"位运算",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"位运算符",slug:"位运算符",children:[]},{level:2,title:"使用",slug:"使用",children:[{level:3,title:"或",slug:"或",children:[]},{level:3,title:"否",slug:"否",children:[]},{level:3,title:"异或",slug:"异或",children:[]},{level:3,title:"左移运算符",slug:"左移运算符",children:[]},{level:3,title:"右移运算符",slug:"右移运算符",children:[]}]}],filePathRelative:"js/bit-operation.md",git:{updatedTime:1634399637e3,contributors:[]}}},4803:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var e=a(6252);const p=(0,e.uE)('<h1 id="位运算" tabindex="-1"><a class="header-anchor" href="#位运算" aria-hidden="true">#</a> 位运算</h1><h2 id="位运算符" tabindex="-1"><a class="header-anchor" href="#位运算符" aria-hidden="true">#</a> 位运算符</h2><ul><li><code>|</code>：或运算符，表示若两个二进制位都为 0，则结果为 0，否则为 1。</li><li><code>&amp;</code>：与运算符，表示若两个二进制位都为 1，则结果为 1，否则为 0。</li><li><code>~</code>：否运算符，表示对一个二进制位取反。</li><li><code>^</code>：异或，表示若两个二进制位不相同，则结果为 1，否则为 0。</li><li><code>&lt;&lt;</code>：左移运算符。</li><li><code>&gt;&gt;</code>：右移运算符。</li></ul><p>这些位运算符直接处理每一个比特位（bit），所以是非常底层的运算，好处是速度极快，缺点是很不直观，许多场合不能使用它们，否则会使代码难以理解</p><p><strong>位运算符</strong>只对整数起作用，如果一个运算子不是整数，会自动转为整数后再执行。另外，虽然在 JavaScript 内部，数值都是以 64 位浮点数的形式储存，但是做位运算的时候，是以 32 位带符号的整数进行运算的，并且返回值也是一个 32 位带符号的整数。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><h3 id="或" tabindex="-1"><a class="header-anchor" href="#或" aria-hidden="true">#</a> 或</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">0</span> <span class="token operator">|</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>0 和 3 的二进制形式分别是 00 和 11，所以进行二进制或运算会得到 11（即 3）。</p><p>利用<strong>或</strong>特性，可以写出一个函数，将任意数值转为 32 位整数。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">toInt32</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> x <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="否" tabindex="-1"><a class="header-anchor" href="#否" aria-hidden="true">#</a> 否</h3><p>二进制否运算符（~）将每个二进制位都变为相反值（0 变为 1，1 变为 0）。它的返回结果有时比较难理解，因为涉及到计算机内部的数值表示机制。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">~</span><span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// -4</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>上面表达式对 3 进行二进制否运算，得到-4。之所以会有这样的结果，是因为位运算时，JavaScript 内部将所有的运算子都转为 32 位的二进制整数再进行运算。</p><p>3 的 32 位整数形式是 <code>00000000000000000000000000000011</code>，二进制否运算以后得到 <code>11111111111111111111111111111100</code>。由于第一位（符号位）是 1，所以这个数是一个负数。JavaScript 内部采用补码形式表示负数，即需要将这个数减去 1，再取一次反，然后加上负号，才能得到这个负数对应的 10 进制值。这个数减去 1 等于 <code>11111111111111111111111111111011</code>，再取一次反得到 <code>00000000000000000000000000000100</code>，再加上负号就是-4。</p><p>考虑到这样的过程比较麻烦，可以简单记忆成，<strong>一个数与自身的取反值相加，等于-1。</strong></p><p>对一个整数连续两次二进制否运算，得到它自身。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">~</span><span class="token operator">~</span><span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>所有的位运算都只对整数有效。二进制否运算遇到小数时，也会将小数部分舍去，只保留整数部分。所以，对一个小数连续进行两次二进制否运算，能达到取整效果。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">~</span><span class="token operator">~</span><span class="token number">2.9</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>使用二进制否运算取整，是所有取整方法中最快的一种。</strong></p><h3 id="异或" tabindex="-1"><a class="header-anchor" href="#异或" aria-hidden="true">#</a> 异或</h3><p>异或有一个特殊运用，连续对两个数 a 和 b 进行三次异或运算，可以互换它们的值。这意味着，使用异或可以在不引入临时变量的前提下，互换两个变量的值。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>\n\na <span class="token operator">^=</span> b<span class="token punctuation">;</span>\nb <span class="token operator">^=</span> a<span class="token punctuation">;</span>\na <span class="token operator">^=</span> b<span class="token punctuation">;</span>\n\na<span class="token punctuation">;</span> <span class="token comment">// 99</span>\nb<span class="token punctuation">;</span> <span class="token comment">// 10</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>这是互换两个变量的值的最快方法。</strong></p><p>异或运算也可以用来取整。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">12.9</span> <span class="token operator">^</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 12</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="左移运算符" tabindex="-1"><a class="header-anchor" href="#左移运算符" aria-hidden="true">#</a> 左移运算符</h3><p>左移运算符（&lt;&lt;）表示将一个数的二进制值向左移动指定的位数，尾部补 0，即乘以 2 的指定次方。向左移动的时候，最高位的符号位是一起移动的。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">4</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token comment">// 8</span>\n\n<span class="token operator">-</span><span class="token number">4</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token comment">// -8</span>\n<span class="token comment">//-4 的二进制形式是`11111111111111111111111111111100`，</span>\n<span class="token comment">//左移一位后得到`11111111111111111111111111111000`，</span>\n<span class="token comment">//该数转为十进制（减去 1 后取反，再加上负号）即为-8。</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>如果左移 0 位，就相当于将该数值转为 32 位整数，等同于取整，对于正数和负数都有效。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">13.5</span> <span class="token operator">&lt;&lt;</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token comment">// 13</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>可使用左移运算符，将颜色的 RGB 值转为 HEX 值</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> color <span class="token operator">=</span> <span class="token punctuation">{</span> r<span class="token operator">:</span> <span class="token number">186</span><span class="token punctuation">,</span> g<span class="token operator">:</span> <span class="token number">218</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token number">85</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// RGB to HEX</span>\n<span class="token comment">// (1 &lt;&lt; 24)的作用为保证结果是6位数</span>\n<span class="token keyword">var</span> <span class="token function-variable function">rgb2hex</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">r<span class="token punctuation">,</span> g<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token string">&quot;#&quot;</span> <span class="token operator">+</span>\n    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">24</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>r <span class="token operator">&lt;&lt;</span> <span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>g <span class="token operator">&lt;&lt;</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">+</span> b<span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token comment">// 先转成十六进制，然后返回字符串</span>\n      <span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 去除字符串的最高位，返回后面六个字符串</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">rgb2hex</span><span class="token punctuation">(</span>color<span class="token punctuation">.</span>r<span class="token punctuation">,</span> color<span class="token punctuation">.</span>g<span class="token punctuation">,</span> color<span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// &quot;#bada55&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="右移运算符" tabindex="-1"><a class="header-anchor" href="#右移运算符" aria-hidden="true">#</a> 右移运算符</h3><p>右移运算符（&gt;&gt;）表示将一个数的二进制值向右移动指定的位数。如果是正数，头部全部补 0；如果是负数，头部全部补 1。右移运算符基本上相当于除以 2 的指定次方（最高位即符号位参与移动）。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">4</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n<span class="token operator">-</span><span class="token number">4</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token comment">// -2</span>\n<span class="token comment">// 因为-4的二进制形式为 11111111111111111111111111111100，</span>\n<span class="token comment">// 右移一位，头部补1，得到 11111111111111111111111111111110,</span>\n<span class="token comment">// 即为十进制的-2</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>右移运算可以模拟 2 的整除运算。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">5</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token comment">// 2</span>\n<span class="token comment">// 相当于 5 / 2 = 2</span>\n\n<span class="token number">21</span> <span class="token operator">&gt;&gt;</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token comment">// 5</span>\n<span class="token comment">// 相当于 21 / 4 = 5</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',40),t=(0,e.Uk)("参考链接："),c={href:"https://wangdoc.com/javascript/operators/bit.html",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("二进制位运算符"),o={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("blockquote",null,[(0,e._)("p",null,[t,(0,e._)("a",c,[l,(0,e.Wm)(a)])])])],64)}}}}]);