import React, { useState } from "react";
import { contactFormSchema } from "../../../schema/contactForm";

const Touch = () => {
  const initialFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<any>({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const result = contactFormSchema.safeParse(formData);
    if (result.success) {
      return true;
    } else {
      const formattedErrors: any = {};
      result.error.errors.forEach((err) => {
        if (err.path.length > 0) {
          formattedErrors[err.path[0]] = err.message;
        }
      });
      setErrors(formattedErrors);
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitSuccess(true);
      setFormData(initialFormData);
      setErrors({});

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } else {
      console.log("Formulário inválido");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6 mt-10 font-poppins">
      <div className="w-full max-w-4xl px-4 md:px-8 lg:px-12">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Get In Touch With Us
        </h2>
        <p className="mb-20 text-center text-gray pr-20 pl-20">
          For More Information About Our Product & Services, Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0 pr-8">
            <div className="mb-8 flex items-start">
              <div className="mr-4">
                <img
                  src="https://desafio3furniro.s3.us-east-2.amazonaws.com/contact/loc.png"
                  alt="Address Icon"
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h1 className="font-bold">Address</h1>
                <span>236 5th SE Avenue, New York NY10000, United States</span>
              </div>
            </div>
            <div className="mb-8 flex items-start">
              <div className="mr-4">
                <img
                  src="https://desafio3furniro.s3.us-east-2.amazonaws.com/contact/tel.png"
                  alt="Phone Icon"
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h1 className="font-bold">Phone</h1>
                <span>Mobile: +(84) 546-6789</span>
                <br />
                <span>Hotline: +(84) 456-6789</span>
              </div>
            </div>
            <div className="mb-8 flex items-start">
              <div className="mr-4">
                <img
                  src="https://desafio3furniro.s3.us-east-2.amazonaws.com/contact/relogio.png"
                  alt="Clock Icon"
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h1 className="font-bold">Working Time</h1>
                <span>Monday-Friday: 9:00 - 22:00</span>
                <br />
                <span>Saturday-Sunday: 9:00 - 21:00</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 lg:pl-40">
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <label className="block text-sm font-bold mb-4" htmlFor="name">
                  Your Name
                </label>
                <input
                  className={`border ${
                    errors.name ? "border-red-500" : "border-gray"
                  } rounded w-full p-4 leading-tight focus:outline-none focus:shadow-outline`}
                  id="name"
                  type="text"
                  placeholder="Abc"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs italic">{errors.name}</p>
                )}
              </div>
              <div className="mb-8">
                <label className="block text-sm font-bold mb-4" htmlFor="email">
                  Email Address
                </label>
                <input
                  className={`border ${
                    errors.email ? "border-red-500" : "border-gray"
                  } rounded w-full p-4 leading-tight focus:outline-none focus:shadow-outline`}
                  id="email"
                  type="text"
                  placeholder="Abc@def.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic">{errors.email}</p>
                )}
              </div>
              <div className="mb-8">
                <label
                  className="block text-sm font-bold mb-4"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="border-gray border rounded w-full p-4 leading-tight focus:outline-none focus:shadow-outline"
                  id="subject"
                  type="text"
                  placeholder="This is optional"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-8">
                <label
                  className="block text-sm font-bold mb-4"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className={`resize-none border ${
                    errors.message ? "border-red-500" : "border-gray"
                  } rounded w-full py-8 px-3 leading-tight focus:outline-none focus:shadow-outline`}
                  id="message"
                  placeholder="Hi! I'd like to ask about..."
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs italic">
                    {errors.message}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-primary hover:bg-yellow-700 text-white mb-8 py-2 px-20 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
              {submitSuccess && (
                <div
                  className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mt-4"
                  role="alert"
                >
                  <p className="font-bold">Success!</p>
                  <p>Your message has been sent.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Touch;
