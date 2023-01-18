import React from 'react'

function Counter() {
    return (
        <div className='container'>
            <div className='counterDiv'>
            <h1>Example 1: Counter with Zustand</h1>
                <div><h1>0</h1></div>
                <div className='btns'>
                    <button className='btn'>Increment</button>
                    <button className='btn'>Decrement</button>
                    <button className='btn'>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Counter
