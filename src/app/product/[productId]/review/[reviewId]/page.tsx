import {  redirect } from "next/navigation";
export default async function ReviewPage({ params }:
    { params: Promise<{ productId: string, reviewId: string }> }) {
    const { productId, reviewId } = await params;
    if (Number(reviewId) > 1000) {
        // notFound()
        redirect("/product")
    }

    return (
        <div>
            <h1>This is {productId} and product review id: {reviewId} </h1>
        </div>
    );

}