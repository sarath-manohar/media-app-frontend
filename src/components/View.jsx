import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from '../components/VideoCard'
import { getAllVideos } from '../services/allAPI'

function View({uoloadVideoServerResponse}) {
  const [allVideos,setAllVideos]= useState([])
  const [deleteVideoStatus,setDeleteVideoStatus]= useState(false)
  const getUploadedVideos = async ()=>{
  //make api call getAllVideos
  const {data}=await getAllVideos()
  setAllVideos(data);
  }

  useEffect(()=>{
    getUploadedVideos()
    setDeleteVideoStatus(false)
  },[uoloadVideoServerResponse,deleteVideoStatus])
  // console.log(allVideos);
  return (
    <>
     <Row>
        {
          allVideos.length>0?
          allVideos.map(video=>(
            <Col sm={12} md={6} lg={4} xl={3}>
            <VideoCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
          </Col>
          ))
        : <p className='fw-bolder fs-5 text-danger'>Nothing to Display!!!</p>
      } 
     </Row>
     
    </>
  )
}

export default View