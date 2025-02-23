import React, { useState } from "react";
import Input from "../input/input";
import generateDomainData from "../../utils/generateDomainData";
import "./Form.css";
import Message from "../message/Message";

interface FormProps {
  setSuggestedData: (data: any) => void;
}

const Form: React.FC<FormProps> = ({ setSuggestedData }) => {
  const [formData, setFormData] = useState({
    domain: "",
  });
  const [msg, setMsg] = useState<{
    isVisible: boolean;
    message: string;
    type: "success" | "warning" | "error" | "info";
  }>({ isVisible: false, message: "", type: "success" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.domain === "") {
      setMsg({
        isVisible: true,
        message: "Please enter Domain.",
        type: "error",
      });
      return;
    }
    setSuggestedData(generateDomainData(formData.domain));
  };

  const handleCloseMessage = () => {
    setMsg({ ...msg, isVisible: false });
  };

  return (
    <>
      {msg.isVisible && (
        <Message
          type={msg.type}
          message={msg.message}
          visible={true}
          onClose={handleCloseMessage}
        />
      )}
      <form onSubmit={handleSubmit} className="form-container card-conatiner">
        <Input
          type="text"
          name="domain"
          value={formData?.domain}
          onChange={handleChange}
          placeholder="Type you dream domain."
        />
        <button>
          <span>Search</span>{" "}
        </button>
      </form>
    </>
  );
};

export default Form;
