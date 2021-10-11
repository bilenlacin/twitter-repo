import React, { Component } from 'react';

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
  onSubmit = (event) => {
    if (event.key === 'Enter') {
      const text = this.state;

      this.props.filterTweets(text);
    }
  };
  render() {
    return (
      <div className='search'>
        <div className='searchbar'>
          <img
            src='icons/search.svg'
            width='18'
            alt=''
            style={{ marginLeft: '15px' }}
            onClick={this.onClick}
          />

          <input
            class='form-control mr-sm-2 '
            id='searchinput'
            type='text'
            placeholder="Twitter'da ara"
            aria-label='search'
            value={this.state.text}
            onChange={this.onChange}
            onKeyUp={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

export default Search;
