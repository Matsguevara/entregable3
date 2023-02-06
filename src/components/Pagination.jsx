import React from 'react'
import { numbersPage } from '../utils/handlePagination'
import "./styles/Pagination.css"

const Pagination = ({setPage, location, RESIDENTS_PERPAGE}) => {
  return (
    <section className='pagination'>

    <ul >
        {
          numbersPage(location, RESIDENTS_PERPAGE)?.map(numberPage => <li  onClick={() => setPage(numberPage)} key={numberPage}> <a>{numberPage}</a></li>)
        }
    </ul>
    </section>
  )
}

export default Pagination