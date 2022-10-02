import { react, useState } from 'react'
import { Link } from 'react-router-dom'


export default function DetailPage({ home, handleLike, liked }) {
    return (
        <main>
            <div className="container">
                <Link to="/" ><button>Back to main</button></Link>
                <h1>{home.title}</h1>
                <button onClick={() => { handleLike(home.id) }}>{liked ? "Unl" : "L"}ike this home!</button>
                <h1>Likes: {home.likes}</h1>
                <img src={home.image_url} onError={e => {
                    e.target.src = "https://previews.123rf.com/images/studioarz/studioarz1806/studioarz180600003/104730767-white-home-with-question-mark-3d-render-and-computer-generated-image-.jpg"
                    e.onerror = null
                }} />

                <h1>{home.description}</h1>
                <h1>Price: ${home.price}</h1>
            </div>
        </main>
    )
}