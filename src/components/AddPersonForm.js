import React, {useState} from "react";

const AddPersonForm = () => {
    const [person, setPerson] = useState('')


    return (
        <form>
            <input type='text'/>
            <button onClick={console.log('click')}>Add person</button>
        </form>
    )
}

export default AddPersonForm;