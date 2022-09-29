import react from 'react'

export default function HomeCard({title, image_url, price}){
    return(
        <div>
            <h1>{title}</h1>
            <h1>{image_url}</h1>
            <h1>{price}</h1>
        </div>
    )
}