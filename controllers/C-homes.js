const db = require('../config/database')

const allHomes = async (req, res) => {
    console.log("All homes controller hit.")
    const allHomesSQL = 'SELECT * FROM homes ORDER BY id ASC;'
    const params = []
    db.all(allHomesSQL, params, (err, rows) => {
        if(err){
            res.status(400).json({"error":err.message})
        }else{
            console.log("sending rows", rows)
            res.set("Access-Control-Allow-Origin", "*")
            res.json(rows)
        }

    })
}

const addHome = async (req,res) => {

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
        console.log(result)
        res.set("Access-Control-Allow-Origin", "*")
        res.json(result)

    })
}

module.exports = {
    allHomes,
    addHome,
    editHome,
    deleteHome,
    likeHome
}