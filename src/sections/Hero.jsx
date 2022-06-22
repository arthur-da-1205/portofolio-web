const Hero = () => {
  return (
    //  Hero Section Start
    <section id="home" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="self-center w-full px-4 lg:w-1/2">
            <h1 className="text-base font-semibold md:text-xl text-primary">
              Hello, I am{" "}
              <span className="block mt-1 text-4xl font-bold text-dark">
                Arthur Darwanto
              </span>
            </h1>
            <h3 className="text-lg font-medium mb-7 lg:text-3xl text-slate-500">
              Frontend Web & Mobile App{" "}
              <span className="text-dark">Developer</span>
            </h3>

            <a
              href="https://api.whatsapp.com/send/?phone=6281913581675"
              className="px-8 py-3 text-base font-semibold text-white transition duration-300 ease-in-out rounded-full bg-primary hover:shadow-lg hover:opacity-75"
            >
              Contact Me
            </a>
          </div>
          <div className="self-end w-full px-4 lg:w-1/2">
            <div className="mt-10">
              <img
                src={require("../assets/images/photo_profile.png")}
                alt="Arthur"
                className="max-w-full mx-auto"
                width={480}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    // Hero Section End
  );
};

export default Hero;
