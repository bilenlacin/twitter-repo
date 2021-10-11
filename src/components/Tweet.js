import React, { Component } from 'react';

export class Tweet extends Component {
  creaseLike = () => {
    const tweet = this.props;
    const liked = tweet.tweet.liked;
    if (liked !== true) {
      this.increaseLike(liked);
    }
    if (liked === true) {
      this.decreaseLike(liked);
    }
  };

  decreaseLike = (liked) => {
    const tweet = this.props;
    const tweetId = tweet.tweet.id;
    const tweetCounter = tweet.tweet.like - 1;
    liked = false;
    this.props.decreaseTweetLike(tweetId, tweetCounter, liked);
  };

  increaseLike = (liked) => {
    const tweet = this.props;
    const tweetId = tweet.tweet.id;
    const tweetCounter = tweet.tweet.like + 1;
    liked = true;
    this.props.increaseTweetLike(tweetId, tweetCounter, liked);
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
    const { tweet } = this.props;
    // console.log(tweet);
    return (
      <div className='tweet'>
        <div className='first-tweet'>
          <a href='/profile'>
            <img
              src={tweet.profileImg}
              alt=''
              width='50'
              height='50'
              class='tweetprofileimg'
              className='rounded-circle '
            />
          </a>
          <div className='tweetdetails'>
            <span className='username'>
              <span> {tweet.username}</span>{' '}
              <span class='userm'>{tweet.email}</span>
            </span>
            <p className='article'>{tweet.tweet}</p>
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
          <p className='abouttweetbtn'>{tweet.retweet}</p>
          <a href='/retweet'>
            <img
              src='/icons/retweet.svg'
              alt=''
              width='15'
              className='tweetbtn'
            />
          </a>
          <p className='abouttweetbtn'>25</p>

          <svg
            width='24'
            height='24'
            viewBox='0 0 24  24'
            className='tweetbtn'
            id='like'
            onClick={this.creaseLike}
          >
             
            {tweet.liked !== true ? (
              <path d='M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z'></path>
            ) : (
              <path
                fill='rgba(224,36,94)'
                d='M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z'
              ></path>
            )}
          </svg>

          <p className='abouttweetbtn'>{tweet.like}</p>
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
