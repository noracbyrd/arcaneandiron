import React, { Component } from 'react'

class MailingList extends Component {
    handleSubmit = () => {
        console.log('button clicked')
    }
    render() {
        return(
            <div>
                <div className='row'></div>
                <div className='row'></div>
                <a className="waves-effect waves-light btn-large grey darken-2" onClick={this.handleSubmit}>JOIN OUR MAILING LIST</a>
            </div>
        )
    }
}

export default MailingList