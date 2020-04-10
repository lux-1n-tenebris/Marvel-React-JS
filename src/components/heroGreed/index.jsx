import React from "react";
import HeroCard from './heroCard/'

const heroGreed = (props) => {
  console.log("heroGreed props", props);
  return (
    <div className="container">
      {props.heroes.map(hero => (
        <HeroCard hero={hero} key={hero.id}/>
      ))}
    </div>
  )
};

export default heroGreed;
