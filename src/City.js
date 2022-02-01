import React from 'react';

export default function City({ castleId, skylineId, waterFrontId }) {
  return (
    <div className="city">
      {/* this component should take 3 props: waterfrontId, skylineId, and castlId */}
      {/* use these 3 ids in img tags load approriate images that live in the public directory */}
      <img className='city-image' src={`castle-${castleId}.jpeg`} />
      <img className='city-image' src={`skyline-${skylineId}.jpeg`} />
      <img className='city-image' src={`waterfront-${waterFrontId}.jpeg`} />
    </div>
  );
}
