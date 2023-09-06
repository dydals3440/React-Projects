import { useState } from 'react';
import Title from './Title';
import menu from './data';
import Menu from './Menu';

const tempCategories = menu.map((item) => item.category);
// 중복된 카테고리를 제외!
const tempSet = new Set(tempCategories);
const tempItems = ['all', ...tempSet];
console.log(tempItems);

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
