import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { API_URL } from "./core/constants";
function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/ping`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => {
        console.error(error);
        setMessage("Error fetching data");
      });
  }, []);

  return (
    <div>
      <label>
        Input:{" "}
        <input type="text" onChange={(e) => setMessage(e.target.value)} />
      </label>
      <hr />
      <label>Output: {message}</label>
    </div>
  );
}

export default App;
