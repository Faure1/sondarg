import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import { Nav, Navbar,  Container,  } from 'react-bootstrap'
import { Example } from '../components/Navbar.js';

const Layout = ({children}) => {
    return(
      <>
      <Example></Example>
      {children}
    </>
    )
}
export default Layout;
