import * as types from '../contants/ActionTypes';

export const addTodo = text => ({
    type: types.ADD_TODO,
    text
});

export const deleteTodo = id => ({
    type: types.DELETE_TODO,
    id
});

export const editTodo = (id, text) => ({
    type: types.EDIT_TODO,
    id,
    text
})

//actions约定要干什么