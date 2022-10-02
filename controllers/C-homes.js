const db = require('../config/database')

const allHomes = async (req, res) => {
    console.log("All homes controller hit.")
    const allHomesSQL = 'SELECT * FROM homes ORDER BY id DESC;'
    const params = []
    db.all(allHomesSQL, params, (err, rows) => {
        if(err){
            res.status(400).json({"error":err.message})
        }else{
            console.log("sending rows", rows)
            res.json(rows)
        }
    })
}

const addHome = async (req,res) => {
    console.log('Add home controller hit.', req.body)
    const SQLFields = [req.body.title, req.body.description, req.body.image_url, req.body.price]
    try{
        db.run(`INSERT INTO homes (title, description, image_url, price, likes) VALUES(?,?,?,?, 0);`, SQLFields, function(err){
            if(err){
                console.log(err)
            }else{
                const response = {...req.body, likes:0, id:this.lastID}
                console.log('sending response', response)
                res.json(response)
            }
        })
    }
    catch(err){
        console.log(err)
        res.json({
            "message":"Unsuccessful create"
        })
    }
    
}

const editHome = async (req,res) => {

}

const deleteHome = async (req,res) => {

}

const likeHome = async (req,res) => {
    console.log("Like home hit with", req.body)
    // Data validations to ensure directoin is either +1 or -1 and the provided id is only an integer.
    if((req.body.dir === '+1' || req.body.dir === '-1') && parseInt(req.body.id) ){
        const likeHomeSQL = `UPDATE homes SET likes=likes${req.body.dir} WHERE id=${req.body.id}`
        const params = []
        db.run(likeHomeSQL, params, (err, result)=>{
            if(err) res.status(400)
            res.json({
                "message":"Counter incremented.",
                "increment":`${req.body.dir}`
            })
        })
    }else{
        res.json({
            message:"Invalid like input."
        })
    }

}

module.exports = {
    allHomes,
    addHome,
    editHome,
    deleteHome,
    likeHome
}