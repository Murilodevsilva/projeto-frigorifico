import React from "react";
import SlideComponent from "./Slide";
import { featuresData } from "../data";
import paoalhoImage from "../assets/img/paoalho.jpg";
import linguicaImage from "../assets/img/linguica.jpg";

const ExternalComponent = ({ title, icon, description,color }) => {
  return (
  <div className="text-center">
    
    <h1 className="p-4 text-black text-center font-bold text-xl my-5  ">{title}</h1>
   <img src={ linguicaImage} alt="" className="w-50 h-50"/>
    <p className="text-gray-700">{description}</p>
    <div>{color}</div>
    </div>
    )
  
   // Renderize o conteúdo desejado para cada componente externo
};

const Slide = () => {
  const items = featuresData.map((item, index) => (
    <ExternalComponent key={index} title={item.title} icon={item.icon} description={item.description} color={item.color} />

    
    
  ));

  return <SlideComponent items={items} />
  ;
};

export default Slide;