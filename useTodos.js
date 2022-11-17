import {useReducer, useEffect} from 'react'
import {todoReducer} from '../08-useReducer/todoReducer'


export const useTodos = () => {

    const initialState = []

    const init = () =>{
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init); //init, es como se iniciara el hook, 
    

        useEffect(()=>{
            localStorage.setItem('todos', JSON.stringify(todos));
        }, [todos])
        
        const handleNewTodo = (todo) => {
            const action ={
                type: '[TODO] Add Todo',
                payload: todo,
            }
            dispatch(action);
        }
        
        const handleDeleteTodo = (id) =>{
          dispatch({
            type:'[TODO] delete Todo',
            payload: id
          });
        }
        
        const onToggleTodo = (id) =>{
          dispatch({
            type:'[TODO] Toggle Todo',
            payload:id
          })
        }

    return{
        todos,
        handleNewTodo,
        handleDeleteTodo,
        onToggleTodo,
        todosCount : todos.length,
        pendingTodosCount : todos.filter(todo => !todo.done).length
    }
}
