import {commonAPI} from './commonAPI'
import { serverURL } from './serverURL'


// upload a video

export const uploadVideo = async(reqBody)=>{
    //call post http request to http://http://localhost:4000/videos to add video in json server and return response to add component
    return await commonAPI("POST",`${serverURL}/videos`,reqBody)
}

//get all videos from json server

export const getAllVideos = async ()=>{
    //make get http request to http://localhost:4000/videos to get all videos from json server and return response to view component
    return await commonAPI("GET",`${serverURL}/videos`,"")
}

//get a videos from json server

export const getAVideo = async (id)=>{
    //make get http request to http://localhost:4000/videos to get a video from json server and return response to videoCard component
    return await commonAPI("GET",`${serverURL}/videos/${id}`,"")
}

//remove video from json server

export const deleteVideo = async (id)=>{
    //make get http request to http://localhost:4000/videos to get a video from json server and return response to videoCard component
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}

//store watch video history to json server
export const addToHistory = async(videoDetails)=>{
    //make post http request to http://http://localhost:4000/history to add video history in json server and return response to videoCard component
    return await commonAPI("POST",`${serverURL}/history`,videoDetails)
}

//get all watching viceo history
export const getAllHistory = async()=>{
     //make dlete http request to http://http://localhost:4000/history/id to delete video history in json server and return response to history component
     return await commonAPI("GET",`${serverURL}/history`,"")
}


//deleting all watching viceo history
export const deleteHistory = async(id)=>{
    //make get http request to http://http://localhost:4000/history to get video history in json server and return response to watchHistory component
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}

// add a category to json servr

export const addCategory = async(reqBody)=>{
    //make post http request to http://http://localhost:4000/categories to add category in json server and return response to category component
    return await commonAPI("POST",`${serverURL}/categories`,reqBody)
}

// get all category to json servr

export const getAllCategory = async()=>{
    //make get http request to http://http://localhost:4000/categories to get all category in json server and return response to category component
    return await commonAPI("GET",`${serverURL}/categories`,"")
}

// remove a category to json server

export const deleteCategory = async(id)=>{
    //make post http request to http://http://localhost:4000/categories/id to delete particular category in json server and return response to category component
    return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})
}

// update a category from json server

export const updateCategory = async(id,body)=>{
    //make put http request to http://http://localhost:4000/categories/id to update particular category in json server and return response to category component
    return await commonAPI("PUT",`${serverURL}/categories/${id}`,body)
}