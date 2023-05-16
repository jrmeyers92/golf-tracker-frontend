"use client";
import { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(true);
  const handleChange = () => {
    setModalOpen(!modalOpen);
  };

  const backgroundClick = (e) => {
    if (e.target.id !== "innerModal") {
      handleChange();
    }
  };

  return (
    <div>
      {modalOpen > 0 && (
        <div
          className="bg-black/30 absolute inset-0 flex items-center justify-center p-2 sm:p-4 md:p-10 lg:p-24 xl:p-40"
          onClick={(e) => backgroundClick(e)}
        >
          <div
            className="bg-white w-full relative p-4 z-10 opacity-100"
            id="innerModal"
          >
            <IconContext.Provider
              value={{
                color: "black",
                className: "text-xl absolute right-2 top-2",
              }}
            >
              <AiOutlineCloseCircle onClick={handleChange} />
            </IconContext.Provider>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
