import React from 'react'
import { useDispatch } from 'react-redux';
import { setPage } from '../../Redux/actions';

const Pagination = ({ currentPage }) => {
  const dispatch = useDispatch();
  const handlePageChange = (pageNumber) => {
    dispatch(setPage(pageNumber));
  };
  return (
    <div className="w-full">
      <button
        className="text-white m-4  inline-block bg-[#202020] w-29 rounded px-2 pb-1.5 pt-2 text-xs font-medium uppercase leading-normal text-white text-opacity-60 shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#303030] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Back
      </button>
      <span className="text-white m-4">
        Page {currentPage}
      </span>
      <button
        className="text-white m-4   inline-block bg-[#202020] w-29 rounded px-2 pb-1.5 pt-2 text-xs font-medium uppercase leading-normal text-white text-opacity-60 shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#303030] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === 2}
      >
        Next
      </button>
    </div>
  );
};
export default Pagination