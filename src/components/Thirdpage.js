
import './Styles.scss';



function Back() {
    return ( <section className='contact'>
        <h1 className="heading"> Contact Us</h1>
<div className="row">
<iframe
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.25987584510595!3d40.69767006338158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sng!4v1643149971858!5m2!1sen!2sng" 
  style={{ border:0, height: "600px", width: "800px" }} allowFullScreen="" loading="lazy" title='map'>

 </iframe>

<form action=''>
<h3>Get in touch with us</h3>
<input type="text" placeholder='Name' className='box'></input>
<input type="email" placeholder='Email' className='box'></input>
<input type="" placeholder='Phone' className='box'></input>
<textarea placeholder='message' className='box' cols="30" rows="10"></textarea>
<input type="submit" placeholder='message' className='btn'></input>
</form>
    </div >

        </section>
        );
}

export default Back;