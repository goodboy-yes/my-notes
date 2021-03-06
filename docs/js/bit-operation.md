# 位运算

## 位运算符

- `|`：或运算符，表示若两个二进制位都为 0，则结果为 0，否则为 1。
- `&`：与运算符，表示若两个二进制位都为 1，则结果为 1，否则为 0。
- `~`：否运算符，表示对一个二进制位取反。
- `^`：异或，表示若两个二进制位不相同，则结果为 1，否则为 0。
- `<<`：左移运算符。
- `>>`：右移运算符。

这些位运算符直接处理每一个比特位（bit），所以是非常底层的运算，好处是速度极快，缺点是很不直观，许多场合不能使用它们，否则会使代码难以理解

**位运算符**只对整数起作用，如果一个运算子不是整数，会自动转为整数后再执行。另外，虽然在 JavaScript 内部，数值都是以 64 位浮点数的形式储存，但是做位运算的时候，是以 32 位带符号的整数进行运算的，并且返回值也是一个 32 位带符号的整数。

## 使用

### 或

```javascript
0 | 3; // 3
```

0 和 3 的二进制形式分别是 00 和 11，所以进行二进制或运算会得到 11（即 3）。

利用**或**特性，可以写出一个函数，将任意数值转为 32 位整数。

```javascript
function toInt32(x) {
  return x | 0;
}
```

### 否

二进制否运算符（~）将每个二进制位都变为相反值（0 变为 1，1 变为 0）。它的返回结果有时比较难理解，因为涉及到计算机内部的数值表示机制。

```javascript
~3; // -4
```

上面表达式对 3 进行二进制否运算，得到-4。之所以会有这样的结果，是因为位运算时，JavaScript 内部将所有的运算子都转为 32 位的二进制整数再进行运算。

3 的 32 位整数形式是 `00000000000000000000000000000011`，二进制否运算以后得到 `11111111111111111111111111111100`。由于第一位（符号位）是 1，所以这个数是一个负数。JavaScript 内部采用补码形式表示负数，即需要将这个数减去 1，再取一次反，然后加上负号，才能得到这个负数对应的 10 进制值。这个数减去 1 等于 `11111111111111111111111111111011`，再取一次反得到 `00000000000000000000000000000100`，再加上负号就是-4。

考虑到这样的过程比较麻烦，可以简单记忆成，**一个数与自身的取反值相加，等于-1。**

对一个整数连续两次二进制否运算，得到它自身。

```javascript
~~3; // 3
```

所有的位运算都只对整数有效。二进制否运算遇到小数时，也会将小数部分舍去，只保留整数部分。所以，对一个小数连续进行两次二进制否运算，能达到取整效果。

```javascript
~~2.9; // 2
```

**使用二进制否运算取整，是所有取整方法中最快的一种。**

### 异或

异或有一个特殊运用，连续对两个数 a 和 b 进行三次异或运算，可以互换它们的值。这意味着，使用异或可以在不引入临时变量的前提下，互换两个变量的值。

```javascript
let a = 10;
let b = 99;

a ^= b;
b ^= a;
a ^= b;

a; // 99
b; // 10
```

**这是互换两个变量的值的最快方法。**

异或运算也可以用来取整。

```javascript
12.9 ^ 0; // 12
```

### 左移运算符

左移运算符（<<）表示将一个数的二进制值向左移动指定的位数，尾部补 0，即乘以 2 的指定次方。向左移动的时候，最高位的符号位是一起移动的。

```javascript
4 << 1;
// 8

-4 << 1;
// -8
//-4 的二进制形式是`11111111111111111111111111111100`，
//左移一位后得到`11111111111111111111111111111000`，
//该数转为十进制（减去 1 后取反，再加上负号）即为-8。
```

如果左移 0 位，就相当于将该数值转为 32 位整数，等同于取整，对于正数和负数都有效。

```javascript
13.5 << 0;
// 13
```

可使用左移运算符，将颜色的 RGB 值转为 HEX 值

```javascript
var color = { r: 186, g: 218, b: 85 };

// RGB to HEX
// (1 << 24)的作用为保证结果是6位数
var rgb2hex = function (r, g, b) {
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16) // 先转成十六进制，然后返回字符串
      .substr(1)
  ); // 去除字符串的最高位，返回后面六个字符串
};

rgb2hex(color.r, color.g, color.b);
// "#bada55"
```

### 右移运算符

右移运算符（>>）表示将一个数的二进制值向右移动指定的位数。如果是正数，头部全部补 0；如果是负数，头部全部补 1。右移运算符基本上相当于除以 2 的指定次方（最高位即符号位参与移动）。

```javascript
4 >> 1;

-4 >> 1;
// -2
// 因为-4的二进制形式为 11111111111111111111111111111100，
// 右移一位，头部补1，得到 11111111111111111111111111111110,
// 即为十进制的-2
```

右移运算可以模拟 2 的整除运算。

```javascript
5 >> 1;
// 2
// 相当于 5 / 2 = 2

21 >> 2;
// 5
// 相当于 21 / 4 = 5
```

> 参考链接：[二进制位运算符](https://wangdoc.com/javascript/operators/bit.html)
