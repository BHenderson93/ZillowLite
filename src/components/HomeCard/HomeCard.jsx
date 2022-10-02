
export default function HomeCard({ home }){
    return(
        <div className=''>
            <h1>{home.title}</h1>
            <img src={home.image_url} onError={e=>{
                e.target.src = "https://previews.123rf.com/images/studioarz/studioarz1806/studioarz180600003/104730767-white-home-with-question-mark-3d-render-and-computer-generated-image-.jpg"
            e.onerror = null}} />
            <h1>Price: ${home.price}</h1>
            {home.likes && <h1>Likes: {home.likes}</h1>}
        </div>
    )
}