import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav,Form,FormControl} from 'react-bootstrap';

const BlogNav = () => {
    return (
         <div>
         <Navbar style ={{
            backgroundColor:"#A3C1D4"}}>
         <img src = "https://www.freepik.com/vectors/logo-svg"
         height ='30'
         alt=''
         loading='lazy' />
             <Navbar.Brand href='#home' style={{color:'white',marginLeft:'100px'}}>GeeksForGeeks</Navbar.Brand>
             <Navbar.Toggle />
             <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-contemt-end'>
             <Nav>
             <Nav.Link href="#home" style={{color:"white"}}>JavaScript</Nav.Link>
             <Nav.Link href="#about" style={{color:"white"}}>Data Structre</Nav.Link>
             <Nav.Link href="#services" style={{color:"white"}}>Algortihm</Nav.Link>
             <Nav.Link href="#contact" style={{color:"white"}}>Computer networks</Nav.Link>
             </Nav>
             <Form inline>
             <FormControl type="text" placeholder ="Search" className ="ml-auto" /> 
             </Form>
             </Navbar.Collapse>
             </Navbar>
             </div>

    
)
         }
export default BlogNav;