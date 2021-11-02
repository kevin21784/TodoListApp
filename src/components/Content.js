import React from 'react'

export default function Content({eachItem,index,deleteTask}) {
    const handleDelete = ()=>{
        deleteTask(index)
    }
    
    return (
        <div className = "bg-gray-300 m-4 rounded-lg flex justify-between">
            <div>
                <span className="pl-4 font-semibold">{eachItem.Name}</span> <br />
                <span className="pl-4 font-semibold">{eachItem.Date}</span>
            </div>
            <div className="mr-4 mt-2 pt-1">
                <span className="cursor-pointer font-bold text-red-600" onClick={handleDelete}>X</span>
            </div>
        </div> 
    )
}
