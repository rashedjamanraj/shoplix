// import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";
// import { ProductType } from "../../../../typs";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// export async function POST(request: NextRequest) {
//   try {
//     const { items, email } = await request.json();

//     const extractingItem = items.map((item: ProductType) => ({
//       quantity: item.quantity,
//       price_data: {
//         currency: "usd",
//         unit_amount: Math.round(item.price * 100),
//         product_data: {
//           name: item.title,
//           description: item.description,
//           images: item.images,
//         },
//       },
//     }));

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: extractingItem,
//       mode: "payment",
//       success_url: `${process.env.NEXTAUTH_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${process.env.NEXTAUTH_URL}/cancel`,
//       metadata: {
//         email,
//       },
//     });

//     return NextResponse.json({
//       id: session.id,
//     });
//   } catch (error: any) {
//     console.error(error);

//     return NextResponse.json(
//       { error: error.message },
//       { status: 500 }
//     );
//   }
// }



import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { ProductType } from "../../../../typs";



const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { items, email } = await request.json();

    const extractingItem = items.map((item: ProductType) => {
      const discountAmount = (item.price * (item.discountPercentage || 0)) / 100;
      const discountedPrice = item.price - discountAmount;
      const unitAmountInCents = Math.round(discountedPrice * 100);

      return {
        quantity: item.quantity,
        price_data: {
          currency: "usd",
          unit_amount: unitAmountInCents,
          product_data: {
            name: item.title,
            description: item.description,
            images: item.images,
          },
        },
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: extractingItem,
      mode: "payment",
      success_url: `${process.env.NEXTAUTH_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/cancel`,
      metadata: {
        email,
      },
    });

    // CHANGE HERE: Return the session.url instead of session.id
    return NextResponse.json({
      url: session.url,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}