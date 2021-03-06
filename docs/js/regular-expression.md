# 正则表达式

## 构造正则表达式

```js
//通过字面常量的方式，一对正斜杠中间写表达式内容,后面可以跟修饰符。
const ex = /[abcd]/gi;

//通过构造函数的方式，第一个参数是表达式内容，第二个参数是修饰符
const re = new RegExp("[abcd]", "gi");
```

## 修饰符

- `i` 执行大小写不敏感的匹配
- `g`执行全局匹配，即返回所有匹配的子串，默认只返回第一个匹配
- `m`多行匹配，^ 和 $ 在字符串的每一行都进行一次匹配。
- `s`使特殊字符圆点 `.`中包含换行符 `\n`

## 量词

正则默认是只匹配一次的，即一次匹配完后就算后文还有符合的内容也不再获取，这涉及到修饰符`g`

- `*` 匹配前面的子表达式零次或多次。例如，`zo*` 能匹配 "z" 以及 "zoo"。 \* 等价于`{0,}`。

- `+` 匹配前面的子表达式一次或多次。例如，`zo+` 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 `{1,}`。
- `?` 匹配前面的子表达式零次或一次。例如，`do(es)?` 可以匹配 "do" 或 "does" 中的"do" 。? 等价于 `{0,1}`。
- `{}` 表示前面的字符应该出现的次数。`{n}`表示出现 n 次;`{n,}`表示至少出现 n 次；`{n,m}`表示出现 n 次到 m 次。

**量词模式**

量词还涉及到模式问题，因为量词有范围，这就意味着可取多可取少，但计算机是不允许有歧义的，所以量词存在三种模式

- 贪婪模式：默认，会尽可能匹配多的内容
- 懒惰模式：量词后面加个`?`，会尽可能少匹配内容
- 独占模式：量词后面加个`+`，不触发回溯动作

## 元字符

