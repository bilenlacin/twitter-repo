import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  fetchTweets,
  insertTweet,
  fetchProfile,
  increaseTweetLike,
} from '../action-creators';
import Tweetbar from '../components/Tweetbar';
import Tweet from '../components/Tweet';

// import { fireEvent } from '@testing-library/dom';

export class TweetContainer extends Component {
  componentDidMount() {
    this.props.fetchTweets();
    this.props.fetchProfile();
  }
  tweetPush = () => {
    const { tweets } = this.props;
    if (typeof tweets === 'undefined') {
      return;
    }
    return tweets.map((tweet) => {
      return (
        <Tweet tweet={tweet} increaseTweetLike={this.props.increaseTweetLike} />
      );
    });
  };

  profilePush = () => {
    const profile = this.props;
    if (this.props.profile.length !== 0) {
      return profile.profile.map((profils) => {
        return (
          <Tweetbar profils={profils} insertTweet={this.props.insertTweet} />
        );
      });
    }
  };
  render() {
    return (
      <div className='maincol'>
        {this.profilePush()}
        <div className='brace'></div>

        <div className='tweets'>{this.tweetPush()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { tweets } = state.tweets;
  const { profile } = state.profile;
  return { tweets, profile };
};

export default withRouter(
  connect(mapStateToProps, {
    fetchTweets: fetchTweets,
    insertTweet: insertTweet,
    fetchProfile: fetchProfile,
    increaseTweetLike: increaseTweetLike,
  })(TweetContainer)
);
