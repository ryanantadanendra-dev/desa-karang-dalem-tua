import React from "react";
import Image1 from "../public/jalak-bali.webp";

interface Props {
  text: React.ReactNode;
}

const Header = ({ text }: Props) => {
  return (
    <div
      className="w-screen h-56 relative bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(/desa-2.webp)` }}
    >
      <div className="overlay absolute inset-0 bg-black/50 z-0" />
      <h1 className="absolute z-10 text-center md:px-12 md:text-start text-heading1 text-background top-1/2 -translate-y-1/2 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0">
        {text}
      </h1>
    </div>
  );
};
export default Header;
