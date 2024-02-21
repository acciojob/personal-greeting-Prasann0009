
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [inputValue,setInputValue] = useState("");

  const onChangeName = (event)=>{
    setInputValue(event.target.value);
  }
  return (
    <div>
       <label htmlFor="name">Enter your name:</label><br/><br/>
       <input id="name" onChange={onChangeName}/>
       {inputValue && <p>{`Hello ${inputValue}!`}</p>}
    </div>
  )
}

export default App
