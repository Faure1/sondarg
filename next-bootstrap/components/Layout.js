import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import { Nav, Navbar,  Container,  } from 'react-bootstrap'


const Layout = ({children}) => {
    return(
      <>
        <>
        <Navbar collapseOnSelect expand="lg" sticky="top" className='color '>
            <Container>
                <Nav.Link href='' ></Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav  justify-content-between">
                    <Nav className="me-auto  d-flex  ">
                    </Nav>
                    <Nav>
                        <Nav.Link className='ms-2 mx-2' href='#inicio' ><h6 className='text-white text-center'>Sobre nosotros</h6></Nav.Link>
                        <Nav.Link className='ms-2 mx-2' href='#mas-info'><h6 className='text-white text-center'>Galeria</h6></Nav.Link>
                        <Nav.Link className='ms-2 mx-2' href='#mas-info'><h6 className='text-white text-center'>Contactanos</h6></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        {children}
        <Navbar collapseOnSelect expand="lg"  className='color'>
            <Container>
                <Nav.Link target="_blank" href='https://nosotros-q0clom4pi-faure1.vercel.app' ><h1 className='colorcambia'>Div<span className='colorcambia2'>Geek</span></h1></Nav.Link>
                <Nav className="me-auto  d-flex  ">
                </Nav>
                <Nav>
                    <Nav.Link className=''><h5 className=" text-light ">© DivGeeks Industries/ From SFFN</h5></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    </>
    )
}
export default Layout;