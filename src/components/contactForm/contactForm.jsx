import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import "./formStyles.css"
function ContactForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

    setValidated(true);
    };

return (
    <Form 
    noValidate 
    validated={validated} 
    onSubmit={handleSubmit} 
    method="POST" 
    action="https://formsubmit.co/1051405b19c2423e358e36c98ff2eee4"
    >
        <Row className="mb-3">
            <Form.Group as={Col} controlId="firstname">
                <Form.Label>First name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    name="Name"
                    placeholder="First Name + Last Name"
                />
                <Form.Control.Feedback type="invalid" className="form-control-feedback-invalid">
                    Please enter your name.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>

        <Row className="mb-3">

            <Form.Group as={Col} controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    required
                    type="email"
                    name="Email"
                    placeholder="example@domain.com"
                />
                <Form.Control.Feedback type="invalid" className="form-control-feedback-invalid">
                    Please provide a valid email address.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="reason">

                <Form.Label>Contact Reason</Form.Label>

                <Form.Select
                    required
                    type="text"
                    name="Contact_Reason"
                >
                    <option value="cadet">Cadet joining interest</option>
                    <option value="staff">Staff joining interest</option>
                    <option value="general">General enquiry</option>
                </Form.Select>
            </Form.Group>

        </Row>
        <Row className="mb-3">
                <Form.Group as={Col} controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={8}
                        required
                        name="Message"
                        placeholder="Your message"
                        style={{ resize: 'none' }}
                    />
                    <Form.Control.Feedback type="invalid" className="form-control-feedback-invalid">
                        Please enter a message.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
        <Button type="submit" className="submit_button">Submit form</Button>
    </Form>
    );
}

export default ContactForm;
