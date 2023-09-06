const MenuItem = ({ img, title, price, desc }) => {
  return (
    <article className='menu-item'>
      <img src={img} alt='' />
    </article>
  );
};

export default MenuItem;
