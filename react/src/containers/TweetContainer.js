import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchTweets } from '../action-creators';
import Tweetbar from '../components/Tweetbar';
import Tweet from '../components/Tweet';
import { fireEvent } from '@testing-library/dom';

export class TweetContainer extends Component {
  componentDidMount() {
    this.props.fetchTweets();
  }
  tweetPush = () => {
    const { tweets } = this.props;
    tweets.map((tweet) => {
      console.log(tweet);
    });
  };
  render() {
    return (
      <div className='maincol'>
        <Tweetbar />
        <div className='brace'></div>

        <div className='tweets'>
          {this.tweetPush()}

          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const tweets = state.tweets;
  return tweets;
};

export default withRouter(
  connect(mapStateToProps, { fetchTweets: fetchTweets })(TweetContainer)
);
