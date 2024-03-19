"use client"
import { useParams } from "next/navigation"
function User() {
    const params = useParams()
    console.log(params);
    
  return (
    < >
        <button onClick={()=>{
            console.log("worck");
        }}>
        click    
        </button>
    </ >
  )
}

export default User