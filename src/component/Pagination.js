import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { getPage } from '../redux/action/movieAction'
import { useDispatch, useSelector } from 'react-redux';

const Pagination = () => {
  const [pageCount, setpageCount] = useState(0)

  const dispatch = useDispatch();
  const pages = useSelector((state) => state.allMovies.pageCount);

  useEffect(() => {
      setpageCount(pages)
  }, [])


  const handlePageClick = (data) => {
      dispatch(getPage(data.selected + 1))
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