import React from 'react'
import { ToDoItem } from './ToDoItem'

export const ToDoList = function(props){
    return(
        <ul className="list-group "> <br></br>
        { props.offers.map((offer,index) =>
        <ToDoItem key={index} offer={offer} index={index} onDelete={props.onDelete} />
        )}
        </ul>
    )

}