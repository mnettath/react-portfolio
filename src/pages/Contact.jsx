import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { validateEmail } from "../utils/helper";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameRequired, setNameRequired] = useState("");
  const [emailRequired, setEmailRequired] = useState("");
  const [messageRequired, setMessageRequired] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setSuccessMessage("");
    setErrorMessage("");

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setNameRequired(value.length === 0);
        break;
      case "email":
        setEmailRequired(value.length === 0);
        break;
      case "message":
        setMessageRequired(value.length === 0);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Please input valid email address");
      setSuccessMessage("");
      return;
    }

    if (name === "") {
      setNameRequired(true);
    }
    if (email === "") {
      setEmailRequired(true);
    }
    if (message === "") {
      setMessageRequired(true);
    }

    if (name === "" || email === "" || message === "") {
      return;
    }

    setErrorMessage("");
    setSuccessMessage("Contact form was submitted successfully! ");

    setNameRequired(false);
    setEmailRequired(false);
    setMessageRequired(false);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form
      className="my-4 mx-3 col-md-6 vh-100 contact-form"
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
          onBlur={handleBlur}
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
        />
        {nameRequired && (
          <p className="error-text">Name is a required field.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address:
        </label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="email"
          className="form-control"
          id="exampleFormControlInput2"
        />
        {emailRequired && (
          <p className="error-text">Email is a required field.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Message:
        </label>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        {messageRequired && (
          <p className="error-text">Message is a required field.</p>
        )}
      </div>
      <button type="submit" className="btn btn-secondary mb-2">
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
