import React, { useState } from "react";
import {Typography} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { TeamCard } from "../widgets/cards";
import { teamData } from "../data";
import Pagination from "../components/Pagination";

export function Recipes() {
  const itemsPerPage = 4; // Número de itens por página
  const totalItems = teamData.length; // Número total de itens
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const [searchValue, setSearchValue] = useState("");

  const itemsToShow = teamData
    .filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    .slice(1, 16);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/bg-main.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-gray-300 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-[5px] bg-white shadow-xl shadow-slate-200">
            <div className="px-6">
              <div className="my-8 mx-8 items-center">
                <Typography textGradient={true} variant="h2" color="brown" className="mb-2 border-4 border-brown mx-10 p-4">
                  Nossas receitas
                </Typography>
              </div>
              <input
                          className=" w-[85%] mx-20 p-4 rounded-full bg-gray-200 border-transparent"
                            type="text"
                            placeholder="Pesquisar..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                          />
              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <section className="px-4 pt-20 pb-48">
                      <div className="container mx-auto">
                        <div className="grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4 my-[-20px]">
                          
                          {itemsToShow.map(({ img, name, key, position, socials }) => (
                            <a className="hover:bg-[#FF530D] hover:shadow-3xl shadow-black p-4 rounded-xl" href="#" key={name}>
                              <TeamCard
                                img={img}
                                name={name}
                                position={null}
                                socials={null}
                              />
                            </a>
                          ))}
                        </div>
                      </div>
                    </section>
                    <Pagination
                      itemsPerPage={itemsPerPage}
                      totalItems={totalItems}
                      onPageChange={handlePageChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
}

export default Recipes;
