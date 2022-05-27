import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="pt-35 pb-36 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto mb-16 text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">
              Portfolio
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl lg:text-5xl">
              Newest Projects
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap justify-center w-full px-4 xl:w-10/12 xl:mx-auto">
          <div className="p-4 mb-12 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img
                src={require("../assets/images/portfolio/courier.png")}
                alt="Bungadavi Courier"
                width="w-full"
              />
              <h3 className="mt-5 mb-3 text-xl font-semibold text-dark">
                Bungadavi Courier App
              </h3>
              <p className="text-base font-medium text-slate-500">
                Mobile app for Bungadavi's Couriers
              </p>
            </div>
          </div>
          <div className="p-4 mb-12 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img
                src={require("../assets/images/portfolio/courier.png")}
                alt="Bungadavi Courier"
                width="w-full"
              />
              <h3 className="mt-5 mb-3 text-xl font-semibold text-dark">
                Bungadavi Courier App
              </h3>
              <p className="text-base font-medium text-slate-500">
                Mobile app for Bungadavi's Couriers
              </p>
            </div>
          </div>
          <div className="p-4 mb-12 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img
                src={require("../assets/images/portfolio/courier.png")}
                alt="Bungadavi Courier"
                width="w-full"
              />
              <h3 className="mt-5 mb-3 text-xl font-semibold text-dark">
                Bungadavi Courier App
              </h3>
              <p className="text-base font-medium text-slate-500">
                Mobile app for Bungadavi's Couriers
              </p>
            </div>
          </div>
          <div className="p-4 mb-12 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img
                src={require("../assets/images/portfolio/courier.png")}
                alt="Bungadavi Courier"
                width="w-full"
              />
              <h3 className="mt-5 mb-3 text-xl font-semibold text-dark">
                Bungadavi Courier App
              </h3>
              <p className="text-base font-medium text-slate-500">
                Mobile app for Bungadavi's Couriers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
