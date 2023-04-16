import { JSX } from "preact"
import { Participant } from "../types/participant.ts"

type Props = {
  variant: Participant["name"]
  disabled: boolean
} & JSX.HTMLAttributes<HTMLButtonElement>

export function Button(props: Props) {
  const className = `${
    props.className ? props.className + " " : ""
  }block w-full rounded-md h-[50px] text-white ${
    props.disabled ? "bg-black" : props.variant === "Alvilux" ? "bg-green" : "bg-yellow"
  }
  `

  return <button {...props} className={className} />
}
