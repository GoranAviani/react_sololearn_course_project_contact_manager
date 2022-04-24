import React, {useState} from "react";

const AddPersonForm = () => {
    const [person, setPerson] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setPerson(e.target.value)
        console.log(person)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={person} onChange={handleChange}/>
            <button type="submit">Add person</button>
        </form>
    )
}

export default AddPersonForm;