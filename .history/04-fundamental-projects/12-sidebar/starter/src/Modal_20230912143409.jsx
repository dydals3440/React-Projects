import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './store/context';

export const Modal = () => {
  useGlobalContext();
  return <div>Modal</div>;
};
