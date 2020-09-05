import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({ data: null });

  useEffect(() => {
    callBackEnd()
      .then((res) => setState({ data: res.express }))
      .catch((err) => console.log(err));
  }, []);

  const callBackEnd = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    } else {
      return body;
    }
  };

  return (
    <div className="App">
      <h4>State.data: {state.data}</h4>
    </div>
  );
}

export default App;
