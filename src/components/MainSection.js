import React, { useEffect ,useState } from 'react'
import ItineraryPage from './ItineraryPage'
import Content from './Content' 
export default function MainSection() {
    const [modal,setModal] = useState(false)
    const [taskList, setTaskList] = useState([])

    useEffect(() =>{
        let arr = localStorage.getItem("taskList")
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])

    const toggle =() => {
        setModal(!modal)
    }
    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
    }

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index , 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    return (
        <>
            <div className="flex justify-between m-4">
                <h1 className="title">itinerary tracker</h1>
                <button className="pl-4 pr-4 pt-2 pb-2 rounded-lg bg-green-600" onClick = {() => setModal(true)}>Add</button>
            </div>
            <div>
                {taskList.map((item , index) => <Content eachItem = {item} index = {index} deleteTask = {deleteTask}/>)}
            </div>
            <ItineraryPage toggle= {toggle} modal = {modal} save = {saveTask}/>
        </>
    )
}