- `\` 在字面意义和特殊意义之间进行转换，例如\/表示字符/。
- `^` 匹配字符串的开头
- `$` 匹配字符串的结尾
- `()` 小括号里面的元素结合为一组，可以在后面引用它

- `[]` 匹配字符集中的一个字符，例如`[abc]`表示匹配字符 a 或 b 或 c；[^abc]表示匹配不等于 a 或 b 或 c 的字符；`[a-e]`匹配在 a 到 e 范围内的字符；`[a-b0-9A-Z_]`匹配字母数字和下划线。
- `|` 或操作，例如`(jpg|png)`表示匹配字符串 jpg 或字符串 png。注意，用`/good|goodbye/`去匹配'goodbye' 匹配到的是 good，因为分支结构是惰性的，前面的匹配上了，后面的就不再尝试了
- `\f` 匹配一个换页符。等价于 `\x0c` 和 `\cL`。
- `\n` 匹配一个换行符。等价于 `\x0a` 和 `\cJ`。
- `\r` 匹配一个回车符。等价于 `\x0d` 和 `\cM`。
- `\t` 匹配一个制表符。等价于`\x09` 和 `\cI`。
- `\v` 匹配一个垂直制表符。等价于 `\x0b` 和 `\cK`。
- `.` 匹配除换行符 \n 之外的任何单字符。
- `\d` 匹配数字`[0-9]`
- `\D` 匹配非数字字符`[^0-9]`
- `\s` 匹配一个空白字符`[\f\n\r\t\v]`
- `\S` 匹配一个非空白字符`[^\f\n\r\t\v]`
- `\w` 匹配字母数字和下划线`[a-zA-Z0-9_]`
- `\W` 匹配除字母数字下划线之外的字符`[^a-za-z0-9_] `
- `\b`匹配一个零宽单词边界
- `\B` 匹配一个零宽非单词边界

  零宽: 只匹配位置, 不匹配字符

  单词： 在 JS 中, 单词的定义就是`\w`, 非单词的定义就是`\W`, 非常简洁

  边界：也就是在这个位置之前是单词, 那么在这个位置之后就是非单词, 反之也是这样。例如:

  ![img](https://pic2.zhimg.com/50/v2-46442794009ec26d73a388519b9cab86_hd.jpg?source=1940ef5c)![img](https://pic2.zhimg.com/80/v2-46442794009ec26d73a388519b9cab86_720w.jpg?source=1940ef5c)

  从上图可以看到, 在开头和结尾各有一个单词边界, 因为开头处, 边界的右端是单词, 而左端不是, 二者不同, 所以就有一个单词界限.

  在 `My` 的结尾处也有一处界限, 因为在界限的左端是单词 `y`, 右端是空格, 二者不同, 所以是界限.

  何谓非边界? 同类无界. `\w\w` 或者 `\W\W`, 这个位置前后都是同类, 所以就没有界这一说.

  ![img](https://pic2.zhimg.com/50/v2-e6c9037e18c8dee5b1228831d818fd3c_hd.jpg?source=1940ef5c)![img](https://pic2.zhimg.com/80/v2-e6c9037e18c8dee5b1228831d818fd3c_720w.jpg?source=1940ef5c)

  单词和单词是同类, 之间无界限, 所以我们可以看到每个字母之间都是非界限.

  在 `cat` 后面有两个空格, 两个非单词也是同类, 所以中间有一个非界限.

  ```js
  /ter\b/; // 匹配单词 Chapter 中的字符串 ter
  /\Bapt/; // 匹配 Chapter 中的字符串 apt，但不匹配 aptitude 中的字符串 apt：
  ```

- `(?:pattern) `非获取匹配，匹配 'pattern' 但不获取匹配结果，不进行存储供以后使用。这在使用或字符“(|)”来组合一个模式的各个部分是很有用。例如“`industr(?:y|ies)`”就是一个比“`industry|industries`”更简略的表达式。

- `(?=pattern)`非获取匹配，正向肯定预查，在任何匹配 'pattern'的字符串开始处匹配查找字符串，该匹配不需要获取供以后使用。例如，“`Windows(?=95|98|NT|2000)`”能匹配“Windows2000”中的“Windows”，但不能匹配“Windows3.1”中的“Windows”。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。
- ` (?!pattern)`非获取匹配，正向否定预查，在任何不匹配 pattern 的字符串开始处匹配查找字符串，该匹配不需要获取供以后使用。例如“`Windows(?!95|98|NT|2000)`”能匹配“Windows3.1”中的“Windows”，但不能匹配“Windows2000”中的“Windows”。
- `(?<=pattern)`非获取匹配，反向肯定预查，与正向肯定预查类似，只是方向相反。例如，“`(?<=95|98|NT|2000)Windows`”能匹配“2000Windows”中的“Windows”，但不能匹配“3.1Windows”中的“Windows”。
- `(?<!pattern)`非获取匹配，反向否定预查，与正向否定预查类似，只是方向相反。例如“`(?<!95|98|NT|2000)Windows`”能匹配“3.1Windows”中的“Windows”，但不能匹配“2000Windows”中的“Windows”。

大部分元字符与自己最近的元素或组相结合，除了`|`字符与它所在的组内的前后所有元素相结合。

默认情况下对于出现次数的匹配都采用**贪婪匹配**的方式，即尽可能地多匹配。例如用`/a+/`匹配字符串"aaaaaa",将匹配"aaaaaa"而不是"a"。
在次数匹配字符后面加`?`可将贪婪匹配改为**谨慎匹配**，例如`/a+?/`匹配字符串"aaaaaa",将匹配"a"。

若要匹配一行文本开始处的文本，请在正则表达式的开始使用`^` 字符。不要将 `^` 的这种用法与中括号表达式内的用法混淆

## 反向应用

一个正则表达式中括号内的模式会存储到一个临时缓冲区中，缓冲区编号从 1 开始，最多可存储 99 个捕获的子表达式。每个缓冲区都可以使用 `\n` 访问

可以使用非捕获元字符 `?:`、`?=` 或 `?!` 来重写捕获，忽略对相关匹配的保存。

如`/\b([a-z]+) \1\b/ig`匹配重复的单词，`\1` 指定第一个子匹配项，单词边界元字符确保只检测整个单词。否则，诸如 "`is issued`" 或 "`this is`" 之类的词组将不能正确地被此表达式识别。

```javascript
/*
    写一个正则支持以下三种格式
  2016-06-12
  2016/06/12
  2016.06-12
*/
let regex = /(\d{4})([-/.])\d{2}\2\d{2}/;

var string1 = "2017-06-12";
var string2 = "2017/06/12";
var string3 = "2017.06.12";
var string4 = "2016-06/12";

