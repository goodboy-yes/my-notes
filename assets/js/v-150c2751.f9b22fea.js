"use strict";(self.webpackChunkmy_notes=self.webpackChunkmy_notes||[]).push([[415],{4037:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-150c2751",path:"/knowledge-point/algorithm.html",title:"算法",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"动态规划",slug:"动态规划",children:[{level:3,title:"斐波那契数列",slug:"斐波那契数列",children:[]}]}],filePathRelative:"knowledge-point/algorithm.md",git:{updatedTime:162999496e4,contributors:[]}}},3312:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法</h1><h2 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划" aria-hidden="true">#</a> 动态规划</h2><h3 id="斐波那契数列" tabindex="-1"><a class="header-anchor" href="#斐波那契数列" aria-hidden="true">#</a> 斐波那契数列</h3><p>斐波那契数列（Fibonacci sequence），又称黄金分割数列，因数学家莱昂纳多·斐波那契（Leonardoda Fibonacci）以兔子繁殖为例子而引入，故又称为“兔子数列”，指的是这样一个数列：</p><p>0、1、1、2、3、5、8、13、21、34、……</p><p>在数学上，斐波那契数列以如下被以递推的方法定义：</p><p>F(0)=0，F(1)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 2，n ∈ N*）</p><p><strong>斐波那契数列的 JS 实现</strong></p><ul><li><p>递归</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">recurFib</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> n<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">recurFib</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">recurFib</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>递归的执行效率非常低，因为太多值在递归中被重新计算，我们可以使用<strong>动态规划</strong>的技巧来设计一个效率更高的算法</p></li><li><p>动态规划</p><p>动态规划从它能解决的最简单的子问题开始，继而通过得到的解，去解决其他更复杂的子问题，直到整个问题都被解决。所有子问题的解通常被存储在一个数组中</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">dynFib</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> val <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> n<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    val<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      val<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> val<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> val<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>也可不使用数组</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">iterFib</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> last <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> nextLast <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> n<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      result <span class="token operator">=</span> last <span class="token operator">+</span> nextLast<span class="token punctuation">;</span>\n      nextLast <span class="token operator">=</span> last<span class="token punctuation">;</span>\n      last <span class="token operator">=</span> result<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></li></ul><blockquote><p>参考：《数据结构与算法 JavaScript 描述》</p></blockquote>',10),t={render:function(n,s){return p}}}}]);