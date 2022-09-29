import react from 'react'
import { likeHome } from '../../utilities/homes-api'


export default function HomeCard({ home }){
    return(
        <div className=''>
            <h1>{home.title}</h1>
            <button onClick={()=>{likeHome(home.id)}}>Like this home!</button>
            <h1>{home.image_url}</h1>
            <h1>{home.price}</h1>
            <h1>Like button click counter: {home.likes}</h1>
        </div>
    )
}