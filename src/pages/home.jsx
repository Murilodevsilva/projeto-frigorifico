import React from "react";
import {Typography, Button, IconButton} from "@material-tailwind/react";
import Slide from "../components/Swiper";
import {Footer } from "../widgets/layout";
import { TeamCard } from "../widgets/cards";
import { featuresData, teamData} from "../data";
import {} from '../assets/img/bg-main.jpg';

export function Home() {
  const isMobile = window.innerWidth < 768;

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="top-0 h-30 w-[100%] bg-black z-[100] opacity-80"></div>
        <div className={`md:w-[550px] top-40 absolute z-[100] left-[35]  w-[200px] text-center`}>
          <h1 className="text-white text-[25px] md:text-[55px]  ">Delícias tradicionais que vão encantar o seu paladar!</h1>
        </div>
        <div className="absolute top-0 h-full w-full bg-[url('../../public/img/bg-main.jpg')] resize bg-cover bg-center shadow-[5px_5px_500px_90px_rgba(0,0,0,0.3)]" />
        <div className="absolute bottom-20 rounded-md border-2 border-white shadow-2xl">
          <a href="/Profile">
            <button
              type="button"
              title="CONHEÇA"
              className={`text-white hover:text-black hover:bg-white p-2 text-[12px] md:text-[18px] px-5 md:p-4 md:px-10 z-[100] ${isMobile ? 'block mx-auto' : ''}`}
            >
              CONHEÇA
            </button>
          </a>
        </div>
      </div>

      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto items-center">
          <div className="mt-32 flex flex-wrap justify-center items-center">
            <div className="-mt-32 w-full items-center">
              <div className="my-20 ">
                <Slide items={featuresData} />
              </div>
              <Typography variant="h3" className="mb-3 font-bold" color="blue-gray">
                Sobre nós
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                No Frigorífico Delícia Congelada, estamos comprometidos em fornecer produtos de alta qualidade e sabor excepcional
                <br />
                para satisfazer os paladares mais exigentes. Somos uma empresa
                <br />
                fictícia dedicada a oferecer opções nutritivas e convenientes para refeições deliciosas
                <br />
                em qualquer ocasião. <br />
                <br />
                Nossa paixão pela excelência nos leva a buscar os melhores ingredientes
                <br />
                e aplicar os mais altos padrões de qualidade em todo o processo de produção.
                <br />
                Desde a seleção cuidadosa dos fornecedores até o armazenamento e congelamento impecáveis,
                <br />
                cada etapa é cuidadosamente monitorada para garantir que nossos produtos cheguem até você
                <br />
                com frescor e sabor preservados. <br />
              </Typography>
              <Button variant="outlined">Saiba mais!</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0"></div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-20 pb-48 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4 ">
            {teamData.slice(0,4).map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
}

export default Home;
