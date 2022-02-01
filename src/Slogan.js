import React from 'react';

export default function Slogan({ setSlogans }) {
  function handleChange(e){
    setSlogans(e.target.value);
  }
  return (
    <div className='slogan'>
      City Slogan:
      <input onChange={handleChange} />
      {/* this component takes in a slogan as a prop. Render it out here however you like */}
    </div>
  );
}
