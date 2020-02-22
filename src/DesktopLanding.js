import React from 'react';

export default class DesktopLanding extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>UberNeutral</h1>
        <h3>A chrome extension to offset carbon emissions for every Uber ride you've taken.</h3>
        <p><a href="https://chrome.google.com/webstore/detail/dgnclmeknkbejhjomoofcakpenfijnch" className="button-box">Download Now</a></p>
      </div>
    );
  }
}