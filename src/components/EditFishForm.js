import React, { Component } from 'react'

class EditFishForm extends Component {
    handleChange = (event) =>{
        console.log(event.currentTarget.value)
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        }
        this.props.updateFish(this.props.index, updatedFish)  
    }


    render() {
        return (
        <div className="fish-edit">
            <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
            <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
            <select type="text" name="status" onChange={this.handleChange} value={this.props.fish.status}> 
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
            </select>
            <textarea type="text" name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
            <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image}/> 
            
        </div> 
        )
    } 
}

export default EditFishForm;