import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
<<<<<<< HEAD
import { fetchDailyNews, filterTweets } from '../action-creators';
=======
import { fetchDailyNews } from '../action-creators';
>>>>>>> c2884ededbe4fd49e717ff353b57a6c3d11170cf

import Search from '../components/Search';
import Dailynews from '../components/Dailynews';
// import { fireEvent } from '@testing-library/dom';

export class DailyContainer extends Component {
  componentDidMount() {
    this.props.fetchDailyNews();
  }

  render() {
    return (
      <div className='rightdiv'>
<<<<<<< HEAD
        <Search filterTweets={this.props.filterTweets} />
=======
        <Search />
>>>>>>> c2884ededbe4fd49e717ff353b57a6c3d11170cf
        <Dailynews dailyNews={this.props.dailyNews} />

        <div className='followwho'>
          <h4>Kimi takip etmeli</h4>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const dailyNews = state.daily;
  return dailyNews;
};

export default withRouter(
  connect(mapStateToProps, {
    fetchDailyNews: fetchDailyNews,
<<<<<<< HEAD
    filterTweets: filterTweets,
=======
>>>>>>> c2884ededbe4fd49e717ff353b57a6c3d11170cf
  })(DailyContainer)
);
