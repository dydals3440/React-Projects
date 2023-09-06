const Person = ({ name, age, image }) => {
  return (
    <article className='person'>
      <img src={image} alt={name} />
    </article>
  );
};

export default Person;
