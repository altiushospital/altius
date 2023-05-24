import { React, useRef } from 'react'
import styles from '../styles/Map.module.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'



export default function Map() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.formwrap}>
                <form ref={form} className={styles.sliderform}>
                    <h2 className={styles.formhead}>{"We’d love to hear from you."}<br/><span className={styles.formspan}>{" Fill in your details and we’ll get in touch with you"}</span></h2>
                    <div className={styles.sliderformtxt}>

                        <input type="text" className="form-control" id="exampleInputName" aria-describedby="Name" placeholder='Name' />
                    </div>
                    <div className={styles.sliderformtxt}>

                        <input type="text" className="form-control" id="exampleInputPhone" placeholder='Email' />
                    </div>
                    <div className={styles.sliderformtxt}>

                        <input type="text" className="form-control" id="exampleInputPhone" placeholder='Phone Number' />
                    </div>
                    <div className={styles.sliderformtxt}>

                        <input type="text" className="form-control" id="exampleInputMessage" placeholder='Message' />
                    </div>
                    <button type="submit" value="Send" className={styles.sliderbtn}>Send</button>
                </form>
            </div>
            
            <div className={styles.gmap}>
                    <iframe width="550px" height="450px" id="gmap_canvas" src="https://maps.google.com/maps?q=altius hospital bangalore&t=&z=11&ie=UTF8&iwloc=&output=embed" scrolling="yes" ></iframe>
            </div>
        </div>
    )
}

