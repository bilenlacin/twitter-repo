import React, { Component } from 'react';

export class Tweet extends Component {
  increaseLike = () => {
    const tweet = this.props;
    const tweetId = tweet.tweet.id;
    const tweetCounter = tweet.tweet.like + 1;
    this.props.increaseTweetLike(tweetId, tweetCounter);
  };
  showTweetImage = () => {
    const tweet = this.props;
    if (tweet.tweet.img) {
      return (
        <div className='row'>
          <div className='col-md-12'>
            <div className='thumbnail'>
              <a href=''>
                <img
                  className='thumbnailImg'
                  src={tweet.tweet.img}
                  alt=''
                  rows='6'
                  className='tweetimage'
                  height='100%'
                  width='100%'
                />
              </a>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
  render() {
    const tweet = this.props;
    // console.log(tweet);
    return (
      <div className='tweet'>
        <div className='first-tweet'>
          <a href='/profile'>
            <img
              src={tweet.tweet.profileImg}
              alt=''
              width='50'
              height='50'
              class='tweetprofileimg'
              className='rounded-circle '
            />
          </a>
          <div className='tweetdetails'>
            <span className='username'>
              <span> {tweet.tweet.username}</span>{' '}
              <span class='userm'>{tweet.tweet.email}</span>
            </span>
            <p className='article'>{tweet.tweet.tweet}</p>
            {this.showTweetImage()}
          </div>
        </div>
        <div className='btn-group'>
          <a href='/comment'>
            <img
              src='/icons/comment.svg'
              alt=''
              width='15'
              className='tweetbtn'
            />
          </a>
          <p className='abouttweetbtn'>{tweet.tweet.retweet}</p>
          <a href='/retweet'>
            <img
              src='/icons/retweet.svg'
              alt=''
              width='15'
              className='tweetbtn'
            />
          </a>
          <p className='abouttweetbtn'>25</p>

          <img
            src='/icons/like.svg'
            alt=''
            width='15'
            className='tweetbtn'
            onClick={this.increaseLike}
          />

          <p className='abouttweetbtn'>{tweet.tweet.like}</p>
          <a href='/upload'>
            <img
              src='/icons/upload.svg'
              alt=''
              width='15'
              className='tweetbtn'
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Tweet;
