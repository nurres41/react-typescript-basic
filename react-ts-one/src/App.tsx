import { useRef } from "react"
import Button from "./components/Button"
import Input from "./components/Input"

function App() {

  const input = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Input label="deneme" id="asdasd" ref={input} />
    </main>
  )
}

export default App
