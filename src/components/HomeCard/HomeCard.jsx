
export default function HomeCard({ home, incrementLikeCounter }){
    return(
        <div className=''>
            <h1>{home.title}</h1>
            <button onClick={()=>{incrementLikeCounter(home.id)}}>Like this home!</button>
            <img src={home.image_url} alt="" />
            <h1>{home.description}</h1>
            <h1>{home.price}</h1>
            <h1>Like button click counter: {home.likes}</h1>
        </div>
    )
}