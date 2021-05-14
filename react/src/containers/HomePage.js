import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Menu from '../components/Menu';
import './note-list.css';

import Daily from '../components/Daily';
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
            <Daily />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {};

export default withRouter(connect(mapStateToProps, {})(HomePage));
