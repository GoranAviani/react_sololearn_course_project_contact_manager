import React from "react";

const PeoplesList = ({contacts}) => {

    const listData = contacts.map((person, index) =>
        <li key={index}>{person}</li>
    )

    return (
        <div>
            <ul>
                {listData}
            </ul>
        </div>
    )
}

export default PeoplesList;