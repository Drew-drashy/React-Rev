import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [time,setTime]=useState(60);
    useEffect(()=>{
        if(time>0){
                const fun=setTimeout(()=>setTime(time-1),1000);
                return ()=>clearInterval(fun);
        }
        else{

        }
    },[time])
  return (
    <div>
      {time} seconds left.
    </div>
  )
}

export default Timer
