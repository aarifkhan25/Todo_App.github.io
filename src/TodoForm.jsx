import React from 'react'
import { useState } from 'react';
const TodoForm = ({handleAddButton}) => {

  const [input,setInput]=useState('');
  
  
  const handleInputChange=(value)=>{
    setInput(value);
    }
    const handleSubmitBotton=(evt)=>{
      evt.preventDefault();
      handleAddButton(input);
      setInput('')

    }
    
    const int={
      width:"300px",
      padding:"5px",
      border:"2px solid green",
      fontFamily:'sans-serifArial, Helvetica, sans-serif'
    }
  const bt={
    display:'block-inline',
    marginLeft:'-4px',
   padding:'7px',
    paddingLeft:'10px',
    paddingRight:'10px',
    backgroundColor:'green',
    border:'none',
    borderRadius:'2px',
    color:'white',
    fontFamily: `'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif `,
    cursor: 'pointer'
  }
  return (
    <div><form onSubmit={handleSubmitBotton} >

    <input type="text" value={input} onChange={(event)=>handleInputChange(event.target.value)} style={int} placeholder='Enter here...' autoComplete='off'/>

    <button type='submit' style={bt}>Add</button>
    </form></div>
  )
}

export default TodoForm;