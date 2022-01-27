import golf11 from "../images/golf11.jpg";
import golf22 from "../images/golf22.jpg";
import golf33 from "../images/golf33.jpg";
import golf44 from "../images/golf44.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"

import "./Styles.scss";


// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);


export default function Firstpage() {
  
  
  

  return (
    
    <Swiper navigation={true} className="swiperimg">
  <div>
    <SwiperSlide style={{ backgroundImage: `url(${golf11})`}}>
    <div className="content">
             <h3>We Golf like Legends</h3>
             <p>Playing the game for the benefit of the society</p>
             <a href className="btn">Get started</a>
             </div>
       </SwiperSlide></div>
       <div>
         <SwiperSlide style={{ backgroundImage: `url(${golf22})`}}>
           <div className="content">
             <h3>We Golf like Legends</h3>
             <p>Playing the game for the benefit of the society</p>
             <a href className="btn">Get started</a>
             </div>
             </SwiperSlide></div> 
             <div><SwiperSlide style={{ backgroundImage: `url(${golf33})`}}>    <div className="content">
             <h3>We Golf like Legends</h3>
             <p>Playing the game for the benefit of the society</p>
             <a href className="btn">Get started</a>
             </div>
       </SwiperSlide></div> 
             <div><SwiperSlide style={{ backgroundImage: `url(${golf44})`}}>    <div className="content">
             <h3>We Golf like Legends</h3>
             <p>Playing the game for the benefit of the society</p>
             <a href className="btn">Get started</a>
             </div>
       </SwiperSlide></div>
  </Swiper>

  )
}