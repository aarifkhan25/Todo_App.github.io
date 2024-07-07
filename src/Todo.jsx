import React,{useEffect, useState} from 'react'

import TodoForm from './TodoForm';
import TodoTime from './TodoTime';
import TodoData from './TodoData';

const Todo = () => {
  

const clear_btn={
  marginTop:'20px',
  fontSize:'17px',
  color:'white',
border:'none',
fontFamily: `'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif `,
backgroundColor:"#3c6eff",
padding:"5px",
paddingLeft:"15px",
paddingRight:'15px',
borderRadius:'5px',
cursor:'pointer'
}
const[Data,setData]=useState([])
const[clear,setClear]=useState(false)
const handleSubmitBotton=(input)=>{
 
  if(!input) return;//dont store data
  if(Data.includes(input)){//not store a same data
   setInput('');return;
  };
  setData([...Data,input])//store input in data
  
  setClear(true)
 }

const handleDeletebutton=(value,event)=>{
const UpdateData=Data.filter((data)=>data!==value)
setData(UpdateData)

}
const handleClearButton=(evt)=>{

setData([])
setClear(false)
setInput('')
}

  return (
    <div align='center' style={{marginTop:'100px'}} ><h2>Todo App</h2>
    
    <TodoTime/>
    <TodoForm handleAddButton={handleSubmitBotton}/>
    
    <ul>
    {
      Data.map((element,index)=>{
        return(<TodoData key={index} curElement={element} handleDeletebutton={handleDeletebutton}/>)
      })
     }</ul>
     {
      clear && <button style={clear_btn} onClick={handleClearButton}>Clear All</button>
    } 
    </div>
  )
}

export default Todo;