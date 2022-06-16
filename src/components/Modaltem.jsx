import Modal from "./Modal";

export const ModalItem = ({ isOpen, closeModal, title, detail }) => {
  var d = detail;

  return (
    <Modal isOpen={isOpen} title={title} closeModal={closeModal}>
      <div className="flex flex-row flex-wrap justify-center mt-2">
        {detail && (
          <>
            {console.log(detail.imgThumbnail)}
            <h2>{detail.desc}</h2>

            {Array(detail.imgDetail).map((val) => {
              return (
                // <div className="lg:w-1/2 sm:w-full ">
                //   <img
                //     className="w-auto p-8"
                //     src={require("../assets/images/portfolio/SiniNonton/ss1.jpg")}
                //   />
                // </div>
                <h2>ABC</h2>
              );
            })}
          </>
        )}

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

      <div className="pl-4 mt-4">
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
