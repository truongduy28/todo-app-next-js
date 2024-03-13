import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}
const FramePage: FC<Props> = ({ children }) => {
  return (
    <div className="p-6 shadow-xl rounded-lg w-unit-8xl max-w-full mx-auto bg-white">
      {children}
    </div>
  );
};

export default FramePage;
