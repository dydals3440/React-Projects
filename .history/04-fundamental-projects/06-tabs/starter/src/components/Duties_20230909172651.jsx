const Duties = ({ duties }) => {
  console.log(duties);
  return (
    <div>
      {duties.map((duty) => (
        <div>{duty}</div>
      ))}
    </div>
  );
};

export default Duties;
