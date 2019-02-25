import { combineReducers } from 'redux';
import todos from './todos';

const rootReducer = combineReducers({
    todos
});
//combineReducers 辅助函数的作用是把一个由多个不同reducer函数作为value的object，合并成一个最终的reducer函数,然后就可以对这个 reducer 调用 createStore。

export default rootReducer;