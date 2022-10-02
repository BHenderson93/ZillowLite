import { react, useState} from 'react'
import {Link} from 'react-router-dom'
export default function DetailPage({home}){
    return(
        <main>
            <Link to="/" ><button>Back to main</button></Link>
            <h1>Detail</h1>
            <h1>{home.title}</h1>
        </main>
    )
}