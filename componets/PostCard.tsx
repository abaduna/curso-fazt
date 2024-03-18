"use client"
import { Post } from "@/app/post/page"


function PostCard({id,title,body}:Post) {
  return (
    <div>
    <h4>{title}</h4>  
    <p>{body}</p>
    <button onClick={()=> console.log(title)}>title</button>
 </div>
  )
}

export default PostCard