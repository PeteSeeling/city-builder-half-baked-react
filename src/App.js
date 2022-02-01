import { useState } from 'react';
import './App.css';
import SkylineDropdown from './SkylineDropdown';
import WaterfrontDropdown from './WaterfrontDropdown';
import CastleDropdown from './CastleDropdown';
import SloganList from './SloganList';
import SloganForm from './SloganForm';
import CityNameInput from './CityNameInput';
import City from './City';

function App() {
  // track some state here.
  const [setCastleId, castleId] = useState(1);
  const [setSkylineId, skylineId] = useState(1);
  const [setWaterfrontId, waterFrontId] = useState(1);
  // You'll need to keep track of a skylineId, waterfrontId, and castleId. All these start out as 1
  // you'll need to track a city name, which starts as the city name of your choice.
  const [cityName, setCityName] = useState('Denver');
  // finally, you'll need an array of slogans, which could start out as ['The City of Excellence'] for example
  const [slogans, setSlogans] = useState(['Rocky Mountains']);

  return (
    <div className="App">
      {/* here, the City component takes in skylineId, waterfrontId, castleId as props. It'll use those ids to render pictures correctly. */}
      <City castleId={castleId} skylineId={skylineId} waterFrontId={waterFrontId}/>
      <h1>
        {/* dynamically update the city name here using state */}
        Welcome to beautiful {cityName}!
      </h1>
      <div className='bottom'>
        <CityNameInput setCityName={setCityName} />
        {/* here, the CityNameInput component takes in the setCityName state handler function */}
        <section className='dropdowns'>
          {/* 
          render all three Dropdown components (WaterfrontDropdown, SkylineDropdown, CastleDropdown) here. 
          
          In each Dropdown, pass as props the state handler functions defined above, so that these child components can manipulate parent state 
          */}
          <div>
            <CastleDropdown setCastleId={setCastleId} />
            <SkylineDropdown setSkylineId={setSkylineId} />
            <WaterfrontDropdown setWaterfrontId={setWaterfrontId} />
        
          </div>
        </section>
        {/* here, the SloganForm component takes in the setSlogans state handler function and the slogans array that live in state */}
        <SloganForm setSlogans={setSlogans} slogans={slogans} />
        <SloganList slogans={slogans} />

        {/* here, the SloganList component takes the array of slogans that lives in state */}

      </div>
    </div>
  );
}

export default App;
