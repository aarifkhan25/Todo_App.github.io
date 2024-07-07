import React from 'react'
import { useState,useEffect } from 'react';
const TodoTime = () => {
  const[datetime,setDateTime]=useState('')
  useEffect(()=>{
    const interval=setInterval(()=>{
      const now=new Date();
      const date=now.toLocaleDateString();
      const time=now.toLocaleTimeString();
     setDateTime(`${date}-${time}`)
    },1000);
    ()=>
    clearInterval(interval)
    ,[]
    })
  return (
    <div><h3>{datetime}</h3></div>
  )
}

export default TodoTime