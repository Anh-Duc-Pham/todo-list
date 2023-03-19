import React, {useState,useRef, useEffect} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setInput('')
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            value: input
        })
    
    }
    
    return (
    <form className='todo-form' onSubmit={handleSubmit}>
         {props.edit ? (
        <>
          <input
            placeholder='Cập nhật'
            value={input}
            onChange={handleInput}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Cập nhật
          </button>
        </>
        ) : (
        <>
          <input
            placeholder='Thêm việc'
            value={input}
            onChange={handleInput}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Thêm việc
          </button>
        </>
      )}
    </form>
  )
}

export default TodoForm