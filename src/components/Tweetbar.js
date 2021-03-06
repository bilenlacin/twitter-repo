import React, { Component } from 'react';

export class Tweetbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: '',
    };
  }

  handleTweetbarChange = (event) =>
    this.setState({ tweet: event.target.value });

  handleTweetAdded = () => {
    const tweet = this.state;
    const profils = this.props;
    var myTweet = {
      tweet: tweet.tweet,
      username: profils.profils.username,
      email: profils.profils.email,
      profileImg: profils.profils.img,
    };
    this.props.insertTweet(myTweet);
    this.setState({ tweet: '' });
  };

  render() {
    const profils = this.props;
    // console.log(profils);
    return (
      <div className='tweetbar'>
        <div className='mainpagediv'>
          <div className='mainpage'>
            <h2 className='pagehome'>
              <span className='homepage'>Anasayfa</span>
            </h2>
            <img
              src='/icons/homepageicon.svg'
              alt=''
              className='homepageicon'
              width='22 '
            />
          </div>
        </div>
        <div className='inputdiv'>
          <div className='input-group'>
            <a class='nav-link' href='/profile'>
              <div className='nav-img-text'>
                <div className='nav-img'>
                  <img
                    src={profils.profils.img}
                    class='rounded-circle'
                    height='45'
                    width='45'
                    alt=''
                    // style={{ background: 'rgb(175 , 185, 187)' }}
                  />
                </div>
              </div>
            </a>
            <div className='tweetdiv'>
              <textarea
                class='form-control'
                rows='2'
                id='comment'
                placeholder='Neler oluyor ?'
                style={{ fontSize: '20px' }}
                onChange={this.handleTweetbarChange}
                value={this.state.tweet}
              ></textarea>
              <div className='tweetabout'>
                <div className='tweetaboutdiv'>
                  <button class='btn'>
                    <img src='icons/media.svg'></img>
                  </button>
                  <button class='btn'>
                    <img src='icons/gif.svg'></img>
                  </button>
                  <button class='btn'>
                    <img src='icons/statistic.svg'></img>
                  </button>
                  <button class='btn'>
                    <img src='icons/group.svg'></img>
                  </button>
                </div>

                <button onClick={() => this.handleTweetAdded()} class='tweety'>
                  Tweetle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tweetbar;
