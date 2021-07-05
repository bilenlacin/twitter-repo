import React, { Component } from 'react';
import Dailytweetnews from './Dailytweetnews';

export class Dailynews extends Component {
  dailyNewsShow() {
    const dailyNews = this.props;

    if (this.props.dailyNews) {
      return dailyNews.dailyNews.map((dailynew) => {
        return <Dailytweetnews dailynew={dailynew} />;
      });
    }
  }

  render() {
    return (
      <div className='daily'>
        <div className='interesting'>
          <span class='interestingtext'>İlgini çekebilecek gündemler</span>
          <div className='interestingimg'>
            <a href='/settings'>
              <img src='/icons/settings.svg' alt='' />
            </a>
          </div>
        </div>
        {this.dailyNewsShow()}
<<<<<<< HEAD
=======

        {/* <Dailytweetnews dailyNews={this.props.dailyNews} />
        <Dailytweetnews dailyNews={this.props.dailyNews} />
        <Dailytweetnews dailyNews={this.props.dailyNews} />
        <Dailytweetnews dailyNews={this.props.dailyNews} />
        <Dailytweetnews dailyNews={this.props.dailyNews} /> */}
>>>>>>> c2884ededbe4fd49e717ff353b57a6c3d11170cf
      </div>
    );
  }
}

export default Dailynews;
