import { NextResponse } from "next/server";
interface paramsProps  {
    params:string
}
export function GET(request:Request,{params}:paramsProps){
    console.log(params);
   const {searchParams} = new URL(request.url)
    console.log(searchParams.get("name") );
    
    
    return NextResponse.json("buscando usuarios")
}