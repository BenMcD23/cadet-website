import { useState, useRef } from "react";

// Honeypot: a field real users never see (visually hidden, skipped by tab and
// screen readers). Bots fill every field, so the Apps Script silently drops any
// submission where it has a value. Must match HONEYPOT_FIELD in G-appsScript.js.
const HONEYPOT_FIELD = "Fax_Number";

const inputClasses = "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-ink placeholder-gray-400 transition-colors focus:border-accent-dark focus:outline-none focus:ring-2 focus:ring-accent/50";
const labelClasses = "mb-1.5 block font-semibold text-navy";

function ContactForm() {
  const [status, setStatus] = useState(null); // { type: "success" | "error", text }
  const [selectedReason, setSelectedReason] = useState(""); // Track selected reason
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    // Bot filled the honeypot: pretend it worked and skip the request.
    if (formData.get(HONEYPOT_FIELD)) {
      setStatus({ type: "success", text: "Your message has been sent successfully!" });
      formRef.current.reset();
      return;
    }

    setIsSubmitting(true);

    fetch("https://script.google.com/macros/s/AKfycbwkt-smkBtwgQWpIPjgm10cLFgtqXsg5eNGDFsLQsuF3ds_8mVWjnNuuNRgyLni6DkEZQ/exec", {
      method: 'POST',
      body: formData,
    })
    .then(res => res.json())
    .then(data => {
      if (data.result === 'success') {
        setStatus({ type: "success", text: "Your message has been sent successfully!" });
        formRef.current.reset();
        setSelectedReason(""); // Reset selection
      } else {
        setStatus({ type: "error", text: "There was an error sending your message. Please try again." });
      }
    })
    .catch(err => {
      console.error(err);
      setStatus({ type: "error", text: "There was an error sending your message. Please try again." });
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

      {/* honeypot — see HONEYPOT_FIELD above */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="formFax">Fax number (leave this blank)</label>
        <input id="formFax" type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="text-center">
        <button type="submit" className="btn-primary disabled:cursor-not-allowed disabled:opacity-60" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        {status && (
          <div role="status" className={`pt-2 text-lg font-semibold ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
            {status.text}
          </div>
        )}
      </div>
    </form>
  );
}

export default ContactForm;
