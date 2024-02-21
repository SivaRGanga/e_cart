import React from "react"
import { Link } from "react-router-dom"
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useSelector } from "react-redux";
import wishlistslice from "../redux/slice/wishlistslice";


function Header() {
  const wishlist =useSelector((state)=>state.wishlistreducer)
  const cart=useSelector((state)=>state.cartreducer)
  return (
    <>
      <nav style={{zIndex:"1"}} class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <Link to={'/'} style={{textDecoration:'none'}}>E-Cart</Link>
          </a>
          <img src="https://static.vecteezy.com/system/resources/previews/000/437/110/original/vector-add-to-cart-vector-icon.jpg" alt="" height={50} width={50} />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor04" aria-controls="navbarColor04" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor04">
            <ul class="navbar-nav me-auto">
              {/* <li class="nav-item">
                <a class="nav-link active" href="#">
                  Home
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li> */}
        
              <li class="nav-item ">
                <Link class="nav-link" to={'/wishlist'}>
                <i class="fa-solid fa-heart fa-beat"></i>Wishlist
                <Badge bg="secondary">{wishlist.length}</Badge>
                </Link>
              </li>


              <li class="nav-item">
                <Link class="nav-link" to={'/cart'}>
                <i class="fa-solid fa-cart-shopping fa-beat"></i>Cart
                <Badge bg="secondary">{cart.length}</Badge>
                </Link>
              </li>
           
            </ul>

            <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
         
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
