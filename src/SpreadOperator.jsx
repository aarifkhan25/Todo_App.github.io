import React from 'react'

const SpreadOperator = () => {
  // //copyig array
  // const arr=[4,6,9]
  // const copyarr=[...arr];
  // copyarr[1]=8;
  // console.log('arr',arr)
  // console.log('copyarr',copyarr)

  // //concetenating array
  //  const arr1=[1,2,3]
  // const arr2=[4,5,6] 
  // const newarr=[...arr1,...arr2]
  // console.log(newarr)

  //adding element in array
  // const arr1=[5,6,7]
  // const newarr=[...arr1,8,9,10]
  // console.log(newarr);
  
  //spreading object properties
  const obj={name:'raj',age:21}
  const newobj={...obj,age:obj.age+1}
  console.log(newobj)
  return (
    <div>
      <h1></h1>
    </div>
  )
}

export default SpreadOperator
