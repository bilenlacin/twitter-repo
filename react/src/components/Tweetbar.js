import React, { Component } from 'react';

export class Tweetbar extends Component {
  render() {
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
                    src='icons/person.svg'
                    class='rounded-circle'
                    height='45'
                    width='45'
                    alt=''
                    style={{ background: 'rgb(175 , 185, 187)' }}
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

                <button class='tweety'>Tweetle</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tweetbar;
