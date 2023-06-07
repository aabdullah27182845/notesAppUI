import { useState } from "react";

const Notes = () => {

    const [elements, setElements] = useState([]);

    // elements [{id, title, description}] - each mapped accordingly

    const changeElements = () => {
        setElements([...elements, 
        <div className="note" key={4}>
            <h2>Hello</h2>
        </div>])
    }

    for (let i = 0; i < 3; i++) {
        elements.push(
        <div className="note" key={i}>
            <h2>Hello</h2>
        </div>);
    }

    return ( 
        <div className="notes">
            <button>Create New Note</button>
            <div className="note-container">
                <div className="note">
                    <h2>Hello</h2>
                </div>
                { elements }
            </div>
            <button onClick={changeElements}>Hello</button>
        </div>
     );
}
 
export default Notes;