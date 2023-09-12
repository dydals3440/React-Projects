import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './store/context';

export const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  console.log(openSidebar);
  return <div>Home</div>;
};
