const db = require('../config/database')

const allHomes = async (req, res) => {
    console.log("All homes controller hit.")
    const allHomesSQL = 'SELECT * FROM homes;'
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

}

module.exports = {
    allHomes,
    addHome,
    editHome,
    deleteHome,
    likeHome
}