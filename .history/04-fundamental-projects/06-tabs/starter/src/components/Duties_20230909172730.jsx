import { FaAngleDoubleRight } from 'react-icons/fa';

const Duties = ({ duties }) => {
  console.log(duties);
  return (
    <div>
      {duties.map((duty) => (
        <div>
          <FaAngleDoubleRight />
          {duty}
        </div>
      ))}
    </div>
  );
};

export default Duties;