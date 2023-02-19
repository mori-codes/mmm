import { useState, useEffect } from "preact/hooks"
import { formatMillisecondsToExtendedTime, getDurationBetweenDates } from "../utils/tools.ts"

const DAY_ZERO_ZERO_INSULT = "2023/03/01"

export default function TimerIsland() {
  const [timeLeft, setTimeLeft] = useState(
    getDurationBetweenDates(new Date(), new Date(DAY_ZERO_ZERO_INSULT)),
  )

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(prev => prev - 1000)
    }, 1000)

    if (timeLeft === 0) {
      clearInterval(timerId)
    }
    return () => clearInterval(timerId)
  }, [timeLeft])

  const { days, hours, minutes, seconds } = formatMillisecondsToExtendedTime(timeLeft)

  return (
    <h1>
      {days}d:{hours}h:{minutes}m:{seconds}s
    </h1>
  )
}
