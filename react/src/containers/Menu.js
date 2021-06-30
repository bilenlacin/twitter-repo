import '../components/header.css';
import React, { Component } from 'react';
import '../containers/note-list.css';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchProfile } from '../action-creators';
export class Menu extends Component {
  componentDidMount() {
    this.props.fetchProfile();
  }

  profilName = () => {
    const profile = this.props;
    return profile.profile.map((profils) => {
      return profils.name;
    });
  };
  profileImg = () => {
    const profile = this.props;
    return profile.profile.map((profils) => {
      return profils.img;
    });
  };
  profileMail = () => {
    const profile = this.props;
    return profile.profile.map((profils) => {
      return profils.email;
    });
  };
  render() {
    return (
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
          <img
            class='rounded-circle'
            src={this.profileImg()}
            width='45'
            alt=''
          />
          <div className='user'>
            <div className='userName'>{this.profilName()}</div>
            <div className='userEmail'>{this.profileMail()}</div>
          </div>
          <img class='more' src='icons/threedot.svg' width='20' alt='' />
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const profile = state.profile;
  return profile;
};

export default withRouter(
  connect(mapStateToProps, { fetchProfile: fetchProfile })(Menu)
);
