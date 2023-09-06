const Person = ({ name, age, image }) => {
  return (
    <article className='person'>
      <img src={image} alt={name} />
      <div>
        <span>{name}</span>
        <span>{age}</span>
      </div>
    </article>
  );
};

export default Person;
