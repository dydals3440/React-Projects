import React, { useState } from 'react';

export default function Tour({ id, image, info, name, price, removeTour }) {
  // 더 읽기 기능 구현
  const [readMore, setReadMore] = useState(false);
  const handleReadMore = () => {
    setReadMore((prev) => !prev);
  };
  console.log(info.substring(0, 10));
  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>

        <button
          type='button'
          className='btn btn-block delete-btn'
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
}
