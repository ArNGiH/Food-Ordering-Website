import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY!);

export const POST = async (request: Request, { params }: { params: { orderId: string } }) => {
    const { orderId } = params;

    try {
        // Fetch the order from the database
        const order = await prisma.order.findUnique({
            where: {
                id: orderId
            },
        });

        if (!order) {
            return new NextResponse(JSON.stringify({ message: "Order not found" }), { status: 404 });
        }

        // Create a PaymentIntent with the order amount
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 10000000, // Replace this with the actual amount
            currency: "inr",
            automatic_payment_methods: {
                enabled: true
            },
        });

        // Update the order with the PaymentIntent ID
        await prisma.order.update({
            where: {
                id: orderId
            },
            data: { intent_id: paymentIntent.id }
        });

        // Respond with the client secret
        return new NextResponse(JSON.stringify({ clientSecret: paymentIntent.client_secret }), { status: 200 });

    } catch (error) {
        console.error("Error creating payment intent:", error);
        return new NextResponse(JSON.stringify({ message: "Internal server error" }), { status: 500 });
    }
};
