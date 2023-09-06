import { useState } from 'react';
import Title from './Title';

const App = () => {
  const [menu, setMenu] = useState(menu);
  return (
    <main>
      <section className='menu'>
        <Title text='our menu' />
      </section>
    </main>
  );
};
export default App;
