import { useState } from 'react';

export default function SloganForm({ setSlogans, slogans }) {
  // React forms are a pain! 
  const [sloganInput, setSloganInput] = useState('');
  // Track the sloganInput form state with a useState hook
    
  function handleSubmit(e) {
    e.preventDefault();
    setSlogans([...slogans, sloganInput]);
    setSloganInput('');

  }

  return (
    <section>
      {/* on submit, call the handleSubmit function, defined above */}
      <form onSubmit={handleSubmit}>
        Add a slogan to the list!
        
        <input onChange={({ target }) => setSloganInput(target.value) }/>

        <button>Submit</button>
      </form>
    </section>
  );
}
