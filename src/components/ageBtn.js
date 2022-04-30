import React from 'react'

const AgeBtn = ({handleAge}) => {
    console.log('5-age btn')
    return (
        <>
           <button onClick={handleAge}>
               Increment the age
           </button>
        </>
    )
}

export default React.memo(AgeBtn);