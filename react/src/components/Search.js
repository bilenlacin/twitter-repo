import React, { Component } from 'react';

export class Search extends Component {
  render() {
    return (
      <div className='search'>
        <div className='searchbar'>
          <img
            src='icons/search.svg'
            width='18'
            alt=''
            style={{ marginLeft: '15px' }}
          />

          <input
            class='form-control mr-sm-2 '
            id='searchinput'
            type='search'
            placeholder="Twitter'da ara"
            aria-label='search'
          />
        </div>
      </div>
    );
  }
}

export default Search;
