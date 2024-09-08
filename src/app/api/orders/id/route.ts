
import { prisma } from "@/utils/connect"
import { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export const PUT = async( req:NextRequest,{params}:{params:{id:string}})=>{
    const {id} = params

    try {
        const body=await req.json();
        
        await prisma.order.update({
            where:{
                id:id
            },
            data: {status:body}
        })
        return new Response(JSON.stringify({message: `Product with id ${id} updated successfully`}), {status: 200})
        
    } catch (err) {
        console.error(err)
        return new Response(JSON.stringify({message: 'Error updating product'}), {status: 500})
    }
}