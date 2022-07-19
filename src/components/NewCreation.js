import './NewCreation.css';

import { useState, useRef } from 'react';

const NewCreation = ({ type, onCreation, displayRef }) => {
    const [name, setName] = useState("");

    const nameInput = useRef();

    const closePrompt = (event) => {
        if (!event || event.target === event.currentTarget) {
            displayRef.current.style.display = "none";
            nameInput.current.value = "";
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (onCreation(nameInput.current.value)) {
            closePrompt(null);
        } else {
            nameInput.current.setCustomValidity("This name is already in use.");
            nameInput.current.reportValidity();
        }
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
        nameInput.current.setCustomValidity("");
        nameInput.current.reportValidity();
    }

    return (
        <div className="newcreation" ref={displayRef} onClick={closePrompt}>
            <div id="panel">
                <form onSubmit={handleSubmit}>
                    <label>New {type ? type : ""} Name: <input type="text" name="name" ref={nameInput}
                        onChange={handleNameChange} /></label><br />
                    <input type="submit" value="Create" />
                </form>
            </div>
        </div>
    );
}

export default NewCreation;