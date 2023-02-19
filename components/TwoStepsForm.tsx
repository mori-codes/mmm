import { useState } from "preact/hooks"
import { Participant } from "../types/participant.ts"

type Props = {
  variant: Participant["name"]
  checkPassword: (password: string) => boolean
}

const TwoStepsForm = ({ variant, checkPassword }: Props) => {
  const [password, setPassword] = useState("")
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="w-full h-full flex flex-col">
      <div
        className={`w-full text-center py-6 text-white ${
          variant === "Alvilux" ? "bg-green" : "bg-yellow"
        }`}
      >
        <p className="text-2xl">Noo {variant}, que hiciste</p>
      </div>

      <div className="flex flex-grow items-center justify-center">
        {!showForm ? (
          <div>
            <label for="password" className="block text-2xl">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              className="h-[60px] w-60 border-1 border-black px-2 mt-2 text-3xl"
              value={password}
              onChange={e => setPassword(e.currentTarget.value)}
            />
            <button
              className="block w-full rounded-md h-[50px] text-white bg-black mt-8"
              onClick={() => {
                if (checkPassword(password)) {
                  setShowForm(true)
                }
              }}
            >
              Validar
            </button>
          </div>
        ) : (
          <form>
            <div>
              <label for="faul" className="block text-2xl">
                Seleccione penalización:
              </label>
              <select
                id="faul"
                name="faul"
                className="h-[60px] w-full border-1 border-black px-4 mt-2 text-2xl"
              >
                <option value={3} className="text-base">
                  Falta leve +3
                </option>
                <option value={5} className="text-base">
                  Falta grave +5
                </option>
              </select>
            </div>
            <div className="mt-8">
              <label for="description" className="block text-2xl">
                Descripción:
              </label>
              <textarea
                id="description"
                name="description"
                className="h-60 w-full border-1 border-black p-4 mt-2 text-2xl"
              />
            </div>
            <button
              type="submit"
              className="block w-full rounded-md h-[50px] text-white bg-black mt-8"
            >
              Enviar
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export { TwoStepsForm }
