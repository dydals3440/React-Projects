import { useState } from 'react';
import data from './data';
import List from './List';

const App = () => {
  const [people, setPeople] = useState(data);
  console.log(people);
  return (
    <main>
      <section className='container'>
        <h3>{`${people.length} Birthdays Today`}</h3>
        <List people={people} />
      </section>
      <button>Clear All</button>
    </main>
  );
};
export default App;
