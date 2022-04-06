import { React, useState, useEffect } from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactEmail, setEmail] = useState("");
    const [contactNumber, setNumber] = useState("");
    const [contactNotes, setNotes] = useState("");

    const handleContactSubmit = async (event) => {

        try {
            const body = { firstName, lastName, contactEmail, contactNumber, contactNotes }
            const response = await fetch("http://localhost:8080/contact", 
                {method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
                }
            )
            console.log(response)
        } catch (error) {
            console.error(error.message)
        }
    }



    return (

    <div>
        <h1>Add Contact</h1>
        <form id="contactForm" onSubmit={handleContactSubmit}>

            <label for="firstName" >Fist Name</label>
            <br/>
            <input 
                id="firstName"
                type="text"
                required
                placeholder="First Name..."
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
            />
            <br/>
            <br/>

            <label for="lastName" >Last Name</label>
            <br/>
            <input 
                id="lastName"
                type="text"
                required
                placeholder="Last Name..."
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
            />
            <br/>
            <br/>

            <label for="email" >Email Address</label>
            <br/>
            <input 
                id="email"
                type="email"
                required
                placeholder="Email Address..."
                value={contactEmail}
                onChange={(event) => setEmail(event.target.value)}
            />
            <br/>
            <br/>

            <label for="contactNumber" >Phone Number</label>
            <br/>
            <input 
                id="contactNumber"
                type="tel"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                required
                placeholder="1234567890"
                value={contactNumber}
                onChange={(event) => setNumber(event.target.value)}
            />
            <br/>
            <br/>

            <label for="contactNotes" >Notes</label>
            <br/>
            <input 
                id="contactNotes"
                type="text"
                placeholder="Notes..."
                value={contactNotes}
                onChange={(event) => setNotes(event.target.value)}
            />
            <br/>
            <br/>

            <input 
                type="submit"
                value="Submit"
            />
            <br/>
            <br/>

        </form>
        <div>-----------------------------------------------------------------------------</div>
    </div>

    )
}

export default Form;