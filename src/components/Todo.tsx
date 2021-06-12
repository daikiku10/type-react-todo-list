import React, {useState} from 'react'

const Todo = () => {
  
  interface TodoType {
    id: number;
    todo: string;
    done: boolean;
  }
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState<TodoType[]>([])
  console.log(todos)
  
  // 一意性のあるIDを生成
  const createRandomId = () :number => {
    return new Date().getTime()
  }
  
  // todoを追加する処理
  const addTodo = () :void => {
    let taskData :TodoType = {
      id: createRandomId(),
      todo: task,
      done: false,
    }
    setTodos([...todos, taskData])
    setTask('')
  }

  // チェックボタンを押した処理
  const changeDone = (index: number):void => {
    let copyTodos: TodoType[] = [...todos]
    copyTodos[index].done = !copyTodos[index].done
    setTodos(copyTodos)
  }


  // 削除ボタンを押した処理
  const deleteTodo = (index: number):void => {
    let copyTodos: TodoType[] = [...todos]
    copyTodos.splice(index, 1)
    setTodos(copyTodos)
  }

  return (
    <>
      <div>
        <p>AddTodo・追加</p>
        <div>
          <input type='text' value={task} onChange={(e) => setTask(e.target.value)} />
          <button onClick={addTodo}>追加</button>
        </div>
      </div>
      <div>
        <p>TodoList・リスト</p>
        <div>
          {todos.map((todo, index) => {
              return (
                <li key={todo.id}>
                  <input type="checkbox" onClick={() => {changeDone(index)}}/>
                  {todo.done ? 
                  <del>{index}:{todo.todo}</del>
                  :
                  <span>{index}:{todo.todo}</span>
                }
                  <button onClick={() => {deleteTodo(index)}}>削除</button>
                </li>
              )
          })}
        </div>
      </div>
    </>
  )
}

export default Todo