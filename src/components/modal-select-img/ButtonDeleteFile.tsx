import { useEffect } from "react";
import MediaData from "./data.json"
import { useMediaContext } from "../../hooks/useMediaContext";
import { Button } from "antd";
import { DeleteOutlined } from '@ant-design/icons';

interface props {
    selectFolder: string
}

const ButtonDeleteFile = ({ selectFolder }: props) => {
    const selectedFolderIndex = MediaData.findIndex(item => item.nameFolder === selectFolder);
    const { data, setData, selectImage, setSelectImage } = useMediaContext()
    console.log("🚀 ~ file: ButtonDeleteFile.tsx:14 ~ ButtonDeleteFile ~ data:", data)
    console.log("🚀 ~ file: ButtonDeleteFile.tsx:14 ~ ButtonDeleteFile ~ selectImage:", selectImage)

    useEffect(() => {
        // Mỗi khi mediaData thay đổi, lưu nó vào local storage
        localStorage.setItem("mediaData", JSON.stringify(data));
    }, [data]);

    const handleDeleteFile = (folderIndex: number, fileIndex: string) => {
        const updatedMediaData = [...data];
        if (folderIndex !== -1) {
            updatedMediaData[folderIndex].images = updatedMediaData[folderIndex].images.filter(item => item.id !== fileIndex) // Xóa tệp khỏi mảng images
            setData(updatedMediaData); // Cập nhật dữ liệu trong state
            setSelectImage({ urlImage: "", extension: "", timeUpload: "", id: "" })
        }
    };
    return (
        <Button danger onClick={() => handleDeleteFile(selectedFolderIndex, selectImage.id)}><DeleteOutlined />Xóa</Button>
    );
};

export default ButtonDeleteFile;