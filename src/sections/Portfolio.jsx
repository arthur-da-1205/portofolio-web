import { useCallback, useState } from "react";
import { ModalItem } from "../components/Modaltem";

import SS1 from "../assets/images/portfolio/SiniNonton/ss1.jpg";
import SS2 from "../assets/images/portfolio/SiniNonton/ss2.jpg";

const PortfolioData = {
  items: [
    {
      id: 1,
      name: "Bungadavi Courier App",
      desc: "Mobile App for Bungadavi's Couriers",
      imgThumbnail: require("../assets/images/portfolio/BungaDavi_Courier.jpg"),
      imgDetail: [SS1, SS2],
    },
    {
      id: 2,
      name: "Bungadavi E-Commerce App",
      desc: "Mobile App for Bungadavi's E-Commerce",
      imgThumbnail: require("../assets/images/portfolio/BungaDavi E-commerce Thumbnail.jpg"),
      imgDetail: [
        {
          img: require("../assets/images/portfolio/SiniNonton/ss1.jpg"),
        },
        {
          img: require("../assets/images/portfolio/SiniNonton/ss2.jpg"),
        },
      ],
    },
    {
      id: 3,
      name: "Staycation App",
      desc: "Mobile App for who wants looking for Lodgings",
      imgThumbnail: require("../assets/images/portfolio/Staycation Thumbnail.jpg"),
      imgDetail: [
        {
          img: require("../assets/images/portfolio/SiniNonton/ss1.jpg"),
        },
        {
          img: require("../assets/images/portfolio/SiniNonton/ss2.jpg"),
        },
      ],
    },
    {
      id: 4,
      name: "SiniNonton App",
      desc: "Mobile App for Movies Info from Mini Bootcamp",
      imgThumbnail: require("../assets/images/portfolio/SiniNonton Thumbnail.jpg"),
      imgDetail: [
        {
          img: require("../assets/images/portfolio/SiniNonton/ss1.jpg"),
        },
        {
          img: require("../assets/images/portfolio/SiniNonton/ss2.jpg"),
        },
      ],
    },
    {
      id: 5,
      name: "Food Market App",
      desc: "App for Ordering Some Foods, Projects from Online Course",
      imgThumbnail: require("../assets/images/portfolio/FoodMarket Thumbnail.jpg"),
      imgDetail: [
        {
          img: require("../assets/images/portfolio/SiniNonton/ss1.jpg"),
        },
        {
          img: require("../assets/images/portfolio/SiniNonton/ss2.jpg"),
        },
      ],
    },
    {
      id: 6,
      name: "Mimako App (Desktop)",
      desc: "Mimako is a desktop app for helping Senior High School Student to learn Economic Subject",
      imgThumbnail: require("../assets/images/portfolio/Mimako Thumbnail 1.jpg"),
      imgDetail: [
        {
          img: require("../assets/images/portfolio/SiniNonton/ss1.jpg"),
        },
        {
          img: require("../assets/images/portfolio/SiniNonton/ss2.jpg"),
        },
      ],
    },
  ],
};

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [detail, setDetail] = useState([null]);

  const handleOpenModal = useCallback(
    async (dataCek) => {
      // console.log(dataCek);
      if (dataCek) {
        setDetail(dataCek);
        console.log(detail);
        setIsOpen(true);
      }
    },
    [detail]
  );

  return (
    <section id="portfolio" className="pt-20 pb-14 bg-slate-200">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto mb-16 text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">
              Portfolio
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl lg:text-5xl">
              Latest Projects
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap justify-center w-full px-4 xl:w-10/12 xl:mx-auto">
          {PortfolioData.items.map((item) => (
            <div
              // onClick={() => handleOpenModal(item)}
              className="p-4 mb-12 md:w-1/2"
            >
              <div className="overflow-hidden rounded-md shadow-md hover:shadow-2xl">
                <img
                  src={item.imgThumbnail}
                  alt="Bungadavi Courier"
                  width="w-full"
                />
                <h3 className="pl-3 mt-5 mb-1 text-xl font-semibold text-dark">
                  {item.name}
                </h3>
                <p className="pb-2 pl-3 text-base font-medium text-slate-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <ModalItem
        title={detail.name}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        detail={detail}
      /> */}
    </section>
  );
};

export default Portfolio;
