import React, { useState } from "react";

const ShareButton = ({ className }) => {
  const [showOption, setShowOptions] = useState(false);

  function handleClick() {
    setShowOptions(!showOption);
  }

  function handleOnMouseLeave() {
    if (window.matchMedia("(min-width: 700px)").matches) {
      setShowOptions(false);
    }
  }
  return (
    <div className={`realative ${className}`} onMouseLeave={handleOnMouseLeave}>
      <div
        className=" text-primary active:bg-red-100 text-base cursor-pointer"
        onClick={handleClick}
      >
        Compartir
      </div>
      {showOption && (
        <div className="absolute bg-white flex flex-col shadow-md text-base text-gray-ligth">
          <a
            href="https://www.facebook.com/IvanMallida/"
            target="_blank"
            rel="noreferrer"
            className="px-2 pt-1 hover:bg-slate-100"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="px-2 pt-1 hover:bg-slate-100"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/ivan-alejandro-mallida-mar-239300202/"
            target="_blank"
            rel="noreferrer"
            className="px-2 pt-1 hover:bg-slate-100"
          >
            Linkedin
          </a>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
