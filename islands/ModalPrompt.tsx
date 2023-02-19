import { useState } from "preact/hooks"
import { Button } from "../components/Button.tsx"
import { Modal } from "../components/Modal.tsx"
import { TwoStepsForm } from "../components/TwoStepsForm.tsx"
import { Participant } from "../types/participant.ts"


type Props = {
  password: string
}

const ModalPrompt = ({ password }: Props) => {
  const [selectedParticipant, setSelectedParticipant] = useState<Participant["name"] | undefined>()
  
  const checkPassword = (attempt: string) => {
    return attempt === password
  }

  return (
    <>
      <Button variant="Alvilux" onClick={() => setSelectedParticipant("Alvilux")}>
        Alvilux
      </Button>
      <Button variant="Toca" onClick={() => setSelectedParticipant("Toca")} className="mt-4">
        Toca
      </Button>
      <Modal
        open={selectedParticipant !== undefined}
        onClose={() => setSelectedParticipant(undefined)}
      >
        {selectedParticipant ? (
          <TwoStepsForm variant={selectedParticipant} checkPassword={checkPassword} />
        ) : null}
      </Modal>
    </>
  )
}

export default ModalPrompt
