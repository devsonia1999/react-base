import React, { useEffect } from 'react';
// swiper
import 'swiper/css';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// api
import { searchBook } from '@/services/naverService';
// css
import '@/assets/styles/home.scss';

function Home() {
  // 네이버 책 검색 API 호출 함수
  const [books, setBooks] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookData = await searchBook("한강");
        console.log('검색 결과:', bookData);
        console.log(bookData.data.items);
        setBooks(bookData.data.items);
      } catch (error) {
        console.error('error:', error);
      }
    };
    // 데이터 가져오기
    fetchData();
  }, []);

  return (
    <>
      <div className='visualCon'>
        <Swiper 
          effect={'coverflow'} 
          grabCursor={true} 
          centeredSlides={true} 
          slidesPerView={2}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true} modules={[EffectCoverflow, Pagination]} 
          className="mySwiper">
          {books.map((book, index) => (
            <SwiperSlide>
              <div className='slideCard'>
                <img key={index} className='bookImg' src={book.image} alt={book.title} />
                <p className='tit'>{book.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="contents">
        
      </div>
    </>
  );
}

export default Home
