import { useState } from 'react';
import { shortList, list, longList } from '../data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useEffect } from 'react';

const Carousel = () => {
  // list는 slider-container가 position:absolute이기때문에 다 겹쳐있음.
  const [people, setPeople] = useState(list);
  // slider Next, Prev 기능을 위해 상태 추가
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };

  // Auto Slide
  useEffect(() => {
    // 2초마다, 슬라이드 반복
    let sliderId = setInterval(() => {
      nextSlide();
    }, 2000);
    // prev/next를 눌렀을떄 타이머를 0으로 설정해주는 작업이 필요! 안그러면 클릭할시 바로 자동 슬라이드가 나옴 ㅠㅠ 그렇게할려면 current person을 디펜던시에 넣어야함, 그래야 이 값이 바뀔떄마다, setInterval을 호출!
    // 이걸 안해주면 여러번 버튼을 클릭했을때, 슬라이드에 오류가생김
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  return (
    <section className='slider-container'>
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className='slide'
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? 'visible' : 'hidden',
            }}
            key={id}
          >
            <img src={image} alt={name} className='person-img' />
            <h5 className='name'>{name}</h5>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        );
      })}
      <button type='button' className='prev' onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type='button' className='next' onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
