import React, { Component } from 'react';
import Dailytweetnews from './Dailytweetnews';

export class Dailynews extends Component {
  render() {
    return (
      <div className='daily'>
        <div className='interesting'>
          <span class='interestingtext'>İlgini çekebilecek gündemler</span>
          <div className='interestingimg'>
            <a href='/settings'>
              <img src='/icons/settings.svg' alt='' />
            </a>
          </div>
        </div>
        <Dailytweetnews />
        <Dailytweetnews />
        <Dailytweetnews />
        <Dailytweetnews />
        <Dailytweetnews />
      </div>
    );
  }
}

export default Dailynews;
