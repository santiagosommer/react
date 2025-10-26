// Hooks
import { useState } from "react"

export default function FormComponent({ createNote }) {

    const [noteData, setNoteData] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNoteData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    return <form>
        <input
            name="title"
            onChange={handleChange}
            value={noteData.title}
        />
        <input
            name="content"
            onChange={handleChange}
            value={noteData.content}
        />
        <button
            type="button"
            onClick={() => {
                createNote({
                    key: crypto.randomUUID(),
                    title: noteData.title,
                    content: noteData.content
                })
                setNoteData({ title: "", content: "" });
            }}>
            Add
        </button>
    </form>
}