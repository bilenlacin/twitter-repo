import React from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import Menu from './Menu';
import './note-list.css';

import DailyContainer from './DailyContainer';
import TweetContainer from './TweetContainer';

class HomePage extends React.Component {
  render() {
    return (
      <div class='container'>
        <div class='row'>
          <div className='col-2'>
            <Menu />
          </div>
          <div className='col-7'>
            <TweetContainer />
          </div>
          <div class='col'>
            <DailyContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
