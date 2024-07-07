import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import {MdDeleteForever } from "react-icons/md";
const TodoData = ({key,curElement,handleDeletebutton}) => {
  const handleCheckbutton=()=>{

  }
  const item_list={
    marginTop:"10px",
    backgroundColor:"#4f46e5",
   display:"inline-flex",
   padding:'7px 15px',
   borderRadius:"30px",
   position:'relative'
     
   }
   const item_name={
     display:'inline',
     marginRight:'100px',
     fontFamily: `'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif `,
     textTransform:'uppercase',
     color:'white'
     
   }
   const Check={
   fontSize:'20px',
   color:"#32cd32",
   marginTop:'2px',
   border:'none',
   background:'none',
   display:'inline-flex',
   margin:'0px 10px',
   cursor:'pointer',
   position: 'sticky'
   }
   const Delete={
    fontSize:'17px',
    color:"white",
    border:'none',
    padding:'5px',
    backgroundColor:'red',
    padding:'0px 10px',
    borderRadius:'5px',
    cursor:'pointer',
    position: 'sticky'
  }
  return (
    <div><li><div style={item_list} key={key} >
    <span style={item_name}>{curElement}</span>
    <button style={Check} onClick={handleCheckbutton}><FaCheckCircle/></button>
    <button style={Delete} onClick={()=>handleDeletebutton(curElement)}><MdDeleteForever/></button>
    </div></li></div>
  )
}

export default TodoData;