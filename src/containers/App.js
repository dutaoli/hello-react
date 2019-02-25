import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions';

//容器组件： （这里的props,一层一层传递，父级必须有才能向下传递，比如addTodo={actions.addTodo},要有这个东西）
/*
1.负责管理数据和业务逻辑，不负责 UI 的呈现
2.带有内部状态
3.使用 Redux 的 API
*/
//如果一个组件既有 UI 又有业务逻辑，那怎么办？回答是，将它拆分成下面的结构：外面是一个容器组件，里面包了一个UI 组件。前者负责与外部的通信，将数据传给后者，由后者渲染出视图。

const App = ({todos, actions}) => (
    <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
    </div>
);

App.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToTypes = state => ({
    todos: state.todos  //state对象到（UI 组件的）props对象的映射关系
});

const mapDispatchToProps = dispatch => ({
    actions:bindActionCreators(TodoActions, dispatch) //建立 UI 组件的参数到store.dispatch方法的映射
});
//bindActionCreators 函数将 action包装成直接可调用的函数
//connect的功能是将action 作为props绑定到组件上。用于从 UI 组件生成容器组件。

export default connect(mapStateToTypes, mapDispatchToProps)(App); //一个由connect方法自动生成的容器组件
//connect方法接受两个参数：mapStateToProps和mapDispatchToProps。
//它们定义了 UI 组件的业务逻辑。前者负责输入逻辑，即将state映射到 UI 组件的参数（props）.
//后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。