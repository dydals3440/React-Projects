const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.key} {...props} />;
      })}
    </section>
  );
};

export default List;
