import { useState } from 'react';
import people from './data';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  console.log(name);
  return (
    <div>
      <h2>Reviews Starter</h2>
      <FaBeer className='beer' />
    </div>
  );
};
export default App;
