import React from "react";
import GeneralFooter from "./GeneralFooter";
const GeneralLayout = ({ children }) => {
  return (
    <main className="w-full h-full bg-primary min-h-screen xl:py-8">
      <div className=" flex max-w-[1280px] bg-secondary  w-full bg-se mx-auto h-full flex-col justify-between">
        <div>{children}</div>
        <GeneralFooter />
      </div>
    </main>
  );
};

export default GeneralLayout;
