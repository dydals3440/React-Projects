import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './store/context';

export const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className='modal-overlay'>
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn'></button>
      </div>
    </div>
  );
};
