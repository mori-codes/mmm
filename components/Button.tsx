import { JSX } from "preact"
import { IS_BROWSER } from "$fresh/runtime.ts"
import { Participant } from "../types/participant.ts"

type Props = {
  variant: Participant["name"]
} & JSX.HTMLAttributes<HTMLButtonElement>

export function Button(props: Props) {
  const className = `${
    props.className ? props.className + " " : ""
  }block w-full rounded-md h-[50px] text-white ${
    props.variant === "Alvilux" ? "bg-green" : "bg-yellow"
  }
  `

  console.log(className)
  return <button {...props} className={className} />
}
