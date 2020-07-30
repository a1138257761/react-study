This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify









## 笔记
1. 创建新react app 失败
create-react-app版本可能过久，卸载之前的包重新install

2. 内联样式
<div style={{ height: 100%, height: '50px' }}></div>

## 常见报错
1. <p> cannot appear as a descendant of <p> 引用另外组件时，p标签内不能再包含p标签

2. Each child in a list should have a unique "key" prop. 循环组件有key值
Exp:
const userArray = ['sara', 'lily', 'bob', 'frank'];
const list = userArray.map(user => {
  return <span key={user}>welcome {user}</span>
})

## 生命周期
  ComponentWillMount: 在组件渲染前执行
  ComponentDidMount: 在组件渲染之后执行
  ShouldComponentUpdate: 返回true false,是否可改变
  ComponentWillUpdate: 数据在改变之前执行(state, props)
  ComponentDidUpdate: 数据修改完成(state, props)
  ComponentWillReceiveProps: props修改时执行
  ComponentWillUnmount: 组件销毁时执行

## setState更新是同步还是异步 exp: SetStateDemo 
setState函数是“异步”的。在它立即执行后，无法获取最新的state值。这是因为React对state的所有改变进行合并处理之后，才会去计算新的虚拟dom，再根据最新的虚拟dom去重新渲染真实dom。
1.setState会引起试图重绘
2.在可控情况下异步,在非可控情况下同步
