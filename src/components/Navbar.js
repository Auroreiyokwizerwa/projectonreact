import React, { useState } from 'react';
import '../components/styles.css/navbar.css';
import { Modal, Button } from 'react-bootstrap';


const Navbar = (props) => { 

  const handleShow = () =>props.setShow(true);
  const handleClose = () => props.setShow(false);
  return(
    <>
    <nav>
        <div className='nav-box'>
            <span className='online-shopping'>
              LINGINIER SHOP .com
            </span>
            <div className='cart'>
              <span>
                 <i className="fas fa-cart-plus"></i>
              </span>
            </div>
        </div>
        <span>
        <Button className='add-btn' onClick={handleShow}>
          ADD NEW ITEM</Button>
        </span>
        
    </nav>
    </>


  )
}
export default Navbar