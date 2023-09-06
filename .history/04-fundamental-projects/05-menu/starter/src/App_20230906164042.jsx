import { useState } from 'react';
import Title from './Title';
import menuItem from './data';

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  return (
    <main>
      <section className='menu'>
        <Title text='our menu' />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
