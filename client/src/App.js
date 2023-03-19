import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState("");
  useEffect(() => {
    async function apiCall() {
      try {
        const res = await fetch("http://localhost:3333/");
        const result = await res.json();
        console.log("result:", result);
        setValue(result?.message ?? "something went wrong!!");
      } catch (error) {
        console.log(error);
      }
    }
    apiCall();
  }, []);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        className="App-header"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {value}
        <span>asdasdasd</span>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
