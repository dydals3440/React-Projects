import { FaAngleDoubleRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const Duties = ({ duties }) => {
  const id = uuidv4();
  return (
    <div>
      {duties.map((duty, index) => (
        <div key={index} className='job-desc'>
          <FaAngleDoubleRight className='job-icon' />
          <p>{duty}</p>
        </div>
      ))}
    </div>
  );
};

export default Duties;
