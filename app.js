// REQUIRING DEPENDENCIES
const express = require('express')
const app = express()
const mysql = require('mysql2')
const methodOverride = require('method-override')
const path = require('path')
const { info } = require('console')


// SET EJS AND MIDDLEWARE
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// DATABASE CONNECTION 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'food_manager'
})

connection.connect((err) => {
    if (err) {
        console.log('DATABASE CONNECTION FAILED', err)
    } else {
        console.log('CONNECTED TO DATABASE MYSQL')
    }
})

// START THE SERVER 
const PORT = 3000
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})

// FIRST ROUTE HOME PAGE SHOW ALL RECIPES
app.get('/recipes', (req, res) => {
    const Q = 'SELECT * FROM recipes'
    connection.query(Q, (err, results) => {
        if (err) {
            console.log(err)
            return res.send('ERROR FROM DATABASE')
        }
        res.render('recipes/index.ejs', { recipes: results })
    })
})

// FORM PAGE ROUTE TO SHOW ADD NEW RECIPE FORM 
app.get('/recipes/new', (req, res) => {
    res.render('recipes/new.ejs')
})


// HERE IS THE MAIN LOGIC + DB WORK TO ADD NEW RECIPE IN THE DATABASE
app.post('/recipes', (req, res) => {
    // TAKE ALL DATA FROM THE INPUT FORM
    const { id, name, description, ingredients, instructions } = req.body

    // WRITE A DATABASE QUERY TO ADD ALL OF THIS DATA - USE INSERT COMMAND 
    const Q = 'INSERT INTO recipes (id, name, description, ingredients, instructions) VALUES (?, ?, ?, ?, ?)'
    connection.query(Q, [id, name, description, ingredients, instructions], (err, result) => {
        if (err) {
            // ERROR 
            console.log(err)
            return res.send('ERROR IN DATABASE : (')
        }
        console.log('RECIPE ADDED SUCCESSFULLY') // ALL SET 
        res.redirect('/recipes') // REDIRECT TO THE HOME PAGE (SEND KARNA)
    })
})


// LETS MOVE TO THE SECOND WORKING THING WHICH IS MAKING THE VIEW BUTTON WORKING ! 
app.get('/recipes/:id', (req, res) => {
    // TAKE THE ID FROM THROGH THE RESULT SO IT WILL BE EASIER TO FIND THE RECIPE 
    const recipeId = req.params.id
    const Q = 'SELECT * FROM recipes WHERE id = ?'
    connection.query(Q, [recipeId], (err, result) => {
        if (err) {
            console.log(err)
            res.send('Error in Database : (')
        } else {
            res.render('recipes/show.ejs', { recipe: result[0] })
            // ALL THING TAKEN FROM RECIPE. AS IT IS SHOWING RESULT ON WORD
        }
    })
})



