import { Divider } from "antd"
import ModalMedia from "./components/modal-select-img/ModalMedia"
import "./index.scss"

function App() {
  return (
    <>
      <ModalMedia></ModalMedia>
      <br className=""></br>
      <br className=""></br>
      <br className=""></br>
      <br className=""></br>

      <label htmlFor="image1" onClick={() => console.log("image")}>
        <input type="radio" id="image1" className="radio-select" name="image" />
        <img src="https://images.unsplash.com/photo-1682686578615-39549501dd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" style={{ width: "50%", height: "50%" }} className="image" />
      </label >
      <hr />
      <Divider></Divider>
      <label htmlFor="image2" onClick={() => console.log("image")}>
        <input type="radio" id="image2" className="radio-select" name="image" />
        <img src="https://images.unsplash.com/photo-1682686578615-39549501dd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" style={{ width: "50%", height: "50%" }} className="image" />

      </label >


    </>
  )
}

export default App
