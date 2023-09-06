import React from 'react';

export default function Tour({ id, image, info, name, price }) {
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
    </article>
  );
}
