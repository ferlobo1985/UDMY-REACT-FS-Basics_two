import React from 'react'

const Count = ({count}) => {
    console.log('2-count')
    return (
        <>
            <h3>The count is:{count}</h3>
        </>
    )
}

export default React.memo(Count);