console.log(regex.test(string1)); // true
console.log(regex.test(string2)); // true
console.log(regex.test(string3)); // true
console.log(regex.test(string4)); // false
```

- 引用不存在的分组即匹配的就是` \1`,`\2`本身
- 分组后面如果有量词，分组最终(注意是分组，不是说整体)捕获的数据是最后一次的匹配

  ```javascript
  '12345'.match(/\d+/) // ["12345", index: 0, input: "12345", groups: undefined]
  '12345'.match(/(\d)+/) // ["12345", "5", index: 0, input: "12345", groups: undefined]

  /(\d)+ \1/.test('12345 1') // false
  /(\d)+ \1/.test('12345 5') // true
  ```

## 非捕获性括号

上面使用的括号都会匹配他们匹配到的数据，以便后续引用，所以也可以称为捕获型分组和捕获型分支。

如果想要括号最原始的功能，但不会引用它，也就是既不会出现在 API 引用里，也不会出现在正则引用里，可以使用**非捕获性括号`（?:p）`**

```javascript
// 因为是非捕获型分组，所以使用match方法时，"ab"不会出现在数组的1位置了
let reg = /(?:ab)+/;
console.log("ababa abbb ababab".match(reg)); // ["abab", index: 0, input: "ababa abbb ababab", groups: undefined]
let reg = /(ab)+/;
console.log("ababa abbb ababab".match(reg)); // ["abab", "ab", index: 0, input: "ababa abbb ababab", groups: undefined]
```

## 命名分组

在 js 关于正则的方法中，如果存在命名分组，会存在 groups 属性，里面存放着每个命名分组的名称以及它们匹配到的值；结合解构赋值，会有很神奇的功效

`exec()` 和 `match()` 方法返回的匹配结果数组上多了一个 groups 属性，里面存放着每个命名分组的名称以及它们匹配到的值

```js
const { day, month, year } = "04-25-2017".match(
  /(?<month>\d{2})-(?<day>\d{2})-(?<year>\d{4})/
).groups;
// {day:25, month:04, year:2017}
```

在 `replace(/.../, replacement)` 中的使用，当 replacement 为函数时，在实参列表的最末尾，多传了一个 groups 对象

```js
"04-25-2017".replace(
  /(?<month>\d{2})-(?<day>\d{2})-(?<year>\d{4})/,
  (...args) => {
    const groups = args.slice(-1)[0];
    const { day, month, year } = groups;
    return `${day}-${month}-${year}`;
  }
);
```

## 正则匹配举例

### 验证电子邮件

`/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/`

1. 以`\w`起头，随后可以包含任意数量的“.”或“-”只要他们之间有一个或多个\w 分隔即可（对应于域名检测）；
2. 用户名之后带一个@字符；
3. 以\w 起头，随后可以包含任意数量的“.”或“-”只要他们之间有一个或多个\w 分隔即可（对应于邮箱地址检测）；
4. 以“.”加上 2 到 3 个“\w”结尾。(对应于邮箱地址后缀的检测例如“.com”,“.cn”等)。

### 验证文件路径

`/^(http|https|file):\/\/\S+\/\S+/i`

1.  文件路径使用 http 或 https 或 file 开头，后跟://
2.  然后是任意个非空字符表示的文件路径
3.  最后是/加上任意非空字符表示的文件名
4.  修饰符 i 忽略大小写

### 提取数据

```javascript
// 2021-08-14
let reg = /(\d{4})-(\d{2})-(\d{2})/;

console.log("2021-08-14".match(reg));
//  ["2021-08-14", "2021", "08", "14", index: 0, input: "2021-08-14", groups: undefined]

// 第二种解法,通过全局的$1...$9读取 引用的括号数据
let reg = /(\d{4})-(\d{2})-(\d{2})/;
let string = "2021-08-14";

reg.test(string);

console.log(RegExp.$1); // 2021
console.log(RegExp.$2); // 08
console.log(RegExp.$3); // 14
```

### 数据替换

```javascript
/*
将以下格式替换为mm/dd/yyy
2021-08-14
*/

let reg = /(\d{4})-(\d{2})-(\d{2})/;
let string = "2021-08-14";

// 第一种写法
let result1 = string.replace(reg, "$2/$3/$1");
console.log(result1); // 08/14/2021
// 第二种写法
let result2 = string.replace(reg, () => {
  return RegExp.$2 + "/" + RegExp.$3 + "/" + RegExp.$1;
});
console.log(result2); // 08/14/2021
// 第三种写法
let result3 = string.replace(reg, ($0, $1, $2, $3) => {
  return $2 + "/" + $3 + "/" + $1;
});
console.log(result3); // 08/14/2021
```

### 数字的千分位分割法

```javascript
let price = "123456789";
let priceReg = /(?!^)(?=(\d{3})+$)/g;

