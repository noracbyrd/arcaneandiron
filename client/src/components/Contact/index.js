import React, { Component } from 'react'
import './style.css'

class Contact extends Component {
    render() {
        return (
            <div id='contact'>
                <p>OMG ask us all the questionsssssss</p>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input placeholder="Placeholder" id="first_name" type="text" className="validate"></input>
                                <label for="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate"></input>
                                <label for="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate"></input>
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                                        <label for="textarea1">Textarea</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact