import React, { useState, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ReCAPTCHA from 'react-google-recaptcha';
import Title from "../mainTitle/title";

function ContactForm() {
  const [successMessage, setSuccessMessage] = useState("");
  const [captchaMessage, setCaptchaMessage] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [selectedReason, setSelectedReason] = useState(""); // Track selected reason
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

    fetch("https://script.google.com/macros/s/AKfycbwkt-smkBtwgQWpIPjgm10cLFgtqXsg5eNGDFsLQsuF3ds_8mVWjnNuuNRgyLni6DkEZQ/exec", {
      method: 'POST',
      body: new FormData(formRef.current),
    })
    .then(res => res.json())
    .then(data => {
      if (data.result === 'success') {
        setSuccessMessage("Your message has been sent successfully!");
        formRef.current.reset();
        setRecaptchaValue(null);
        setSelectedReason(""); // Reset selection
      } else {
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

  const handleReasonChange = (e) => {
    const value = e.target.value;
    setSelectedReason(value);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-slate-grey-main clip-path-sm-r-l md:clip-path-md-r-l lg:clip-path-lg-r-l pb-5">
      <div className="flex items-center justify-center px-3 md:px-5 pt-5 flex">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29263.47679096115!2d-2.1712879893655064!3d53.524250203160896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb72d3073f64d%3A0xbe6cac6a7b6a2dcc!2s317%20Squadron%20Air%20Training%20Corps!5e0!3m2!1sen!2suk!4v1723907678744!5m2!1sen!2suk" 
          width="100%" 
          height="100%" 
          style={{ border: 0, maxWidth: '100%' }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
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
            <Form.Control type="email" placeholder="Enter Email" name="Email" required />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label className="text-xl font-extrabold leading-none">Phone Number:</Form.Label>
            <Form.Control 
              type="tel" 
              placeholder="Enter Phone Number" 
              name="Phone" 
              required 
              pattern="^0\d{10}$|^\+?[1-9]\d{1,14}$"
              title="Please enter a valid phone number (e.g., 01616886705)" 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formInterest">
            <Form.Label className="text-xl font-extrabold leading-none">Contact Reason:</Form.Label>
            <Form.Select 
              name="Contact_Reason" 
              required 
              defaultValue="" 
              onChange={handleReasonChange}
            >
              <option value="" disabled>Please select</option>
              <option value="General enquiry">General enquiry</option>
              <option value="Cadet joining interest">Cadet joining interest</option>
              <option value="Staff joining interest">Staff joining interest</option>
              <option value="Committee joining interest">Committee joining interest</option>
            </Form.Select>
          </Form.Group>

          {/* Show Date of Birth only if Cadet joining interest is selected */}
          {selectedReason === "Cadet joining interest" && (
            <Form.Group className="mb-3" controlId="formDOB">
              <Form.Label className="text-xl font-extrabold leading-none">Cadet Date of Birth:</Form.Label>
              <Form.Control 
                type="date" 
                name="Date_of_Birth" 
                required 
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3" controlId="Description">
            <Form.Label className="text-xl font-extrabold leading-none">Message:</Form.Label>
            <Form.Control as="textarea" rows={4} name="Message" required />
          </Form.Group>

          <Form.Group className="mb-3 flex justify-center">
            <ReCAPTCHA
              sitekey="6LcKO2sqAAAAALn3TkQDe81ddIE1l_iez1tOqjGS" 
              onChange={handleRecaptchaChange}
            />
          </Form.Group>

          <div className="text-center"> 
            <Button 
              className="shift-button"
              variant="success" 
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
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