console.log(price.replace(priceReg, ",")); // 123,456,789
```

### 手机号 3-4-4 分割扩展

```javascript
const formatMobile = (mobile) => {
  return String(mobile)
    .slice(0, 11)
    .replace(/(?<=\d{3})\d+/, ($0) => "-" + $0)
    .replace(/(?<=[\d-]{8})\d{1,4}/, ($0) => "-" + $0);
};

console.log(formatMobile(123)); // 123
console.log(formatMobile(12345)); // 123-45
console.log(formatMobile(1234567)); // 123-4567
console.log(formatMobile(123456789)); // 123-4567-89
console.log(formatMobile(12345678911)); // 123-4567-8911
```

### 验证密码的合法性

密码长度是 6-12 位，由数字、小写字符和大写字母组成，但必须至少包括 2 种字符

有下面四种排列组合方式
① 数字和小写字母组合

② 数字和大写字母组合

③ 小写字母与大写字母组合

④ 数字、小写字母、大写字母一起组合

```javascript
// 表示条件①和②
// let reg = /((?=.*\d)((?=.*[a-z])|(?=.*[A-Z])))/
// 表示条件条件③
// let reg = /(?=.*[a-z])(?=.*[A-Z])/
// 表示条件①②③
// let reg = /((?=.*\d)((?=.*[a-z])|(?=.*[A-Z])))|(?=.*[a-z])(?=.*[A-Z])/
// 表示题目所有条件
let reg =
  /((?=.*\d)((?=.*[a-z])|(?=.*[A-Z])))|(?=.*[a-z])(?=.*[A-Z])^[a-zA-Z\d]{6,12}$/;

console.log(reg.test("123456")); // false
console.log(reg.test("1a1a1a")); // true
```

## 正则表达式的使用

### RegExp 类：

`RegExp.source` 返回正则表达式的内容

`RegExp.test(s)` 测试字符串 s 是否与正则表达式项匹配

`RegExp.exec(s)` 匹配字符串 s，返回匹配到的子串和各个组匹配到的子串的数组，若没有匹配到任何子串则返回 null

`RegExp.lastIndex` 返回最近一次匹配到的位置。默认值为-1，用于标记由方法 **RegExp.exec()** 和 **RegExp.test()** 找到的结果的下次检索的起始点。只有正则表达式使用了表示全局检索的 "`g`" 标志时，该属性才会起作用

```js
let reg = /\w/g
reg.test('js') //true
reg.lastIndex //1
reg.test('js') //true
reg.lastIndex //2
reg.test('js') //false
reg.lastIndex //0 匹配失败后清零

const str = "hello123back, hello456back";
/(hello).*/.test(str) // true
/(hello).*/.exec(str) // ['hello123back, hello456back','hello']
```

### String 类

#### `String.search(re)`

返回 re 匹配到的第一个位置，若不匹配则返回-1。

```js
str.search(/(hello).*/); // 0
```

#### `String.match(re)`

返回 re 匹配到的所有子串的数组，若不匹配返回 null。

`match` 方法的返回值与修饰符 `g` 有关（没有匹配上时返回 null）

- 没有 `g` ：返回标准匹配格式，即：数组的第一个元素是整体匹配的内容，接下来是分组捕获的内容，然后是整体匹配的第一个下标，最后是目标字符串

- 有 `g` ：返回的是一个包含所有匹配内容的数组

```js
str.match(/(hello).*/); // ['hello123back, hello456back','hello']
str.match(/(?:hello).*/); // ['hello123back, hello456back']

"2020-06 2020-07".match(/\d{4}-\d{2}/g);
//  ['2020-06', '2020-07']

"2020-06 2020-07".match(/\d{4}-\d{2}/);
// ['2020-06', index: 0, input: '2020-06 2020-07', groups: undefined]
```

#### `String.split(re)`

用正则表达式匹配到的所有子串来将字符串分割为字符串数组。

#### `String.replace(re, s)`

将 re 匹配到的字符替换为 s。(replace 方法的第二个参数也可以是函数)

```js
"02-20-2020 05-21-2020".replace(/(\d{2})-(\d{2})-(\d{4})/g, "$3年$2月$1日");
// '2020年20月02日 2020年21月05日'

"02-20-2020 05-21-2020".replace(/(\d{2})-(\d{2})-(\d{4})/, "$3年$2月$1日");
// '2020年20月02日 05-21-2020'
```
