
import React, { useState, useRef } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./formStyles.css"

function ContactForm() {
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const formRef = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://script.google.com/macros/s/AKfycbyrgt7R07BlvIAuCIw7tMDtoYgCI8vyyQ97RLtNcAmu7Sq1_in3zHfso0PJS53r0k9KNA/exec", {
      method: 'POST',
      body: new FormData(formRef.current),
    })
    .then(res => res.json())
    .then(data => {
      if (data.result === 'success') {
        setSuccessMessage("Your message has been sent successfully!");
        formRef.current.reset();
      } else {
        setSuccessMessage("There was an error sending your message. Please try again.");
      }
    })
    .catch(err => {
      console.error(err);
      setSuccessMessage("There was an error sending your message. Please try again.");
    });
  };


  return (
      <Form 
        className="contact-form"
        ref={formRef} 
        onSubmit={handleSubmit}
      >
        <h3 className="text-center text-3xl font-extrabold leading-none tracking-tight md:text-4xl dark:text-white">Contact Form</h3>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Full Name" name="Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="Email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formInterest">
        <Form.Label>Contact Reason</Form.Label>
        <Form.Select name="Contact_Reason" required>
          <option value="Cadet joining interest">Cadet joining interest</option>
          <option value="Staff joining interest">Staff joining interest</option>
          <option value="General enquiry">General enquiry</option>
        </Form.Select>
      </Form.Group>

        <Form.Group className="mb-3" controlId="Description">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} name="Message" required />
        </Form.Group>
        <div className="text-center">
        <Button 
        className="shift-button"
        variant="success" 
        type="submit"
      >
        Submit
      </Button>
          {successMessage && <div className="text-green-500	text-lg font-semibold pt-2">{successMessage}</div>}

        </div>
      </Form>

  );
};

export default ContactForm;
