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
                <a class="waves-effect waves-light btn-large grey darken-2">JOIN OUR MAILING LIST</a>
            </div>
        )
    }
}

export default MailingList