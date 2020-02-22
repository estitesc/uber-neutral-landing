import React from 'react';
import {Link} from 'react-router-dom';

export default class MobileLanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      userEmail: '',
      formSubmitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({userEmail: event.target.value})
  }

  handleSubmit (event) {
    this.setState({
      formSubmitted: true,
    });

    const templateId = 'uberneutralreminder';
  
    this.sendFeedback(templateId, {userEmail: this.state.userEmail})
  }

  sendFeedback (templateId, variables) {
    window.emailjs.send(
      'gmail', 
      templateId,
      variables,
    ).then(res => {
      console.log('Email successfully sent!')
    })
    // Handle errors here however you like, or use a React error boundary
    .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  render() {
    const { formSubmitted } = this.state;

    return (
      <div className="container">
        <h1>UberNeutral</h1>
        <h3>A chrome extension to offset carbon emissions for every Uber ride you've taken.</h3>
        {/* <p><a href="https://chrome.google.com/webstore/detail/lbigghnkakcnagblddpampmcfmjpnapp" className="button-box">Download Now</a></p> */}
        <h3>UberNeutral is a chrome extension and only takes 1 minute to set up on your computer. Add your email and we'll send you a reminder link for when you get home.</h3>
        {
          formSubmitted ?
          <h2>Thank you! You will receive an email shortly.</h2>
          :
          <form className="test-mailing">
            <div>
              <input
                type="text"
                id="test-mailing"
                name="test-mailing"
                onChange={this.handleChange}
                placeholder="you@mail.com"
                required
                value={this.state.userEmail}
              />
            </div>
            <input type="button" value="Remind Me" style={{marginBottom: '25px'}} className="btn btn--submit" onClick={this.handleSubmit} />
          </form>
        }
        <div className="bottom-section">
          <h1>or...</h1>
          <Link to="/calculator" style={{marginBottom: '25px'}} className="button-box-dark">calculate it yourself now</Link>
        </div>
      </div>
    );
  }
}