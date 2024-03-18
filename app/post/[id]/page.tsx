import Postspage from "../page";
import { Suspense } from "react";
 async function loadPost(id:number){
  
  
   const rest = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   const data = await rest.json()
   //console.log(data);
   
   return data 
} 

export default async function page({params}:any) {
  
 const postLPMS = await loadPost(params.id)
 
 
  return (
    <div>
      <h1>poist page-{params.id}</h1>
      <p>{postLPMS.title}</p>
      <p>{postLPMS.body}</p>
      <hr/>
      <h3>Otras publicaciones</h3>
      <Suspense fallback={<h1>Cargando ...</h1>}>
        <Postspage/> 
      </Suspense>
      
    </div>
  )
}
