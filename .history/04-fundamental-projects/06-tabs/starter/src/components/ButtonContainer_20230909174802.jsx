const ButtonContainer = ({ jobs, currentItem, setCurrentItem }) => {
  console.log(setCurrentItem);
  return (
    <div className='btn-container'>
      {jobs.map((job, index) => (
        <button
          key={job.id}
          className='job-btn'
          onClick={() => setCurrentItem(index)}
        >
          {job.company}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
