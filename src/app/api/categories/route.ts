import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";



export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
  }
};


export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json(); // Parse the JSON request body
    const newCategory = await prisma.category.create({
      data: body,
    });
    return new NextResponse(JSON.stringify(newCategory), { status: 201 });
  } catch (error) {
    console.error(error); 
    return new NextResponse(
      JSON.stringify({ message: "Failed to create category" }),
      { status: 500 }
    ); 
  }
};
