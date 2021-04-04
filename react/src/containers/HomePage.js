import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './note-list.css';

class HomePage extends React.Component {
  render() {
    return (
      <div class='container'>
        <div class='row'>
          <div class='col'>
            <nav className='navbar'>
              <a href='TwitterBird'>
                <img src='icons/twitterbird.svg' width='35' alt='' />
              </a>
            </nav>
            <nav class='navbar bg-light'>
              <ul class='navbar-nav'>
                <li class='nav-item'>
                  <a class='nav-link' href='/home'>
                    <div className='nav-img-text'>
                      <div className='nav-img'>
                        <img src='icons/home.svg' width='25' alt='' />
                      </div>
                      <div className='nav-text'>
                        <span>Anasayfa</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='/explore'>
                    <div className='nav-img-text'>
                      <div className='nav-img'>
                        <img src='icons/hash.svg' width='25' alt='' />
                      </div>
                      <div className='nav-text'>
                        <span>Keşfet</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='/notifications'>
                    <div className='nav-img-text'>
                      <div className='nav-img'>
                        <img src='icons/bell.svg' width='25' alt='' />
                      </div>
                      <div className='nav-text'>
                        <span>Bildirimler</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='/messages'>
                    <div className='nav-img-text'>
                      <div className='nav-img'>
                        <img src='icons/mail.svg' width='25' alt='' />
                      </div>
                      <div className='nav-text'>
                        <span>Mesajlar</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='/bookmark'>
                    <div className='nav-img-text'>
                      <div className='nav-img'>
                        <img src='icons/bookmark.svg' width='25' alt='' />
                      </div>
                      <div className='nav-text'>
                        <span>Yer işaretleri</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='/lists'>
                    <div className='nav-img-text'>
                      <div className='nav-img'>
                        <img src='icons/list.svg' width='25' alt='' />
                      </div>
                      <div className='nav-text'>
                        <span>Listeler</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='/profile'>
                    <div className='nav-img-text'>
                      <div className='nav-img'>
                        <img src='icons/person.svg' width='25' alt='' />
                      </div>
                      <div className='nav-text'>
                        <span>Profil</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='/more'>
                    <div className='nav-img-text'>
                      <div className='nav-img'>
                        <img src='icons/threedot.svg' width='25' alt='' />
                      </div>
                      <div className='nav-text'>
                        <span>Daha fazla</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='/twwet'>
                    <div className='tweetSpan'>
                      <span class='tweetspantext'>Tweetle</span>
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
            <button type='button' class='btn btn-xlg'>
              <img src='icons/person.svg' width='25' alt='' />
              <span> </span>
              user
            </button>
          </div>
          <div class='col-6'>
            <div className='tweetbar'>
              <h4 class='homepage'>Anasayfa</h4>
              <div className='inputdiv'>
                <div className='input-group'>
                  <a class='nav-link' href='/profile'>
                    <div className='nav-img-text'>
                      <div className='nav-img'>
                        <img src='icons/person.svg' width='25' alt='' />
                      </div>
                    </div>
                  </a>
                  <textarea
                    class='md-textarea form-control'
                    aria-label='With textarea'
                    placeholder='Neler oluyor ?'
                    rows='4'
                  ></textarea>
                </div>

                <div class='button-group'>
                  <div className='tweetspesification'>
                    <div className='tspesification'>
                      <button class='btn'>
                        <i class='image'></i>
                      </button>
                    </div>
                    <a class='nav-link' href='/twwet'>
                      <div className='tweeteSpan'>
                        <span class='tweetespantext'>Tweetle</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='brace'></div>

            <div className='tweets'>
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
                    <h5 className='username'>
                      <b>M.Serdar Kuzuloğlu </b> @mserdark
                    </h5>
                    <p className='article'>
                      #BugünÖğrendimKi (Türkiye’de) Türkiye’nin Batı ülkelerine
                      benzemesini isteyenlerin oranı yüzde 62’den yüzde 70’e
                      çıkarken, müslüman bir ülkeye benzemesini isteyenlerin
                      oranıysa yüzde 5’ten yüzde 1’e inmiş. (
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
                  <a href=''>
                    <img
                      src='/icons/comment.svg'
                      alt=''
                      width='15'
                      className='tweetbtn'
                    />
                  </a>
                  <p className='abouttweetbtn'>15</p>
                  <a href=''>
                    <img
                      src='/icons/retweet.svg'
                      alt=''
                      width='15'
                      className='tweetbtn'
                    />
                  </a>
                  <p className='abouttweetbtn'>25</p>
                  <a href=''>
                    <img
                      src='/icons/like.svg'
                      alt=''
                      width='15'
                      className='tweetbtn'
                    />
                  </a>
                  <p className='abouttweetbtn'>35</p>
                  <a href=''>
                    <img
                      src='/icons/upload.svg'
                      alt=''
                      width='15'
                      className='tweetbtn'
                    />
                  </a>
                  <p className='abouttweetbtn'>45</p>
                </div>
              </div>
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
                    <h5 className='username'>
                      <b>M.Serdar Kuzuloğlu </b> @mserdark
                    </h5>
                    <p className='article'>
                      #BugünÖğrendimKi (Türkiye’de) Türkiye’nin Batı ülkelerine
                      benzemesini isteyenlerin oranı yüzde 62’den yüzde 70’e
                      çıkarken, müslüman bir ülkeye benzemesini isteyenlerin
                      oranıysa yüzde 5’ten yüzde 1’e inmiş. (
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
                  <a href=''>
                    <img
                      src='/icons/comment.svg'
                      alt=''
                      width='15'
                      className='tweetbtn'
                    />
                  </a>
                  <p className='abouttweetbtn'>15</p>
                  <a href=''>
                    <img
                      src='/icons/retweet.svg'
                      alt=''
                      width='15'
                      className='tweetbtn'
                    />
                  </a>
                  <p className='abouttweetbtn'>25</p>
                  <a href=''>
                    <img
                      src='/icons/like.svg'
                      alt=''
                      width='15'
                      className='tweetbtn'
                    />
                  </a>
                  <p className='abouttweetbtn'>35</p>
                  <a href=''>
                    <img
                      src='/icons/upload.svg'
                      alt=''
                      width='15'
                      className='tweetbtn'
                    />
                  </a>
                  <p className='abouttweetbtn'>45</p>
                </div>
              </div>
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
                    <h5 className='username'>
                      <b>M.Serdar Kuzuloğlu </b> @mserdark
                    </h5>
                    <p className='article'>
                      #BugünÖğrendimKi (Türkiye’de) Türkiye’nin Batı ülkelerine
                      benzemesini isteyenlerin oranı yüzde 62’den yüzde 70’e
                      çıkarken, müslüman bir ülkeye benzemesini isteyenlerin
                      oranıysa yüzde 5’ten yüzde 1’e inmiş. (
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
                  <a href=''>
                    <img
                      src='/icons/comment.svg'
                      alt=''
                      width='15'
                      className='tweetbtn'
                    />
                  </a>
                  <p className='abouttweetbtn'>15</p>
                  <a href=''>
                    <img
                      src='/icons/retweet.svg'
                      alt=''
                      width='15'
                      className='tweetbtn'
                    />
                  </a>
                  <p className='abouttweetbtn'>25</p>
                  <a href=''>
                    <img
                      src='/icons/like.svg'
                      alt=''
                      width='15'
                      className='tweetbtn'
                    />
                  </a>
                  <p className='abouttweetbtn'>35</p>
                  <a href=''>
                    <img
                      src='/icons/upload.svg'
                      alt=''
                      width='15'
                      className='tweetbtn'
                    />
                  </a>
                  <p className='abouttweetbtn'>45</p>
                </div>
              </div>
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
                    <h5 className='username'>
                      <b>M.Serdar Kuzuloğlu </b> @mserdark
                    </h5>
                    <p className='article'>
                      #BugünÖğrendimKi (Türkiye’de) Türkiye’nin Batı ülkelerine
                      benzemesini isteyenlerin oranı yüzde 62’den yüzde 70’e
                      çıkarken, müslüman bir ülkeye benzemesini isteyenlerin
                      oranıysa yüzde 5’ten yüzde 1’e inmiş. (
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
                  <a href=''>
                    <img
                      src='/icons/comment.svg'
                      alt=''
                      width='15'
                      className='tweetbtn'
                    />
                  </a>
                  <p className='abouttweetbtn'>15</p>
                  <a href=''>
                    <img
                      src='/icons/retweet.svg'
                      alt=''
                      width='15'
                      className='tweetbtn'
                    />
                  </a>
                  <p className='abouttweetbtn'>25</p>
                  <a href=''>
                    <img
                      src='/icons/like.svg'
                      alt=''
                      width='15'
                      className='tweetbtn'
                    />
                  </a>
                  <p className='abouttweetbtn'>35</p>
                  <a href=''>
                    <img
                      src='/icons/upload.svg'
                      alt=''
                      width='15'
                      className='tweetbtn'
                    />
                  </a>
                  <p className='abouttweetbtn'>45</p>
                </div>
              </div>
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
                    <h5 className='username'>
                      <b>M.Serdar Kuzuloğlu </b> @mserdark
                    </h5>
                    <p className='article'>
                      #BugünÖğrendimKi (Türkiye’de) Türkiye’nin Batı ülkelerine
                      benzemesini isteyenlerin oranı yüzde 62’den yüzde 70’e
                      çıkarken, müslüman bir ülkeye benzemesini isteyenlerin
                      oranıysa yüzde 5’ten yüzde 1’e inmiş. (
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
                  <a href=''>
                    <img
                      src='/icons/comment.svg'
                      alt=''
                      width='15'
                      className='tweetbtn'
                    />
                  </a>
                  <p className='abouttweetbtn'>15</p>
                  <a href=''>
                    <img
                      src='/icons/retweet.svg'
                      alt=''
                      width='15'
                      className='tweetbtn'
                    />
                  </a>
                  <p className='abouttweetbtn'>25</p>
                  <a href=''>
                    <img
                      src='/icons/like.svg'
                      alt=''
                      width='15'
                      className='tweetbtn'
                    />
                  </a>
                  <p className='abouttweetbtn'>35</p>
                  <a href=''>
                    <img
                      src='/icons/upload.svg'
                      alt=''
                      width='15'
                      className='tweetbtn'
                    />
                  </a>
                  <p className='abouttweetbtn'>45</p>
                </div>
              </div>
            </div>
          </div>
          <div class='col'>
            <div className='search'>
              <nav class='navbar navbar-light bg-light'>
                <form class='form-inline'>
                  <img src='icons/search.svg' width='25' alt='' />
                  <input
                    class='form-control mr-sm-2'
                    type='search'
                    placeholder="Twitter'da ara"
                    aria-label='search'
                  />
                </form>
              </nav>
            </div>
            <div className='daily'>
              <h5>İlgini çekebilecek gündemler</h5>
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
            </div>

            <div className='followwho'>
              <h4>Kimi takip etmeli</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {};

export default withRouter(connect(mapStateToProps, {})(HomePage));
