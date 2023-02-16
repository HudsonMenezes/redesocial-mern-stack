import React from "react";
import "./PostSide.css";
import PostShare from "../PostShare/PostShare";

const PostSide = () => {
  return (
    <div className="PostSide">
      <PostShare />
    </div>
  );
};

export default PostSide;

/* 
import React from 'react'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import './PostSide.css'
const PostSide = () => {
  return (
   <div className="PostSide">
       <PostShare/>
       <Posts/>
   </div>
  )
}

export default PostSide
*/