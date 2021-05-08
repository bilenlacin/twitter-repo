import React, { Component } from 'react';
import Dailynews from './Dailynews';
import Search from './Search';

export class Daily extends Component {
  render() {
    return (
      <div className='rightdiv'>
        <Search />
        <Dailynews />

        <div className='followwho'>
          <h4>Kimi takip etmeli</h4>
        </div>
      </div>
    );
  }
}

export default Daily;
