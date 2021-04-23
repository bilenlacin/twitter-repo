import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './note-list.css';

class HomePage extends React.Component {
  render() {
    return (
      <div class='container'>
        <div class='row'>
          <div className='col-2'>
            <div className='navdiv'>
              <nav className='navbarr'>
                <a href='TwitterBird'>
                  <img src='icons/twitterbird.svg' width='28' alt='' />
                </a>
              </nav>
              <nav class='navbar-nav'>
                <a class='navlink' href='/home'>
                  <div className='nav-img-text'>
                    <div className='nav-img'>
                      <img src='icons/home.svg' width='22' alt='' />
                    </div>
                    <div className='nav-text'>Anasayfa</div>
                  </div>
                </a>

                <a class='navlink' href='/explore'>
                  <div className='nav-img-text'>
                    <div className='nav-img'>
                      <img src='icons/hash.svg' width='22' alt='' />
                    </div>
                    <div className='nav-text'>
                      <span>Keşfet</span>
                    </div>
                  </div>
                </a>

                <a class='navlink' href='/notifications'>
                  <div className='nav-img-text'>
                    <div className='nav-img'>
                      <img src='icons/bell.svg' width='22' alt='' />
                    </div>
                    <div className='nav-text'>
                      <span>Bildirimler</span>
                    </div>
                  </div>
                </a>

                <a class='navlink' href='/messages'>
                  <div className='nav-img-text'>
                    <div className='nav-img'>
                      <img src='icons/mail.svg' width='22' alt='' />
                    </div>
                    <div className='nav-text'>
                      <span>Mesajlar</span>
                    </div>
                  </div>
                </a>

                <a class='navlink' href='/bookmark'>
                  <div className='nav-img-text'>
                    <div className='nav-img'>
                      <img src='icons/bookmark.svg' width='19' alt='' />
                    </div>
                    <div className='nav-text'>
                      <span>Yer İşaretleri</span>
                    </div>
                  </div>
                </a>

                <a class='navlink' href='/lists'>
                  <div className='nav-img-text'>
                    <div className='nav-img'>
                      <img src='icons/list.svg' width='22' alt='' />
                    </div>
                    <div className='nav-text'>
                      <span>Listeler</span>
                    </div>
                  </div>
                </a>

                <a class='navlink' href='/profile'>
                  <div className='nav-img-text'>
                    <div className='nav-img'>
                      <img src='icons/person.svg' width='22' alt='' />
                    </div>
                    <div className='nav-text'>
                      <span>Profil</span>
                    </div>
                  </div>
                </a>

                <a class='navlink' href='/more'>
                  <div className='nav-img-text'>
                    <div className='nav-img'>
                      <img src='icons/threedot.svg' width='22' alt='' />
                    </div>
                    <div className='nav-text'>
                      <span>Daha fazla</span>
                    </div>
                  </div>
                </a>
                <button class='navlinkt' href='/tweet'>
                  Tweetle
                </button>
              </nav>
              <button type='button' class='btn btn-xlg'>
                <img src='icons/person.svg' width='25' alt='' />
                <div className='user'>
                  <div className='userName'>User</div>
                  <div className='userEmail'>@User</div>
                </div>
                <img class='more' src='icons/threedot.svg' width='20' alt='' />
              </button>
            </div>
          </div>
          <div className='col-7'>
            <div className='maincol'>
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
                      <span className='username'>
                        <span>M.Serdar Kuzuloğlu </span>{' '}
                        <span class='userm'>@mserdark</span>
                      </span>
                      <p className='article'>
                        #BugünÖğrendimKi (Türkiye’de) Türkiye’nin Batı
                        ülkelerine benzemesini isteyenlerin oranı yüzde 62’den
                        yüzde 70’e çıkarken, müslüman bir ülkeye benzemesini
                        isteyenlerin oranıysa yüzde 5’ten yüzde 1’e inmiş. (
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
                      <img
                        src='/icons/like.svg'
                        alt=''
                        width='15'
                        className='tweetbtn'
                      />
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
                        #BugünÖğrendimKi (Türkiye’de) Türkiye’nin Batı
                        ülkelerine benzemesini isteyenlerin oranı yüzde 62’den
                        yüzde 70’e çıkarken, müslüman bir ülkeye benzemesini
                        isteyenlerin oranıysa yüzde 5’ten yüzde 1’e inmiş. (
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
                      <img
                        src='/icons/like.svg'
                        alt=''
                        width='15'
                        className='tweetbtn'
                      />
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
                        #BugünÖğrendimKi (Türkiye’de) Türkiye’nin Batı
                        ülkelerine benzemesini isteyenlerin oranı yüzde 62’den
                        yüzde 70’e çıkarken, müslüman bir ülkeye benzemesini
                        isteyenlerin oranıysa yüzde 5’ten yüzde 1’e inmiş. (
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
                      <img
                        src='/icons/like.svg'
                        alt=''
                        width='15'
                        className='tweetbtn'
                      />
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
                        #BugünÖğrendimKi (Türkiye’de) Türkiye’nin Batı
                        ülkelerine benzemesini isteyenlerin oranı yüzde 62’den
                        yüzde 70’e çıkarken, müslüman bir ülkeye benzemesini
                        isteyenlerin oranıysa yüzde 5’ten yüzde 1’e inmiş. (
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
                      <img
                        src='/icons/like.svg'
                        alt=''
                        width='15'
                        className='tweetbtn'
                      />
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
                        #BugünÖğrendimKi (Türkiye’de) Türkiye’nin Batı
                        ülkelerine benzemesini isteyenlerin oranı yüzde 62’den
                        yüzde 70’e çıkarken, müslüman bir ülkeye benzemesini
                        isteyenlerin oranıysa yüzde 5’ten yüzde 1’e inmiş. (
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
                      <img
                        src='/icons/like.svg'
                        alt=''
                        width='15'
                        className='tweetbtn'
                      />
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
                    <p className='abouttweetbtn'>45</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='col'>
            <div className='rightdiv'>
              <div className='search'>
                <div className='searchbar'>
                  <img
                    src='icons/search.svg'
                    width='18'
                    alt=''
                    style={{ marginLeft: '15px' }}
                  />

                  <input
                    class='form-control mr-sm-2 '
                    id='searchinput'
                    type='search'
                    placeholder="Twitter'da ara"
                    aria-label='search'
                  />
                </div>
              </div>
              <div className='daily'>
                <div className='interesting'>
                  <span class='interestingtext'>
                    İlgini çekebilecek gündemler
                  </span>
                  <div className='interestingimg'>
                    <a href='/settings'>
                      <img src='/icons/settings.svg' alt='' />
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
      </div>
    );
  }
}
const mapStateToProps = (state) => {};

export default withRouter(connect(mapStateToProps, {})(HomePage));
