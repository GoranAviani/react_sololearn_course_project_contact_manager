import React from "react";

import PeoplesList from "./components/PeoplesList";
import AddPersonForm from "./components/AddPersonForm";

const CONTACTS = ['person1', 'person2', 'person3']

const App = () => {

    return (
        <div>
            <AddPersonForm></AddPersonForm>
            <PeoplesList contacts={CONTACTS}/>
        </div>
    )
}


export default App;