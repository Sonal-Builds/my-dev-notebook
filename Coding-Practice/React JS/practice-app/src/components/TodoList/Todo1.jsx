
import { useState } from 'react'
import './style2.css'

export default function Todo1() {
    const [todo, setTodo] = useState([])
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const HandleClick = () => {
        if (!text.trim()) return;

        setTodo([...todo, text]);
        setText('');
    }

    const HandleDelete = (val) => {
        let delTodo = todo.filter((item, index) => index != val)
        console.log(delTodo)
        setTodo(delTodo)
    }

    const handleEdit = (val, item) => {
        setText(item)
        let delTodo = todo.filter((item, index) => index != val)
        setTodo(delTodo)
    }
    console.log(todo)
    return (
        <div className="todo1-con">
            <div className="todo1-app">
                <div className='todo1-input'>
                    <input type="text" value={text} onChange={handleChange} />
                    <button onClick={HandleClick}>Add Todo</button>
                </div>


                {todo.map((item, index) => (
                    <div key={index} className="todo1-list">
                        <p>{item}</p>
                        <button onClick={() => handleEdit(index, item)}>Edit</button>
                        <button onClick={() => HandleDelete(index)}>Delete</button>
                    </div>
                ))}

            </div>
        </div>
    )
}