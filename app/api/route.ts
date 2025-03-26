import { headers } from "next/headers";

export async function GET(request:Request){
   const headerList=await headers()
   const referer=await headerList.get('referer');

    return new Response("This is nextjs start project ",{
        status:200,
        headers:{referer:referer}
    })
}