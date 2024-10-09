export function ToDos({ todos }) {
    return (
        <div>
            {todos.map((todo, index) => (
                <div key={index}>
                    <h2>{todo.title}</h2>
                    <h3>{todo.description}</h3> {/* Corrected "desription" typo */}
                    <button>{todo.completed == true? "Completed" : "Mark as completed"}</button>
                </div>
            ))}
        </div>
    );
}
