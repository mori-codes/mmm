import { useState } from "preact/hooks"
import { Button } from "../components/Button.tsx"

interface CounterProps {
  start: number
}

export default function Counter({ start }: CounterProps) {
  const [count, setCount] = useState(start)

  return (
    <div class="flex gap-2 w-full">
      {[23, 432, 14, 234, 34].map(wili => (
        <h1>{wili}</h1>
      ))}
      <p class="flex-grow-1 font-bold text-xl">{count}</p>
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </div>
  )
}
