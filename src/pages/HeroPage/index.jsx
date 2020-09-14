import React from 'react';
import axios from 'axios';
import config from 'config/';
import './hero.scss';
import HeroGreed from 'components/heroGreed/'
import Loader from 'global/loader/';

let timeout = null;

class Hero extends React.Component {
  // constructor(props) {
  //   super(props);
  state = {
    error: null,
    isLoaded: false,
    heroes: []
  };
  // }

  handleSearch = e => {
    let search = e.target.value;

    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      axios.get(config.url + config.name + search + config.publicApi + config.hash + config.timeStamp)
        .then(res => {
          const heroes = res.data.data.results;
          this.setState({
            isLoaded: true,
            heroes
          });
        }, error => {
          console.log(error)
        });
    }, 500);
  };

  render() {
    const {isLoaded, search, heroes} = this.state;

    return (
      <div className="Hero">
        <div className="search">
          <input type="text" onChange={this.handleSearch} className="heroInput"
                 placeholder="please enter a hero name"/>
        </div>
        {isLoaded === false && search !== "" && (
          <Loader/>
        )}
        {search !== "" && (
          <HeroGreed heroes={heroes}/>
        )}
      </div>
    )
  }
}

export default Hero;
