import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {

  const navigateByUrl = useNavigate()

  return (
    <>
   <Row className='mt-5 align-items-center justify-content-between w-100'>
  <Col></Col>
  <Col lg={5}>
       <h3>Welcome To <span className='text-warning'>Media Player</span></h3>
       <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum totam iure illo esse facere quisquam ullam, inventore iusto! Eum possimus sequi eveniet assumenda! Commodi, et qui voluptatibus nemo voluptas alias!</p>
       <button onClick={()=>navigateByUrl('/home')} className='mt-4 btn btn-info'>Get Started</button>
  </Col>
  <Col lg={5}>
    <img className='img-fluid' src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="player" />
  </Col>
  <Col></Col>

   </Row>

   <div className="container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column">
    <h3>Features</h3>
    <div className="cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100">
    <Card className='p-4' style={{ width: '18rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '18rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
    

    <Card className='p-4' style={{ width: '18rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
    
    


    </div>


   </div>

<div className="container border rounded p-5 border-secondary b-5 mt-5 d-flex align-items-center justify-content-between w-100">

  <div className="col-lg-5">
    <h3 className='mb-5 text-warning'>Simple,Powerful & Fast</h3>
    <h6 className='mb-3'><span className='fs-5 fw-bolder text-warning'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, fuga. Quas omnis blanditiis, iure eligendi cum eos corporis id maxime dolores eum illo totam fugiat assumenda quisquam minima! Laboriosam, amet!</h6>

    <h6 className='mb-3'><span className='fs-5 fw-bolder text-warning'>Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, fuga. Quas omnis blanditiis, iure eligendi cum eos corporis id maxime dolores eum illo totam fugiat assumenda quisquam minima! Laboriosam, amet!</h6>

    <h6 className='mb-3'><span className='fs-5 fw-bolder text-warning'>Managing History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, fuga. Quas omnis blanditiis, iure eligendi cum eos corporis id maxime dolores eum illo totam fugiat assumenda quisquam minima! Laboriosam, amet!</h6>

  </div>
  <div className="video col-lg-5">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/1F3hm6MfR1k?si=neKSn_cODcH63xZ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>

</div>




    </>
  )
}

export default LandingPage