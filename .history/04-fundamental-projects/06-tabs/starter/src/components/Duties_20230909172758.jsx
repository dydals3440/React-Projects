import { FaAngleDoubleRight } from 'react-icons/fa';

const Duties = ({ duties }) => {
  console.log(duties);
  return (
    <div>
      {duties.map((duty, index) => (
        <div key={index}>
          <FaAngleDoubleRight />
          {duty}
        </div>
      ))}
    </div>
  );
};

export default Duties;