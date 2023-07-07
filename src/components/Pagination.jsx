import React, { useState } from "react";

const Pagination = ({ itemsPerPage, totalItems, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Lógica para calcular o número total de páginas
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Função para atualizar a página atual
  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  // Renderização da lista de páginas
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`mx-1 px-3 py-2 rounded-md cursor-pointer ${
            i === currentPage ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <ul className="flex justify-center mt-4">
      {renderPageNumbers()}
    </ul>
  );
};

export default Pagination;
