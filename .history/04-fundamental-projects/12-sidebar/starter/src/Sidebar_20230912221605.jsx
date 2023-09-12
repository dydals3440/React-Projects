import logo from './logo.svg';
import { social, links } from './data';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './store/context';

export const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return <div>Sidebar</div>;
};
