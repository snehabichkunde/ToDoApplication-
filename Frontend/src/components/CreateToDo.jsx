import { useState } from "react";

export function CreateToDo({ setTodos }) {  // Receive setTodos as a prop
    const containerStyle = { /* styles */ };
    const inputStyle = { /* styles */ };
    const buttonStyle = { /* styles */ };
    const buttonHoverStyle = { /* styles */ };

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div style={containerStyle}>
            <input 
                type="text" 
                placeholder="Title" 
                style={inputStyle} 
                value={title}  // Controlled input
                onChange={(e) => setTitle(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Description" 
                style={inputStyle} 
                value={description}  // Controlled input
                onChange={(e) => setDescription(e.target.value)} 
            />
            <button 
                style={buttonStyle} 
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor} 
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                onClick={() => {
                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description
                        }),
                        headers: {
                            "Content-Type": "application/json"  // Fix typo
                        }
                    })
                    .then(async function(res) {
                        if (!res.ok) {
                            throw new Error('Network response was not ok');
                        }
                        const json = await res.json();
                        setTodos((prevTodos) => [...prevTodos, json.todo]);  // Properly update todos
                    })
                    .catch(function(error) {
                        console.error('Fetch operation failed:', error);
                    });
                }}
            >
                Add Todo
            </button>
        </div>
    );
}
