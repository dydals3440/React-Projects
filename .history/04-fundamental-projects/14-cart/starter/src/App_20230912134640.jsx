// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useGlobalContext } from './store/context';

function App() {
  const { loading } = useGlobalContext();
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
