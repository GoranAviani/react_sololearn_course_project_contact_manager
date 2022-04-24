import React from "react";

import PeoplesList from "./components/PeoplesList";

const CONTACTS = ['person1', 'person2', 'person3']

const App = () => {

    return (
        <div>
            <PeoplesList contacts={CONTACTS}/>
        </div>
    )
}


export default App;