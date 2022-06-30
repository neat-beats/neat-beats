import './NewCreation.css';

import { useState, useRef } from 'react';

const NewCreation = ({ type, onCreation, displayRef }) => {
    const [name, setName] = useState("");
    const [isPrivate, setIsPrivate] = useState(false);

    const nameInput = useRef();
    const isPrivateInput = useRef();

    const closePrompt = (event) => {
        if (!event || event.target === event.currentTarget) {
            displayRef.current.style.display = "none";
            nameInput.current.value = "";
            isPrivateInput.current.value = false;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (onCreation(nameInput.current.value, isPrivateInput.current.value)) {
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

    const handleIsPrivateChange = (event) => {
        setIsPrivate(event.target.value);
    }

    return (
        <div className="newcreation" ref={displayRef} onClick={closePrompt}>
            <div id="panel">
                <form onSubmit={handleSubmit}>
                    <label>New {type ? type : ""} Name: <input type="text" name="name" ref={nameInput}
                        onChange={handleNameChange} /></label><br />
                    <label id="check">Initially Private <input type="checkbox" name="private" ref={isPrivateInput}
                        onChange={handleIsPrivateChange} /></label><br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
}

export default NewCreation;