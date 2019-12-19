# hook_demo

Hook 这个单词的意思是"钩子"。
React Hooks 的意思是，组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码"钩"进来。 React Hooks 就是那些钩子。 React 约定，钩子一律使用use前缀命名，便于识别。你要使用 xxx 功能，钩子就命名为 usexxx。
1、useState()：状态钩子useState()用于为函数组件引入状态（state）。纯函数不能有状态，所以把状态放在钩子里面。 useState()这个函数接受状态的初始值，作为参数，该函数返回一个数组，数组的第一个成员是一个变量，指向状态的当前值。第二个成员是一个函数，用来更新状态，约定是set前缀加上状态的变量名。

2、useContext()：共享状态钩子如果需要在组件之间共享状态，可以使用useContext()。第一步就是使用 React Context API，在组件外部建立一个 Context。const AppContext = React.createContext({});封装代码：<AppContext.Provider value={{username: 'superawesome'}}><div className="App"><Navbar/><Messages/></div></AppContext.Provider>AppContext.Provider提供了一个 Context 对象，这个对象可以被子组件共享。const Navbar = () => {const { username } = useContext(AppContext);return (<div className="navbar"><p>AwesomeSite</p><p>{username}</p></div>);}

3、useReducer()：action 钩子React 本身不提供状态管理功能，通常需要使用外部库。这方面最常用的库是 Redux。Redux 的核心概念是，组件发出 action 与状态管理器通信。状态管理器收到 action 以后，使用 Reducer 函数算出新的状态，Reducer 函数的形式是(state, action) => newState。useReducer()钩子用来引入 Reducer 功能。const [state, dispatch] = useReducer(reducer, initialState);上面是useReducer()的基本用法，它接受 Reducer 函数和状态的初始值作为参数，返回一个数组。数组的第一个成员是状态的当前值，第二个成员是发送 action 的dispatch函数。

4、useEffect()：副作用钩子useEffect()用来引入具有副作用的操作，最常见的就是向服务器请求数据。以前，放在componentDidMount里面的代码，现在可以放在useEffect()。useEffect()的用法如下。useEffect(() => {// Async Action}, [dependencies])上面用法中，useEffect()接受两个参数。第一个参数是一个函数，异步操作的代码放在里面。第二个参数是一个数组，用于给出 Effect 的依赖项，只要这个数组发生变化，useEffect()就会执行。第二个参数可以省略，这时每次组件渲染时，就会执行useEffect()。


useMemomemo类似于PureCompoent 作用是优化组件性能，防止组件触发重渲染memo针对 一个组件的渲染是否重复执行<Foo />usememo针对 一段函数逻辑是否重复执行()=>{}useEffect是在渲染之后完成的useMemo是在渲染期间完成的useMemo(()=>{},[])参数如果是空数组的话就只会执行一次useCallbackuseMemo( ()=>{fn} ) 等价于 useCallback(fn)
