import PostCard from "@/componets/PostCard";



async function loadPost() {
   const res = await  fetch("https://jsonplaceholder.typicode.com/posts")
   const data =  await res.json()
   
  await new Promise((resolve)=> setTimeout(resolve,4000))
  return data
   
}
export interface Post {
    title:string
    id:number
    body:string
}
const page =  async() => {
  const dataPost: Post[] = await loadPost()
  return (
    <>Post pahe
    {dataPost.map((post)=>(
        < PostCard key={post.id} {...post}/>
       
    ))}
   </>
  )
}

export default page