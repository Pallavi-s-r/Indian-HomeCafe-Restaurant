import React from 'react'
import Subheading from '../../components/SubHeading/Subheading'
import {images} from '../../constants';

const Findus = () => {
return (
    <div className="app__bg app__wrapper section__padding" id="contact" style={{backgroundColor:'var(--color-darkgreen'}}>
    <div className="app__wrapper_info" style={{color:'white'}}>
      <Subheading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans" >Varanasi </p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        <p className="p__opensans">Contact us : +91234567890</p>
        <p className="p__opensans">Mail at : indianhomecafe@gmail.com</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img" style={{display:'flex', flexDirection:'column'}}>
      <img src={images.findus} alt="finus_img" />
       <div className="app__wrapper-content">
       <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>We take reservations for Party's & Wedding's Services .  </p>
       <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Book Now - We are ready to serve with best Quality    </p>
      </div>
    </div>
  </div>
)
}

export default Findus