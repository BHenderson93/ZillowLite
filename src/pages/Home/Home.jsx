import { useState, useEffect} from 'react'
import { getAllHomes } from '../../utilities/homes-api'
import HomeCard from '../../components/HomeCard/HomeCard'

export default function HomePage(){
    const [homes, setHomes] = useState([])
    const [addHomeForm, setAddHomeForm] = useState(false)
    useEffect(()=>{
        (async () => {
          setHomes(await getAllHomes())
        })()
    },[])
    return(
        <main>
            <h1>Homeviewer</h1>
            <button onClick={()=>{setAddHomeForm(!addHomeForm)}}>Add new item</button>
            <ol>
                {homes.length > 0? 
                    homes.map(
                        home=><HomeCard home={home}/>
                    )
                    :
                    null
                }
            </ol>
        </main>
    )
}