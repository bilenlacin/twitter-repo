import React, { Component } from 'react';

export class Dailytweetnews extends Component {
  render() {
    return (
      <div className='daily-news'>
        <div className='news'>
          <div className='talksonwhere'>
            <span className='where'>Türkiye Konumunda Gündemde</span>
          </div>
          <div className='talkswhat'>
            <span className='what'>
              <b>Akşener</b>{' '}
            </span>
          </div>
          <div className='howmanytweet'>
            <span className='howmany'>12,5 B Tweet</span>
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
