import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ridesPerMonth: null, milesPerRide: 5, yearsRiding: null };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    // Figure out if we have what we need to show the results
    const { ridesPerMonth, milesPerRide, yearsRiding } = this.state;
    let showResult = false;
    let linkToNori, carbonTonnes, carbonTonnesRounded, costToOffset;
    if(ridesPerMonth && milesPerRide && yearsRiding) {
      showResult = true;

      const totalMiles = ridesPerMonth * 12 * milesPerRide * yearsRiding;
      console.log("total miles", totalMiles);
      // Calculate total carbon tonnes
      carbonTonnes = Math.round(totalMiles * 0.000445334 * 100) / 100;
      console.log("carbonTonnes", carbonTonnes);

      // Calculate rounded tonnes
      carbonTonnesRounded = Math.ceil(carbonTonnes);

      // Calculate cost to offset
      costToOffset = Math.round(100 * carbonTonnesRounded * 16.5) / 100;

      linkToNori = `https://nori.com/remove-carbon/checkout?tonnes=${carbonTonnesRounded}.00`;
      // link = `<a className="button-box" href=${linkToNori}> Offset now for $${costToOffset}</a>`;
    }

    return (
      <div className="container">
        <h1>UberNeutral</h1>
        <h3>Calculate your emissions in 3 simple steps and we'll provide a customized link for your to offset all your Ubers.</h3>
        {/* <p><a href="https://chrome.google.com/webstore/detail/lbigghnkakcnagblddpampmcfmjpnapp" className="button-box">Download Now</a></p> */}
        {/* <h3>UberNeutral is a chrome extension and only takes 1 minute to set up on your computer. Add your email and we'll send you a reminder link for when you get home.</h3> */}
        <div>
          <p>About how many Uber rides do you take each month?</p>
          <input
            type="number"
            name="ridesPerMonth"
            onChange={this.handleInputChange}
            placeholder="0"
            value={this.state.ridesPerMonth}
          />
          <p>Ballpark, about how far on average are these rides?</p>
          <select 
            name="milesPerRide"
            value={this.state.milesPerRide}
            className="select-css"
            onChange={this.handleInputChange}>
            <option value="5">less than 5 miles</option>
            <option value="10">5-10 miles</option>
            <option value="20">10-20 miles</option>
            <option value="30">20+ miles</option>
          </select>
          <p>How many years have you been taking Uber? (rough guess is fine)</p>
          <input
            type="number"
            name="yearsRiding"
            onChange={this.handleInputChange}
            placeholder="0"
            value={this.state.yearsRiding}
          />
        </div>
        {
          showResult ? <div>
            <h3>Ok! Based on what you entered we calculate that you have emitted {carbonTonnes} tonnes of carbon riding Uber.</h3>
            <p><a className="button-box" href={linkToNori}> Offset now for ${costToOffset}</a></p>
            <div className="fine-print">
                We’ve integrated with Nori to offset your Carbon Footprint. <a href="http://nori.com">Read more</a> about how they use blockchain to help reverse climate change. Feel free to use another service like <a href="http://goldstandard.org">Gold Standard</a> if you would like a more traditional offsetting service.
            </div>
          </div> : null
        }
      </div>
    );
  }
}