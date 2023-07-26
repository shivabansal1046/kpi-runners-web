import React, { useState } from 'react'

const Btn = () => {
    const [obj, setCounter] = useState({id: 0, counter: 0})  
    function HandleClick(){
        setCounter(prev => prev.counter+1)
        console.log("Button clicked "+ obj.counter +" times")
    }
  return (
    <div>
        <h3> Button clicked {obj.counter} times</h3>
        <button onClick={()=>setCounter(prevalue => {return {...prevalue, counter: prevalue.counter+1}})}> click me!</button>
    </div>
  )
}

export default Btn