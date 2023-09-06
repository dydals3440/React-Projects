const Person = ({ name, age, image }) => {
  return (
    <article className='person'>
      <img src={image} alt={name}></img>
    </article>
  );
};

export default Person;
