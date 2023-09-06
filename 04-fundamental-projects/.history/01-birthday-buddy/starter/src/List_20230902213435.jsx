const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.key} />;
      })}
    </section>
  );
};

export default List;
