import React, { Component } from 'react'
import './style.css'

class Contact extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        text: ''
    }
    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }
    handleFormSubmit = e => {
        e.preventDefault()
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
                                value={this.state.firstName} id='first_name' type='text' className='validate'></input>
                                <label htmlFor='first_name'>First Name</label>
                            </div>
                            <div className='input-field col s6'>
                                <input name='lastName' value={this.state.lastName}id='last_name' type='text' className='validate'></input>
                                <label htmlFor='last_name'>Last Name</label>
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
                                        <textarea name='text' value={this.state.text} id='textarea1' className='materialize-textarea'></textarea>
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