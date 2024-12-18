import React from 'react'
import { useParams } from 'react-router-dom';

function Blog() {
  // let params = useParams();
  let { "*": splat } = useParams();
  return (
    <>
    <div>Blog</div>
    <div>{splat}</div>
    </>
  )
}

export default Blog