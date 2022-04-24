import React, {useState} from "react";

const AddPersonForm = ({addContact}) => {
    const [person, setPerson] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addContact(person)
        setPerson('')
    }

    const handleChange = (e) => {
        setPerson(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={person} onChange={handleChange}/>
            <button type="submit">Add person</button>
        </form>
    )
}

export default AddPersonForm;