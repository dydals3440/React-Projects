import { useState } from 'react';
import data from './data';

const App = () => {
  const [people, setPeople] = useState(data);
  console.log(people);
  return (
    <main>
      <section className='container'>
        <h3>{`${people.length} Birthdays Today`}</h3>
        <List people={people} />
      </section>
    </main>
  );
};
export default App;
