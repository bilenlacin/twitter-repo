import React, { Component } from 'react';
<<<<<<< HEAD
import { filterTweets } from '../action-creators';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  onChange = (event) => {
    this.setState({ text: event.target.value });
  };
  onClick = () => {
    const text = this.state;
    this.props.filterTweets(text);
  };
=======

export class Search extends Component {
>>>>>>> c2884ededbe4fd49e717ff353b57a6c3d11170cf
  render() {
    return (
      <div className='search'>
        <div className='searchbar'>
          <img
            src='icons/search.svg'
            width='18'
            alt=''
            style={{ marginLeft: '15px' }}
<<<<<<< HEAD
            onClick={this.onClick}
=======
>>>>>>> c2884ededbe4fd49e717ff353b57a6c3d11170cf
          />

          <input
            class='form-control mr-sm-2 '
            id='searchinput'
<<<<<<< HEAD
            type='text'
            placeholder="Twitter'da ara"
            aria-label='search'
            value={this.state.text}
            onChange={this.onChange}
=======
            type='search'
            placeholder="Twitter'da ara"
            aria-label='search'
>>>>>>> c2884ededbe4fd49e717ff353b57a6c3d11170cf
          />
        </div>
      </div>
    );
  }
}

export default Search;
