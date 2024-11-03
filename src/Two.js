import React from 'react'
import { useState } from 'react'

function Two() {
    const [cnt, setCnt] = useState(0);
    
    const handleinc = () => {
        setCnt(cnt + 1);
    }
    
    const handledec = () => {
        setCnt(cnt - 1);
    }
    
    return (
        <div>
            {cnt}
            <button onClick={handleinc}>+</button>
            <button onClick={handledec}>-</button>
        </div>
    )
}

export default Two