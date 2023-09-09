import { useEffect } from 'react';
import { useState } from 'react';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  // currentItem
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);
  return <h2>Tabs Starter</h2>;
};
export default App;
