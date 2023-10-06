import { Button, Input, Modal } from "antd";
import { useState } from "react";
import { Data, useMediaContext } from "../../hooks/useMediaContext";

const ButtonCreateFolder = () => {
    const { data, setData, newFolderName, setNewFolderName } = useMediaContext()
    console.log("🚀 ~ file: ButtonCreateFolder.tsx:17 ~ ButtonCreateFolder ~ newFolderName:", newFolderName)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCreateFolder = () => {
        const newFolder: Data = {
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
            <Modal title="Tạo thư mục" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input placeholder="Tên thư mục mới" onChange={(e) => (setNewFolderName(e.target.value))} />
            </Modal>
        </>
    )
};

export default ButtonCreateFolder;