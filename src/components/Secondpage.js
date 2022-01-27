import React from 'react';
import golf1 from "../images/golf1.jpg";
import './Styles.scss';

function Secondpage() {
    return (<section className='about'>
            <h1 className="heading"> About us </h1>
        <div className='row'>
            <div className='video'>
                <img src={golf1} alt=''></img>

            </div>
<div className='contents'>
    <h3>We aim to please</h3>
    <p>We will provide the best leisure you dream of in the whole of New york</p>
    <a href="#services" className='btn'>Read more</a>

</div>
        </div>

        <div className='box-container'>
            <div className='box'>
                <h3>$1500</h3>
                <p>Vibranium Package</p>
            </div>

            <div className='box'>
                <h3>$1200</h3>
                <p>Gold Package</p>
            </div>

            <div className='box'>
                <h3>$800</h3>
                <p>Silver Package</p>
            </div>

            <div className='box'>
                <h3>$500</h3>
                <p>Bronze Package</p>
            </div>

        </div>

    </section>  );
}

export default Secondpage;