import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { addCategory, deleteCategory, getAVideo, getAllCategory, updateCategory } from '../services/allAPI';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoCard from './VideoCard';


function Category() {
  const [allCategories,setAllCategories]=useState([])
  const [categoryName,setCategoryName]=useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddCategory= async()=>{
    if(categoryName){
      let body={
        categoryName,allVideos:[]
      }
       //make api call
    const response = await addCategory(body)
    console.log(response);
    if(response.status>=200 && response.status<300){
      //hide modal
      handleClose()
      //rest state
      setCategoryName("")
      //get category last setp
      getCategories()
    }else{
      toast.error("something went wrong")
    }
    }else{
      toast.warning("please provide category name!!!")
    }
  
  }
  const getCategories = async ()=>{
    //make api call
    const {data}= await getAllCategory()
    setAllCategories(data)
  }
console.log(allCategories);
  useEffect(()=>{
    getCategories()
  },[])

  const handleDelete = async(id)=>{

    await deleteCategory(id)
    getCategories()
  }

const dragOver = (e)=>{
  console.log("video drag over category");
  e.preventDefault()
}
  const videoDrop = async (e,categoryId)=>{
    console.log("video dropped inside category Id:"+categoryId);
    const videoId = e.dataTransfer.getData("videoId")
    console.log("Video Card Id:",videoId);
    // getVideo Detail
    const {data} = await getAVideo(videoId)
    console.log(data);
    //get category details
    const selectedCategory = allCategories?.find(item=>item.id==categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    // make api call to update category
    await updateCategory(categoryId,selectedCategory)
    getCategories()
  }
  
  return (
    <>
    <div className="d-grid ms-3 ">
      <button onClick={handleShow} className='btn btn-info'>Add New Category</button>
    </div>
    {
      allCategories?.length>0?allCategories?.map(item=>(
        <div className='m-5 border rounded p-3' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
          <div className='d-flex justify-content-between align-items-center'>
            <h6>{item?.categoryName}</h6>
            <button onClick={()=>handleDelete(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
          </div>
        <Row>
          {
            item?.allVideos && item?.allVideos.map(card=>(
              <Col sm={12}>
              <VideoCard displayData={card} insideCategory={true}/>
              </Col>
            ))
           
          }
        </Row>
        </div>
      )):<p className='fw-bolder fs-5 text-danger'>Nothing to Display!!!</p>
    }
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload A Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
    <Form className='border border-secondary rounded p-3'>
         
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Category Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)} />
       
      </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      position='top-center'
      theme='colored'
      autoClose={2000}/>
    </>
  ) 
}

export default Category