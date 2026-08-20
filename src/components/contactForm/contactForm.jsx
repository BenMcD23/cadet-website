import { useState, useRef } from "react";
import ReCAPTCHA from 'react-google-recaptcha';

const inputClasses = "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-ink placeholder-gray-400 transition-colors focus:border-accent-dark focus:outline-none focus:ring-2 focus:ring-accent/50";
const labelClasses = "mb-1.5 block font-semibold text-navy";

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
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="formName" className={labelClasses}>Full Name:</label>
        <input id="formName" className={inputClasses} type="text" placeholder="Enter Full Name" name="Name" required />
      </div>

      <div>
        <label htmlFor="formEmail" className={labelClasses}>Email:</label>
        <input id="formEmail" className={inputClasses} type="email" placeholder="Enter Email" name="Email" required />
      </div>

      <div>
        <label htmlFor="formPhone" className={labelClasses}>Phone Number:</label>
        <input
          id="formPhone"
          className={inputClasses}
          type="tel"
          placeholder="Enter Phone Number"
          name="Phone"
          required
          pattern="^0\d{10}$|^\+?[1-9]\d{1,14}$"
          title="Please enter a valid phone number (e.g., 01616886705)"
        />
      </div>

      <div>
        <label htmlFor="formInterest" className={labelClasses}>Contact Reason:</label>
        <select
          id="formInterest"
          className={inputClasses}
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
        </select>
      </div>

      {/* Show Date of Birth only if Cadet joining interest is selected */}
      {selectedReason === "Cadet joining interest" && (
        <div>
          <label htmlFor="formDOB" className={labelClasses}>Cadet Date of Birth:</label>
          <input id="formDOB" className={inputClasses} type="date" name="Date_of_Birth" required />
        </div>
      )}

      <div>
        <label htmlFor="formMessage" className={labelClasses}>Message:</label>
        <textarea id="formMessage" className={inputClasses} rows={4} name="Message" required />
      </div>

      <div className="flex justify-center">
        <ReCAPTCHA
          sitekey="6LcKO2sqAAAAALn3TkQDe81ddIE1l_iez1tOqjGS"
          onChange={handleRecaptchaChange}
        />
      </div>

      <div className="text-center">
        <button type="submit" className="btn-primary disabled:cursor-not-allowed disabled:opacity-60" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        {successMessage && <div className="pt-2 text-lg font-semibold text-green-600">{successMessage}</div>}
        {captchaMessage && <div className="pt-2 text-lg font-bold text-red-600">{captchaMessage}</div>}
      </div>
    </form>
  );
}

export default ContactForm;
