import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSendEmail = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Please fill all fields");
    } else {
      emailjs
        .sendForm(
          "service_x29zq0c",
          "template_7i0zweo",
          form.current,
          "pfozfwqgJdqiNAVcH"
        )
        .then((res) => {
          alert("Email Send");
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((err) => {
          alert("Failed");
        });
    }
  };
  return (
    <section id="contact" className="pt-20 pb-20">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto mb-16 text-center">
            <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
              Contact
            </h4>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-3 place-self-center lg:w-1/2">
            <h2 className="pt-4 text-3xl font-bold text-dark sm:text-4xl lg:text-5xl">
              Just Feel Free <br /> to Contact Me
            </h2>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <form ref={form} onSubmit={onSendEmail}>
              <div className="w-full mx-auto ">
                <div className="w-full px-1 mb-8">
                  <label
                    htmlFor="name"
                    className="text-base font-bold text-primary"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 rounded-md bg-slate-200 text-dark focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                  />
                </div>
                <div className="w-full px-1 mb-8">
                  <label
                    htmlFor="email"
                    className="text-base font-bold text-primary"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 rounded-md bg-slate-200 text-dark focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                  />
                </div>
                <div className="w-full px-1 mb-8">
                  <label
                    htmlFor="message"
                    className="text-base font-bold text-primary"
                  >
                    Message
                  </label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full h-32 p-3 rounded-md bg-slate-200 text-dark focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                  ></textarea>
                </div>
                <div className="w-full">
                  <button className="w-full px-8 py-3 text-base font-semibold text-white transition duration-500 rounded-full bg-primary hover:opacity-80 hover:shadow-lg">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
