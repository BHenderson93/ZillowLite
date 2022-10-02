const sqlite3 = require('sqlite3')

const testData = [
    ["Beautiful little thing!", "Move-In Ready 4 Bedroom Meadowdale Home + Huge BONUS ROOM! UPDATED with new FLOORING, NEW interior/exterior PAINT, new QUARTZ countertops w/under-mount sink, new blown-in attic INSULATION, 40 YEAR ROOF(replaced 3 years ago), on DEMAND hot water tank, newer SS appliances, GAS range, 2 FIREPLACES, low maintenance back yard & oversized deck for entertaining. Mature fruit trees, RV PARKING & FULLY FENCED. Minutes to Perrinville & Edmonds. Enjoy local shops/restaurants and all that Edmonds has to offer! Easy access to I-5.", "https://photos.zillowstatic.com/fp/2071483ce933483ebdf4baa86289f512-cc_ft_1536.webp", "749990", 0],
    ["Move in ready!", "Moments from all that DT Snohomish has to offer and tucked away near the end of a no outlet street, sits a charming 3bed/1.75ba RAMBLER with 2 car garage. Sunlight streams in the bay window as you enter the front living ", "https://photos.zillowstatic.com/fp/21b652a3b6c85d155e86a7b958616df0-cc_ft_1536.webp", "525000", 2],
    ["Fantastic backyard", "This Renton rambler awaits its new owner. Walk into the spacious and light filled living space complete with a wood burning fireplace to snuggle up to on those chilly PNW evenings. Walk-in pantry and wide galley kitchen gives any ", "https://photos.zillowstatic.com/fp/c9dd8470f6ddf47923464596066457b4-cc_ft_1536.webp", "535000", 7],
    ["4 story home", "Welcome home to this updated farmhouse charmer, just minutes from downtown Port Orchard, the waterfront & Seattle ferry services. This beautiful home has fresh exterior white paint with black trim, new interior paint, updated ", "https://photos.zillowstatic.com/fp/b6ceb26bd82ff1d3b5dcedae0d241bc0-cc_ft_1536.webp", "850235", 4],
    ["Smaller than it looks", "Victorian Country home is a great opportunity within the highly desirable Cherry Hill area. Across the threshold, nice touches embrace you with hardwoods in foyer, bedrooms & living spaces. Living room boasts large windows, neutral ", "https://photos.zillowstatic.com/fp/9cefb2243e04e826e20b69e6fb72e62e-cc_ft_1536.webp", "135000", 113],
    ["A whopping 295 Sq feet!", "Investor special! Ceiling / trusses need work. Great price, cash only. 3 bedroom rambler on generous .48 acre! Updated  kitchen with newer cabinets, counters & appliances. Large living room with cozy wood insert that ", "https://photos.zillowstatic.com/fp/23236e7af7901a4a97f4ee5706b0f98c-cc_ft_1536.webp", "975699", 90],
    ["Actively undergoing pest control", "Let the sunshine in! This bright, open home is filled with natural light and fresh updates, including brand new carpet! The open concept living area and kitchen allow for ease of use--ideal for entertaining, or everyday enjoyment. The ", "https://photos.zillowstatic.com/fp/efa195b4739693e348aed87eda4757ba-cc_ft_1536.webp", "999876", 5],
    ["Only patio for purchase", "Let me introduce you to a little bit of paradise in the foothills! This Enumclaw charmer presents a full display of territorial views. Sip your morning coffee on the veranda & enjoy the evening sun peeking through the hops-draped ", "https://photos.zillowstatic.com/fp/fd622e0fd912137f195ebc691afb7c11-cc_ft_1536.webp", "120555", 2],
    ["The perfect home for hobbits transitioning to man's way of living", "Woodland charmer!", "https://photos.zillowstatic.com/fp/29ff53e197ae524a855cdde90249060c-cc_ft_1536.webp", "55999", 0],
    ["Just the postbox - Slot #12", "Downtown HR townhome with roof top terrace, private 2 car garage, and industrial vibe just 1 block from coffee shops, restaurants, and shopping. Commercially zoned and located within the historic and iconic Union Bldg. The expansive ", "https://photos.zillowstatic.com/fp/de8cd286a5c7ffee414f9717d26b557b-cc_ft_1536.webp", "345000", 0],
    ["Charming 2 bed 2 bath", "Three bedroom, 2 full bath home on 1.10 acres of land.  Updates throughout the home include: newer laminate flooring, vinyl windows, light fixtures, deck, interior & exterior paint, built-in hutch, double French doors, tub ", "https://photos.zillowstatic.com/fp/5fd3e82d3a0754b7e0620a62327540fb-cc_ft_1536.webp", "127000", 0],
    ["Horses not included", "A horse property 20 minutes from the amenities of Billings' downtown or King Ave? Yes, please! Don't miss this 3120 square foot, four bedroom, three bathroom ranch style home with a walk-out basement. The 9.378 acres is divided ", "https://photos.zillowstatic.com/fp/ce666833caf1c057457e36257ce0accd-cc_ft_1536.webp", "55000", 0],
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