import React, {useState} from "react";

const AddPersonForm = () => {
    const [person, setPerson] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text'/>
            <button type="submit">Add person</button>
        </form>
    )
}

export default AddPersonForm;