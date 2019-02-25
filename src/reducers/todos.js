import { ADD_TODO } from  '../contants/ActionTypes';

const iniitialState = [
    {
        text: 'start',
        completed: false,
        id: 0
    }
]

export default function todos(state=iniitialState, action) {
    switch(action.type){
        case ADD_TODO:
            return [
                {
                    text: action.text,
                    completed: false,
                    id: state.reduce( (maxId, todo) => Math.max(todo.id, maxId), -1) + 1
                }, //state.reduce(fun, [defaultValue]) --遍历数组，再每一项元素后面出发一个回调函数，经过计算返回一个累计的Satte,[defaultValue] 可选参数，初始化上一个元素的值（id）
                ...state
                //展开state数组的每一项到当前数组
            ]
        default:
            return state
    }
}