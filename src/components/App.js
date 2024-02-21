
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [inputvalue,setInput] = useState("");

    const onChangeText = (event)=>{
        setInput(event.target.value);
    }
    return (
        <>
        <label>Enter your name:</label><br></br><br></br>
        <input onChange={onChangeText}/>
        {inputvalue && <p>{`Hello ${inputvalue}!`}</p>}
        </>    
    );
}

export default App
