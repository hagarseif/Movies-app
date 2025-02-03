import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {AiOutlineSearch} from 'react-icons/ai'
import Logo from '../images/logo.png'
import { getAllMovies, getMovieSearch } from '../redux/action/movieAction'
import { useDispatch } from 'react-redux'

const NavBar = () => {
    
  const onSearch = (word) => {
    search(word)
  }
  const dispatch = useDispatch();
  //to search in api
  const search = async (word) => {
    if (word === "") {
      dispatch(getAllMovies())
    } else {
      dispatch(getMovieSearch(word))
    }
  }

  return (
    <div className='nav d-flex align-items-center'>
        <Container>
            <Row>
                <Col sm="2">
                    <img src={Logo} alt="" />
                </Col>
                <Col sm="10">
                    <div className='w-100 search d-flex  align-items-center h-100'>
                    <input onChange={(e) => onSearch(e.target.value)} type="text" className="form-control" placeholder="ابحث" />
                    <AiOutlineSearch className='icon'/>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default NavBar