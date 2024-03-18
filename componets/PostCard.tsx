"use client"
import { Post } from "@/app/post/page"

import Link from "next/link"


function PostCard({id,title,body}:Post) {
  const idurl = id.toString()
  return (
    <div>
    <h4>{title}</h4>  
    <p>{body}</p>
    <Link href={`http://localhost:3000/post/${idurl}`}><b>Ir</b></Link>
 </div>
  )
}

export default PostCard