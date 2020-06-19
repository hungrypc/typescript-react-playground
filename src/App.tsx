import React, { useState } from 'react';
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'

import { Todo } from './models/todo.model'

const App: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([])

  const todoHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos, 
      {
        id: Math.random().toString(),
        text
      }
    ])
  }


  return (
    <div className="App">
      <NewTodo todoHandler={todoHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
