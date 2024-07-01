import './App.css'
import Codearea from './components/codearea'

function App() {
  console.log("reloaded")
  return (
    <>
      <h1>Simple code editor</h1>
      <div className="card">
        <p>
          A simple code editor with syntax highlighting.
        </p>
      </div>
      <Codearea/>
    </>
  )
}

export default App
