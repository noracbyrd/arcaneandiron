import React, { Component } from 'react'
import M from 'materialize-css'
import API from '../../utils/API.js'

class MailingList extends Component {
    componentDidMount() {
        M.AutoInit();
    }
    state = {
        firstname: '',
        lastname: '',
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
        let newUser = {
            first_name: this.state.firstname,
            last_name: this.state.lastname,
            email: this.state.email
        }
        API.newUser(newUser)
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('user added')
                } else if (!response) {
                    console.log('something is wrong')
                } else {
                    console.log('already signed up')
                }
            }).catch(error => {
                console.log(error)
            })
        this.setState({
            firstname: '',
            lastname: '',
            email: ''
        })
    }
    render() {
        return (
            <div>
                <div className='row'></div>
                <div className='row'></div>
                <a data-target="mailingModal" className="btn modal-trigger waves-effect waves-light btn-large grey darken-2">JOIN OUR MAILING LIST</a>
                <div id="mailingModal" className="modal">
                    <div className="modal-content">
                        <h6>Sign up for our mailing list to get the latest Arcane & Iron news!</h6>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input name="firstname" value={this.state.firstname} id="first_name" type="text" className="validate" onChange={this.handleInputChange}></input>
                                        <label htmlFor="first_name">First Name</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input name="lastname" value={this.state.lastname} id="last_name" type="text" className="validate" onChange={this.handleInputChange}></input>
                                        <label htmlFor="last_name">Last Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input name="email" value={this.state.email} id="email" type="email" className="validate" onChange={this.handleInputChange}></input>
                                        <label htmlFor="email"><span className='data-error="Please enter a valid email address."'>Email</span></label>
                                    </div>
                                </div>
                                <div>
                                    <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={this.handleFormSubmit}>Submit</a>
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