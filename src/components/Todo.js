import React, {useState} from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';


function Todo({todos, deleteTodo, updateTodo, completeTodo}) {
    const [edit, setEdit] = useState({
        id:null,
        value:''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
          id: null,
          value: ''
        });
      };
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate}></TodoForm>
    }
    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)} >
                {todo.value}
            </div>
            <div className='icons'>
                <RiCloseCircleLine onClick={() => deleteTodo(index)}/>
                <TiEdit onClick={() => setEdit({id:todo.id, value: todo.value})}/>
            </div>
        </div>
    ))
   
}

export default Todo