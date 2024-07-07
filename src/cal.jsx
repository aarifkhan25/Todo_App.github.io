
import React,{useState} from 'react'
import style from './cal.module.css'
const Cal = () => {
  //states
  const [value,setValue]=useState(['=','7','8',"9",'%','4','5','6','/','1','2','3','*','-','+','0','Clear all'])
  const[input,setInput]=useState('')
  const[show,setShow]=useState(false)

  const handleInput=(evt)=>{
setInput(evt.target.value)
  }
  const handleButton=(buttons)=>{
    if(buttons==="=")
      {
       const output= eval(input);
       console.log('result',output)
       setInput(output);

      }
      else if(buttons==="Clear all"){
        setInput('')

      }
   else {
    const newValue=input+buttons;
    console.log('newValue',newValue)
    setInput(newValue)
    setShow(true)
   }
  }

  //handlers
  return (
    <><h1 align='center' style={{ marginTop:"100px"}}>Basic Calculation Calculator</h1>

      <div align="center" className={style.cal}>

    <textarea  type="text" className={style.cal_int}  cols="30" rows="10" value={input} onChange={handleInput}></textarea><br/>
{
  value.map((buttons)=>{
return <span className={buttons==='Clear all'? style.clearbtn:style.cal_btn} onClick={()=>handleButton(buttons)}>{buttons}</span>
  })
}
    
      </div>
    </>
  )
}

export default Cal;
