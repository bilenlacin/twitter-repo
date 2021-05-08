import React, { Component } from 'react';
import Tweetbar from './Tweetbar';
import Tweet from './Tweet';

export class Timeline extends Component {
  render() {
    return (
      <div className='maincol'>
        <Tweetbar />
        <div className='brace'></div>

        <div className='tweets'>
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </div>
      </div>
    );
  }
}

export default Timeline;
