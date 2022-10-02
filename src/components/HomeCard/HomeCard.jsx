
export default function HomeCard({ home, incrementLikeCounter }){
    return(
        <div className=''>
            <h1>{home.title}</h1>
            <button onClick={()=>{incrementLikeCounter(home.id)}}>Like this home!</button>
            <h1>{home.image_url}</h1>
            <h1>{home.description}</h1>
            <h1>{home.price}</h1>
            <h1>Like button click counter: {home.likes}</h1>
        </div>
    )
}