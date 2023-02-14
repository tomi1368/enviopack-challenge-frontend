import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
function PaginatedItems(props) {
  const { data, makeLayout } = props;
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(event);
    setItemOffset(newOffset);
  };
  if (!data) return <h3>asdasd</h3>;
  return (
    <>
      {makeLayout(currentItems)}
      <ReactPaginate
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        activeLinkClassName="page-active"
        nextLinkClassName="page-num"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;
