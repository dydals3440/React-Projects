import { useEffect } from 'react';
import { useState } from 'react';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  // currentItem

  const fetchJobs = async () => {
    const response = await fetch(url);
    const data = response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  return <h2>Tabs Starter</h2>;
};
export default App;
