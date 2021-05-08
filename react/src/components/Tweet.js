import React, { Component } from 'react';

export class Tweet extends Component {
  render() {
    return (
      <div className='tweet'>
        <div className='first-tweet'>
          <a href='/profile'>
            <img
              src='icons/person.svg'
              alt=''
              width='25'
              class='tweetprofileimg'
            />
          </a>
          <div className='tweetdetails'>
            <span className='username'>
              <span>M.Serdar Kuzuloğlu </span>{' '}
              <span class='userm'>@mserdark</span>
            </span>
            <p className='article'>
              #BugünÖğrendimKi (Türkiye’de) Türkiye’nin Batı ülkelerine
              benzemesini isteyenlerin oranı yüzde 62’den yüzde 70’e çıkarken,
              müslüman bir ülkeye benzemesini isteyenlerin oranıysa yüzde 5’ten
              yüzde 1’e inmiş. (
            </p>
            <div className='row'>
              <div className='col-md-12'>
                <div className='thumbnail'>
                  <a href='/tweetimage/serdarkimage.jfif'>
                    <img
                      src='/tweetimage/serdarkimage.jfif'
                      alt=''
                      rows='6'
                      className='tweetimage'
                    />
                  </a>
                </div>
              </div>
            </div>
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
          <p className='abouttweetbtn'>15</p>
          <a href='/retweet'>
            <img
              src='/icons/retweet.svg'
              alt=''
              width='15'
              className='tweetbtn'
            />
          </a>
          <p className='abouttweetbtn'>25</p>
          <a href='/like'>
            <img src='/icons/like.svg' alt='' width='15' className='tweetbtn' />
          </a>
          <p className='abouttweetbtn'>35</p>
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
