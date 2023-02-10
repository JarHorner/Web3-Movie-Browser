import React from 'react'

const seperator = (props) => {
    return (
        <div className=" flex items-center text-pink-900 mt-4 ">
            <h1 className=" mr-2">{props.title}</h1>
            <div className=" border-b flex-1 border-pink-300"></div>
        </div>
    )
}

export default seperator