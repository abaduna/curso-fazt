import PostCard from "@/componets/PostCard";



async function loadPost() {
   const res = await  fetch("https://jsonplaceholder.typicode.com/posts")
   const data =  await res.json()
   
  
  return data
   
}
export interface Post {
    title:string
    id:number
    body:string
}
const Postspage =  async() => {
  const dataPost: Post[] = await loadPost()
  return (
    <>Post pahe
    {dataPost.map((post)=>(
        < PostCard key={post.id} {...post}/>
       
    ))}
   </>
  )
}

export default Postspage