const Person = ({ name, age, image }) => {
  return (
    <article className='person'>
      <img src={image} alt={name} />
      <span>{name}</span>
      <span>{age}</span>
    </article>
  );
};

export default Person;
