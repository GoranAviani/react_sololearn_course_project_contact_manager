import React from "react";

const PeoplesList = ({contacts}) => {

    const listData = contacts.map((person)=>
    <li>{person}</li>
    )

    return (
        <div>{listData}</div>
    )
}

export default PeoplesList;