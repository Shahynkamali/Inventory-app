import React, { Component } from 'react'
import PropTypes from 'prop-types';

class EditFishForm extends Component {

    static propTypes ={
        fish: PropTypes.object,
        index: PropTypes.string,
        updateFosh: PropTypes.func
    }
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
            <button onClick={()=>this.props.deleteFish(this.props.index)}>Remove Fish</button>
        </div> 
        )
    } 
}

export default EditFishForm;