import React from 'react'
import './App.css';
import Game from './components/Game';
const App = () => {
  const style={
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  }
  
  return (
    <div style={style}>
      <Game/>
    </div>
  )
}

export default App
