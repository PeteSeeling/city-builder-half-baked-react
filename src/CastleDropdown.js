import React from 'react';

export default function CastleDropdown({ setCastleId }) {
  function handleChange(e){
    setCastleId(e.target.value);
  }
  return (
    <div>
      Select a Castle
      <select onChange={handleChange}>
        <option value="1">Serious</option>
        <option value="2">Mysterious</option>
        <option value="3">Regal</option>
      </select>
    </div>
  );
}
