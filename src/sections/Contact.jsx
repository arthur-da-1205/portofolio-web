import React from "react";

export const Contact = () => {
  return (
    <section id="contact" className="pb-32 pt-36">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto mb-16 text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">Contact</h4>
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl lg:text-5xl">
              Contact Me
            </h2>
          </div>
        </div>
        <form>
          <div className="w-full mx-auto lg:w-2/3 lg:">
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="name"
                className="text-base font-bold text-primary"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-md bg-slate-200 text-dark focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="email"
                className="text-base font-bold text-primary"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full p-3 rounded-md bg-slate-200 text-dark focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="message"
                className="text-base font-bold text-primary"
              >
                Message
              </label>
              <textarea
                type="text"
                id="message"
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
    </section>
  );
};
