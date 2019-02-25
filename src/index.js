import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './containers/App'
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();


//配置入口文件
//这里我们从react-redux 中获取了一个Provider组件，我们把它渲染到应用的最外层
//它需要一个属性 store，把这个store放在context里，给APP(connect)用。

const store = createStore(reducer);
//Redux 提供createStore这个函数，来生成Store.整个应用只能有一个store。

render(
    <Provider store={store}> 
        <App />
    </Provider>,
    document.getElementById('root')
)
//Provider组件，可以让容器组件拿到state。Provider在根组件外面包了一层，这样一来，App的所有子组件就默认都可以拿到state了。
