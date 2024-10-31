import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './Todolist';
import Clock from './Clock';

function App() {
  return (
    <div className="container">
      <TodoList></TodoList>
      <Clock></Clock>
    </div>
  );

  // const port = undefined;
  
  // return (
  //   <div>
  //     {
  //       port || "포트를 설정하지 않았습니다."
  //     }
  //   </div>
  // )
}

export default App;
