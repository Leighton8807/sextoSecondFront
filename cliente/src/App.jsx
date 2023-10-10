import { useState } from 'react'
import ChatClient from './components/ChatClient/ChatClient'
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Chat-io</h1>
      <ChatClient />
    </div>
  )
}

export default App
