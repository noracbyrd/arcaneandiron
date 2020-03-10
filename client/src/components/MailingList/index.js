import React, { Component } from 'react'
import M from "materialize-css"

class MailingList extends Component {
    componentDidMount() {
        M.AutoInit();
    }
    handleSubmit = () => {

    }
    render() {
        return (
            <div>
                <div className='row'></div>
                <div className='row'></div>
                <a data-target="mailingModal" className="btn modal-trigger waves-effect waves-light btn-large grey darken-2" onClick={this.handleSubmit}>JOIN OUR MAILING LIST</a>
                <div id="mailingModal" className="modal">
                    <div className="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default MailingList