import React from 'react';
import MobileLanding from './MobileLanding';
import DesktopLanding from './DesktopLanding';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);

    const isMobile = window.innerWidth < 600;

    this.state = { isMobile: isMobile };
  }

  render() {
    const { isMobile } = this.state;

    return (
      isMobile ?
      <MobileLanding /> : <DesktopLanding />
    );
  }
}