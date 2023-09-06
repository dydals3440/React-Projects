const Person = ({ name, age, image }) => {
  return (
    <article className='person'>
      <img src={image} alt={name} />
      <span>{name}</span>
    </article>
  );
};

export default Person;
