import React, { useState } from 'react'

const List = () => {
    // const [toggle,setToggle]=useState(false);
    const [d,setD]=useState([]);
    const handledata=()=>{
        
        
        try{
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res)=>res.json())
            .then((data)=>setD(data)).catch((err)=>console.log(err));
        }
        catch(err){
            console.log(err);
        }
    }
  return (
        <div>
            <button onClick={handledata}>grabdata</button>
                <ul>
                    {
                        d.map((a,b)=>(
                             <li key={b}>{a.title}</li>
                        ))
                    }
                </ul>
        </div>

  )
}

export default List
