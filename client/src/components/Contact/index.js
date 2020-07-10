import React, { Component } from 'react'
import './style.css'
import API from '../../utils/API.js'

class Contact extends Component {
    state = {
        name: '',
        email: '',
        content: ''
    }
    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }
    handleFormSubmit = e => {
        e.preventDefault()
        let newContactUs = {
            name: this.state.name,
            email: this.state.email,
            content: this.state.content
        }
        API.contact(newContactUs)
        this.setState({
            name: '',
            email: '',
            content: ''
        })
    }
    render() {
        return (
            <div id='contact'>
                <h6>Contact the Arcane and Iron Team</h6>
                <div id='form'>
                    <div className='row'>
                        <form className='col s12'>
                            <div className='row'>
                                <div className='input-field col s6'>
                                    <input name='name'
                                        value={this.state.name} id='name' type='text' className='validate' onChange={this.handleInputChange}></input>
                                    <label htmlFor='name'>Name</label>
                                </div>
                                <div className='input-field col s6'>
                                    <input name='email' value={this.state.email} id='email' type='email' className='validate' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={this.handleInputChange}></input>
                                    <label htmlFor='email'>Email</label>
                                    <span className="helper-text" data-error="Please enter a valid email address."></span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col s12'>
                                    <div className='row'>
                                        <div className='input-field col s12'>
                                            <textarea name='content' value={this.state.content} id='textarea1' className='materialize-textarea' onChange={this.handleInputChange}></textarea>
                                            <label htmlFor='textarea1'>Message</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className='btn grey darken-3 waves-effect waves-light' type='submit' name='action' onClick={this.handleFormSubmit}>Submit
  </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact