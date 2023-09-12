import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './store/context';

export const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return <div className='modal-overlay'>Modal</div>;
};
