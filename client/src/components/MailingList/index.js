import React, { Component } from 'react'
import M from 'materialize-css'
import API from '../../utils/API.js'
import './style.css'

class MailingList extends Component {
    componentDidMount() {
        M.AutoInit();
    }
    state = {
        email: ''
    }
    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }
    handleFormSubmit = e => {
        e.preventDefault()
        console.log('submit button clicked')
        let newEmail = {
            email: this.state.email
        }
        console.log(newEmail)
        API.newEmail(newEmail)
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('Email added')
                } else if (!response) {
                    console.log('something is wrong')
                } else {
                    console.log('already signed up')
                }
            }).catch(error => {
                console.log(error)
            })
        this.setState({
            email: ''
        })
    }
    render() {
        return (
            <div>
                <div className='row'></div>
                <div className='row'></div>
                <a data-target='mailingModal' className='btn modal-trigger waves-effect waves-light btn-large grey darken-2' id='mailingListBtn'>Join Our Mailing List</a>
                <div id='mailingModal' className='modal'>
                    <div className='modal-content'>
                        <h6>Sign up for our mailing list to get the latest Arcane & Iron news!</h6>
                        <div className='row'>
                            <form className='col s12'>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input name="email" value={this.state.email} id="email" type="email" className="validate" onChange={this.handleInputChange}></input>
                                        <label htmlFor="email"><span className='data-error="Please enter a valid email address."'>Email</span></label>
                                    </div>
                                </div>
                                <div>
                                    <a className="modal-close waves-effect waves-green btn-flat" onClick={this.handleFormSubmit}>Submit</a>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default MailingList