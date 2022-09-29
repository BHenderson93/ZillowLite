import { react, useState, useEffect} from 'react'
import { getAllHomes } from '../../utilities/homes-api'
export default function HomePage(){
    
    const [homes, setHomes] = useState([])
    
    useEffect(()=>{
        console.log('Loading...')
        //Get home data and pass to home cards - image url, title, price
        
        const allHomes = async () => {
            console.log(await getAllHomes())
        }
        allHomes()
    }, [])

    return(
        <main>
            <h1>Homeviewer</h1>
            <button>Add new item</button>
        </main>
    )
}