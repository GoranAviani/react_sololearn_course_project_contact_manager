import React, {useState} from "react";

import PeoplesList from "./components/PeoplesList";
import AddPersonForm from "./components/AddPersonForm";

const CONTACTS = ['person1', 'person2', 'person3']

const App = () => {
    const [contacts, setContacts] = useState(CONTACTS)

    return (
        <div>
            <AddPersonForm/>
            <PeoplesList contacts={contacts}/>
        </div>
    )
}


export default App;