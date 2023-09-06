const List = ({ people }) => {
  return <section>
    {people.map((person) => {
        return <Person key={}/>
    })}
  </section>
};

export default List;
