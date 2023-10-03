import { Button, Input, Modal } from "antd";
import { Dispatch, SetStateAction, useState } from "react";
import { useMediaContext } from "./ModalSelectImg";

interface IFolderType {
    id: number
    nameFolder: string
    images: {
        urlImage: string
    }[]
}

const ButtonCreateFolder = () => {
    const { data, setData, newFolderName, setNewFolderName } = useMediaContext()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCreateFolder = () => {
        const newFolder: IFolderType = {
            id: data.length + 1,
            nameFolder: newFolderName,
            images: []
        }
        setData(prevData => [...prevData, newFolder])
        setNewFolderName("")
    }

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        handleCreateFolder()
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal} style={{ "float": "right" }}>
                Tạo thư mục
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input placeholder="Tên thư mục mới" onChange={(e) => (setNewFolderName(e.target.value))} />
            </Modal>
        </>
    )
};

export default ButtonCreateFolder;