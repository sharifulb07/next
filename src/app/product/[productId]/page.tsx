export default async function ProductPage({ params }:
    { params: Promise<{ productId: string }> }) {
    const { productId } = await params;
    return (
        <div>
            <h1> This is product: {productId} </h1>
        </div>
    )
}

