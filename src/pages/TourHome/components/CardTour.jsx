import React from "react";
import ReactMarkdown from "react-markdown";
import ShareButton from "../../../components/Button/ShareButton";
const CardTour = ({ data }) => (
  <div className=" px-2 py-4 sm:p-4 ">
    <div className="pb-4 sm:p-4 rounded-lg shadow-md bg-white overflow-hidden">
      <div className="flex sm:flex-row flex-col">
        <img
          src={data.img}
          alt="images"
          className="lg:w-[400px] sm:w-[250px]"
        />
        <div className="ml-4 w-full mt-4 sm:mt-0">
          <div className=" flex justify-between w-full">
            <div className=" text-primary text-1xl font-bold">{data.title}</div>
            <ShareButton className=" hidden sm:block" />
          </div>
          <div className="flex items-center">
            <div className=" text-base sm:text-primary font-bold">{`${data.calification} / 10`}</div>
            <div className=" text-sm text-gray-ligth ml-2">
              {`${data.opinions} opiniones | ${data.travelers} viajeros`}
            </div>
          </div>
          <ReactMarkdown className="hidden sm:block">
            {data.description}
          </ReactMarkdown>
        </div>
      </div>
      <div className="flex sm:justify-end px-4 justify-between mt-4 sm:mt-0">
        <ShareButton className=" sm:hidden block" />
        <div className="flex items-center">
          <span className="text*sm text-success">
            {data.discount === 0 ? "" : `(-${data.discount}%)`}
          </span>
          <span className="text-2xl font-bold ml-2 text-primary">
            {data.price === 0 ? "¡Gratis!" : `${data.price} €`}
          </span>
        </div>
      </div>
    </div>
  </div>
);
export default CardTour;
