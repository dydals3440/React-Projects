import React from 'react';
import Tour from './Tour';

export default function Tours({ tours, removeTours }) {
  console.log(tours);
  return (
    <section>
      <div className='title'>
        <h2>our Tours</h2>
        <div className='title-underline'></div>
      </div>
      <div className='tours'>
        {tours.map((tour) => {
          return <Tour key={tour.id} removeTours={removeTours} {...tour} />;
        })}
      </div>
    </section>
  );
}