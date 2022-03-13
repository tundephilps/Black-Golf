
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "./Styles.scss";

import golf111 from '../images/golf111.jpg';
import golf222 from '../images/golf222.jpg';
import golf333 from '../images/golf333.jpg';
import golf444 from '../images/golf444.jpg';
import golf555 from '../images/golf555.jpg';


// import Swiper core and required modules
import SwiperCore, {
  FreeMode,Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([FreeMode,Pagination]);


export default function App() {
  
  
  
  return (
    <section className="blogs" id="News">
    <Swiper slidesPerView={3} spaceBetween={1} freeMode={true} pagination={{
  "clickable": true, breakpoints: {450:{slidesPerView:1}}
}} className="Swipe">
  <SwiperSlide className="slide"> <div className='image'>
                        <img src={golf111} alt=""></img>

                    </div>
                    <div className='contents'>
                        <h3>Prikles Cup Annouces resumption </h3>
                        <p>latest about the champion named Tiger woods</p>
                        <a href="/#" className='btn'>Read more</a>
                    </div>
</SwiperSlide>
<SwiperSlide className="slide"><div className='image'>
                        <img src={golf222} alt=""></img>

                    </div>
                    <div className='contents'>
                        <h3>Alonso Marks 6 Years Title Undefeated</h3>
                        <p>latest about the champion named Tiger woods</p>
                        <a href="/#" className='btn'>Read more</a>
                    </div></SwiperSlide>
                    <SwiperSlide className="slide">
                    <div className='image'>
                        <img src={golf333} alt=""></img>

                    </div>
                    <div className='contents'>
                        <h3>New Course Acquired by state</h3>
                        <p>latest about the champion named Tiger woods</p>
                        <a href="/#" className='btn'>Read more</a>
                    </div>
                      </SwiperSlide>
                      <SwiperSlide className="slide"><div className='image'>
                        <img src={golf444} alt=""></img>

                    </div>
                    <div className='contents'>
                        <h3>Green Eyes the Channels Cup</h3>
                        <p>latest about the champion named Tiger woods</p>
                        <a href="/#" className='btn'>Read more</a>
                    </div></SwiperSlide><SwiperSlide className="slide"><div className='image'>
                        <img src={golf555} alt=""></img>

                    </div>
                    <div className='contents'>
                        <h3>Will Tiger Renew His Contract?</h3>
                        <p>latest about the champion named Tiger woods</p>
                        <a href="/#" className='btn'>Read more</a>
                    </div></SwiperSlide>
                    </Swiper>
    </section>
  )
}
