import { useState } from 'react';
import people from './data';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[2];
  console.log(name);
  return <h2>Reviews Starter</h2>;
};
export default App;
