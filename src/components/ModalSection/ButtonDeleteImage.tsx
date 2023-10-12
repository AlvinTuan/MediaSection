import { ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useMediaContext } from "../../hooks/useMediaContext";
import { useEffect } from "react";


const { confirm } = Modal;

const ButtonDeleteImage = () => {
    const { data, setData, selectedFolder, selectedImageById } = useMediaContext()
    const selectedFolderIndex = data.findIndex(folder => folder.nameFolder === selectedFolder);

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data));
    }, [data]);

    const handleDeleteFile = (folderIndex: number) => {
        const updatedMediaData = [...data];
        if (folderIndex !== -1) {
            updatedMediaData[folderIndex].images = updatedMediaData[folderIndex].images.filter(image => image.id !== selectedImageById) // Xóa tệp khỏi mảng images
            setData(updatedMediaData); // Cập nhật dữ liệu trong state
        }
    };
    const showDeleteConfirm = () => {
        confirm({
            title: 'Bạn có muốn xóa ảnh đã chọn?',
            icon: <ExclamationCircleFilled />,
            okText: 'Xác nhận',
            okType: 'danger',
            cancelText: 'Hủy',
            onOk() {
                handleDeleteFile(selectedFolderIndex)
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    return (
        <Button onClick={showDeleteConfirm} type="primary" danger>
            Xóa
        </Button>
    );
};

export default ButtonDeleteImage;