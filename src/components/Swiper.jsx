import React from "react";
import SlideComponent from "./Slide";
import { featuresData } from "../data";

const ExternalComponent = ({ title, icon, description, off }) => {
  return (
    <div className="text-center h-90 ">
      <h1 className="p-4 text-black text-center font-bold text-xl my-5">{title}</h1>
      <img src={icon} alt="" />
      <p className="text-gray-700 p-4">{description}</p>
      <div className="text-gray-600 w-full h-10 text-xl font-bold p-1">{off}</div>
    </div>
  );
};

const Slide = () => {
  const items = featuresData.map((item, index) => (
    <ExternalComponent
      key={index}
      title={item.title}
      icon={item.icon} // Substitua o valor da prop "icon" pela imagem importada
      description={item.description}
      off={item.off}
    />
  ));

  return <SlideComponent items={items} />;
};

export default Slide;
