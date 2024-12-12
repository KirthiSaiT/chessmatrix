import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
      </Avatar>


      </div>
    </>
  )
}

export default App
