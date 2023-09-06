import { useState } from 'react';
import data from './data';

const App = () => {
  const [people, setPeople] = useState(data);
  console.log(people);
  return (
    <main>
      <section className='container'>
        <h2>{`${people.length} Birthdays Today`}</h2>;
      </section>
    </main>
  );
};
export default App;
