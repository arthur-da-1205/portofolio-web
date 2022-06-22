import Modal from "./Modal";

export const ModalItem = ({ isOpen, closeModal, title, detail }) => {
  const renderDetail = () => {
    return (
      <div className="flex flex-row flex-wrap justify-center mt-2">
        {/* {detail && (
        <>
        <h2>{detail.desc}</h2>
          </>
        )} */}
        {detail &&
          Array(detail).map((item) => {
            console.log(item.imgDetail);
            return (
              item.ImgDetail &&
              item.imgDetail.map((itemImg) => {
                console.log("detail img:", itemImg);
                return (
                  <img className="w-auto p-8" src={itemImg} alt={item.name} />
                );
              })
            );
          })}

        {/* {console.log(Object.values(d).forEach((val) => console.log(val)))} */}
        {/* <div className="lg:w-1/2 sm:w-full ">
          <img
          className="w-auto p-8"
          src={require("../assets/images/portfolio/SiniNonton/ss1.jpg")}
          />
          </div>
          <div className="lg:w-1/2 sm:w-full ">
          <img
          className="p-8 lg:w-max"
          src={require("../assets/images/portfolio/SiniNonton/ss1.jpg")}
          />
        </div> */}
      </div>
    );
  };

  return (
    <Modal isOpen={isOpen} title={title} closeModal={closeModal}>
      <div className="pl-4 mt-4">
        {renderDetail()}
        <button
          type="button"
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};
