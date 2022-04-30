import React from 'react'

const CountBtn = ({handleCount}) => {
    console.log('3-count btn')
    return (
        <>
           <button onClick={handleCount}>
               Increment the count
           </button>
        </>
    )
}

export default React.memo(CountBtn);