import { react, useState, useEffect} from 'react'
import { getAllHomes } from '../../utilities/homes-api'
import HomeCard from '../../components/HomeCard/HomeCard'

export default function HomePage(){
    
    const [homes, setHomes] = useState([])
    
    useEffect(()=>{
        (async () => {
            setHomes(await getAllHomes())
        })()
    }, [])

    return(
        <main>
            <h1>Homeviewer</h1>
            <button>Add new item</button>
            <ol>
                {homes.length > 0? 
                    homes.map(
                        home=><HomeCard title={home.title} description={home.description} image_url={home.image_url} price={home.price} likes={home.price} />
                    )
                    :
                    null
                }
            </ol>
        </main>
    )
}