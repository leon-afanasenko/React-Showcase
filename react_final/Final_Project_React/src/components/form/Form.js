import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import CustomModal from "../customModal/CustomModal";
import "./Form.css";
import ButtonForm from "../button/ButtonForm";
import pets from "../../assets/pets.svg";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState({ title: "", body: "" });

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:3333/sale/send", data);
      setModalMessage({
        title: "Thank you!",
        body: "Your request has been submitted successfully.",
      });
      setModalIsOpen(true);
      reset();
    } catch (error) {
      console.error("Error submitting the form:", error);
      setModalMessage({
        title: "Error",
        body: "There was an issue submitting your request. Please try again.",
      });
      setModalIsOpen(true);
    }
  };

  return (
    <div className="formBox">
      <div className="formHeader">
        <h3>5% off on the first order</h3>
      </div>
      <div className="formPosition">
        <div className="dogsImg">
          <img src={pets} alt="pets" />
        </div>
        <div className="form">
          <form className="formBox" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input"
              {...register("name")}
              placeholder="Name"
              required
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) =>
                (e.target.placeholder = e.target.value ? "" : "Name")
              }
            />
            <input
              className="input"
              {...register("phone")}
              placeholder="Phone number"
              required
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) =>
                (e.target.placeholder = e.target.value ? "" : "Phone number")
              }
            />
            <input
              className="input"
              {...register("email")}
              placeholder="Email"
              type="email"
              required
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) =>
                (e.target.placeholder = e.target.value ? "" : "Email")
              }
            />
            <ButtonForm clickedText="Clicked!">Get a discount</ButtonForm>
          </form>
        </div>
      </div>
      <CustomModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        message={modalMessage}
      />
    </div>
  );
};

export default Form;
