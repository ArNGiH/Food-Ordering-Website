import { prisma } from "../products/utils/connect";
import { NextResponse } from "next/server";



export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
  }
};

export const POST = async () => {
  // Implement your POST handler logic here
  return new NextResponse("Hello", { status: 200 });
};
