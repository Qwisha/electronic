import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Row, Col } from 'react-bootstrap';


function Home() {
    return (
       <>
         <div class="">
      
      </div>
      <div style={{ height: '100px' }} className="bg-dark"></div>
      <div className='container d-flex my-4'>
        <div className='row flex-row-reverse'>
          <div className='slid col-lg-7 col-md-12'>
            <Carousel className='height1'>
              <Carousel.Item>
                <img
                  className="d-block w-100 object height1"
                  src={require('./image/asset\ 125.jpeg')}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 height1 object"
                  src={require('./image/asset\ 126.jpeg')}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>

          </div>
          <div className='col-lg-5 col-md-12 mt-lg-0 md-mt-5'>
            <div className=' me-4 '>
              <img className='object' src={require('./image/asset\ 1.jpeg')} alt="" srcset="" height={'310px'} />
            </div>
            <div className='mt-3 me-4'>
              <img className='object' src={require('./image/asset\ 2.jpeg')} height={'310px'} alt="" srcset="" />
            </div>
          </div>
        </div>

      </div>
      <div className="container ">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-12">
            <img className='object' src={require('./image/asset 3.jpeg')} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row g-4">
          <div className="col-12 col-lg-3 col-md-6 ">
            <div className="box_product">
            <div class="icon my-5 mx-4">
              <div className='img1'>
                <img src={require('./image/asset 4.png')} className='height1 object' alt="" srcset="" />

              </div>
            </div>
            <div class="content ">
              <p class="text-dark text-center">aliquam consequat mattis</p>
              <p className='text-center'>
                $120.00 <del>$180.00</del>
              </p> <p className='add_card'>add to card</p>
            </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6 ">
            <div className="box_product">
            <div class="icon my-5 mx-4">
              <div className='img1'>
                <img src={require('./image/asset 4.png')} className='height1 object' alt="" srcset="" />

              </div>
            </div>
            <div class="content ">
              <p class="text-dark text-center">aliquam consequat mattis</p>
              <p className='text-center'>
                $120.00 <del>$180.00</del>
              </p> <p className='add_card'>add to card</p>
            </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6 ">
            <div className="box_product">
            <div class="icon my-5 mx-4">
              <div className='img1'>
                <img src={require('./image/asset 4.png')} className='height1 object' alt="" srcset="" />

              </div>
            </div>
            <div class="content ">
              <p class="text-dark text-center">aliquam consequat mattis</p>
              <p className='text-center'>
                $120.00 <del>$180.00</del>
              </p> <p className='add_card'>add to card</p>
            </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6 ">
            <div className="box_product">
            <div class="icon my-5 mx-4">
              <div className='img1'>
                <img src={require('./image/asset 4.png')} className='height1 object' alt="" srcset="" />

              </div>
            </div>
            <div class="content ">
              <p class="text-dark text-center">aliquam consequat mattis</p>
              <p className='text-center'>
                $120.00 <del>$180.00</del>
              </p> <p className='add_card'>add to card</p>
            </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mt-3">
            <img src={require('./image/asset 82.jpeg')} alt="" class='object height1' srcset="" />
          </div>
          <div className="col-12 col-lg-6 mt-3">
            <img src={require('./image/asset 83.jpeg')} alt="" class='object height1' srcset="" />

          </div>
        </div>
      </div>

      
       </>
    )
}

export default Home