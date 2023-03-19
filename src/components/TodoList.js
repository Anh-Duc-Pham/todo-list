import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] =useState(() => {
      const storageTodos = JSON.parse(localStorage.getItem('todos'))
      return storageTodos ?? []
    } )
    // them cong viec
    const addTodo = todo => {
        if (!todo.value || /^\s*$/.test(todo.value)) {
            return;
        }
        console.log(todo);
        const newTodos = [todo,...todos]
        setTodos(newTodos)
    }
    // chinh sua cong viec, lau du lieu todo component va todoForm component
    const updateTodo = (todoId, newValue) => {
        if (!newValue.value || /^\s*$/.test(newValue.value)) {
          return;
        }
    
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
      };

    //xoa component 
    const deleteTodo = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    //xu ly toggle viec da lam xong
    const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
          console.log(todo.isComplete);
        }
        return todo;
      });
      
      setTodos(updatedTodos);
    };

    // set local storgage
    const jsonTodos = JSON.stringify(todos)
    localStorage.setItem('todos', jsonTodos)


  return (
    <div>
        <h1>Plan for today</h1>
        <TodoForm onSubmit={addTodo}></TodoForm>
        <Todo 
            todos={todos}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            completeTodo={completeTodo}
        ></Todo>

    </div>
  )
}

export default TodoList