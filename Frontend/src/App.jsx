import { useState, useEffect } from 'react';
import { CreateToDo } from './components/CreateToDo';
import { ToDos } from './components/ToDos';

function App() {
  const [todos, setTodos] = useState([]);

  // Fetching todos from the backend when the component mounts
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async function(res) {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await res.json();
        setTodos(json.todos);  // Properly update todos
      })
      .catch(function(error) {
        console.error('Fetch operation failed:', error);
      });
  }, []);  // Empty array means this will run once when the component mounts

  return (
    <div>
      <CreateToDo setTodos={setTodos} />  {/* Pass setTodos as a prop */}
      <ToDos todos={todos} />  {/* Pass todos to ToDos */}
    </div>
  );
}

export default App;
