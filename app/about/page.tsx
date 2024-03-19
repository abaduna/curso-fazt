"use client"
import { useRouter,useParams } from 'next/navigation'

function AboutPage() {
    const router = useRouter()
    return <section>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium velit consequatur ex est repudiandae rerum perferendis unde, omnis amet molestiae atque possimus facere molestias sapiente laborum ullam. Eveniet eos earum similique hic, repellendus natus numquam perspiciatis suscipit voluptates beatae explicabo et unde quaerat nam doloribus impedit veritatis cumque laudantium magnam mollitia corporis ut illum laborum! Non beatae esse quos, debitis ab quisquam ratione iste accusamus excepturi. Facilis deleniti molestiae omnis accusamus, a id totam, amet, similique accusantium nam assumenda autem natus fuga repellendus temporibus consectetur. Ipsam fugiat officiis consectetur ipsum sequi, possimus adipisci aperiam amet deserunt. Accusamus impedit nobis iste.</p>
        <button onClick={()=>{
            router.push('/')
        }} className="bg-sky-400 px-3 py-2">home</button>
    </section>

    
}
export default AboutPage