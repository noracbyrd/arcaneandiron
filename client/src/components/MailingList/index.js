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
        let newEmail = {
            email: this.state.email
        }
        let newMailchimp = {
            email_address: this.state.email,
            // pending status is for double opt in - mailchimp will send a verification email
            status: 'pending'
        }
        API.newMailchimp(newMailchimp)
        .then(res => {
            console.log(res.data.status)
            switch(res.data.status){
                case 'pending':
                    API.newEmail(newEmail)
                    .catch(err => console.log(err)) 
                    break;
                case 400:
                    console.log('already joined')
                    break;
                default:
                    console.log('something went wrong')    
                    break;
            }
        })
        .catch((err) => {
            console.log(err)
        })
        // API.newEmail(newEmail)
        //     .then(response => {
        //         console.log(response)
        //         if (!response.data.errmsg) {
        //             console.log('Email added')
        //             API.newMailchimp(newMailchimp)
        //         } else if (!response) {
        //             console.log('something is wrong')
        //         } else {
        //             console.log('already signed up')
        //         }
        //     }).catch(error => {
        //         console.log(error)
        //     })
        // this.setState({
        //     email: ''
        // })

    }
    render() {
        return (
            <div>
                <div className='row'></div>
                <div className='row'></div>
                <a data-target='mailingModal' className='btn modal-trigger waves-effect waves-light btn-large grey darken-2' id='mailingListBtn'>Join Our Mailing List</a>
                <div id='mailingModal' className='modal'>
                    <div className='modal-content'>
                        <h6 id='modalHeader'>Sign up for our mailing list to get the latest Arcane & Iron news!</h6>
                        <div className='row'>
                            <form className='col s12'>
                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input name='email' value={this.state.email} id='email' type='email' className='validate' onChange={this.handleInputChange}></input>
                                        <label htmlFor='email'><span className='data-error="Please enter a valid email address."'>Email</span></label>
                                    </div>
                                </div>
                                <div>
                                    <a className='modal-close waves-effect waves-green btn-flat' onClick={this.handleFormSubmit}>Submit</a>
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