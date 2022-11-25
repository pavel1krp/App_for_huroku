import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

type  PropsType = {
  body: string
  id: number
  title:string
  userId: string
}

function App() {
  const [state, setState] = useState<PropsType[]>([])
  useEffect(()=>{  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setState(json))},[])
  const onClickHandler =()=>{
      setState([])
  }
  const  showPostHandler = ()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(json => setState(json))
  }
  return (
    <div className="App">
      <button onClick={onClickHandler}>Delete</button>
      <button onClick={showPostHandler}>Add</button>
      <ul>
      {state.map(el =>{
        return(
          <li key={el.id}>
            <span>{el.id}+ id </span>
            <span>{el.title}+ TITLE</span>
            <span>{el.userId}+ USERID</span>
          </li>
        )
      })}
      </ul>
    </div>
  );
}

export default App;
