import { useState, useEffect} from 'react'
import { getAllHomes, addNewHome } from '../../utilities/homes-api'
import HomeCard from '../../components/HomeCard/HomeCard'
import { likeHome } from '../../utilities/homes-api'
import e from 'cors'

export default function HomePage(){
    const [homes, setHomes] = useState([])
    const [addHomeForm, setAddHomeForm] = useState(false)
    const [homeData, setHomeData] = useState({
        title:"",
        description:"",
        image_url:"",
        price:"",
    })

    const incrementLikeCounter = async (id) => {
        const res = await likeHome(id)
        console.log(res)
        if(res.increment === '1'){
            const newHomes = [...homes]
            for(let home of newHomes){
                home.id === id && home.likes++
            }
            setHomes(newHomes)
        }
    }
    useEffect(()=>{
        (async () => {
          setHomes(await getAllHomes())
        })()
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formSubmit = await addNewHome(homeData)
        console.log(formSubmit)
    }

    const handleChange = (e) => {
        e.preventDefault()
        setHomeData({
            ...homeData,
            [e.target.name]:e.target.value
        })
    }

    return(
        <main>
            <h1>Homeviewer</h1>
            <button onClick={()=>{setAddHomeForm(!addHomeForm)}}>Add new item</button>
            {addHomeForm?
                <form onSubmit={handleSubmit}>
                    <h1>Form</h1>
                    <label htmlFor="title">Title of Listing</label>
                    <input type="text" value={homeData.title} onChange={handleChange} maxlength="25" name="title" id="" />
                    <label htmlFor="description">Description</label>
                    <textarea name="description" value={homeData.description} onChange={handleChange} maxlength="500" id="" cols="30" rows="10"></textarea>
                    <label htmlFor="image_url">Image URL</label>
                    <input type="text" value={homeData.image_url} onChange={handleChange} name="image_url" id="" />
                    <label htmlFor="price">Price</label>
                    <input type="number" value={homeData.price} onChange={handleChange} max="1000000000" step="0.01" name="price" id="" />
                    <button type="submit">Submit!</button>
                </form>
                :
                null
            }
            <ol>
                {homes.length > 0? 
                    homes.map(
                        home=><HomeCard home={home} incrementLikeCounter={incrementLikeCounter}/>
                    )
                    :
                    null
                }
            </ol>
        </main>
    )
}