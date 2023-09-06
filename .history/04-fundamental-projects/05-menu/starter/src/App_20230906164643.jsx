import { useState } from 'react';
import Title from './Title';
import menu from './data';
import Menu from './Menu';

const tempCategories = menu.map((item) => item.category);
console.log(new Set(tempCategories));

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
