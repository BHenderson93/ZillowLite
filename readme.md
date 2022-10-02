# Hello and welcome ZillowLite
This application allows users to view listings, add new homes, and like them.

# Using the app
Start the application by installing all packages - "npm i"
Start the server first by running "nodemon server" - which should start at port 3000
Start the app by running "npm run start" and selecting Y to start the app on a different port.
Access the app at http://localhost:3001/ or the port that you have the app running on. 
Database will automatically seed and persist data.

# Buildout direction
With more time, I would incorporate Tailwind CSS for a better frontend appearance, as well as instantiating Users and likes as SQL tables. Currently, likes are displayed by tally and that system can be gamed. Instead of this setup, I would have a table containing a list of likes, which includes columns for User_ID and Home_ID. To find the like count, `SELECT Count(User_ID) FROM likes WHERE Home_ID=${req.body.Home_ID};` within the controller. Whenever a like button is clicked, an if else statement can be used - such as

        const liked = db.run(`SELECT Count(User_ID) FROM likes WHERE Home_ID=${req.body.Home_ID};`)
        if(liked > 0){
            db.run(`DELETE FROM likes WHERE User_ID=${req.body.User_ID} AND Home_ID=${req.body.Home_ID};`)
            // Error handling goes here
            res.json({
                "message":"-1"
            })
        }else{
            db.run(`INSERT INTO likes (User_ID, Home_ID) VALUES(?,?);`, [req.body.User_ID, req.body.Home_ID])
            // Error handling goes here
            res.json({
                "message":"+1"
            })
        }

After receiving the return value from the controller, increment the front end display of likes by the message's value.

# Notes
While not the most beautiful app, it should cover all the necessary technical aspects of this challenge.
* DB: 
    1. SQLite
    2. Includes title, description, product image, price, and likes
    3. Populated with 12 examples
* Backend API: 
    1. Supports CRUD
    2. Supports GET requests - single page view data pulled from inital GET request for faster page load times
    3. Includes POST routes for adding and deleting likes with data validations.
* Frontend client:
    1. React
    2. Scrollable main page with all available products - displaying title, image, likes, and price
    3. Single-page view with additional details - includes display of description as well as like button to like/unlike a particular home.
    4. Back button to return to main page

