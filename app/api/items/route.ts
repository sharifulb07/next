
export const dynamic='force-static';

export async function GET(){
    const res=await fetch('https://jsonplaceholder.typicode.com/posts',{
        headers:{
            'Content-Type':'application/json',
            'API_KEY':process.env.DATA_API_KEY
        }
    })
    const data=await res.json()

    return Response.json({data})
}
