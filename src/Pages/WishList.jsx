import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addTowishlist, removefromwishlist } from '../redux/slice/wishlistslice'
import { addtocart } from '../redux/slice/Cartslice'



function WishList() {
  const wishlistArray=useSelector((state)=>state.wishlistreducer)
  const dispatch=useDispatch()
  const handlewishlistcart= (products)=>{
    dispatch(addtocart(products))
    dispatch(removefromwishlist(products.id))
  }
  return (
    <div>
      <Row>
        {
          wishlistArray.length>0?
          wishlistArray.map((products,index)=>(
            <Col className="mb-5" sm={12} md={6} lg={4} xl={3} style={{ padding: "40px" }}>
            <Card key={index} style={{ width: "18rem",height:'30rem' }}>
              <Card.Img variant="top" src={products?.thumbnail} height={'200px'} />
              <Card.Body>
                <Card.Title>{products?.title}</Card.Title>
                <Card.Text>{products?.description.slice(0,50)}</Card.Text>
    
                <div className="d-flex justify-content-between ">
                  <Button onClick={()=>dispatch(removefromwishlist(products.id))}  variant="danger">
                    <i class="fa-solid fa-trash"></i>
                  </Button>
                  <Button onClick={()=>handlewishlistcart(products)} variant="success">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        )):<div style={{height:'100vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
          <img height={'500px'} className='rounded' src="https://assets.materialup.com/uploads/38936b35-9823-47e1-98cc-fb8b5c1d962e/preview.jpg" alt="" />
          <h3>Wish List is Empty</h3>
          <Link to='/'>Back To Home</Link>

        </div>
    
          }
          

          

        
      </Row>
    </div>
  )
}

export default WishList
