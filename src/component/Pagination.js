import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({getPage,pageCount}) => {
    const handlePageClick=(data)=>{
        getPage(data.selected+1)
        console.log("kkg");
    }    
  return (
    <ReactPaginate
        breakLabel="..."
        nextLabel="التالى"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="السابق"
        containerClassName={'pagination justify-content-center m-4'}
        breakClassName={'page-item'}
        breakLinkClassName	={"page-link"}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        activeLinkClassName={'active'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        previousLinkClassName={'page-link'}

      />
  )
}

export default Pagination