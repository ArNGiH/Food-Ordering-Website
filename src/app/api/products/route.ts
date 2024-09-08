import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";


//FETCH ALL THE PRODUCTS
export const GET = async (req:NextRequest) => {
 const {searchParams}= new URL(req.url)
 const cat=searchParams.get("cat")


  try {
    const products = await prisma.product.findMany({
        where:{
            ...(cat ? {catSlug:cat}:{isFeatured:true})
        }
    });
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
  }
};

export const POST = async () => {
  // Implement your POST handler logic here
  return new NextResponse("Hello", { status: 200 });
};
