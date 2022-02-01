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
        {/* on change, set the sloganInput in state to be the input value */}
        {/* also, weirdly, set the value of this input to the sloganInput tracked in state to make this a 'controlled' form input */}
        <input onChange={({ target }) => setSloganInput(target.value) }/>

        <button>Submit</button>
      </form>
    </section>
  );
}
