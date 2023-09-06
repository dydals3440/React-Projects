import { useState } from 'react';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
    }
  }

  useEffect(() => {

  }, []);

  return <h2>Tours Starter</h2>;
};
export default App;
