import {React,useRef} from 'react'
import styles from '../styles/Form.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'


export default function Form() {
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
        <div className={styles.containerwrap}>
            <h1 className={styles.headingwrap}>{"We’d love to hear from you. Fill in your details and we’ll get in touch with you"}</h1>
            <div className={styles.containerform}>
<form ref={form} onSubmit={sendEmail} className={styles.sliderform}>
    <div className={styles.sliderformtxt}>
       
        <input type="text" className="form-control" id="exampleInputName" aria-describedby="Name" placeholder='Name'/>
    </div>
    <div className={styles.sliderformtxt}>
   
        <input type="text" className="form-control" id="exampleInputPhone" placeholder='Email'/>
    </div>
    <div className={styles.sliderformtxt}>
   
        <input type="text" className="form-control" id="exampleInputPhone" placeholder='Phone Number'/>
    </div>
    <div className={styles.sliderformtxt}>
     
        <input type="text" className="form-control" id="exampleInputMessage" placeholder='Message'/>
    </div>
    <button type="submit" value="Send" className={styles.sliderbtn}>Send</button>
</form>

        </div>
        </div>
    )
}
