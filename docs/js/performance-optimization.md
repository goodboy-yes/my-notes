# 性能优化

## 方向

- 加载时优化：预加载、缓存、网络层、页面解析、静态资源、

- 运行时优化：避免强制同步布局、长列表优化、避免 js 执行时间过长、并行计算-service worker、Composite 分层绘制、滚动事件性能优化、Passive event listeners、动画

### 加载时优化

所以我们可以优先加载首屏资源，非首屏资源按需加载或懒加载，以加快首屏渲染速度。

我们可以从这个过程来挖掘优化点：`交给 DNS 域名解析` -> `找到对应的 IP 地址` -> `然后进行 TCP 连接` -> `浏览器发送 HTTP 请求` -> `服务器接收请求` -> `服务器处理请求并返回 HTTP 报文` -> `浏览器接收并解析渲染页面`

通过缩短请求时间，从而去加快网站的访问速度，提升性能。

这个过程中可以提升性能的优化的点：

- DNS 解析优化，浏览器访问 DNS 的时间就可以缩短
- 使用 HTTP2
- 减少 HTTP 请求数量
- 减少 http 请求大小
- 服务器端渲染
- 静态资源使用 CDN
- 资源缓存，不重复加载相同的资源

### 运行时优化

- 减少重绘与重排
- 避免页面卡顿
- 长列表优化
- 滚动事件性能优化
- 使用 Web Workers

