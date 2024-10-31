import React, { useState } from "react";
import { Button } from 'react-bootstrap';

type Todo = {
    id : number;
    text : string;
    isCompleted : boolean;
};

const TodoList : React.FC = () => {
    const title : string = "오늘 할 일";

    const [todolist, setTodo] = useState<Todo[]>([
        {id : 1, text : "공부하기", isCompleted : false},
        {id : 2, text : "러닝하기", isCompleted : false},
        {id : 3, text : "강의듣기", isCompleted : false},
    ]);

    const [newTodo, setNewTodo] = useState<string>('');

    const handleCompletedChange = (todoId : number) => {
        setTodo((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === todoId ? {...todo, isCompleted : !todo.isCompleted} : todo
            )
        )
    };

    const addTodo = () => {
        if(newTodo.trim() !== ''){
            setTodo([...todolist, { id : Date.now(), text : newTodo, isCompleted : false }]);
            setNewTodo('');
        }
    }

    return(
        <div className="container">
            <h1>{title}</h1>
            <div>
                <input type = "text"
                    placeholder="할 일 입력"
                    style={{marginRight : "10px", writingMode : "horizontal-tb"}}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <Button variant="warning" onClick={addTodo}>추가</Button>
            </div>
            <p></p>
            <div className="board">
            <ul>
                {
                    todolist.map((todo, index) => (
                        <li key = {todo.id}>
                            <input type = "checkbox"
                            onChange={()=>{
                                handleCompletedChange(todo.id);
                            }}></input>
                            <span>
                                {
                                    todo.isCompleted ? 
                                    <del>{todo.text}</del> 
                                    : <span>{todo.text}</span>
                                }
                            </span>
                        </li>
                    ))
                }
            </ul>
            </div>
        </div>
    )
}

export default TodoList;