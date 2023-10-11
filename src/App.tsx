import ModalSection from "./components/ModalSection/ModalSection"
import { data } from "./components/ModalSection/data";

function App() {
  localStorage.setItem("data", JSON.stringify(data));

  return (
    <>
      {/* <ModalMedia></ModalMedia> */}
      <ModalSection></ModalSection>
    </>
  )
}

export default App