![](https://mmbiz.qpic.cn/mmbiz_png/dlev5LqXTnXqgibDAFaicctjibbnedSOg59e0yNkiaOQFoBOv84yG5nMDdkRRDIh14RUJjWkS48byCg4NpXp6Licnog/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

## 缓存

**Web 缓存种类：** 数据库缓存，CDN 缓存，代理服务器缓存，浏览器缓存

**浏览器缓存过程：** 强缓存，协商缓存。

### 一、强缓存：

强缓存是当我们访问 URL 的时候，不会向服务器发送请求，直接从缓存中读取资源，但是会返回 200 的状态码。

**设置强缓存**

我们第一次进入页面请求服务器资源，但响应头中有 `expires`、`pragma` 或者 `cache-control` 字段，代表这是强缓存，浏览器就会把资源缓存在 `memory cache` 或 `disk cache` 中。

**expires**：是 HTTP1.0 控制网页缓存的字段，值为一个时间戳，表示到期时间，有个缺点，就是它判断是否过期是用本地时间来判断的，本地时间是可以自己修改的

**Cache-Control**：是 HTTP1.1 中控制网页缓存的字段，当 Cache-Control、expires 都存在时，Cache-Control 优先级更高。
no-store：不使用缓存。
no-cache：客户端缓存资源，但是是否缓存需要经过协商缓存来验证，
max-age：缓存保质期，其他取值见参考链接

如果`request headers`中，Cache-Control 为 no-cache。表示不管服务端有没有设置 Cache-Control，都必须从重新去获取请求。

**pragma**：这个是 HTTP1.0 中禁用网页缓存的字段，其取值为 no-cache 时和 Cache-Control 的 no-cache 效果一样。取值见参考链接。

Pragma: no-cache 兼容 http 1.0 ，Cache-Control: no-cache 是 http 1.1 提供的

---

强缓存我们会把资源房放到 `memory cache` 和 `disk cache` 中。存储图像和网页等资源主要缓存在 `memory cache`，操作系统缓存文件等资源大部分都会缓存在 `disk cache` 中。具体操作浏览器自动分配，看谁的资源利用率不高就分给谁

查找浏览器缓存时会按顺序查找: `Service Worker-->Memory Cache-->Disk Cache-->Push Cache`。

**Service Worker**：运行在浏览器背后的独立线程，一般可以用来实现缓存功能。使用 Service Worker 的话，传输协议必须为 HTTPS。因为 Service Worker 中涉及到请求拦截。Service Worker 的缓存与浏览器**其他内建的缓存机制**不同，它可以让我们自由控制缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续性的。

**Memory Cache**：内存中的缓存，缓存页面上已经下载的样式、脚本、图片等，内存缓存虽然读取高效，可是缓存持续性很短，会随着进程的释放而释放。一旦我们关闭 Tab 页面，内存中的缓存也就被释放了。

**Disk Cache**：存储在硬盘中的缓存，读取速度慢点，但是什么都能存储到磁盘中，比之 Memory Cache 胜在容量和存储时效性上。

`memory cache` 要比 `disk cache` 快的多。举个例子：从远程 web 服务器直接提取访问文件可能需要 500 毫秒(半秒)，那么磁盘访问可能需要 10-20 毫秒，而内存访问只需要 100 纳秒，更高级的还有 L1 缓存访问(最快和最小的 CPU 缓存)只需要 0.5 纳秒。

**Push Cache**：推送缓存，是 HTTP/2 中的内容

**prefetch cache(预取缓存)**：link 标签上带了 prefetch，再次加载会出现。prefetch 是预加载的一种方式，被标记为 prefetch 的资源，将会被浏览器在空闲时间加载。

---

第二次请求时浏览器判断请求参数，如果符合上面规定的强缓存条件就直接返回状态码 200，从本地缓存中拿数据。否则把响应参数存在 request header 请求头中，看是否符合**协商缓存**，符合则返回状态码 304，不符合则服务器会返回全新资源

### 二、协商缓存

协商缓存就是强缓存失效后，浏览器携带缓存标识向服务器发送请求，由服务器根据缓存标识来决定是否使用缓存的过程。

**设置协商缓存**

**Last-Modified / If-Modified-Since**：Last-Modified 是服务器响应请求时，返回该资源文件在服务器最后被修改的时间，If-Modified-Since 则是客户端再次发起该请求时，携带上次请求返回的 Last-Modified 值，服务端通过判断资源最后被修改时间如果大于 If-Modified-Since 的字段值，重新返回资源，状态码为 200；否则则返回 304，代表资源无更新，可继续使用缓存文件

**Etag / If-None-Match**：Etag 是服务器响应请求时，返回当前资源文件的一个唯一标识(由服务器生成)。If-None-Match 是客户端再次发起该请求时，携带上次请求返回的唯一标识 Etag 值，服务器会根据 If-None-Match 的字段值与该资源在服务器的 Etag 值做对比，一致则返回 304，代表资源无更新，继续使用缓存文件；不一致则重新返回资源文件，状态码为 200。

**Etag / If-None-Match 优先级高于 Last-Modified / If-Modified-Since**，同时存在则只有 Etag / If-None-Match 生效。

大部分 web 服务器都默认开启协商缓存。

### 三、刷新对于强缓存和协商缓存的影响

1. 当 ctrl+f5 强制刷新网页时，直接从服务器加载，跳过强缓存和协商缓存。

2. 当 f5 刷新网页时，跳过强缓存，但是会检查协商缓存。

3. 浏览器地址栏中写入 URL，回车 浏览器发现缓存中有这个文件了，不用继续请求了，直接去缓存拿。（最快）

> 参考链接：[浏览器缓存的力量](https://mp.weixin.qq.com/s/zqrVmbK7Qp-zkfTqn3o69g)

## 启用硬件加速

浏览器接收到页面文档后，会将文档中的标记语言解析为 DOM 树。DOM 树和 CSS 结合后形成浏览器构建页面的渲染树。渲染树中包含了大量的渲染元素，每一个渲染元素会被分到一个图层中，每个图层又会被加载到 GPU 形成渲染纹理。

在下面情况中浏览器会创建一个独立的复合图层进行渲染（硬件加速，执行动画时不会发生`reflow`和 `repaint`）

- 3D 或者 CSS transform

  3D 和 2D transform 的区别就在于，浏览器在页面渲染前为 3D 动画创建独立的复合图层，2D 则是在运行期间。2D 动画开始时，生成新的复合图层并加载为 GPU 的纹理用于初始化 repaint。然后由 GPU 的复合器操纵整个动画的执行。最后当动画结束时，再次执行 repaint 操作删除复合图层。

- `<video>`和`<canvas>`标签

- CSS filters

- 元素覆盖时，比如使用了 `z-index` 属性

在实践中可以通过设置执行 `3D transform`创建了一个独立图层，图层中的动画则有 GPU 进行预处理并且触发了硬件加速。

```css
.example1 {
  transform: translateZ(0);
}
.example2 {
  transform: rotateZ(360deg);
}
```

**使用硬件加速的注意事项**

内存。如果 GPU 加载了大量的纹理，那么很容易就会发生内容问题，这一点在移动端浏览器上尤为明显，所以，一定要牢记不要让页面的每个元素都使用硬件加速。

使用 GPU 渲染会影响字体的抗锯齿效果。这是因为 GPU 和 CPU 具有不同的渲染机制。即使最终硬件加速停止了，文本还是会在动画期间显示得很模糊。
