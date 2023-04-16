import confetti from "confetti"
import { useEffect } from "preact/hooks"

const Confetti = () => {
  useEffect(() => {
    confetti({particleCount: 150, gravity: 0.2, ticks: Infinity})
  }, [])
  return <div></div>
}

export default Confetti
