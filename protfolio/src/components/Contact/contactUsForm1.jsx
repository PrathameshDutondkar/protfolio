
import React, { useState } from "react";
import { Row, Col, Input, Spin } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./contactusform1.scss";
import TextArea from "antd/es/input/TextArea";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const notify = () => {
    toast.success("Message sent successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formDataDetail = new FormData(form);
    setLoading(true);
    try {
      const response = await fetch(
        // " https://sheetdb.io/api/v1/mq5v0jvuc3j5u",
        "https://formsubmit.co/prathameshdutondkar97@gmail.com",
        // "http://localhost:5000/send",
        {
          method: "POST",
          body: formDataDetail,
        }
      );

      if (response.ok) {
        setLoading(false);

        notify();
        setFormData({
          name: "",
          email: "",
          contactNumber: "",
          message: "",
        });
      } else {
        setLoading(false);
        console.error("Form submission error:", response);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };
  return (
    <div className="contactus-form">
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="_captcha" value="false" />
        <Col>
          <Row className="contact-form-details">
            <label className="label">Name*</label>
            <Input
              value={formData.name}
              onChange={(value) => handleChange(value)}
              type="text"
              id="other1"
              name="name"
              autocomplete="off"
              min={0}
              className="custom-input"
              placeholder="Enter name"
              required
            />
          </Row>
          <Row className="contact-form-details">
            <label className="label">Email*</label>

            <Input
              autocomplete="off"
              value={formData.email}
              onChange={(value) => handleChange(value)}
              type="email"
              id="other3"
              name="email"
              min={0}
              className="custom-input"
              placeholder="Enter email"
              required
            />
          </Row>
          <Row className="contact-form-details">
            <label className="label">Contact Number*</label>

            <Input
              autocomplete="off"
              value={formData.contactNumber}
              onChange={(value) => handleChange(value)}
              type="number"
              id="other4"
              name="contactNumber"
              min={0}
              className="custom-input"
              placeholder="Enter contact number"
              required
            />
          </Row>
          <Row className="contact-form-details">
            <label className="label-message">Message</label>

            <TextArea
              value={formData.message}
              onChange={(value) => handleChange(value)}
              type="text"
              name="message"
              rows={4}
              className="custom-input"
              placeholder="Add additional info"
            />
          </Row>
          <Row className="contact-form-details">
            <label className="label"></label>
            <div className="button-div">
              {!loading ? (
                <button type="submit" className="button button1">
                  Send Message
                </button>
              ) : (
                <button
                  type="submit"
                  className="button button1"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <span>Sending</span>
                  <Spin size="medium" />
                </button>
              )}
            </div>
          </Row>
        </Col>
      </form>
    </div>
  );
};

export default ContactUsForm;
