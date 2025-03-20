"use client"
import Link from "next/link"

import { useState } from "react"

import { usePathname } from "next/navigation"


const NavLinks=[
    {name:"Register", href:"/register"},
    {name:"Login", href:"/login"},
    {name:"Forget-Password", href:"/forget-password"},
]



export default function Template({children}:{children:React.ReactNode}){
    const [input, setInput]=useState('');
    
    const pathName=usePathname();

    return(
        <div>
            <div>
                <input className="border" value={input} onChange={(e)=>setInput(e.target.value)} />
            </div>
            {
                NavLinks.map((link)=>{
                    const isActive=pathName===link.href || (pathName.startsWith(link.href) && link.href!=='/')

                    return(
                        <Link
                        className={isActive? "font-bold mr-4": 'text-blue-400 mr-4'}
                        href={link.href}
                        key={link.name}

                        >
                            {link.name}
                        </Link>
                    )
                })
            }

{children}
        </div>
    )
}