import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css'


const init = () => {

    // Si no hay todos devuelve un arreglo vacio y si no el arreglo.
    // El jSon parse convierte el string del localStorage en un Json
    // El localStorage almacena string

    return JSON.parse(localStorage.getItem('todos')) || [];   
}

export const TodoApp = () => {
        
    const [todos, dispatch] = useReducer(todoReducer, [], init);   

     // El localStorage guarda string por eso la conversion JSON.stringfy
    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
        
    }, [todos])// Cada vez que cambia todos guarda en el localStorage


    const handleDelete= ( todoId ) => {
        console.log(todoId);

        
        const action ={
            type: 'delete',
            payload: todoId
        } 
        dispatch (action);        
    }

    const handleToggle = (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = ( newTodo ) => {
        
        dispatch({
            type: 'add',
            payload: newTodo
        });

    } 
    
    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>
            
            

            <div className="row">

                 <div className="col-7">

                    <TodoList 
                        todos={ todos }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />

                </div>

                <div className="col-5">
                    
                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />                

                </div>

            </div> 
        </div>
    )
}
