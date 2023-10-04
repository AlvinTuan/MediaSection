import "./ModalSelectImg.scss"
import { Button, Divider, Row } from "antd";
import DetailsInfomation from "./DetailsInfomation";
import { createPortal } from "react-dom";
import FolderList from "./FolderList";
import MediaData from "./data.json"
import { createContext, useContext, useState } from "react";

interface ModalProps {
    open: boolean,
    handleClose?: () => void
}

type data = {
    id: number;
    nameFolder: string;
    images: {
        nameImage: string
        urlImage: string;
    }[];
}

type Image = {
    nameImage: string
    urlImage: string;
}

type Props = {
    children?: React.ReactNode
}

type MediaContext = {
    mediaUrl: string
    setMediaUrl: React.Dispatch<React.SetStateAction<string>>
    newFolderName: string
    setNewFolderName: React.Dispatch<React.SetStateAction<string>>
    data: data[]
    setData: React.Dispatch<React.SetStateAction<data[]>>
    selectImage: Image,
    setSelectImage: React.Dispatch<React.SetStateAction<Image>>

}

const MediaContext = createContext<MediaContext>(null!);

function MediaProvider({ children }: Props) {
    const [mediaUrl, setMediaUrl] = useState<string>("");
    const [newFolderName, setNewFolderName] = useState<string>("")
    const [data, setData] = useState(MediaData);
    const [selectImage, setSelectImage] = useState<Image>({ nameImage: "", urlImage: "" })
    return <MediaContext.Provider
        value={{ mediaUrl, setMediaUrl, newFolderName, setNewFolderName, data, setData, selectImage, setSelectImage }}
    >
        {children}
    </MediaContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMediaContext() {
    const mediaContext = useContext(MediaContext)
    if (!mediaContext) {
        throw new Error("mediaContext has to be used within <MediaContext.Provider>")
    }
    return mediaContext
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
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