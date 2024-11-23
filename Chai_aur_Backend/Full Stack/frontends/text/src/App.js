import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
  const fetchJokes = async () => {
    try {
      const response = await axios.get("/api/jokes");
      setJokes(response.data);
    } catch (error) {
      console.error("Error fetching jokes:", error);
      alert("Failed to fetch jokes. Please check the backend server.");
    }
  };

  fetchJokes();
}, []);


  
  return (
    <div>
      <header>
        <p>Chai and Full-Stack</p>
      </header>
      <main>
        <h2>Jokes:{jokes.length}</h2>
        <ul>
          {
            jokes.map((joke) => (
            <li key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
            </li>
               )
            )
          }
        </ul>
      </main>
    </div>
  );
}

export default App;
