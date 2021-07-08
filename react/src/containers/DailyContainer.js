import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchDailyNews, filterTweets } from '../action-creators';
import Search from '../components/Search';
import Dailynews from '../components/Dailynews';
import { fireEvent } from '@testing-library/dom';

export class DailyContainer extends Component {
  componentDidMount() {
    this.props.fetchDailyNews();
  }

  render() {
    const { tweets } = this.props;
    return (
      <div className='rightdiv'>
        <Search filterTweets={this.props.filterTweets} tweets={tweets} />
        <Dailynews dailyNews={this.props.dailyNews} />
        <div className='followwho'>
          <h4>Kimi takip etmeli</h4>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { dailyNews } = state.daily;
  const { tweets } = state.tweets;
  return { dailyNews, tweets };
};

export default withRouter(
  connect(mapStateToProps, {
    fetchDailyNews: fetchDailyNews,
    filterTweets: filterTweets,
  })(DailyContainer)
);
