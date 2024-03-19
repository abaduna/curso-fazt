
import { NextResponse } from "next/server"
export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()
    return NextResponse.json({data:data})
}


export async function POST(req:Request) {
    //para el req.body
    const data =  await req.json()
    console.log(data);
    
    return NextResponse.json({MESSAGE:"CREANDI DATOS"})
}

export function PUT() {
    
    return NextResponse.json({MESSAGE:"ACTUALIZANDO DATOS"})
}

export function DELETE() {
    
    return NextResponse.json({MESSAGE:"DELETED DATOS"})
}