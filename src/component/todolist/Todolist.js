import React, { useEffect, useRef, useState } from "react";


function Todolist() {
    const [todo, setTodo] = useState('')
    //const [todos, setTodos] = useState([])
    //lấy giá trị từ local
    const [todos, setTodos] = useState(() => {
        //Lấy từ local
        const dataLocal = localStorage.getItem('todos')
        if (dataLocal) {
            //trả về đối tượng JSON được phân tích lại thành JS
            return JSON.parse(dataLocal)
        } else {
            return []
        }
    })

    const [edit, setEdit] = useState(true)
    const [editValue, setEditValue] = useState('')
    const [idEdit, setIdEdit] = useState('')

    const inputRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (todo !== "") {
            setTodos([...todos, todo])
        } else {
            alert('Không được để rỗng!')
        }
        setTodo('')
        inputRef.current.focus()
    }

    //useEffect lưu trữ vô local
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const handleDel = (todo) => {
        const delItem = todos.filter((todoValue) => {
            //trả về các giá trị khác index truyền vào
            return todoValue !== todo
        })
        setTodos(delItem)
    }
    const handleEdit = (index) => {
        setEdit(false)
        inputRef.current.focus()
        setIdEdit(index)
    }
    const handleUpdate = (id, updateTodo) => {
        const updateItem = todos.map((todo, index) => {
            return index === id ? updateTodo : todo;
        })
        setTodos(updateItem)
    }
    const handleEditSubmit = (e) => {
        e.preventDefault()
        handleUpdate(parseInt(idEdit), editValue)
        setEdit(true)
    }
    return (
        <>
            {edit ? (
                <form onSubmit={handleSubmit}>
                    ToDo list
                    <br />
                    <input
                        ref={inputRef}
                        type='text'
                        name="todo"
                        placeholder="Enter list...."
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <button type="submit">Add</button>
                </form>
            ) : (
                <form onSubmit={handleEditSubmit}>
                    Edit
                    <br />
                    <input
                        ref={inputRef}
                        type='text'
                        name="todo"
                        placeholder="Edit...."
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                    />
                    <button type="submit">Edit</button>
                    <button onClick={() => setEdit(true)}>Cancel</button>
                </form>
            )}

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}
                        {edit && (
                            <button onClick={() => handleEdit(index)}
                            >Edit</button>
                        )}
                        <button onClick={() => handleDel(todo)}>Del</button>
                    </li>
                ))}
            </ul>

        </>
    )
}

export default Todolist;