import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Menu from '../components/Menu';
import './note-list.css';
import Timeline from '../components/Timeline';
import Daily from '../components/Daily';

class HomePage extends React.Component {
  render() {
    return (
      <div class='container'>
        <div class='row'>
          <div className='col-2'>
            <Menu />
          </div>
          <div className='col-7'>
            <Timeline />
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
