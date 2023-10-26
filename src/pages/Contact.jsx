import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { validateEmail } from "../utils/helper";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    setSuccessMessage("");

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail) {
      setErrorMessage("Please input valid email address");
      setSuccessMessage("");
      return;
    } else {
      setErrorMessage("");
      setSuccessMessage("Contact form was submitted successfully! ");
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form
      className="my-4 mx-3 col-md-6 contact-form"
      onSubmit={handleFormSubmit}
    >
      <h3>Contact</h3>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name:
        </label>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="name"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address:
        </label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          className="form-control"
          id="exampleFormControlInput2"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Message:
        </label>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-light mb-2">
        Submit
      </button>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      {successMessage && (
        <div>
          <p className="success-text">{successMessage}</p>
        </div>
      )}
    </form>
  );
};

export default Contact;
