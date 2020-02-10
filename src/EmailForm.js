import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userEmail: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form className="test-mailing">
        <h1>Let's see if it works</h1>
        <div>
          <input
            type="text"
            id="test-mailing"
            name="test-mailing"
            onChange={this.handleChange}
            placeholder="your email"
            required
            value={this.state.userEmail}
          />
        </div>
        <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
      </form>
    )
  }

  handleChange(event) {
    this.setState({userEmail: event.target.value})
  }

  handleSubmit (event) {
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
}