import { useState } from "react"
import axios from "axios"

function App() {
  const [appName, setAppName] = useState("")
  const [result, setResult] = useState(null)

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:8000/analyze", {
      app_name: appName
    })
    setResult(response.data)
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>App Privacy Scanner</h1>
      <input
        type="text"
        placeholder="Enter app name..."
        value={appName}
        onChange={(e) => setAppName(e.target.value)}
      />
      <button onClick={handleSubmit}>Scan</button>

      {result && <p>{result.message}</p>}
    </div>
  )
}

export default App