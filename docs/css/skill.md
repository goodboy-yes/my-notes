# 小技巧

## 不定宽文字跑马灯来回滚动展示

```html
<div class="wrap">
  <p title="我的宽度是正常宽度">我的宽度是正常宽度</p>
  <p class="scroll" title="我的宽度是溢出了溢出了很大一部分">
    我的宽度是溢出了溢出了很大一部分
  </p>
</div>
```

**父容器定宽**

[codepen](https://codepen.io/Chokcoco/pen/QWyoMrx)

```css
.wrap {
  position: relative;
  width: 150px;
  overflow: hidden;
}
p {
  /* <p> 标签的宽度为父元素的 100%，需借助 inline-block 的特性取得实际宽度，不使用inline是因为 transform 是无法作用在内联元素之上的 */
  white-space: nowrap;
  display: inline-block;
}
p:hover {
  animation: move 1.5s infinite alternate linear;
}

@keyframes move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    /* 使用 transform: translate() 进行位移的时候，如果使用百分比表示，那么百分比的基准元素是元素本身 */
    transform: translate(calc(-100% + 150px), 0);
  }
}
```

父容器不定宽

[codepen](https://codepen.io/Chokcoco/pen/oNbVGrd)

```css
.wrap {
  position: relative;
  width: 150px;
  overflow: hidden;
}

p {
  white-space: nowrap;
  display: inline-block;
  position: relative;
}
p:hover {
  animation: move 1.5s infinite alternate linear;
}

@keyframes move {
  0% {
    left: 0;
    transform: translate(0, 0);
  }
  100% {
    /* 使用 margin-left 替换 left 也是一样可以实现的，使用百分比表示的 margin-left 位移的基准也是父元素的宽度 */
    left: 100%;
    transform: translate(-100%, 0);
  }
}
```

**不足**

- 无法判断文本长度是否超出父元素宽度，需要借助 JavaScript 简单判断，然后通过一个 class 进行控制。
- 在父容器不定宽度的情况下，由于需要同时对两个属性进行动画，并且位移的方向是相反的，所以动画看上去会有一点闪烁

> 参考链接：[小技巧 | 巧妙实现不定宽溢出文本循环滚动展示](https://mp.weixin.qq.com/s/aX8Sh3beSmMh0OF_79nw_A)

## 文本超出显示省略号...

**单行**

```css
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

**多行**

```css
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
```

## 居中布局方式

### 行内元素

#### text-align

```css
text-align: center; /* 水平居中*/
```

#### line-height

```css
/* 垂直居中*/

/*<div class="wrap" > <div class="box1" > </div > </div >*/
.wrap {
  width: 500px;
  height: 500px;
  background-color: pink;
  line-height: 500px;
  text-align: center;
}

.box1 {
  width: 50px;
  height: 50px;
  background-color: green;
  display: inline-block;
}
```

#### vertical-align

```css
/* 水平垂直居中*/

/*<div class="wrap" > <div class="box1" > </div > </div >*/
.wrap {
  width: 500px;
  height: 500px;
  background-color: pink;
  text-align: center;
}

.wrap::after {
  height: 100%;
  content: "";
  display: inline-block;
  vertical-align: middle;
}
.box1 {
  display: inline-block;
  vertical-align: middle;
  background: blue;
  width: 300px;
  height: 300px;
}
```

### 块级元素

#### flex

```css
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

#### transform 和 postition

```css
.box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

#### margin

```css
.box {
  margin: 0 auto;
}
```

#### 定位

```css
div {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
```

## css 写出一个三角形角标

```css
/* 等腰 */
div {
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-bottom-color: red;
}

/* 等边 */
div {
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-bottom: 8px solid red;
}
```
