const sqlite3 = require('sqlite3')

const testData = [
    ["Home1", "Description1", "url1", "price1", 0],
    ["Home2", "Description2", "url2", "price2", 2],
    ["Home3", "Description3", "url3", "price3", 7],
    ["Home4", "Description4", "url4", "price4", 4],
    ["Home5", "Description5", "url5", "price5", 113],
    ["Home6", "Description6", "url6", "price6", 90],
    ["Home7", "Description7", "url7", "price7", 5],
    ["Home8", "Description8", "url8", "price8", 2],
    ["Home9", "Description9", "url9", "price9", 0],
    ["Home10", "Description10", "url10", "price10", 0],
    ["Home11", "Description11", "url11", "price11", 0],
    ["Home12", "Description12", "url12", "price12", 0],
]

let db = new sqlite3.Database('db.sqlite', (err)=>{
    if (err){
        console.log("Error creating db.")
        throw err
    }
    console.log("Connected to db.")
/*     db.run(
        'DROP TABLE homes;'
    ) */
    db.run(
        'CREATE TABLE homes (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, image_url TEXT, price FLOAT(11,2), likes INTEGER);',
        (err) => { 
            if(err){
                console.log('Table already exists.')
            }else{
                //Load test data here.
                const insertSQL = 'INSERT INTO homes (title, description, image_url, price, likes) VALUES(?,?,?,?,?);'
                testData.forEach(row=>db.run(insertSQL,row))
                console.log("Seeded db.")
            }
    })
})
module.exports = db