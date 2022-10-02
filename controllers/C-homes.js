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
        db.run(`INSERT INTO homes (title, description, image_url, price) VALUES(?,?,?,?)`, SQLFields)
        res.json(req.body)
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
    const likeHomeSQL = `UPDATE homes SET likes=likes+1 WHERE id=${req.body.id}`
    const params = []
    db.run(likeHomeSQL, params, (err, result)=>{
        if(err) res.status(400)
        res.json({
            "message":"Counter incremented.",
            "increment":"1"
        })
    })
}

module.exports = {
    allHomes,
    addHome,
    editHome,
    deleteHome,
    likeHome
}