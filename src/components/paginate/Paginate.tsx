import ReactPaginate from "react-paginate";

interface IPaginateProps {
  initialPage: number,
  pageCount: number,
  handlePageClick: ({selected}: {selected: number}) => void
}

const Paginate: React.FC<IPaginateProps> = ({initialPage, pageCount, handlePageClick}) => {
  return (
    <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      initialPage={initialPage}
      pageCount={pageCount}
      onPageChange={handlePageClick}
      containerClassName="flex flex-wrap items-center justify-center mt-6 space-x-4 text-xl "
      pageClassName="mb-4 mb-0 border border-solid border-lightGray rounded-3xl hover:bg-[#33A8F6] hover:text-white"
      pageLinkClassName="cursor-pointer block w-12 h-12 flex items-center justify-center "
      activeClassName="bg-[#33A8F6] text-white"
    />
  )
}

export default Paginate