import {useState,useEffect} from 'react'

function UseEffectComponent(){
const [val,setValue]=useState(1)

useEffect(()=>{
const timer=window.setInterval(()=>{
    setValue((v) =>v+1);
}, 1000)
return ()=>window.clearInterval(timer)
},[])
return(
    <div>{val}</div>
)
}

export default UseEffectComponent