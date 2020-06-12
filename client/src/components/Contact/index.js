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
        .then(response  => {
            if (!response.data.errmsg) {
                console.log('contact message sent')
            } 
        }).catch (error => {
            console.log(error)
        })
        this.setState({
            name: '',
            email: '',
            content: ''
        })
    }
    render() {
        return (
            <div id='contact'>
                <p>OMG ask us all the questionsssssss</p>
                <div className='row'>
                    <form className='col s12'>
                        <div className='row'>
                            <div className='input-field col s6'>
                                <input name='firstName'
                                value={this.state.name} id='name' type='text' className='validate'></input>
                                <label htmlFor='name'>Name</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s12'>
                                <input name='email' value={this.state.email} id='email' type='email' className='validate'></input>
                                <label htmlFor='email'>Email</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col s12'>
                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <textarea name='content' value={this.state.content} id='textarea1' className='materialize-textarea'></textarea>
                                        <label htmlFor='textarea1'>Textarea</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div> 
                        <button class='btn grey lighten-1 waves-effect waves-light' type='submit' name='action' onClick={this.handleFormSubmit}>Submit
  </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact