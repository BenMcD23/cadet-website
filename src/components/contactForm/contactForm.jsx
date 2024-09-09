import React, { useState, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ReCAPTCHA from 'react-google-recaptcha';
import Title from "../mainTitle/title";

import Poppy from "../../assets/poppy.JPG";

function ContactForm() {
  const [successMessage, setSuccessMessage] = useState("");
  const [captchaMessage, setCaptchaMessage] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  // for changing button to submitting so cant spam
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!recaptchaValue) {
      setCaptchaMessage("Complete captcha to submit message");
      return;
    }

    setCaptchaMessage("");
    setIsSubmitting(true);

    fetch("https://script.google.com/macros/s/AKfycbxPeL-ERFdWTypczMm65P-j9dDrT5_xW-Q2_Dw6cWy7_on_wW4jxKuljaT1PtoRD5x3qw/exec", {
      method: 'POST',
      body: new FormData(formRef.current),
    })
    .then(res => res.json())
    .then(data => {
      if (data.result === 'success') {
        setSuccessMessage("Your message has been sent successfully!");
        formRef.current.reset();
        setRecaptchaValue(null);
      } 
      
      else {
        setSuccessMessage("There was an error sending your message. Please try again.");
      }
    })
    .catch(err => {
      console.error(err);
      setSuccessMessage("There was an error sending your message. Please try again.");
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-slate-grey-main clip-path-sm-r-l md:clip-path-md-r-l lg:clip-path-lg-r-l pb-5">
      <div className="flex items-center justify-center px-3 md:px-5 pt-5 hidden lg:flex rounded">
        <img className="rounded max-w-full max-h-full" src={Poppy} alt="Pic of cadets" />
      </div>

      <div className="title-hover">
        <Title title="Contact Form"></Title>
        <br/>
        <Form 
          className="text-white px-3 md:mx-5 title-hover"
          ref={formRef} 
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label className="text-xl font-extrabold leading-none">Full Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter Full Name" name="Name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-xl font-extrabold leading-none">Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="Email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formInterest">
            <Form.Label className="text-xl font-extrabold leading-none">Contact Reason:</Form.Label>
            <Form.Select name="Contact_Reason" required>
              <option value="Cadet joining interest">Cadet joining interest</option>
              <option value="Staff joining interest">Staff joining interest</option>
              <option value="General enquiry">General enquiry</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="Description">
            <Form.Label className="text-xl font-extrabold leading-none">Message:</Form.Label>
            <Form.Control as="textarea" rows={4} name="Message" required />
          </Form.Group>
          <Form.Group className="mb-3 flex justify-center">
            <ReCAPTCHA
              sitekey="6LenpjsqAAAAAL2_JNQZC4WmIjOf1llhhqsxufWI" 
              onChange={handleRecaptchaChange}
            />
          </Form.Group>
          <div className="text-center">
            <Button 
              className="shift-button"
              variant="success" 
              type="submit"
              disabled={isSubmitting} // Disable button when submitting
            >
              {isSubmitting ? "Submitting..." : "Submit"} {/* Change button text when submitting */}
            </Button>
            {successMessage && <div className="text-green-500 text-lg font-semibold pt-2">{successMessage}</div>}
            {captchaMessage && <div className="text-red-800 text-lg font-bold pt-2">{captchaMessage}</div>}
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ContactForm;
