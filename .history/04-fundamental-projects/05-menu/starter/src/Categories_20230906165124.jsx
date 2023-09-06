const Categories = ({ categories }) => {
  return (
    <div className='btn-container'>
      {categories.map((category) => {
        return <button type='button' className='btn'></button>;
      })}
    </div>
  );
};

export default Categories;
