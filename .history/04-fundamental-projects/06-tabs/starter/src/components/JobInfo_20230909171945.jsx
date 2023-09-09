const JobInfo = ({ jobs }) => {
  const { company, date, duties, title } = jobs[0];

  return (
    <article className='job-info'>
      <h3>{title}</h3>
      <span className='job-company'></span>
    </article>
  );
};

export default JobInfo;
