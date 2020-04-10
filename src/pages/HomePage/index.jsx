import React from 'react';
import axios from 'axios';
import config from 'config/';
import './home.scss';
import HeroGreed from 'components/heroGreed/';
import Loader from 'global/loader/';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      heroes: []
    };
  }

  componentDidMount() {
    axios.get(config.url + config.publicApi + config.hash + config.timeStamp)
      .then(res => {
        console.log(res);
        const heroes = res.data.data.results;
        this.setState({
          isLoaded: true,
          heroes
        });
      }, error => {
        console.log(error)
      });
  }

  render() {
    const isLoaded = this.state.isLoaded;

    if (isLoaded === false) {
      return (
        <div className="Home">
          <div className="mainDiv">
            <Loader />
          </div>
        </div>
      )
    } else {
      return (
        <div className="Home">
          <div className="heroImage">
            <div className="hImage">
            </div>
          </div>
          <div className="mainDiv">
            <HeroGreed heroes={this.state.heroes}/>
          </div>
        </div>
      )
    }
  }
}

export default Home;
