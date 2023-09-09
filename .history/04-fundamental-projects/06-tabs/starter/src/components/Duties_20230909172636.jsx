const Duties = ({ duties }) => {
  console.log(duties);
  return {duties.map(duty => <div>{duty}</div>)}
};

export default Duties;
