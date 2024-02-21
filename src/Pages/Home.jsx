import React from "react"
import { Col, Row } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import useFetch from "../Hooks/useFetch"
import { useDispatch } from "react-redux"
import { addTowishlist } from "../redux/slice/wishlistslice"
import { addtocart } from "../redux/slice/Cartslice"

function Home() {

  const data = useFetch("https://dummyjson.com/products")
  console.log(data);
  const dispatch = useDispatch()
  return (
    <>
    <Row>
    { 
     data?.length>0?data?.map((products,index)=>(
      <Col className="mb-5" sm={12} md={6} lg={4} xl={3} style={{ padding: "40px" }}>
        <Card key={index} style={{ width: "18rem",height:'30rem' }}>
          <Card.Img variant="top" src={products?.thumbnail} height={'200px'} />
          <Card.Body>
            <Card.Title>{products?.title}</Card.Title>
            <Card.Text>{products?.description.slice(0,50)}</Card.Text>

            <div className="d-flex justify-content-between ">
              <Button onClick={()=>dispatch(addTowishlist(products))} variant="danger">
                <i class="fa-solid fa-heart"></i>
              </Button>
              <Button onClick={()=>dispatch(addtocart(products))} variant="success">
                <i class="fa-solid fa-cart-shopping"></i>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      )):<p>nothing to display</p>
      }
</Row>
    </>
  )
}

export default Home
