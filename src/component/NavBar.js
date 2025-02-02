import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {AiOutlineSearch} from 'react-icons/ai'
import Logo from '../images/logo.png'

const NavBar = ({handelSearch}) => {
  return (
    <div className='nav d-flex align-items-center'>
        <Container>
            <Row>
                <Col sm="2">
                    <img src={Logo} alt="" />
                </Col>
                <Col sm="10">
                    <div className='w-100 search d-flex  align-items-center h-100'>
                        <input onChange={(e)=>handelSearch(e.target.value)} className='w-100' type="text" placeholder='ابحث' />
                        <AiOutlineSearch className='icon'/>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default NavBar