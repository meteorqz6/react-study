import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  let name = "리액트";

  return (
    <div className="container">
      <h1 className="test">Hello, 
        {
          name === "리액트" ? <h2>YES</h2> : null
        }!</h1>
      <p>반갑습니다.</p>
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
