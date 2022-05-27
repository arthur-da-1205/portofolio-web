import React from "react";

export const Clients = () => {
  return (
    <section
      id="clients"
      className="pb-32 pt-36 sm:bg-slate-400 lg:bg-slate-500 xl:lg:bg-slate-500"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">Clients</h4>
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Have been{" "}
            </h2>
          </div>
        </div>
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            <a
              href="https://thinkindonesia.co.id"
              target="_blank"
              className="max-w-[120px] mx-4 py-4 sm:grayscale-0 lg:grayscale xl:grayscale opacity-70 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img
                src={require("../assets/images/clients/logo-think.png")}
                alt="think"
              />
            </a>
            <a
              href="https://bungadavi.co.id"
              target="_blank"
              className="max-w-[120px] mx-4 py-4 sm:grayscale-0 lg:grayscale xl:grayscale opacity-70 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img
                src={require("../assets/images/clients/log-bungadavi.png")}
                alt="bungadavi"
              />
            </a>
            <a
              href="https://creativecolors-inc.com"
              target="_blank"
              className="max-w-[120px] mx-4 py-4  sm:grayscale-0 lg:grayscale xl:grayscale opacity-70 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img
                src={require("../assets/images/clients/3.png")}
                alt="ccinc"
              />
            </a>{" "}
            <a
              href="https://mimako.creativecolors-inc.com"
              target="_blank"
              className="max-w-[120px] mx-4 py-4  sm:grayscale-0 lg:grayscale xl:grayscale opacity-70 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img
                src={require("../assets/images/clients/logo.png")}
                alt="mimako"
              />
            </a>
            <a
              href="https://kjmis.id"
              target="_blank"
              className="max-w-[120px] mx-4 py-4 sm:grayscale-0 lg:grayscale xl:grayscale opacity-70 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img
                src={require("../assets/images/clients/kjmis-removebg-preview.png")}
                alt="kjmis"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
