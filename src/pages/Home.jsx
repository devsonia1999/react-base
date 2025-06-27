import React, { useEffect, useState } from 'react';
// swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// api
import { searchBook } from '@/services/naverService';
// css
import '@/assets/styles/home.scss';

function Home() {
  const [books, setBooks] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookData = await searchBook("한강",7);
        setBooks(bookData.data.items);
      } catch (error) {
        console.error('error:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className='visualCon'>
        {books[activeIndex] && (
          <h2 className='title'><span>{books[activeIndex].author}</span> 작가님 TOP7</h2>
        )}
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          loop={true}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          {books.map((book, index) => (
            <SwiperSlide key={index}>
              <div className='slideCard'>
                <img className='bookImg' src={book.image} alt={book.title} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {books[activeIndex] && (
          <p className='tit'>{books[activeIndex].title.replace(/\(/g, '\n(')}</p>
        )}
      </div>

      <div className="contents">
        
      </div>
    </>
  );
}

export default Home;
