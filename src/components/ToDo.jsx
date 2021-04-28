import React from 'react'
import { ToDoForm } from './ToDoForm'
import { ToDoList } from  './ToDoList'

export class ToDo extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            offers: []
        }
        this.addOffer = this.addOffer.bind(this)
        this.deleteOffer = this.deleteOffer.bind(this)
    }

    addOffer(newOffer){
        this.setState({
            offers: [...this.state.offers, newOffer]
        })
    }

    deleteOffer(id){
        const newArray = this.state.offers.filter((offer, index) => index !== id)
        this.setState({
            offers: newArray
        })
    }
    render() {
        return(

            <>
                <div className="row">
                    <div className="col">
                    <ToDoList offers={this.state.offers} onDelete={this.deleteOffer}/>
                    </div>
                    <div>
                        <ToDoForm onSubmit={this.addOffer} />
                    </div>
                </div>
            </>

        )
    }

}