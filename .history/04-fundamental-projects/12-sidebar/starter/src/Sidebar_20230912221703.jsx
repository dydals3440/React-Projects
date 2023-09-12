import logo from './logo.svg';
import { social, links } from './data';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './store/context';

export const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className='sidebar'>
      <div className='sidebar-header'>
        <img src={logo} alt='Coding Addict' className='logo' />
        <button className='close-btn'></button>
      </div>
    </aside>
  );
};
