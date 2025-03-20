"use client"
import Link from "next/link";
import {use} from 'react'

export default  function NewArticle({params, searchParams}:{
    params:Promise<{articleid:string}>,
    searchParams:Promise<{lang?:"en" |"fr" |'es'}>
}){
const {articleid}=use(params);
const {lang='en'}=use(searchParams);

    return(
        <div>
            <h1>News Article in {articleid} {lang}</h1>
            <p>Reading Article in {lang} </p>

            <Link href={`/article/${articleid}?lang=en`}>English </Link> 
            <Link href={`/article/${articleid}?lang=es`}>Spanish </Link> 
            <Link href={`/article/${articleid}?lang=fr`}>French </Link> 
        </div>
    )
}