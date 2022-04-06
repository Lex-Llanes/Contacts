const express = require('express');
const cors = require('cors');
require('dotenv').config()
const db = require('../server/db/db-connection.js'); 

const app = express();

const PORT = 8080;
app.use(cors());
app.use(express.json());

//creates an endpoint for the route /api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from My ExpressJS' });
});


/*++++++++++++++++
------ROUTES------
*****************/


//ADD CONTACT INFO ROUTE
app.post('/contact', async (req, res) => {
    try {
        const { firstName } = req.body;
        const { lastName } = req.body;
        const { contactEmail } = req.body;
        const { contactNumber } = req.body;
        const { contactNotes } = req.body;

        const newContact = await db.query (
            'INSERT INTO contactinfo(last_name, first_name, email, phone_number, notes) VALUES($1, $2, $3, $4, $5) RETURNING *', 
            [lastName, firstName, contactEmail, contactNumber, contactNotes]
        )

        res.json(newContact.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})


//GET ALL CONTACTS ROUTE
app.get('/contact',  async (req, res) => {
    try {
        const allContacts = await db.query('SELECT * FROM contactinfo');

        res.json(allContacts.rows)
    } catch (error) {
        console.error(error.message)
    }
})


//UPDATE A CONTACT
app.put('/contact/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName } = req.body;
        const { lastName } = req.body;
        const { contactEmail } = req.body;
        const { contactNumber } = req.body;
        const { contactNotes } = req.body;

        //We will use an update query to update contact informations
        const updateContact = await db.query(
            'UPDATE contactinfo SET last_name = $1, first_name = $2, email = $3, phone_number = $4, notes = $5 WHERE contact_id = $6',
            [lastName, firstName, contactEmail, contactNumber, contactNotes, id]
        )
    } catch (error) {
        console.error(error.message)
    }
})




// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});