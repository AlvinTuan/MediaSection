import "./ModalSelectImg.scss"
import { Button, Divider, Row } from "antd";
import DetailsInfomation from "./DetailsInfomation";
import { createPortal } from "react-dom";
import FolderList from "./FolderList";
import { MediaProvider } from "../../hooks/useMediaContext";

interface ModalProps {
    open: boolean,
    handleClose?: () => void
}

const ModalSelectImg: React.FC<ModalProps> = ({ open = false, handleClose = () => { } }: ModalProps) => {
    if (typeof document === "undefined") return <div className="modal"></div >
    return createPortal(
        <div className={`modal ${open ? "" : "show-modal"} `} style={{ padding: "0px 32px" }}>
            <div className="overlay" onClick={handleClose}></div>
            <div className="modal-content">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <MediaProvider>
                        <FolderList></FolderList>
                        <DetailsInfomation></DetailsInfomation>
                    </MediaProvider>
                </Row>
                <Divider></Divider>
                <div className="button-section">
                    <Button type="primary" danger onClick={handleClose}>Đóng</Button>
                    <Button type="primary">
                        Sử dụng
                    </Button>
                </div>
            </div>
        </div >,
        document.querySelector("body")!
    )




};

export default ModalSelectImg;