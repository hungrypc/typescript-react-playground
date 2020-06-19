import React, { useState } from 'react';
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'

const App: React.FC = () => {

  const todos = [
    {
      id: 't1',
      text: 'first todo'
    }
  ]

  const todoHandler = (text: string) => {
    console.log(text)
  }


  return (
    <div className="App">
      <NewTodo todoHandler={todoHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
