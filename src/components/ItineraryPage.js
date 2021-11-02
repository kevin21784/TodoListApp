import React, { useState } from 'react'
import ReactDOM from "react-dom"
import { Button , Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'

export default function ItineraryPage({modal,toggle,save}){
    const [taskName , setTaskName] = useState('');
    const [dateval , setDate] = useState('');

    const handleChange = e =>{
        // const name = e.target.name
        // const value = e.target.value
        const {name, value} = e.target

        if(name === "nametask") {
            setTaskName(value)
        }
        else{
            setDate(value)
        }
    }

    const saveHandler = () => {
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Date"] = dateval
        save(taskObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                Create Task
            </ModalHeader>
            <ModalBody>
            <form>
                <div className="">
                    <label className="font-serif">Task Name:</label>
                    <input className="ml-6 border-0 bg-gray-400" type="text" value = {taskName} name="nametask" onChange = {handleChange}/>
                    <br />
                    <br />
                    <label className="font-serif">Date:</label>
                    <input className="ml-16 bg-gray-400" type="date" value = {dateval} name="namedate" onChange = {handleChange}/>
                </div>
            </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={saveHandler}>
                    Create
                </Button>
                {' '}
                <Button onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}