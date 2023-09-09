const ButtonContainer = ({ jobs, currentItem, setCurrentItem }) => {
  console.log(setCurrentItem);
  return (
    <div className='btn-container'>
      {jobs.map((job) => (
        <button key={job.id} className='job-btn' onClick={() => setCurrentItem}>
          {job.company}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
