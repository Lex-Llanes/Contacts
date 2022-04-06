import { React, useState } from 'react'

const EditContact = (props) => {

    const [contactId, setId] = useState(props.contactDetails.contact_id)
    const [firstName, setFirstName] = useState(props.contactDetails.first_name)
    const [lastName, setLastName] = useState(props.contactDetails.last_name)
    const [contactEmail, setEmail] = useState(props.contactDetails.email)
    const [contactNumber, setNumber] = useState(props.contactDetails.phone_number)
    const [contactNotes, setNotes] = useState(props.contactDetails.notes)

    const handleEditSubmit = async (event) => {
        try {
            const body = { firstName, lastName, contactEmail, contactNumber, contactNotes };
            const response = await fetch(`http://localhost:8080/contact/${contactId}`,
                {
                    method: 'PUT',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                }
            );
        } catch (error) {
            console.error(error.message)
        }

    }
    console.log(firstName)

    return (
        <div>
            <form onSubmit={handleEditSubmit}>

                <label for="firstName" >Fist Name</label>
                <br/>
                <input 
                    id="firstName"
                    type="text"
                    placeholder="Edit First Name..."
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />
                <br/>
                <br/>

                <label for="lastName" >Edit Last Name</label>
                <br/>
                <input 
                    id="lastName"
                    type="text"
                    placeholder="Edit Last Name..."
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
                <br/>
                <br/>

                <label for="email" >Edit Email Address</label>
                <br/>
                <input 
                    id="email"
                    type="email"
                    placeholder="Edit Email Address..."
                    value={contactEmail}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <br/>
                <br/>

                <label for="contactNumber" >Edit Phone Number</label>
                <br/>
                <input 
                    id="contactNumber"
                    type="tel"
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    placeholder="Edit 1234567890"
                    value={contactNumber}
                    onChange={(event) => setNumber(event.target.value)}
                />
                <br/>
                <br/>

                <label for="contactNotes">Edit Notes</label>
                <br/>
                <input 
                    id="contactNotes"
                    type="text"
                    placeholder="Edit Notes..."
                    value={contactNotes}
                    onChange={(event) => setNotes(event.target.value)}
                />
                <br/>
                <br/>

                <input 
                    type="submit"
                    value="Submit"
                />

            </form>

        </div>
    )
}



export default EditContact;