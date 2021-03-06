# redux

## 概念

Redux 是一个使用叫做“action”的事件来管理和更新应用状态的模式和工具库。它以集中式 `Store（centralized store）`的方式对整个应用中使用的状态进行集中管理，其规则确保状态只能以可预测的方式更新。

Redux 提供的模式和工具使您更容易理解应用程序中的状态何时、何地、为什么以及如何更新，以及当这些更改发生时您的应用程序逻辑将如何表现

### State 管理

假设一个包含以下内容的应用程序

- state：驱动应用的真实数据源头
- view：基于当前状态的 UI 声明性描述
- actions：根据用户输入在应用程序中发生的事件，并触发状态更新

存在以下单向数据流（one-way data flow）

- 用 state 来描述应用程序在特定时间点的状况
- 基于 state 来渲染出 View
- 当发生某些事情时（例如用户单击按钮），state 会根据发生的事情进行更新，生成新的 state
- 基于新的 state 重新渲染 View

![单向数据流](http://cn.redux.js.org/assets/images/one-way-data-flow-04fe46332c1ccb3497ecb04b94e55b97.png)

然而，当我们有多个组件需要共享和使用相同 `state` 时会变得很复杂，解决这个问题的一种方法是从组件中提取共享 `state`，并将其放入组件树之外的一个集中位置。这样，我们的组件树就变成了一个大`view`，任何组件都可以访问 `state` 或触发 `action`，无论它们在树中的哪个位置！

**这就是 Redux 背后的基本思想：应用中使用集中式的全局状态来管理，并明确更新状态的模式，以便让代码具有可预测性。**

### 术语

#### Action

`action` 是一个具有 `type` 字段的普通 `JavaScript` 对象。你可以将 `action` 视为描述应用程序中发生了什么的事件

`action` 的 `type` 字段是一个字符串，给这个 `action` 一个描述性的名字，通常把那个类型的字符串写成“域/事件名称”，其中第一部分是这个 `action` 所属的特征或类别，第二部分是发生的具体事情

```js
const addTodoAction = {
  type: "todos/todoAdded",
  payload: "Buy milk",
};
```

#### action creator

`action creator` 是一个创建并返回一个 `action` 对象的函数。它的作用是让你不必每次都手动编写 `action` 对象

```js
const addTodo = (text) => {
  return {
    type: "todos/todoAdded",
    payload: text,
  };
};
```

#### Reducer

`reducer` 是一个函数，接收当前的 `state` 和一个 `action` 对象，必要时决定如何更新状态，并返回新状态。函数签名是：`(state, action) => newState`。

你可以将 `reducer` 视为一个事件监听器，它根据接收到的 action（事件）类型处理事件。

每当 dispatch 一个 `action` 后，`store` 就会调用 `root reducer`

Reducer 必需符合以下规则：

- 仅使用 state 和 action 参数计算新的状态值
- 禁止直接修改 state。必须通过复制现有的 state 并对复制的值进行更改的方式来做 不可变更新（immutable updates）。
- 禁止任何异步逻辑、依赖随机值或导致其他“副作用”的代码
- 稍后我们将更多地讨论 reducer 的规则，包括为什么它们很重要以及如何正确地遵循它们。

reducer 函数内部的逻辑通常遵循以下步骤：

- 检查 reducer 是否关心这个 action。如果是，则复制 state，使用新值更新 state 副本，然后返回新 state
- 否则，返回原来的 state 不变

```js
const initialState = { value: 0 };

function counterReducer(state = initialState, action) {
  // 检查 reducer 是否关心这个 action
  if (action.type === "counter/increment") {
    // 如果是，复制 `state`
    return {
      ...state,
      // 使用新值更新 state 副本
      value: state.value + 1,
    };
  }
  // 返回原来的 state 不变
  return state;
}
```

### redux 三大原则

- 单一数据源

整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。

- state 是只读的

唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。

- 使用纯函数来执行修改

  - 为了描述 action 如何改变 state tree ，你需要编写 reducers。
  - Reducer 只是一些纯函数，它接收先前的 state 和 action，并返回新的 state。刚开始你可以只有一个 reducer，随着应用变大，你可以把它拆成多个小的 reducers，分别独立地操作 state tree 的不同部分，因为 reducer 只是函数，你可以控制它们被调用的顺序，传入附加数据，甚至编写可复用的 reducer 来处理一些通用任务，如分页器

### Redux 数据流

在上面我们谈到了“单向数据流”，对于 `Redux`，我们可以将这些步骤分解为更详细的内容

- 初始启动：
  - 使用最顶层的 root reducer 函数创建 Redux store
  - store 调用一次 root reducer，并将返回值保存为它的初始 state
  - 当 UI 首次渲染时，UI 组件访问 Redux store 的当前 state，并使用该数据来决定要呈现的内容。同时监听 store 的更新，以便他们可以知道 state 是否已更改。
- 更新环节：
  - 应用程序中发生了某些事情，例如用户单击按钮
  - dispatch 一个 action 到 Redux store，例如 dispatch({type: 'counter/increment'})
  - store 用之前的 state 和当前的 action 再次运行 reducer 函数，并将返回值保存为新的 state
  - store 通知所有订阅过的 UI，通知它们 store 发生更新
  - 每个订阅过 store 数据的 UI 组件都会检查它们需要的 state 部分是否被更新。
  - 发现数据被更新的每个组件都强制使用新数据重新渲染，紧接着更新网页

### 什么时候使用 redux

Redux 可帮助处理共享状态的管理，但有更多的概念需要学习，还有更多的代码需要编写，并要求遵循某些限制

Redux 在以下情况下更有用：

- 在应用的大量地方，都存在大量的状态
- 应用状态会随着时间的推移而频繁更新
- 更新该状态的逻辑可能很复杂
- 中型和大型代码量的应用，很多人协同开发

### 注意点

- 诸如唯一的 ID 和一些随机值应该放在 action 里，而不是在 reducer 中去计算。 **Reducer 中永远不应该计算随机值**，因为这会使结果不可预测。

- Redux action 和 state 应该只能包含普通的 JS 值，如对象、数组和基本类型。**不要将类实例、函数或其他不可序列化的值放入 Redux！**。

- action 对象只包含描述发生的事情所需的最少信息，并在 reducer 中进行状态更新计算，这也意味着 reducer 中可以包含计算新状态所需的尽可能多的逻辑。

- 组件应该根据其渲染所需，从 Redux Store 中读取最小量的数据

## 示例

### redux

应用的整体全局状态以对象树的方式存放于单个 **store**。

唯一改变状态树（state tree）的方法是创建 **action**

**reducer** 函数根据旧 state 和 action 来计算新 state

```js
import { createStore } from "redux";

/**
 * 这是一个 reducer，形式为 (state, action) => state 的纯函数。
 * 描述了 action 如何把 state 转变成下一个 state。
 *
 * state 的形式取决于你，可以是基本类型、数组、对象、
 * 甚至是 Immutable.js 生成的数据结构。惟一的要点是
 * 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
 *
 * 下面例子使用 `switch` 语句和字符串来做判断，但你可以写帮助类(helper)
 * 根据不同的约定（如方法映射）来判断，只要适用你的项目即可。
 */
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
let store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));

// 改变内部 state 惟一方法是 dispatch 一个 action。
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
store.dispatch({ type: "counter/incremented" });
// {value: 1}
store.dispatch({ type: "counter/incremented" });
// {value: 2}
store.dispatch({ type: "counter/decremented" });
// {value: 1}
```

### Redux Toolkit

`Redux Toolkit` 是官方推荐的编写 `Redux` 逻辑的方法。它包含了 `Redux` 核心，并包含对于构建 `Redux` 应用必不可少的软件包和功能。`Redux Toolkit` 建立在最佳实践中，简化了大多数 Redux 任务，防止了常见错误，并使编写 `Redux` 应用程序更加容易。

```jsx
import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      // Redux工具包允许我们在Reducer中编写"mutating" 逻辑。它
      //实际上不会改变状态，因为它使用Immer库，
      //它检测到“草稿状态”的更改并生成全新的
      //基于这些更改的不变状态
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const { incremented, decremented } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));

// 仍将操作对象传递给“dispatch”，但它们是我们创建的
store.dispatch(incremented());
// {value: 1}
store.dispatch(incremented());
// {value: 2}
store.dispatch(decremented());
// {value: 1}
```

## 使用

### 用 Thunk 编写异步逻辑

`thunk` 是一种特定类型的 `Redux` 函数，可以包含异步逻辑。

**使用 `thunk` 需要在创建时将 `redux-thunk` middleware（一种 Redux 插件）添加到 Redux store 中。`Redux Toolkit` 的 `configureStore` 函数已经自动为我们配置好了**

`Thunk` 是使用两个函数编写的：

- 一个内部 `thunk` 函数，它以 `dispatch` 和 `getState` 作为参数
- 外部创建者函数，它创建并返回 thunk 函数

```js
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};
```

可以像使用普通 Redux action creator 一样使用它们

```js
store.dispatch(incrementAsync(5));
```

当您需要进行 AJAX 调用以从服务器获取数据时，可以将该调用放入 `thunk` 中

```js
// 外部的 thunk creator 函数
const fetchUserById = (userId) => {
  // 内部的 thunk 函数
  return async (dispatch, getState) => {
    try {
      // thunk 内发起异步数据请求
      const user = await userAPI.fetchById(userId);
      // 但数据响应完成后 dispatch 一个 action
      dispatch(userLoaded(user));
    } catch (err) {
      // 如果过程出错，在这里处理
    }
  };
};
```

### 使用 useSelector 提取数据

`useSelector` 这个 hooks 让我们的组件从 Redux 的 store 状态树中提取它需要的任何数据。

我们的组件不能直接与 Redux store 对话，因为组件文件中不能引入 store。但是，`useSelector` 负责为我们在幕后与 Redux store 对话。 如果我们传入一个 selector 函数，它会为我们调用 `someSelector(store.getState())`，并返回结果。

```js
// counterSlice.js
export const selectCount = (state) => state.counter.value;

const count = useSelector(selectCount);
```

每当一个 action 被 dispatch 并且 Redux store 被更新时，`useSelector` 将重新运行我们的选择器函数。**如果选择器返回的值与上次不同，`useSelector` 将确保我们的组件使用新值重新渲染。**

任何需要从 Redux store 读取数据的组件都可以使用 `useSelector` 钩子，并提取它需要的特定数据片段。此外，**许多组件可以同时访问 Redux store 中的相同数据。**

### 使用 useDispatch 来 dispatch action

```js
const dispatch = useDispatch()

<button
  className={styles.button}
  aria-label="Increment value"
  onClick={() => dispatch(increment())}
>
  +
</button>

```

### 在 reducer 定义一个 prepare 函数

我们 dispatch action 时，如果准备参数的逻辑很复杂，createSlice 允许我们在编写 reducer 时定义一个 prepare 函数。

prepare 函数可以接受多个参数，生成诸如唯一 ID 之类的随机值，并运行需要的任何其他同步逻辑来决定哪些值进入 action 对象。然后它应该返回一个包含 payload 字段的对象。（返回对象还可能包含一个 meta 字段，可用于向 action 添加额外的描述性值，以及一个 error 字段，该字段应该是一个布尔值，指示此 action 是否表示某种错误。）

```js
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
    // other reducers here
  },
});
```

现在我们的组件不必担心 payload 对象是什么样子 - action creator 将负责以正确的方式将它组合在一起。

```js
const onSavePostClicked = () => {
  dispatch(postAdded(title, content));
};
```
