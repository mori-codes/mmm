import { PreactDOMAttributes } from "preact"

type Props = {
  open: boolean
  onClose: () => void
  children?: PreactDOMAttributes["children"]
}

const Modal = ({ open, onClose, children }: Props) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`absolute w-screen h-screen bg-black top-0 left-0 opacity-30 z-10 ${
          open ? "flex" : "hidden"
        }`}
      ></div>
      <div className={`absolute w-full h-full opacity-1 top-0 left-0 ${open ? "flex" : "hidden"} `}>
        <div className="mx-4 my-16 bg-white flex-grow z-20 shadow-lg">{children}</div>
      </div>
    </>
  )
}

export { Modal }
