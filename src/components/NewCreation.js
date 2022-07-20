import './NewCreation.css';

import { useState, useRef, useContext } from 'react';
import { LangContext } from '../sharedData';

const NewCreation = ({ type, onCreation, displayRef, nameInput }) => {
    const lang = useContext(LangContext);
    const [name, setName] = useState("");

    const dict = {
        err: ["This name is already in use.", "Este nome já está sendo usado."],
        name: ["New Song Name: ", "Nome da Nova Música: "],
        group: ["New Group Name: ", "Nome do Novo Grupo: "],
        create: ["Create", "Cria"],
    };

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
            nameInput.current.setCustomValidity(dict.err[lang]);
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
                    <label>{type === 0 ? dict.group[lang] : dict.name[lang]} <input type="text" name="name" ref={nameInput}
                        onChange={handleNameChange}/></label><br />
                    <input type="submit" value={dict.create[lang]} />
                </form>
            </div>
        </div>
    );
}

export default NewCreation;