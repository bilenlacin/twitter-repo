import React, { Component } from 'react';

export class Dailytweetnews extends Component {
  render() {
    const dailynew = this.props;

    return (
      <div className='daily-news'>
        <div className='news'>
          <div className='talksonwhere'>
            <span className='where'>{dailynew.dailynew.onWhere}</span>
          </div>
          <div className='talkswhat'>
            <span className='what'>
              <b>{dailynew.dailynew.subject}</b>{' '}
            </span>
          </div>
          <div className='howmanytweet'>
            <span className='howmany'>{dailynew.dailynew.tweetQty}</span>
          </div>
        </div>
        <div className='tweetmore'>
          <a href='/more'>
            <img src='icons/threedot.svg' alt='' width='25px' />
          </a>
        </div>
      </div>
    );
  }
}

export default Dailytweetnews;
